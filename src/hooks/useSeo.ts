import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object | object[];
  keywords?: string;
}

/**
 * Sets per-page SEO tags: title, meta description, canonical, hreflang,
 * OG/Twitter, and optional JSON-LD structured data.
 * Cleans up JSON-LD on unmount so schemas don't leak between routes.
 */
export function useSeo({ title, description, path, jsonLd, keywords }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('name', 'description', description);
    if (keywords) ensureMeta('name', 'keywords', keywords);
    ensureMeta('property', 'og:title', title);
    ensureMeta('property', 'og:description', description);
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', title);
    ensureMeta('name', 'twitter:description', description);

    if (path) {
      ensureMeta('property', 'og:url', path);
      const setLink = (rel: string, hreflang: string | null, href: string) => {
        const sel = hreflang
          ? `link[rel="${rel}"][hreflang="${hreflang}"]`
          : `link[rel="${rel}"]:not([hreflang])`;
        let el = document.head.querySelector<HTMLLinkElement>(sel);
        if (!el) {
          el = document.createElement('link');
          el.rel = rel;
          if (hreflang) el.setAttribute('hreflang', hreflang);
          document.head.appendChild(el);
        }
        el.href = href;
      };
      setLink('canonical', null, path);
      setLink('alternate', 'en', path);
      setLink('alternate', 'ar', path);
      setLink('alternate', 'x-default', path);
    }

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      arr.forEach((obj) => {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.dataset.useSeo = '1';
        s.text = JSON.stringify(obj);
        document.head.appendChild(s);
        scripts.push(s);
      });
    }
    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, keywords, JSON.stringify(jsonLd)]);
}
