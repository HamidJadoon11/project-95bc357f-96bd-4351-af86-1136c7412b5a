import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Globe, Clock, BookOpen, Compass, Shield, Heart } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export default function AboutPage() {
  const { lang } = useLanguage();
  useSeo({ title: lang === 'ar' ? 'عن مواقيت - رسالتنا وقيمنا ومنهجنا في حساب مواقيت الصلاة | مواقيت' : 'About Prayer Times - Our Mission, Values & Prayer Time Methodology | Prayer Times', description: lang === 'ar' ? 'تعرّف على مواقيت: منصة إسلامية عالمية تقدم مواقيت الصلاة الدقيقة، الأذكار، الأدعية، القبلة، والزكاة لأكثر من 80 دولة و600 مدينة. رسالتنا، منهجنا، ومصادرنا الموثوقة.' : 'Learn about Prayer Times: a global Islamic platform providing accurate prayer times, azkar, duas, Qibla, and zakat for 80+ countries and 600+ cities. Our mission, methodology, and trusted sources.', path: '/about' });

  useEffect(() => {
    document.title = lang === 'ar' ? 'عن مواقيت - رفيقك الإسلامي اليومي' : 'About Prayer Times - Your Daily Islamic Companion';
  }, [lang]);

  const features = lang === 'ar'
    ? [
        { icon: Clock, title: 'مواقيت الصلاة الدقيقة', desc: 'نوفر مواقيت الصلاة لأكثر من 48 دولة ومئات المدن حول العالم باستخدام حسابات فلكية دقيقة.' },
        { icon: Globe, title: 'تغطية عالمية', desc: 'من الخليج العربي إلى أوروبا وأمريكا وآسيا وأفريقيا، نغطي المدن الرئيسية في جميع القارات.' },
        { icon: BookOpen, title: 'الأذكار والأدعية', desc: 'مجموعة شاملة من أذكار الصباح والمساء والأدعية اليومية مع النص العربي والترجمة.' },
        { icon: Compass, title: 'اتجاه القبلة', desc: 'تحديد اتجاه القبلة بدقة باستخدام تقنية GPS وحسابات رياضية دقيقة.' },
        { icon: Shield, title: 'بيانات موثوقة', desc: 'نعتمد على مصادر موثوقة ومعتمدة في حساب مواقيت الصلاة بما في ذلك طريقة أم القرى.' },
        { icon: Heart, title: 'مجاني بالكامل', desc: 'جميع خدماتنا متاحة مجاناً للمسلمين حول العالم دون أي رسوم أو اشتراكات.' },
      ]
    : [
        { icon: Clock, title: 'Accurate Prayer Times', desc: 'We provide prayer times for over 48 countries and hundreds of cities worldwide using precise astronomical calculations.' },
        { icon: Globe, title: 'Global Coverage', desc: 'From the Arabian Gulf to Europe, Americas, Asia, and Africa, we cover major cities across all continents.' },
        { icon: BookOpen, title: 'Azkar & Duas', desc: 'A comprehensive collection of morning and evening azkar and daily duas with Arabic text and translations.' },
        { icon: Compass, title: 'Qibla Direction', desc: 'Accurate Qibla direction using GPS technology and precise mathematical calculations.' },
        { icon: Shield, title: 'Trusted Data', desc: 'We rely on trusted and recognized sources for prayer time calculations including the Umm Al-Qura method.' },
        { icon: Heart, title: 'Completely Free', desc: 'All our services are available free of charge to Muslims worldwide without any fees or subscriptions.' },
      ];

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-16 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl font-bold text-gold md:text-5xl">
            {lang === 'ar' ? 'عن مواقيت' : 'About Prayer Times'}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-80">
            {lang === 'ar'
              ? 'مواقيت هو رفيقك الإسلامي اليومي، مصمم ليكون المصدر الأول والأكثر دقة لمواقيت الصلاة والأذان حول العالم. نسعى لتقديم تجربة سلسة وشاملة تلبي احتياجات المسلمين اليومية.'
              : 'Prayer Times is your daily Islamic companion, designed to be the primary and most accurate source for prayer and azan times worldwide. We strive to deliver a seamless and comprehensive experience that serves the daily needs of Muslims.'}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground">
          {lang === 'ar' ? 'ما نقدمه' : 'What We Offer'}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-heading text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-light px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            {lang === 'ar' ? 'رسالتنا' : 'Our Mission'}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {lang === 'ar'
              ? 'رسالتنا هي تسهيل الوصول إلى المعلومات الإسلامية الدقيقة لكل مسلم في العالم. نؤمن بأن التكنولوجيا يمكن أن تكون أداة قوية لخدمة الدين، ونسعى لتقديم أفضل تجربة ممكنة باللغتين العربية والإنجليزية مع الحفاظ على الدقة والموثوقية.'
              : 'Our mission is to make accurate Islamic information accessible to every Muslim worldwide. We believe technology can be a powerful tool in service of faith, and we strive to deliver the best possible experience in both Arabic and English while maintaining accuracy and reliability.'}
          </p>
        </div>
      </section>
    </div>
  );
}
