import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCountryBySlug, getCitiesByCountry } from '@/data/countries';
import { Bell, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function AzanTimesCountryPage() {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const { lang } = useLanguage();
  const country = getCountryBySlug(countrySlug || '');
  const cities = getCitiesByCountry(countrySlug || '');

  useEffect(() => {
    if (!country) return;
    document.title = lang === 'ar'
      ? `أوقات الأذان في ${country.nameAr} - مواقيت`
      : `Azan Times in ${country.nameEn} - Mawaqit`;
  }, [country, lang]);

  if (!country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">{lang === 'ar' ? 'الدولة غير موجودة' : 'Country not found'}</h1>
        <Link to="/azan-times" className="mt-4 inline-block text-primary underline">← {lang === 'ar' ? 'العودة' : 'Back'}</Link>
      </div>
    );
  }

  const countryName = lang === 'ar' ? country.nameAr : country.nameEn;

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <Link to="/azan-times" className="mb-4 inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100">
            <ArrowLeft className="h-4 w-4" />
            {lang === 'ar' ? 'جميع الدول' : 'All Countries'}
          </Link>
          <Bell className="mb-3 h-8 w-8 text-gold" />
          <h1 className="font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? `أوقات الأذان في ${countryName}` : `Azan Times in ${countryName}`}
          </h1>
          <p className="mt-3 text-sm opacity-70">
            {lang === 'ar' ? `أوقات الأذان الدقيقة في جميع مدن ${countryName}` : `Accurate azan times for all cities in ${countryName}`}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {cities.map(city => (
            <Link
              key={city.slug}
              to={`/azan-times/${countrySlug}/${city.slug}`}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:shadow-md"
            >
              <Bell className="h-4 w-4 text-primary" />
              <span className="font-semibold">
                {lang === 'ar' ? `أوقات الأذان في ${city.nameAr}` : `Azan Times in ${city.nameEn}`}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
