/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Testimonial, FAQ } from './types';

export const programsData: Program[] = [
  {
    id: 'light',
    name: 'Light Dasturi',
    heading: 'Yengillik va Chiroy',
    kcalRange: '1000 - 1200 Kkal',
    kcalValue: 1100,
    pricePerDay: 135000,
    targetAudience: 'Chiroyli qomat, faol va tezkor vazn yo’qotish hamda yengillik hissini istaydiganlar uchun.',
    description: 'Ortiqcha kuch sarflamasdan, och qolmasdan va metabolizmni buzmasdan xavfsiz ozish uchun ideal yechim. Kundalik ratsioningiz eng yengil va vitaminlarga boy antioksidant taomlardan iborat bo’ladi.',
    image: '/src/assets/images/light_meal_1782047073461.jpg',
    macros: {
      protein: 75,
      fat: 40,
      carbs: 110
    },
    meals: [
      { id: 'l1', name: 'Ziravorli tovuq ko‘kragi va zaytun yog‘i qo‘shilgan yashil salat', type: 'Ertalabki', kcal: 280 },
      { id: 'l2', name: 'Sabzavotli pyure va ismaloqli yengil krem-sho‘rva', type: 'Tushlik', kcal: 340 },
      { id: 'l3', name: 'Zirk va ko‘katlar qo‘shilgan kam yog‘li tvorogli keks', type: 'Ikkinchi tushlik', kcal: 180 },
      { id: 'l4', name: 'Bug‘da pishirilgan qunduz balig‘i filesi va zaytunli qushqo‘nmas', type: 'Kechki', kcal: 300 }
    ]
  },
  {
    id: 'balance',
    name: 'Balance Dasturi',
    heading: 'Faollik va Balans',
    kcalRange: '1500 - 1800 Kkal',
    kcalValue: 1650,
    pricePerDay: 155000,
    targetAudience: 'Ofis xodimlari, faol hayot tarzini olib boradiganlar va sog’lom hayot balansini qo’llab-quvvatlashni xohlovchilar uchun.',
    description: 'Kun davomida barqaror energiya va yuqori mahsuldorlikni kafolatlovchi universal dastur. Kuchli immunitet, yorqin teri va mukammal kayfiyat uchun barcha kerakli elementlar uyg’unlashgan.',
    image: '/src/assets/images/balance_meal_1782047095690.jpg',
    macros: {
      protein: 105,
      fat: 55,
      carbs: 185
    },
    meals: [
      { id: 'b1', name: 'Asal va yong‘oqlar bilan bezatilgan suli bo‘tqasi hamda yangi rezavorlar', type: 'Ertalabki', kcal: 380 },
      { id: 'b2', name: 'Qizil losos balig‘i, jigarrang yovvoyi guruch va bug‘langan brokoli', type: 'Tushlik', kcal: 540 },
      { id: 'b3', name: 'Chia urug‘lari va tabiiy meva sharbati bilan bezatilgan yengil yogurt pudingi', type: 'Ikkinchi tushlik', kcal: 220 },
      { id: 'b4', name: 'Sutli sousdagi kurka go‘shtidan bifshteks va kinoa garniri', type: 'Kechki', kcal: 460 }
    ]
  },
  {
    id: 'power',
    name: 'Power Dasturi',
    heading: 'Kuch va Mushaklar',
    kcalRange: '2000 - 2500 Kkal',
    kcalValue: 2250,
    pricePerDay: 180000,
    targetAudience: 'Sportchilar, intensiv jismoniy mehnat qiladiganlar va sifatli mushak massasini oshirishni ko’zlaganlar uchun.',
    description: 'Yuqori oqsilli, energiya beruvchi va mushaklarni tezkor tiklovchi kuchli ratsion. Mashg’ulotlarda yangi marralarni zabt etishingiz va doim tonusda bo‘lishingiz uchun to’liq yo’riqnomali quvvat manbai.',
    image: '/src/assets/images/power_meal_1782047119540.jpg',
    macros: {
      protein: 150,
      fat: 75,
      carbs: 240
    },
    meals: [
      { id: 'p1', name: 'Ismaloq, parmesan va kurka filesi bilan pishirilgan 3 tuxumli quymoq', type: 'Ertalabki', kcal: 510 },
      { id: 'p2', name: 'Pechda tayyorlangan mol go‘shti filesi, rukkola va panjaradagi batat (shirin kartoshka)', type: 'Tushlik', kcal: 690 },
      { id: 'p3', name: 'Xurmo va bodom pastasi qo‘shilgan proteinli fitnes-sheyk', type: 'Ikkinchi tushlik', kcal: 360 },
      { id: 'p4', name: 'Tovuq filesidan wok, yashil loviya, sabzi va bulg‘or qalampiri bilan', type: 'Kechki', kcal: 580 }
    ]
  }
];

