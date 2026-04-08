import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { useLocation as useGeoLocation, usePrayerTimes, getNextPrayer } from '@/hooks/usePrayerTimes';
import { MapPin, BookOpen, Compass, Calculator, Calendar, Clock, Loader2, Bell, Globe } from 'lucide-react';
import { TranslationKey } from '@/i18n/translations';
import { getPopularCities } from '@/data/countries';
import CitySearch from '@/components/CitySearch';

const prayerKeys: { key: TranslationKey; field: string }[] = [
  { key: 'fajr', field: 'fajr' },
  { key: 'sunrise', field: 'sunrise' },
  { key: 'dhuhr', field: 'dhuhr' },
  { key: 'asr', field: 'asr' },
  { key: 'maghrib', field: 'maghrib' },
  { key: 'isha', field: 'isha' },
];

const quickLinks = [
  { key: 'prayerTimes' as const, path: '/prayer-times', icon: Clock },
  { key: 'azanTimes' as const, path: '/azan-times', icon: Bell },
  { key: 'azkar' as const, path: '/azkar', icon: BookOpen },
  { key: 'duas' as const, path: '/duas', icon: BookOpen },
  { key: 'qibla' as const, path: '/qibla', icon: Compass },
  { key: 'zakat' as const, path: '/zakat', icon: Calculator },
  { key: 'calendar' as const, path: '/calendar', icon: Calendar },
];

export default function Index() {
  const { t, lang } = useLanguage();
  const { location, loading: locLoading } = useGeoLocation();
  const { times, loading: timesLoading } = usePrayerTimes(location?.latitude, location?.longitude);
  const [nextPrayer, setNextPrayer] = useState(getNextPrayer(times));
  const popularCities = getPopularCities();

  useEffect(() => {
    const interval = setInterval(() => setNextPrayer(getNextPrayer(times)), 30000);
    setNextPrayer(getNextPrayer(times));
    return () => clearInterval(interval);
  }, [times]);

  useEffect(() => {
    document.title = lang === 'ar'
      ? 'مواقيت - مواقيت الصلاة والأذان حول العالم'
      : 'Mawaqit - Prayer Times & Azan Times Worldwide';
  }, [lang]);

  const loading = locLoading || timesLoading;

  return (
    <div>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Mawaqit',
        url: 'https://mawaqit.app',
        description: 'Accurate prayer times and azan times worldwide for all countries and cities.',
        potentialAction: { '@type': 'SearchAction', target: 'https://mawaqit.app/prayer-times?q={search_term_string}', 'query-input': 'required name=search_term_string' },
      }) }} />

      {/* Hero Section */}
      <section className="islamic-pattern relative overflow-hidden bg-primary px-4 py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl font-bold text-gold md:text-7xl">{t('siteName')}</h1>
          <p className="mt-3 text-lg opacity-80">{t('siteTagline')}</p>

          {/* City Search */}
          <CitySearch className="mx-auto mt-6 max-w-lg" />

          {location && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm opacity-70">
              <MapPin className="h-4 w-4" />
              <span>{location.city}, {location.country}</span>
            </div>
          )}

          {/* Next Prayer Countdown */}
          {nextPrayer && (
            <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-widest opacity-60">{t('nextPrayer')}</p>
              <p className="mt-1 font-heading text-3xl font-bold text-gold">
                {t(nextPrayer.name as TranslationKey)}
              </p>
              <p className="mt-1 text-2xl">{nextPrayer.time}</p>
              <div className="mt-2 flex items-center justify-center gap-1 text-sm opacity-70">
                <Clock className="h-3 w-3" />
                <span>{nextPrayer.remaining}</span>
              </div>
            </div>
          )}

          {loading && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>{t('detectingLocation')}</span>
            </div>
          )}
        </div>
      </section>

      {/* Prayer Times Grid */}
      {times && (
        <section className="container mx-auto -mt-8 px-4">
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

      {/* Quick Access */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-center font-heading text-2xl font-bold text-foreground">{t('quickAccess')}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex flex-col items-center gap-3 rounded-xl bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <link.icon className="h-7 w-7 text-primary" />
              <span className="text-sm font-semibold text-card-foreground">{t(link.key)}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Cities */}
      <section className="bg-emerald-light px-4 py-12">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-foreground">{t('popularCities')}</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
            {popularCities.map(city => (
              <Link
                key={`${city.countrySlug}-${city.slug}`}
                to={`/prayer-times/${city.countrySlug}/${city.slug}`}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:shadow-md"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-semibold">
                  {lang === 'ar' ? city.nameAr : city.nameEn}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/prayer-times"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Globe className="h-4 w-4" />
              {t('allCountries')}
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Verse */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-xl text-primary">{t('dailyVerse')}</h2>
          <p className="mt-4 font-heading text-2xl leading-relaxed text-foreground" dir="rtl">
            ﴿ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            "Indeed, with hardship comes ease." — Quran 94:6
          </p>
        </div>
      </section>
    </div>
  );
}
