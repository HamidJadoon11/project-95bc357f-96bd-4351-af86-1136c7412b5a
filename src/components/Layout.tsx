import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { key: 'home' as const, path: '/' },
  { key: 'prayerTimes' as const, path: '/prayer-times' },
  { key: 'azkar' as const, path: '/azkar' },
  { key: 'duas' as const, path: '/duas' },
  { key: 'qibla' as const, path: '/qibla' },
  { key: 'zakat' as const, path: '/zakat' },
  { key: 'calendar' as const, path: '/calendar' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, lang, setLang, dir } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div dir={dir} className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-gold">{t('siteName')}</span>
            <span className="hidden text-sm opacity-80 sm:inline">| {t('siteTagline')}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10 ${
                  location.pathname === item.path ? 'bg-primary-foreground/15 font-semibold' : ''
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10"
            >
              <Globe className="h-4 w-4" />
              {t('language')}
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="border-t border-primary-foreground/10 px-4 pb-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10 ${
                  location.pathname === item.path ? 'bg-primary-foreground/15 font-semibold' : ''
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <button
              onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setMenuOpen(false); }}
              className="flex w-full items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10"
            >
              <Globe className="h-4 w-4" />
              {t('language')}
            </button>
          </nav>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary py-8 text-center text-primary-foreground/70">
        <p className="font-heading text-lg text-gold">{t('siteName')}</p>
        <p className="mt-1 text-sm">{t('siteTagline')}</p>
        <p className="mt-4 text-xs opacity-50">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
