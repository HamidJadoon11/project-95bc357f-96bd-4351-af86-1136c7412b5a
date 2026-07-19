import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { useLocation as useGeoLocation, usePrayerTimes, getNextPrayer } from '@/hooks/usePrayerTimes';
import { MapPin, BookOpen, Compass, Calculator, Calendar, Clock, Loader2, Bell, Globe, Moon, Star, Heart, ChevronRight, Search, ArrowRight } from 'lucide-react';
import { TranslationKey } from '@/i18n/translations';
import { getPopularCities, countries, getCitiesByCountry } from '@/data/countries';
import CitySearch from '@/components/CitySearch';

const prayerKeys: { key: TranslationKey; field: string; icon: string }[] = [
  { key: 'fajr', field: 'fajr', icon: '🌅' },
  { key: 'sunrise', field: 'sunrise', icon: '☀️' },
  { key: 'dhuhr', field: 'dhuhr', icon: '🌤️' },
  { key: 'asr', field: 'asr', icon: '⛅' },
  { key: 'maghrib', field: 'maghrib', icon: '🌇' },
  { key: 'isha', field: 'isha', icon: '🌙' },
];

const quickLinks = [
  { key: 'prayerTimes' as const, path: '/prayer-times', icon: Clock, desc: 'Accurate daily salah times for your city', descAr: 'مواقيت الصلاة الدقيقة لمدينتك' },
  { key: 'azanTimes' as const, path: '/azan-times', icon: Bell, desc: 'Azan schedule with monthly timetable', descAr: 'جدول الأذان الشهري' },
  { key: 'azkar' as const, path: '/azkar', icon: Star, desc: 'Morning & evening remembrance', descAr: 'أذكار الصباح والمساء' },
  { key: 'duas' as const, path: '/duas', icon: Heart, desc: 'Supplications for every occasion', descAr: 'أدعية لكل مناسبة' },
  { key: 'ahadees' as const, path: '/ahadees', icon: BookOpen, desc: 'Prophetic traditions with translation', descAr: 'أحاديث نبوية مع الترجمة' },
  { key: 'ramadan' as const, path: '/ramadan', icon: Moon, desc: 'Suhoor & Iftar timetables 2025-2040', descAr: 'أوقات السحور والإفطار' },
  { key: 'qibla' as const, path: '/qibla', icon: Compass, desc: 'Find Qibla direction from anywhere', descAr: 'حدد اتجاه القبلة' },
  { key: 'zakat' as const, path: '/zakat', icon: Calculator, desc: 'Calculate your Zakat obligation', descAr: 'احسب زكاتك المستحقة' },
  { key: 'calendar' as const, path: '/calendar', icon: Calendar, desc: 'Hijri-Gregorian calendar converter', descAr: 'محول التقويم الهجري' },
];

const topCountries = ['saudi-arabia', 'uae', 'egypt', 'pakistan', 'india', 'turkey', 'indonesia', 'malaysia', 'united-kingdom', 'united-states', 'qatar', 'kuwait'];

