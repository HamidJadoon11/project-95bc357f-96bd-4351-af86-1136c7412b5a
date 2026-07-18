import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function TermsPage() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = lang === 'ar' ? 'شروط الاستخدام - اتفاقية استخدام موقع مواقيت' : 'Terms of Use - Mawaqit Website Usage Agreement | Mawaqit';
    const desc = lang === 'ar' ? 'شروط وأحكام استخدام موقع مواقيت: قبول الشروط، الاستخدام المقبول، إخلاء المسؤولية، والملكية الفكرية.' : 'Mawaqit terms and conditions: acceptance of terms, acceptable use, disclaimers, and intellectual property rights.';
    let m = document.querySelector('meta[name="description"]'); if(!m){m=document.createElement('meta');m.setAttribute('name','description');document.head.appendChild(m);} m.setAttribute('content', desc);
    let c = document.head.querySelector('link[rel="canonical"]:not([hreflang])'); if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c);} c.setAttribute('href','/terms');
  }, [lang]);

  if (lang === 'ar') {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-heading text-4xl font-bold text-foreground">شروط الاستخدام</h1>
        <p className="mt-2 text-sm text-muted-foreground">آخر تحديث: أبريل 2026</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="font-heading text-xl font-bold">قبول الشروط</h2>
            <p className="mt-2">باستخدامك لموقع مواقيت، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold">وصف الخدمة</h2>
            <p className="mt-2">يوفر موقع مواقيت مواقيت الصلاة والأذان، والأذكار والأدعية، واتجاه القبلة، وحاسبة الزكاة، والتقويم الهجري. جميع المعلومات المقدمة هي لأغراض إرشادية ونسعى لتوفير أدق المعلومات الممكنة.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold">دقة المعلومات</h2>
            <p className="mt-2">نبذل قصارى جهدنا لتوفير مواقيت صلاة دقيقة باستخدام حسابات فلكية معتمدة. ومع ذلك، قد تحدث اختلافات طفيفة بسبب عوامل محلية. ننصح دائماً بالرجوع إلى المسجد المحلي للتأكيد.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold">الاستخدام المقبول</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>يُسمح باستخدام الموقع للأغراض الشخصية والتعليمية</li>
              <li>يُحظر إعادة نشر محتوى الموقع دون إذن</li>
              <li>يُحظر استخدام الموقع لأي غرض غير قانوني</li>
              <li>يُحظر محاولة الوصول غير المصرح به إلى أنظمة الموقع</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold">الملكية الفكرية</h2>
            <p className="mt-2">جميع المحتويات والتصاميم والعلامات التجارية على هذا الموقع هي ملكية حصرية لمواقيت ومحمية بموجب قوانين الملكية الفكرية.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold">إخلاء المسؤولية</h2>
            <p className="mt-2">يُقدم الموقع والخدمات "كما هي" دون أي ضمانات صريحة أو ضمنية. لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع.</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-bold">التعديلات</h2>
            <p className="mt-2">نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات على هذه الصفحة وتصبح سارية المفعول فور نشرها.</p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Terms of Use</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
        <section>
          <h2 className="font-heading text-xl font-bold">Acceptance of Terms</h2>
          <p className="mt-2">By using the Mawaqit website, you agree to be bound by these terms and conditions. If you do not agree to any of these terms, please do not use the website.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-bold">Description of Service</h2>
          <p className="mt-2">Mawaqit provides prayer and azan times, azkar and duas, Qibla direction, zakat calculator, and Hijri calendar services. All information provided is for guidance purposes, and we strive to provide the most accurate information possible.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-bold">Accuracy of Information</h2>
          <p className="mt-2">We make every effort to provide accurate prayer times using recognized astronomical calculations. However, slight variations may occur due to local factors. We always recommend confirming with your local mosque.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-bold">Acceptable Use</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>The website may be used for personal and educational purposes</li>
            <li>Republishing website content without permission is prohibited</li>
            <li>Using the website for any unlawful purpose is prohibited</li>
            <li>Attempting unauthorized access to website systems is prohibited</li>
          </ul>
        </section>
        <section>
          <h2 className="font-heading text-xl font-bold">Intellectual Property</h2>
          <p className="mt-2">All content, designs, and trademarks on this website are the exclusive property of Mawaqit and are protected under intellectual property laws.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-bold">Disclaimer</h2>
          <p className="mt-2">The website and services are provided "as is" without any express or implied warranties. We are not liable for any direct or indirect damages arising from the use of the website.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-bold">Modifications</h2>
          <p className="mt-2">We reserve the right to modify these terms at any time. Changes will be posted on this page and become effective immediately upon posting.</p>
        </section>
      </div>
    </div>
  );
}
