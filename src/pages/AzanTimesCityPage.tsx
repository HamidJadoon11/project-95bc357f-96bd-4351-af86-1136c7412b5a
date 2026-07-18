import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getCountryBySlug, getGlobalCityBySlug, getCitiesByCountry } from '@/data/countries';
import { usePrayerTimes, getNextPrayer } from '@/hooks/usePrayerTimes';
import { TranslationKey } from '@/i18n/translations';
import { Bell, Clock, Loader2, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const azanPrayers: { key: TranslationKey; field: string }[] = [
  { key: 'fajr', field: 'fajr' },
  { key: 'dhuhr', field: 'dhuhr' },
  { key: 'asr', field: 'asr' },
  { key: 'maghrib', field: 'maghrib' },
  { key: 'isha', field: 'isha' },
];

interface MonthlyDay {
  date: string;
  timings: Record<string, string>;
  hijri: { day: string; month: { en: string; ar: string }; year: string };
}

export default function AzanTimesCityPage() {
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
    fetch(`https://api.aladhan.com/v1/calendar/${d.getFullYear()}/${d.getMonth() + 1}?latitude=${city.lat}&longitude=${city.lng}&method=4`)
      .then(r => r.json())
      .then(data => {
        setMonthlyData(data.data.map((day: any) => ({
          date: day.date.gregorian.date,
          timings: { Fajr: day.timings.Fajr?.split(' ')[0], Dhuhr: day.timings.Dhuhr?.split(' ')[0], Asr: day.timings.Asr?.split(' ')[0], Maghrib: day.timings.Maghrib?.split(' ')[0], Isha: day.timings.Isha?.split(' ')[0] },
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

  useEffect(() => {
    if (!city || !country) return;
    document.title = lang === 'ar' ? `أوقات الأذان في ${city.nameAr} اليوم - أذان الفجر، الظهر، العصر، المغرب، العشاء | ${country.nameAr} - مواقيت` : `Azan Times in ${city.nameEn} Today - Fajr, Dhuhr, Asr, Maghrib, Isha Azan | ${country.nameEn} - Mawaqit`;
    const desc = lang === 'ar' ? `أوقات الأذان اليوم في ${city.nameAr}، ${country.nameAr}: أذان الفجر، الظهر، العصر، المغرب، والعشاء مع جدول أذان شهري كامل وتقويم هجري.` : `Today's Azan times in ${city.nameEn}, ${country.nameEn}: Fajr, Dhuhr, Asr, Maghrib, and Isha Azan with a complete monthly Azan timetable and Hijri calendar.`;
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]'); if(!m){m=document.createElement('meta');m.setAttribute('name','description');document.head.appendChild(m);} m.setAttribute('content', desc);
    const path = `/azan-times/${countrySlug}/${citySlug}`;
    const setLink = (rel, hreflang, href) => { const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`; let el = document.head.querySelector<HTMLLinkElement>(sel); if (!el) { el = document.createElement('link'); el.rel = rel; if (hreflang) el.setAttribute('hreflang', hreflang); document.head.appendChild(el); } el.href = href; };
    setLink('canonical', null, path); setLink('alternate','en',path); setLink('alternate','ar',path); setLink('alternate','x-default',path);
  }, [city, country, lang]);

  if (!city || !country) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">{lang === 'ar' ? 'المدينة غير موجودة' : 'City not found'}</h1>
        <Link to="/azan-times" className="mt-4 inline-block text-primary underline">← {lang === 'ar' ? 'العودة' : 'Back'}</Link>
      </div>
    );
  }

  const otherCities = getCitiesByCountry(countrySlug || '').filter(c => c.slug !== citySlug).slice(0, 15);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: `Azan Times in ${city.nameEn}, ${country.nameEn}`,
        description: `Daily Azan (Adhan) times for ${city.nameEn}, ${country.nameEn}. Fajr, Dhuhr, Asr, Maghrib, Isha Azan schedule.`,
        url: `https://mawaqit.app/azan-times/${countrySlug}/${citySlug}`,
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Azan Times', item: '/azan-times' },
          { '@type': 'ListItem', position: 2, name: country.nameEn, item: `/azan-times/${countrySlug}` },
          { '@type': 'ListItem', position: 3, name: city.nameEn },
        ]},
      }) }} />

      <section className="islamic-pattern hero-gradient px-4 py-12 text-primary-foreground">
        <div className="container mx-auto">
          <nav className="mb-4 flex items-center gap-2 text-sm opacity-70">
            <Link to="/azan-times" className="hover:underline">{lang === 'ar' ? 'أوقات الأذان' : 'Azan Times'}</Link>
            <span>/</span>
            <Link to={`/azan-times/${countrySlug}`} className="hover:underline">{countryName}</Link>
            <span>/</span>
            <span className="font-semibold">{cityName}</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10">
              <Bell className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-gold md:text-5xl">
                {lang === 'ar' ? `أوقات الأذان في ${cityName}` : `Azan Times in ${cityName}`}
              </h1>
              <p className="text-sm opacity-70">{countryName}</p>
            </div>
          </div>

          {nextPrayer && nextPrayer.name !== 'sunrise' && (
            <div className="mt-6 inline-flex items-center gap-4 rounded-2xl bg-primary-foreground/10 px-6 py-3 backdrop-blur-sm">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">{lang === 'ar' ? 'الأذان القادم' : 'Next Azan'}</p>
                <p className="font-heading text-xl font-bold text-gold">{t(nextPrayer.name as TranslationKey)}</p>
              </div>
              <div className="text-2xl font-bold">{nextPrayer.time}</div>
              <div className="rounded-lg bg-primary-foreground/10 px-3 py-1 text-sm">{nextPrayer.remaining}</div>
            </div>
          )}
        </div>
      </section>

      {times && (
        <section className="container mx-auto -mt-6 px-4 relative z-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {azanPrayers.map(p => (
              <div key={p.field} className="rounded-2xl bg-card p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {lang === 'ar' ? `أذان ${t(p.key)}` : `${t(p.key)} Azan`}
                </p>
                <p className="mt-1 font-heading text-xl font-bold text-foreground">{(times as any)[p.field]}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-6">
        <div className="rounded-2xl border border-border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">{lang === 'ar' ? 'هل تبحث عن مواقيت الصلاة الكاملة؟' : 'Looking for full prayer times?'}</p>
          <Link to={`/prayer-times/${countrySlug}/${citySlug}`} className="mt-2 inline-block rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            {lang === 'ar' ? `مواقيت الصلاة في ${cityName}` : `Prayer Times in ${cityName}`}
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">{lang === 'ar' ? 'جدول الأذان الشهري' : 'Monthly Azan Timetable'}</h2>
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
                  {azanPrayers.map(p => (
                    <th key={p.field} className="px-3 py-2.5 text-center">{lang === 'ar' ? `أذان ${t(p.key)}` : `${t(p.key)}`}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((day, i) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                    <td className="whitespace-nowrap px-3 py-2">{day.date}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-gold">{day.hijri.day} {lang === 'ar' ? day.hijri.month.ar : day.hijri.month.en}</td>
                    {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map(k => (
                      <td key={k} className="px-3 py-2 text-center">{day.timings[k]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* SEO Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {lang === 'ar' ? `أوقات الأذان في ${cityName} - دليل شامل` : `Azan Times in ${cityName} - Complete Guide`}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>{lang === 'ar'
              ? `تعرض هذه الصفحة أوقات الأذان الدقيقة في مدينة ${cityName}، ${countryName}. يُرفع الأذان خمس مرات يومياً عند دخول وقت كل صلاة من الصلوات الخمس المفروضة: أذان الفجر عند طلوع الفجر الصادق، أذان الظهر عند زوال الشمس، أذان العصر عندما يصبح ظل كل شيء مثله، أذان المغرب عند غروب الشمس (وهو وقت الإفطار في رمضان)، وأذان العشاء عند غياب الشفق الأحمر. الأذان نداء عظيم يذكّر المسلمين بأداء الصلاة في وقتها. قال النبي ﷺ: «إذا سمعتم النداء فقولوا مثل ما يقول المؤذن» (رواه البخاري ومسلم).`
              : `This page displays accurate Azan (Adhan) times for ${cityName}, ${countryName}. The Azan is called five times daily at the beginning of each obligatory prayer: Fajr Azan at the true dawn, Dhuhr Azan when the sun passes its zenith, Asr Azan when the shadow of an object equals its height, Maghrib Azan at sunset (which marks Iftar time during Ramadan), and Isha Azan when the red twilight disappears. The Azan is a magnificent call that reminds Muslims to perform their prayers on time. The Prophet Muhammad (PBUH) said: "When you hear the call to prayer, repeat what the muezzin says" (Bukhari & Muslim). Our Azan schedule is updated daily using precise astronomical calculations for maximum accuracy.`}
            </p>
            <p>{lang === 'ar'
              ? `يمكنك الاطلاع على جدول الأذان الشهري أعلاه لمعرفة أوقات الأذان لكل يوم من أيام الشهر. كما نوفر رابطاً مباشراً لصفحة مواقيت الصلاة الكاملة في ${cityName} التي تشمل أيضاً وقت الشروق والتقويم الهجري والجدول الشهري الكامل. نحرص على توفير بيانات دقيقة وموثوقة لمساعدة المسلمين في أداء صلاتهم في أوقاتها المحددة شرعاً.`
              : `You can view the monthly Azan timetable above to find daily Azan times for each day of the month. We also provide a direct link to the full prayer times page for ${cityName}, which includes Sunrise time, Hijri calendar, and the complete monthly timetable. We are committed to providing accurate and reliable data to help Muslims perform their prayers at their Islamically prescribed times.`}
            </p>
          </div>
        </div>
      </section>

      {otherCities.length > 0 && (
        <section className="bg-emerald-light px-4 py-10">
          <div className="container mx-auto">
            <h2 className="mb-4 font-heading text-lg font-bold text-foreground">
              {lang === 'ar' ? `أوقات الأذان في مدن أخرى` : `Azan Times in Other Cities`}
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {otherCities.map(c => (
                <Link key={c.slug} to={`/azan-times/${countrySlug}/${c.slug}`} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-accent">
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
