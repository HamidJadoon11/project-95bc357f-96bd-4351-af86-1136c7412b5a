import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function PrivacyPage() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.title = lang === 'ar' ? 'سياسة الخصوصية - كيف نحمي بياناتك على مواقيت الصلاة' : 'Privacy Policy - How Prayer Times Protects Your Data | Prayer Times';
    const desc = lang === 'ar' ? 'سياسة الخصوصية الرسمية لموقع مواقيت الصلاة: كيف نجمع ونستخدم ونحمي بيانات الموقع الجغرافي، التخزين المحلي، والإعلانات.' : 'Official Prayer Times privacy policy: how we collect, use and protect your location data, local storage, and third-party ad practices.';
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]'); if(!m){m=document.createElement('meta');m.setAttribute('name','description');document.head.appendChild(m);} m.setAttribute('content', desc);
    let c = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]:not([hreflang])'); if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c);} c.setAttribute('href','/privacy');
  }, [lang]);

  if (lang === 'ar') {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-heading text-4xl font-bold text-foreground">سياسة الخصوصية</h1>
        <p className="mt-2 text-sm text-muted-foreground">آخر تحديث: أبريل 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="font-heading text-xl font-bold">مقدمة</h2>
            <p className="mt-2">مرحباً بك في مواقيت الصلاة. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا لمعلوماتك عند استخدام موقعنا الإلكتروني.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">المعلومات التي نجمعها</h2>
            <p className="mt-2"><strong>بيانات الموقع الجغرافي:</strong> نستخدم موقعك الجغرافي (بإذنك) لعرض مواقيت الصلاة الدقيقة لمنطقتك واتجاه القبلة. لا نقوم بتخزين بيانات موقعك على خوادمنا.</p>
            <p className="mt-2"><strong>بيانات التصفح:</strong> نجمع معلومات غير شخصية مثل نوع المتصفح ونظام التشغيل والصفحات التي تمت زيارتها لتحسين تجربة المستخدم.</p>
            <p className="mt-2"><strong>التخزين المحلي:</strong> نستخدم التخزين المحلي في متصفحك لحفظ تفضيلاتك مثل اللغة المفضلة والأدعية المحفوظة.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">كيف نستخدم معلوماتك</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>عرض مواقيت الصلاة والأذان الدقيقة بناءً على موقعك</li>
              <li>تحديد اتجاه القبلة</li>
              <li>تحسين أداء الموقع وتجربة المستخدم</li>
              <li>تذكر تفضيلات اللغة والإعدادات</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">مشاركة البيانات</h2>
            <p className="mt-2">لا نبيع أو نؤجر أو نشارك بياناتك الشخصية مع أطراف ثالثة. نستخدم واجهات برمجة تطبيقات خارجية (مثل Aladhan API) لحساب مواقيت الصلاة، وقد يتم إرسال إحداثيات موقعك إلى هذه الخدمات لهذا الغرض فقط.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">ملفات تعريف الارتباط</h2>
            <p className="mt-2">نستخدم ملفات تعريف الارتباط الضرورية لعمل الموقع بشكل صحيح. لا نستخدم ملفات تعريف ارتباط إعلانية أو تتبعية.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">حقوقك</h2>
            <p className="mt-2">يمكنك إلغاء إذن الوصول إلى موقعك الجغرافي من إعدادات متصفحك في أي وقت. يمكنك أيضاً مسح بيانات التخزين المحلي من خلال إعدادات المتصفح.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">أمان البيانات</h2>
            <p className="mt-2">نتخذ إجراءات أمنية مناسبة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفشاء أو الإتلاف.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">التغييرات على هذه السياسة</h2>
            <p className="mt-2">قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر تعديل.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">اتصل بنا</h2>
            <p className="mt-2">إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر صفحة الاتصال.</p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
        <section>
          <h2 className="font-heading text-xl font-bold">Introduction</h2>
          <p className="mt-2">Welcome to Prayer Times. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect and use your information when you use our website.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Information We Collect</h2>
          <p className="mt-2"><strong>Location Data:</strong> We use your geographic location (with your permission) to display accurate prayer times for your area and determine the Qibla direction. We do not store your location data on our servers.</p>
          <p className="mt-2"><strong>Browsing Data:</strong> We collect non-personal information such as browser type, operating system, and pages visited to improve user experience.</p>
          <p className="mt-2"><strong>Local Storage:</strong> We use your browser's local storage to save your preferences such as preferred language and saved duas.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">How We Use Your Information</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Display accurate prayer and azan times based on your location</li>
            <li>Determine Qibla direction</li>
            <li>Improve website performance and user experience</li>
            <li>Remember language preferences and settings</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Data Sharing</h2>
          <p className="mt-2">We do not sell, rent, or share your personal data with third parties. We use external APIs (such as Aladhan API) to calculate prayer times, and your location coordinates may be sent to these services for this purpose only.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Cookies</h2>
          <p className="mt-2">We use essential cookies required for the proper functioning of the website. We do not use advertising or tracking cookies.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Your Rights</h2>
          <p className="mt-2">You can revoke location access permission from your browser settings at any time. You can also clear local storage data through your browser settings.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Data Security</h2>
          <p className="mt-2">We take appropriate security measures to protect your data from unauthorized access, modification, disclosure, or destruction.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Changes to This Policy</h2>
          <p className="mt-2">We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Contact Us</h2>
          <p className="mt-2">If you have any questions about this privacy policy, please reach out to us through our contact page.</p>
        </section>
      </div>
    </div>
  );
}
