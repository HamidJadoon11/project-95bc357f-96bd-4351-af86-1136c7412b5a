import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface HijriDay {
  gregorian: { day: string; month: { number: number; en: string }; year: string };
  hijri: { day: string; month: { number: number; en: string; ar: string }; year: string };
}

export default function CalendarPage() {
  const { t, lang } = useLanguage();
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState<HijriDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.aladhan.com/v1/gpiCalendar/${month}/${year}`)
      .then((r) => r.json())
      .then((data) => {
        setDays(data.data || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [month, year]);

  const prevMonth = () => {
    if (month === 1) { setMonth(12); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const nextMonth = () => {
    if (month === 12) { setMonth(1); setYear(year + 1); }
    else setMonth(month - 1 + 2);
  };

  const monthName = days[0]
    ? `${days[0].gregorian.month.en} ${year}`
    : `${month}/${year}`;

  const hijriInfo = days[0]
    ? `${lang === 'ar' ? days[0].hijri.month.ar : days[0].hijri.month.en} ${days[0].hijri.year}`
    : '';

  const todayStr = new Date().getDate().toString();
  const todayMonth = new Date().getMonth() + 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-heading text-3xl font-bold text-foreground">{t('hijriCalendar')}</h1>

      {/* Month Selector */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={prevMonth} className="rounded-full bg-card p-2 shadow hover:bg-muted">
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <div className="text-center">
          <p className="font-heading text-xl font-bold text-foreground">{monthName}</p>
          {hijriInfo && <p className="text-sm text-gold">{hijriInfo}</p>}
        </div>
        <button onClick={nextMonth} className="rounded-full bg-card p-2 shadow hover:bg-muted">
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {loading && (
        <div className="mt-8 flex justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
      )}

      {/* Calendar Grid */}
      {!loading && days.length > 0 && (
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div key={d} className="py-2">{d}</div>
            ))}
          </div>

          {/* Day offset */}
          <div className="grid grid-cols-7 gap-1">
            {/* offset for first day of month */}
            {Array.from({ length: new Date(year, month - 1, 1).getDay() }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {days.map((day, i) => {
              const isToday = day.gregorian.day === todayStr && month === todayMonth;
              return (
                <div
                  key={i}
                  className={`rounded-lg p-2 text-center transition-colors ${
                    isToday ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-muted'
                  }`}
                >
                  <p className="text-sm font-semibold">{day.gregorian.day}</p>
                  <p className={`text-xs ${isToday ? 'text-primary-foreground/70' : 'text-gold'}`}>
                    {day.hijri.day}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
