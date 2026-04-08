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
  // South Asia
  { slug: 'pakistan', slugAr: 'باكستان', nameEn: 'Pakistan', nameAr: 'باكستان', code: 'PK' },
  { slug: 'india', slugAr: 'الهند', nameEn: 'India', nameAr: 'الهند', code: 'IN' },
  { slug: 'bangladesh', slugAr: 'بنغلاديش', nameEn: 'Bangladesh', nameAr: 'بنغلاديش', code: 'BD' },
  { slug: 'afghanistan', slugAr: 'افغانستان', nameEn: 'Afghanistan', nameAr: 'أفغانستان', code: 'AF' },
  { slug: 'sri-lanka', slugAr: 'سريلانكا', nameEn: 'Sri Lanka', nameAr: 'سريلانكا', code: 'LK' },
  // Southeast Asia
  { slug: 'indonesia', slugAr: 'اندونيسيا', nameEn: 'Indonesia', nameAr: 'إندونيسيا', code: 'ID' },
  { slug: 'malaysia', slugAr: 'ماليزيا', nameEn: 'Malaysia', nameAr: 'ماليزيا', code: 'MY' },
  { slug: 'turkey', slugAr: 'تركيا', nameEn: 'Turkey', nameAr: 'تركيا', code: 'TR' },
  { slug: 'iran', slugAr: 'ايران', nameEn: 'Iran', nameAr: 'إيران', code: 'IR' },
  // Africa
  { slug: 'nigeria', slugAr: 'نيجيريا', nameEn: 'Nigeria', nameAr: 'نيجيريا', code: 'NG' },
  { slug: 'somalia', slugAr: 'الصومال', nameEn: 'Somalia', nameAr: 'الصومال', code: 'SO' },
  { slug: 'senegal', slugAr: 'السنغال', nameEn: 'Senegal', nameAr: 'السنغال', code: 'SN' },
  { slug: 'ethiopia', slugAr: 'اثيوبيا', nameEn: 'Ethiopia', nameAr: 'إثيوبيا', code: 'ET' },
  { slug: 'tanzania', slugAr: 'تنزانيا', nameEn: 'Tanzania', nameAr: 'تنزانيا', code: 'TZ' },
  { slug: 'kenya', slugAr: 'كينيا', nameEn: 'Kenya', nameAr: 'كينيا', code: 'KE' },
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
  // Americas
  { slug: 'united-states', slugAr: 'امريكا', nameEn: 'United States', nameAr: 'الولايات المتحدة', code: 'US' },
  { slug: 'canada', slugAr: 'كندا', nameEn: 'Canada', nameAr: 'كندا', code: 'CA' },
  { slug: 'brazil', slugAr: 'البرازيل', nameEn: 'Brazil', nameAr: 'البرازيل', code: 'BR' },
  { slug: 'argentina', slugAr: 'الارجنتين', nameEn: 'Argentina', nameAr: 'الأرجنتين', code: 'AR' },
  // Central Asia
  { slug: 'uzbekistan', slugAr: 'اوزبكستان', nameEn: 'Uzbekistan', nameAr: 'أوزبكستان', code: 'UZ' },
  { slug: 'kazakhstan', slugAr: 'كازاخستان', nameEn: 'Kazakhstan', nameAr: 'كازاخستان', code: 'KZ' },
  // Oceania
  { slug: 'australia', slugAr: 'استراليا', nameEn: 'Australia', nameAr: 'أستراليا', code: 'AU' },
];

