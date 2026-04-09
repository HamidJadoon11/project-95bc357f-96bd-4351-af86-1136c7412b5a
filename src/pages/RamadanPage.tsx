import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Loader2, Calendar, Moon } from 'lucide-react';

const ramadanYears = Array.from({ length: 16 }, (_, i) => 2025 + i);

function getRamadanHijriYear(gregorianYear: number): number {
  return Math.round((gregorianYear - 622) * (33 / 32));
}

export default function RamadanPage() {
  const { year: yearParam } = useParams<{ year: string }>();
  const { lang } = useLanguage();
  const year = yearParam ? parseInt(yearParam) : new Date().getFullYear();
  const hijriYear = getRamadanHijriYear(year);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = lang === 'ar'
      ? `تقويم رمضان ${year} / ${hijriYear} هـ - مواقيت`
      : `Ramadan ${year} / ${hijriYear} AH Calendar - Mawaqit`;
  }, [year, hijriYear, lang]);

  useEffect(() => {
    setLoading(true);
    // Fetch Hijri calendar for Ramadan (month 9) of the approximate Hijri year
    fetch(`https://api.aladhan.com/v1/gpiCalendarByCity/${year}/3?city=Mecca&country=Saudi%20Arabia&method=4`)
      .then(r => r.json())
      .then(res => {
        // Find days that fall in Ramadan
        const ramadanDays = (res.data || []).filter((d: any) =>
          d?.hijri?.month?.number === 9
        );
        setData(ramadanDays.length > 0 ? ramadanDays : res.data || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [year]);

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto text-center">
          <Moon className="mx-auto h-10 w-10 text-gold" />
          <h1 className="mt-3 font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? `تقويم رمضان ${year}` : `Ramadan ${year} Calendar`}
          </h1>
          <p className="mt-2 text-sm opacity-70">
            {lang === 'ar' ? `رمضان ${hijriYear} هـ - إمساكية وأوقات الإفطار` : `Ramadan ${hijriYear} AH - Suhoor & Iftar Timetable`}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {ramadanYears.map(y => (
            <Link
              key={y}
              to={`/ramadan/${y}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${y === year ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground hover:bg-muted'}`}
            >
              {y}
            </Link>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
        ) : data.length > 0 ? (
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-3 py-2 text-start">{lang === 'ar' ? 'اليوم' : 'Day'}</th>
                  <th className="px-3 py-2 text-start">{lang === 'ar' ? 'التاريخ الميلادي' : 'Gregorian'}</th>
                  <th className="px-3 py-2 text-start">{lang === 'ar' ? 'التاريخ الهجري' : 'Hijri'}</th>
                  <th className="px-3 py-2 text-center">{lang === 'ar' ? 'الإمساك' : 'Imsak'}</th>
                  <th className="px-3 py-2 text-center">{lang === 'ar' ? 'الفجر' : 'Fajr'}</th>
                  <th className="px-3 py-2 text-center">{lang === 'ar' ? 'الشروق' : 'Sunrise'}</th>
                  <th className="px-3 py-2 text-center">{lang === 'ar' ? 'المغرب (إفطار)' : 'Maghrib (Iftar)'}</th>
                  <th className="px-3 py-2 text-center">{lang === 'ar' ? 'العشاء' : 'Isha'}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((day: any, i: number) => (
                  <tr key={i} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                    <td className="px-3 py-2">{day.hijri?.day || i + 1}</td>
                    <td className="px-3 py-2">{day.gregorian?.date}</td>
                    <td className="px-3 py-2 text-gold">{day.hijri?.day} {lang === 'ar' ? day.hijri?.month?.ar : day.hijri?.month?.en}</td>
                    <td className="px-3 py-2 text-center">{day.timings?.Imsak?.split(' ')[0]}</td>
                    <td className="px-3 py-2 text-center">{day.timings?.Fajr?.split(' ')[0]}</td>
                    <td className="px-3 py-2 text-center">{day.timings?.Sunrise?.split(' ')[0]}</td>
                    <td className="px-3 py-2 text-center font-semibold text-primary">{day.timings?.Maghrib?.split(' ')[0]}</td>
                    <td className="px-3 py-2 text-center">{day.timings?.Isha?.split(' ')[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">{lang === 'ar' ? 'لا تتوفر بيانات حالياً' : 'No data available for this year yet.'}</p>
        )}

        <div className="mt-10 rounded-xl bg-card p-6 shadow-sm">
          <h2 className="font-heading text-lg font-bold text-foreground">
            {lang === 'ar' ? `فضل شهر رمضان ${year}` : `The Virtue of Ramadan ${year}`}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {lang === 'ar'
              ? `رمضان هو الشهر التاسع في التقويم الهجري، وهو شهر الصيام والقيام وتلاوة القرآن. فُرض صيامه على المسلمين في السنة الثانية للهجرة. يمتنع المسلمون عن الطعام والشراب من طلوع الفجر حتى غروب الشمس. تقويم رمضان ${year} / ${hijriYear} هـ يوفر أوقات الإمساك والإفطار الدقيقة لمدينة مكة المكرمة. يُنصح بمراجعة أوقات مدينتك المحلية.`
              : `Ramadan is the ninth month of the Islamic Hijri calendar, a month of fasting, prayer, and Quran recitation. Fasting was made obligatory in the second year after Hijrah. Muslims abstain from food and drink from dawn until sunset. This Ramadan ${year} / ${hijriYear} AH calendar provides accurate Imsak and Iftar times for Mecca. Please check your local city times for precise timings.`}
          </p>
        </div>
      </section>
    </div>
  );
}
