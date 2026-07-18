// Generates public/sitemap.xml — runs on predev and prebuild.
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { countries, globalCities } from '../src/data/countries';

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = '';

const today = new Date().toISOString().split('T')[0];

const staticPaths = [
  '/', '/prayer-times', '/azan-times', '/azkar', '/duas', '/ahadees',
  '/ramadan', '/qibla', '/zakat', '/calendar',
  '/about', '/contact', '/privacy', '/terms', '/disclaimer',
];

const ramadanYears = Array.from({ length: 16 }, (_, i) => `/ramadan/${2025 + i}`);

const countryPaths = countries.flatMap((c) => [
  `/prayer-times/${c.slug}`,
  `/azan-times/${c.slug}`,
]);

const cityPaths = globalCities.flatMap((c) => [
  `/prayer-times/${c.countrySlug}/${c.slug}`,
  `/azan-times/${c.countrySlug}/${c.slug}`,
]);

const all = [...staticPaths, ...ramadanYears, ...countryPaths, ...cityPaths];

const urls = all
  .map((p) => {
    const priority = p === '/' ? '1.0' : p.split('/').length >= 4 ? '0.7' : '0.8';
    const changefreq = p.includes('prayer-times') || p.includes('azan-times') ? 'daily' : 'weekly';
    return `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(resolve('public/sitemap.xml'), xml);
console.log(`sitemap.xml written (${all.length} entries)`);
