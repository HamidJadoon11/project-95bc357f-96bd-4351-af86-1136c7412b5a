import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

const mainNavItems = [
  { key: 'home' as const, path: '/' },
  { key: 'prayerTimes' as const, path: '/prayer-times' },
  { key: 'azanTimes' as const, path: '/azan-times' },
  { key: 'azkar' as const, path: '/azkar' },
  { key: 'duas' as const, path: '/duas' },
  { key: 'ahadees' as const, path: '/ahadees' },
  { key: 'ramadan' as const, path: '/ramadan' },
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
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-gold">{t('siteName')}</span>
            <span className="hidden text-sm opacity-80 sm:inline">| {t('siteTagline')}</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNavItems.map((item) => (
              <Link key={item.path} to={item.path} className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10 ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'bg-primary-foreground/15 font-semibold' : ''}`}>
                {t(item.key)}
              </Link>
            ))}
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10">
              <Globe className="h-4 w-4" />{t('language')}
            </button>
          </nav>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-primary-foreground/10 px-4 pb-4 lg:hidden">
            {mainNavItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10 ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'bg-primary-foreground/15 font-semibold' : ''}`}>
                {t(item.key)}
              </Link>
            ))}
            <button onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setMenuOpen(false); }} className="flex w-full items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10">
              <Globe className="h-4 w-4" />{t('language')}
            </button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-primary py-10 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="font-heading text-lg font-bold text-gold">{t('siteName')}</p>
              <p className="mt-1 text-xs opacity-60">{t('siteTagline')}</p>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</p>
              <div className="space-y-1">
                <Link to="/prayer-times" className="block text-xs opacity-70 hover:opacity-100">{t('prayerTimes')}</Link>
                <Link to="/azan-times" className="block text-xs opacity-70 hover:opacity-100">{t('azanTimes')}</Link>
                <Link to="/azkar" className="block text-xs opacity-70 hover:opacity-100">{t('azkar')}</Link>
                <Link to="/duas" className="block text-xs opacity-70 hover:opacity-100">{t('duas')}</Link>
                <Link to="/ahadees" className="block text-xs opacity-70 hover:opacity-100">{t('ahadees')}</Link>
                <Link to="/ramadan" className="block text-xs opacity-70 hover:opacity-100">{t('ramadan')}</Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">{lang === 'ar' ? 'أدوات' : 'Tools'}</p>
              <div className="space-y-1">
                <Link to="/qibla" className="block text-xs opacity-70 hover:opacity-100">{t('qibla')}</Link>
                <Link to="/zakat" className="block text-xs opacity-70 hover:opacity-100">{t('zakat')}</Link>
                <Link to="/calendar" className="block text-xs opacity-70 hover:opacity-100">{t('calendar')}</Link>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold">{lang === 'ar' ? 'معلومات' : 'Info'}</p>
              <div className="space-y-1">
                <Link to="/about" className="block text-xs opacity-70 hover:opacity-100">{t('about')}</Link>
                <Link to="/contact" className="block text-xs opacity-70 hover:opacity-100">{t('contact')}</Link>
                <Link to="/privacy" className="block text-xs opacity-70 hover:opacity-100">{t('privacy')}</Link>
                <Link to="/terms" className="block text-xs opacity-70 hover:opacity-100">{t('terms')}</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-foreground/10 pt-4 text-center text-xs opacity-50">
            © {new Date().getFullYear()} {t('siteName')}. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  );
}
