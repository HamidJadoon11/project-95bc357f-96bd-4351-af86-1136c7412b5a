import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCountryBySlug, getCitiesByCountry, countries } from '@/data/countries';
import { MapPin, ArrowLeft, Globe } from 'lucide-react';
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
      ? `مواقيت الصلاة في ${country.nameAr} - جميع المدن - مواقيت`
      : `Prayer Times in ${country.nameEn} - All Cities | Mawaqit`;
  }, [country, lang]);

  if (!country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">{lang === 'ar' ? 'الدولة غير موجودة' : 'Country not found'}</h1>
        <Link to="/prayer-times" className="mt-4 inline-block text-primary underline">← {lang === 'ar' ? 'العودة' : 'Back'}</Link>
      </div>
    );
  }

  const countryName = lang === 'ar' ? country.nameAr : country.nameEn;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: `Prayer Times in ${country.nameEn}`,
        description: `Accurate prayer times for all cities in ${country.nameEn}. Fajr, Dhuhr, Asr, Maghrib, Isha.`,
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Prayer Times', item: '/prayer-times' },
          { '@type': 'ListItem', position: 2, name: country.nameEn },
        ]},
      }) }} />

      <section className="islamic-pattern hero-gradient px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <Link to="/prayer-times" className="mb-4 inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100">
            <ArrowLeft className="h-4 w-4" />{lang === 'ar' ? 'جميع الدول' : 'All Countries'}
          </Link>
          <h1 className="font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? `مواقيت الصلاة في ${countryName}` : `Prayer Times in ${countryName}`}
          </h1>
          <p className="mt-3 text-sm opacity-70">
            {lang === 'ar'
              ? `مواقيت الصلاة الدقيقة في جميع مدن ${countryName} - ${cities.length} مدينة`
              : `Accurate prayer times for all cities in ${countryName} - ${cities.length} cities`}
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
            <Link key={city.slug} to={`/prayer-times/${countrySlug}/${city.slug}`} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground transition-all hover:border-primary hover:shadow-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <span className="font-semibold">
                {lang === 'ar' ? `مواقيت الصلاة في ${city.nameAr}` : `Prayer Times in ${city.nameEn}`}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {lang === 'ar' ? `مواقيت الصلاة في ${countryName} - معلومات شاملة` : `Prayer Times in ${countryName} - Comprehensive Guide`}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>{lang === 'ar'
              ? `تعرض هذه الصفحة مواقيت الصلاة الدقيقة لجميع المدن الرئيسية في ${countryName}. نغطي ${cities.length} مدينة بأوقات صلاة محدثة يومياً تشمل الفجر والشروق والظهر والعصر والمغرب والعشاء. يتم حساب المواقيت باستخدام طرق فلكية دقيقة معتمدة من هيئات إسلامية رسمية. كل مدينة لها صفحة مخصصة تعرض مواقيت الصلاة اليومية والجدول الشهري والتقويم الهجري وأوقات الأذان. يمكنك أيضاً العثور على أوقات الإمساك والإفطار خلال شهر رمضان المبارك.`
              : `This page displays accurate prayer times for all major cities in ${countryName}. We cover ${cities.length} cities with daily-updated prayer times including Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha. Times are calculated using precise astronomical methods endorsed by official Islamic authorities. Each city has a dedicated page displaying daily prayer times, monthly timetable, Hijri calendar, and Azan times. You can also find Imsak and Iftar times during the blessed month of Ramadan. Our comprehensive coverage ensures that Muslims across ${countryName} can easily find accurate prayer times for their specific location.`}
            </p>
            <p>{lang === 'ar'
              ? `الصلوات الخمس هي ركن أساسي من أركان الإسلام، وأداؤها في أوقاتها واجب على كل مسلم بالغ عاقل. تختلف مواقيت الصلاة بين مدن ${countryName} بسبب اختلاف الموقع الجغرافي لكل مدينة. لذلك من المهم أن تتحقق من مواقيت الصلاة لمدينتك المحددة. اختر مدينتك من القائمة أعلاه للحصول على مواقيت الصلاة الدقيقة. نوفر أيضاً خاصية البحث للعثور على مدينتك بسهولة.`
              : `The five daily prayers are a fundamental pillar of Islam, and performing them at their designated times is obligatory for every adult Muslim. Prayer times differ between cities in ${countryName} due to geographical variations in each city's position. Therefore, it is essential to check the prayer times specific to your city. Select your city from the list above to access accurate prayer times. We also provide a search feature to help you find your city quickly and easily. Our prayer time data is updated daily to ensure maximum accuracy throughout the year.`}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-light px-4 py-10">
        <div className="container mx-auto">
          <h2 className="mb-4 font-heading text-lg font-bold text-foreground">
            {lang === 'ar' ? 'مواقيت الصلاة في دول أخرى' : 'Prayer Times in Other Countries'}
          </h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
            {countries.filter(c => c.slug !== countrySlug).slice(0, 15).map(c => (
              <Link key={c.slug} to={`/prayer-times/${c.slug}`} className="rounded-xl border border-border bg-card px-3 py-2 text-center text-sm text-card-foreground transition-colors hover:border-primary hover:bg-accent">
                {lang === 'ar' ? c.nameAr : c.nameEn}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