export const advantagesData = [
  {
    id: 1,
    title: 'Mutloq Sifat va Tabiiylik',
    metric: '100%',
    sub: 'Hech qanday shakar va konservantlarsiz',
    description: 'Biz faqat yangi, sertifikatlangan va sinchkovlik bilan saralangan mahsulotlardan foydalanamiz. Taomlarimizda shakar, sun’iy konservantlar va zararli qo’shimchalar mutlaqo yo’q.'
  },
  {
    id: 2,
    title: 'Vaqtingiz va Kuchingizni Tejang',
    metric: '15+ soat',
    sub: 'Haftasiga oshxonadagi vaqtni tejash',
    description: 'Do’konlarda navbatda turish, sabzavot tozalash va idish yuvish bilan xayrlashing! Haftasiga kamida 15 soat vaqtingiz tejaladi — uni o’zingizga va yaqinlaringizga bag’ishlang.'
  },
  {
    id: 3,
    title: 'Mukammal Balans (O-Y-U)',
    metric: '1/3/4 ratio',
    sub: 'Professional dietolog nazorati',
    description: 'Har bir taom professional dietologlar tomonidan mikronutrientlargacha hisoblangan. Maqsadingiz ozish, vazn saqlash yoki kuch yig’ish bo’lishidan qat’i nazar, barcha malumotlar tayyor etiketkada taqdim etiladi.'
  },
  {
    id: 4,
    title: 'Restoran Darajasidagi Ta’m',
    metric: '75+ xil',
    sub: 'Takrorlanmas va o‘zgaruvchan taomlar',
    description: 'Sog’lom ovqatlanish zerikarli va ta’msiz deb o‘ylaysizmi? Biz buni mutlaqo rad etamiz! Turli xildagi yangi ziravorlar va mualliflik retseptlari yordamida parhezlarni gastronomik sayohatga aylantiramiz.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Malika Karimova',
    role: 'Marketolog',
    comment: 'Level Kitchen hayotimni mutlaqo o‘zgartirdi! Uyda ovqat pishirishga umuman vaqtim yo‘q edi, doimiy fastfudlardan oshqozonim og‘rirdi. Light dasturi bilan 1.5 oyda xavfsiz 6 kg yo‘qotdim. Eng asosiysi, taomlar juda mazali va har doim yangi!',
    program: 'Light Dasturi',
    achievement: '-6 kg vazn yo‘qotildi',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sardor Qodirov',
    role: 'IT Dasturchi',
    comment: 'Kuniga 10 soat kompyuter qarshisida o‘tiraman. Balance dasturini tanladim va endi tushlikka nima buyurtma qilishni o‘ylamayman. Avvallari tushlikdan keyin uyqu tortardi, hozir esa energiya portlashini his qilyapman. Tavsiya qilaman!',
    program: 'Balance Dasturi',
    achievement: 'Barqaror energiya va to‘g‘ri ovqatlanish',
    rating: 5
  },
  {
    id: 't3',
    name: 'Umid Alimov',
    role: 'Fitnes Trener',
    comment: 'Mijozlarimga doim to‘g‘ri ovqatlanishni tavsiya qilaman, lekin o‘zim ham ko‘p vaqt yo‘qotardim. Power ratsioni mening barcha ehtiyojlarimni qoplaydi: oqsil miqdori juda baland va kaloriyalar aniq hisoblangan. Professional darajadagi xizmat.',
    program: 'Power Dasturi',
    achievement: '+4 kg sifatli mushak massasi',
    rating: 5
  }
];

export const faqsData: FAQ[] = [
  {
    id: 'fq1',
    question: 'Taomlar Qachon Va Qanday Yetkaziladi?',
    answer: 'Taomlarimiz har kuni yoki har ikki kunda bir marta, ertalab soat 06:00 dan 10:00 gacha bo‘lgan vaqt oralig‘ida, sizga qulay manzilga (uy yoki ishxonangizga) bepul yetkazib beriladi.'
  },
  {
    id: 'fq2',
    question: 'Men Taomlarni Qanday Saqlashim Kerak?',
    answer: 'Biz taomlarni maxsus germetik konteynerlarda yetkazib beramiz. Ularni muzlatgichda +2°C dan +6°C gacha bo‘lgan haroratda saqlashingiz tavsiya etiladi. Iste’mol qilishdan oldin mikroto‘lqinli pechda 1-2 daqiqa isitib olish kifoya.'
  },
  {
    id: 'fq3',
    question: 'Dasturni To‘xtatib Turish (Pauza) Mumkinmi?',
    answer: 'Albatta! Agar siz shahardan tashqariga chiqishingiz yoki sayohatga ketishingiz kerak bo‘lsa, shaxsiy kabinet orqali yoki operatorimizga qo‘ng‘iroq qilib, yetkazib berish xizmatini 24 soat oldin mutlaqo bepul to‘xtatib (pauzaga qo‘yib) turishingiz mumkin.'
  },
  {
    id: 'fq4',
    question: 'To‘lovlarni Qanday Amalga Oshirolaman?',
    answer: 'Siz to‘lovlarni Uzcard, Humo, Visa/Mastercard plastik kartalari orqali onlayn yoki taom birinchi marta yetkazib berilganida kuryerga naqd pul / terminal orqali to‘lashingiz mumkin.'
  }
];
