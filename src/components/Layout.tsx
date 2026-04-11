import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div dir={dir} className="min-h-screen bg-background font-body">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary shadow-md'} text-primary-foreground`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold">
              <span className="font-heading text-lg font-bold text-gold-foreground">م</span>
            </div>
            <div>
              <span className="font-heading text-xl font-bold text-gold">{t('siteName')}</span>
              <span className="hidden text-xs opacity-60 sm:block">{t('siteTagline')}</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-0.5 lg:flex">
            {mainNavItems.map((item) => (
              <Link key={item.path} to={item.path} className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10 ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'bg-primary-foreground/15 font-semibold' : ''}`}>
                {t(item.key)}
              </Link>
            ))}
            <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-foreground/10">
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
              <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-primary-foreground/10 ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'bg-primary-foreground/15 font-semibold' : ''}`}>
                {t(item.key)}
              </Link>
            ))}
            <button onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setMenuOpen(false); }} className="flex w-full items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-primary-foreground/10">
              <Globe className="h-4 w-4" />{t('language')}
            </button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="hero-gradient py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold">
                  <span className="font-heading text-sm font-bold text-gold-foreground">م</span>
                </div>
                <p className="font-heading text-lg font-bold text-gold">{t('siteName')}</p>
              </div>
              <p className="text-xs opacity-60 leading-relaxed">{lang === 'ar' ? 'مواقيت الصلاة والأذان الدقيقة لجميع مدن العالم. أكثر من 80 دولة و600 مدينة.' : 'Accurate prayer times and azan times for all cities worldwide. Over 80 countries and 600+ cities.'}</p>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-gold">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</p>
              <div className="space-y-1.5">
                <Link to="/prayer-times" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('prayerTimes')}</Link>
                <Link to="/azan-times" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('azanTimes')}</Link>
                <Link to="/azkar" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('azkar')}</Link>
                <Link to="/duas" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('duas')}</Link>
                <Link to="/ahadees" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('ahadees')}</Link>
                <Link to="/ramadan" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('ramadan')}</Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-gold">{lang === 'ar' ? 'أدوات' : 'Tools'}</p>
              <div className="space-y-1.5">
                <Link to="/qibla" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('qibla')}</Link>
                <Link to="/zakat" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('zakat')}</Link>
                <Link to="/calendar" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('calendar')}</Link>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-gold">{lang === 'ar' ? 'معلومات' : 'Info'}</p>
              <div className="space-y-1.5">
                <Link to="/about" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('about')}</Link>
                <Link to="/contact" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('contact')}</Link>
                <Link to="/privacy" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('privacy')}</Link>
                <Link to="/terms" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">{t('terms')}</Link>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-50">
            © {new Date().getFullYear()} {t('siteName')}. {lang === 'ar' ? 'جميع الحقوق محفوظة. مواقيت الصلاة محسوبة بطريقة أم القرى.' : 'All rights reserved. Prayer times calculated using Umm Al-Qura method.'}
          </div>
        </div>
      </footer>
    </div>
  );
}
