import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { countries, getCitiesByCountry } from '@/data/countries';
import { MapPin, Globe, Search } from 'lucide-react';
import { useEffect } from 'react';
import CitySearch from '@/components/CitySearch';
import { useSeo } from '@/hooks/useSeo';

const regions = [
  { key: 'gulf', en: 'Gulf Countries', ar: 'دول الخليج', slugs: ['saudi-arabia', 'uae', 'qatar', 'kuwait', 'bahrain', 'oman'] },
  { key: 'mena', en: 'Middle East & North Africa', ar: 'الشرق الأوسط وشمال أفريقيا', slugs: ['egypt', 'jordan', 'iraq', 'syria', 'lebanon', 'palestine', 'yemen', 'morocco', 'algeria', 'tunisia', 'libya', 'sudan', 'mauritania'] },
  { key: 'south-asia', en: 'South Asia', ar: 'جنوب آسيا', slugs: ['pakistan', 'india', 'bangladesh', 'afghanistan', 'sri-lanka', 'maldives', 'nepal'] },
  { key: 'southeast-asia', en: 'Southeast & East Asia', ar: 'جنوب شرق وشرق آسيا', slugs: ['indonesia', 'malaysia', 'turkey', 'iran', 'philippines', 'thailand', 'singapore', 'brunei', 'china', 'japan', 'south-korea'] },
  { key: 'central-asia', en: 'Central Asia & Caucasus', ar: 'آسيا الوسطى والقوقاز', slugs: ['uzbekistan', 'kazakhstan', 'tajikistan', 'turkmenistan', 'kyrgyzstan', 'azerbaijan'] },
  { key: 'africa', en: 'Africa', ar: 'أفريقيا', slugs: ['nigeria', 'somalia', 'senegal', 'ethiopia', 'tanzania', 'kenya', 'south-africa', 'ghana', 'mali', 'niger', 'cameroon', 'mozambique', 'uganda'] },
  { key: 'europe', en: 'Europe', ar: 'أوروبا', slugs: ['united-kingdom', 'germany', 'france', 'netherlands', 'sweden', 'spain', 'italy', 'belgium', 'austria', 'switzerland', 'denmark', 'norway', 'finland', 'greece', 'bosnia', 'albania', 'kosovo', 'russia'] },
  { key: 'americas', en: 'Americas & Oceania', ar: 'الأمريكيتين وأوقيانوسيا', slugs: ['united-states', 'canada', 'brazil', 'argentina', 'mexico', 'australia', 'new-zealand'] },
];

