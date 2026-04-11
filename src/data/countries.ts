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

  // ======= MORE EGYPT =======
  { slug: 'ismailia', slugAr: 'الاسماعيلية', nameEn: 'Ismailia', nameAr: 'الإسماعيلية', countrySlug: 'egypt', lat: 30.5965, lng: 32.2715 },
  { slug: 'zagazig', slugAr: 'الزقازيق', nameEn: 'Zagazig', nameAr: 'الزقازيق', countrySlug: 'egypt', lat: 30.5877, lng: 31.5020 },
  { slug: 'minya', slugAr: 'المنيا', nameEn: 'Minya', nameAr: 'المنيا', countrySlug: 'egypt', lat: 28.1099, lng: 30.7503 },
  { slug: 'asyut', slugAr: 'اسيوط', nameEn: 'Asyut', nameAr: 'أسيوط', countrySlug: 'egypt', lat: 27.1783, lng: 31.1859 },
  { slug: 'faiyum', slugAr: 'الفيوم', nameEn: 'Faiyum', nameAr: 'الفيوم', countrySlug: 'egypt', lat: 29.3084, lng: 30.8441 },
  { slug: 'beni-suef', slugAr: 'بني-سويف', nameEn: 'Beni Suef', nameAr: 'بني سويف', countrySlug: 'egypt', lat: 29.0661, lng: 31.0994 },
  { slug: 'sohag', slugAr: 'سوهاج', nameEn: 'Sohag', nameAr: 'سوهاج', countrySlug: 'egypt', lat: 26.5591, lng: 31.6948 },
  { slug: 'qena', slugAr: 'قنا', nameEn: 'Qena', nameAr: 'قنا', countrySlug: 'egypt', lat: 26.1551, lng: 32.7160 },
  { slug: 'damanhur', slugAr: 'دمنهور', nameEn: 'Damanhur', nameAr: 'دمنهور', countrySlug: 'egypt', lat: 31.0409, lng: 30.4714 },
  { slug: 'hurghada', slugAr: 'الغردقة', nameEn: 'Hurghada', nameAr: 'الغردقة', countrySlug: 'egypt', lat: 27.2579, lng: 33.8116 },

  // ======= MORE JORDAN =======
  { slug: 'mafraq', slugAr: 'المفرق', nameEn: 'Mafraq', nameAr: 'المفرق', countrySlug: 'jordan', lat: 32.3422, lng: 36.2078 },
  { slug: 'madaba', slugAr: 'مادبا', nameEn: 'Madaba', nameAr: 'مادبا', countrySlug: 'jordan', lat: 31.7160, lng: 35.7939 },
  { slug: 'karak', slugAr: 'الكرك', nameEn: 'Karak', nameAr: 'الكرك', countrySlug: 'jordan', lat: 31.1854, lng: 35.7048 },
  { slug: 'ajloun', slugAr: 'عجلون', nameEn: 'Ajloun', nameAr: 'عجلون', countrySlug: 'jordan', lat: 32.3325, lng: 35.7516 },
  { slug: 'jerash', slugAr: 'جرش', nameEn: 'Jerash', nameAr: 'جرش', countrySlug: 'jordan', lat: 32.2747, lng: 35.8961 },
  { slug: 'maan', slugAr: 'معان', nameEn: "Ma'an", nameAr: 'معان', countrySlug: 'jordan', lat: 30.1962, lng: 35.7341 },

  // ======= MORE IRAQ =======
  { slug: 'kirkuk', slugAr: 'كركوك', nameEn: 'Kirkuk', nameAr: 'كركوك', countrySlug: 'iraq', lat: 35.4681, lng: 44.3922 },
  { slug: 'hillah', slugAr: 'الحلة', nameEn: 'Hillah', nameAr: 'الحلة', countrySlug: 'iraq', lat: 32.4637, lng: 44.4199 },
  { slug: 'nasiriyah', slugAr: 'الناصرية', nameEn: 'Nasiriyah', nameAr: 'الناصرية', countrySlug: 'iraq', lat: 31.0439, lng: 46.2581 },
  { slug: 'duhok', slugAr: 'دهوك', nameEn: 'Duhok', nameAr: 'دهوك', countrySlug: 'iraq', lat: 36.8671, lng: 42.9503 },
  { slug: 'ramadi', slugAr: 'الرمادي', nameEn: 'Ramadi', nameAr: 'الرمادي', countrySlug: 'iraq', lat: 33.4258, lng: 43.3119 },
  { slug: 'samarra', slugAr: 'سامراء', nameEn: 'Samarra', nameAr: 'سامراء', countrySlug: 'iraq', lat: 34.1980, lng: 43.8746 },
  { slug: 'tikrit', slugAr: 'تكريت', nameEn: 'Tikrit', nameAr: 'تكريت', countrySlug: 'iraq', lat: 34.6097, lng: 43.6810 },
  { slug: 'kut', slugAr: 'الكوت', nameEn: 'Kut', nameAr: 'الكوت', countrySlug: 'iraq', lat: 32.4929, lng: 45.8317 },

  // ======= MORE SYRIA =======
  { slug: 'hama', slugAr: 'حماة', nameEn: 'Hama', nameAr: 'حماة', countrySlug: 'syria', lat: 35.1318, lng: 36.7514 },
  { slug: 'deir-ez-zor', slugAr: 'دير-الزور', nameEn: 'Deir ez-Zor', nameAr: 'دير الزور', countrySlug: 'syria', lat: 35.3354, lng: 40.1396 },
  { slug: 'raqqa', slugAr: 'الرقة', nameEn: 'Raqqa', nameAr: 'الرقة', countrySlug: 'syria', lat: 35.9594, lng: 39.0100 },
  { slug: 'tartus', slugAr: 'طرطوس', nameEn: 'Tartus', nameAr: 'طرطوس', countrySlug: 'syria', lat: 34.8959, lng: 35.8867 },
  { slug: 'idlib', slugAr: 'ادلب', nameEn: 'Idlib', nameAr: 'إدلب', countrySlug: 'syria', lat: 35.9306, lng: 36.6339 },

  // ======= MORE LEBANON =======
  { slug: 'tyre', slugAr: 'صور', nameEn: 'Tyre', nameAr: 'صور', countrySlug: 'lebanon', lat: 33.2705, lng: 35.1956 },
  { slug: 'baalbek', slugAr: 'بعلبك', nameEn: 'Baalbek', nameAr: 'بعلبك', countrySlug: 'lebanon', lat: 34.0047, lng: 36.2110 },
  { slug: 'jounieh', slugAr: 'جونية', nameEn: 'Jounieh', nameAr: 'جونية', countrySlug: 'lebanon', lat: 33.9806, lng: 35.6178 },
  { slug: 'zahle', slugAr: 'زحلة', nameEn: 'Zahle', nameAr: 'زحلة', countrySlug: 'lebanon', lat: 33.8467, lng: 35.9022 },

  // ======= MORE PALESTINE =======
  { slug: 'bethlehem', slugAr: 'بيت-لحم', nameEn: 'Bethlehem', nameAr: 'بيت لحم', countrySlug: 'palestine', lat: 31.7054, lng: 35.2024 },
  { slug: 'jenin', slugAr: 'جنين', nameEn: 'Jenin', nameAr: 'جنين', countrySlug: 'palestine', lat: 32.4610, lng: 35.2955 },
  { slug: 'tulkarm', slugAr: 'طولكرم', nameEn: 'Tulkarm', nameAr: 'طولكرم', countrySlug: 'palestine', lat: 32.3104, lng: 35.0286 },
  { slug: 'qalqilya', slugAr: 'قلقيلية', nameEn: 'Qalqilya', nameAr: 'قلقيلية', countrySlug: 'palestine', lat: 32.1892, lng: 34.9703 },
  { slug: 'jericho', slugAr: 'اريحا', nameEn: 'Jericho', nameAr: 'أريحا', countrySlug: 'palestine', lat: 31.8611, lng: 35.4628 },

  // ======= MORE YEMEN =======
  { slug: 'ibb', slugAr: 'اب', nameEn: 'Ibb', nameAr: 'إب', countrySlug: 'yemen', lat: 13.9759, lng: 44.1709 },
  { slug: 'dhamar', slugAr: 'ذمار', nameEn: 'Dhamar', nameAr: 'ذمار', countrySlug: 'yemen', lat: 14.5425, lng: 44.4050 },
  { slug: 'mukalla', slugAr: 'المكلا', nameEn: 'Mukalla', nameAr: 'المكلا', countrySlug: 'yemen', lat: 14.5427, lng: 49.1242 },
  { slug: 'sayun', slugAr: 'سيئون', nameEn: 'Sayun', nameAr: 'سيئون', countrySlug: 'yemen', lat: 15.9425, lng: 48.7900 },
  { slug: 'hajjah', slugAr: 'حجة', nameEn: 'Hajjah', nameAr: 'حجة', countrySlug: 'yemen', lat: 15.6914, lng: 43.5975 },
  { slug: 'amran', slugAr: 'عمران', nameEn: 'Amran', nameAr: 'عمران', countrySlug: 'yemen', lat: 15.6594, lng: 43.9436 },

  // ======= MORE MOROCCO =======
  { slug: 'meknes', slugAr: 'مكناس', nameEn: 'Meknes', nameAr: 'مكناس', countrySlug: 'morocco', lat: 33.8731, lng: -5.5407 },
  { slug: 'oujda', slugAr: 'وجدة', nameEn: 'Oujda', nameAr: 'وجدة', countrySlug: 'morocco', lat: 34.6814, lng: -1.9086 },
  { slug: 'kenitra', slugAr: 'القنيطرة', nameEn: 'Kenitra', nameAr: 'القنيطرة', countrySlug: 'morocco', lat: 34.2610, lng: -6.5802 },
  { slug: 'tetouan', slugAr: 'تطوان', nameEn: 'Tetouan', nameAr: 'تطوان', countrySlug: 'morocco', lat: 35.5889, lng: -5.3626 },
  { slug: 'nador', slugAr: 'الناظور', nameEn: 'Nador', nameAr: 'الناظور', countrySlug: 'morocco', lat: 35.1681, lng: -2.9335 },
  { slug: 'safi', slugAr: 'اسفي', nameEn: 'Safi', nameAr: 'آسفي', countrySlug: 'morocco', lat: 32.3008, lng: -9.2272 },
  { slug: 'beni-mellal', slugAr: 'بني-ملال', nameEn: 'Beni Mellal', nameAr: 'بني ملال', countrySlug: 'morocco', lat: 32.3373, lng: -6.3498 },
  { slug: 'el-jadida', slugAr: 'الجديدة', nameEn: 'El Jadida', nameAr: 'الجديدة', countrySlug: 'morocco', lat: 33.2316, lng: -8.5007 },

  // ======= MORE ALGERIA =======
  { slug: 'blida', slugAr: 'البليدة', nameEn: 'Blida', nameAr: 'البليدة', countrySlug: 'algeria', lat: 36.4694, lng: 2.8292 },
  { slug: 'batna', slugAr: 'باتنة', nameEn: 'Batna', nameAr: 'باتنة', countrySlug: 'algeria', lat: 35.5597, lng: 6.1744 },
  { slug: 'djelfa', slugAr: 'الجلفة', nameEn: 'Djelfa', nameAr: 'الجلفة', countrySlug: 'algeria', lat: 34.6704, lng: 3.2500 },
  { slug: 'biskra', slugAr: 'بسكرة', nameEn: 'Biskra', nameAr: 'بسكرة', countrySlug: 'algeria', lat: 34.8449, lng: 5.7283 },
  { slug: 'tlemcen', slugAr: 'تلمسان', nameEn: 'Tlemcen', nameAr: 'تلمسان', countrySlug: 'algeria', lat: 34.8828, lng: -1.3167 },
  { slug: 'bejaia', slugAr: 'بجاية', nameEn: 'Bejaia', nameAr: 'بجاية', countrySlug: 'algeria', lat: 36.7500, lng: 5.0833 },
  { slug: 'tizi-ouzou', slugAr: 'تيزي-وزو', nameEn: 'Tizi Ouzou', nameAr: 'تيزي وزو', countrySlug: 'algeria', lat: 36.7169, lng: 4.0497 },
  { slug: 'skikda', slugAr: 'سكيكدة', nameEn: 'Skikda', nameAr: 'سكيكدة', countrySlug: 'algeria', lat: 36.8764, lng: 6.9064 },

  // ======= MORE TUNISIA =======
  { slug: 'kairouan', slugAr: 'القيروان', nameEn: 'Kairouan', nameAr: 'القيروان', countrySlug: 'tunisia', lat: 35.6781, lng: 10.0963 },
  { slug: 'bizerte', slugAr: 'بنزرت', nameEn: 'Bizerte', nameAr: 'بنزرت', countrySlug: 'tunisia', lat: 37.2744, lng: 9.8739 },
  { slug: 'gabes', slugAr: 'قابس', nameEn: 'Gabes', nameAr: 'قابس', countrySlug: 'tunisia', lat: 33.8815, lng: 10.0982 },
  { slug: 'monastir', slugAr: 'المنستير', nameEn: 'Monastir', nameAr: 'المنستير', countrySlug: 'tunisia', lat: 35.7643, lng: 10.8113 },
  { slug: 'nabeul', slugAr: 'نابل', nameEn: 'Nabeul', nameAr: 'نابل', countrySlug: 'tunisia', lat: 36.4561, lng: 10.7376 },

  // ======= MORE LIBYA =======
  { slug: 'sebha', slugAr: 'سبها', nameEn: 'Sebha', nameAr: 'سبها', countrySlug: 'libya', lat: 27.0377, lng: 14.4283 },
  { slug: 'zawiya', slugAr: 'الزاوية', nameEn: 'Zawiya', nameAr: 'الزاوية', countrySlug: 'libya', lat: 32.7522, lng: 12.7278 },
  { slug: 'zliten', slugAr: 'زليتن', nameEn: 'Zliten', nameAr: 'زليتن', countrySlug: 'libya', lat: 32.4674, lng: 14.5687 },
  { slug: 'tobruk', slugAr: 'طبرق', nameEn: 'Tobruk', nameAr: 'طبرق', countrySlug: 'libya', lat: 32.0836, lng: 23.9764 },

  // ======= MORE SUDAN =======
  { slug: 'kassala', slugAr: 'كسلا', nameEn: 'Kassala', nameAr: 'كسلا', countrySlug: 'sudan', lat: 15.4516, lng: 36.4000 },
  { slug: 'al-obeid', slugAr: 'الابيض', nameEn: 'Al Obeid', nameAr: 'الأبيض', countrySlug: 'sudan', lat: 13.1833, lng: 30.2167 },
  { slug: 'wad-madani', slugAr: 'ود-مدني', nameEn: 'Wad Madani', nameAr: 'ود مدني', countrySlug: 'sudan', lat: 14.4012, lng: 33.5199 },
  { slug: 'nyala', slugAr: 'نيالا', nameEn: 'Nyala', nameAr: 'نيالا', countrySlug: 'sudan', lat: 12.0489, lng: 24.8816 },
  { slug: 'el-fasher', slugAr: 'الفاشر', nameEn: 'El Fasher', nameAr: 'الفاشر', countrySlug: 'sudan', lat: 13.6292, lng: 25.3489 },

  // ======= MORE PAKISTAN =======
  { slug: 'hyderabad-pk', slugAr: 'حيدر-اباد-باكستان', nameEn: 'Hyderabad', nameAr: 'حيدر آباد', countrySlug: 'pakistan', lat: 25.3960, lng: 68.3578 },
  { slug: 'gujranwala', slugAr: 'غوجرانوالا', nameEn: 'Gujranwala', nameAr: 'غوجرانوالا', countrySlug: 'pakistan', lat: 32.1877, lng: 74.1945 },
  { slug: 'sialkot', slugAr: 'سيالكوت', nameEn: 'Sialkot', nameAr: 'سيالكوت', countrySlug: 'pakistan', lat: 32.4945, lng: 74.5229 },
  { slug: 'bahawalpur', slugAr: 'بهاوالبور', nameEn: 'Bahawalpur', nameAr: 'بهاوالبور', countrySlug: 'pakistan', lat: 29.3544, lng: 71.6911 },
  { slug: 'sargodha', slugAr: 'سرغودها', nameEn: 'Sargodha', nameAr: 'سرغودها', countrySlug: 'pakistan', lat: 32.0836, lng: 72.6711 },
  { slug: 'sukkur', slugAr: 'سكر', nameEn: 'Sukkur', nameAr: 'سكر', countrySlug: 'pakistan', lat: 27.7052, lng: 68.8574 },
  { slug: 'larkana', slugAr: 'لاركانا', nameEn: 'Larkana', nameAr: 'لاركانا', countrySlug: 'pakistan', lat: 27.5570, lng: 68.2141 },
  { slug: 'mardan', slugAr: 'ماردان', nameEn: 'Mardan', nameAr: 'ماردان', countrySlug: 'pakistan', lat: 34.1989, lng: 72.0489 },
  { slug: 'mingora', slugAr: 'مينغورا', nameEn: 'Mingora', nameAr: 'مينغورا', countrySlug: 'pakistan', lat: 34.7717, lng: 72.3600 },
  { slug: 'dera-ghazi-khan', slugAr: 'ديرة-غازي-خان', nameEn: 'Dera Ghazi Khan', nameAr: 'ديرة غازي خان', countrySlug: 'pakistan', lat: 30.0489, lng: 70.6400 },
  { slug: 'sahiwal', slugAr: 'ساهيوال', nameEn: 'Sahiwal', nameAr: 'ساهيوال', countrySlug: 'pakistan', lat: 30.6682, lng: 73.1114 },
  { slug: 'okara', slugAr: 'اوكارا', nameEn: 'Okara', nameAr: 'أوكارا', countrySlug: 'pakistan', lat: 30.8081, lng: 73.4597 },

  // ======= MORE INDIA =======
  { slug: 'jaipur', slugAr: 'جايبور', nameEn: 'Jaipur', nameAr: 'جايبور', countrySlug: 'india', lat: 26.9124, lng: 75.7873 },
  { slug: 'pune', slugAr: 'بونة', nameEn: 'Pune', nameAr: 'بونة', countrySlug: 'india', lat: 18.5204, lng: 73.8567 },
  { slug: 'surat', slugAr: 'سورات', nameEn: 'Surat', nameAr: 'سورات', countrySlug: 'india', lat: 21.1702, lng: 72.8311 },
  { slug: 'nagpur', slugAr: 'ناغبور', nameEn: 'Nagpur', nameAr: 'ناغبور', countrySlug: 'india', lat: 21.1458, lng: 79.0882 },
  { slug: 'patna', slugAr: 'باتنا', nameEn: 'Patna', nameAr: 'باتنا', countrySlug: 'india', lat: 25.6093, lng: 85.1376 },
  { slug: 'bhopal', slugAr: 'بوبال', nameEn: 'Bhopal', nameAr: 'بوبال', countrySlug: 'india', lat: 23.2599, lng: 77.4126 },
  { slug: 'indore', slugAr: 'اندور', nameEn: 'Indore', nameAr: 'إندور', countrySlug: 'india', lat: 22.7196, lng: 75.8577 },
  { slug: 'kanpur', slugAr: 'كانبور', nameEn: 'Kanpur', nameAr: 'كانبور', countrySlug: 'india', lat: 26.4499, lng: 80.3319 },
  { slug: 'varanasi', slugAr: 'فاراناسي', nameEn: 'Varanasi', nameAr: 'فاراناسي', countrySlug: 'india', lat: 25.3176, lng: 82.9739 },
  { slug: 'aligarh', slugAr: 'عليكره', nameEn: 'Aligarh', nameAr: 'عليكره', countrySlug: 'india', lat: 27.8974, lng: 78.0880 },
  { slug: 'kozhikode', slugAr: 'كوزيكود', nameEn: 'Kozhikode', nameAr: 'كوزيكود', countrySlug: 'india', lat: 11.2588, lng: 75.7804 },
  { slug: 'coimbatore', slugAr: 'كويمباتور', nameEn: 'Coimbatore', nameAr: 'كويمباتور', countrySlug: 'india', lat: 11.0168, lng: 76.9558 },
  { slug: 'kochi', slugAr: 'كوتشي', nameEn: 'Kochi', nameAr: 'كوتشي', countrySlug: 'india', lat: 9.9312, lng: 76.2673 },
  { slug: 'agra', slugAr: 'اغرا', nameEn: 'Agra', nameAr: 'أغرا', countrySlug: 'india', lat: 27.1767, lng: 78.0081 },

  // ======= MORE BANGLADESH =======
  { slug: 'khulna', slugAr: 'خولنا', nameEn: 'Khulna', nameAr: 'خولنا', countrySlug: 'bangladesh', lat: 22.8456, lng: 89.5403 },
  { slug: 'rangpur', slugAr: 'رانغبور', nameEn: 'Rangpur', nameAr: 'رانغبور', countrySlug: 'bangladesh', lat: 25.7439, lng: 89.2752 },
  { slug: 'barisal', slugAr: 'باريسال', nameEn: 'Barisal', nameAr: 'باريسال', countrySlug: 'bangladesh', lat: 22.7010, lng: 90.3535 },
  { slug: 'comilla', slugAr: 'كوميلا', nameEn: 'Comilla', nameAr: 'كوميلا', countrySlug: 'bangladesh', lat: 23.4607, lng: 91.1809 },
  { slug: 'mymensingh', slugAr: 'ماي-مينسينغ', nameEn: 'Mymensingh', nameAr: 'ماي مينسينغ', countrySlug: 'bangladesh', lat: 24.7471, lng: 90.4203 },
  { slug: 'gazipur', slugAr: 'غازيبور', nameEn: 'Gazipur', nameAr: 'غازيبور', countrySlug: 'bangladesh', lat: 23.9999, lng: 90.4203 },

  // ======= MORE AFGHANISTAN =======
  { slug: 'kandahar', slugAr: 'قندهار', nameEn: 'Kandahar', nameAr: 'قندهار', countrySlug: 'afghanistan', lat: 31.6133, lng: 65.7101 },
  { slug: 'jalalabad', slugAr: 'جلال-اباد', nameEn: 'Jalalabad', nameAr: 'جلال آباد', countrySlug: 'afghanistan', lat: 34.4312, lng: 70.4478 },
  { slug: 'kunduz', slugAr: 'قندوز', nameEn: 'Kunduz', nameAr: 'قندوز', countrySlug: 'afghanistan', lat: 36.7280, lng: 68.8680 },
  { slug: 'balkh', slugAr: 'بلخ', nameEn: 'Balkh', nameAr: 'بلخ', countrySlug: 'afghanistan', lat: 36.7583, lng: 66.8972 },
  { slug: 'ghazni', slugAr: 'غزني', nameEn: 'Ghazni', nameAr: 'غزني', countrySlug: 'afghanistan', lat: 33.5536, lng: 68.4269 },

  // ======= MORE SRI LANKA =======
  { slug: 'kandy', slugAr: 'كاندي', nameEn: 'Kandy', nameAr: 'كاندي', countrySlug: 'sri-lanka', lat: 7.2906, lng: 80.6337 },
  { slug: 'galle', slugAr: 'غالي', nameEn: 'Galle', nameAr: 'غالي', countrySlug: 'sri-lanka', lat: 6.0535, lng: 80.2210 },
  { slug: 'batticaloa', slugAr: 'باتيكالوا', nameEn: 'Batticaloa', nameAr: 'باتيكالوا', countrySlug: 'sri-lanka', lat: 7.7310, lng: 81.6924 },

  // ======= MORE INDONESIA =======
  { slug: 'makassar', slugAr: 'ماكاسار', nameEn: 'Makassar', nameAr: 'ماكاسار', countrySlug: 'indonesia', lat: -5.1477, lng: 119.4327 },
  { slug: 'palembang', slugAr: 'باليمبانغ', nameEn: 'Palembang', nameAr: 'باليمبانغ', countrySlug: 'indonesia', lat: -2.9761, lng: 104.7754 },
  { slug: 'denpasar', slugAr: 'دينباسار', nameEn: 'Denpasar', nameAr: 'دينباسار', countrySlug: 'indonesia', lat: -8.6705, lng: 115.2126 },
  { slug: 'padang', slugAr: 'بادانغ', nameEn: 'Padang', nameAr: 'بادانغ', countrySlug: 'indonesia', lat: -0.9471, lng: 100.4172 },
  { slug: 'pekanbaru', slugAr: 'بيكانبارو', nameEn: 'Pekanbaru', nameAr: 'بيكانبارو', countrySlug: 'indonesia', lat: 0.5071, lng: 101.4478 },
  { slug: 'banjarmasin', slugAr: 'بنجرماسين', nameEn: 'Banjarmasin', nameAr: 'بنجرماسين', countrySlug: 'indonesia', lat: -3.3186, lng: 114.5944 },
  { slug: 'balikpapan', slugAr: 'باليكبابان', nameEn: 'Balikpapan', nameAr: 'باليكبابان', countrySlug: 'indonesia', lat: -1.2654, lng: 116.8312 },
  { slug: 'pontianak', slugAr: 'بونتياناك', nameEn: 'Pontianak', nameAr: 'بونتياناك', countrySlug: 'indonesia', lat: -0.0263, lng: 109.3425 },
  { slug: 'manado', slugAr: 'مانادو', nameEn: 'Manado', nameAr: 'مانادو', countrySlug: 'indonesia', lat: 1.4748, lng: 124.8421 },
  { slug: 'aceh', slugAr: 'اتشيه', nameEn: 'Banda Aceh', nameAr: 'بندا آتشيه', countrySlug: 'indonesia', lat: 5.5483, lng: 95.3238 },

  // ======= MORE MALAYSIA =======
  { slug: 'ipoh', slugAr: 'ايبوه', nameEn: 'Ipoh', nameAr: 'إيبوه', countrySlug: 'malaysia', lat: 4.5975, lng: 101.0901 },
  { slug: 'kuching', slugAr: 'كوتشينغ', nameEn: 'Kuching', nameAr: 'كوتشينغ', countrySlug: 'malaysia', lat: 1.5497, lng: 110.3634 },
  { slug: 'melaka', slugAr: 'ملقا', nameEn: 'Melaka', nameAr: 'ملقا', countrySlug: 'malaysia', lat: 2.1896, lng: 102.2501 },
  { slug: 'shah-alam', slugAr: 'شاه-علم', nameEn: 'Shah Alam', nameAr: 'شاه علم', countrySlug: 'malaysia', lat: 3.0738, lng: 101.5183 },
  { slug: 'kuantan', slugAr: 'كوانتان', nameEn: 'Kuantan', nameAr: 'كوانتان', countrySlug: 'malaysia', lat: 3.8077, lng: 103.3260 },
  { slug: 'alor-setar', slugAr: 'الور-ستار', nameEn: 'Alor Setar', nameAr: 'ألور ستار', countrySlug: 'malaysia', lat: 6.1248, lng: 100.3682 },

  // ======= MORE TURKEY =======
  { slug: 'adana', slugAr: 'ادنة', nameEn: 'Adana', nameAr: 'أدنة', countrySlug: 'turkey', lat: 37.0000, lng: 35.3213 },
  { slug: 'gaziantep', slugAr: 'غازي-عنتاب', nameEn: 'Gaziantep', nameAr: 'غازي عنتاب', countrySlug: 'turkey', lat: 37.0662, lng: 37.3833 },
  { slug: 'mersin', slugAr: 'مرسين', nameEn: 'Mersin', nameAr: 'مرسين', countrySlug: 'turkey', lat: 36.8121, lng: 34.6415 },
  { slug: 'kayseri', slugAr: 'قيصرية', nameEn: 'Kayseri', nameAr: 'قيصرية', countrySlug: 'turkey', lat: 38.7312, lng: 35.4787 },
  { slug: 'diyarbakir', slugAr: 'ديار-بكر', nameEn: 'Diyarbakir', nameAr: 'ديار بكر', countrySlug: 'turkey', lat: 37.9250, lng: 40.2110 },
  { slug: 'eskisehir', slugAr: 'اسكي-شهر', nameEn: 'Eskisehir', nameAr: 'إسكي شهر', countrySlug: 'turkey', lat: 39.7767, lng: 30.5206 },
  { slug: 'trabzon', slugAr: 'طرابزون', nameEn: 'Trabzon', nameAr: 'طرابزون', countrySlug: 'turkey', lat: 41.0027, lng: 39.7168 },
  { slug: 'samsun', slugAr: 'سامسون', nameEn: 'Samsun', nameAr: 'سامسون', countrySlug: 'turkey', lat: 41.2867, lng: 36.3300 },
  { slug: 'malatya', slugAr: 'ملاطية', nameEn: 'Malatya', nameAr: 'ملاطية', countrySlug: 'turkey', lat: 38.3554, lng: 38.3335 },
  { slug: 'sanliurfa', slugAr: 'شانلي-اورفا', nameEn: 'Sanliurfa', nameAr: 'شانلي أورفا', countrySlug: 'turkey', lat: 37.1674, lng: 38.7955 },

  // ======= MORE IRAN =======
  { slug: 'ahvaz', slugAr: 'الاهواز', nameEn: 'Ahvaz', nameAr: 'الأهواز', countrySlug: 'iran', lat: 31.3183, lng: 48.6706 },
  { slug: 'qom', slugAr: 'قم', nameEn: 'Qom', nameAr: 'قم', countrySlug: 'iran', lat: 34.6401, lng: 50.8764 },
  { slug: 'kermanshah', slugAr: 'كرمانشاه', nameEn: 'Kermanshah', nameAr: 'كرمانشاه', countrySlug: 'iran', lat: 34.3142, lng: 47.0650 },
  { slug: 'rasht', slugAr: 'رشت', nameEn: 'Rasht', nameAr: 'رشت', countrySlug: 'iran', lat: 37.2808, lng: 49.5832 },
  { slug: 'zahedan', slugAr: 'زاهدان', nameEn: 'Zahedan', nameAr: 'زاهدان', countrySlug: 'iran', lat: 29.4963, lng: 60.8629 },
  { slug: 'hamadan', slugAr: 'همدان', nameEn: 'Hamadan', nameAr: 'همدان', countrySlug: 'iran', lat: 34.7988, lng: 48.5146 },
  { slug: 'yazd', slugAr: 'يزد', nameEn: 'Yazd', nameAr: 'يزد', countrySlug: 'iran', lat: 31.8974, lng: 54.3569 },
  { slug: 'kerman', slugAr: 'كرمان', nameEn: 'Kerman', nameAr: 'كرمان', countrySlug: 'iran', lat: 30.2839, lng: 57.0834 },

  // ======= MORE NIGERIA =======
  { slug: 'port-harcourt', slugAr: 'بورت-هاركورت', nameEn: 'Port Harcourt', nameAr: 'بورت هاركورت', countrySlug: 'nigeria', lat: 4.8156, lng: 7.0498 },
  { slug: 'kaduna', slugAr: 'كادونا', nameEn: 'Kaduna', nameAr: 'كادونا', countrySlug: 'nigeria', lat: 10.5264, lng: 7.4388 },
  { slug: 'maiduguri', slugAr: 'مايدوغوري', nameEn: 'Maiduguri', nameAr: 'مايدوغوري', countrySlug: 'nigeria', lat: 11.8311, lng: 13.1510 },
  { slug: 'sokoto', slugAr: 'سوكوتو', nameEn: 'Sokoto', nameAr: 'سوكوتو', countrySlug: 'nigeria', lat: 13.0607, lng: 5.2476 },
  { slug: 'zaria', slugAr: 'زاريا', nameEn: 'Zaria', nameAr: 'زاريا', countrySlug: 'nigeria', lat: 11.0855, lng: 7.7199 },
  { slug: 'bauchi', slugAr: 'باوتشي', nameEn: 'Bauchi', nameAr: 'باوتشي', countrySlug: 'nigeria', lat: 10.3158, lng: 9.8442 },

  // ======= MORE SOMALIA =======
  { slug: 'bosaso', slugAr: 'بوصاصو', nameEn: 'Bosaso', nameAr: 'بوصاصو', countrySlug: 'somalia', lat: 11.2841, lng: 49.1828 },
  { slug: 'kismayo', slugAr: 'كسمايو', nameEn: 'Kismayo', nameAr: 'كسمايو', countrySlug: 'somalia', lat: -0.3522, lng: 42.5428 },
  { slug: 'beledweyne', slugAr: 'بلدوين', nameEn: 'Beledweyne', nameAr: 'بلدوين', countrySlug: 'somalia', lat: 4.7358, lng: 45.2036 },
  { slug: 'garowe', slugAr: 'غاروي', nameEn: 'Garowe', nameAr: 'غاروي', countrySlug: 'somalia', lat: 8.4054, lng: 48.4890 },

  // ======= MORE SENEGAL =======
  { slug: 'touba', slugAr: 'طوبى', nameEn: 'Touba', nameAr: 'طوبى', countrySlug: 'senegal', lat: 14.8500, lng: -15.8833 },
  { slug: 'saint-louis', slugAr: 'سان-لويس', nameEn: 'Saint-Louis', nameAr: 'سان لويس', countrySlug: 'senegal', lat: 16.0326, lng: -16.4818 },
  { slug: 'thies', slugAr: 'تييس', nameEn: 'Thiès', nameAr: 'تييس', countrySlug: 'senegal', lat: 14.7910, lng: -16.9263 },

  // ======= MORE ETHIOPIA =======
  { slug: 'dire-dawa', slugAr: 'دير-داوا', nameEn: 'Dire Dawa', nameAr: 'دير داوا', countrySlug: 'ethiopia', lat: 9.6009, lng: 41.8503 },
  { slug: 'harar', slugAr: 'هرر', nameEn: 'Harar', nameAr: 'هرر', countrySlug: 'ethiopia', lat: 9.3100, lng: 42.1200 },
  { slug: 'jimma', slugAr: 'جيما', nameEn: 'Jimma', nameAr: 'جيما', countrySlug: 'ethiopia', lat: 7.6667, lng: 36.8333 },

  // ======= MORE TANZANIA =======
  { slug: 'dodoma', slugAr: 'دودوما', nameEn: 'Dodoma', nameAr: 'دودوما', countrySlug: 'tanzania', lat: -6.1630, lng: 35.7516 },
  { slug: 'zanzibar', slugAr: 'زنجبار', nameEn: 'Zanzibar', nameAr: 'زنجبار', countrySlug: 'tanzania', lat: -6.1659, lng: 39.2026 },
  { slug: 'mwanza', slugAr: 'موانزا', nameEn: 'Mwanza', nameAr: 'موانزا', countrySlug: 'tanzania', lat: -2.5167, lng: 32.9000 },

  // ======= MORE KENYA =======
  { slug: 'lamu', slugAr: 'لامو', nameEn: 'Lamu', nameAr: 'لامو', countrySlug: 'kenya', lat: -2.2717, lng: 40.9020 },
  { slug: 'malindi', slugAr: 'ماليندي', nameEn: 'Malindi', nameAr: 'ماليندي', countrySlug: 'kenya', lat: -3.2138, lng: 40.1169 },
  { slug: 'garissa', slugAr: 'غاريسا', nameEn: 'Garissa', nameAr: 'غاريسا', countrySlug: 'kenya', lat: -0.4532, lng: 39.6461 },
  { slug: 'nakuru', slugAr: 'ناكورو', nameEn: 'Nakuru', nameAr: 'ناكورو', countrySlug: 'kenya', lat: -0.3031, lng: 36.0800 },

  // ======= MORE SOUTH AFRICA =======
  { slug: 'pretoria', slugAr: 'بريتوريا', nameEn: 'Pretoria', nameAr: 'بريتوريا', countrySlug: 'south-africa', lat: -25.7479, lng: 28.2293 },
  { slug: 'port-elizabeth', slugAr: 'بورت-اليزابيث', nameEn: 'Port Elizabeth', nameAr: 'بورت إليزابيث', countrySlug: 'south-africa', lat: -33.9608, lng: 25.6022 },

  // ======= MORE GHANA =======
  { slug: 'accra', slugAr: 'اكرا', nameEn: 'Accra', nameAr: 'أكرا', countrySlug: 'ghana', lat: 5.6037, lng: -0.1870 },
  { slug: 'kumasi', slugAr: 'كوماسي', nameEn: 'Kumasi', nameAr: 'كوماسي', countrySlug: 'ghana', lat: 6.6885, lng: -1.6244 },
  { slug: 'tamale', slugAr: 'تاماليه', nameEn: 'Tamale', nameAr: 'تاماليه', countrySlug: 'ghana', lat: 9.4034, lng: -0.8393 },

  // ======= MALI =======
  { slug: 'bamako', slugAr: 'باماكو', nameEn: 'Bamako', nameAr: 'باماكو', countrySlug: 'mali', lat: 12.6392, lng: -8.0029 },
  { slug: 'timbuktu', slugAr: 'تمبكتو', nameEn: 'Timbuktu', nameAr: 'تمبكتو', countrySlug: 'mali', lat: 16.7665, lng: -3.0026 },

  // ======= NIGER =======
  { slug: 'niamey', slugAr: 'نيامي', nameEn: 'Niamey', nameAr: 'نيامي', countrySlug: 'niger', lat: 13.5117, lng: 2.1251 },
  { slug: 'zinder', slugAr: 'زيندر', nameEn: 'Zinder', nameAr: 'زيندر', countrySlug: 'niger', lat: 13.8072, lng: 8.9881 },

  // ======= CAMEROON =======
  { slug: 'douala', slugAr: 'دوالا', nameEn: 'Douala', nameAr: 'دوالا', countrySlug: 'cameroon', lat: 4.0511, lng: 9.7679 },
  { slug: 'yaounde', slugAr: 'ياوندي', nameEn: 'Yaoundé', nameAr: 'ياوندي', countrySlug: 'cameroon', lat: 3.8480, lng: 11.5021 },

  // ======= MOZAMBIQUE =======
  { slug: 'maputo', slugAr: 'مابوتو', nameEn: 'Maputo', nameAr: 'مابوتو', countrySlug: 'mozambique', lat: -25.9692, lng: 32.5732 },

  // ======= UGANDA =======
  { slug: 'kampala', slugAr: 'كمبالا', nameEn: 'Kampala', nameAr: 'كمبالا', countrySlug: 'uganda', lat: 0.3476, lng: 32.5825 },

  // ======= MORE UK =======
  { slug: 'liverpool', slugAr: 'ليفربول', nameEn: 'Liverpool', nameAr: 'ليفربول', countrySlug: 'united-kingdom', lat: 53.4084, lng: -2.9916 },
  { slug: 'sheffield', slugAr: 'شيفيلد', nameEn: 'Sheffield', nameAr: 'شيفيلد', countrySlug: 'united-kingdom', lat: 53.3811, lng: -1.4701 },
  { slug: 'bristol', slugAr: 'بريستول', nameEn: 'Bristol', nameAr: 'بريستول', countrySlug: 'united-kingdom', lat: 51.4545, lng: -2.5879 },
  { slug: 'cardiff', slugAr: 'كارديف', nameEn: 'Cardiff', nameAr: 'كارديف', countrySlug: 'united-kingdom', lat: 51.4816, lng: -3.1791 },
  { slug: 'leicester', slugAr: 'ليستر', nameEn: 'Leicester', nameAr: 'ليستر', countrySlug: 'united-kingdom', lat: 52.6369, lng: -1.1398 },
  { slug: 'nottingham', slugAr: 'نوتنغهام', nameEn: 'Nottingham', nameAr: 'نوتنغهام', countrySlug: 'united-kingdom', lat: 52.9548, lng: -1.1581 },
  { slug: 'coventry', slugAr: 'كوفنتري', nameEn: 'Coventry', nameAr: 'كوفنتري', countrySlug: 'united-kingdom', lat: 52.4068, lng: -1.5197 },
  { slug: 'luton', slugAr: 'لوتن', nameEn: 'Luton', nameAr: 'لوتن', countrySlug: 'united-kingdom', lat: 51.8787, lng: -0.4200 },

  // ======= MORE GERMANY =======
  { slug: 'dortmund', slugAr: 'دورتموند', nameEn: 'Dortmund', nameAr: 'دورتموند', countrySlug: 'germany', lat: 51.5136, lng: 7.4653 },
  { slug: 'essen', slugAr: 'إيسن', nameEn: 'Essen', nameAr: 'إيسن', countrySlug: 'germany', lat: 51.4556, lng: 7.0116 },
  { slug: 'stuttgart', slugAr: 'شتوتغارت', nameEn: 'Stuttgart', nameAr: 'شتوتغارت', countrySlug: 'germany', lat: 48.7758, lng: 9.1829 },
  { slug: 'dusseldorf', slugAr: 'دوسلدورف', nameEn: 'Düsseldorf', nameAr: 'دوسلدورف', countrySlug: 'germany', lat: 51.2277, lng: 6.7735 },
  { slug: 'bremen', slugAr: 'بريمن', nameEn: 'Bremen', nameAr: 'بريمن', countrySlug: 'germany', lat: 53.0793, lng: 8.8017 },
  { slug: 'hannover', slugAr: 'هانوفر', nameEn: 'Hannover', nameAr: 'هانوفر', countrySlug: 'germany', lat: 52.3759, lng: 9.7320 },
  { slug: 'nuremberg', slugAr: 'نورمبيرغ', nameEn: 'Nuremberg', nameAr: 'نورمبيرغ', countrySlug: 'germany', lat: 49.4521, lng: 11.0767 },

  // ======= MORE FRANCE =======
  { slug: 'toulouse', slugAr: 'تولوز', nameEn: 'Toulouse', nameAr: 'تولوز', countrySlug: 'france', lat: 43.6047, lng: 1.4442 },
  { slug: 'nice', slugAr: 'نيس', nameEn: 'Nice', nameAr: 'نيس', countrySlug: 'france', lat: 43.7102, lng: 7.2620 },
  { slug: 'nantes', slugAr: 'نانت', nameEn: 'Nantes', nameAr: 'نانت', countrySlug: 'france', lat: 47.2184, lng: -1.5536 },
  { slug: 'montpellier', slugAr: 'مونبلييه', nameEn: 'Montpellier', nameAr: 'مونبلييه', countrySlug: 'france', lat: 43.6108, lng: 3.8767 },
  { slug: 'lille', slugAr: 'ليل', nameEn: 'Lille', nameAr: 'ليل', countrySlug: 'france', lat: 50.6292, lng: 3.0573 },

  // ======= MORE NETHERLANDS =======
  { slug: 'utrecht', slugAr: 'اوتريخت', nameEn: 'Utrecht', nameAr: 'أوتريخت', countrySlug: 'netherlands', lat: 52.0907, lng: 5.1214 },
  { slug: 'eindhoven', slugAr: 'ايندهوفن', nameEn: 'Eindhoven', nameAr: 'أيندهوفن', countrySlug: 'netherlands', lat: 51.4416, lng: 5.4697 },

  // ======= MORE SPAIN =======
  { slug: 'valencia', slugAr: 'فالنسيا', nameEn: 'Valencia', nameAr: 'فالنسيا', countrySlug: 'spain', lat: 39.4699, lng: -0.3763 },
  { slug: 'seville', slugAr: 'اشبيلية', nameEn: 'Seville', nameAr: 'إشبيلية', countrySlug: 'spain', lat: 37.3891, lng: -5.9845 },
  { slug: 'malaga', slugAr: 'ملقة', nameEn: 'Málaga', nameAr: 'ملقة', countrySlug: 'spain', lat: 36.7213, lng: -4.4214 },
  { slug: 'granada', slugAr: 'غرناطة', nameEn: 'Granada', nameAr: 'غرناطة', countrySlug: 'spain', lat: 37.1773, lng: -3.5986 },
  { slug: 'cordoba', slugAr: 'قرطبة', nameEn: 'Córdoba', nameAr: 'قرطبة', countrySlug: 'spain', lat: 37.8882, lng: -4.7794 },

  // ======= MORE ITALY =======
  { slug: 'naples', slugAr: 'نابولي', nameEn: 'Naples', nameAr: 'نابولي', countrySlug: 'italy', lat: 40.8518, lng: 14.2681 },
  { slug: 'turin', slugAr: 'تورينو', nameEn: 'Turin', nameAr: 'تورينو', countrySlug: 'italy', lat: 45.0703, lng: 7.6869 },
  { slug: 'palermo', slugAr: 'باليرمو', nameEn: 'Palermo', nameAr: 'باليرمو', countrySlug: 'italy', lat: 38.1157, lng: 13.3615 },

  // ======= MORE NORWAY =======
  { slug: 'oslo', slugAr: 'اوسلو', nameEn: 'Oslo', nameAr: 'أوسلو', countrySlug: 'norway', lat: 59.9139, lng: 10.7522 },
  { slug: 'bergen', slugAr: 'بيرغن', nameEn: 'Bergen', nameAr: 'بيرغن', countrySlug: 'norway', lat: 60.3913, lng: 5.3221 },

  // ======= DENMARK =======
  { slug: 'copenhagen', slugAr: 'كوبنهاغن', nameEn: 'Copenhagen', nameAr: 'كوبنهاغن', countrySlug: 'denmark', lat: 55.6761, lng: 12.5683 },
  { slug: 'aarhus', slugAr: 'ارهوس', nameEn: 'Aarhus', nameAr: 'آرهوس', countrySlug: 'denmark', lat: 56.1629, lng: 10.2039 },

  // ======= FINLAND =======
  { slug: 'helsinki', slugAr: 'هلسنكي', nameEn: 'Helsinki', nameAr: 'هلسنكي', countrySlug: 'finland', lat: 60.1699, lng: 24.9384 },

  // ======= SWITZERLAND =======
  { slug: 'zurich', slugAr: 'زيوريخ', nameEn: 'Zurich', nameAr: 'زيوريخ', countrySlug: 'switzerland', lat: 47.3769, lng: 8.5417 },
  { slug: 'geneva', slugAr: 'جنيف', nameEn: 'Geneva', nameAr: 'جنيف', countrySlug: 'switzerland', lat: 46.2044, lng: 6.1432 },
  { slug: 'bern', slugAr: 'برن', nameEn: 'Bern', nameAr: 'برن', countrySlug: 'switzerland', lat: 46.9480, lng: 7.4474 },

  // ======= MORE GREECE =======
  { slug: 'thessaloniki', slugAr: 'سالونيك', nameEn: 'Thessaloniki', nameAr: 'سالونيك', countrySlug: 'greece', lat: 40.6401, lng: 22.9444 },

  // ======= MORE BOSNIA =======
  { slug: 'mostar', slugAr: 'موستار', nameEn: 'Mostar', nameAr: 'موستار', countrySlug: 'bosnia', lat: 43.3438, lng: 17.8078 },
  { slug: 'tuzla', slugAr: 'توزلا', nameEn: 'Tuzla', nameAr: 'توزلا', countrySlug: 'bosnia', lat: 44.5384, lng: 18.6763 },
  { slug: 'zenica', slugAr: 'زينيتسا', nameEn: 'Zenica', nameAr: 'زينيتسا', countrySlug: 'bosnia', lat: 44.2037, lng: 17.9078 },

  // ======= MORE ALBANIA =======
  { slug: 'durres', slugAr: 'دوريس', nameEn: 'Durrës', nameAr: 'دوريس', countrySlug: 'albania', lat: 41.3233, lng: 19.4544 },
  { slug: 'vlore', slugAr: 'فلوري', nameEn: 'Vlorë', nameAr: 'فلوري', countrySlug: 'albania', lat: 40.4667, lng: 19.4897 },
  { slug: 'shkoder', slugAr: 'شكودر', nameEn: 'Shkodër', nameAr: 'شكودر', countrySlug: 'albania', lat: 42.0693, lng: 19.5033 },

  // ======= KOSOVO =======
  { slug: 'pristina', slugAr: 'بريشتينا', nameEn: 'Pristina', nameAr: 'بريشتينا', countrySlug: 'kosovo', lat: 42.6629, lng: 21.1655 },
  { slug: 'prizren', slugAr: 'بريزرن', nameEn: 'Prizren', nameAr: 'بريزرن', countrySlug: 'kosovo', lat: 42.2139, lng: 20.7397 },

  // ======= MORE RUSSIA =======
  { slug: 'saint-petersburg', slugAr: 'سان-بطرسبرغ', nameEn: 'Saint Petersburg', nameAr: 'سان بطرسبرغ', countrySlug: 'russia', lat: 59.9343, lng: 30.3351 },
  { slug: 'makhachkala', slugAr: 'محج-قلعة', nameEn: 'Makhachkala', nameAr: 'محج قلعة', countrySlug: 'russia', lat: 42.9849, lng: 47.5047 },
  { slug: 'ufa', slugAr: 'اوفا', nameEn: 'Ufa', nameAr: 'أوفا', countrySlug: 'russia', lat: 54.7388, lng: 55.9721 },
  { slug: 'yekaterinburg', slugAr: 'يكاترينبورغ', nameEn: 'Yekaterinburg', nameAr: 'يكاترينبورغ', countrySlug: 'russia', lat: 56.8389, lng: 60.6057 },

  // ======= MORE USA =======
  { slug: 'philadelphia', slugAr: 'فيلادلفيا', nameEn: 'Philadelphia', nameAr: 'فيلادلفيا', countrySlug: 'united-states', lat: 39.9526, lng: -75.1652 },
  { slug: 'phoenix', slugAr: 'فينيكس', nameEn: 'Phoenix', nameAr: 'فينيكس', countrySlug: 'united-states', lat: 33.4484, lng: -112.0740 },
  { slug: 'san-diego', slugAr: 'سان-دييغو', nameEn: 'San Diego', nameAr: 'سان دييغو', countrySlug: 'united-states', lat: 32.7157, lng: -117.1611 },
  { slug: 'san-antonio', slugAr: 'سان-انطونيو', nameEn: 'San Antonio', nameAr: 'سان أنطونيو', countrySlug: 'united-states', lat: 29.4241, lng: -98.4936 },
  { slug: 'detroit', slugAr: 'ديترويت', nameEn: 'Detroit', nameAr: 'ديترويت', countrySlug: 'united-states', lat: 42.3314, lng: -83.0458 },
  { slug: 'seattle', slugAr: 'سياتل', nameEn: 'Seattle', nameAr: 'سياتل', countrySlug: 'united-states', lat: 47.6062, lng: -122.3321 },
  { slug: 'denver', slugAr: 'دنفر', nameEn: 'Denver', nameAr: 'دنفر', countrySlug: 'united-states', lat: 39.7392, lng: -104.9903 },
  { slug: 'atlanta', slugAr: 'اتلانتا', nameEn: 'Atlanta', nameAr: 'أتلانتا', countrySlug: 'united-states', lat: 33.7490, lng: -84.3880 },
  { slug: 'miami', slugAr: 'ميامي', nameEn: 'Miami', nameAr: 'ميامي', countrySlug: 'united-states', lat: 25.7617, lng: -80.1918 },
  { slug: 'boston', slugAr: 'بوسطن', nameEn: 'Boston', nameAr: 'بوسطن', countrySlug: 'united-states', lat: 42.3601, lng: -71.0589 },
  { slug: 'minneapolis', slugAr: 'مينيابوليس', nameEn: 'Minneapolis', nameAr: 'مينيابوليس', countrySlug: 'united-states', lat: 44.9778, lng: -93.2650 },

  // ======= MORE CANADA =======
  { slug: 'edmonton', slugAr: 'ادمنتون', nameEn: 'Edmonton', nameAr: 'إدمنتون', countrySlug: 'canada', lat: 53.5461, lng: -113.4938 },
  { slug: 'mississauga', slugAr: 'ميسيساغا', nameEn: 'Mississauga', nameAr: 'ميسيساغا', countrySlug: 'canada', lat: 43.5890, lng: -79.6441 },
  { slug: 'winnipeg', slugAr: 'وينيبيغ', nameEn: 'Winnipeg', nameAr: 'وينيبيغ', countrySlug: 'canada', lat: 49.8951, lng: -97.1384 },
  { slug: 'hamilton', slugAr: 'هاميلتون', nameEn: 'Hamilton', nameAr: 'هاميلتون', countrySlug: 'canada', lat: 43.2557, lng: -79.8711 },
  { slug: 'london-ca', slugAr: 'لندن-كندا', nameEn: 'London', nameAr: 'لندن', countrySlug: 'canada', lat: 42.9849, lng: -81.2453 },

  // ======= MORE BRAZIL =======
  { slug: 'brasilia', slugAr: 'برازيليا', nameEn: 'Brasília', nameAr: 'برازيليا', countrySlug: 'brazil', lat: -15.7975, lng: -47.8919 },
  { slug: 'salvador', slugAr: 'سلفادور', nameEn: 'Salvador', nameAr: 'سلفادور', countrySlug: 'brazil', lat: -12.9714, lng: -38.5124 },
  { slug: 'recife', slugAr: 'ريسيفي', nameEn: 'Recife', nameAr: 'ريسيفي', countrySlug: 'brazil', lat: -8.0476, lng: -34.8770 },

  // ======= MORE UZBEKISTAN =======
  { slug: 'namangan', slugAr: 'نمنجان', nameEn: 'Namangan', nameAr: 'نمنجان', countrySlug: 'uzbekistan', lat: 40.9983, lng: 71.6726 },
  { slug: 'andijan', slugAr: 'انديجان', nameEn: 'Andijan', nameAr: 'أنديجان', countrySlug: 'uzbekistan', lat: 40.7833, lng: 72.3333 },
  { slug: 'fergana', slugAr: 'فرغانة', nameEn: 'Fergana', nameAr: 'فرغانة', countrySlug: 'uzbekistan', lat: 40.3842, lng: 71.7889 },

  // ======= MORE KAZAKHSTAN =======
  { slug: 'shymkent', slugAr: 'شيمكنت', nameEn: 'Shymkent', nameAr: 'شيمكنت', countrySlug: 'kazakhstan', lat: 42.3417, lng: 69.5967 },
  { slug: 'karaganda', slugAr: 'كاراغندا', nameEn: 'Karaganda', nameAr: 'كاراغندا', countrySlug: 'kazakhstan', lat: 49.8047, lng: 73.1094 },
  { slug: 'aktobe', slugAr: 'اكتوبي', nameEn: 'Aktobe', nameAr: 'أكتوبي', countrySlug: 'kazakhstan', lat: 50.2839, lng: 57.2070 },

  // ======= TAJIKISTAN =======
  { slug: 'dushanbe', slugAr: 'دوشنبه', nameEn: 'Dushanbe', nameAr: 'دوشنبه', countrySlug: 'tajikistan', lat: 38.5598, lng: 68.7740 },
  { slug: 'khujand', slugAr: 'خجند', nameEn: 'Khujand', nameAr: 'خجند', countrySlug: 'tajikistan', lat: 40.2826, lng: 69.6228 },

  // ======= TURKMENISTAN =======
  { slug: 'ashgabat', slugAr: 'عشق-اباد', nameEn: 'Ashgabat', nameAr: 'عشق آباد', countrySlug: 'turkmenistan', lat: 37.9601, lng: 58.3261 },
  { slug: 'turkmenabat', slugAr: 'تركمن-اباد', nameEn: 'Turkmenabat', nameAr: 'تركمن آباد', countrySlug: 'turkmenistan', lat: 39.0733, lng: 63.5786 },

  // ======= KYRGYZSTAN =======
  { slug: 'bishkek', slugAr: 'بيشكك', nameEn: 'Bishkek', nameAr: 'بيشكك', countrySlug: 'kyrgyzstan', lat: 42.8746, lng: 74.5698 },
  { slug: 'osh', slugAr: 'اوش', nameEn: 'Osh', nameAr: 'أوش', countrySlug: 'kyrgyzstan', lat: 40.5283, lng: 72.7985 },

  // ======= MORE AZERBAIJAN =======
  { slug: 'ganja', slugAr: 'غنجة', nameEn: 'Ganja', nameAr: 'غنجة', countrySlug: 'azerbaijan', lat: 40.6828, lng: 46.3606 },
  { slug: 'sumgait', slugAr: 'سومقاييت', nameEn: 'Sumgait', nameAr: 'سومقاييت', countrySlug: 'azerbaijan', lat: 40.5897, lng: 49.6317 },

  // ======= MORE AUSTRALIA =======
  { slug: 'adelaide', slugAr: 'اديلايد', nameEn: 'Adelaide', nameAr: 'أديلايد', countrySlug: 'australia', lat: -34.9285, lng: 138.6007 },
  { slug: 'canberra', slugAr: 'كانبيرا', nameEn: 'Canberra', nameAr: 'كانبيرا', countrySlug: 'australia', lat: -35.2809, lng: 149.1300 },
  { slug: 'gold-coast', slugAr: 'غولد-كوست', nameEn: 'Gold Coast', nameAr: 'غولد كوست', countrySlug: 'australia', lat: -28.0167, lng: 153.4000 },

  // ======= MORE NEW ZEALAND =======
  { slug: 'wellington', slugAr: 'ويلنغتون', nameEn: 'Wellington', nameAr: 'ويلنغتون', countrySlug: 'new-zealand', lat: -41.2866, lng: 174.7756 },
  { slug: 'christchurch', slugAr: 'كرايست-تشيرش', nameEn: 'Christchurch', nameAr: 'كرايست تشيرش', countrySlug: 'new-zealand', lat: -43.5320, lng: 172.6306 },

  // ======= MORE CHINA =======
  { slug: 'shanghai', slugAr: 'شنغهاي', nameEn: 'Shanghai', nameAr: 'شنغهاي', countrySlug: 'china', lat: 31.2304, lng: 121.4737 },
  { slug: 'xian', slugAr: 'شيآن', nameEn: "Xi'an", nameAr: 'شيآن', countrySlug: 'china', lat: 34.3416, lng: 108.9398 },
  { slug: 'lanzhou', slugAr: 'لانتشو', nameEn: 'Lanzhou', nameAr: 'لانتشو', countrySlug: 'china', lat: 36.0611, lng: 103.8343 },
  { slug: 'kashgar', slugAr: 'كاشغر', nameEn: 'Kashgar', nameAr: 'كاشغر', countrySlug: 'china', lat: 39.4704, lng: 75.9899 },

  // ======= MORE JAPAN =======
  { slug: 'nagoya', slugAr: 'ناغويا', nameEn: 'Nagoya', nameAr: 'ناغويا', countrySlug: 'japan', lat: 35.1815, lng: 136.9066 },
  { slug: 'kobe', slugAr: 'كوبي', nameEn: 'Kobe', nameAr: 'كوبي', countrySlug: 'japan', lat: 34.6901, lng: 135.1956 },

  // ======= SOUTH KOREA =======
  { slug: 'seoul', slugAr: 'سيول', nameEn: 'Seoul', nameAr: 'سيول', countrySlug: 'south-korea', lat: 37.5665, lng: 126.9780 },
  { slug: 'busan', slugAr: 'بوسان', nameEn: 'Busan', nameAr: 'بوسان', countrySlug: 'south-korea', lat: 35.1796, lng: 129.0756 },

  // ======= MORE MEXICO =======
  { slug: 'guadalajara', slugAr: 'غوادالاخارا', nameEn: 'Guadalajara', nameAr: 'غوادالاخارا', countrySlug: 'mexico', lat: 20.6597, lng: -103.3496 },
  { slug: 'monterrey', slugAr: 'مونتيري', nameEn: 'Monterrey', nameAr: 'مونتيري', countrySlug: 'mexico', lat: 25.6866, lng: -100.3161 },

  // ======= MORE PHILIPPINES =======
  { slug: 'davao', slugAr: 'دافاو', nameEn: 'Davao', nameAr: 'دافاو', countrySlug: 'philippines', lat: 7.1907, lng: 125.4553 },
  { slug: 'cebu', slugAr: 'سيبو', nameEn: 'Cebu', nameAr: 'سيبو', countrySlug: 'philippines', lat: 10.3157, lng: 123.8854 },
  { slug: 'cotabato', slugAr: 'كوتاباتو', nameEn: 'Cotabato', nameAr: 'كوتاباتو', countrySlug: 'philippines', lat: 7.2047, lng: 124.2310 },
  { slug: 'marawi', slugAr: 'ماراوي', nameEn: 'Marawi', nameAr: 'ماراوي', countrySlug: 'philippines', lat: 8.0016, lng: 124.2929 },

  // ======= MORE THAILAND =======
  { slug: 'pattani', slugAr: 'فطاني', nameEn: 'Pattani', nameAr: 'فطاني', countrySlug: 'thailand', lat: 6.8691, lng: 101.2508 },
  { slug: 'yala', slugAr: 'يالا', nameEn: 'Yala', nameAr: 'يالا', countrySlug: 'thailand', lat: 6.5403, lng: 101.2800 },
  { slug: 'chiang-mai', slugAr: 'شيانغ-ماي', nameEn: 'Chiang Mai', nameAr: 'شيانغ ماي', countrySlug: 'thailand', lat: 18.7883, lng: 98.9853 },

  // ======= NEPAL =======
  { slug: 'kathmandu', slugAr: 'كاتماندو', nameEn: 'Kathmandu', nameAr: 'كاتماندو', countrySlug: 'nepal', lat: 27.7172, lng: 85.3240 },
  { slug: 'pokhara', slugAr: 'بوخارا', nameEn: 'Pokhara', nameAr: 'بوخارا', countrySlug: 'nepal', lat: 28.2096, lng: 83.9856 },

  // ======= MORE ARGENTINA =======
  { slug: 'cordoba-ar', slugAr: 'قرطبة-الارجنتين', nameEn: 'Córdoba', nameAr: 'قرطبة', countrySlug: 'argentina', lat: -31.4201, lng: -64.1888 },
  { slug: 'rosario', slugAr: 'روساريو', nameEn: 'Rosario', nameAr: 'روساريو', countrySlug: 'argentina', lat: -32.9468, lng: -60.6393 },

  // ======= MORE UAE =======
  { slug: 'al-dhafra', slugAr: 'الظفرة', nameEn: 'Al Dhafra', nameAr: 'الظفرة', countrySlug: 'uae', lat: 23.6500, lng: 53.7000 },
  { slug: 'khor-fakkan', slugAr: 'خورفكان', nameEn: 'Khor Fakkan', nameAr: 'خورفكان', countrySlug: 'uae', lat: 25.3390, lng: 56.3490 },
  { slug: 'kalba', slugAr: 'كلباء', nameEn: 'Kalba', nameAr: 'كلباء', countrySlug: 'uae', lat: 25.0695, lng: 56.3504 },
  { slug: 'dibba-al-fujairah', slugAr: 'دبا-الفجيرة', nameEn: 'Dibba Al Fujairah', nameAr: 'دبا الفجيرة', countrySlug: 'uae', lat: 25.6213, lng: 56.2704 },

  // ======= MORE OMAN =======
  { slug: 'ibri', slugAr: 'عبري', nameEn: 'Ibri', nameAr: 'عبري', countrySlug: 'oman', lat: 23.2258, lng: 56.5164 },
  { slug: 'rustaq', slugAr: 'الرستاق', nameEn: 'Rustaq', nameAr: 'الرستاق', countrySlug: 'oman', lat: 23.3906, lng: 57.4253 },
  { slug: 'barka', slugAr: 'بركاء', nameEn: 'Barka', nameAr: 'بركاء', countrySlug: 'oman', lat: 23.7079, lng: 57.8890 },
  { slug: 'khasab', slugAr: 'خصب', nameEn: 'Khasab', nameAr: 'خصب', countrySlug: 'oman', lat: 26.1794, lng: 56.2478 },

  // ======= MORE QATAR =======
  { slug: 'dukhan', slugAr: 'دخان', nameEn: 'Dukhan', nameAr: 'دخان', countrySlug: 'qatar', lat: 25.4250, lng: 50.7800 },
  { slug: 'al-shamal', slugAr: 'الشمال', nameEn: 'Al Shamal', nameAr: 'الشمال', countrySlug: 'qatar', lat: 26.1083, lng: 51.2167 },
  { slug: 'umm-salal', slugAr: 'ام-صلال', nameEn: 'Umm Salal', nameAr: 'أم صلال', countrySlug: 'qatar', lat: 25.4100, lng: 51.3967 },

  // ======= MORE BAHRAIN =======
  { slug: 'hamad-town', slugAr: 'مدينة-حمد', nameEn: 'Hamad Town', nameAr: 'مدينة حمد', countrySlug: 'bahrain', lat: 26.1169, lng: 50.5022 },
  { slug: 'sitra', slugAr: 'سترة', nameEn: 'Sitra', nameAr: 'سترة', countrySlug: 'bahrain', lat: 26.1561, lng: 50.6253 },
  { slug: 'budaiya', slugAr: 'البديع', nameEn: 'Budaiya', nameAr: 'البديع', countrySlug: 'bahrain', lat: 26.2181, lng: 50.4500 },

  // ======= MORE KUWAIT =======
  { slug: 'farwaniya', slugAr: 'الفروانية', nameEn: 'Farwaniya', nameAr: 'الفروانية', countrySlug: 'kuwait', lat: 29.2781, lng: 47.9583 },
  { slug: 'mubarak-al-kabeer', slugAr: 'مبارك-الكبير', nameEn: 'Mubarak Al Kabeer', nameAr: 'مبارك الكبير', countrySlug: 'kuwait', lat: 29.2217, lng: 48.0917 },
  { slug: 'sabah-al-salem', slugAr: 'صباح-السالم', nameEn: 'Sabah Al Salem', nameAr: 'صباح السالم', countrySlug: 'kuwait', lat: 29.2650, lng: 48.0592 },

  // ======= MALDIVES =======
  { slug: 'hulhumale', slugAr: 'هولهومالي', nameEn: 'Hulhumalé', nameAr: 'هولهومالي', countrySlug: 'maldives', lat: 4.2117, lng: 73.5403 },
  { slug: 'addu-city', slugAr: 'مدينة-ادو', nameEn: 'Addu City', nameAr: 'مدينة أدو', countrySlug: 'maldives', lat: -0.6300, lng: 73.0900 },
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
