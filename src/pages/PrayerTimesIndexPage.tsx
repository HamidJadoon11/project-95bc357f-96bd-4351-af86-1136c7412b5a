import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { saudiCities } from '@/data/cities';
import { MapPin } from 'lucide-react';
import { useEffect } from 'react';

export default function PrayerTimesIndexPage() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = lang === 'ar'
      ? 'مواقيت الصلاة في جميع مدن السعودية - مواقيت'
      : 'Prayer Times in All Saudi Cities - Mawaqit';
  }, [lang]);

  return (
    <div>
      {/* Hero */}
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? 'مواقيت الصلاة في السعودية' : 'Prayer Times in Saudi Arabia'}
          </h1>
          <p className="mt-3 text-sm opacity-70">
            {lang === 'ar'
              ? 'اختر مدينتك لمعرفة مواعيد الصلاة اليوم'
              : 'Select your city to see today\'s prayer times'}
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {saudiCities.map((city) => (
            <Link
              key={city.slug}
              to={`/saudi-arabia/${city.slug}-prayer-times`}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:bg-accent hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-semibold">
                  {lang === 'ar' ? `مواقيت الصلاة في ${city.nameAr}` : `Prayer Times in ${city.nameEn}`}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {lang === 'ar' ? city.countryAr : city.country}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* City Info Section */}
      <section className="bg-emerald-light px-4 py-10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {lang === 'ar' ? 'معلومات عن مواقيت الصلاة' : 'About Prayer Times'}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {lang === 'ar'
              ? 'نوفر لك مواقيت الصلاة الدقيقة لجميع مدن المملكة العربية السعودية، بما في ذلك الفجر والشروق والظهر والعصر والمغرب والعشاء. يتم تحديث المواقيت تلقائياً بناءً على الحسابات الفلكية الدقيقة وفق طريقة أم القرى.'
              : 'We provide accurate prayer times for all cities in Saudi Arabia, including Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha. Times are automatically updated daily based on precise astronomical calculations using the Umm Al-Qura method.'}
          </p>
        </div>
      </section>
    </div>
  );
}
