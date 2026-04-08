import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCountryBySlug, getGlobalCityBySlug, getCitiesByCountry } from '@/data/countries';
import { usePrayerTimes, getNextPrayer } from '@/hooks/usePrayerTimes';
import { TranslationKey } from '@/i18n/translations';
import { Bell, Clock, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

const azanPrayers: { key: TranslationKey; field: string }[] = [
  { key: 'fajr', field: 'fajr' },
  { key: 'dhuhr', field: 'dhuhr' },
  { key: 'asr', field: 'asr' },
  { key: 'maghrib', field: 'maghrib' },
  { key: 'isha', field: 'isha' },
];

interface MonthlyDay {
  date: string;
  timings: Record<string, string>;
  hijri: { day: string; month: { en: string; ar: string }; year: string };
}

export default function AzanTimesCityPage() {
  const { countrySlug, citySlug } = useParams<{ countrySlug: string; citySlug: string }>();
  const { t, lang } = useLanguage();
  const country = getCountryBySlug(countrySlug || '');
  const city = getGlobalCityBySlug(countrySlug || '', citySlug || '');
  const { times, loading } = usePrayerTimes(city?.lat, city?.lng);
  const [nextPrayer, setNextPrayer] = useState(getNextPrayer(times));
  const [monthlyData, setMonthlyData] = useState<MonthlyDay[]>([]);
  const [monthOffset, setMonthOffset] = useState(0);
  const [monthLoading, setMonthLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setNextPrayer(getNextPrayer(times)), 30000);
    setNextPrayer(getNextPrayer(times));
    return () => clearInterval(interval);
  }, [times]);

  useEffect(() => {
    if (!city) return;
    setMonthLoading(true);
    const d = new Date();
    d.setMonth(d.getMonth() + monthOffset);
    fetch(`https://api.aladhan.com/v1/calendar/${d.getFullYear()}/${d.getMonth() + 1}?latitude=${city.lat}&longitude=${city.lng}&method=4`)
      .then(r => r.json())
      .then(data => {
        setMonthlyData(data.data.map((day: any) => ({
          date: day.date.gregorian.date,
          timings: {
            Fajr: day.timings.Fajr?.split(' ')[0],
            Dhuhr: day.timings.Dhuhr?.split(' ')[0],
            Asr: day.timings.Asr?.split(' ')[0],
            Maghrib: day.timings.Maghrib?.split(' ')[0],
            Isha: day.timings.Isha?.split(' ')[0],
          },
          hijri: day.date.hijri,
        })));
      })
      .catch(() => {})
      .finally(() => setMonthLoading(false));
  }, [city, monthOffset]);

  const cityName = city ? (lang === 'ar' ? city.nameAr : city.nameEn) : '';
  const countryName = country ? (lang === 'ar' ? country.nameAr : country.nameEn) : '';
  const monthDate = new Date();
  monthDate.setMonth(monthDate.getMonth() + monthOffset);
  const monthLabel = monthDate.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { month: 'long', year: 'numeric' });

  useEffect(() => {
    if (!city || !country) return;
    document.title = lang === 'ar'
      ? `أوقات الأذان في ${city.nameAr}، ${country.nameAr} - مواقيت`
      : `Azan Times in ${city.nameEn}, ${country.nameEn} - Mawaqit`;
  }, [city, country, lang]);

  if (!city || !country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">{lang === 'ar' ? 'المدينة غير موجودة' : 'City not found'}</h1>
        <Link to="/azan-times" className="mt-4 inline-block text-primary underline">← {lang === 'ar' ? 'العودة' : 'Back'}</Link>
      </div>
    );
  }

  const otherCities = getCitiesByCountry(countrySlug || '').filter(c => c.slug !== citySlug).slice(0, 15);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `Azan Times in ${city.nameEn}, ${country.nameEn}`,
            description: `Daily azan (call to prayer) times for ${city.nameEn}, ${country.nameEn}`,
          }),
        }}
      />

      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <nav className="mb-4 flex items-center gap-2 text-sm opacity-70">
            <Link to="/azan-times" className="hover:underline">{lang === 'ar' ? 'أوقات الأذان' : 'Azan Times'}</Link>
            <span>/</span>
            <Link to={`/azan-times/${countrySlug}`} className="hover:underline">{countryName}</Link>
            <span>/</span>
            <span className="font-semibold">{cityName}</span>
          </nav>
          <Bell className="mb-3 h-8 w-8 text-gold" />
          <h1 className="font-heading text-3xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? `أوقات الأذان في ${cityName}` : `Azan Times in ${cityName}`}
          </h1>
          <p className="mt-2 text-sm opacity-70">{countryName}</p>

          {nextPrayer && nextPrayer.name !== 'sunrise' && (
            <div className="mt-6 inline-flex items-center gap-4 rounded-xl bg-primary-foreground/10 px-6 py-3 backdrop-blur-sm">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">{lang === 'ar' ? 'الأذان القادم' : 'Next Azan'}</p>
                <p className="font-heading text-xl font-bold text-gold">{t(nextPrayer.name as TranslationKey)}</p>
              </div>
              <div className="text-2xl font-bold">{nextPrayer.time}</div>
              <div className="flex items-center gap-1 text-sm opacity-70">
                <Clock className="h-3 w-3" />
                <span>{nextPrayer.remaining}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {times && (
        <section className="container mx-auto -mt-6 px-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {azanPrayers.map(p => (
              <div key={p.field} className="rounded-xl bg-card p-4 text-center shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {lang === 'ar' ? `أذان ${t(p.key)}` : `${t(p.key)} Azan`}
                </p>
                <p className="mt-1 font-heading text-xl font-bold text-foreground">{(times as any)[p.field]}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-6">
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">
            {lang === 'ar' ? 'هل تبحث عن مواقيت الصلاة الكاملة؟' : 'Looking for full prayer times?'}
          </p>
          <Link
            to={`/prayer-times/${countrySlug}/${citySlug}`}
            className="mt-2 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            {lang === 'ar' ? `مواقيت الصلاة في ${cityName}` : `Prayer Times in ${cityName}`}
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {lang === 'ar' ? 'جدول الأذان الشهري' : 'Monthly Azan Timetable'}
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => setMonthOffset(p => p - 1)} className="rounded-lg bg-card p-2 shadow hover:bg-accent"><ChevronLeft className="h-4 w-4" /></button>
            <span className="min-w-[140px] text-center text-sm font-semibold">{monthLabel}</span>
            <button onClick={() => setMonthOffset(p => p + 1)} className="rounded-lg bg-card p-2 shadow hover:bg-accent"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
        {monthLoading ? (
          <div className="flex items-center justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-2 text-start">{lang === 'ar' ? 'التاريخ' : 'Date'}</th>
                  <th className="px-3 py-2 text-start">{lang === 'ar' ? 'هجري' : 'Hijri'}</th>
                  {azanPrayers.map(p => (
                    <th key={p.field} className="px-3 py-2 text-center">{lang === 'ar' ? `أذان ${t(p.key)}` : `${t(p.key)}`}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((day, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                    <td className="whitespace-nowrap px-3 py-2">{day.date}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-muted-foreground">
                      {day.hijri.day} {lang === 'ar' ? day.hijri.month.ar : day.hijri.month.en}
                    </td>
                    {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map(k => (
                      <td key={k} className="px-3 py-2 text-center">{day.timings[k]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <h2 className="font-heading text-lg font-bold text-foreground">
            {lang === 'ar' ? `عن أوقات الأذان في ${cityName}` : `About Azan Times in ${cityName}`}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {lang === 'ar'
              ? `أوقات الأذان في ${cityName} تُحسب بدقة بناءً على الموقع الجغرافي للمدينة. يُرفع الأذان خمس مرات يومياً عند الفجر والظهر والعصر والمغرب والعشاء. يمكنك الاطلاع على جدول الأذان الشهري أعلاه لمعرفة أوقات الأذان لكل يوم.`
              : `Azan times in ${cityName} are calculated precisely based on the city's geographical coordinates. The azan is called five times daily at Fajr, Dhuhr, Asr, Maghrib, and Isha. View the monthly azan timetable above for daily azan schedules.`}
          </p>
        </div>
      </section>

      {otherCities.length > 0 && (
        <section className="bg-emerald-light px-4 py-10">
          <div className="container mx-auto">
            <h2 className="mb-4 font-heading text-lg font-bold text-foreground">
              {lang === 'ar' ? `أوقات الأذان في مدن أخرى` : `Azan Times in Other Cities`}
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {otherCities.map(c => (
                <Link key={c.slug} to={`/azan-times/${countrySlug}/${c.slug}`}
                  className="rounded-lg border border-border bg-card px-3 py-2 text-center text-sm transition-colors hover:bg-accent">
                  {lang === 'ar' ? c.nameAr : c.nameEn}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
