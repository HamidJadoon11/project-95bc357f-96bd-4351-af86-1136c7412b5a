import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface HijriDay {
  gregorian: { day: string; date: string; month: { number: number; en: string }; year: string; weekday: { en: string } };
  hijri: { day: string; month: { number: number; en: string; ar: string }; year: string };
}

const weekDaysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekDaysAr = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];

export default function CalendarPage() {
  const { t, lang } = useLanguage();
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState<HijriDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`)
      .then(r => r.json())
      .then(data => {
        if (data.code === 200 && data.data) {
          setDays(data.data);
        } else {
          setDays([]);
        }
      })
      .catch(() => setDays([]))
      .finally(() => setLoading(false));
  }, [month, year]);

  const prevMonth = () => {
    if (month === 1) { setMonth(12); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 12) { setMonth(1); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNamesAr = ['', 'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  const monthLabel = lang === 'ar' ? `${monthNamesAr[month]} ${year}` : `${monthNames[month]} ${year}`;

  const hijriInfo = days.length > 0
    ? `${lang === 'ar' ? days[0].hijri.month.ar : days[0].hijri.month.en} ${days[0].hijri.year} — ${lang === 'ar' ? days[days.length - 1].hijri.month.ar : days[days.length - 1].hijri.month.en} ${days[days.length - 1].hijri.year}`
    : '';

  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth() + 1;
  const todayYear = new Date().getFullYear();
  const firstDayOffset = new Date(year, month - 1, 1).getDay();
  const weekDays = lang === 'ar' ? weekDaysAr : weekDaysEn;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-heading text-3xl font-bold text-foreground">{t('hijriCalendar')}</h1>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={prevMonth} className="rounded-full bg-card p-2 shadow hover:bg-muted">
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <div className="text-center">
          <p className="font-heading text-xl font-bold text-foreground">{monthLabel}</p>
          {hijriInfo && <p className="text-sm text-gold">{hijriInfo}</p>}
        </div>
        <button onClick={nextMonth} className="rounded-full bg-card p-2 shadow hover:bg-muted">
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {loading && (
        <div className="mt-8 flex justify-center"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
      )}

      {!loading && days.length > 0 && (
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground">
            {weekDays.map(d => <div key={d} className="py-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOffset }).map((_, i) => <div key={`e-${i}`} />)}
            {days.map((day, i) => {
              const gDay = parseInt(day.gregorian.day);
              const isToday = gDay === todayDate && month === todayMonth && year === todayYear;
              const isFriday = (firstDayOffset + i) % 7 === 5;
              return (
                <div
                  key={i}
                  className={`rounded-lg p-2 text-center transition-colors ${
                    isToday ? 'bg-primary text-primary-foreground ring-2 ring-gold' : isFriday ? 'bg-emerald-light' : 'bg-card hover:bg-muted'
                  }`}
                >
                  <p className="text-sm font-semibold">{day.gregorian.day}</p>
                  <p className={`text-xs ${isToday ? 'text-primary-foreground/70' : 'text-gold'}`}>{day.hijri.day}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!loading && days.length === 0 && (
        <p className="mt-8 text-center text-muted-foreground">{lang === 'ar' ? 'لا تتوفر بيانات' : 'No data available.'}</p>
      )}
    </div>
  );
}
