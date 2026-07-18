import { useLanguage } from '@/i18n/LanguageContext';
import { useSeo } from '@/hooks/useSeo';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  const { lang } = useLanguage();
  useSeo({
    title: lang === 'ar'
      ? 'إخلاء المسؤولية - مواقيت الصلاة والمحتوى الإسلامي | مواقيت'
      : 'Disclaimer - Prayer Times & Islamic Content Accuracy | Mawaqit',
    description: lang === 'ar'
      ? 'إخلاء المسؤولية الرسمي لموقع مواقيت حول دقة مواقيت الصلاة، وحسابات الزكاة، واتجاه القبلة، والمحتوى الإسلامي. اعرف حدود مسؤوليتنا وكيفية استخدام المعلومات.'
      : 'Official Mawaqit disclaimer covering prayer time accuracy, zakat calculations, Qibla direction, and Islamic content. Understand our liability limits and how to use the information.',
    path: '/disclaimer',
  });

  if (lang === 'ar') {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <div className="mb-6 flex items-center gap-3 rounded-2xl bg-gold/10 p-4 text-gold-foreground">
          <AlertTriangle className="h-6 w-6 text-gold" />
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">إخلاء المسؤولية</h1>
        </div>
        <p className="text-sm text-muted-foreground">آخر تحديث: يوليو 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
          <section>
            <h2 className="font-heading text-xl font-bold">إخلاء مسؤولية عام</h2>
            <p className="mt-2">المعلومات المقدمة على موقع مواقيت (المشار إليه لاحقاً بـ"الموقع") هي لأغراض معلوماتية ودعوية عامة فقط. على الرغم من حرصنا على تقديم معلومات دقيقة ومحدثة، فإننا لا نقدم أي ضمانات صريحة أو ضمنية حول اكتمال أو دقة أو موثوقية أو ملاءمة المعلومات لغرض معين.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">دقة مواقيت الصلاة</h2>
            <p className="mt-2">تُحسب مواقيت الصلاة المعروضة على الموقع باستخدام واجهة برمجة تطبيقات Aladhan الفلكية ووفقاً لطرق حسابية معتمدة مثل أم القرى، رابطة العالم الإسلامي، ISNA، ومصر. قد تختلف هذه المواقيت اختلافاً طفيفاً عن مواقيت المسجد المحلي بسبب اختلاف طرق الحساب، والارتفاع، والظروف الجغرافية الدقيقة. نوصي دائماً بمراجعة المسجد المحلي أو الجهة الدينية الرسمية في بلدك لتأكيد المواقيت للعبادة.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">اتجاه القبلة</h2>
            <p className="mt-2">يتم حساب اتجاه القبلة باستخدام صيغة الدائرة العظمى بناءً على الإحداثيات الجغرافية للكعبة المشرفة في مكة المكرمة. قد يتأثر دقة الاتجاه المعروض بدقة مستشعر البوصلة في جهازك والتداخل المغناطيسي المحيط. يُنصح بمعايرة البوصلة قبل الاستخدام.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">حاسبة الزكاة</h2>
            <p className="mt-2">حاسبة الزكاة المتوفرة على الموقع هي أداة إرشادية لمساعدتك في تقدير مقدار الزكاة الواجبة. الحسابات تعتمد على القيم التي تدخلها ونصاب الذهب والفضة الحاليين. للحصول على فتوى شرعية دقيقة تخص وضعك المالي الخاص، يجب استشارة عالم شرعي مؤهل أو دار الإفتاء في بلدك.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">الأذكار والأدعية والأحاديث</h2>
            <p className="mt-2">تم جمع الأذكار والأدعية والأحاديث المنشورة على الموقع من مصادر إسلامية موثوقة مثل صحيح البخاري وصحيح مسلم وحصن المسلم للشيخ سعيد بن علي القحطاني وكتب الأذكار للإمام النووي. على الرغم من تدقيق المحتوى، ننصح المستخدمين بمراجعة المصادر الأصلية والرجوع إلى العلماء عند وجود شك.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">التقويم الهجري وتواريخ رمضان</h2>
            <p className="mt-2">تعتمد تواريخ التقويم الهجري وبداية شهر رمضان المعروضة على الموقع على الحسابات الفلكية. قد تختلف البداية الرسمية لرمضان والأعياد الإسلامية عن هذه التواريخ بناءً على رؤية الهلال الفعلية التي تعلنها اللجان الشرعية في كل بلد.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">الروابط الخارجية</h2>
            <p className="mt-2">قد يحتوي الموقع على روابط لمواقع خارجية لا نتحكم في محتواها أو سياسات الخصوصية الخاصة بها. لا نتحمل المسؤولية عن أي محتوى أو ممارسات في هذه المواقع الخارجية.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">الإعلانات الخارجية</h2>
            <p className="mt-2">قد يعرض الموقع إعلانات من شبكات إعلانية خارجية مثل Google AdSense. هذه الإعلانات مقدمة من أطراف ثالثة ولا نتحكم في محتواها. نبذل قصارى جهدنا لضمان مناسبة الإعلانات لطبيعة الموقع الإسلامية، لكننا لا نتحمل مسؤولية محتوى الإعلانات أو منتجات المعلنين.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">حدود المسؤولية</h2>
            <p className="mt-2">لن نكون مسؤولين عن أي خسارة أو ضرر مباشر أو غير مباشر ناتج عن استخدام الموقع أو الاعتماد على المعلومات المقدمة فيه. المسؤولية النهائية عن أداء العبادات في أوقاتها الصحيحة تقع على المستخدم.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold">التواصل معنا</h2>
            <p className="mt-2">إذا لاحظت أي خطأ في المعلومات المعروضة، يرجى التواصل معنا عبر <a href="/contact" className="text-primary underline">صفحة الاتصال</a> حتى نقوم بمراجعتها وتصحيحها.</p>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6 flex items-center gap-3 rounded-2xl bg-gold/10 p-4">
        <AlertTriangle className="h-6 w-6 text-gold" />
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Disclaimer</h1>
      </div>
      <p className="text-sm text-muted-foreground">Last updated: July 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground">
        <section>
          <h2 className="font-heading text-xl font-bold">General Disclaimer</h2>
          <p className="mt-2">The information provided on Mawaqit (hereinafter "the Website") is for general informational and dawah purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information for a particular purpose.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Prayer Times Accuracy</h2>
          <p className="mt-2">Prayer times displayed on the Website are calculated using the Aladhan astronomical API and follow recognized calculation methods including Umm Al-Qura, Muslim World League, ISNA, and Egyptian General Authority. These times may vary slightly from your local mosque's timings due to differences in calculation methods, elevation, and precise geographical conditions. We always recommend confirming with your local mosque or official religious authority in your country before performing worship.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Qibla Direction</h2>
          <p className="mt-2">The Qibla direction is calculated using the Great Circle formula based on the geographical coordinates of the Kaaba in Makkah. The accuracy of the displayed direction may be affected by your device's compass sensor accuracy and surrounding magnetic interference. Please calibrate your device's compass before use.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Zakat Calculator</h2>
          <p className="mt-2">The zakat calculator available on the Website is an informational tool designed to help you estimate the amount of zakat due. Calculations depend on the values you enter and current nisab thresholds for gold and silver. For a precise religious ruling tailored to your specific financial situation, please consult a qualified Islamic scholar or your country's official fatwa authority.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Azkar, Duas, and Ahadees</h2>
          <p className="mt-2">The azkar, duas, and hadith published on the Website are compiled from authoritative Islamic sources including Sahih Al-Bukhari, Sahih Muslim, Hisn al-Muslim by Sheikh Saeed bin Ali al-Qahtani, and the Azkar books of Imam An-Nawawi. Although the content is reviewed, we encourage users to consult original sources and scholars in case of doubt.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Hijri Calendar and Ramadan Dates</h2>
          <p className="mt-2">Hijri calendar dates and the start of Ramadan displayed on the Website are based on astronomical calculations. The official start of Ramadan and Islamic holidays may differ from these dates based on actual moon sighting announced by the religious committees of each country.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">External Links</h2>
          <p className="mt-2">The Website may contain links to external websites over which we have no control regarding content or privacy practices. We are not responsible for any content or practices on these external websites.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Third-Party Advertising</h2>
          <p className="mt-2">The Website may display advertisements from third-party ad networks such as Google AdSense. These ads are served by third parties and we do not control their content. We do our best to ensure ads are appropriate for the Islamic nature of the site, but we are not responsible for the content of the ads or the products of the advertisers.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Limitation of Liability</h2>
          <p className="mt-2">We shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from the use of the Website or reliance on the information provided. The ultimate responsibility for performing acts of worship at their correct times rests with the user.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold">Contact Us</h2>
          <p className="mt-2">If you notice any error in the information displayed, please contact us through our <a href="/contact" className="text-primary underline">contact page</a> so we can review and correct it.</p>
        </section>
      </div>
    </div>
  );
}
