import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { globalCities, countries } from '@/data/countries';
import { Search, MapPin } from 'lucide-react';

export default function CitySearch({ className = '' }: { className?: string }) {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const results = query.length >= 2
    ? globalCities.filter(c => {
        const q = query.toLowerCase();
        return c.nameEn.toLowerCase().includes(q) || c.nameAr.includes(q);
      }).slice(0, 10)
    : [];

  const getCountryName = (slug: string) => {
    const country = countries.find(c => c.slug === slug);
    return country ? (lang === 'ar' ? country.nameAr : country.nameEn) : '';
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="flex items-center rounded-xl border border-border bg-card px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-primary">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder={lang === 'ar' ? 'ابحث عن مدينة...' : 'Search for a city...'}
          className="flex-1 bg-transparent px-3 text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-border bg-card shadow-lg">
          {results.map(city => (
            <button
              key={`${city.countrySlug}-${city.slug}`}
              onClick={() => {
                navigate(`/prayer-times/${city.countrySlug}/${city.slug}`);
                setQuery('');
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 px-4 py-3 text-start transition-colors hover:bg-accent first:rounded-t-xl last:rounded-b-xl"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{lang === 'ar' ? city.nameAr : city.nameEn}</p>
                <p className="text-xs text-muted-foreground">{getCountryName(city.countrySlug)}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
