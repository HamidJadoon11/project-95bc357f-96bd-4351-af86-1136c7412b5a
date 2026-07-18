import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = lang === 'ar' ? 'اتصل بنا - راسل فريق مواقيت للدعم والاقتراحات' : 'Contact Us - Reach the Mawaqit Team for Support & Feedback | Mawaqit';
    const desc = lang === 'ar' ? 'تواصل مع فريق مواقيت للإبلاغ عن أخطاء في مواقيت الصلاة، اقتراح مدن جديدة، أو تقديم ملاحظاتك.' : 'Contact the Mawaqit team to report prayer time errors, suggest new cities, or share your feedback.';
    let m = document.querySelector<HTMLMetaElement>('meta[name="description"]'); if(!m){m=document.createElement('meta');m.setAttribute('name','description');document.head.appendChild(m);} m.setAttribute('content', desc);
    let c = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]:not([hreflang])'); if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c);} c.setAttribute('href','/contact');
  }, [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="islamic-pattern bg-primary px-4 py-12 text-primary-foreground">
        <div className="container mx-auto text-center">
          <Mail className="mx-auto mb-4 h-10 w-10 text-gold" />
          <h1 className="font-heading text-4xl font-bold text-gold">{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h1>
          <p className="mt-3 text-sm opacity-70">
            {lang === 'ar'
              ? 'نسعد بتواصلك معنا. أرسل لنا رسالتك وسنرد عليك في أقرب وقت.'
              : 'We\'d love to hear from you. Send us a message and we\'ll get back to you soon.'}
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-xl px-4 py-12">
        {submitted ? (
          <div className="rounded-xl bg-card p-8 text-center shadow-sm">
            <MessageSquare className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 font-heading text-xl font-bold text-foreground">
              {lang === 'ar' ? 'شكراً لتواصلك!' : 'Thank you for reaching out!'}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {lang === 'ar' ? 'سنرد على رسالتك في أقرب وقت ممكن.' : 'We\'ll get back to you as soon as possible.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-card p-6 shadow-sm">
            <div>
              <label className="mb-1 block text-sm font-semibold text-foreground">
                {lang === 'ar' ? 'الاسم' : 'Name'}
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-foreground">
                {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <input
                required
                type="email"
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-foreground">
                {lang === 'ar' ? 'الموضوع' : 'Subject'}
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-foreground">
                {lang === 'ar' ? 'الرسالة' : 'Message'}
              </label>
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              {lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
