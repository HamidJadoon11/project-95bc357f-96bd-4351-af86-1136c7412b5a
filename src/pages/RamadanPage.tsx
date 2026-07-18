import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getPopularCities, GlobalCityData } from '@/data/countries';
import { Loader2, Moon, ArrowRight, Calendar, Clock, Star, MapPin, BookOpen, Heart, ChevronDown } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const ramadanYears = Array.from({ length: 16 }, (_, i) => 2025 + i);

function getRamadanHijriYear(gregorianYear: number): number {
  return Math.round((gregorianYear - 622) * (33 / 32));
}

const ramadanInfo: Record<number, { startEst: string; endEst: string; startEstAr: string; endEstAr: string }> = {
  2025: { startEst: 'February 28, 2025', endEst: 'March 30, 2025', startEstAr: '28 فبراير 2025', endEstAr: '30 مارس 2025' },
  2026: { startEst: 'February 17, 2026', endEst: 'March 19, 2026', startEstAr: '17 فبراير 2026', endEstAr: '19 مارس 2026' },
  2027: { startEst: 'February 7, 2027', endEst: 'March 8, 2027', startEstAr: '7 فبراير 2027', endEstAr: '8 مارس 2027' },
  2028: { startEst: 'January 27, 2028', endEst: 'February 25, 2028', startEstAr: '27 يناير 2028', endEstAr: '25 فبراير 2028' },
  2029: { startEst: 'January 15, 2029', endEst: 'February 13, 2029', startEstAr: '15 يناير 2029', endEstAr: '13 فبراير 2029' },
  2030: { startEst: 'January 5, 2030', endEst: 'February 3, 2030', startEstAr: '5 يناير 2030', endEstAr: '3 فبراير 2030' },
  2031: { startEst: 'December 25, 2030', endEst: 'January 24, 2031', startEstAr: '25 ديسمبر 2030', endEstAr: '24 يناير 2031' },
  2032: { startEst: 'December 14, 2031', endEst: 'January 13, 2032', startEstAr: '14 ديسمبر 2031', endEstAr: '13 يناير 2032' },
  2033: { startEst: 'December 3, 2032', endEst: 'January 1, 2033', startEstAr: '3 ديسمبر 2032', endEstAr: '1 يناير 2033' },
  2034: { startEst: 'November 22, 2033', endEst: 'December 22, 2033', startEstAr: '22 نوفمبر 2033', endEstAr: '22 ديسمبر 2033' },
  2035: { startEst: 'November 11, 2034', endEst: 'December 11, 2034', startEstAr: '11 نوفمبر 2034', endEstAr: '11 ديسمبر 2034' },
  2036: { startEst: 'October 31, 2035', endEst: 'November 30, 2035', startEstAr: '31 أكتوبر 2035', endEstAr: '30 نوفمبر 2035' },
  2037: { startEst: 'October 21, 2036', endEst: 'November 19, 2036', startEstAr: '21 أكتوبر 2036', endEstAr: '19 نوفمبر 2036' },
  2038: { startEst: 'October 10, 2037', endEst: 'November 8, 2037', startEstAr: '10 أكتوبر 2037', endEstAr: '8 نوفمبر 2037' },
  2039: { startEst: 'September 29, 2038', endEst: 'October 29, 2038', startEstAr: '29 سبتمبر 2038', endEstAr: '29 أكتوبر 2038' },
  2040: { startEst: 'September 18, 2039', endEst: 'October 18, 2039', startEstAr: '18 سبتمبر 2039', endEstAr: '18 أكتوبر 2039' },
};

const dailyTips = [
  { en: 'Break your fast with dates and water, following the Sunnah of Prophet Muhammad ﷺ', ar: 'افطر على تمر وماء اتباعاً لسنة النبي محمد ﷺ' },
  { en: 'Perform Taraweeh prayer every night for immense spiritual reward', ar: 'صلِّ صلاة التراويح كل ليلة لأجر عظيم' },
  { en: 'Increase Quran recitation — aim to complete it at least once during Ramadan', ar: 'أكثر من تلاوة القرآن الكريم واستهدف ختمه مرة واحدة على الأقل' },
  { en: 'Give charity generously — rewards are multiplied during Ramadan', ar: 'تصدق بسخاء — الأجر مضاعف في رمضان' },
  { en: 'Make dua at the time of Iftar — it is among the accepted supplications', ar: 'ادعُ الله عند الإفطار — فهو من أوقات الدعاء المستجاب' },
  { en: 'Seek Laylat al-Qadr in the odd nights of the last ten days', ar: 'تحرَّ ليلة القدر في الليالي الوترية من العشر الأواخر' },
  { en: 'Have a nutritious Suhoor — delay it as close to Fajr as possible', ar: 'تناول سحوراً مغذياً وأخّره إلى ما قبيل الفجر' },
  { en: 'Observe I\'tikaf during the last ten days for spiritual retreat', ar: 'اعتكف في العشر الأواخر لخلوة روحانية' },
];

