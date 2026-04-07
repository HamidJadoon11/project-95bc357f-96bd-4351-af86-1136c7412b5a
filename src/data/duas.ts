export interface Dua {
  id: number;
  arabic: string;
  translation: string;
  transliteration: string;
  category: 'dailyLife' | 'travel' | 'protection' | 'food';
  title_en: string;
  title_ar: string;
}

export const duasData: Dua[] = [
  {
    id: 1,
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    translation: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.',
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar",
    category: 'dailyLife',
    title_en: 'Dua for goodness',
    title_ar: 'دعاء للخير',
  },
  {
    id: 2,
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
    translation: 'O Allah, I seek refuge in You from anxiety and sorrow.',
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan",
    category: 'protection',
    title_en: 'Protection from anxiety',
    title_ar: 'الحماية من القلق',
  },
  {
    id: 3,
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
    translation: 'Glory to Him who has subjected this to us, and we could never have it by our efforts.',
    transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin",
    category: 'travel',
    title_en: 'Dua for travel',
    title_ar: 'دعاء السفر',
  },
  {
    id: 4,
    arabic: 'بِسْمِ اللَّهِ وَعَلَىٰ بَرَكَةِ اللَّهِ',
    translation: 'In the name of Allah and with the blessings of Allah.',
    transliteration: "Bismillahi wa ala barakatillah",
    category: 'food',
    title_en: 'Before eating',
    title_ar: 'قبل الأكل',
  },
  {
    id: 5,
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    translation: 'All praise is for Allah who fed us, gave us drink, and made us Muslims.',
    transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana Muslimeen",
    category: 'food',
    title_en: 'After eating',
    title_ar: 'بعد الأكل',
  },
  {
    id: 6,
    arabic: 'اللَّهُمَّ اكْفِنِيهِمْ بِمَا شِئْتَ',
    translation: 'O Allah, suffice me against them however You wish.',
    transliteration: "Allahummak-finihim bima shi't",
    category: 'protection',
    title_en: 'Protection from harm',
    title_ar: 'الحماية من الأذى',
  },
  {
    id: 7,
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
    translation: 'My Lord, expand for me my breast and ease for me my task.',
    transliteration: "Rabbish-rahli sadri wa yassirli amri",
    category: 'dailyLife',
    title_en: 'Dua for ease',
    title_ar: 'دعاء التيسير',
  },
  {
    id: 8,
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    translation: 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.',
    transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqeena imama",
    category: 'dailyLife',
    title_en: 'Dua for family',
    title_ar: 'دعاء للأسرة',
  },
];
