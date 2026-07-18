import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { countries, getCitiesByCountry } from '@/data/countries';
import { Bell, MapPin, Globe } from 'lucide-react';
import { useEffect } from 'react';
import CitySearch from '@/components/CitySearch';
import { useSeo } from '@/hooks/useSeo';

const regions = [
  { key: 'gulf', en: 'Gulf Countries', ar: 'دول الخليج', slugs: ['saudi-arabia', 'uae', 'qatar', 'kuwait', 'bahrain', 'oman'] },
  { key: 'mena', en: 'Middle East & North Africa', ar: 'الشرق الأوسط وشمال أفريقيا', slugs: ['egypt', 'jordan', 'iraq', 'syria', 'lebanon', 'palestine', 'yemen', 'morocco', 'algeria', 'tunisia', 'libya', 'sudan'] },
  { key: 'asia', en: 'Asia', ar: 'آسيا', slugs: ['pakistan', 'india', 'bangladesh', 'afghanistan', 'sri-lanka', 'indonesia', 'malaysia', 'turkey', 'iran', 'uzbekistan', 'kazakhstan'] },
  { key: 'africa', en: 'Africa', ar: 'أفريقيا', slugs: ['nigeria', 'somalia', 'senegal', 'ethiopia', 'tanzania', 'kenya', 'south-africa'] },
  { key: 'europe', en: 'Europe', ar: 'أوروبا', slugs: ['united-kingdom', 'germany', 'france', 'netherlands', 'sweden', 'spain', 'italy', 'belgium', 'austria', 'bosnia', 'albania'] },
  { key: 'americas', en: 'Americas & Oceania', ar: 'الأمريكيتين وأوقيانوسيا', slugs: ['united-states', 'canada', 'brazil', 'argentina', 'australia'] },
];

export default function AzanTimesIndexPage() {
  const { lang } = useLanguage();
  useSeo({ title: lang === 'ar' ? 'أوقات الأذان في جميع دول العالم - جدول الأذان الشهري | مواقيت' : 'Azan Times for All Countries Worldwide - Monthly Azan Schedule | Mawaqit', description: lang === 'ar' ? 'اختر بلدك لعرض أوقات الأذان الدقيقة لأذان الفجر والظهر والعصر والمغرب والعشاء في مدنه، مع جدول شهري كامل.' : 'Choose your country to see accurate Azan times for Fajr, Dhuhr, Asr, Maghrib, and Isha in its cities, with a complete monthly schedule.', path: '/azan-times' });

  useEffect(() => {
    document.title = lang === 'ar'
      ? 'أوقات الأذان في جميع الدول - مواقيت الأذان حول العالم - مواقيت'
      : 'Azan Times Worldwide - Adhan Schedule for All Countries | Mawaqit';
  }, [lang]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: 'Azan Times Worldwide',
        description: 'Accurate Azan (Adhan) times for all countries and cities worldwide.',
        url: 'https://mawaqit.app/azan-times',
      }) }} />

      <section className="islamic-pattern hero-gradient px-4 py-14 text-primary-foreground">
        <div className="container mx-auto text-center">
          <Bell className="mx-auto mb-4 h-12 w-12 text-gold" />
          <h1 className="font-heading text-4xl font-bold text-gold md:text-6xl">
            {lang === 'ar' ? 'أوقات الأذان حول العالم' : 'Azan Times Worldwide'}
          </h1>
          <p className="mt-3 text-base opacity-80">
            {lang === 'ar' ? 'أوقات الأذان الدقيقة لجميع المدن والدول' : 'Accurate Azan (Adhan) times for all cities and countries'}
          </p>
          <CitySearch className="mx-auto mt-8 max-w-lg" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        {regions.map(region => {
          const regionCountries = region.slugs.map(s => countries.find(c => c.slug === s)!).filter(Boolean);
          return (
            <div key={region.key} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 font-heading text-2xl font-bold text-foreground">
                <Globe className="h-6 w-6 text-primary" />
                {lang === 'ar' ? region.ar : region.en}
              </h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                {regionCountries.map(country => (
                  <Link key={country.slug} to={`/azan-times/${country.slug}`} className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-semibold group-hover:text-primary">{lang === 'ar' ? country.nameAr : country.nameEn}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{getCitiesByCountry(country.slug).length} {lang === 'ar' ? 'مدينة' : 'cities'}</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-emerald-light px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-6">
            {lang === 'ar' ? 'ما هو الأذان؟' : 'What is the Azan (Adhan)?'}
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>{lang === 'ar'
              ? 'الأذان هو النداء الإسلامي للصلاة، يُرفع خمس مرات في اليوم عند دخول وقت كل صلاة من الصلوات الخمس المفروضة: الفجر والظهر والعصر والمغرب والعشاء. شُرع الأذان في السنة الأولى للهجرة النبوية، عندما رأى عبد الله بن زيد رؤيا في المنام بصيغة الأذان وأقرها النبي ﷺ. يبدأ الأذان بعبارة "الله أكبر" ويُختتم بعبارة "لا إله إلا الله". الأذان إعلان بدخول وقت الصلاة ودعوة المسلمين للتوجه إلى المساجد لأداء الصلاة جماعة.'
              : 'The Azan (also written as Adhan or Azaan) is the Islamic call to prayer, proclaimed five times daily to mark the beginning of each of the five obligatory prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha. The Azan was prescribed in the first year after Hijrah, when Abdullah ibn Zaid had a dream about the call to prayer which the Prophet Muhammad (peace be upon him) confirmed. The Azan begins with "Allahu Akbar" (God is Greatest) and concludes with "La ilaha illallah" (There is no god but Allah). It serves as both an announcement that the prayer time has entered and an invitation for Muslims to come to the mosque for congregational prayer.'}
            </p>
            <p>{lang === 'ar'
              ? 'يوفر موقع مواقيت أوقات الأذان المنفصلة والمستقلة عن صفحات مواقيت الصلاة. يتضمن كل صفحة مدينة أوقات الأذان الخمسة لليوم الحالي والجدول الشهري الكامل. نغطي أكثر من 80 دولة وأكثر من 300 مدينة حول العالم. أوقات الأذان تتزامن مع أوقات بداية الصلاة (باستثناء الشروق الذي ليس وقت صلاة مفروضة). يتم تحديث الأوقات يومياً باستخدام حسابات فلكية دقيقة.'
              : 'Mawaqit provides separate and independent Azan times pages distinct from prayer times pages. Each city page includes the five daily Azan times for the current day and a complete monthly timetable. We cover over 80 countries and 300+ cities worldwide. Azan times coincide with the start of each prayer time (excluding Sunrise, which is not an obligatory prayer time). Times are updated daily using precise astronomical calculations and trusted Islamic authority methods.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