export const globalCities: GlobalCityData[] = [
  // Saudi Arabia
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
  // UAE
  { slug: 'dubai', slugAr: 'دبي', nameEn: 'Dubai', nameAr: 'دبي', countrySlug: 'uae', lat: 25.2048, lng: 55.2708 },
  { slug: 'abu-dhabi', slugAr: 'ابوظبي', nameEn: 'Abu Dhabi', nameAr: 'أبوظبي', countrySlug: 'uae', lat: 24.4539, lng: 54.3773 },
  { slug: 'sharjah', slugAr: 'الشارقة', nameEn: 'Sharjah', nameAr: 'الشارقة', countrySlug: 'uae', lat: 25.3463, lng: 55.4209 },
  { slug: 'ajman', slugAr: 'عجمان', nameEn: 'Ajman', nameAr: 'عجمان', countrySlug: 'uae', lat: 25.4052, lng: 55.5136 },
  { slug: 'al-ain', slugAr: 'العين', nameEn: 'Al Ain', nameAr: 'العين', countrySlug: 'uae', lat: 24.1917, lng: 55.7606 },
  { slug: 'ras-al-khaimah', slugAr: 'رأس-الخيمة', nameEn: 'Ras Al Khaimah', nameAr: 'رأس الخيمة', countrySlug: 'uae', lat: 25.7895, lng: 55.9432 },
  { slug: 'fujairah', slugAr: 'الفجيرة', nameEn: 'Fujairah', nameAr: 'الفجيرة', countrySlug: 'uae', lat: 25.1288, lng: 56.3265 },
  // Qatar
  { slug: 'doha', slugAr: 'الدوحة', nameEn: 'Doha', nameAr: 'الدوحة', countrySlug: 'qatar', lat: 25.2854, lng: 51.5310 },
  { slug: 'al-wakrah', slugAr: 'الوكرة', nameEn: 'Al Wakrah', nameAr: 'الوكرة', countrySlug: 'qatar', lat: 25.1659, lng: 51.6039 },
  { slug: 'al-khor', slugAr: 'الخور', nameEn: 'Al Khor', nameAr: 'الخور', countrySlug: 'qatar', lat: 25.6804, lng: 51.4969 },
  // Kuwait
  { slug: 'kuwait-city', slugAr: 'مدينة-الكويت', nameEn: 'Kuwait City', nameAr: 'مدينة الكويت', countrySlug: 'kuwait', lat: 29.3759, lng: 47.9774 },
  { slug: 'hawally', slugAr: 'حولي', nameEn: 'Hawally', nameAr: 'حولي', countrySlug: 'kuwait', lat: 29.3328, lng: 48.0286 },
  { slug: 'al-ahmadi', slugAr: 'الاحمدي', nameEn: 'Al Ahmadi', nameAr: 'الأحمدي', countrySlug: 'kuwait', lat: 29.0769, lng: 48.0838 },
  // Bahrain
  { slug: 'manama', slugAr: 'المنامة', nameEn: 'Manama', nameAr: 'المنامة', countrySlug: 'bahrain', lat: 26.2285, lng: 50.5860 },
  { slug: 'muharraq', slugAr: 'المحرق', nameEn: 'Muharraq', nameAr: 'المحرق', countrySlug: 'bahrain', lat: 26.2572, lng: 50.6119 },
  // Oman
  { slug: 'muscat', slugAr: 'مسقط', nameEn: 'Muscat', nameAr: 'مسقط', countrySlug: 'oman', lat: 23.5880, lng: 58.3829 },
  { slug: 'salalah', slugAr: 'صلالة', nameEn: 'Salalah', nameAr: 'صلالة', countrySlug: 'oman', lat: 17.0151, lng: 54.0924 },
  { slug: 'sohar', slugAr: 'صحار', nameEn: 'Sohar', nameAr: 'صحار', countrySlug: 'oman', lat: 24.3461, lng: 56.7075 },
  // Egypt
  { slug: 'cairo', slugAr: 'القاهرة', nameEn: 'Cairo', nameAr: 'القاهرة', countrySlug: 'egypt', lat: 30.0444, lng: 31.2357 },
  { slug: 'alexandria', slugAr: 'الاسكندرية', nameEn: 'Alexandria', nameAr: 'الإسكندرية', countrySlug: 'egypt', lat: 31.2001, lng: 29.9187 },
  { slug: 'giza', slugAr: 'الجيزة', nameEn: 'Giza', nameAr: 'الجيزة', countrySlug: 'egypt', lat: 30.0131, lng: 31.2089 },
  { slug: 'aswan', slugAr: 'اسوان', nameEn: 'Aswan', nameAr: 'أسوان', countrySlug: 'egypt', lat: 24.0889, lng: 32.8998 },
  { slug: 'luxor', slugAr: 'الاقصر', nameEn: 'Luxor', nameAr: 'الأقصر', countrySlug: 'egypt', lat: 25.6872, lng: 32.6396 },
  // Jordan
  { slug: 'amman', slugAr: 'عمان', nameEn: 'Amman', nameAr: 'عمّان', countrySlug: 'jordan', lat: 31.9454, lng: 35.9284 },
  { slug: 'irbid', slugAr: 'اربد', nameEn: 'Irbid', nameAr: 'إربد', countrySlug: 'jordan', lat: 32.5568, lng: 35.8469 },
  { slug: 'zarqa', slugAr: 'الزرقاء', nameEn: 'Zarqa', nameAr: 'الزرقاء', countrySlug: 'jordan', lat: 32.0608, lng: 36.0942 },
  // Iraq
  { slug: 'baghdad', slugAr: 'بغداد', nameEn: 'Baghdad', nameAr: 'بغداد', countrySlug: 'iraq', lat: 33.3152, lng: 44.3661 },
  { slug: 'basra', slugAr: 'البصرة', nameEn: 'Basra', nameAr: 'البصرة', countrySlug: 'iraq', lat: 30.5085, lng: 47.7804 },
  { slug: 'erbil', slugAr: 'اربيل', nameEn: 'Erbil', nameAr: 'أربيل', countrySlug: 'iraq', lat: 36.1912, lng: 44.0119 },
  // Syria
  { slug: 'damascus', slugAr: 'دمشق', nameEn: 'Damascus', nameAr: 'دمشق', countrySlug: 'syria', lat: 33.5138, lng: 36.2765 },
  { slug: 'aleppo', slugAr: 'حلب', nameEn: 'Aleppo', nameAr: 'حلب', countrySlug: 'syria', lat: 36.2021, lng: 37.1343 },
  // Lebanon
  { slug: 'beirut', slugAr: 'بيروت', nameEn: 'Beirut', nameAr: 'بيروت', countrySlug: 'lebanon', lat: 33.8938, lng: 35.5018 },
  { slug: 'tripoli-lb', slugAr: 'طرابلس', nameEn: 'Tripoli', nameAr: 'طرابلس', countrySlug: 'lebanon', lat: 34.4367, lng: 35.8497 },
  // Palestine
  { slug: 'jerusalem', slugAr: 'القدس', nameEn: 'Jerusalem', nameAr: 'القدس', countrySlug: 'palestine', lat: 31.7683, lng: 35.2137 },
  { slug: 'gaza', slugAr: 'غزة', nameEn: 'Gaza', nameAr: 'غزة', countrySlug: 'palestine', lat: 31.5017, lng: 34.4668 },
  { slug: 'hebron', slugAr: 'الخليل', nameEn: 'Hebron', nameAr: 'الخليل', countrySlug: 'palestine', lat: 31.5326, lng: 35.0998 },
  // Yemen
  { slug: 'sanaa', slugAr: 'صنعاء', nameEn: "Sana'a", nameAr: 'صنعاء', countrySlug: 'yemen', lat: 15.3694, lng: 44.1910 },
  { slug: 'aden', slugAr: 'عدن', nameEn: 'Aden', nameAr: 'عدن', countrySlug: 'yemen', lat: 12.7855, lng: 45.0187 },
  // Morocco
  { slug: 'casablanca', slugAr: 'الدار-البيضاء', nameEn: 'Casablanca', nameAr: 'الدار البيضاء', countrySlug: 'morocco', lat: 33.5731, lng: -7.5898 },
  { slug: 'rabat', slugAr: 'الرباط', nameEn: 'Rabat', nameAr: 'الرباط', countrySlug: 'morocco', lat: 34.0209, lng: -6.8416 },
  { slug: 'marrakech', slugAr: 'مراكش', nameEn: 'Marrakech', nameAr: 'مراكش', countrySlug: 'morocco', lat: 31.6295, lng: -7.9811 },
  { slug: 'fes', slugAr: 'فاس', nameEn: 'Fes', nameAr: 'فاس', countrySlug: 'morocco', lat: 34.0331, lng: -5.0003 },
  // Algeria
  { slug: 'algiers', slugAr: 'الجزائر-العاصمة', nameEn: 'Algiers', nameAr: 'الجزائر العاصمة', countrySlug: 'algeria', lat: 36.7538, lng: 3.0588 },
  { slug: 'oran', slugAr: 'وهران', nameEn: 'Oran', nameAr: 'وهران', countrySlug: 'algeria', lat: 35.6969, lng: -0.6331 },
  { slug: 'constantine', slugAr: 'قسنطينة', nameEn: 'Constantine', nameAr: 'قسنطينة', countrySlug: 'algeria', lat: 36.3650, lng: 6.6147 },
  // Tunisia
  { slug: 'tunis', slugAr: 'تونس-العاصمة', nameEn: 'Tunis', nameAr: 'تونس العاصمة', countrySlug: 'tunisia', lat: 36.8065, lng: 10.1815 },
  { slug: 'sfax', slugAr: 'صفاقس', nameEn: 'Sfax', nameAr: 'صفاقس', countrySlug: 'tunisia', lat: 34.7406, lng: 10.7603 },
  // Libya
  { slug: 'tripoli', slugAr: 'طرابلس-ليبيا', nameEn: 'Tripoli', nameAr: 'طرابلس', countrySlug: 'libya', lat: 32.8872, lng: 13.1913 },
  { slug: 'benghazi', slugAr: 'بنغازي', nameEn: 'Benghazi', nameAr: 'بنغازي', countrySlug: 'libya', lat: 32.1194, lng: 20.0868 },
  // Sudan
  { slug: 'khartoum', slugAr: 'الخرطوم', nameEn: 'Khartoum', nameAr: 'الخرطوم', countrySlug: 'sudan', lat: 15.5007, lng: 32.5599 },
  // Pakistan
  { slug: 'islamabad', slugAr: 'اسلام-اباد', nameEn: 'Islamabad', nameAr: 'إسلام آباد', countrySlug: 'pakistan', lat: 33.6844, lng: 73.0479 },
  { slug: 'karachi', slugAr: 'كراتشي', nameEn: 'Karachi', nameAr: 'كراتشي', countrySlug: 'pakistan', lat: 24.8607, lng: 67.0011 },
  { slug: 'lahore', slugAr: 'لاهور', nameEn: 'Lahore', nameAr: 'لاهور', countrySlug: 'pakistan', lat: 31.5204, lng: 74.3587 },
  { slug: 'faisalabad', slugAr: 'فيصل-اباد', nameEn: 'Faisalabad', nameAr: 'فيصل آباد', countrySlug: 'pakistan', lat: 31.4504, lng: 73.1350 },
  // India
  { slug: 'mumbai', slugAr: 'مومباي', nameEn: 'Mumbai', nameAr: 'مومباي', countrySlug: 'india', lat: 19.0760, lng: 72.8777 },
  { slug: 'delhi', slugAr: 'دلهي', nameEn: 'Delhi', nameAr: 'دلهي', countrySlug: 'india', lat: 28.7041, lng: 77.1025 },
  { slug: 'hyderabad', slugAr: 'حيدر-اباد', nameEn: 'Hyderabad', nameAr: 'حيدر آباد', countrySlug: 'india', lat: 17.3850, lng: 78.4867 },
  { slug: 'bangalore', slugAr: 'بنغالور', nameEn: 'Bangalore', nameAr: 'بنغالور', countrySlug: 'india', lat: 12.9716, lng: 77.5946 },
  { slug: 'chennai', slugAr: 'تشيناي', nameEn: 'Chennai', nameAr: 'تشيناي', countrySlug: 'india', lat: 13.0827, lng: 80.2707 },
  // Bangladesh
  { slug: 'dhaka', slugAr: 'دكا', nameEn: 'Dhaka', nameAr: 'دكا', countrySlug: 'bangladesh', lat: 23.8103, lng: 90.4125 },
  { slug: 'chittagong', slugAr: 'شيتاغونغ', nameEn: 'Chittagong', nameAr: 'شيتاغونغ', countrySlug: 'bangladesh', lat: 22.3569, lng: 91.7832 },
  // Afghanistan
  { slug: 'kabul', slugAr: 'كابل', nameEn: 'Kabul', nameAr: 'كابل', countrySlug: 'afghanistan', lat: 34.5553, lng: 69.2075 },
  // Sri Lanka
  { slug: 'colombo', slugAr: 'كولومبو', nameEn: 'Colombo', nameAr: 'كولومبو', countrySlug: 'sri-lanka', lat: 6.9271, lng: 79.8612 },
  // Indonesia
  { slug: 'jakarta', slugAr: 'جاكرتا', nameEn: 'Jakarta', nameAr: 'جاكرتا', countrySlug: 'indonesia', lat: -6.2088, lng: 106.8456 },
  { slug: 'surabaya', slugAr: 'سورابايا', nameEn: 'Surabaya', nameAr: 'سورابايا', countrySlug: 'indonesia', lat: -7.2575, lng: 112.7521 },
  { slug: 'bandung', slugAr: 'باندونغ', nameEn: 'Bandung', nameAr: 'باندونغ', countrySlug: 'indonesia', lat: -6.9175, lng: 107.6191 },
  // Malaysia
  { slug: 'kuala-lumpur', slugAr: 'كوالالمبور', nameEn: 'Kuala Lumpur', nameAr: 'كوالالمبور', countrySlug: 'malaysia', lat: 3.1390, lng: 101.6869 },
  { slug: 'penang', slugAr: 'بينانغ', nameEn: 'Penang', nameAr: 'بينانغ', countrySlug: 'malaysia', lat: 5.4164, lng: 100.3327 },
  // Turkey
  { slug: 'istanbul', slugAr: 'اسطنبول', nameEn: 'Istanbul', nameAr: 'إسطنبول', countrySlug: 'turkey', lat: 41.0082, lng: 28.9784 },
  { slug: 'ankara', slugAr: 'انقرة', nameEn: 'Ankara', nameAr: 'أنقرة', countrySlug: 'turkey', lat: 39.9334, lng: 32.8597 },
  { slug: 'izmir', slugAr: 'ازمير', nameEn: 'Izmir', nameAr: 'إزمير', countrySlug: 'turkey', lat: 38.4192, lng: 27.1287 },
  { slug: 'bursa', slugAr: 'بورصة', nameEn: 'Bursa', nameAr: 'بورصة', countrySlug: 'turkey', lat: 40.1826, lng: 29.0665 },
  // Iran
  { slug: 'tehran', slugAr: 'طهران', nameEn: 'Tehran', nameAr: 'طهران', countrySlug: 'iran', lat: 35.6892, lng: 51.3890 },
  { slug: 'isfahan', slugAr: 'اصفهان', nameEn: 'Isfahan', nameAr: 'أصفهان', countrySlug: 'iran', lat: 32.6546, lng: 51.6680 },
  { slug: 'mashhad', slugAr: 'مشهد', nameEn: 'Mashhad', nameAr: 'مشهد', countrySlug: 'iran', lat: 36.2605, lng: 59.6168 },
  // Nigeria
  { slug: 'lagos', slugAr: 'لاغوس', nameEn: 'Lagos', nameAr: 'لاغوس', countrySlug: 'nigeria', lat: 6.5244, lng: 3.3792 },
  { slug: 'abuja', slugAr: 'ابوجا', nameEn: 'Abuja', nameAr: 'أبوجا', countrySlug: 'nigeria', lat: 9.0579, lng: 7.4951 },
  { slug: 'kano', slugAr: 'كانو', nameEn: 'Kano', nameAr: 'كانو', countrySlug: 'nigeria', lat: 12.0022, lng: 8.5920 },
  // Somalia
  { slug: 'mogadishu', slugAr: 'مقديشو', nameEn: 'Mogadishu', nameAr: 'مقديشو', countrySlug: 'somalia', lat: 2.0469, lng: 45.3182 },
  // Senegal
  { slug: 'dakar', slugAr: 'داكار', nameEn: 'Dakar', nameAr: 'داكار', countrySlug: 'senegal', lat: 14.7167, lng: -17.4677 },
  // Ethiopia
  { slug: 'addis-ababa', slugAr: 'اديس-ابابا', nameEn: 'Addis Ababa', nameAr: 'أديس أبابا', countrySlug: 'ethiopia', lat: 9.0250, lng: 38.7469 },
  // Tanzania
  { slug: 'dar-es-salaam', slugAr: 'دار-السلام', nameEn: 'Dar es Salaam', nameAr: 'دار السلام', countrySlug: 'tanzania', lat: -6.7924, lng: 39.2083 },
  // Kenya
  { slug: 'nairobi', slugAr: 'نيروبي', nameEn: 'Nairobi', nameAr: 'نيروبي', countrySlug: 'kenya', lat: -1.2921, lng: 36.8219 },
  { slug: 'mombasa', slugAr: 'ممباسا', nameEn: 'Mombasa', nameAr: 'ممباسا', countrySlug: 'kenya', lat: -4.0435, lng: 39.6682 },
  // UK
  { slug: 'london', slugAr: 'لندن', nameEn: 'London', nameAr: 'لندن', countrySlug: 'united-kingdom', lat: 51.5074, lng: -0.1278 },
  { slug: 'birmingham', slugAr: 'برمنغهام', nameEn: 'Birmingham', nameAr: 'برمنغهام', countrySlug: 'united-kingdom', lat: 52.4862, lng: -1.8904 },
  { slug: 'manchester', slugAr: 'مانشستر', nameEn: 'Manchester', nameAr: 'مانشستر', countrySlug: 'united-kingdom', lat: 53.4808, lng: -2.2426 },
  // Germany
  { slug: 'berlin', slugAr: 'برلين', nameEn: 'Berlin', nameAr: 'برلين', countrySlug: 'germany', lat: 52.5200, lng: 13.4050 },
  { slug: 'munich', slugAr: 'ميونخ', nameEn: 'Munich', nameAr: 'ميونخ', countrySlug: 'germany', lat: 48.1351, lng: 11.5820 },
  { slug: 'frankfurt', slugAr: 'فرانكفورت', nameEn: 'Frankfurt', nameAr: 'فرانكفورت', countrySlug: 'germany', lat: 50.1109, lng: 8.6821 },
  // France
  { slug: 'paris', slugAr: 'باريس', nameEn: 'Paris', nameAr: 'باريس', countrySlug: 'france', lat: 48.8566, lng: 2.3522 },
  { slug: 'marseille', slugAr: 'مارسيليا', nameEn: 'Marseille', nameAr: 'مارسيليا', countrySlug: 'france', lat: 43.2965, lng: 5.3698 },
  { slug: 'lyon', slugAr: 'ليون', nameEn: 'Lyon', nameAr: 'ليون', countrySlug: 'france', lat: 45.7640, lng: 4.8357 },
  // Netherlands
  { slug: 'amsterdam', slugAr: 'امستردام', nameEn: 'Amsterdam', nameAr: 'أمستردام', countrySlug: 'netherlands', lat: 52.3676, lng: 4.9041 },
  { slug: 'rotterdam', slugAr: 'روتردام', nameEn: 'Rotterdam', nameAr: 'روتردام', countrySlug: 'netherlands', lat: 51.9244, lng: 4.4777 },
  // Sweden
  { slug: 'stockholm', slugAr: 'ستوكهولم', nameEn: 'Stockholm', nameAr: 'ستوكهولم', countrySlug: 'sweden', lat: 59.3293, lng: 18.0686 },
  { slug: 'malmo', slugAr: 'مالمو', nameEn: 'Malmö', nameAr: 'مالمو', countrySlug: 'sweden', lat: 55.6050, lng: 13.0038 },
  // Spain
  { slug: 'madrid', slugAr: 'مدريد', nameEn: 'Madrid', nameAr: 'مدريد', countrySlug: 'spain', lat: 40.4168, lng: -3.7038 },
  { slug: 'barcelona', slugAr: 'برشلونة', nameEn: 'Barcelona', nameAr: 'برشلونة', countrySlug: 'spain', lat: 41.3874, lng: 2.1686 },
  // Italy
  { slug: 'rome', slugAr: 'روما', nameEn: 'Rome', nameAr: 'روما', countrySlug: 'italy', lat: 41.9028, lng: 12.4964 },
  { slug: 'milan', slugAr: 'ميلان', nameEn: 'Milan', nameAr: 'ميلان', countrySlug: 'italy', lat: 45.4642, lng: 9.1900 },
  // Belgium
  { slug: 'brussels', slugAr: 'بروكسل', nameEn: 'Brussels', nameAr: 'بروكسل', countrySlug: 'belgium', lat: 50.8503, lng: 4.3517 },
  // Austria
  { slug: 'vienna', slugAr: 'فيينا', nameEn: 'Vienna', nameAr: 'فيينا', countrySlug: 'austria', lat: 48.2082, lng: 16.3738 },
  // USA
  { slug: 'new-york', slugAr: 'نيويورك', nameEn: 'New York', nameAr: 'نيويورك', countrySlug: 'united-states', lat: 40.7128, lng: -74.0060 },
  { slug: 'los-angeles', slugAr: 'لوس-انجلوس', nameEn: 'Los Angeles', nameAr: 'لوس أنجلوس', countrySlug: 'united-states', lat: 34.0522, lng: -118.2437 },
  { slug: 'chicago', slugAr: 'شيكاغو', nameEn: 'Chicago', nameAr: 'شيكاغو', countrySlug: 'united-states', lat: 41.8781, lng: -87.6298 },
  { slug: 'houston', slugAr: 'هيوستن', nameEn: 'Houston', nameAr: 'هيوستن', countrySlug: 'united-states', lat: 29.7604, lng: -95.3698 },
  { slug: 'dearborn', slugAr: 'ديربورن', nameEn: 'Dearborn', nameAr: 'ديربورن', countrySlug: 'united-states', lat: 42.3223, lng: -83.1763 },
  // Canada
  { slug: 'toronto', slugAr: 'تورنتو', nameEn: 'Toronto', nameAr: 'تورنتو', countrySlug: 'canada', lat: 43.6532, lng: -79.3832 },
  { slug: 'montreal', slugAr: 'مونتريال', nameEn: 'Montreal', nameAr: 'مونتريال', countrySlug: 'canada', lat: 45.5017, lng: -73.5673 },
  { slug: 'vancouver', slugAr: 'فانكوفر', nameEn: 'Vancouver', nameAr: 'فانكوفر', countrySlug: 'canada', lat: 49.2827, lng: -123.1207 },
  // Brazil
  { slug: 'sao-paulo', slugAr: 'ساو-باولو', nameEn: 'São Paulo', nameAr: 'ساو باولو', countrySlug: 'brazil', lat: -23.5505, lng: -46.6333 },
  // Argentina
  { slug: 'buenos-aires', slugAr: 'بوينس-ايرس', nameEn: 'Buenos Aires', nameAr: 'بوينس آيرس', countrySlug: 'argentina', lat: -34.6037, lng: -58.3816 },
  // Uzbekistan
  { slug: 'tashkent', slugAr: 'طشقند', nameEn: 'Tashkent', nameAr: 'طشقند', countrySlug: 'uzbekistan', lat: 41.2995, lng: 69.2401 },
  // Kazakhstan
  { slug: 'almaty', slugAr: 'الماتي', nameEn: 'Almaty', nameAr: 'ألماتي', countrySlug: 'kazakhstan', lat: 43.2220, lng: 76.8512 },
  // Australia
  { slug: 'sydney', slugAr: 'سيدني', nameEn: 'Sydney', nameAr: 'سيدني', countrySlug: 'australia', lat: -33.8688, lng: 151.2093 },
  { slug: 'melbourne', slugAr: 'ملبورن', nameEn: 'Melbourne', nameAr: 'ملبورن', countrySlug: 'australia', lat: -37.8136, lng: 144.9631 },
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
  const popular = ['makkah', 'madinah', 'riyadh', 'dubai', 'cairo', 'istanbul', 'london', 'doha', 'kuwait-city', 'amman', 'jerusalem', 'jakarta', 'kuala-lumpur', 'karachi', 'casablanca', 'paris'];
  return popular.map(s => globalCities.find(c => c.slug === s)!).filter(Boolean);
}
