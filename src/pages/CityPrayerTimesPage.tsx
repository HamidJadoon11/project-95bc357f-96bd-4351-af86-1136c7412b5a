import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCityBySlug, saudiCities } from '@/data/cities';
import { usePrayerTimes, getNextPrayer, PrayerTimesData } from '@/hooks/usePrayerTimes';
import { TranslationKey } from '@/i18n/translations';
import { MapPin, Clock, Calendar, Loader2, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

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

export default function CityPrayerTimesPage() {
  const { citySlug: rawSlug } = useParams<{ citySlug: string }>();
  const { t, lang } = useLanguage();
  const slug = rawSlug?.replace(/-prayer-times$/, '') || '';
  const city = getCityBySlug(slug);
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
      .then((r) => r.json())
      .then((data) => {
        setMonthlyData(
          data.data.map((day: any) => ({
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
          }))
        );
      })
      .catch(() => {})
      .finally(() => setMonthLoading(false));
  }, [city, monthOffset]);

  const cityName = city ? (lang === 'ar' ? city.nameAr : city.nameEn) : '';
  const monthDate = new Date();
  monthDate.setMonth(monthDate.getMonth() + monthOffset);
  const monthLabel = monthDate.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { month: 'long', year: 'numeric' });

  useEffect(() => {
    if (!city) return;
    document.title = lang === 'ar'
      ? `مواقيت الصلاة في ${city.nameAr} - مواقيت`
      : `Prayer Times in ${city.nameEn} - Mawaqit`;
  }, [city, lang]);

  if (!city) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">City not found</h1>
        <Link to="/prayer-times" className="mt-4 inline-block text-primary underline">
          ← {lang === 'ar' ? 'العودة لقائمة المدن' : 'Back to cities'}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <Link to="/prayer-times" className="mb-4 inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100">
            <ArrowLeft className="h-4 w-4" />
            {lang === 'ar' ? 'جميع المدن' : 'All Cities'}
          </Link>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gold" />
            <h1 className="font-heading text-3xl font-bold text-gold md:text-5xl">
              {t('prayerTimesFor')} {cityName}
            </h1>
          </div>
          <p className="mt-2 text-sm opacity-70">
            {lang === 'ar' ? city.countryAr : city.country} • {city.lat.toFixed(4)}°N, {city.lng.toFixed(4)}°E
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
            {prayerKeys.map((p) => {
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

      <section className="container mx-auto px-4 py-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">
            <Calendar className="mr-2 inline h-5 w-5 text-primary" />
            {lang === 'ar' ? 'جدول الصلاة الشهري' : 'Monthly Prayer Timetable'}
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => setMonthOffset((p) => p - 1)} className="rounded-lg bg-card p-2 shadow hover:bg-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[140px] text-center text-sm font-semibold">{monthLabel}</span>
            <button onClick={() => setMonthOffset((p) => p + 1)} className="rounded-lg bg-card p-2 shadow hover:bg-accent">
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
                  {prayerKeys.map((p) => (
                    <th key={p.field} className="px-3 py-2 text-center">{t(p.key)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((day, i) => {
                  const isToday = day.date === new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
                  return (
                    <tr key={i} className={`border-b border-border ${isToday ? 'bg-gold/10 font-semibold' : i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                      <td className="whitespace-nowrap px-3 py-2">{day.date}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-muted-foreground">
                        {day.hijri.day} {lang === 'ar' ? day.hijri.month.ar : day.hijri.month.en}
                      </td>
                      {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((k) => (
                        <td key={k} className="px-3 py-2 text-center">{day.timings[k]}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="bg-emerald-light px-4 py-10">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center font-heading text-xl font-bold text-foreground">
            {lang === 'ar' ? 'مواقيت الصلاة في مدن أخرى' : 'Prayer Times in Other Cities'}
          </h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
            {saudiCities
              .filter((c) => c.slug !== citySlug)
              .slice(0, 20)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/saudi-arabia/${c.slug}-prayer-times`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-accent"
                >
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  {lang === 'ar' ? `مواقيت الصلاة في ${c.nameAr}` : `${c.nameEn} Prayer Times`}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
