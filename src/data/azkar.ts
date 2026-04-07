export interface Dhikr {
  id: number;
  arabic: string;
  translation: string;
  transliteration: string;
  count: number;
  category: 'morning' | 'evening' | 'afterPrayer' | 'sleep';
}

export const azkarData: Dhikr[] = [
  {
    id: 1,
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    translation: 'We have reached the morning and at this very time the whole kingdom belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah alone.',
    transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la shareeka lah",
    count: 1,
    category: 'morning',
  },
  {
    id: 2,
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
    translation: 'O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die and unto You is our resurrection.',
    transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namootu, wa ilaykan-nushoor",
    count: 1,
    category: 'morning',
  },
  {
    id: 3,
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    translation: 'Glory is to Allah and praise is to Him.',
    transliteration: "SubhanAllahi wa bihamdihi",
    count: 100,
    category: 'morning',
  },
  {
    id: 4,
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    translation: 'None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
    transliteration: "La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa ala kulli shayin Qadeer",
    count: 10,
    category: 'morning',
  },
  {
    id: 5,
    arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    translation: 'We have reached the evening and at this very time the whole kingdom belongs to Allah. All praise is for Allah. None has the right to be worshipped except Allah alone.',
    transliteration: "Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la shareeka lah",
    count: 1,
    category: 'evening',
  },
  {
    id: 6,
    arabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ',
    translation: 'O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning, by Your leave we live and die and unto You is our return.',
    transliteration: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namootu, wa ilaykal-maseer",
    count: 1,
    category: 'evening',
  },
  {
    id: 7,
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    translation: 'I seek forgiveness from Allah.',
    transliteration: "Astaghfirullah",
    count: 3,
    category: 'afterPrayer',
  },
  {
    id: 8,
    arabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    translation: 'O Allah, You are Peace and from You is peace. Blessed are You, O Possessor of Majesty and Honor.',
    transliteration: "Allahumma antas-salam wa minkas-salam tabarakta ya dhal-jalali wal-ikram",
    count: 1,
    category: 'afterPrayer',
  },
  {
    id: 9,
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    translation: 'In Your name O Allah, I die and I live.',
    transliteration: "Bismika Allahumma amootu wa ahya",
    count: 1,
    category: 'sleep',
  },
  {
    id: 10,
    arabic: 'سُبْحَانَ اللَّهِ',
    translation: 'Glory is to Allah.',
    transliteration: "SubhanAllah",
    count: 33,
    category: 'afterPrayer',
  },
];