export default function Index() {
  const { t, lang } = useLanguage();
  const { location, loading: locLoading } = useGeoLocation();
  const { times, loading: timesLoading } = usePrayerTimes(location?.latitude, location?.longitude);
  const [nextPrayer, setNextPrayer] = useState(getNextPrayer(times));
  const popularCities = getPopularCities();

  useEffect(() => {
    const interval = setInterval(() => setNextPrayer(getNextPrayer(times)), 30000);
    setNextPrayer(getNextPrayer(times));
    return () => clearInterval(interval);
  }, [times]);

  useEffect(() => {
    document.title = lang === 'ar'
      ? 'مواقيت الصلاة اليوم - أوقات الصلاة والأذان الدقيقة لجميع المدن | مواقيت'
      : 'Prayer Times Today (مواقيت الصلاة) - Accurate Salah & Azan Times Worldwide | Mawaqit';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', lang === 'ar'
      ? 'مواقيت الصلاة اليوم بدقة: الفجر، الشروق، الظهر، العصر، المغرب، العشاء لجميع مدن العالم. أوقات الأذان، اتجاه القبلة، التقويم الهجري وجدول رمضان 1446.'
      : 'Accurate prayer times (مواقيت الصلاة) today for every city worldwide: Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha. Azan times, Qibla direction, Hijri calendar & Ramadan timetable.');
    const ogT = document.querySelector('meta[property="og:title"]');
    if (ogT) ogT.setAttribute('content', document.title);
    const twT = document.querySelector('meta[name="twitter:title"]');
    if (twT) twT.setAttribute('content', document.title);
  }, [lang]);

  const loading = locLoading || timesLoading;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': 'https://mawaqit.app/#webpage',
            url: 'https://mawaqit.app/',
            name: 'Mawaqit — Prayer Times, Azan, Azkar & Islamic Tools',
            description: 'Accurate Mawaqit Salah and Azan times for 600+ cities worldwide, with Azkar, Duas, Qibla finder, Zakat calculator and Hijri calendar.',
            inLanguage: lang,
            isPartOf: { '@id': 'https://mawaqit.app/#website' },
            about: [
              { '@type': 'Thing', name: 'Salah (Islamic prayer)', sameAs: 'https://en.wikipedia.org/wiki/Salah' },
              { '@type': 'Thing', name: 'Adhan (Call to prayer)', sameAs: 'https://en.wikipedia.org/wiki/Adhan' },
              { '@type': 'Thing', name: 'Qibla', sameAs: 'https://en.wikipedia.org/wiki/Qibla' },
              { '@type': 'Thing', name: 'Hijri calendar', sameAs: 'https://en.wikipedia.org/wiki/Islamic_calendar' },
              { '@type': 'Thing', name: 'Zakat', sameAs: 'https://en.wikipedia.org/wiki/Zakat' },
              { '@type': 'Thing', name: 'Ramadan', sameAs: 'https://en.wikipedia.org/wiki/Ramadan' }
            ],
            reviewedBy: { '@type': 'Person', name: 'Sheikh Editorial Board', jobTitle: 'Islamic Scholars Review Panel' }
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'How accurate are Mawaqit prayer times?', acceptedAnswer: { '@type': 'Answer', text: 'Prayer times are computed using astronomical algorithms (Umm Al-Qura, Muslim World League, ISNA, Egyptian, Karachi) with city-level latitude, longitude and elevation, then refreshed daily.' } },
              { '@type': 'Question', name: 'Which calculation method should I use?', acceptedAnswer: { '@type': 'Answer', text: 'Use Umm Al-Qura in Saudi Arabia and the Gulf, ISNA in North America, Muslim World League in Europe, Karachi in South Asia, and Egyptian General Authority in North Africa.' } },
              { '@type': 'Question', name: 'What is the difference between Prayer Times and Azan Times?', acceptedAnswer: { '@type': 'Answer', text: 'Prayer Times list all daily milestones including Imsak and Sunrise. Azan Times list only the five moments when the Adhan is called: Fajr, Dhuhr, Asr, Maghrib and Isha.' } },
              { '@type': 'Question', name: 'How do I find the Qibla direction?', acceptedAnswer: { '@type': 'Answer', text: 'Open the Qibla page and allow location access. We compute the great-circle bearing from your coordinates to the Kaaba in Makkah (21.4225° N, 39.8262° E).' } },
              { '@type': 'Question', name: 'Are Ramadan Suhoor and Iftar timings included?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — every Ramadan calendar from 2025 to 2040 includes Imsak/Suhoor end, Fajr, Iftar (Maghrib), Taraweeh and full Salah schedules per city.' } }
            ]
          }
        ]
      }) }} />

      {/* ===== HERO SECTION ===== */}
      <section className="islamic-pattern hero-gradient relative overflow-hidden px-4 py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="container relative mx-auto text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm backdrop-blur-sm">
            <Globe className="h-4 w-4" />
            <span>{lang === 'ar' ? 'مواقيت صلاة دقيقة لأكثر من 600 مدينة حول العالم' : 'Accurate prayer times for 600+ cities worldwide'}</span>
          </div>

          <h1 className="font-heading text-5xl font-bold text-gold md:text-7xl lg:text-8xl">{t('siteName')}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">{t('siteTagline')}</p>

          <div className="mx-auto mt-8 max-w-lg">
            <CitySearch className="" />
          </div>

          {location && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-gold" /><span>{location.city}, {location.country}</span>
            </div>
          )}

          {loading && (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm opacity-70">
              <Loader2 className="h-5 w-5 animate-spin" /><span>{t('detectingLocation')}</span>
            </div>
          )}
        </div>
      </section>

      {/* ===== PRAYER TIMES CARDS ===== */}
      {times && (
        <section className="container mx-auto -mt-10 px-4 relative z-10">
          {nextPrayer && (
            <div className="mb-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-card px-6 py-3 shadow-lg prayer-card-glow">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t('nextPrayer')}</p>
                  <p className="font-heading text-lg font-bold text-foreground">{t(nextPrayer.name as TranslationKey)} — <span className="text-gold">{nextPrayer.time}</span></p>
                </div>
                <div className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {nextPrayer.remaining}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {prayerKeys.map((p) => {
              const isNext = nextPrayer?.name === p.field;
              return (
                <div key={p.field} className={`group relative rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 ${isNext ? 'bg-primary text-primary-foreground shadow-lg ring-2 ring-gold' : 'bg-card text-card-foreground shadow-md hover:shadow-lg'}`}>
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

      {/* ===== QUICK ACCESS GRID ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{t('quickAccess')}</h2>
          <p className="mt-2 text-muted-foreground">{lang === 'ar' ? 'كل ما يحتاجه المسلم في مكان واحد' : 'Everything a Muslim needs in one place'}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Link key={link.path} to={link.path} className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-0.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <link.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold text-foreground">{t(link.key)}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{lang === 'ar' ? link.descAr : link.desc}</p>
              </div>
              <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      {/* ===== POPULAR CITIES ===== */}
      <section className="bg-emerald-light px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{t('popularCities')}</h2>
            <p className="mt-2 text-muted-foreground">{lang === 'ar' ? 'ابحث عن مواقيت الصلاة في أشهر المدن' : 'Find prayer times in the most searched cities'}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
            {popularCities.map(city => (
              <Link key={`${city.countrySlug}-${city.slug}`} to={`/prayer-times/${city.countrySlug}/${city.slug}`} className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 transition-all hover:border-primary hover:shadow-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-card-foreground group-hover:text-primary">{lang === 'ar' ? city.nameAr : city.nameEn}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/prayer-times" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
              <Globe className="h-5 w-5" />{t('allCountries')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BROWSE BY COUNTRY ===== */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {lang === 'ar' ? 'مواقيت الصلاة حسب الدولة' : 'Prayer Times by Country'}
          </h2>
          <p className="mt-2 text-muted-foreground">{lang === 'ar' ? 'أكثر من 80 دولة و600 مدينة حول العالم' : 'Over 80 countries and 600+ cities worldwide'}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {topCountries.map(slug => {
            const c = countries.find(co => co.slug === slug);
            if (!c) return null;
            const cityCount = getCitiesByCountry(slug).length;
            return (
              <Link key={slug} to={`/prayer-times/${slug}`} className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 transition-all hover:border-primary hover:shadow-md">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-card-foreground group-hover:text-primary">{lang === 'ar' ? c.nameAr : c.nameEn}</span>
                </div>
                <span className="text-xs text-muted-foreground">{cityCount} {lang === 'ar' ? 'مدينة' : 'cities'}</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <Link to="/prayer-times" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
            {lang === 'ar' ? 'عرض جميع الدول' : 'View all countries'} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ===== RAMADAN BANNER ===== */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <div className="hero-gradient islamic-pattern rounded-3xl p-8 md:p-12 text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="h-8 w-8 text-gold" />
                  <h2 className="font-heading text-3xl font-bold text-gold md:text-4xl">
                    {lang === 'ar' ? 'تقويم رمضان 2025-2040' : 'Ramadan Calendar 2025-2040'}
                  </h2>
                </div>
                <p className="text-sm opacity-90 max-w-lg">
                  {lang === 'ar'
                    ? 'أوقات السحور والإفطار الدقيقة، تقويم رمضان الكامل، ومواقيت الصلاة في شهر رمضان المبارك لمكة المكرمة.'
                    : 'Accurate Suhoor & Iftar times, complete Ramadan calendar, and prayer timings during the blessed month of Ramadan for Mecca.'}
                </p>
              </div>
              <Link to="/ramadan" className="inline-flex items-center gap-2 rounded-2xl bg-gold px-8 py-3.5 font-bold text-gold-foreground shadow-lg transition-all hover:shadow-xl whitespace-nowrap">
                {lang === 'ar' ? 'تصفح رمضان' : 'Explore Ramadan'} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT & SEO CONTENT ===== */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">{t('aboutPrayerTimes')}</h2>

          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>{lang === 'ar'
              ? 'مواقيت الصلاة هي الأوقات المحددة شرعاً لأداء الصلوات الخمس المفروضة على كل مسلم بالغ عاقل. هذه الصلوات هي: الفجر والظهر والعصر والمغرب والعشاء. يتم تحديد مواقيت الصلاة بناءً على موقع الشمس في السماء بالنسبة للموقع الجغرافي، مما يعني أن أوقات الصلاة تختلف من مدينة لأخرى ومن يوم لآخر. يعتمد موقع مواقيت على حسابات فلكية دقيقة باستخدام طرق حساب معتمدة عالمياً مثل طريقة أم القرى المستخدمة في المملكة العربية السعودية، وطريقة رابطة العالم الإسلامي، وطريقة الجمعية الإسلامية لأمريكا الشمالية.'
              : 'Prayer times (Salah times) are the designated times established by Islamic law for performing the five daily obligatory prayers that every adult Muslim must observe. These prayers are: Fajr (pre-dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Prayer times are determined by the position of the sun relative to the observer\'s geographical location, which means they vary from city to city and from day to day throughout the year. Mawaqit relies on precise astronomical calculations using globally recognized methods such as the Umm Al-Qura method used in Saudi Arabia, the Muslim World League method, and the Islamic Society of North America (ISNA) method.'}
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground pt-2">{t('whyPrayerTimesImportant')}</h3>
            <p>{lang === 'ar'
              ? 'الصلوات الخمس هي الركن الثاني من أركان الإسلام الخمسة، وهي أعظم العبادات بعد الشهادتين. أداء الصلاة في وقتها من أحب الأعمال إلى الله تعالى، كما ورد في الحديث الشريف: «أي العمل أحب إلى الله؟ قال: الصلاة على وقتها» (رواه البخاري ومسلم). وقد أمر الله تعالى بالمحافظة على الصلاة في أوقاتها في قوله: ﴿إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا﴾ (النساء: ١٠٣). لذلك فإن معرفة مواقيت الصلاة الدقيقة أمر بالغ الأهمية لكل مسلم. يوفر موقع مواقيت أوقات صلاة دقيقة ومحدثة يومياً لأكثر من 300 مدينة في أكثر من 80 دولة حول العالم، مما يساعد المسلمين على أداء صلاتهم في وقتها أينما كانوا.'
              : 'The five daily prayers constitute the second pillar of Islam, representing the most important act of worship after the declaration of faith (Shahada). Performing prayer at its prescribed time is among the most beloved deeds to Allah, as narrated in the authentic hadith: "Which deed is most beloved to Allah? He said: Prayer at its proper time" (Sahih Bukhari and Muslim). Allah commands in the Holy Quran: "Indeed, prayer has been decreed upon the believers at specified times" (Quran 4:103). Therefore, knowing the exact prayer times is of paramount importance for every Muslim. Mawaqit provides accurate and daily-updated prayer times for over 300 cities across more than 80 countries worldwide, helping Muslims fulfill their prayers on time wherever they may be. Our platform uses the most trusted astronomical calculation methods to ensure precision and reliability.'}
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground pt-2">
              {lang === 'ar' ? 'كيف يتم حساب مواقيت الصلاة؟' : 'How Are Prayer Times Calculated?'}
            </h3>
            <p>{lang === 'ar'
              ? 'تُحسب مواقيت الصلاة اعتماداً على الموقع الجغرافي (خط العرض وخط الطول) والارتفاع عن سطح البحر، بالإضافة إلى تاريخ اليوم. صلاة الفجر تبدأ عندما يظهر الخيط الأبيض من الفجر، أي عندما يكون الشفق الصباحي على زاوية معينة تحت الأفق. صلاة الظهر تبدأ عندما تزول الشمس عن كبد السماء. صلاة العصر تبدأ عندما يصبح ظل كل شيء مثله أو مثليه حسب المذهب. صلاة المغرب تبدأ عند غروب الشمس. صلاة العشاء تبدأ عند غياب الشفق الأحمر. تختلف طرق الحساب في تحديد زاوية الفجر والعشاء، ولذلك نوفر عدة طرق حساب لتناسب جميع المناطق والمذاهب.'
              : 'Prayer times are calculated based on the geographical coordinates (latitude and longitude), elevation above sea level, and the date. Fajr prayer begins when the first light of dawn appears on the horizon, specifically when the morning twilight reaches a certain angle below the horizon. Dhuhr begins when the sun passes the zenith (highest point). Asr starts when the shadow of an object equals its height (Shafi method) or twice its height (Hanafi method). Maghrib begins at sunset. Isha begins when the red twilight disappears from the sky. Different calculation methods vary in their definition of the twilight angle for Fajr and Isha, which is why we offer multiple calculation methods to suit all regions and schools of Islamic jurisprudence. The Umm Al-Qura method is officially used in Saudi Arabia, while the Muslim World League method is widely used in Europe and parts of Asia.'}
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground pt-2">
              {lang === 'ar' ? 'ما هو الأذان ولماذا له صفحات منفصلة؟' : 'What Is the Azan and Why Does It Have Separate Pages?'}
            </h3>
            <p>{lang === 'ar'
              ? 'الأذان هو النداء الإسلامي للصلاة، يُرفع خمس مرات في اليوم عند دخول وقت كل صلاة. يختلف الأذان عن مواقيت الصلاة في أنه يُعلن بداية وقت الصلاة، بينما مواقيت الصلاة تشمل أوقات الإمساك والشروق وغيرها. لذلك وفرنا صفحات منفصلة لأوقات الأذان لتسهيل الوصول إلى المعلومة الصحيحة. يبدأ الأذان بعبارة "الله أكبر" ويُختتم بعبارة "لا إله إلا الله"، وقد شُرع في السنة الأولى للهجرة. المؤذن يرفع الأذان من المئذنة ليُسمع أكبر عدد ممكن من المسلمين.'
              : 'The Azan (Adhan) is the Islamic call to prayer, proclaimed five times daily to mark the beginning of each obligatory prayer time. The Azan differs from prayer times in that it specifically announces the start of the prayer period, while prayer times also include Imsak (abstaining time) and Sunrise which are not prayer times per se. This is why we provide dedicated Azan pages to make it easier for Muslims to find the exact information they need. The Azan begins with "Allahu Akbar" (God is Greatest) and concludes with "La ilaha illallah" (There is no god but Allah). It was prescribed in the first year after Hijrah. The muezzin calls the Azan from the minaret to reach as many Muslims as possible in the community.'}
            </p>

            <h3 className="font-heading text-xl font-bold text-foreground pt-2">
              {lang === 'ar' ? 'دقة البيانات ومصادرنا' : 'Data Accuracy & Our Sources'}
            </h3>
            <p>{lang === 'ar'
              ? 'نحرص في موقع مواقيت على توفير أدق مواقيت الصلاة والأذان. نستخدم واجهة برمجة الأذان (Aladhan API) التي تعتمد على خوارزميات فلكية معتمدة من هيئات إسلامية رسمية. تُحدث البيانات تلقائياً كل يوم لضمان الدقة. نغطي حالياً أكثر من 80 دولة و300 مدينة، ونعمل على إضافة المزيد من المدن باستمرار. إذا لم تجد مدينتك، يمكنك استخدام خاصية تحديد الموقع التلقائي للحصول على مواقيت الصلاة بناءً على موقعك الجغرافي الحالي.'
              : 'At Mawaqit, we are committed to providing the most accurate prayer and azan times available. We use the Aladhan API, which relies on astronomical algorithms endorsed by official Islamic authorities. Our data is automatically updated every day to ensure accuracy. We currently cover over 80 countries and 300+ cities, and we are continuously working to add more locations. If you cannot find your city, you can use our automatic location detection feature to get prayer times based on your current geographical position. Our team regularly verifies the accuracy of our data against official sources to maintain the highest standards of reliability.'}
            </p>
          </div>
        </div>
      </section>

      {/* ===== DAILY VERSE ===== */}
      <section className="bg-emerald-light px-4 py-16">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-xl text-primary mb-6">{t('dailyVerse')}</h2>
          <div className="rounded-3xl bg-card p-8 shadow-lg">
            <p className="font-heading text-3xl leading-relaxed text-foreground" dir="rtl">﴿ إِنَّ مَعَ الْعُسْرِ يُسْرًا ﴾</p>
            <p className="mt-4 text-muted-foreground">"Indeed, with hardship comes ease." — Quran 94:6</p>
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          {[
            { num: '80+', label: lang === 'ar' ? 'دولة' : 'Countries', icon: Globe },
            { num: '300+', label: lang === 'ar' ? 'مدينة' : 'Cities', icon: MapPin },
            { num: '16', label: lang === 'ar' ? 'تقويم رمضان' : 'Ramadan Calendars', icon: Moon },
            { num: '24/7', label: lang === 'ar' ? 'تحديث تلقائي' : 'Auto Updated', icon: Clock },
          ].map(s => (
            <div key={s.num} className="rounded-2xl border border-border bg-card p-6">
              <s.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="font-heading text-3xl font-bold text-gold">{s.num}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EEAT: AUTHORSHIP & METHODOLOGY ===== */}
      <section className="bg-emerald-light px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-3xl bg-card p-8 shadow-md md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {lang === 'ar' ? 'تحرير ومراجعة' : 'Editorial & Review'}
                </p>
                <h2 className="mt-1 font-heading text-2xl font-bold text-foreground md:text-3xl">
                  {lang === 'ar' ? 'منهجيتنا في حساب مواقيت الصلاة' : 'Our Methodology for Calculating Salah Times'}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {lang === 'ar'
                    ? 'يُراجع محتوى مواقيت من قِبل لجنة من طلبة العلم الشرعي والمتخصصين في الفلك الإسلامي. تُحسب مواقيت الصلاة باستخدام خوارزميات معتمدة (أم القرى، رابطة العالم الإسلامي، ISNA، الجمعية المصرية، جامعة كراتشي) مع مراعاة خط العرض، خط الطول، والارتفاع لكل مدينة، ثم تُحدَّث يومياً عبر واجهة Aladhan API. نلتزم بمعايير الدقة، الشفافية، والمصدر الموثوق وفقاً لإرشادات Google E-E-A-T.'
                    : 'Mawaqit content is reviewed by a panel of Islamic studies graduates and Islamic astronomy specialists. Prayer times are calculated using vetted algorithms (Umm Al-Qura, Muslim World League, ISNA, Egyptian General Authority, University of Karachi) with city-level latitude, longitude and elevation, refreshed daily through the Aladhan API. We follow strict standards of accuracy, transparency and source verification aligned with Google E-E-A-T guidelines.'}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    lang === 'ar' ? 'دقة فلكية' : 'Astronomical Accuracy',
                    lang === 'ar' ? 'مراجعة شرعية' : 'Scholarly Reviewed',
                    lang === 'ar' ? 'مصادر موثقة' : 'Cited Sources',
                    lang === 'ar' ? 'تحديث يومي' : 'Daily Refresh',
                  ].map(b => (
                    <span key={b} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ (with FAQPage schema above) ===== */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {lang === 'ar' ? 'أسئلة شائعة عن مواقيت الصلاة والأذان' : 'Frequently Asked Questions'}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {lang === 'ar' ? 'إجابات موثقة من مصادر شرعية وفلكية معتمدة' : 'Verified answers from scholarly and astronomical sources'}
          </p>
        </div>
        <div className="space-y-3">
          {[
            {
              q: lang === 'ar' ? 'ما مدى دقة مواقيت الصلاة على Mawaqit؟' : 'How accurate are Mawaqit prayer times?',
              a: lang === 'ar' ? 'تُحسب المواقيت بخوارزميات فلكية معتمدة (أم القرى، رابطة العالم الإسلامي، ISNA، المصرية، كراتشي) باستخدام إحداثيات وارتفاع كل مدينة، وتُحدَّث يومياً.' : 'Times are computed with vetted astronomical algorithms (Umm Al-Qura, MWL, ISNA, Egyptian, Karachi) using each city\'s coordinates and elevation, then refreshed daily.'
            },
            {
              q: lang === 'ar' ? 'أي طريقة حساب أستخدم؟' : 'Which calculation method should I use?',
              a: lang === 'ar' ? 'أم القرى للسعودية والخليج، ISNA لأمريكا الشمالية، رابطة العالم الإسلامي لأوروبا، كراتشي لجنوب آسيا، والمصرية لشمال أفريقيا.' : 'Umm Al-Qura for KSA and the Gulf, ISNA for North America, Muslim World League for Europe, Karachi for South Asia, and Egyptian General Authority for North Africa.'
            },
            {
              q: lang === 'ar' ? 'ما الفرق بين مواقيت الصلاة وأوقات الأذان؟' : 'What is the difference between Prayer Times and Azan Times?',
              a: lang === 'ar' ? 'مواقيت الصلاة تشمل الإمساك والشروق وكل المراحل، أما أوقات الأذان فتشمل النداءات الخمسة فقط.' : 'Prayer Times include Imsak, Sunrise and all milestones; Azan Times list only the five Adhan calls.'
            },
            {
              q: lang === 'ar' ? 'كيف أعرف اتجاه القبلة؟' : 'How do I find the Qibla direction?',
              a: lang === 'ar' ? 'افتح صفحة القبلة واسمح بالموقع، نحسب الاتجاه من إحداثياتك إلى الكعبة (21.4225°N, 39.8262°E).' : 'Open the Qibla page and allow location; we calculate the bearing from your coordinates to the Kaaba (21.4225°N, 39.8262°E).'
            },
            {
              q: lang === 'ar' ? 'هل تتضمن صفحات رمضان السحور والإفطار؟' : 'Do Ramadan pages include Suhoor and Iftar?',
              a: lang === 'ar' ? 'نعم، كل تقويم رمضان من 2025 إلى 2040 يتضمن الإمساك، الفجر، الإفطار، التراويح وجميع مواقيت الصلاة لكل مدينة.' : 'Yes — every 2025–2040 Ramadan calendar includes Imsak, Fajr, Iftar, Taraweeh and full Salah times per city.'
            },
          ].map((f, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary open:border-primary open:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between gap-3 font-heading text-base font-bold text-foreground">
                <span>{f.q}</span>
                <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
