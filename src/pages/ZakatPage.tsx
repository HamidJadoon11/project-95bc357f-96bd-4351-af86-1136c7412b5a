import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Calculator, CheckCircle, XCircle } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const GOLD_PRICE_PER_GRAM = 65; // approx USD
const SILVER_PRICE_PER_GRAM = 0.8;
const NISAB_GOLD = 85 * GOLD_PRICE_PER_GRAM;
const NISAB_SILVER = 595 * SILVER_PRICE_PER_GRAM;

export default function ZakatPage() {
  const { t, lang } = useLanguage();
  useSeo({ title: lang === 'ar' ? 'حاسبة الزكاة الإسلامية - احسب زكاة المال والذهب والفضة | مواقيت الصلاة' : 'Islamic Zakat Calculator - Calculate Zakat on Cash, Gold & Silver | Prayer Times', description: lang === 'ar' ? 'حاسبة زكاة مجانية ودقيقة تحسب زكاة المال والذهب والفضة والاستثمارات وفقاً للنصاب الشرعي (85 غ ذهب / 595 غ فضة) ونسبة 2.5%.' : 'Free and accurate zakat calculator for cash, gold, silver, and investments based on the shariah nisab (85g gold / 595g silver) and 2.5% rate.', path: '/zakat' });
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [cash, setCash] = useState('');
  const [investments, setInvestments] = useState('');
  const [result, setResult] = useState<{ total: number; zakat: number; nisab: boolean } | null>(null);

  const calculate = () => {
    const g = parseFloat(gold) || 0;
    const s = parseFloat(silver) || 0;
    const c = parseFloat(cash) || 0;
    const i = parseFloat(investments) || 0;

    const goldValue = g * GOLD_PRICE_PER_GRAM;
    const silverValue = s * SILVER_PRICE_PER_GRAM;
    const total = goldValue + silverValue + c + i;
    const nisab = total >= NISAB_SILVER;
    const zakat = nisab ? total * 0.025 : 0;

    setResult({ total, zakat, nisab });
  };

  const inputClasses = "w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-heading text-3xl font-bold text-foreground">{t('zakat')}</h1>

      <div className="mx-auto mt-8 max-w-md space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">{t('gold')}</label>
          <input type="number" value={gold} onChange={(e) => setGold(e.target.value)} className={inputClasses} placeholder="0" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">{t('silver')}</label>
          <input type="number" value={silver} onChange={(e) => setSilver(e.target.value)} className={inputClasses} placeholder="0" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">{t('cash')}</label>
          <input type="number" value={cash} onChange={(e) => setCash(e.target.value)} className={inputClasses} placeholder="0" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-foreground">{t('investments')}</label>
          <input type="number" value={investments} onChange={(e) => setInvestments(e.target.value)} className={inputClasses} placeholder="0" />
        </div>

        <button
          onClick={calculate}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Calculator className="h-5 w-5" />
          {t('calculate')}
        </button>

        {result && (
          <div className="rounded-xl bg-card p-6 shadow-md">
            <div className="flex items-center gap-2">
              {result.nisab ? (
                <CheckCircle className="h-5 w-5 text-primary" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
              <span className="font-medium text-foreground">
                {result.nisab ? t('nisabMet') : t('nisabNotMet')}
              </span>
            </div>
            {result.nisab && (
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">{t('zakatDue')}</p>
                <p className="mt-1 font-heading text-4xl font-bold text-gold">
                  ${result.zakat.toFixed(2)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  2.5% of ${result.total.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