export default function PrayerTimesCountriesPage() {
  const { lang } = useLanguage();
  useSeo({ title: lang === 'ar' ? 'مواقيت الصلاة في جميع دول العالم - قائمة الدول | مواقيت' : 'Prayer Times for All Countries Worldwide - Countries Index | Mawaqit', description: lang === 'ar' ? 'اختر بلدك لعرض مواقيت الصلاة الدقيقة لكل مدنه: السعودية، الإمارات، مصر، تركيا، باكستان، إندونيسيا، الولايات المتحدة، بريطانيا وأكثر من 80 دولة.' : 'Choose your country to view accurate prayer times for all its cities: Saudi Arabia, UAE, Egypt, Turkey, Pakistan, Indonesia, USA, UK, and over 80 countries.', path: '/prayer-times' });

  useEffect(() => {
    document.title = lang === 'ar'
      ? 'مواقيت الصلاة في جميع الدول - أكثر من 80 دولة و300 مدينة - مواقيت'
      : 'Prayer Times Worldwide - 80+ Countries & 300+ Cities | Mawaqit';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', lang === 'ar'
      ? 'مواقيت الصلاة الدقيقة في جميع دول العالم. الفجر، الظهر، العصر، المغرب، العشاء. أكثر من 80 دولة و300 مدينة.'
      : 'Accurate prayer times for all countries worldwide. Fajr, Dhuhr, Asr, Maghrib, Isha times. Over 80 countries and 300+ cities updated daily.');
  }, [lang]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: 'Prayer Times Worldwide',
        description: 'Accurate prayer times for all countries and cities worldwide.',
        url: 'https://mawaqit.app/prayer-times',
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Prayer Times' },
        ]},
      }) }} />

      <section className="islamic-pattern hero-gradient px-4 py-14 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold text-gold md:text-6xl">
            {lang === 'ar' ? 'مواقيت الصلاة حول العالم' : 'Prayer Times Worldwide'}
          </h1>
          <p className="mt-3 text-base opacity-80">
            {lang === 'ar'
              ? 'مواقيت الصلاة الدقيقة لأكثر من 80 دولة وأكثر من 300 مدينة حول العالم'
              : 'Accurate prayer times for 80+ countries and 300+ cities worldwide'}
          </p>
          <CitySearch className="mx-auto mt-8 max-w-lg" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        {regions.map(region => {
          const regionCountries = region.slugs.map(s => countries.find(c => c.slug === s)!).filter(Boolean);
          if (regionCountries.length === 0) return null;
          return (
            <div key={region.key} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
                <Globe className="h-6 w-6 text-primary" />
                {lang === 'ar' ? region.ar : region.en}
              </h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                {regionCountries.map(country => {
                  const cityCount = getCitiesByCountry(country.slug).length;
                  return (
                    <Link key={country.slug} to={`/prayer-times/${country.slug}`} className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-semibold group-hover:text-primary">{lang === 'ar' ? country.nameAr : country.nameEn}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{cityCount} {lang === 'ar' ? 'مدينة' : 'cities'}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-emerald-light px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-6">
            {lang === 'ar' ? 'عن مواقيت الصلاة العالمية' : 'About Our Worldwide Prayer Times'}
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>{lang === 'ar'
              ? 'نوفر في موقع مواقيت أدق مواقيت الصلاة لأكثر من 80 دولة وأكثر من 300 مدينة حول العالم. يتم تحديث الأوقات يومياً باستخدام حسابات فلكية دقيقة وفق أشهر طرق الحساب المعتمدة عالمياً مثل أم القرى ورابطة العالم الإسلامي. نغطي جميع دول الخليج العربي والشرق الأوسط وشمال أفريقيا وجنوب آسيا وجنوب شرق آسيا وأوروبا والأمريكيتين وأفريقيا. كل مدينة لها صفحة مخصصة بمواقيت الصلاة اليومية والجدول الشهري والتقويم الهجري.'
              : 'At Mawaqit, we provide the most accurate prayer times for over 80 countries and 300+ cities worldwide. Times are updated daily using precise astronomical calculations following globally recognized methods including Umm Al-Qura and the Muslim World League. We cover all Gulf countries, the Middle East, North Africa, South Asia, Southeast Asia, Europe, the Americas, and Africa. Each city has a dedicated page with daily prayer times, monthly timetable, and Hijri calendar.'}
            </p>
            <p>{lang === 'ar'
              ? 'تشمل كل صفحة مدينة: مواقيت الصلوات الخمس (الفجر، الشروق، الظهر، العصر، المغرب، العشاء)، ومؤقت العد التنازلي للصلاة القادمة، وأوقات الأذان المنفصلة، والجدول الشهري الكامل، والتقويم الهجري. نوفر أيضاً إمكانية تحديد الموقع تلقائياً لعرض مواقيت الصلاة بناءً على موقعك الجغرافي الحالي.'
              : 'Each city page includes: all five daily prayer times (Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha), a countdown timer for the next prayer, separate Azan times, a complete monthly timetable, and Hijri calendar. We also offer automatic location detection to display prayer times based on your current geographical position. Our platform is designed for accuracy, speed, and ease of use to help Muslims worldwide fulfill their prayer obligations on time.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
