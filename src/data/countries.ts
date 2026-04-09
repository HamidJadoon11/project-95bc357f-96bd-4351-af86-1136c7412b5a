export interface CountryData {
  slug: string;
  slugAr: string;
  nameEn: string;
  nameAr: string;
  code: string;
}

export interface GlobalCityData {
  slug: string;
  slugAr: string;
  nameEn: string;
  nameAr: string;
  countrySlug: string;
  lat: number;
  lng: number;
}

export const countries: CountryData[] = [
  // Gulf
  { slug: 'saudi-arabia', slugAr: 'السعودية', nameEn: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية', code: 'SA' },
  { slug: 'uae', slugAr: 'الامارات', nameEn: 'United Arab Emirates', nameAr: 'الإمارات العربية المتحدة', code: 'AE' },
  { slug: 'qatar', slugAr: 'قطر', nameEn: 'Qatar', nameAr: 'قطر', code: 'QA' },
  { slug: 'kuwait', slugAr: 'الكويت', nameEn: 'Kuwait', nameAr: 'الكويت', code: 'KW' },
  { slug: 'bahrain', slugAr: 'البحرين', nameEn: 'Bahrain', nameAr: 'البحرين', code: 'BH' },
  { slug: 'oman', slugAr: 'عمان', nameEn: 'Oman', nameAr: 'عُمان', code: 'OM' },
  // Middle East & North Africa
  { slug: 'egypt', slugAr: 'مصر', nameEn: 'Egypt', nameAr: 'مصر', code: 'EG' },
  { slug: 'jordan', slugAr: 'الاردن', nameEn: 'Jordan', nameAr: 'الأردن', code: 'JO' },
  { slug: 'iraq', slugAr: 'العراق', nameEn: 'Iraq', nameAr: 'العراق', code: 'IQ' },
  { slug: 'syria', slugAr: 'سوريا', nameEn: 'Syria', nameAr: 'سوريا', code: 'SY' },
  { slug: 'lebanon', slugAr: 'لبنان', nameEn: 'Lebanon', nameAr: 'لبنان', code: 'LB' },
  { slug: 'palestine', slugAr: 'فلسطين', nameEn: 'Palestine', nameAr: 'فلسطين', code: 'PS' },
  { slug: 'yemen', slugAr: 'اليمن', nameEn: 'Yemen', nameAr: 'اليمن', code: 'YE' },
  { slug: 'morocco', slugAr: 'المغرب', nameEn: 'Morocco', nameAr: 'المغرب', code: 'MA' },
  { slug: 'algeria', slugAr: 'الجزائر', nameEn: 'Algeria', nameAr: 'الجزائر', code: 'DZ' },
  { slug: 'tunisia', slugAr: 'تونس', nameEn: 'Tunisia', nameAr: 'تونس', code: 'TN' },
  { slug: 'libya', slugAr: 'ليبيا', nameEn: 'Libya', nameAr: 'ليبيا', code: 'LY' },
  { slug: 'sudan', slugAr: 'السودان', nameEn: 'Sudan', nameAr: 'السودان', code: 'SD' },
  { slug: 'mauritania', slugAr: 'موريتانيا', nameEn: 'Mauritania', nameAr: 'موريتانيا', code: 'MR' },
  // South Asia
  { slug: 'pakistan', slugAr: 'باكستان', nameEn: 'Pakistan', nameAr: 'باكستان', code: 'PK' },
  { slug: 'india', slugAr: 'الهند', nameEn: 'India', nameAr: 'الهند', code: 'IN' },
  { slug: 'bangladesh', slugAr: 'بنغلاديش', nameEn: 'Bangladesh', nameAr: 'بنغلاديش', code: 'BD' },
  { slug: 'afghanistan', slugAr: 'افغانستان', nameEn: 'Afghanistan', nameAr: 'أفغانستان', code: 'AF' },
  { slug: 'sri-lanka', slugAr: 'سريلانكا', nameEn: 'Sri Lanka', nameAr: 'سريلانكا', code: 'LK' },
  { slug: 'maldives', slugAr: 'المالديف', nameEn: 'Maldives', nameAr: 'المالديف', code: 'MV' },
  { slug: 'nepal', slugAr: 'نيبال', nameEn: 'Nepal', nameAr: 'نيبال', code: 'NP' },
  // Southeast Asia
  { slug: 'indonesia', slugAr: 'اندونيسيا', nameEn: 'Indonesia', nameAr: 'إندونيسيا', code: 'ID' },
  { slug: 'malaysia', slugAr: 'ماليزيا', nameEn: 'Malaysia', nameAr: 'ماليزيا', code: 'MY' },
  { slug: 'turkey', slugAr: 'تركيا', nameEn: 'Turkey', nameAr: 'تركيا', code: 'TR' },
  { slug: 'iran', slugAr: 'ايران', nameEn: 'Iran', nameAr: 'إيران', code: 'IR' },
  { slug: 'philippines', slugAr: 'الفلبين', nameEn: 'Philippines', nameAr: 'الفلبين', code: 'PH' },
  { slug: 'thailand', slugAr: 'تايلاند', nameEn: 'Thailand', nameAr: 'تايلاند', code: 'TH' },
  { slug: 'singapore', slugAr: 'سنغافورة', nameEn: 'Singapore', nameAr: 'سنغافورة', code: 'SG' },
  { slug: 'brunei', slugAr: 'بروناي', nameEn: 'Brunei', nameAr: 'بروناي', code: 'BN' },
  // Africa
  { slug: 'nigeria', slugAr: 'نيجيريا', nameEn: 'Nigeria', nameAr: 'نيجيريا', code: 'NG' },
  { slug: 'somalia', slugAr: 'الصومال', nameEn: 'Somalia', nameAr: 'الصومال', code: 'SO' },
  { slug: 'senegal', slugAr: 'السنغال', nameEn: 'Senegal', nameAr: 'السنغال', code: 'SN' },
  { slug: 'ethiopia', slugAr: 'اثيوبيا', nameEn: 'Ethiopia', nameAr: 'إثيوبيا', code: 'ET' },
  { slug: 'tanzania', slugAr: 'تنزانيا', nameEn: 'Tanzania', nameAr: 'تنزانيا', code: 'TZ' },
  { slug: 'kenya', slugAr: 'كينيا', nameEn: 'Kenya', nameAr: 'كينيا', code: 'KE' },
  { slug: 'south-africa', slugAr: 'جنوب-افريقيا', nameEn: 'South Africa', nameAr: 'جنوب أفريقيا', code: 'ZA' },
  { slug: 'ghana', slugAr: 'غانا', nameEn: 'Ghana', nameAr: 'غانا', code: 'GH' },
  { slug: 'mali', slugAr: 'مالي', nameEn: 'Mali', nameAr: 'مالي', code: 'ML' },
  { slug: 'niger', slugAr: 'النيجر', nameEn: 'Niger', nameAr: 'النيجر', code: 'NE' },
  { slug: 'cameroon', slugAr: 'الكاميرون', nameEn: 'Cameroon', nameAr: 'الكاميرون', code: 'CM' },
  { slug: 'mozambique', slugAr: 'موزمبيق', nameEn: 'Mozambique', nameAr: 'موزمبيق', code: 'MZ' },
  { slug: 'uganda', slugAr: 'اوغندا', nameEn: 'Uganda', nameAr: 'أوغندا', code: 'UG' },
  // Europe
  { slug: 'united-kingdom', slugAr: 'بريطانيا', nameEn: 'United Kingdom', nameAr: 'المملكة المتحدة', code: 'GB' },
  { slug: 'germany', slugAr: 'المانيا', nameEn: 'Germany', nameAr: 'ألمانيا', code: 'DE' },
  { slug: 'france', slugAr: 'فرنسا', nameEn: 'France', nameAr: 'فرنسا', code: 'FR' },
  { slug: 'netherlands', slugAr: 'هولندا', nameEn: 'Netherlands', nameAr: 'هولندا', code: 'NL' },
  { slug: 'sweden', slugAr: 'السويد', nameEn: 'Sweden', nameAr: 'السويد', code: 'SE' },
  { slug: 'spain', slugAr: 'اسبانيا', nameEn: 'Spain', nameAr: 'إسبانيا', code: 'ES' },
  { slug: 'italy', slugAr: 'ايطاليا', nameEn: 'Italy', nameAr: 'إيطاليا', code: 'IT' },
  { slug: 'belgium', slugAr: 'بلجيكا', nameEn: 'Belgium', nameAr: 'بلجيكا', code: 'BE' },
  { slug: 'austria', slugAr: 'النمسا', nameEn: 'Austria', nameAr: 'النمسا', code: 'AT' },
  { slug: 'switzerland', slugAr: 'سويسرا', nameEn: 'Switzerland', nameAr: 'سويسرا', code: 'CH' },
  { slug: 'denmark', slugAr: 'الدنمارك', nameEn: 'Denmark', nameAr: 'الدنمارك', code: 'DK' },
  { slug: 'norway', slugAr: 'النرويج', nameEn: 'Norway', nameAr: 'النرويج', code: 'NO' },
  { slug: 'finland', slugAr: 'فنلندا', nameEn: 'Finland', nameAr: 'فنلندا', code: 'FI' },
  { slug: 'greece', slugAr: 'اليونان', nameEn: 'Greece', nameAr: 'اليونان', code: 'GR' },
  { slug: 'bosnia', slugAr: 'البوسنة', nameEn: 'Bosnia & Herzegovina', nameAr: 'البوسنة والهرسك', code: 'BA' },
  { slug: 'albania', slugAr: 'البانيا', nameEn: 'Albania', nameAr: 'ألبانيا', code: 'AL' },
  { slug: 'kosovo', slugAr: 'كوسوفو', nameEn: 'Kosovo', nameAr: 'كوسوفو', code: 'XK' },
  { slug: 'russia', slugAr: 'روسيا', nameEn: 'Russia', nameAr: 'روسيا', code: 'RU' },
  // Americas
  { slug: 'united-states', slugAr: 'امريكا', nameEn: 'United States', nameAr: 'الولايات المتحدة', code: 'US' },
  { slug: 'canada', slugAr: 'كندا', nameEn: 'Canada', nameAr: 'كندا', code: 'CA' },
  { slug: 'brazil', slugAr: 'البرازيل', nameEn: 'Brazil', nameAr: 'البرازيل', code: 'BR' },
  { slug: 'argentina', slugAr: 'الارجنتين', nameEn: 'Argentina', nameAr: 'الأرجنتين', code: 'AR' },
  { slug: 'mexico', slugAr: 'المكسيك', nameEn: 'Mexico', nameAr: 'المكسيك', code: 'MX' },
  // Central Asia
  { slug: 'uzbekistan', slugAr: 'اوزبكستان', nameEn: 'Uzbekistan', nameAr: 'أوزبكستان', code: 'UZ' },
  { slug: 'kazakhstan', slugAr: 'كازاخستان', nameEn: 'Kazakhstan', nameAr: 'كازاخستان', code: 'KZ' },
  { slug: 'tajikistan', slugAr: 'طاجيكستان', nameEn: 'Tajikistan', nameAr: 'طاجيكستان', code: 'TJ' },
  { slug: 'turkmenistan', slugAr: 'تركمانستان', nameEn: 'Turkmenistan', nameAr: 'تركمانستان', code: 'TM' },
  { slug: 'kyrgyzstan', slugAr: 'قيرغيزستان', nameEn: 'Kyrgyzstan', nameAr: 'قيرغيزستان', code: 'KG' },
  { slug: 'azerbaijan', slugAr: 'اذربيجان', nameEn: 'Azerbaijan', nameAr: 'أذربيجان', code: 'AZ' },
  // Oceania
  { slug: 'australia', slugAr: 'استراليا', nameEn: 'Australia', nameAr: 'أستراليا', code: 'AU' },
  { slug: 'new-zealand', slugAr: 'نيوزيلندا', nameEn: 'New Zealand', nameAr: 'نيوزيلندا', code: 'NZ' },
  // East Asia
  { slug: 'china', slugAr: 'الصين', nameEn: 'China', nameAr: 'الصين', code: 'CN' },
  { slug: 'japan', slugAr: 'اليابان', nameEn: 'Japan', nameAr: 'اليابان', code: 'JP' },
  { slug: 'south-korea', slugAr: 'كوريا-الجنوبية', nameEn: 'South Korea', nameAr: 'كوريا الجنوبية', code: 'KR' },
];

export const globalCities: GlobalCityData[] = [
  // ======= SAUDI ARABIA (90+ cities from keyword data) =======
  { slug: 'riyadh', slugAr: 'الرياض', nameEn: 'Riyadh', nameAr: 'الرياض', countrySlug: 'saudi-arabia', lat: 24.7136, lng: 46.6753 },
  { slug: 'jeddah', slugAr: 'جدة', nameEn: 'Jeddah', nameAr: 'جدة', countrySlug: 'saudi-arabia', lat: 21.4858, lng: 39.1925 },
  { slug: 'makkah', slugAr: 'مكة-المكرمة', nameEn: 'Makkah', nameAr: 'مكة المكرمة', countrySlug: 'saudi-arabia', lat: 21.4225, lng: 39.8262 },
  { slug: 'madinah', slugAr: 'المدينة-المنورة', nameEn: 'Madinah', nameAr: 'المدينة المنورة', countrySlug: 'saudi-arabia', lat: 24.4539, lng: 39.6142 },
  { slug: 'dammam', slugAr: 'الدمام', nameEn: 'Dammam', nameAr: 'الدمام', countrySlug: 'saudi-arabia', lat: 26.4207, lng: 50.0888 },
  { slug: 'hail', slugAr: 'حائل', nameEn: 'Hail', nameAr: 'حائل', countrySlug: 'saudi-arabia', lat: 27.5114, lng: 41.7208 },
  { slug: 'taif', slugAr: 'الطائف', nameEn: 'Taif', nameAr: 'الطائف', countrySlug: 'saudi-arabia', lat: 21.2703, lng: 40.4158 },
  { slug: 'tabuk', slugAr: 'تبوك', nameEn: 'Tabuk', nameAr: 'تبوك', countrySlug: 'saudi-arabia', lat: 28.3838, lng: 36.5550 },
  { slug: 'buraidah', slugAr: 'بريدة', nameEn: 'Buraidah', nameAr: 'بريدة', countrySlug: 'saudi-arabia', lat: 26.3260, lng: 43.9750 },
  { slug: 'khamis-mushait', slugAr: 'خميس-مشيط', nameEn: 'Khamis Mushait', nameAr: 'خميس مشيط', countrySlug: 'saudi-arabia', lat: 18.3064, lng: 42.7333 },
  { slug: 'abha', slugAr: 'ابها', nameEn: 'Abha', nameAr: 'أبها', countrySlug: 'saudi-arabia', lat: 18.2164, lng: 42.5053 },
  { slug: 'al-khobar', slugAr: 'الخبر', nameEn: 'Al Khobar', nameAr: 'الخبر', countrySlug: 'saudi-arabia', lat: 26.2172, lng: 50.1971 },
  { slug: 'najran', slugAr: 'نجران', nameEn: 'Najran', nameAr: 'نجران', countrySlug: 'saudi-arabia', lat: 17.4917, lng: 44.1322 },
  { slug: 'jubail', slugAr: 'الجبيل', nameEn: 'Jubail', nameAr: 'الجبيل', countrySlug: 'saudi-arabia', lat: 27.0046, lng: 49.6225 },
  { slug: 'yanbu', slugAr: 'ينبع', nameEn: 'Yanbu', nameAr: 'ينبع', countrySlug: 'saudi-arabia', lat: 24.0895, lng: 38.0618 },
  { slug: 'jazan', slugAr: 'جازان', nameEn: 'Jazan', nameAr: 'جازان', countrySlug: 'saudi-arabia', lat: 16.8892, lng: 42.5611 },
  { slug: 'al-hofuf', slugAr: 'الهفوف', nameEn: 'Al Hofuf', nameAr: 'الهفوف', countrySlug: 'saudi-arabia', lat: 25.3648, lng: 49.5853 },
  { slug: 'dhahran', slugAr: 'الظهران', nameEn: 'Dhahran', nameAr: 'الظهران', countrySlug: 'saudi-arabia', lat: 26.2361, lng: 50.0393 },
  { slug: 'al-kharj', slugAr: 'الخرج', nameEn: 'Al Kharj', nameAr: 'الخرج', countrySlug: 'saudi-arabia', lat: 24.1556, lng: 47.3122 },
  { slug: 'sakaka', slugAr: 'سكاكا', nameEn: 'Sakaka', nameAr: 'سكاكا', countrySlug: 'saudi-arabia', lat: 29.9697, lng: 40.2064 },
  { slug: 'al-qatif', slugAr: 'القطيف', nameEn: 'Al Qatif', nameAr: 'القطيف', countrySlug: 'saudi-arabia', lat: 26.5196, lng: 50.0115 },
  { slug: 'unaizah', slugAr: 'عنيزة', nameEn: 'Unaizah', nameAr: 'عنيزة', countrySlug: 'saudi-arabia', lat: 26.0841, lng: 43.9936 },
  { slug: 'al-baha', slugAr: 'الباحة', nameEn: 'Al Baha', nameAr: 'الباحة', countrySlug: 'saudi-arabia', lat: 20.0000, lng: 41.4667 },
  { slug: 'arar', slugAr: 'عرعر', nameEn: 'Arar', nameAr: 'عرعر', countrySlug: 'saudi-arabia', lat: 30.9753, lng: 41.0381 },
  { slug: 'al-qurayyat', slugAr: 'القريات', nameEn: 'Al Qurayyat', nameAr: 'القريات', countrySlug: 'saudi-arabia', lat: 31.3317, lng: 37.3428 },
  { slug: 'dawadmi', slugAr: 'الدوادمي', nameEn: 'Dawadmi', nameAr: 'الدوادمي', countrySlug: 'saudi-arabia', lat: 24.5078, lng: 44.3936 },
  { slug: 'al-zulfi', slugAr: 'الزلفي', nameEn: 'Al Zulfi', nameAr: 'الزلفي', countrySlug: 'saudi-arabia', lat: 26.3017, lng: 44.8117 },
  { slug: 'afif', slugAr: 'عفيف', nameEn: 'Afif', nameAr: 'عفيف', countrySlug: 'saudi-arabia', lat: 23.9078, lng: 42.9228 },
  { slug: 'rabigh', slugAr: 'رابغ', nameEn: 'Rabigh', nameAr: 'رابغ', countrySlug: 'saudi-arabia', lat: 22.8017, lng: 39.0361 },
  { slug: 'al-lith', slugAr: 'الليث', nameEn: 'Al Lith', nameAr: 'الليث', countrySlug: 'saudi-arabia', lat: 20.1500, lng: 40.2667 },
  { slug: 'al-qunfudhah', slugAr: 'القنفذة', nameEn: 'Al Qunfudhah', nameAr: 'القنفذة', countrySlug: 'saudi-arabia', lat: 19.1264, lng: 41.0789 },
  { slug: 'bisha', slugAr: 'بيشة', nameEn: 'Bisha', nameAr: 'بيشة', countrySlug: 'saudi-arabia', lat: 19.9767, lng: 42.6044 },
  { slug: 'sabya', slugAr: 'صبيا', nameEn: 'Sabya', nameAr: 'صبيا', countrySlug: 'saudi-arabia', lat: 17.1489, lng: 42.6253 },
  { slug: 'samtah', slugAr: 'صامطة', nameEn: 'Samtah', nameAr: 'صامطة', countrySlug: 'saudi-arabia', lat: 16.5956, lng: 42.9419 },
  { slug: 'al-namas', slugAr: 'النماص', nameEn: 'Al Namas', nameAr: 'النماص', countrySlug: 'saudi-arabia', lat: 19.1247, lng: 42.1267 },
  { slug: 'baljurashi', slugAr: 'بلجرشي', nameEn: 'Baljurashi', nameAr: 'بلجرشي', countrySlug: 'saudi-arabia', lat: 19.8556, lng: 41.6028 },
  { slug: 'al-majardah', slugAr: 'المجاردة', nameEn: 'Al Majardah', nameAr: 'المجاردة', countrySlug: 'saudi-arabia', lat: 19.0833, lng: 41.9167 },
  { slug: 'sharurah', slugAr: 'شرورة', nameEn: 'Sharurah', nameAr: 'شرورة', countrySlug: 'saudi-arabia', lat: 17.4833, lng: 47.1167 },
  { slug: 'hafar-al-batin', slugAr: 'حفر-الباطن', nameEn: 'Hafar Al Batin', nameAr: 'حفر الباطن', countrySlug: 'saudi-arabia', lat: 28.4328, lng: 45.9711 },
  { slug: 'rafha', slugAr: 'رفحاء', nameEn: 'Rafha', nameAr: 'رفحاء', countrySlug: 'saudi-arabia', lat: 29.6200, lng: 43.4933 },
  { slug: 'turaif', slugAr: 'طريف', nameEn: 'Turaif', nameAr: 'طريف', countrySlug: 'saudi-arabia', lat: 31.6722, lng: 38.6633 },
  { slug: 'tayma', slugAr: 'تيماء', nameEn: 'Tayma', nameAr: 'تيماء', countrySlug: 'saudi-arabia', lat: 27.6175, lng: 38.5489 },
  { slug: 'al-ula', slugAr: 'العلا', nameEn: 'Al Ula', nameAr: 'العلا', countrySlug: 'saudi-arabia', lat: 26.6175, lng: 37.9164 },
  { slug: 'wadi-al-dawasir', slugAr: 'وادي-الدواسر', nameEn: 'Wadi Al Dawasir', nameAr: 'وادي الدواسر', countrySlug: 'saudi-arabia', lat: 20.4424, lng: 44.7246 },
  { slug: 'al-khafji', slugAr: 'الخفجي', nameEn: 'Al Khafji', nameAr: 'الخفجي', countrySlug: 'saudi-arabia', lat: 28.4167, lng: 48.5000 },
  { slug: 'badr', slugAr: 'بدر', nameEn: 'Badr', nameAr: 'بدر', countrySlug: 'saudi-arabia', lat: 23.7778, lng: 38.7944 },
  { slug: 'al-majmaah', slugAr: 'المجمعة', nameEn: 'Al Majmaah', nameAr: 'المجمعة', countrySlug: 'saudi-arabia', lat: 25.8989, lng: 45.3483 },
  { slug: 'shaqra', slugAr: 'شقراء', nameEn: 'Shaqra', nameAr: 'شقراء', countrySlug: 'saudi-arabia', lat: 25.2417, lng: 45.2417 },
  { slug: 'hotat-bani-tamim', slugAr: 'حوطة-بني-تميم', nameEn: 'Hotat Bani Tamim', nameAr: 'حوطة بني تميم', countrySlug: 'saudi-arabia', lat: 23.5300, lng: 46.8428 },
  { slug: 'al-muzahimiyah', slugAr: 'المزاحمية', nameEn: 'Al Muzahimiyah', nameAr: 'المزاحمية', countrySlug: 'saudi-arabia', lat: 24.4678, lng: 46.2636 },
  { slug: 'al-dilam', slugAr: 'الدلم', nameEn: 'Al Dilam', nameAr: 'الدلم', countrySlug: 'saudi-arabia', lat: 23.9922, lng: 47.1833 },
  { slug: 'al-sulayyil', slugAr: 'السليل', nameEn: 'Al Sulayyil', nameAr: 'السليل', countrySlug: 'saudi-arabia', lat: 20.4594, lng: 45.5728 },
  { slug: 'al-aflaj', slugAr: 'الأفلاج', nameEn: 'Al Aflaj', nameAr: 'الأفلاج', countrySlug: 'saudi-arabia', lat: 22.2856, lng: 46.7275 },
  { slug: 'baqaa', slugAr: 'بقعاء', nameEn: 'Baqaa', nameAr: 'بقعاء', countrySlug: 'saudi-arabia', lat: 27.9000, lng: 42.3833 },
  { slug: 'al-quwaiyah', slugAr: 'القويعية', nameEn: 'Al Quwaiyah', nameAr: 'القويعية', countrySlug: 'saudi-arabia', lat: 24.0414, lng: 45.2828 },
  { slug: 'thadiq', slugAr: 'ثادق', nameEn: 'Thadiq', nameAr: 'ثادق', countrySlug: 'saudi-arabia', lat: 25.3167, lng: 45.8500 },
  { slug: 'rimah', slugAr: 'رماح', nameEn: 'Rimah', nameAr: 'رماح', countrySlug: 'saudi-arabia', lat: 25.5725, lng: 47.1625 },
  { slug: 'al-muznib', slugAr: 'المذنب', nameEn: 'Al Muznib', nameAr: 'المذنب', countrySlug: 'saudi-arabia', lat: 25.8633, lng: 44.2283 },
  { slug: 'al-bukayriyah', slugAr: 'البكيرية', nameEn: 'Al Bukayriyah', nameAr: 'البكيرية', countrySlug: 'saudi-arabia', lat: 26.1339, lng: 43.6642 },
  { slug: 'al-asyah', slugAr: 'الاسياح', nameEn: 'Al Asyah', nameAr: 'الأسياح', countrySlug: 'saudi-arabia', lat: 26.8314, lng: 44.2317 },
  { slug: 'dhuba', slugAr: 'ضباء', nameEn: 'Dhuba', nameAr: 'ضباء', countrySlug: 'saudi-arabia', lat: 27.3500, lng: 36.5333 },
  { slug: 'haql', slugAr: 'حقل', nameEn: 'Haql', nameAr: 'حقل', countrySlug: 'saudi-arabia', lat: 29.2833, lng: 34.9333 },
  { slug: 'tubarjal', slugAr: 'طبرجل', nameEn: 'Tubarjal', nameAr: 'طبرجل', countrySlug: 'saudi-arabia', lat: 30.5000, lng: 38.2167 },
  { slug: 'al-nuayriyah', slugAr: 'النعيرية', nameEn: 'Al Nuayriyah', nameAr: 'النعيرية', countrySlug: 'saudi-arabia', lat: 27.4739, lng: 48.4747 },
  { slug: 'buqayq', slugAr: 'بقيق', nameEn: 'Buqayq', nameAr: 'بقيق', countrySlug: 'saudi-arabia', lat: 25.9333, lng: 49.6667 },
  { slug: 'abu-arish', slugAr: 'ابو-عريش', nameEn: 'Abu Arish', nameAr: 'أبو عريش', countrySlug: 'saudi-arabia', lat: 16.9667, lng: 42.8333 },
  { slug: 'ahad-rafidah', slugAr: 'احد-رفيدة', nameEn: 'Ahad Rafidah', nameAr: 'أحد رفيدة', countrySlug: 'saudi-arabia', lat: 18.2167, lng: 42.8500 },
  { slug: 'al-mandaq', slugAr: 'المندق', nameEn: 'Al Mandaq', nameAr: 'المندق', countrySlug: 'saudi-arabia', lat: 20.1667, lng: 41.3167 },
  { slug: 'al-makhwah', slugAr: 'المخواة', nameEn: 'Al Makhwah', nameAr: 'المخواة', countrySlug: 'saudi-arabia', lat: 19.7833, lng: 41.4333 },
  { slug: 'bariq', slugAr: 'بارق', nameEn: 'Bariq', nameAr: 'بارق', countrySlug: 'saudi-arabia', lat: 18.9000, lng: 42.1000 },
  { slug: 'muhayil', slugAr: 'محايل', nameEn: 'Muhayil', nameAr: 'محايل', countrySlug: 'saudi-arabia', lat: 18.5500, lng: 42.0333 },
  { slug: 'tathlith', slugAr: 'تثليث', nameEn: 'Tathlith', nameAr: 'تثليث', countrySlug: 'saudi-arabia', lat: 19.5333, lng: 43.4833 },
  { slug: 'khaybar', slugAr: 'خيبر', nameEn: 'Khaybar', nameAr: 'خيبر', countrySlug: 'saudi-arabia', lat: 25.6922, lng: 39.2889 },
  { slug: 'al-hanakiyah', slugAr: 'الحناكية', nameEn: 'Al Hanakiyah', nameAr: 'الحناكية', countrySlug: 'saudi-arabia', lat: 24.8667, lng: 40.5167 },
  { slug: 'umluj', slugAr: 'أملج', nameEn: 'Umluj', nameAr: 'أملج', countrySlug: 'saudi-arabia', lat: 25.0500, lng: 37.2667 },
  { slug: 'al-aqiq', slugAr: 'العقيق', nameEn: 'Al Aqiq', nameAr: 'العقيق', countrySlug: 'saudi-arabia', lat: 20.2667, lng: 41.6667 },
  { slug: 'fayfa', slugAr: 'فيفاء', nameEn: 'Fayfa', nameAr: 'فيفاء', countrySlug: 'saudi-arabia', lat: 17.2667, lng: 43.1000 },
  { slug: 'bish', slugAr: 'بيش', nameEn: 'Bish', nameAr: 'بيش', countrySlug: 'saudi-arabia', lat: 17.3833, lng: 42.5667 },
  { slug: 'tanomah', slugAr: 'تنومة', nameEn: 'Tanomah', nameAr: 'تنومة', countrySlug: 'saudi-arabia', lat: 19.1500, lng: 42.1333 },
  { slug: 'al-khubra', slugAr: 'الخبراء', nameEn: 'Al Khubra', nameAr: 'الخبراء', countrySlug: 'saudi-arabia', lat: 26.2833, lng: 43.9667 },
  { slug: 'sajir', slugAr: 'ساجر', nameEn: 'Sajir', nameAr: 'ساجر', countrySlug: 'saudi-arabia', lat: 24.0833, lng: 44.2667 },

  // ======= UAE =======
  { slug: 'dubai', slugAr: 'دبي', nameEn: 'Dubai', nameAr: 'دبي', countrySlug: 'uae', lat: 25.2048, lng: 55.2708 },
  { slug: 'abu-dhabi', slugAr: 'ابوظبي', nameEn: 'Abu Dhabi', nameAr: 'أبوظبي', countrySlug: 'uae', lat: 24.4539, lng: 54.3773 },
  { slug: 'sharjah', slugAr: 'الشارقة', nameEn: 'Sharjah', nameAr: 'الشارقة', countrySlug: 'uae', lat: 25.3463, lng: 55.4209 },
  { slug: 'ajman', slugAr: 'عجمان', nameEn: 'Ajman', nameAr: 'عجمان', countrySlug: 'uae', lat: 25.4052, lng: 55.5136 },
  { slug: 'al-ain', slugAr: 'العين', nameEn: 'Al Ain', nameAr: 'العين', countrySlug: 'uae', lat: 24.1917, lng: 55.7606 },
  { slug: 'ras-al-khaimah', slugAr: 'رأس-الخيمة', nameEn: 'Ras Al Khaimah', nameAr: 'رأس الخيمة', countrySlug: 'uae', lat: 25.7895, lng: 55.9432 },
  { slug: 'fujairah', slugAr: 'الفجيرة', nameEn: 'Fujairah', nameAr: 'الفجيرة', countrySlug: 'uae', lat: 25.1288, lng: 56.3265 },
  { slug: 'umm-al-quwain', slugAr: 'ام-القيوين', nameEn: 'Umm Al Quwain', nameAr: 'أم القيوين', countrySlug: 'uae', lat: 25.5647, lng: 55.5553 },

  // ======= QATAR =======
  { slug: 'doha', slugAr: 'الدوحة', nameEn: 'Doha', nameAr: 'الدوحة', countrySlug: 'qatar', lat: 25.2854, lng: 51.5310 },
  { slug: 'al-wakrah', slugAr: 'الوكرة', nameEn: 'Al Wakrah', nameAr: 'الوكرة', countrySlug: 'qatar', lat: 25.1659, lng: 51.6039 },
  { slug: 'al-khor', slugAr: 'الخور', nameEn: 'Al Khor', nameAr: 'الخور', countrySlug: 'qatar', lat: 25.6804, lng: 51.4969 },
  { slug: 'al-rayyan', slugAr: 'الريان', nameEn: 'Al Rayyan', nameAr: 'الريان', countrySlug: 'qatar', lat: 25.2919, lng: 51.4244 },
  { slug: 'lusail', slugAr: 'لوسيل', nameEn: 'Lusail', nameAr: 'لوسيل', countrySlug: 'qatar', lat: 25.4300, lng: 51.4900 },

  // ======= KUWAIT =======
  { slug: 'kuwait-city', slugAr: 'مدينة-الكويت', nameEn: 'Kuwait City', nameAr: 'مدينة الكويت', countrySlug: 'kuwait', lat: 29.3759, lng: 47.9774 },
  { slug: 'hawally', slugAr: 'حولي', nameEn: 'Hawally', nameAr: 'حولي', countrySlug: 'kuwait', lat: 29.3328, lng: 48.0286 },
  { slug: 'al-ahmadi', slugAr: 'الاحمدي', nameEn: 'Al Ahmadi', nameAr: 'الأحمدي', countrySlug: 'kuwait', lat: 29.0769, lng: 48.0838 },
  { slug: 'al-jahra', slugAr: 'الجهراء', nameEn: 'Al Jahra', nameAr: 'الجهراء', countrySlug: 'kuwait', lat: 29.3375, lng: 47.6581 },
  { slug: 'salmiya', slugAr: 'السالمية', nameEn: 'Salmiya', nameAr: 'السالمية', countrySlug: 'kuwait', lat: 29.3339, lng: 48.0764 },

  // ======= BAHRAIN =======
  { slug: 'manama', slugAr: 'المنامة', nameEn: 'Manama', nameAr: 'المنامة', countrySlug: 'bahrain', lat: 26.2285, lng: 50.5860 },
  { slug: 'muharraq', slugAr: 'المحرق', nameEn: 'Muharraq', nameAr: 'المحرق', countrySlug: 'bahrain', lat: 26.2572, lng: 50.6119 },
  { slug: 'riffa', slugAr: 'الرفاع', nameEn: 'Riffa', nameAr: 'الرفاع', countrySlug: 'bahrain', lat: 26.1300, lng: 50.5553 },
  { slug: 'isa-town', slugAr: 'مدينة-عيسى', nameEn: 'Isa Town', nameAr: 'مدينة عيسى', countrySlug: 'bahrain', lat: 26.1736, lng: 50.5478 },

  // ======= OMAN =======
  { slug: 'muscat', slugAr: 'مسقط', nameEn: 'Muscat', nameAr: 'مسقط', countrySlug: 'oman', lat: 23.5880, lng: 58.3829 },
  { slug: 'salalah', slugAr: 'صلالة', nameEn: 'Salalah', nameAr: 'صلالة', countrySlug: 'oman', lat: 17.0151, lng: 54.0924 },
  { slug: 'sohar', slugAr: 'صحار', nameEn: 'Sohar', nameAr: 'صحار', countrySlug: 'oman', lat: 24.3461, lng: 56.7075 },
  { slug: 'nizwa', slugAr: 'نزوى', nameEn: 'Nizwa', nameAr: 'نزوى', countrySlug: 'oman', lat: 22.9333, lng: 57.5333 },
  { slug: 'sur', slugAr: 'صور', nameEn: 'Sur', nameAr: 'صور', countrySlug: 'oman', lat: 22.5667, lng: 59.5289 },

  // ======= EGYPT =======
  { slug: 'cairo', slugAr: 'القاهرة', nameEn: 'Cairo', nameAr: 'القاهرة', countrySlug: 'egypt', lat: 30.0444, lng: 31.2357 },
  { slug: 'alexandria', slugAr: 'الاسكندرية', nameEn: 'Alexandria', nameAr: 'الإسكندرية', countrySlug: 'egypt', lat: 31.2001, lng: 29.9187 },
  { slug: 'giza', slugAr: 'الجيزة', nameEn: 'Giza', nameAr: 'الجيزة', countrySlug: 'egypt', lat: 30.0131, lng: 31.2089 },
  { slug: 'aswan', slugAr: 'اسوان', nameEn: 'Aswan', nameAr: 'أسوان', countrySlug: 'egypt', lat: 24.0889, lng: 32.8998 },
  { slug: 'luxor', slugAr: 'الاقصر', nameEn: 'Luxor', nameAr: 'الأقصر', countrySlug: 'egypt', lat: 25.6872, lng: 32.6396 },
  { slug: 'sharm-el-sheikh', slugAr: 'شرم-الشيخ', nameEn: 'Sharm El Sheikh', nameAr: 'شرم الشيخ', countrySlug: 'egypt', lat: 27.9158, lng: 34.3300 },
  { slug: 'port-said', slugAr: 'بورسعيد', nameEn: 'Port Said', nameAr: 'بورسعيد', countrySlug: 'egypt', lat: 31.2653, lng: 32.3019 },
  { slug: 'suez', slugAr: 'السويس', nameEn: 'Suez', nameAr: 'السويس', countrySlug: 'egypt', lat: 29.9668, lng: 32.5498 },
  { slug: 'tanta', slugAr: 'طنطا', nameEn: 'Tanta', nameAr: 'طنطا', countrySlug: 'egypt', lat: 30.7865, lng: 31.0004 },
  { slug: 'mansoura', slugAr: 'المنصورة', nameEn: 'Mansoura', nameAr: 'المنصورة', countrySlug: 'egypt', lat: 31.0409, lng: 31.3785 },

  // ======= JORDAN =======
  { slug: 'amman', slugAr: 'عمان', nameEn: 'Amman', nameAr: 'عمّان', countrySlug: 'jordan', lat: 31.9454, lng: 35.9284 },
  { slug: 'irbid', slugAr: 'اربد', nameEn: 'Irbid', nameAr: 'إربد', countrySlug: 'jordan', lat: 32.5568, lng: 35.8469 },
  { slug: 'zarqa', slugAr: 'الزرقاء', nameEn: 'Zarqa', nameAr: 'الزرقاء', countrySlug: 'jordan', lat: 32.0608, lng: 36.0942 },
  { slug: 'aqaba', slugAr: 'العقبة', nameEn: 'Aqaba', nameAr: 'العقبة', countrySlug: 'jordan', lat: 29.5320, lng: 35.0063 },
  { slug: 'salt', slugAr: 'السلط', nameEn: 'Salt', nameAr: 'السلط', countrySlug: 'jordan', lat: 32.0392, lng: 35.7272 },

  // ======= IRAQ =======
  { slug: 'baghdad', slugAr: 'بغداد', nameEn: 'Baghdad', nameAr: 'بغداد', countrySlug: 'iraq', lat: 33.3152, lng: 44.3661 },
  { slug: 'basra', slugAr: 'البصرة', nameEn: 'Basra', nameAr: 'البصرة', countrySlug: 'iraq', lat: 30.5085, lng: 47.7804 },
  { slug: 'erbil', slugAr: 'اربيل', nameEn: 'Erbil', nameAr: 'أربيل', countrySlug: 'iraq', lat: 36.1912, lng: 44.0119 },
  { slug: 'mosul', slugAr: 'الموصل', nameEn: 'Mosul', nameAr: 'الموصل', countrySlug: 'iraq', lat: 36.3350, lng: 43.1189 },
  { slug: 'sulaymaniyah', slugAr: 'السليمانية', nameEn: 'Sulaymaniyah', nameAr: 'السليمانية', countrySlug: 'iraq', lat: 35.5614, lng: 45.4306 },
  { slug: 'najaf', slugAr: 'النجف', nameEn: 'Najaf', nameAr: 'النجف', countrySlug: 'iraq', lat: 32.0003, lng: 44.3354 },
  { slug: 'karbala', slugAr: 'كربلاء', nameEn: 'Karbala', nameAr: 'كربلاء', countrySlug: 'iraq', lat: 32.6160, lng: 44.0249 },

  // ======= SYRIA =======
  { slug: 'damascus', slugAr: 'دمشق', nameEn: 'Damascus', nameAr: 'دمشق', countrySlug: 'syria', lat: 33.5138, lng: 36.2765 },
  { slug: 'aleppo', slugAr: 'حلب', nameEn: 'Aleppo', nameAr: 'حلب', countrySlug: 'syria', lat: 36.2021, lng: 37.1343 },
  { slug: 'homs', slugAr: 'حمص', nameEn: 'Homs', nameAr: 'حمص', countrySlug: 'syria', lat: 34.7324, lng: 36.7137 },
  { slug: 'latakia', slugAr: 'اللاذقية', nameEn: 'Latakia', nameAr: 'اللاذقية', countrySlug: 'syria', lat: 35.5317, lng: 35.7914 },

  // ======= LEBANON =======
  { slug: 'beirut', slugAr: 'بيروت', nameEn: 'Beirut', nameAr: 'بيروت', countrySlug: 'lebanon', lat: 33.8938, lng: 35.5018 },
  { slug: 'tripoli-lb', slugAr: 'طرابلس', nameEn: 'Tripoli', nameAr: 'طرابلس', countrySlug: 'lebanon', lat: 34.4367, lng: 35.8497 },
  { slug: 'sidon', slugAr: 'صيدا', nameEn: 'Sidon', nameAr: 'صيدا', countrySlug: 'lebanon', lat: 33.5633, lng: 35.3756 },

  // ======= PALESTINE =======
  { slug: 'jerusalem', slugAr: 'القدس', nameEn: 'Jerusalem', nameAr: 'القدس', countrySlug: 'palestine', lat: 31.7683, lng: 35.2137 },
  { slug: 'gaza', slugAr: 'غزة', nameEn: 'Gaza', nameAr: 'غزة', countrySlug: 'palestine', lat: 31.5017, lng: 34.4668 },
  { slug: 'hebron', slugAr: 'الخليل', nameEn: 'Hebron', nameAr: 'الخليل', countrySlug: 'palestine', lat: 31.5326, lng: 35.0998 },
  { slug: 'nablus', slugAr: 'نابلس', nameEn: 'Nablus', nameAr: 'نابلس', countrySlug: 'palestine', lat: 32.2211, lng: 35.2544 },
  { slug: 'ramallah', slugAr: 'رام-الله', nameEn: 'Ramallah', nameAr: 'رام الله', countrySlug: 'palestine', lat: 31.9038, lng: 35.2034 },

  // ======= YEMEN =======
  { slug: 'sanaa', slugAr: 'صنعاء', nameEn: "Sana'a", nameAr: 'صنعاء', countrySlug: 'yemen', lat: 15.3694, lng: 44.1910 },
  { slug: 'aden', slugAr: 'عدن', nameEn: 'Aden', nameAr: 'عدن', countrySlug: 'yemen', lat: 12.7855, lng: 45.0187 },
  { slug: 'taiz', slugAr: 'تعز', nameEn: 'Taiz', nameAr: 'تعز', countrySlug: 'yemen', lat: 13.5789, lng: 44.0219 },
  { slug: 'al-hudaydah', slugAr: 'الحديدة', nameEn: 'Al Hudaydah', nameAr: 'الحديدة', countrySlug: 'yemen', lat: 14.7979, lng: 42.9515 },

  // ======= MOROCCO =======
  { slug: 'casablanca', slugAr: 'الدار-البيضاء', nameEn: 'Casablanca', nameAr: 'الدار البيضاء', countrySlug: 'morocco', lat: 33.5731, lng: -7.5898 },
  { slug: 'rabat', slugAr: 'الرباط', nameEn: 'Rabat', nameAr: 'الرباط', countrySlug: 'morocco', lat: 34.0209, lng: -6.8416 },
  { slug: 'marrakech', slugAr: 'مراكش', nameEn: 'Marrakech', nameAr: 'مراكش', countrySlug: 'morocco', lat: 31.6295, lng: -7.9811 },
  { slug: 'fes', slugAr: 'فاس', nameEn: 'Fes', nameAr: 'فاس', countrySlug: 'morocco', lat: 34.0331, lng: -5.0003 },
  { slug: 'tangier', slugAr: 'طنجة', nameEn: 'Tangier', nameAr: 'طنجة', countrySlug: 'morocco', lat: 35.7595, lng: -5.8340 },
  { slug: 'agadir', slugAr: 'اغادير', nameEn: 'Agadir', nameAr: 'أغادير', countrySlug: 'morocco', lat: 30.4278, lng: -9.5981 },

  // ======= ALGERIA =======
  { slug: 'algiers', slugAr: 'الجزائر-العاصمة', nameEn: 'Algiers', nameAr: 'الجزائر العاصمة', countrySlug: 'algeria', lat: 36.7538, lng: 3.0588 },
  { slug: 'oran', slugAr: 'وهران', nameEn: 'Oran', nameAr: 'وهران', countrySlug: 'algeria', lat: 35.6969, lng: -0.6331 },
  { slug: 'constantine', slugAr: 'قسنطينة', nameEn: 'Constantine', nameAr: 'قسنطينة', countrySlug: 'algeria', lat: 36.3650, lng: 6.6147 },
  { slug: 'annaba', slugAr: 'عنابة', nameEn: 'Annaba', nameAr: 'عنابة', countrySlug: 'algeria', lat: 36.9000, lng: 7.7667 },
  { slug: 'setif', slugAr: 'سطيف', nameEn: 'Setif', nameAr: 'سطيف', countrySlug: 'algeria', lat: 36.1911, lng: 5.4108 },

  // ======= TUNISIA =======
  { slug: 'tunis', slugAr: 'تونس-العاصمة', nameEn: 'Tunis', nameAr: 'تونس العاصمة', countrySlug: 'tunisia', lat: 36.8065, lng: 10.1815 },
  { slug: 'sfax', slugAr: 'صفاقس', nameEn: 'Sfax', nameAr: 'صفاقس', countrySlug: 'tunisia', lat: 34.7406, lng: 10.7603 },
  { slug: 'sousse', slugAr: 'سوسة', nameEn: 'Sousse', nameAr: 'سوسة', countrySlug: 'tunisia', lat: 35.8256, lng: 10.6369 },

  // ======= LIBYA =======
  { slug: 'tripoli', slugAr: 'طرابلس-ليبيا', nameEn: 'Tripoli', nameAr: 'طرابلس', countrySlug: 'libya', lat: 32.8872, lng: 13.1913 },
  { slug: 'benghazi', slugAr: 'بنغازي', nameEn: 'Benghazi', nameAr: 'بنغازي', countrySlug: 'libya', lat: 32.1194, lng: 20.0868 },
  { slug: 'misrata', slugAr: 'مصراتة', nameEn: 'Misrata', nameAr: 'مصراتة', countrySlug: 'libya', lat: 32.3754, lng: 15.0925 },

  // ======= SUDAN =======
  { slug: 'khartoum', slugAr: 'الخرطوم', nameEn: 'Khartoum', nameAr: 'الخرطوم', countrySlug: 'sudan', lat: 15.5007, lng: 32.5599 },
  { slug: 'omdurman', slugAr: 'ام-درمان', nameEn: 'Omdurman', nameAr: 'أم درمان', countrySlug: 'sudan', lat: 15.6445, lng: 32.4777 },
  { slug: 'port-sudan', slugAr: 'بورتسودان', nameEn: 'Port Sudan', nameAr: 'بورتسودان', countrySlug: 'sudan', lat: 19.6158, lng: 37.2164 },

  // ======= PAKISTAN =======
  { slug: 'islamabad', slugAr: 'اسلام-اباد', nameEn: 'Islamabad', nameAr: 'إسلام آباد', countrySlug: 'pakistan', lat: 33.6844, lng: 73.0479 },
  { slug: 'karachi', slugAr: 'كراتشي', nameEn: 'Karachi', nameAr: 'كراتشي', countrySlug: 'pakistan', lat: 24.8607, lng: 67.0011 },
  { slug: 'lahore', slugAr: 'لاهور', nameEn: 'Lahore', nameAr: 'لاهور', countrySlug: 'pakistan', lat: 31.5204, lng: 74.3587 },
  { slug: 'faisalabad', slugAr: 'فيصل-اباد', nameEn: 'Faisalabad', nameAr: 'فيصل آباد', countrySlug: 'pakistan', lat: 31.4504, lng: 73.1350 },
  { slug: 'rawalpindi', slugAr: 'راوالبندي', nameEn: 'Rawalpindi', nameAr: 'راوالبندي', countrySlug: 'pakistan', lat: 33.5651, lng: 73.0169 },
  { slug: 'peshawar', slugAr: 'بيشاور', nameEn: 'Peshawar', nameAr: 'بيشاور', countrySlug: 'pakistan', lat: 34.0151, lng: 71.5249 },
  { slug: 'multan', slugAr: 'ملتان', nameEn: 'Multan', nameAr: 'ملتان', countrySlug: 'pakistan', lat: 30.1575, lng: 71.5249 },
  { slug: 'quetta', slugAr: 'كويتا', nameEn: 'Quetta', nameAr: 'كويتا', countrySlug: 'pakistan', lat: 30.1798, lng: 66.9750 },

  // ======= INDIA =======
  { slug: 'mumbai', slugAr: 'مومباي', nameEn: 'Mumbai', nameAr: 'مومباي', countrySlug: 'india', lat: 19.0760, lng: 72.8777 },
  { slug: 'delhi', slugAr: 'دلهي', nameEn: 'Delhi', nameAr: 'دلهي', countrySlug: 'india', lat: 28.7041, lng: 77.1025 },
  { slug: 'hyderabad', slugAr: 'حيدر-اباد', nameEn: 'Hyderabad', nameAr: 'حيدر آباد', countrySlug: 'india', lat: 17.3850, lng: 78.4867 },
  { slug: 'bangalore', slugAr: 'بنغالور', nameEn: 'Bangalore', nameAr: 'بنغالور', countrySlug: 'india', lat: 12.9716, lng: 77.5946 },
  { slug: 'chennai', slugAr: 'تشيناي', nameEn: 'Chennai', nameAr: 'تشيناي', countrySlug: 'india', lat: 13.0827, lng: 80.2707 },
  { slug: 'kolkata', slugAr: 'كولكاتا', nameEn: 'Kolkata', nameAr: 'كولكاتا', countrySlug: 'india', lat: 22.5726, lng: 88.3639 },
  { slug: 'lucknow', slugAr: 'لكناو', nameEn: 'Lucknow', nameAr: 'لكناو', countrySlug: 'india', lat: 26.8467, lng: 80.9462 },
  { slug: 'ahmedabad', slugAr: 'احمد-اباد', nameEn: 'Ahmedabad', nameAr: 'أحمد آباد', countrySlug: 'india', lat: 23.0225, lng: 72.5714 },

  // ======= BANGLADESH =======
  { slug: 'dhaka', slugAr: 'دكا', nameEn: 'Dhaka', nameAr: 'دكا', countrySlug: 'bangladesh', lat: 23.8103, lng: 90.4125 },
  { slug: 'chittagong', slugAr: 'شيتاغونغ', nameEn: 'Chittagong', nameAr: 'شيتاغونغ', countrySlug: 'bangladesh', lat: 22.3569, lng: 91.7832 },
  { slug: 'sylhet', slugAr: 'سيلهت', nameEn: 'Sylhet', nameAr: 'سيلهت', countrySlug: 'bangladesh', lat: 24.8949, lng: 91.8687 },
  { slug: 'rajshahi', slugAr: 'راجشاهي', nameEn: 'Rajshahi', nameAr: 'راجشاهي', countrySlug: 'bangladesh', lat: 24.3745, lng: 88.6042 },

  // ======= AFGHANISTAN =======
  { slug: 'kabul', slugAr: 'كابل', nameEn: 'Kabul', nameAr: 'كابل', countrySlug: 'afghanistan', lat: 34.5553, lng: 69.2075 },
  { slug: 'herat', slugAr: 'هرات', nameEn: 'Herat', nameAr: 'هرات', countrySlug: 'afghanistan', lat: 34.3482, lng: 62.1997 },
  { slug: 'mazar-i-sharif', slugAr: 'مزار-شريف', nameEn: 'Mazar-i-Sharif', nameAr: 'مزار شريف', countrySlug: 'afghanistan', lat: 36.7069, lng: 67.1100 },

  // ======= SRI LANKA =======
  { slug: 'colombo', slugAr: 'كولومبو', nameEn: 'Colombo', nameAr: 'كولومبو', countrySlug: 'sri-lanka', lat: 6.9271, lng: 79.8612 },

  // ======= INDONESIA =======
  { slug: 'jakarta', slugAr: 'جاكرتا', nameEn: 'Jakarta', nameAr: 'جاكرتا', countrySlug: 'indonesia', lat: -6.2088, lng: 106.8456 },
  { slug: 'surabaya', slugAr: 'سورابايا', nameEn: 'Surabaya', nameAr: 'سورابايا', countrySlug: 'indonesia', lat: -7.2575, lng: 112.7521 },
  { slug: 'bandung', slugAr: 'باندونغ', nameEn: 'Bandung', nameAr: 'باندونغ', countrySlug: 'indonesia', lat: -6.9175, lng: 107.6191 },
  { slug: 'medan', slugAr: 'ميدان', nameEn: 'Medan', nameAr: 'ميدان', countrySlug: 'indonesia', lat: 3.5952, lng: 98.6722 },
  { slug: 'semarang', slugAr: 'سيمارانغ', nameEn: 'Semarang', nameAr: 'سيمارانغ', countrySlug: 'indonesia', lat: -6.9666, lng: 110.4196 },
  { slug: 'yogyakarta', slugAr: 'يوغياكارتا', nameEn: 'Yogyakarta', nameAr: 'يوغياكارتا', countrySlug: 'indonesia', lat: -7.7956, lng: 110.3695 },

  // ======= MALAYSIA =======
  { slug: 'kuala-lumpur', slugAr: 'كوالالمبور', nameEn: 'Kuala Lumpur', nameAr: 'كوالالمبور', countrySlug: 'malaysia', lat: 3.1390, lng: 101.6869 },
  { slug: 'penang', slugAr: 'بينانغ', nameEn: 'Penang', nameAr: 'بينانغ', countrySlug: 'malaysia', lat: 5.4164, lng: 100.3327 },
  { slug: 'johor-bahru', slugAr: 'جوهور-باهرو', nameEn: 'Johor Bahru', nameAr: 'جوهور باهرو', countrySlug: 'malaysia', lat: 1.4927, lng: 103.7414 },
  { slug: 'kota-kinabalu', slugAr: 'كوتا-كينابالو', nameEn: 'Kota Kinabalu', nameAr: 'كوتا كينابالو', countrySlug: 'malaysia', lat: 5.9804, lng: 116.0735 },

  // ======= TURKEY =======
  { slug: 'istanbul', slugAr: 'اسطنبول', nameEn: 'Istanbul', nameAr: 'إسطنبول', countrySlug: 'turkey', lat: 41.0082, lng: 28.9784 },
  { slug: 'ankara', slugAr: 'انقرة', nameEn: 'Ankara', nameAr: 'أنقرة', countrySlug: 'turkey', lat: 39.9334, lng: 32.8597 },
  { slug: 'izmir', slugAr: 'ازمير', nameEn: 'Izmir', nameAr: 'إزمير', countrySlug: 'turkey', lat: 38.4192, lng: 27.1287 },
  { slug: 'bursa', slugAr: 'بورصة', nameEn: 'Bursa', nameAr: 'بورصة', countrySlug: 'turkey', lat: 40.1826, lng: 29.0665 },
  { slug: 'antalya', slugAr: 'انطاليا', nameEn: 'Antalya', nameAr: 'أنطاليا', countrySlug: 'turkey', lat: 36.8969, lng: 30.7133 },
  { slug: 'konya', slugAr: 'قونية', nameEn: 'Konya', nameAr: 'قونية', countrySlug: 'turkey', lat: 37.8746, lng: 32.4932 },

  // ======= IRAN =======
  { slug: 'tehran', slugAr: 'طهران', nameEn: 'Tehran', nameAr: 'طهران', countrySlug: 'iran', lat: 35.6892, lng: 51.3890 },
  { slug: 'isfahan', slugAr: 'اصفهان', nameEn: 'Isfahan', nameAr: 'أصفهان', countrySlug: 'iran', lat: 32.6546, lng: 51.6680 },
  { slug: 'mashhad', slugAr: 'مشهد', nameEn: 'Mashhad', nameAr: 'مشهد', countrySlug: 'iran', lat: 36.2605, lng: 59.6168 },
  { slug: 'tabriz', slugAr: 'تبريز', nameEn: 'Tabriz', nameAr: 'تبريز', countrySlug: 'iran', lat: 38.0962, lng: 46.2738 },
  { slug: 'shiraz', slugAr: 'شيراز', nameEn: 'Shiraz', nameAr: 'شيراز', countrySlug: 'iran', lat: 29.5918, lng: 52.5837 },

  // ======= NIGERIA =======
  { slug: 'lagos', slugAr: 'لاغوس', nameEn: 'Lagos', nameAr: 'لاغوس', countrySlug: 'nigeria', lat: 6.5244, lng: 3.3792 },
  { slug: 'abuja', slugAr: 'ابوجا', nameEn: 'Abuja', nameAr: 'أبوجا', countrySlug: 'nigeria', lat: 9.0579, lng: 7.4951 },
  { slug: 'kano', slugAr: 'كانو', nameEn: 'Kano', nameAr: 'كانو', countrySlug: 'nigeria', lat: 12.0022, lng: 8.5920 },
  { slug: 'ibadan', slugAr: 'ابادان', nameEn: 'Ibadan', nameAr: 'إبادان', countrySlug: 'nigeria', lat: 7.3775, lng: 3.9470 },

  // ======= SOMALIA =======
  { slug: 'mogadishu', slugAr: 'مقديشو', nameEn: 'Mogadishu', nameAr: 'مقديشو', countrySlug: 'somalia', lat: 2.0469, lng: 45.3182 },
  { slug: 'hargeisa', slugAr: 'هرجيسا', nameEn: 'Hargeisa', nameAr: 'هرجيسا', countrySlug: 'somalia', lat: 9.5600, lng: 44.0650 },

  // ======= SENEGAL =======
  { slug: 'dakar', slugAr: 'داكار', nameEn: 'Dakar', nameAr: 'داكار', countrySlug: 'senegal', lat: 14.7167, lng: -17.4677 },

  // ======= ETHIOPIA =======
  { slug: 'addis-ababa', slugAr: 'اديس-ابابا', nameEn: 'Addis Ababa', nameAr: 'أديس أبابا', countrySlug: 'ethiopia', lat: 9.0250, lng: 38.7469 },

  // ======= TANZANIA =======
  { slug: 'dar-es-salaam', slugAr: 'دار-السلام', nameEn: 'Dar es Salaam', nameAr: 'دار السلام', countrySlug: 'tanzania', lat: -6.7924, lng: 39.2083 },

  // ======= KENYA =======
  { slug: 'nairobi', slugAr: 'نيروبي', nameEn: 'Nairobi', nameAr: 'نيروبي', countrySlug: 'kenya', lat: -1.2921, lng: 36.8219 },
  { slug: 'mombasa', slugAr: 'ممباسا', nameEn: 'Mombasa', nameAr: 'ممباسا', countrySlug: 'kenya', lat: -4.0435, lng: 39.6682 },

  // ======= SOUTH AFRICA =======
  { slug: 'johannesburg', slugAr: 'جوهانسبرغ', nameEn: 'Johannesburg', nameAr: 'جوهانسبرغ', countrySlug: 'south-africa', lat: -26.2041, lng: 28.0473 },
  { slug: 'cape-town', slugAr: 'كيب-تاون', nameEn: 'Cape Town', nameAr: 'كيب تاون', countrySlug: 'south-africa', lat: -33.9249, lng: 18.4241 },
  { slug: 'durban', slugAr: 'ديربان', nameEn: 'Durban', nameAr: 'ديربان', countrySlug: 'south-africa', lat: -29.8587, lng: 31.0218 },

  // ======= UK =======
  { slug: 'london', slugAr: 'لندن', nameEn: 'London', nameAr: 'لندن', countrySlug: 'united-kingdom', lat: 51.5074, lng: -0.1278 },
  { slug: 'birmingham', slugAr: 'برمنغهام', nameEn: 'Birmingham', nameAr: 'برمنغهام', countrySlug: 'united-kingdom', lat: 52.4862, lng: -1.8904 },
  { slug: 'manchester', slugAr: 'مانشستر', nameEn: 'Manchester', nameAr: 'مانشستر', countrySlug: 'united-kingdom', lat: 53.4808, lng: -2.2426 },
  { slug: 'leeds', slugAr: 'ليدز', nameEn: 'Leeds', nameAr: 'ليدز', countrySlug: 'united-kingdom', lat: 53.8008, lng: -1.5491 },
  { slug: 'bradford', slugAr: 'برادفورد', nameEn: 'Bradford', nameAr: 'برادفورد', countrySlug: 'united-kingdom', lat: 53.7960, lng: -1.7594 },
  { slug: 'glasgow', slugAr: 'غلاسكو', nameEn: 'Glasgow', nameAr: 'غلاسكو', countrySlug: 'united-kingdom', lat: 55.8642, lng: -4.2518 },
  { slug: 'edinburgh', slugAr: 'ادنبرة', nameEn: 'Edinburgh', nameAr: 'إدنبرة', countrySlug: 'united-kingdom', lat: 55.9533, lng: -3.1883 },

  // ======= GERMANY =======
  { slug: 'berlin', slugAr: 'برلين', nameEn: 'Berlin', nameAr: 'برلين', countrySlug: 'germany', lat: 52.5200, lng: 13.4050 },
  { slug: 'munich', slugAr: 'ميونخ', nameEn: 'Munich', nameAr: 'ميونخ', countrySlug: 'germany', lat: 48.1351, lng: 11.5820 },
  { slug: 'frankfurt', slugAr: 'فرانكفورت', nameEn: 'Frankfurt', nameAr: 'فرانكفورت', countrySlug: 'germany', lat: 50.1109, lng: 8.6821 },
  { slug: 'hamburg', slugAr: 'هامبورغ', nameEn: 'Hamburg', nameAr: 'هامبورغ', countrySlug: 'germany', lat: 53.5511, lng: 9.9937 },
  { slug: 'cologne', slugAr: 'كولونيا', nameEn: 'Cologne', nameAr: 'كولونيا', countrySlug: 'germany', lat: 50.9375, lng: 6.9603 },

  // ======= FRANCE =======
  { slug: 'paris', slugAr: 'باريس', nameEn: 'Paris', nameAr: 'باريس', countrySlug: 'france', lat: 48.8566, lng: 2.3522 },
  { slug: 'marseille', slugAr: 'مارسيليا', nameEn: 'Marseille', nameAr: 'مارسيليا', countrySlug: 'france', lat: 43.2965, lng: 5.3698 },
  { slug: 'lyon', slugAr: 'ليون', nameEn: 'Lyon', nameAr: 'ليون', countrySlug: 'france', lat: 45.7640, lng: 4.8357 },
  { slug: 'strasbourg', slugAr: 'ستراسبورغ', nameEn: 'Strasbourg', nameAr: 'ستراسبورغ', countrySlug: 'france', lat: 48.5734, lng: 7.7521 },

  // ======= NETHERLANDS =======
  { slug: 'amsterdam', slugAr: 'امستردام', nameEn: 'Amsterdam', nameAr: 'أمستردام', countrySlug: 'netherlands', lat: 52.3676, lng: 4.9041 },
  { slug: 'rotterdam', slugAr: 'روتردام', nameEn: 'Rotterdam', nameAr: 'روتردام', countrySlug: 'netherlands', lat: 51.9244, lng: 4.4777 },
  { slug: 'the-hague', slugAr: 'لاهاي', nameEn: 'The Hague', nameAr: 'لاهاي', countrySlug: 'netherlands', lat: 52.0705, lng: 4.3007 },

  // ======= SWEDEN =======
  { slug: 'stockholm', slugAr: 'ستوكهولم', nameEn: 'Stockholm', nameAr: 'ستوكهولم', countrySlug: 'sweden', lat: 59.3293, lng: 18.0686 },
  { slug: 'malmo', slugAr: 'مالمو', nameEn: 'Malmö', nameAr: 'مالمو', countrySlug: 'sweden', lat: 55.6050, lng: 13.0038 },
  { slug: 'gothenburg', slugAr: 'يوتوبوري', nameEn: 'Gothenburg', nameAr: 'يوتوبوري', countrySlug: 'sweden', lat: 57.7089, lng: 11.9746 },

  // ======= SPAIN =======
  { slug: 'madrid', slugAr: 'مدريد', nameEn: 'Madrid', nameAr: 'مدريد', countrySlug: 'spain', lat: 40.4168, lng: -3.7038 },
  { slug: 'barcelona', slugAr: 'برشلونة', nameEn: 'Barcelona', nameAr: 'برشلونة', countrySlug: 'spain', lat: 41.3874, lng: 2.1686 },

  // ======= ITALY =======
  { slug: 'rome', slugAr: 'روما', nameEn: 'Rome', nameAr: 'روما', countrySlug: 'italy', lat: 41.9028, lng: 12.4964 },
  { slug: 'milan', slugAr: 'ميلان', nameEn: 'Milan', nameAr: 'ميلان', countrySlug: 'italy', lat: 45.4642, lng: 9.1900 },

  // ======= BELGIUM =======
  { slug: 'brussels', slugAr: 'بروكسل', nameEn: 'Brussels', nameAr: 'بروكسل', countrySlug: 'belgium', lat: 50.8503, lng: 4.3517 },
  { slug: 'antwerp', slugAr: 'انتويرب', nameEn: 'Antwerp', nameAr: 'أنتويرب', countrySlug: 'belgium', lat: 51.2194, lng: 4.4025 },

  // ======= AUSTRIA =======
  { slug: 'vienna', slugAr: 'فيينا', nameEn: 'Vienna', nameAr: 'فيينا', countrySlug: 'austria', lat: 48.2082, lng: 16.3738 },

  // ======= BOSNIA =======
  { slug: 'sarajevo', slugAr: 'سراييفو', nameEn: 'Sarajevo', nameAr: 'سراييفو', countrySlug: 'bosnia', lat: 43.8563, lng: 18.4131 },

  // ======= USA =======
  { slug: 'new-york', slugAr: 'نيويورك', nameEn: 'New York', nameAr: 'نيويورك', countrySlug: 'united-states', lat: 40.7128, lng: -74.0060 },
  { slug: 'los-angeles', slugAr: 'لوس-انجلوس', nameEn: 'Los Angeles', nameAr: 'لوس أنجلوس', countrySlug: 'united-states', lat: 34.0522, lng: -118.2437 },
  { slug: 'chicago', slugAr: 'شيكاغو', nameEn: 'Chicago', nameAr: 'شيكاغو', countrySlug: 'united-states', lat: 41.8781, lng: -87.6298 },
  { slug: 'houston', slugAr: 'هيوستن', nameEn: 'Houston', nameAr: 'هيوستن', countrySlug: 'united-states', lat: 29.7604, lng: -95.3698 },
  { slug: 'dearborn', slugAr: 'ديربورن', nameEn: 'Dearborn', nameAr: 'ديربورن', countrySlug: 'united-states', lat: 42.3223, lng: -83.1763 },
  { slug: 'dallas', slugAr: 'دالاس', nameEn: 'Dallas', nameAr: 'دالاس', countrySlug: 'united-states', lat: 32.7767, lng: -96.7970 },
  { slug: 'san-francisco', slugAr: 'سان-فرانسيسكو', nameEn: 'San Francisco', nameAr: 'سان فرانسيسكو', countrySlug: 'united-states', lat: 37.7749, lng: -122.4194 },
  { slug: 'washington-dc', slugAr: 'واشنطن', nameEn: 'Washington DC', nameAr: 'واشنطن', countrySlug: 'united-states', lat: 38.9072, lng: -77.0369 },

  // ======= CANADA =======
  { slug: 'toronto', slugAr: 'تورنتو', nameEn: 'Toronto', nameAr: 'تورنتو', countrySlug: 'canada', lat: 43.6532, lng: -79.3832 },
  { slug: 'montreal', slugAr: 'مونتريال', nameEn: 'Montreal', nameAr: 'مونتريال', countrySlug: 'canada', lat: 45.5017, lng: -73.5673 },
  { slug: 'vancouver', slugAr: 'فانكوفر', nameEn: 'Vancouver', nameAr: 'فانكوفر', countrySlug: 'canada', lat: 49.2827, lng: -123.1207 },
  { slug: 'ottawa', slugAr: 'اوتاوا', nameEn: 'Ottawa', nameAr: 'أوتاوا', countrySlug: 'canada', lat: 45.4215, lng: -75.6972 },
  { slug: 'calgary', slugAr: 'كالغاري', nameEn: 'Calgary', nameAr: 'كالغاري', countrySlug: 'canada', lat: 51.0447, lng: -114.0719 },

  // ======= BRAZIL =======
  { slug: 'sao-paulo', slugAr: 'ساو-باولو', nameEn: 'São Paulo', nameAr: 'ساو باولو', countrySlug: 'brazil', lat: -23.5505, lng: -46.6333 },
  { slug: 'rio-de-janeiro', slugAr: 'ريو-دي-جانيرو', nameEn: 'Rio de Janeiro', nameAr: 'ريو دي جانيرو', countrySlug: 'brazil', lat: -22.9068, lng: -43.1729 },

  // ======= ARGENTINA =======
  { slug: 'buenos-aires', slugAr: 'بوينس-ايرس', nameEn: 'Buenos Aires', nameAr: 'بوينس آيرس', countrySlug: 'argentina', lat: -34.6037, lng: -58.3816 },

  // ======= UZBEKISTAN =======
  { slug: 'tashkent', slugAr: 'طشقند', nameEn: 'Tashkent', nameAr: 'طشقند', countrySlug: 'uzbekistan', lat: 41.2995, lng: 69.2401 },
  { slug: 'samarkand', slugAr: 'سمرقند', nameEn: 'Samarkand', nameAr: 'سمرقند', countrySlug: 'uzbekistan', lat: 39.6542, lng: 66.9597 },
  { slug: 'bukhara', slugAr: 'بخارى', nameEn: 'Bukhara', nameAr: 'بخارى', countrySlug: 'uzbekistan', lat: 39.7681, lng: 64.4556 },

  // ======= KAZAKHSTAN =======
  { slug: 'almaty', slugAr: 'الماتي', nameEn: 'Almaty', nameAr: 'ألماتي', countrySlug: 'kazakhstan', lat: 43.2220, lng: 76.8512 },
  { slug: 'astana', slugAr: 'استانا', nameEn: 'Astana', nameAr: 'أستانا', countrySlug: 'kazakhstan', lat: 51.1694, lng: 71.4491 },

  // ======= AUSTRALIA =======
  { slug: 'sydney', slugAr: 'سيدني', nameEn: 'Sydney', nameAr: 'سيدني', countrySlug: 'australia', lat: -33.8688, lng: 151.2093 },
  { slug: 'melbourne', slugAr: 'ملبورن', nameEn: 'Melbourne', nameAr: 'ملبورن', countrySlug: 'australia', lat: -37.8136, lng: 144.9631 },
  { slug: 'perth', slugAr: 'بيرث', nameEn: 'Perth', nameAr: 'بيرث', countrySlug: 'australia', lat: -31.9505, lng: 115.8605 },
  { slug: 'brisbane', slugAr: 'بريسبان', nameEn: 'Brisbane', nameAr: 'بريسبان', countrySlug: 'australia', lat: -27.4698, lng: 153.0251 },

  // ======= RUSSIA =======
  { slug: 'moscow', slugAr: 'موسكو', nameEn: 'Moscow', nameAr: 'موسكو', countrySlug: 'russia', lat: 55.7558, lng: 37.6173 },
  { slug: 'kazan', slugAr: 'قازان', nameEn: 'Kazan', nameAr: 'قازان', countrySlug: 'russia', lat: 55.8304, lng: 49.0661 },
  { slug: 'grozny', slugAr: 'غروزني', nameEn: 'Grozny', nameAr: 'غروزني', countrySlug: 'russia', lat: 43.3178, lng: 45.6947 },

  // ======= CHINA =======
  { slug: 'beijing', slugAr: 'بكين', nameEn: 'Beijing', nameAr: 'بكين', countrySlug: 'china', lat: 39.9042, lng: 116.4074 },
  { slug: 'guangzhou', slugAr: 'غوانزو', nameEn: 'Guangzhou', nameAr: 'غوانزو', countrySlug: 'china', lat: 23.1291, lng: 113.2644 },
  { slug: 'urumqi', slugAr: 'اورومتشي', nameEn: 'Urumqi', nameAr: 'أورومتشي', countrySlug: 'china', lat: 43.8256, lng: 87.6168 },

  // ======= MEXICO =======
  { slug: 'mexico-city', slugAr: 'مكسيكو-سيتي', nameEn: 'Mexico City', nameAr: 'مكسيكو سيتي', countrySlug: 'mexico', lat: 19.4326, lng: -99.1332 },

  // ======= SINGAPORE =======
  { slug: 'singapore-city', slugAr: 'سنغافورة', nameEn: 'Singapore', nameAr: 'سنغافورة', countrySlug: 'singapore', lat: 1.3521, lng: 103.8198 },

  // ======= JAPAN =======
  { slug: 'tokyo', slugAr: 'طوكيو', nameEn: 'Tokyo', nameAr: 'طوكيو', countrySlug: 'japan', lat: 35.6762, lng: 139.6503 },
  { slug: 'osaka', slugAr: 'اوساكا', nameEn: 'Osaka', nameAr: 'أوساكا', countrySlug: 'japan', lat: 34.6937, lng: 135.5023 },

  // ======= NEW ZEALAND =======
  { slug: 'auckland', slugAr: 'اوكلاند', nameEn: 'Auckland', nameAr: 'أوكلاند', countrySlug: 'new-zealand', lat: -36.8485, lng: 174.7633 },

  // ======= ALBANIA =======
  { slug: 'tirana', slugAr: 'تيرانا', nameEn: 'Tirana', nameAr: 'تيرانا', countrySlug: 'albania', lat: 41.3275, lng: 19.8187 },

  // ======= AZERBAIJAN =======
  { slug: 'baku', slugAr: 'باكو', nameEn: 'Baku', nameAr: 'باكو', countrySlug: 'azerbaijan', lat: 40.4093, lng: 49.8671 },

  // ======= MALDIVES =======
  { slug: 'male', slugAr: 'ماليه', nameEn: 'Malé', nameAr: 'ماليه', countrySlug: 'maldives', lat: 4.1755, lng: 73.5093 },

  // ======= MAURITANIA =======
  { slug: 'nouakchott', slugAr: 'نواكشوط', nameEn: 'Nouakchott', nameAr: 'نواكشوط', countrySlug: 'mauritania', lat: 18.0735, lng: -15.9582 },

  // ======= PHILIPPINES =======
  { slug: 'manila', slugAr: 'مانيلا', nameEn: 'Manila', nameAr: 'مانيلا', countrySlug: 'philippines', lat: 14.5995, lng: 120.9842 },
  { slug: 'zamboanga', slugAr: 'زامبوانغا', nameEn: 'Zamboanga', nameAr: 'زامبوانغا', countrySlug: 'philippines', lat: 6.9214, lng: 122.0790 },

  // ======= THAILAND =======
  { slug: 'bangkok', slugAr: 'بانكوك', nameEn: 'Bangkok', nameAr: 'بانكوك', countrySlug: 'thailand', lat: 13.7563, lng: 100.5018 },

  // ======= GREECE =======
  { slug: 'athens', slugAr: 'اثينا', nameEn: 'Athens', nameAr: 'أثينا', countrySlug: 'greece', lat: 37.9838, lng: 23.7275 },

  // ======= BRUNEI =======
  { slug: 'bandar-seri-begawan', slugAr: 'بندر-سري-بيغاوان', nameEn: 'Bandar Seri Begawan', nameAr: 'بندر سري بيغاوان', countrySlug: 'brunei', lat: 4.9031, lng: 114.9398 },
];

export function getCountryBySlug(slug: string): CountryData | undefined {
  return countries.find(c => c.slug === slug);
}

export function getCitiesByCountry(countrySlug: string): GlobalCityData[] {
  return globalCities.filter(c => c.countrySlug === countrySlug);
}

export function getGlobalCityBySlug(countrySlug: string, citySlug: string): GlobalCityData | undefined {
  return globalCities.find(c => c.countrySlug === countrySlug && c.slug === citySlug);
}

export function getPopularCities(): GlobalCityData[] {
  const popular = ['makkah', 'madinah', 'riyadh', 'jeddah', 'dubai', 'cairo', 'istanbul', 'london', 'doha', 'kuwait-city', 'amman', 'jerusalem', 'jakarta', 'kuala-lumpur', 'karachi', 'casablanca', 'paris', 'new-york', 'toronto', 'berlin'];
  return popular.map(s => globalCities.find(c => c.slug === s)!).filter(Boolean);
}
