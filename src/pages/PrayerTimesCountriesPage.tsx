import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { countries, getCitiesByCountry } from '@/data/countries';
import { MapPin, Globe } from 'lucide-react';
import { useEffect } from 'react';
import CitySearch from '@/components/CitySearch';

const regions = [
  { key: 'gulf', en: 'Gulf Countries', ar: 'دول الخليج', slugs: ['saudi-arabia', 'uae', 'qatar', 'kuwait', 'bahrain', 'oman'] },
  { key: 'mena', en: 'Middle East & North Africa', ar: 'الشرق الأوسط وشمال أفريقيا', slugs: ['egypt', 'jordan', 'iraq', 'syria', 'lebanon', 'palestine', 'yemen', 'morocco', 'algeria', 'tunisia', 'libya', 'sudan'] },
  { key: 'asia', en: 'Asia', ar: 'آسيا', slugs: ['pakistan', 'india', 'bangladesh', 'afghanistan', 'sri-lanka', 'indonesia', 'malaysia', 'turkey', 'iran', 'uzbekistan', 'kazakhstan'] },
  { key: 'africa', en: 'Africa', ar: 'أفريقيا', slugs: ['nigeria', 'somalia', 'senegal', 'ethiopia', 'tanzania', 'kenya'] },
  { key: 'europe', en: 'Europe', ar: 'أوروبا', slugs: ['united-kingdom', 'germany', 'france', 'netherlands', 'sweden', 'spain', 'italy', 'belgium', 'austria'] },
  { key: 'americas', en: 'Americas & Oceania', ar: 'الأمريكيتين وأوقيانوسيا', slugs: ['united-states', 'canada', 'brazil', 'argentina', 'australia'] },
];

export default function PrayerTimesCountriesPage() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = lang === 'ar'
      ? 'مواقيت الصلاة في جميع الدول - مواقيت'
      : 'Prayer Times Worldwide - All Countries | Mawaqit';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', lang === 'ar'
      ? 'مواقيت الصلاة الدقيقة في جميع دول العالم. الفجر، الظهر، العصر، المغرب، العشاء.'
      : 'Accurate prayer times for all countries worldwide. Fajr, Dhuhr, Asr, Maghrib, Isha times updated daily.');
  }, [lang]);

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? 'مواقيت الصلاة حول العالم' : 'Prayer Times Worldwide'}
          </h1>
          <p className="mt-3 text-sm opacity-70">
            {lang === 'ar'
              ? 'اختر دولتك لمعرفة مواقيت الصلاة في جميع مدنها'
              : 'Select your country to find prayer times for all its cities'}
          </p>
          <CitySearch className="mx-auto mt-6 max-w-md" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        {regions.map(region => {
          const regionCountries = region.slugs.map(s => countries.find(c => c.slug === s)!).filter(Boolean);
          return (
            <div key={region.key} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-foreground">
                <Globe className="h-5 w-5 text-primary" />
                {lang === 'ar' ? region.ar : region.en}
              </h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                {regionCountries.map(country => {
                  const cityCount = getCitiesByCountry(country.slug).length;
                  return (
                    <Link
                      key={country.slug}
                      to={`/prayer-times/${country.slug}`}
                      className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-semibold">{lang === 'ar' ? country.nameAr : country.nameEn}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {cityCount} {lang === 'ar' ? 'مدن' : 'cities'}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-emerald-light px-4 py-10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {lang === 'ar' ? 'عن مواقيت الصلاة' : 'About Our Prayer Times'}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {lang === 'ar'
              ? 'نوفر مواقيت الصلاة الدقيقة لأكثر من 48 دولة ومئات المدن حول العالم. يتم تحديث الأوقات يومياً باستخدام حسابات فلكية دقيقة وفق أشهر طرق الحساب المعتمدة عالمياً مثل أم القرى ورابطة العالم الإسلامي.'
              : 'We provide accurate prayer times for over 48 countries and hundreds of cities worldwide. Times are updated daily using precise astronomical calculations following globally recognized methods including Umm Al-Qura and the Muslim World League.'}
          </p>
        </div>
      </section>
    </div>
  );
}
