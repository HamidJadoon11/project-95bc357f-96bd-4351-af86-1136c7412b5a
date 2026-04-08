import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCountryBySlug, getGlobalCityBySlug, getCitiesByCountry } from '@/data/countries';
import { usePrayerTimes, getNextPrayer } from '@/hooks/usePrayerTimes';
import { TranslationKey } from '@/i18n/translations';
import { MapPin, Clock, Calendar, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

const prayerKeys: { key: TranslationKey; field: string }[] = [
  { key: 'fajr', field: 'fajr' },
  { key: 'sunrise', field: 'sunrise' },
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

export default function GlobalCityPrayerTimesPage() {
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
    const mm = d.getMonth() + 1;
    const yyyy = d.getFullYear();
    fetch(`https://api.aladhan.com/v1/calendar/${yyyy}/${mm}?latitude=${city.lat}&longitude=${city.lng}&method=4`)
      .then(r => r.json())
      .then(data => {
        setMonthlyData(data.data.map((day: any) => ({
          date: day.date.gregorian.date,
          timings: {
            Fajr: day.timings.Fajr?.split(' ')[0],
            Sunrise: day.timings.Sunrise?.split(' ')[0],
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
      ? `مواقيت الصلاة في ${city.nameAr}، ${country.nameAr} - مواقيت`
      : `Prayer Times in ${city.nameEn}, ${country.nameEn} - Mawaqit`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', lang === 'ar'
      ? `مواقيت الصلاة اليوم في ${city.nameAr}، ${country.nameAr}. الفجر، الشروق، الظهر، العصر، المغرب، العشاء.`
      : `Today's prayer times in ${city.nameEn}, ${country.nameEn}. Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha times.`);
  }, [city, country, lang]);

  if (!city || !country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">{lang === 'ar' ? 'المدينة غير موجودة' : 'City not found'}</h1>
        <Link to="/prayer-times" className="mt-4 inline-block text-primary underline">
          ← {lang === 'ar' ? 'العودة' : 'Back'}
        </Link>
      </div>
    );
  }

  const otherCities = getCitiesByCountry(countrySlug || '').filter(c => c.slug !== citySlug).slice(0, 20);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `Prayer Times in ${city.nameEn}, ${country.nameEn}`,
            description: `Accurate daily prayer times for ${city.nameEn}, ${country.nameEn}`,
            url: `https://mawaqit.app/prayer-times/${countrySlug}/${citySlug}`,
            inLanguage: lang === 'ar' ? 'ar' : 'en',
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Prayer Times', item: '/prayer-times' },
                { '@type': 'ListItem', position: 2, name: country.nameEn, item: `/prayer-times/${countrySlug}` },
                { '@type': 'ListItem', position: 3, name: city.nameEn },
              ],
            },
          }),
        }}
      />

      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <nav className="mb-4 flex items-center gap-2 text-sm opacity-70">
            <Link to="/prayer-times" className="hover:underline">{lang === 'ar' ? 'مواقيت الصلاة' : 'Prayer Times'}</Link>
            <span>/</span>
            <Link to={`/prayer-times/${countrySlug}`} className="hover:underline">{countryName}</Link>
            <span>/</span>
            <span className="font-semibold">{cityName}</span>
          </nav>

          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gold" />
            <h1 className="font-heading text-3xl font-bold text-gold md:text-5xl">
              {lang === 'ar' ? `مواقيت الصلاة في ${cityName}` : `Prayer Times in ${cityName}`}
            </h1>
          </div>
          <p className="mt-2 text-sm opacity-70">
            {countryName} • {city.lat.toFixed(4)}°N, {city.lng.toFixed(4)}°E
          </p>

          {nextPrayer && (
            <div className="mt-6 inline-flex items-center gap-4 rounded-xl bg-primary-foreground/10 px-6 py-3 backdrop-blur-sm">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">{t('nextPrayer')}</p>
                <p className="font-heading text-xl font-bold text-gold">{t(nextPrayer.name as TranslationKey)}</p>
              </div>
              <div className="text-2xl font-bold">{nextPrayer.time}</div>
              <div className="flex items-center gap-1 text-sm opacity-70">
                <Clock className="h-3 w-3" />
                <span>{nextPrayer.remaining}</span>
              </div>
            </div>
          )}

          {loading && (
            <div className="mt-6 flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>{t('detectingLocation')}</span>
            </div>
          )}
        </div>
      </section>

      {times && (
        <section className="container mx-auto -mt-6 px-4">
          <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {prayerKeys.map(p => {
              const isNext = nextPrayer?.name === p.field;
              return (
                <div
                  key={p.field}
                  className={`rounded-xl p-4 text-center shadow-md transition-transform hover:scale-105 ${
                    isNext ? 'bg-gold text-gold-foreground ring-2 ring-gold' : 'bg-card text-card-foreground'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{t(p.key)}</p>
                  <p className="mt-1 font-heading text-xl font-bold">{(times as any)[p.field]}</p>
                </div>
              );
            })}
          </div>
          {times.date?.hijri && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {times.date.hijri.day} {lang === 'ar' ? times.date.hijri.month.ar : times.date.hijri.month.en} {times.date.hijri.year} AH
            </p>
          )}
        </section>
      )}

      {times && (
        <section className="container mx-auto px-4 py-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
              {lang === 'ar' ? `أوقات الأذان في ${cityName}` : `Azan Times in ${cityName}`}
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              {lang === 'ar'
                ? 'أوقات الأذان تتزامن مع دخول وقت كل صلاة. فيما يلي أوقات الأذان لليوم:'
                : 'Azan (call to prayer) times coincide with the start of each prayer time. Below are today\'s azan times:'}
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {[
                { key: 'fajr' as const, field: 'fajr' },
                { key: 'dhuhr' as const, field: 'dhuhr' },
                { key: 'asr' as const, field: 'asr' },
                { key: 'maghrib' as const, field: 'maghrib' },
                { key: 'isha' as const, field: 'isha' },
              ].map(p => (
                <div key={p.field} className="rounded-lg bg-background p-3 text-center">
                  <p className="text-xs font-semibold text-muted-foreground">{lang === 'ar' ? `أذان ${t(p.key)}` : `${t(p.key)} Azan`}</p>
                  <p className="mt-1 font-heading text-lg font-bold text-foreground">{(times as any)[p.field]}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                to={`/azan-times/${countrySlug}/${citySlug}`}
                className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {lang === 'ar' ? 'عرض جدول الأذان الشهري' : 'View Monthly Azan Timetable'}
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">
            <Calendar className="mr-2 inline h-5 w-5 text-primary" />
            {lang === 'ar' ? 'جدول الصلاة الشهري' : 'Monthly Prayer Timetable'}
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => setMonthOffset(p => p - 1)} className="rounded-lg bg-card p-2 shadow hover:bg-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[140px] text-center text-sm font-semibold">{monthLabel}</span>
            <button onClick={() => setMonthOffset(p => p + 1)} className="rounded-lg bg-card p-2 shadow hover:bg-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {monthLoading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-2 text-start">{lang === 'ar' ? 'التاريخ' : 'Date'}</th>
                  <th className="px-3 py-2 text-start">{lang === 'ar' ? 'هجري' : 'Hijri'}</th>
                  {prayerKeys.map(p => (
                    <th key={p.field} className="px-3 py-2 text-center">{t(p.key)}</th>
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
                    {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map(k => (
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
            {lang === 'ar' ? `معلومات عن مواقيت الصلاة في ${cityName}` : `About Prayer Times in ${cityName}`}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {lang === 'ar'
              ? `تعرض هذه الصفحة مواقيت الصلاة الدقيقة في ${cityName}، ${countryName}. تشمل المواقيت صلاة الفجر والشروق والظهر والعصر والمغرب والعشاء، ويتم تحديثها تلقائياً كل يوم وفق الحسابات الفلكية الدقيقة باستخدام طريقة أم القرى. يمكنك أيضاً الاطلاع على الجدول الشهري والتقويم الهجري.`
              : `This page displays accurate prayer times for ${cityName}, ${countryName}. It includes Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha times, automatically updated daily using precise astronomical calculations with the Umm Al-Qura method. You can also view the monthly timetable and Hijri calendar.`}
          </p>
        </div>
      </section>

      {otherCities.length > 0 && (
        <section className="bg-emerald-light px-4 py-10">
          <div className="container mx-auto">
            <h2 className="mb-6 text-center font-heading text-xl font-bold text-foreground">
              {lang === 'ar' ? `مواقيت الصلاة في مدن أخرى في ${countryName}` : `Prayer Times in Other ${countryName} Cities`}
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
              {otherCities.map(c => (
                <Link
                  key={c.slug}
                  to={`/prayer-times/${countrySlug}/${c.slug}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent"
                >
                  <MapPin className="h-3 w-3 text-muted-foreground" />
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
