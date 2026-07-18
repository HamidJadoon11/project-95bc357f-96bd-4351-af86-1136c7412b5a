import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCountryBySlug, getGlobalCityBySlug, getCitiesByCountry } from '@/data/countries';
import { usePrayerTimes, getNextPrayer } from '@/hooks/usePrayerTimes';
import { useSeo } from '@/hooks/useSeo';
import { TranslationKey } from '@/i18n/translations';
import { MapPin, Clock, Calendar, Loader2, ChevronLeft, ChevronRight, Bell, Moon, Star, BookOpen } from 'lucide-react';

const prayerKeys: { key: TranslationKey; field: string; icon: string }[] = [
  { key: 'fajr', field: 'fajr', icon: '🌅' },
  { key: 'sunrise', field: 'sunrise', icon: '☀️' },
  { key: 'dhuhr', field: 'dhuhr', icon: '🌤️' },
  { key: 'asr', field: 'asr', icon: '⛅' },
  { key: 'maghrib', field: 'maghrib', icon: '🌇' },
  { key: 'isha', field: 'isha', icon: '🌙' },
];

interface MonthlyDay {
  date: string;
  timings: Record<string, string>;
  hijri: { day: string; month: { en: string; ar: string }; year: string };
}

export default function GlobalCityPrayerTimesPage() {
  const { countrySlug, citySlug } = useParams<{ countrySlug: string; citySlug: string }>();
  const { t, lang } = useLanguage();
  const country = getCountryBySlug(countrySlug || '');
  const city = getGlobalCityBySlug(countrySlug || '', citySlug || '');
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
      .then(r => r.json())
      .then(data => {
        setMonthlyData(data.data.map((day: any) => ({
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
        })));
      })
      .catch(() => {})
      .finally(() => setMonthLoading(false));
  }, [city, monthOffset]);

  const cityName = city ? (lang === 'ar' ? city.nameAr : city.nameEn) : '';
  const countryName = country ? (lang === 'ar' ? country.nameAr : country.nameEn) : '';
  const monthDate = new Date();
  monthDate.setMonth(monthDate.getMonth() + monthOffset);
  const monthLabel = monthDate.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { month: 'long', year: 'numeric' });

  const path = `/prayer-times/${countrySlug}/${citySlug}`;
  const todayIso = new Date().toISOString().split('T')[0];
  const title = city && country
    ? (lang === 'ar'
        ? `مواقيت الصلاة في ${city.nameAr} اليوم ${todayIso} | الفجر، الظهر، العصر، المغرب، العشاء - ${country.nameAr}`
        : `Prayer Times in ${city.nameEn} Today ${todayIso} | Fajr, Dhuhr, Asr, Maghrib, Isha - ${country.nameEn}`)
    : 'Prayer Times';
  const description = city && country && times
    ? (lang === 'ar'
        ? `مواقيت الصلاة اليوم في ${city.nameAr}، ${country.nameAr}: الفجر ${times.fajr}، الشروق ${times.sunrise}، الظهر ${times.dhuhr}، العصر ${times.asr}، المغرب ${times.maghrib}، العشاء ${times.isha}. جدول شهري، تقويم هجري، وأوقات الأذان والإمساك.`
        : `Today's prayer times in ${city.nameEn}, ${country.nameEn}: Fajr ${times.fajr}, Sunrise ${times.sunrise}, Dhuhr ${times.dhuhr}, Asr ${times.asr}, Maghrib ${times.maghrib}, Isha ${times.isha}. Monthly timetable, Hijri calendar and Azan/Imsak schedules.`)
    : (lang === 'ar'
        ? `مواقيت الصلاة اليوم في ${city?.nameAr || ''}، ${country?.nameAr || ''}. الفجر، الشروق، الظهر، العصر، المغرب، العشاء وجدول شهري كامل.`
        : `Today's prayer times in ${city?.nameEn || ''}, ${country?.nameEn || ''}. Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha and full monthly timetable.`);
  const keywords = city && country
    ? (lang === 'ar'
        ? `مواقيت الصلاة في ${city.nameAr}, أوقات الصلاة ${city.nameAr}, أذان ${city.nameAr}, صلاة الفجر ${city.nameAr}, صلاة المغرب ${city.nameAr}, رمضان ${city.nameAr}, إمساكية ${city.nameAr}, ${country.nameAr}`
        : `prayer times ${city.nameEn}, ${city.nameEn} prayer times, azan times ${city.nameEn}, salah times ${city.nameEn}, fajr time ${city.nameEn}, maghrib time ${city.nameEn}, ramadan ${city.nameEn}, imsak ${city.nameEn}, ${country.nameEn} prayer times`)
    : undefined;

  const jsonLd = city && country && times ? [
    {
      '@context': 'https://schema.org', '@type': 'WebPage',
      name: title, description, url: path, inLanguage: lang === 'ar' ? 'ar' : 'en',
      breadcrumb: {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'ar' ? 'الرئيسية' : 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: lang === 'ar' ? 'مواقيت الصلاة' : 'Prayer Times', item: '/prayer-times' },
          { '@type': 'ListItem', position: 3, name: lang === 'ar' ? country.nameAr : country.nameEn, item: `/prayer-times/${countrySlug}` },
          { '@type': 'ListItem', position: 4, name: lang === 'ar' ? city.nameAr : city.nameEn, item: path },
        ]
      },
      mainEntity: {
        '@type': 'Place', name: lang === 'ar' ? city.nameAr : city.nameEn,
        address: { '@type': 'PostalAddress', addressLocality: city.nameEn, addressCountry: country.nameEn },
        geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
      },
    },
    // PrayerTimes-as-Schedule + individual Event entries for each of the 5 prayers today
    {
      '@context': 'https://schema.org', '@type': 'Schedule',
      name: lang === 'ar' ? `مواقيت الصلاة في ${city.nameAr} - ${todayIso}` : `Prayer Times in ${city.nameEn} - ${todayIso}`,
      description,
      startDate: todayIso, endDate: todayIso,
      repeatFrequency: 'P1D', scheduleTimezone: 'UTC',
      location: { '@type': 'Place', name: lang === 'ar' ? city.nameAr : city.nameEn, geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng } },
      byDay: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    },
    {
      '@context': 'https://schema.org', '@graph': [
        { key: 'fajr', name: lang === 'ar' ? 'صلاة الفجر' : 'Fajr Prayer', time: times.fajr, desc: lang === 'ar' ? 'أول الصلوات الخمس، تُؤدى قبل شروق الشمس' : 'First of the five daily prayers, performed before sunrise' },
        { key: 'dhuhr', name: lang === 'ar' ? 'صلاة الظهر' : 'Dhuhr Prayer', time: times.dhuhr, desc: lang === 'ar' ? 'صلاة منتصف النهار عند زوال الشمس' : 'Midday prayer when the sun passes the meridian' },
        { key: 'asr', name: lang === 'ar' ? 'صلاة العصر' : 'Asr Prayer', time: times.asr, desc: lang === 'ar' ? 'صلاة ما بعد الظهر' : 'Afternoon prayer' },
        { key: 'maghrib', name: lang === 'ar' ? 'صلاة المغرب' : 'Maghrib Prayer', time: times.maghrib, desc: lang === 'ar' ? 'صلاة عند غروب الشمس، ووقت الإفطار في رمضان' : 'Prayer at sunset, which marks Iftar during Ramadan' },
        { key: 'isha', name: lang === 'ar' ? 'صلاة العشاء' : 'Isha Prayer', time: times.isha, desc: lang === 'ar' ? 'آخر الصلوات الخمس، بعد غياب الشفق' : 'Last of the five daily prayers, after twilight disappears' },
      ].map(p => ({
        '@type': 'Event', '@id': `${path}#${p.key}-${todayIso}`,
        name: `${p.name} - ${lang === 'ar' ? city.nameAr : city.nameEn}`,
        description: p.desc,
        startDate: `${todayIso}T${p.time}:00`,
        endDate: `${todayIso}T${p.time}:00`,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: { '@type': 'Place', name: `${lang === 'ar' ? city.nameAr : city.nameEn}, ${lang === 'ar' ? country.nameAr : country.nameEn}`, geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng } },
        organizer: { '@type': 'Organization', name: 'Mawaqit', url: '/' },
        isAccessibleForFree: true,
      })),
    },
  ] : undefined;

  useSeo({ title, description, path, keywords, jsonLd });

      {/* Hero */}
      <section className="islamic-pattern hero-gradient px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <nav className="mb-4 flex items-center gap-2 text-sm opacity-70">
            <Link to="/prayer-times" className="hover:underline">{lang === 'ar' ? 'مواقيت الصلاة' : 'Prayer Times'}</Link>
            <span>/</span>
            <Link to={`/prayer-times/${countrySlug}`} className="hover:underline">{countryName}</Link>
            <span>/</span>
            <span className="font-semibold">{cityName}</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10">
              <MapPin className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-gold md:text-5xl">
                {lang === 'ar' ? `مواقيت الصلاة في ${cityName}` : `Prayer Times in ${cityName}`}
              </h1>
              <p className="text-sm opacity-70">{countryName} • {city.lat.toFixed(2)}°N, {city.lng.toFixed(2)}°E</p>
            </div>
          </div>

          {nextPrayer && (
            <div className="mt-6 inline-flex items-center gap-4 rounded-2xl bg-primary-foreground/10 px-6 py-3 backdrop-blur-sm">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">{t('nextPrayer')}</p>
                <p className="font-heading text-xl font-bold text-gold">{t(nextPrayer.name as TranslationKey)}</p>
              </div>
              <div className="text-2xl font-bold">{nextPrayer.time}</div>
              <div className="rounded-lg bg-primary-foreground/10 px-3 py-1 text-sm">{nextPrayer.remaining}</div>
            </div>
          )}

          {loading && (
            <div className="mt-6 flex items-center gap-2"><Loader2 className="h-5 w-5 animate-spin" /><span>{t('detectingLocation')}</span></div>
          )}
        </div>
      </section>

      {/* Prayer Cards */}
      {times && (
        <section className="container mx-auto -mt-6 px-4 relative z-10">
          <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {prayerKeys.map(p => {
              const isNext = nextPrayer?.name === p.field;
              return (
                <div key={p.field} className={`rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 ${isNext ? 'bg-primary text-primary-foreground shadow-lg ring-2 ring-gold' : 'bg-card text-card-foreground shadow-md hover:shadow-lg'}`}>
                  <span className="mb-1 block text-lg">{p.icon}</span>
                  <p className={`text-xs font-bold uppercase tracking-wider ${isNext ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{t(p.key)}</p>
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

      {/* Azan Times Card */}
      {times && (
        <section className="container mx-auto px-4 py-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="font-heading text-xl font-bold text-foreground">
                {lang === 'ar' ? `أوقات الأذان في ${cityName}` : `Azan Times in ${cityName}`}
              </h2>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {lang === 'ar'
                ? `أوقات الأذان في ${cityName} تتزامن مع دخول وقت كل صلاة من الصلوات الخمس المفروضة. يُرفع أذان الفجر قبل شروق الشمس بنحو ساعة ونصف، ويُرفع أذان المغرب عند غروب الشمس وهو وقت الإفطار في رمضان.`
                : `Azan times in ${cityName} coincide with the start of each of the five obligatory prayers. The Fajr Azan is called approximately an hour and a half before sunrise, and the Maghrib Azan is called at sunset, which marks the Iftar time during Ramadan.`}
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {[
                { key: 'fajr' as const, field: 'fajr' },
                { key: 'dhuhr' as const, field: 'dhuhr' },
                { key: 'asr' as const, field: 'asr' },
                { key: 'maghrib' as const, field: 'maghrib' },
                { key: 'isha' as const, field: 'isha' },
              ].map(p => (
                <div key={p.field} className="rounded-xl bg-background p-3 text-center">
                  <p className="text-xs font-semibold text-muted-foreground">{lang === 'ar' ? `أذان ${t(p.key)}` : `${t(p.key)} Azan`}</p>
                  <p className="mt-1 font-heading text-lg font-bold text-foreground">{(times as any)[p.field]}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to={`/azan-times/${countrySlug}/${citySlug}`} className="inline-block rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {lang === 'ar' ? 'عرض جدول الأذان الشهري' : 'View Monthly Azan Timetable'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Monthly Table */}
      <section className="container mx-auto px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            {lang === 'ar' ? 'جدول الصلاة الشهري' : 'Monthly Prayer Timetable'}
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => setMonthOffset(p => p - 1)} className="rounded-xl bg-card p-2 shadow hover:bg-accent"><ChevronLeft className="h-4 w-4" /></button>
            <span className="min-w-[140px] text-center text-sm font-semibold">{monthLabel}</span>
            <button onClick={() => setMonthOffset(p => p + 1)} className="rounded-xl bg-card p-2 shadow hover:bg-accent"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>

        {monthLoading ? (
          <div className="flex items-center justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-2.5 text-start">{lang === 'ar' ? 'التاريخ' : 'Date'}</th>
                  <th className="px-3 py-2.5 text-start">{lang === 'ar' ? 'هجري' : 'Hijri'}</th>
                  {prayerKeys.map(p => (
                    <th key={p.field} className="px-3 py-2.5 text-center">{t(p.key)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((day, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                    <td className="whitespace-nowrap px-3 py-2">{day.date}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-gold">{day.hijri.day} {lang === 'ar' ? day.hijri.month.ar : day.hijri.month.en}</td>
                    {['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map(k => (
                      <td key={k} className="px-3 py-2 text-center">{day.timings[k]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* SEO Content - 1000+ words */}
      <section className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-heading text-xl font-bold text-foreground">
              {lang === 'ar' ? `مواقيت الصلاة في ${cityName}، ${countryName} - دليل شامل` : `Prayer Times in ${cityName}, ${countryName} - Complete Guide`}
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>{lang === 'ar'
                ? `تعرض هذه الصفحة مواقيت الصلاة الدقيقة والمحدثة يومياً في مدينة ${cityName}، ${countryName}. تشمل المواقيت جميع الصلوات الخمس المفروضة: صلاة الفجر وهي أول صلوات اليوم وتُؤدى قبل شروق الشمس، صلاة الظهر عند زوال الشمس عن كبد السماء، صلاة العصر في فترة ما بعد الظهر، صلاة المغرب عند غروب الشمس، وصلاة العشاء بعد غياب الشفق الأحمر من السماء. بالإضافة إلى ذلك، نعرض وقت الشروق الذي يُحدد نهاية وقت صلاة الفجر.`
                : `This page displays accurate and daily-updated prayer times for ${cityName}, ${countryName}. The timings include all five obligatory daily prayers: Fajr prayer which is the first prayer of the day performed before sunrise, Dhuhr prayer at the time when the sun passes its zenith, Asr prayer during the late afternoon, Maghrib prayer at sunset, and Isha prayer after the red twilight disappears from the sky. Additionally, we display the Sunrise time which marks the end of the Fajr prayer window.`}
              </p>
              <p>{lang === 'ar'
                ? `يتم حساب مواقيت الصلاة في ${cityName} باستخدام الإحداثيات الجغرافية الدقيقة للمدينة (خط العرض: ${city.lat.toFixed(4)}، خط الطول: ${city.lng.toFixed(4)}) وفقاً لطريقة حساب أم القرى المعتمدة رسمياً. تختلف مواقيت الصلاة من يوم لآخر بسبب التغير في موقع الشمس على مدار العام، ولذلك يتم تحديث الأوقات تلقائياً كل يوم. كما يمكنك الاطلاع على الجدول الشهري أعلاه لمعرفة مواقيت الصلاة لكل يوم من أيام الشهر الحالي والأشهر القادمة.`
                : `Prayer times in ${cityName} are calculated using the city's precise geographical coordinates (Latitude: ${city.lat.toFixed(4)}, Longitude: ${city.lng.toFixed(4)}) according to the officially recognized Umm Al-Qura calculation method. Prayer times vary from day to day due to changes in the sun's position throughout the year, which is why they are automatically updated every day. You can also view the monthly timetable above to see prayer times for each day of the current month and upcoming months.`}
              </p>
              <p>{lang === 'ar'
                ? `صلاة الفجر في ${cityName} تبدأ عندما يظهر الضوء الأول في الأفق الشرقي، ويُسمى الفجر الصادق. هذا هو أيضاً وقت بداية الصيام في شهر رمضان (وقت الإمساك). صلاة الظهر تبدأ عندما تعبر الشمس خط الزوال وتبدأ الظلال بالتمدد شرقاً. صلاة العصر تبدأ عندما يصبح طول ظل كل شيء مساوياً لطوله الحقيقي (في المذهب الشافعي) أو ضعفه (في المذهب الحنفي). صلاة المغرب تبدأ فور غروب الشمس وهي وقت الإفطار في رمضان. صلاة العشاء تبدأ عندما يختفي الشفق الأحمر من الأفق الغربي.`
                : `Fajr prayer in ${cityName} begins when the first light appears on the eastern horizon, known as the true dawn. This also marks the beginning of the fasting period during Ramadan (Imsak time). Dhuhr prayer begins when the sun crosses the meridian and shadows start extending eastward. Asr prayer starts when the shadow of an object equals its actual height (Shafi'i school) or twice its height (Hanafi school). Maghrib prayer begins immediately at sunset and marks the Iftar time during Ramadan. Isha prayer begins when the red twilight disappears from the western horizon.`}
              </p>
              <p>{lang === 'ar'
                ? `نوفر أيضاً أوقات الأذان المنفصلة في ${cityName} من خلال صفحة أوقات الأذان المخصصة. الأذان هو النداء الإسلامي للصلاة ويُرفع خمس مرات يومياً عند دخول وقت كل صلاة. يمكنك الاطلاع على جدول الأذان الشهري ومعرفة وقت الأذان القادم. كما نوفر رابطاً مباشراً لصفحة أوقات الأذان أعلاه. نحرص على توفير بيانات دقيقة وموثوقة من مصادر معتمدة لمساعدة المسلمين في ${cityName} وحول العالم على أداء صلاتهم في أوقاتها المحددة شرعاً.`
                : `We also provide separate Azan times for ${cityName} through a dedicated Azan times page. The Azan is the Islamic call to prayer, proclaimed five times daily at the beginning of each prayer time. You can view the monthly Azan timetable and find out the next Azan time. A direct link to the Azan times page is provided above. We are committed to providing accurate and reliable data from trusted sources to help Muslims in ${cityName} and around the world perform their prayers at their Islamically prescribed times. Our data is sourced from the Aladhan API which uses the same astronomical algorithms used by major Islamic institutions worldwide.`}
              </p>
              <p>{lang === 'ar'
                ? `بالإضافة إلى مواقيت الصلاة اليومية، نوفر التقويم الهجري المقابل لكل يوم ميلادي، مما يساعدك على متابعة التواريخ الإسلامية المهمة مثل شهر رمضان وعيد الفطر وعيد الأضحى ويوم عرفة وغيرها من المناسبات الإسلامية. الجدول الشهري يعرض أيضاً اليوم الهجري واسم الشهر الهجري بجانب كل تاريخ ميلادي.`
                : `In addition to daily prayer times, we provide the corresponding Hijri calendar date for each Gregorian day, helping you keep track of important Islamic dates such as the month of Ramadan, Eid al-Fitr, Eid al-Adha, the Day of Arafah, and other significant Islamic occasions. The monthly timetable also displays the Hijri day and month name alongside each Gregorian date for your convenience.`}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-heading text-lg font-bold text-foreground mb-4">
              {lang === 'ar' ? 'روابط مفيدة' : 'Useful Links'}
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <Link to={`/azan-times/${countrySlug}/${citySlug}`} className="flex items-center gap-3 rounded-xl border border-border p-3 hover:border-primary transition-colors">
                <Bell className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">{lang === 'ar' ? `أوقات الأذان في ${cityName}` : `Azan Times in ${cityName}`}</span>
              </Link>
              <Link to="/ramadan" className="flex items-center gap-3 rounded-xl border border-border p-3 hover:border-primary transition-colors">
                <Moon className="h-5 w-5 text-gold" />
                <span className="text-sm font-semibold">{lang === 'ar' ? 'تقويم رمضان' : 'Ramadan Calendar'}</span>
              </Link>
              <Link to="/qibla" className="flex items-center gap-3 rounded-xl border border-border p-3 hover:border-primary transition-colors">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">{lang === 'ar' ? 'اتجاه القبلة' : 'Qibla Direction'}</span>
              </Link>
              <Link to="/azkar" className="flex items-center gap-3 rounded-xl border border-border p-3 hover:border-primary transition-colors">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">{lang === 'ar' ? 'أذكار وأدعية' : 'Azkar & Duas'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      {otherCities.length > 0 && (
        <section className="bg-emerald-light px-4 py-10">
          <div className="container mx-auto">
            <h2 className="mb-6 text-center font-heading text-xl font-bold text-foreground">
              {lang === 'ar' ? `مواقيت الصلاة في مدن أخرى في ${countryName}` : `Prayer Times in Other ${countryName} Cities`}
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5">
              {otherCities.map(c => (
                <Link key={c.slug} to={`/prayer-times/${countrySlug}/${c.slug}`} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm text-card-foreground transition-colors hover:border-primary hover:bg-accent">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  {lang === 'ar' ? c.nameAr : c.nameEn}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
