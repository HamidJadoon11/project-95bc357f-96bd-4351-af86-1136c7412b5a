import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { duasData, Dua } from '@/data/duas';
import { TranslationKey } from '@/i18n/translations';
import { Search, Heart } from 'lucide-react';

const categories = [
  { key: 'dailyLife' as const, value: 'dailyLife' as const },
  { key: 'travel' as const, value: 'travel' as const },
  { key: 'protection' as const, value: 'protection' as const },
  { key: 'food' as const, value: 'food' as const },
];

export default function DuasPage() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Dua['category'] | 'all'>('all');
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem('fav-duas') || '[]'); } catch { return []; }
  });

  const toggleFav = (id: number) => {
    const updated = favorites.includes(id) ? favorites.filter((f) => f !== id) : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('fav-duas', JSON.stringify(updated));
  };

  const filtered = duasData.filter((d) => {
    if (activeCategory !== 'all' && d.category !== activeCategory) return false;
    if (search) {
      const s = search.toLowerCase();
      return d.arabic.includes(s) || d.translation.toLowerCase().includes(s) || d.title_en.toLowerCase().includes(s);
    }
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-heading text-3xl font-bold text-foreground">{t('duas')}</h1>

      {/* Search */}
      <div className="relative mx-auto mt-6 max-w-md">
        <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder={t('searchDuas')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-input bg-card py-3 ps-10 pe-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Categories */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground hover:bg-muted'
          }`}
        >
          {lang === 'ar' ? 'الكل' : 'All'}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.value ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground hover:bg-muted'
            }`}
          >
            {t(cat.key)}
          </button>
        ))}
      </div>

      {/* Duas List */}
      <div className="mt-8 space-y-4">
        {filtered.map((dua) => (
          <div key={dua.id} className="rounded-xl bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {lang === 'ar' ? dua.title_ar : dua.title_en}
              </span>
              <button onClick={() => toggleFav(dua.id)}>
                <Heart className={`h-5 w-5 transition-colors ${favorites.includes(dua.id) ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} />
              </button>
            </div>
            <p className="mt-4 text-right font-heading text-xl leading-loose text-foreground" dir="rtl">
              {dua.arabic}
            </p>
            {lang === 'en' && (
              <>
                <p className="mt-3 text-sm italic text-muted-foreground">{dua.transliteration}</p>
                <p className="mt-1 text-sm text-muted-foreground">{dua.translation}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
