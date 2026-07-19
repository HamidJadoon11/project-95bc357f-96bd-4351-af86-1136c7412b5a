import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { azkarData, Dhikr } from '@/data/azkar';
import { TranslationKey } from '@/i18n/translations';
import { Check } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const categories = [
  { key: 'morningAzkar' as const, value: 'morning' as const },
  { key: 'eveningAzkar' as const, value: 'evening' as const },
  { key: 'afterPrayerAzkar' as const, value: 'afterPrayer' as const },
  { key: 'sleepAzkar' as const, value: 'sleep' as const },
];

export default function AzkarPage() {
  const { t, lang } = useLanguage();
  useSeo({ title: lang === 'ar' ? 'أذكار الصباح والمساء وأذكار النوم وبعد الصلاة - حصن المسلم | مواقيت' : 'Morning & Evening Azkar, After-Prayer & Sleep Dhikr - Hisn al-Muslim | Prayer Times', description: lang === 'ar' ? 'أذكار الصباح والمساء الصحيحة من حصن المسلم، أذكار ما بعد الصلاة، وأذكار النوم مع عداد تلقائي، النص العربي، والترجمة الإنجليزية.' : 'Authentic morning and evening azkar from Hisn al-Muslim, after-prayer dhikr, and sleep azkar with an automatic counter, Arabic text, and English translation.', path: '/azkar' });
  const [activeCategory, setActiveCategory] = useState<Dhikr['category']>('morning');
  const [counters, setCounters] = useState<Record<number, number>>({});

  const filtered = azkarData.filter((d) => d.category === activeCategory);

  const handleCount = (dhikr: Dhikr) => {
    const current = counters[dhikr.id] || 0;
    if (current < dhikr.count) {
      setCounters((prev) => ({ ...prev, [dhikr.id]: current + 1 }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-heading text-3xl font-bold text-foreground">{t('azkar')}</h1>

      {/* Category Tabs */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.value
                ? 'bg-primary text-primary-foreground'
                : 'bg-card text-card-foreground hover:bg-muted'
            }`}
          >
            {t(cat.key)}
          </button>
        ))}
      </div>

      {/* Azkar List */}
      <div className="mt-8 space-y-4">
        {filtered.map((dhikr) => {
          const current = counters[dhikr.id] || 0;
          const done = current >= dhikr.count;

          return (
            <div
              key={dhikr.id}
              onClick={() => handleCount(dhikr)}
              className={`cursor-pointer rounded-xl p-6 shadow-sm transition-all ${
                done ? 'bg-emerald-light opacity-60' : 'bg-card hover:shadow-md'
              }`}
            >
              <p className="text-right font-heading text-xl leading-loose text-foreground" dir="rtl">
                {dhikr.arabic}
              </p>
              {lang === 'en' && (
                <>
                  <p className="mt-3 text-sm italic text-muted-foreground">{dhikr.transliteration}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{dhikr.translation}</p>
                </>
              )}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {t('count')}: {current}/{dhikr.count}
                </span>
                {done && <Check className="h-5 w-5 text-primary" />}
              </div>
              {/* Progress bar */}
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${(current / dhikr.count) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
