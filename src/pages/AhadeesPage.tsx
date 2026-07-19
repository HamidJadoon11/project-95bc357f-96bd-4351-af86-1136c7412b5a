import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ahadees, hadithCategories } from '@/data/ahadees';
import { BookOpen } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export default function AhadeesPage() {
  const { lang } = useLanguage();
  useSeo({ title: lang === 'ar' ? 'أحاديث نبوية شريفة صحيحة مع الترجمة - صحيح البخاري ومسلم | مواقيت الصلاة' : 'Authentic Prophetic Ahadees (Hadith) with Translation - Sahih Al-Bukhari & Muslim | Prayer Times', description: lang === 'ar' ? 'مجموعة مختارة من الأحاديث النبوية الصحيحة من صحيح البخاري وصحيح مسلم مصنفة حسب الموضوع مع الشرح والترجمة الإنجليزية.' : 'A curated collection of authentic hadith from Sahih Al-Bukhari and Sahih Muslim, categorized by topic with commentary and English translation.', path: '/ahadees' });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all' ? ahadees : ahadees.filter(h => h.category === activeCategory);

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto text-center">
          <BookOpen className="mx-auto h-10 w-10 text-gold" />
          <h1 className="mt-3 font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? 'أحاديث نبوية شريفة' : 'Prophetic Ahadees (Hadith)'}
          </h1>
          <p className="mt-2 text-sm opacity-70">
            {lang === 'ar' ? 'مجموعة من الأحاديث النبوية الصحيحة مع الترجمة' : 'A collection of authentic Prophetic sayings with translations'}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground hover:bg-muted'}`}
          >
            {lang === 'ar' ? 'الكل' : 'All'}
          </button>
          {hadithCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${activeCategory === cat.key ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground hover:bg-muted'}`}
            >
              {lang === 'ar' ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filtered.map(hadith => (
            <div key={hadith.id} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="text-right font-heading text-xl leading-loose text-foreground" dir="rtl">
                {hadith.arabic}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                "{hadith.translation}"
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground">
                <span>📖 {lang === 'ar' ? hadith.sourceAr : hadith.source}</span>
                <span>🔗 {lang === 'ar' ? `الراوي: ${hadith.narratorAr}` : `Narrator: ${hadith.narrator}`}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-card p-6 shadow-sm">
          <h2 className="font-heading text-lg font-bold text-foreground">
            {lang === 'ar' ? 'ما هو الحديث النبوي؟' : 'What is a Hadith?'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {lang === 'ar'
              ? 'الحديث النبوي هو كل ما ورد عن النبي محمد ﷺ من قول أو فعل أو تقرير أو صفة. تُعد الأحاديث المصدر الثاني للتشريع الإسلامي بعد القرآن الكريم. يتم تصنيف الأحاديث حسب درجة صحتها إلى صحيح وحسن وضعيف وموضوع. جمع العلماء الأحاديث في مجموعات شهيرة مثل صحيح البخاري وصحيح مسلم وسنن أبي داود والترمذي والنسائي وابن ماجه.'
              : 'A Hadith (plural: Ahadees) is a record of the sayings, actions, approvals, or descriptions of Prophet Muhammad ﷺ. Ahadees are the second source of Islamic legislation after the Holy Quran. They are classified by their authenticity into Sahih (authentic), Hasan (good), Da\'if (weak), and Mawdu\' (fabricated). Scholars compiled them in famous collections such as Sahih Al-Bukhari, Sahih Muslim, Sunan Abu Dawud, At-Tirmidhi, An-Nasa\'i, and Ibn Majah.'}
          </p>
        </div>
      </section>
    </div>
  );
}