export default function RamadanPage() {
  const { year: yearParam } = useParams<{ year: string }>();
  const { lang } = useLanguage();
  useSeo({ title: lang === 'ar' ? 'رمضان 2026 - إمساكية رمضان وأوقات السحور والإفطار والتراويح | مواقيت' : 'Ramadan 2026 - Ramadan Imsakiya, Suhoor, Iftar & Taraweeh Times | Mawaqit', description: lang === 'ar' ? 'إمساكية رمضان 2026 كاملة: أوقات السحور والإمساك والإفطار وصلاة التراويح لأي مدينة، مع أدعية رمضان وليلة القدر وزكاة الفطر.' : 'Complete Ramadan 2026 Imsakiya: Suhoor, Imsak, Iftar, and Taraweeh prayer times for any city, with Ramadan duas, Laylat al-Qadr guidance, and Zakat al-Fitr.', path: '/ramadan' });
  const year = yearParam ? parseInt(yearParam) : new Date().getFullYear();
  const hijriYear = getRamadanHijriYear(year);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const info = ramadanInfo[year];
  const popularCities = getPopularCities().slice(0, 12);
  const [selectedCity, setSelectedCity] = useState<GlobalCityData>(popularCities[2]); // Riyadh default
  const [showCityPicker, setShowCityPicker] = useState(false);

  useEffect(() => {
    document.title = lang === 'ar'
      ? `تقويم رمضان ${year} / ${hijriYear} هـ - إمساكية ومواقيت الصلاة - مواقيت`
      : `Ramadan ${year} / ${hijriYear} AH Calendar - Suhoor & Iftar Timetable - Mawaqit`;
  }, [year, hijriYear, lang]);

  useEffect(() => {
    setLoading(true);
    const city = selectedCity?.nameEn || 'Mecca';
    const country = selectedCity?.countrySlug === 'saudi-arabia' ? 'Saudi Arabia' : selectedCity?.countrySlug || 'Saudi Arabia';
    fetch(`https://api.aladhan.com/v1/gpiCalendarByCity/${year}/3?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=4`)
      .then(r => r.json())
      .then(res => {
        const ramadanDays = (res.data || []).filter((d: any) => d?.hijri?.month?.number === 9);
        setData(ramadanDays.length > 0 ? ramadanDays : res.data || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [year, selectedCity]);

  const currentTip = dailyTips[new Date().getDate() % dailyTips.length];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: `Ramadan ${year} Calendar - Suhoor & Iftar Timetable`,
        description: `Complete Ramadan ${year} / ${hijriYear} AH calendar with accurate Suhoor, Iftar, and prayer times.`,
        url: `https://mawaqit.app/ramadan/${year}`,
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Ramadan', item: '/ramadan' },
          { '@type': 'ListItem', position: 3, name: `Ramadan ${year}` },
        ]},
      }) }} />

      {/* Hero */}
      <section className="islamic-pattern hero-gradient px-4 py-14 text-primary-foreground">
        <div className="container mx-auto text-center">
          <Moon className="mx-auto h-12 w-12 text-gold" />
          <h1 className="mt-4 font-heading text-4xl font-bold text-gold md:text-6xl">
            {lang === 'ar' ? `تقويم رمضان ${year}` : `Ramadan ${year} Calendar`}
          </h1>
          <p className="mt-2 text-lg opacity-80">
            {lang === 'ar' ? `رمضان ${hijriYear} هـ` : `Ramadan ${hijriYear} AH`}
          </p>
          <p className="mt-1 text-sm opacity-70">
            {lang === 'ar' ? 'إمساكية وأوقات السحور والإفطار ومواقيت الصلاة' : 'Suhoor & Iftar Timetable with Prayer Times'}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        {/* Year selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {ramadanYears.map(y => (
            <Link
              key={y}
              to={`/ramadan/${y}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${y === year ? 'bg-primary text-primary-foreground shadow-md scale-105' : 'bg-card text-card-foreground border border-border hover:border-primary hover:bg-primary/5 hover:text-primary active:scale-95'}`}
            >
              {y}
            </Link>
          ))}
        </div>

        {/* City Picker */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <button
              onClick={() => setShowCityPicker(!showCityPicker)}
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:border-primary hover:shadow-md active:scale-95"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-foreground">{lang === 'ar' ? selectedCity.nameAr : selectedCity.nameEn}</span>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showCityPicker ? 'rotate-180' : ''}`} />
            </button>
            {showCityPicker && (
              <div className="absolute z-50 mt-2 w-64 rounded-xl border border-border bg-card shadow-xl">
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground border-b border-border">
                  {lang === 'ar' ? 'اختر مدينة' : 'Select a city'}
                </p>
                <div className="max-h-60 overflow-y-auto">
                  {popularCities.map(city => (
                    <button
                      key={city.slug}
                      onClick={() => { setSelectedCity(city); setShowCityPicker(false); }}
                      className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-primary/5 ${selectedCity.slug === city.slug ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'}`}
                    >
                      <MapPin className="h-3 w-3 shrink-0 text-primary" />
                      {lang === 'ar' ? city.nameAr : city.nameEn}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Daily Ramadan Tip */}
        <div className="mb-8 rounded-2xl border border-gold/30 bg-gold/5 p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
              <Heart className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gold">{lang === 'ar' ? 'نصيحة رمضانية' : 'Daily Ramadan Tip'}</p>
              <p className="mt-1 text-sm text-foreground leading-relaxed">{lang === 'ar' ? currentTip.ar : currentTip.en}</p>
            </div>
          </div>
        </div>

        {/* Ramadan Info Cards */}
        {info && (
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-5 text-center transition-all hover:shadow-md hover:border-primary/30">
              <Calendar className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="text-xs font-semibold text-muted-foreground uppercase">{lang === 'ar' ? 'بداية رمضان (تقديرية)' : 'Ramadan Start (Est.)'}</p>
              <p className="mt-1 font-heading text-lg font-bold text-foreground">{lang === 'ar' ? info.startEstAr : info.startEst}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 text-center transition-all hover:shadow-md hover:border-primary/30">
              <Calendar className="mx-auto mb-2 h-6 w-6 text-gold" />
              <p className="text-xs font-semibold text-muted-foreground uppercase">{lang === 'ar' ? 'نهاية رمضان (تقديرية)' : 'Ramadan End (Est.)'}</p>
              <p className="mt-1 font-heading text-lg font-bold text-foreground">{lang === 'ar' ? info.endEstAr : info.endEst}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 text-center transition-all hover:shadow-md hover:border-primary/30">
              <Star className="mx-auto mb-2 h-6 w-6 text-gold" />
              <p className="text-xs font-semibold text-muted-foreground uppercase">{lang === 'ar' ? 'السنة الهجرية' : 'Hijri Year'}</p>
              <p className="mt-1 font-heading text-lg font-bold text-foreground">{hijriYear} {lang === 'ar' ? 'هـ' : 'AH'}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 text-center transition-all hover:shadow-md hover:border-primary/30">
              <Clock className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="text-xs font-semibold text-muted-foreground uppercase">{lang === 'ar' ? 'عدد الأيام' : 'Duration'}</p>
              <p className="mt-1 font-heading text-lg font-bold text-foreground">29-30 {lang === 'ar' ? 'يوم' : 'days'}</p>
            </div>
          </div>
        )}

        {/* Ramadan Pillars Section */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-primary/5 border border-primary/10 p-5 transition-all hover:bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-heading text-lg font-bold text-foreground">{lang === 'ar' ? 'صلاة التراويح' : 'Taraweeh Prayer'}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lang === 'ar'
              ? 'صلاة نافلة تُؤدى بعد العشاء كل ليلة من ليالي رمضان، ثمان أو عشرون ركعة، وهي سنة مؤكدة عن النبي ﷺ.'
              : 'A voluntary prayer performed after Isha every night of Ramadan, typically 8 or 20 rak\'ahs. It is a confirmed Sunnah of the Prophet ﷺ.'}</p>
          </div>
          <div className="rounded-2xl bg-gold/5 border border-gold/10 p-5 transition-all hover:bg-gold/10">
            <Star className="h-8 w-8 text-gold mb-3" />
            <h3 className="font-heading text-lg font-bold text-foreground">{lang === 'ar' ? 'ليلة القدر' : 'Laylat al-Qadr'}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lang === 'ar'
              ? 'ليلة خير من ألف شهر، تُلتمس في العشر الأواخر من رمضان وخاصة في الليالي الوترية (21، 23، 25، 27، 29).'
              : 'A night better than a thousand months, sought in the last ten nights of Ramadan, especially the odd nights (21st, 23rd, 25th, 27th, 29th).'}</p>
          </div>
          <div className="rounded-2xl bg-primary/5 border border-primary/10 p-5 transition-all hover:bg-primary/10">
            <Heart className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-heading text-lg font-bold text-foreground">{lang === 'ar' ? 'زكاة الفطر' : 'Zakat al-Fitr'}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{lang === 'ar'
              ? 'صدقة واجبة على كل مسلم تُخرج قبل صلاة عيد الفطر، وهي طُهرة للصائم من اللغو والرفث.'
              : 'An obligatory charity due before Eid al-Fitr prayer. It purifies the fasting person from idle talk and is a means to feed the poor.'}</p>
          </div>
        </div>

        {/* Timetable */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {lang === 'ar' ? `إمساكية رمضان ${year} - ${selectedCity.nameAr}` : `Ramadan ${year} Timetable - ${selectedCity.nameEn}`}
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
        ) : data.length > 0 ? (
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-3 text-start whitespace-nowrap">{lang === 'ar' ? 'اليوم' : 'Day'}</th>
                  <th className="px-3 py-3 text-start whitespace-nowrap">{lang === 'ar' ? 'التاريخ' : 'Date'}</th>
                  <th className="px-3 py-3 text-center whitespace-nowrap">{lang === 'ar' ? 'الإمساك' : 'Imsak'}</th>
                  <th className="px-3 py-3 text-center whitespace-nowrap">{lang === 'ar' ? 'الفجر' : 'Fajr'}</th>
                  <th className="px-3 py-3 text-center whitespace-nowrap">{lang === 'ar' ? 'الشروق' : 'Sunrise'}</th>
                  <th className="px-3 py-3 text-center whitespace-nowrap">{lang === 'ar' ? 'الظهر' : 'Dhuhr'}</th>
                  <th className="px-3 py-3 text-center whitespace-nowrap">{lang === 'ar' ? 'العصر' : 'Asr'}</th>
                  <th className="px-3 py-3 text-center font-bold whitespace-nowrap">{lang === 'ar' ? 'المغرب (إفطار)' : 'Maghrib (Iftar)'}</th>
                  <th className="px-3 py-3 text-center whitespace-nowrap">{lang === 'ar' ? 'العشاء' : 'Isha'}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((day: any, i: number) => (
                  <tr key={i} className={`border-b border-border transition-colors hover:bg-primary/5 ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                    <td className="px-3 py-2.5 font-semibold">{day.hijri?.day || i + 1}</td>
                    <td className="px-3 py-2.5 text-xs">{day.gregorian?.date}</td>
                    <td className="px-3 py-2.5 text-center font-semibold text-primary">{day.timings?.Imsak?.split(' ')[0]}</td>
                    <td className="px-3 py-2.5 text-center">{day.timings?.Fajr?.split(' ')[0]}</td>
                    <td className="px-3 py-2.5 text-center">{day.timings?.Sunrise?.split(' ')[0]}</td>
                    <td className="px-3 py-2.5 text-center">{day.timings?.Dhuhr?.split(' ')[0]}</td>
                    <td className="px-3 py-2.5 text-center">{day.timings?.Asr?.split(' ')[0]}</td>
                    <td className="px-3 py-2.5 text-center font-bold text-gold">{day.timings?.Maghrib?.split(' ')[0]}</td>
                    <td className="px-3 py-2.5 text-center">{day.timings?.Isha?.split(' ')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">{lang === 'ar' ? 'لا تتوفر بيانات حالياً' : 'No data available for this year yet.'}</p>
        )}

        {/* Upcoming Ramadan Calendars */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">
            {lang === 'ar' ? 'تقاويم رمضان القادمة' : 'Upcoming Ramadan Calendars'}
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {ramadanYears.filter(y => y !== year).map(y => {
              const hy = getRamadanHijriYear(y);
              const inf = ramadanInfo[y];
              return (
                <Link key={y} to={`/ramadan/${y}`} className="group rounded-xl border border-border p-3 transition-all duration-200 hover:border-primary hover:shadow-md hover:-translate-y-0.5 active:scale-95">
                  <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary">{lang === 'ar' ? `رمضان ${y}` : `Ramadan ${y}`}</p>
                  <p className="text-xs text-gold">{hy} {lang === 'ar' ? 'هـ' : 'AH'}</p>
                  {inf && <p className="mt-1 text-xs text-muted-foreground">{lang === 'ar' ? inf.startEstAr : inf.startEst}</p>}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Ramadan Duas Section */}
        <div className="mt-10 rounded-2xl bg-card border border-border p-6 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">
            {lang === 'ar' ? 'أدعية رمضان المأثورة' : 'Essential Ramadan Duas'}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { ar: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', en: 'O Allah, You are the Pardoner, You love to pardon, so pardon me.', label: { ar: 'دعاء ليلة القدر', en: 'Laylat al-Qadr Dua' } },
              { ar: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ', en: 'The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.', label: { ar: 'دعاء الإفطار', en: 'Iftar Dua' } },
              { ar: 'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ', en: 'O Allah, for You I have fasted and upon Your provision I have broken my fast.', label: { ar: 'دعاء قبل الإفطار', en: 'Before Iftar Dua' } },
              { ar: 'اللَّهُمَّ بَلِّغْنَا رَمَضَانَ', en: 'O Allah, let us reach Ramadan.', label: { ar: 'دعاء بلوغ رمضان', en: 'Reaching Ramadan Dua' } },
            ].map((dua, i) => (
              <div key={i} className="rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{lang === 'ar' ? dua.label.ar : dua.label.en}</p>
                <p className="font-heading text-lg text-foreground leading-relaxed">{dua.ar}</p>
                <p className="mt-2 text-sm text-muted-foreground italic">{dua.en}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-10 space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-foreground">
              {lang === 'ar' ? `فضل شهر رمضان ${year} / ${hijriYear} هـ` : `The Virtue of Ramadan ${year} / ${hijriYear} AH`}
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>{lang === 'ar'
                ? `رمضان هو الشهر التاسع في التقويم الهجري الإسلامي، وهو أعظم الشهور عند المسلمين. فُرض صيام رمضان في السنة الثانية للهجرة، وهو الركن الرابع من أركان الإسلام الخمسة. خلال شهر رمضان يمتنع المسلمون عن الطعام والشراب وسائر المفطرات من طلوع الفجر الصادق (وقت السحور) حتى غروب الشمس (وقت الإفطار). نزل القرآن الكريم في شهر رمضان كما قال تعالى: ﴿شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ﴾ (البقرة: ١٨٥).`
                : `Ramadan is the ninth month of the Islamic Hijri calendar and holds the highest significance among all months for Muslims worldwide. Fasting during Ramadan was made obligatory in the second year after Hijrah and constitutes the fourth pillar of Islam. During this blessed month, Muslims abstain from food, drink, and other invalidating acts from the true dawn (Suhoor time) until sunset (Iftar time). The Holy Quran was revealed during Ramadan, as Allah states: "The month of Ramadan in which was revealed the Quran, a guidance for mankind and clear proofs of guidance and criterion" (Quran 2:185).`}</p>
              <p>{lang === 'ar'
                ? `يتميز شهر رمضان ${year} الموافق لرمضان ${hijriYear} هجرية بعدة خصائص روحية عظيمة. من أبرزها ليلة القدر التي هي خير من ألف شهر، وتُلتمس في العشر الأواخر من رمضان. كما يُستحب في رمضان الإكثار من تلاوة القرآن الكريم وصلاة التراويح والقيام والصدقة وإطعام الصائمين. صلاة التراويح هي صلاة نافلة تُؤدى بعد صلاة العشاء في كل ليلة من ليالي رمضان، وعادة ما تكون عشرين أو ثماني ركعات.`
                : `Ramadan ${year}, corresponding to Ramadan ${hijriYear} AH, carries immense spiritual characteristics. Among the most notable is Laylat al-Qadr (the Night of Power), which is better than a thousand months and is sought during the last ten nights of Ramadan. During Ramadan, Muslims are encouraged to increase their recitation of the Holy Quran, perform Taraweeh prayers, engage in night prayers (Qiyam), give charity, and feed those who are fasting. Taraweeh prayer is a special voluntary prayer performed after Isha prayer every night of Ramadan, typically consisting of eight or twenty rak'ahs (units of prayer).`}</p>
              <p>{lang === 'ar'
                ? `إمساكية رمضان ${year} توفر مواقيت دقيقة للسحور والإفطار. وقت السحور (الإمساك) هو الوقت الذي يجب أن يتوقف فيه المسلم عن الأكل والشرب قبل أذان الفجر، ويُستحب أن يؤخر المسلم سحوره إلى قبيل الفجر. أما وقت الإفطار فيكون عند غروب الشمس (أذان المغرب)، ويُستحب تعجيل الفطور. من السنة أن يفطر المسلم على تمر وماء قبل أداء صلاة المغرب.`
                : `The Ramadan ${year} timetable provides accurate Suhoor and Iftar times. Suhoor (Imsak) time is when Muslims must stop eating and drinking before the Fajr Azan, and it is recommended to delay Suhoor until just before dawn. Iftar time is at sunset (Maghrib Azan), and it is Sunnah to hasten the breaking of the fast. The Prophet Muhammad (peace be upon him) used to break his fast with dates and water before performing Maghrib prayer.`}</p>
              <p>{lang === 'ar'
                ? `من الأعمال المستحبة في رمضان: صلاة التراويح، وختم القرآن الكريم، والاعتكاف في العشر الأواخر، وزكاة الفطر التي تجب على كل مسلم قبل صلاة عيد الفطر. كما يحرص المسلمون على إطعام المساكين وتفطير الصائمين طلباً للأجر العظيم. قال النبي ﷺ: «من فطّر صائماً كان له مثل أجره» (رواه الترمذي). نسأل الله أن يبلغنا رمضان ${year} وأن يتقبل صيامنا وقيامنا.`
                : `Recommended acts during Ramadan include: performing Taraweeh prayers, completing the recitation of the entire Quran, observing I'tikaf (spiritual retreat) during the last ten days, and paying Zakat al-Fitr which is obligatory on every Muslim before Eid al-Fitr prayer. Muslims also strive to feed the poor and provide Iftar meals to those fasting, seeking great reward from Allah. The Prophet Muhammad (peace be upon him) said: "Whoever provides Iftar for a fasting person will have a reward similar to his" (Tirmidhi). May Allah grant us the blessing of reaching Ramadan ${year} and accept our fasting and prayers.`}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-foreground">
              {lang === 'ar' ? 'نصائح مهمة لشهر رمضان' : 'Important Tips for Ramadan'}
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>{lang === 'ar'
                ? 'للاستفادة القصوى من شهر رمضان، ننصح بتنظيم وقتك بين العبادة والعمل والراحة. حافظ على السحور المتأخر لأنه سنة مؤكدة وفيه بركة. أكثر من الاستغفار وذكر الله في جميع الأوقات، واجعل لنفسك ورداً يومياً من القرآن الكريم. لا تنسَ حقوق الجار والفقير في هذا الشهر الكريم.'
                : 'To make the most of Ramadan, organize your time between worship, work, and rest. Maintain a late Suhoor as it is a confirmed Sunnah with blessings. Increase your remembrance of Allah and Istighfar throughout the day, and set a daily Quran reading schedule. Remember the rights of neighbors and the less fortunate during this blessed month.'}</p>
              <p>{lang === 'ar'
                ? 'اهتم بصحتك خلال الصيام بتناول سحور متوازن يحتوي على البروتين والألياف والكربوهيدرات المعقدة. اشرب كميات كافية من الماء بين الإفطار والسحور. تجنب الإفراط في الطعام عند الإفطار وابدأ بالتمر والماء ثم صلِّ المغرب قبل تناول الوجبة الرئيسية.'
                : 'Take care of your health during fasting by having a balanced Suhoor with protein, fiber, and complex carbohydrates. Drink enough water between Iftar and Suhoor. Avoid overeating at Iftar — start with dates and water, pray Maghrib, then have your main meal.'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}