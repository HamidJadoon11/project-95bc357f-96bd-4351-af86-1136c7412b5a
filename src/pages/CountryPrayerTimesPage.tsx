import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCountryBySlug, getCitiesByCountry, countries } from '@/data/countries';
import { MapPin, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import CitySearch from '@/components/CitySearch';

export default function CountryPrayerTimesPage() {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const { lang } = useLanguage();
  const country = getCountryBySlug(countrySlug || '');
  const cities = getCitiesByCountry(countrySlug || '');

  useEffect(() => {
    if (!country) return;
    document.title = lang === 'ar'
      ? `مواقيت الصلاة في ${country.nameAr} - مواقيت`
      : `Prayer Times in ${country.nameEn} - Mawaqit`;
  }, [country, lang]);

  if (!country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">{lang === 'ar' ? 'الدولة غير موجودة' : 'Country not found'}</h1>
        <Link to="/prayer-times" className="mt-4 inline-block text-primary underline">
          ← {lang === 'ar' ? 'العودة' : 'Back'}
        </Link>
      </div>
    );
  }

  const countryName = lang === 'ar' ? country.nameAr : country.nameEn;

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <Link to="/prayer-times" className="mb-4 inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100">
            <ArrowLeft className="h-4 w-4" />
            {lang === 'ar' ? 'جميع الدول' : 'All Countries'}
          </Link>
          <h1 className="font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? `مواقيت الصلاة في ${countryName}` : `Prayer Times in ${countryName}`}
          </h1>
          <p className="mt-3 text-sm opacity-70">
            {lang === 'ar'
              ? `مواقيت الصلاة الدقيقة في جميع مدن ${countryName}`
              : `Accurate prayer times for all cities in ${countryName}`}
          </p>
          <CitySearch className="mt-6 max-w-md" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="mb-6 font-heading text-xl font-bold text-foreground">
          {lang === 'ar' ? `المدن في ${countryName}` : `Cities in ${countryName}`}
        </h2>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {cities.map(city => (
            <Link
              key={city.slug}
              to={`/prayer-times/${countrySlug}/${city.slug}`}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:shadow-md"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-semibold">
                {lang === 'ar' ? `مواقيت الصلاة في ${city.nameAr}` : `Prayer Times in ${city.nameEn}`}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-emerald-light px-4 py-10">
        <div className="container mx-auto">
          <h2 className="mb-4 font-heading text-lg font-bold text-foreground">
            {lang === 'ar' ? 'مواقيت الصلاة في دول أخرى' : 'Prayer Times in Other Countries'}
          </h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
            {countries.filter(c => c.slug !== countrySlug).slice(0, 15).map(c => (
              <Link
                key={c.slug}
                to={`/prayer-times/${c.slug}`}
                className="rounded-lg border border-border bg-card px-3 py-2 text-center text-sm text-card-foreground transition-colors hover:bg-accent"
              >
                {lang === 'ar' ? c.nameAr : c.nameEn}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
