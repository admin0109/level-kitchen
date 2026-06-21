/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Leaf, 
  Clock, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  Star, 
  HelpCircle, 
  ChefHat, 
  Flame, 
  Award,
  ChevronDown,
  ShieldCheck,
  UtensilsCrossed,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { programsData, advantagesData, testimonialsData, faqsData } from './data';
import { Program } from './types';
import CalorieCalculator from './components/CalorieCalculator';
import OrderModal from './components/OrderModal';

export default function App() {
  const [selectedProgramId, setSelectedProgramId] = useState<'light' | 'balance' | 'power'>('balance');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderProgram, setOrderProgram] = useState<Program>(programsData[1]);
  const [faqOpenState, setFaqOpenState] = useState<{ [key: string]: boolean }>({
    'fq1': true // First FAQ open by default
  });

  const activeProgram = programsData.find(p => p.id === selectedProgramId) || programsData[1];

  const toggleFaq = (id: string) => {
    setFaqOpenState(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleOrderNow = (program: Program) => {
    setOrderProgram(program);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="bg-sage-100 font-sans text-sage-800 selection:bg-sage-300 antialiased min-h-screen">
      {/* 1. Header Navigation Panel */}
      <header className="sticky top-0 z-40 bg-sage-100/95 backdrop-blur-md border-b border-sage-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-sage-800 text-white rounded-xl shadow-xs">
              <Leaf className="w-5 h-5 text-sage-300" />
            </span>
            <div>
              <span className="text-xl font-display font-extrabold tracking-tight text-sage-800 flex items-center gap-1">
                Level <span className="text-sage-500 font-serif font-semibold">Kitchen</span>
              </span>
              <span className="text-[10px] text-sage-olive font-bold uppercase tracking-widest block -mt-1 font-mono">UZBEKISTAN</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-sage-olive">
            <a href="#advantages-section" className="hover:text-sage-800 transition-colors">Afzalliklarimiz</a>
            <a href="#programs-section" className="hover:text-sage-800 transition-colors">Ratsionlarimiz</a>
            <a href="#calculator-section" className="hover:text-sage-800 transition-colors">Kalkulyator</a>
            <a href="#testimonials-section" className="hover:text-sage-800 transition-colors">Mijozlar fikrlari</a>
            <a href="#faq-section" className="hover:text-sage-800 transition-colors">Ko‘p so‘raladigan savollar</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+998712000202" 
              className="hidden lg:flex items-center gap-1.5 text-xs font-mono font-bold text-sage-850 bg-white px-3.5 py-2 rounded-xl border border-sage-300 hover:bg-sage-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sage-550 animate-pulse text-sage-500" /> +998 (71) 200-02-02
            </a>
            <button
              onClick={() => handleOrderNow(activeProgram)}
              className="bg-sage-800 hover:bg-sage-900 text-white text-xs sm:text-sm font-extrabold py-2.5 px-4 rounded-xl transition-all hover:shadow-sm active:scale-95 cursor-pointer"
              id="header-order-btn"
            >
              Hozir buyurtma berish
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO PART */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-sage-300" id="hero-section">
        {/* Decorative ambient elements */}
        <div className="absolute top-1/4 -left-36 w-96 h-96 bg-sage-400/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-sage-200/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text content - Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-sage-200 text-sage-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sage-550 text-sage-600" /> Premium ovqatlanish xizmati
              </div>
              
              {/* Beautiful, Literary Uzbek Headings */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-extrabold text-sage-800 tracking-tight leading-tight" id="hero-heading">
                Har kunlik ovqat tayyorlash tashvishini unuting — <span className="underline decoration-sage-500 underline-offset-4 decoration-4">Sog'lom va mazali taomlar</span> eshigingiz tagida!
              </h1>

              <p className="text-base sm:text-lg text-sage-olive leading-relaxed font-normal max-w-2xl" id="hero-description">
                Sizda ham pishirishga vaqt yetmaydimi? Har kunlik kaloriyalarni hisoblash charchatdimi? 
                <strong> Level Kitchen</strong> sizning muammoingizga mukammal yechim taklif etadi. Biz professional oshpazlar tomonidan tayyorlangan, mutaxassis dietologlar tomonidan muvozanatlashtirilgan va har kuni ertalab eshigingizgacha yetkazib beriladigan 100% tabiiy taomlar to’plamini taqdim etamiz. Sog'lom ovqatlanish endi qiyin emas, balki haqiqiy zavqdir!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#programs-section"
                  className="bg-sage-800 hover:bg-sage-900 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-xs transition-all text-center text-sm md:text-base cursor-pointer hover:-translate-y-0.5"
                  id="hero-see-programs-btn"
                >
                  Ratsionlarni tanlash
                </a>
                <a
                  href="#calculator-section"
                  className="bg-white hover:bg-sage-50 border border-sage-300 text-sage-800 font-bold py-3.5 px-6 rounded-2xl shadow-xs transition-all text-center text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer"
                  id="hero-use-calculator-btn"
                >
                  <Sliders className="w-4 h-4 text-sage-500" /> Kunlik kkalni hisoblash
                </a>
              </div>

              {/* Instant Social / Quality Proof Lines */}
              <div className="grid grid-cols-3 gap-4 pt-6 md:pt-8 border-t border-sage-300">
                <div>
                  <div className="text-xl md:text-2xl font-display font-black text-sage-800">100%</div>
                  <div className="text-xs text-sage-olive font-medium">Tabiiy mahsulotlar</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-black text-sage-800">75+ xil</div>
                  <div className="text-xs text-sage-olive font-medium">Mualliflik menyusi</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-black text-sage-800">0% kkal</div>
                  <div className="text-xs text-sage-olive font-medium">Yashirin qo'shimchalar</div>
                </div>
              </div>
            </div>

            {/* Visual banner column - Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Visual shadow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sage-800/10 to-sage-400/20 rounded-3xl rotate-3 blur-md scale-98 -z-10 opacity-30" />
                
                {/* Elite interactive showcase container */}
                <div className="bg-white p-4 sm:p-5 rounded-3xl border border-sage-200 shadow-sm relative">
                  <div className="absolute top-3 right-3 bg-sage-800 text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase font-mono tracking-widest z-10">
                    Sog'lom hayot
                  </div>
                  <img
                    src={activeProgram.image}
                    alt={activeProgram.name}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-4/3 object-cover rounded-2xl"
                    id="hero-showcase-image"
                  />
                  <div className="mt-4 pt-3 border-t border-sage-200 flex justify-between items-center bg-white">
                    <div>
                      <span className="text-[10px] uppercase text-sage-olive font-bold tracking-wider">Tanlangan ratsion</span>
                      <h4 className="font-display font-extrabold text-sage-800 text-base">{activeProgram.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-sage-olive block font-medium">Kuniga faqat</span>
                      <span className="text-sm font-black text-sage-800 font-mono">
                        {activeProgram.pricePerDay.toLocaleString('uz-UZ')} UZS
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro Floater 1: Delivery badge */}
                <div className="absolute -bottom-6 -left-4 bg-white border border-sage-200 p-3 rounded-2xl shadow-sm flex items-center gap-2.5 max-w-xs">
                  <span className="p-2 bg-sage-100 text-sage-800 rounded-xl">
                    <Clock className="w-5 h-5 text-sage-500" />
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-sage-800">Har kuni bepul yetkazish</h5>
                    <p className="text-[10px] text-sage-olive font-medium">06:00 - 10:00 oralig'ida</p>
                  </div>
                </div>

                {/* Micro Floater 2: Calorie count */}
                <div className="absolute -top-5 -right-3 bg-sage-800 text-white p-3 rounded-2xl shadow-sm flex items-center gap-2">
                  <span className="p-1.5 bg-sage-500 text-white rounded-lg">
                    <Flame className="w-4 h-4 fill-white text-white" />
                  </span>
                  <div>
                    <span className="text-[10px] text-sage-300 block -mb-0.5 uppercase tracking-widest">Muvozanatli</span>
                    <span className="text-xs font-mono font-bold text-white">{activeProgram.kcalRange}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ADVANTAGES SECTION */}
      <section className="py-20 bg-sage-200 border-b border-sage-300" id="advantages-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sage-800 bg-sage-100 px-3 py-1 rounded-full">
              Afzalliklarimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-sage-800 mt-3 tracking-tight">
              Nima uchun aynan Level Kitchen?
            </h2>
            <div className="w-16 h-1 bg-sage-505 bg-sage-500 mx-auto mt-4 rounded-full" />
            <p className="text-sage-olive mt-3 text-sm md:text-base max-w-xl mx-auto">
              Sizga eng shirin, eng toza va maksimal hayotiy foyda beruvchi ovqatlarni tekin kuryerlik orqali ko'rsatamiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantagesData.map((adv) => (
              <div 
                key={adv.id} 
                className="bg-sage-50 rounded-3xl border border-sage-300 p-6 md:p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
                id={`advantage-${adv.id}-card`}
              >
                {/* Tiny design accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-sage-400 group-hover:bg-sage-600 transition-colors" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-display font-extrabold text-sage-800 font-mono tracking-tight bg-white px-2.5 py-1 rounded-xl border border-sage-200">
                      {adv.metric}
                    </span>
                    <span className="text-xs font-bold text-sage-400">0{adv.id}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-sage-850 tracking-tight leading-snug">
                    {adv.title}
                  </h3>
                  
                  <p className="text-xs text-sage-olive/70 font-semibold italic -mt-2">
                    {adv.sub}
                  </p>

                  <p className="text-xs text-sage-olive leading-relaxed font-normal pt-1">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROGRAMS DESCRIPTION SECTION */}
      <section className="py-20 bg-sage-100" id="programs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sage-800 bg-white/80 border border-sage-200 px-3 py-1 rounded-full">
              Katalog
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-sage-800 mt-3 tracking-tight">
              Sizning maqsadingiz uchun maxsus ishlab chiqilgan dasturlar
            </h2>
            <div className="w-16 h-1 bg-sage-500 mx-auto mt-4 rounded-full" />
            <p className="text-sage-olive mt-3 text-sm md:text-base max-w-xl mx-auto">
              Har bir inson qomati va tana tuzilishi har xil. Dietologlarimiz yordamida o‘zingizga mukammal dasturni tanlang.
            </p>
          </div>

          {/* Core horizontal switcher and selector program tabs */}
          <div className="flex justify-center p-1 bg-sage-200 max-w-lg mx-auto rounded-2xl mb-12 border border-sage-300">
            {programsData.map((prog) => (
              <button
                key={prog.id}
                type="button"
                id={`program-tab-${prog.id}`}
                onClick={() => setSelectedProgramId(prog.id)}
                className={`flex-1 py-3 text-center rounded-xl transition-all font-display font-bold text-xs sm:text-sm tracking-wide cursor-pointer ${
                  selectedProgramId === prog.id
                    ? 'bg-white text-sage-800 shadow-xs border border-sage-300 transform scale-102 font-extrabold'
                    : 'text-sage-olive hover:text-sage-800 hover:bg-white/40'
                }`}
              >
                {prog.name.split(' ')[0]} <span className="text-[10.5px] font-medium block text-neutral-400 italic -mt-0.5">{prog.kcalRange.split(' ')[0]} kcal</span>
              </button>
            ))}
                  {/* Active single program spotlight display box */}
          <div className="bg-sage-50 rounded-3xl border border-sage-300 p-6 md:p-8 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Image side */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-1.5 bg-sage-200/40 rounded-3xl blur-md -z-10" />
                <img
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover rounded-2xl shadow-sm border border-sage-200"
                  id="active-program-image"
                />
                
                {/* Core macros badge box */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-sage-200 shadow-sm">
                  <div className="text-[10px] text-sage-olive font-bold uppercase tracking-widest text-center mb-1.5 border-b border-sage-100 pb-1">
                    Kunlik oziq-ovqat balansi (BJU)
                  </div>
                  <div className="grid grid-cols-3 text-center">
                    <div>
                      <span className="text-xs text-sage-olive block">Oqsil</span>
                      <strong className="text-sm text-sage-800 font-mono font-bold">{activeProgram.macros.protein}g</strong>
                    </div>
                    <div className="border-x border-sage-100">
                      <span className="text-xs text-sage-olive block">Yog'</span>
                      <strong className="text-sm text-sage-800 font-mono font-bold">{activeProgram.macros.fat}g</strong>
                    </div>
                    <div>
                      <span className="text-xs text-sage-olive block">Uglevod</span>
                      <strong className="text-sm text-sage-800 font-mono font-bold">{activeProgram.macros.carbs}g</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-sage-200 text-sage-800 text-xs font-extrabold rounded-lg tracking-wide">
                    {activeProgram.kcalRange}
                  </span>
                  <span className="px-3 py-1 bg-white border border-sage-300 text-sage-800 text-xs font-bold rounded-lg font-mono">
                    {activeProgram.name}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-black text-sage-850 tracking-tight leading-snug">
                  {activeProgram.heading}
                </h3>

                <p className="text-sm text-sage-olive leading-relaxed font-normal">
                  {activeProgram.description}
                </p>

                {/* Targeted Audiences Lists */}
                <div className="bg-white border border-sage-200 rounded-2xl p-4">
                  <h4 className="text-xs font-bold text-sage-olive uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-sage-500" /> Maqsadli Auditoriya (Kimlar uchin?):
                  </h4>
                  <p className="text-sm text-sage-800 font-medium pl-1 leading-relaxed">
                    🎯 {activeProgram.targetAudience}
                  </p>
                </div>

                {/* Show detailed meals of the active program */}
                <div>
                  <h4 className="text-xs font-bold text-sage-olive uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <UtensilsCrossed className="w-4 h-4 text-sage-500" /> Kunlik Namunaviy Taomnoma (Ertalik & Kechki):
                  </h4>
                  <div className="space-y-2.5">
                    {activeProgram.meals.map((meal) => (
                      <div key={meal.id} className="bg-white border border-sage-200 p-3 rounded-xl flex justify-between items-center text-xs shadow-xs hover:border-sage-400 hover:shadow-xs transition-all">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-sage-100 text-sage-800 font-bold rounded text-[10px]">
                            {meal.type}
                          </span>
                          <span className="text-sage-800 font-semibold">{meal.name}</span>
                        </div>
                        <span className="text-sage-olive font-mono font-bold whitespace-nowrap pl-2">
                          {meal.kcal} kcal
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final ordering controls inside spotlight box */}
                <div className="border-t border-sage-200 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-xs text-sage-olive block font-medium">Barchasi ichida (1 kunlik narxi):</span>
                    <strong className="text-2xl font-display font-black text-sage-850 font-mono tracking-tight font-bold">
                      {activeProgram.pricePerDay.toLocaleString('uz-UZ')} UZS
                    </strong>
                  </div>

                  <button
                    type="button"
                    id={`active-order-trigger-${activeProgram.id}`}
                    onClick={() => handleOrderNow(activeProgram)}
                    className="w-full sm:w-auto bg-sage-800 hover:bg-sage-900 text-white font-extrabold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 text-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 active:scale-98"
                  >
                    Ushbu ratsionga buyurtma berish <ArrowRight className="w-4 h-4" />
                  </button>
                </div>       </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CALCULATOR SECTION */}
      <section className="py-20 bg-sage-200 border-b border-sage-300" id="calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalorieCalculator 
            programs={programsData} 
            onSelectProgram={(programId) => {
              const prog = programsData.find(p => p.id === programId) || programsData[1];
              setSelectedProgramId(programId);
              
              // Smooth scroll to program display
              const section = document.getElementById('programs-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-20 bg-white" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sage-800 bg-sage-100 px-3 py-1 rounded-full border border-sage-205">
              Mijozlarimiz sharhi
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-sage-800 mt-3 tracking-tight">
              Biz bilan yangi marralarni zabt etganlar
            </h2>
            <div className="w-16 h-1 bg-sage-500 mx-auto mt-4 rounded-full" />
            <p className="text-sage-olive mt-3 text-sm md:text-base max-w-xl mx-auto">
              Sizga o'xshash yuzlab insonlar har kuni Level Kitchen taomlaridan quvvat topmoqdalar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((test) => (
              <div 
                key={test.id} 
                className="bg-sage-50 rounded-2xl p-6 sm:p-8 border border-sage-200 flex flex-col justify-between hover:shadow-xs transition-all"
                id={`testimonial-${test.id}`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-sage-olive italic leading-relaxed font-normal mb-8">
                    "{test.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-sage-200">
                  <div className="w-10 h-10 rounded-full bg-sage-200 text-sage-800 flex items-center justify-center font-bold text-xs font-display border border-sage-300">
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-sage-800 font-display">
                      {test.name}
                    </h4>
                    <span className="text-[10px] text-sage-olive font-bold uppercase tracking-widest block font-mono">
                      {test.role}
                    </span>
                    <span className="inline-block mt-1.5 px-2 py-0.5 bg-white border border-sage-200 text-sage-800 rounded font-bold text-[10px]">
                      {test.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-20 bg-sage-200 border-t border-sage-300" id="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sage-800 bg-sage-100 px-3 py-1 rounded-full border border-sage-205">
              Savol-Javoblar
            </span>
            <h2 className="text-3xl font-display font-black text-sage-800 mt-3 tracking-tight">
              Tez-tez beriladigan savollar
            </h2>
            <div className="w-16 h-1 bg-sage-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqsData.map((faq) => {
              const isOpen = !!faqOpenState[faq.id];
              return (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-2xl border border-sage-250 shadow-xs overflow-hidden transition-all duration-300"
                  id={`faq-${faq.id}-wrapper`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-5 text-left font-display font-bold text-sm sm:text-base text-sage-800 hover:bg-sage-50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4.5 h-4.5 text-sage-400 group-hover:text-sage-600 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-sage-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sage-600' : ''}`} />
                  </button>

                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 border-t border-sage-150' : 'max-h-0 opacity-0'}`}>
                    <div className="p-5 text-xs sm:text-sm text-sage-olive leading-relaxed font-normal bg-sage-50/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. POWERFUL CTA KEYNOTES BANNER (CALL TO ACTION SECTION) */}
      <section className="bg-sage-900 text-white py-16 sm:py-20 relative overflow-hidden" id="cta-section">
        {/* Subtle glowing ambient green bubbles */}
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-sage-850/25 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-sage-800/25 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 relative">
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-800 border border-sage-700 text-sage-300 text-xs font-semibold rounded-full uppercase tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5" /> Ertangizni hozir kafolatlang
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            Kutishni bas qiling, bugun boshlang!
          </h2>

          <p className="text-sage-300 max-w-xl mx-auto text-sm sm:text-base">
            O'zingiz yoki yaqinlaringiz uchun mazali, mineralga to'la, eng foydali kkal ratsionlariga hoziroq buyurtma bering.
          </p>

          {/* Bullet lists requested in copywriting requirements */}
          <div className="max-w-md mx-auto text-left bg-sage-850/40 border border-sage-700/50 p-5 rounded-2xl text-xs sm:text-sm text-sage-200 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="p-1 bg-sage-800 text-sage-350 text-sage-300 rounded-lg shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <p>
                <strong>Birinchi buyurtmangizga 10% chegirmaga</strong> ega bo’ling va sog‘lom hayot sari ilk qadamni hoziroq tashlang!
              </p>
            </div>
            
            <div className="flex items-start gap-2.5">
              <span className="p-1 bg-sage-800 text-sage-350 text-sage-300 rounded-lg shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <p>
                Sog‘lom va baxtli kelajagingizni keyingi dushanbaga qoldirmang, <strong>hoziroq ratsioningizni tanlang!</strong>
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="p-1 bg-sage-800 text-sage-350 text-sage-300 rounded-lg shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <p>
                Barcha hisob-kitoblar va pishirish bizdan — <strong>sizdan faqat natigadan zavqlanish</strong> talab etiladi!
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              id="cta-bottom-order-trigger"
              onClick={() => handleOrderNow(activeProgram)}
              className="w-full sm:w-auto bg-white hover:bg-sage-100 text-sage-900 font-extrabold py-3.5 px-8 rounded-2xl transition-all shadow-md text-sm sm:text-base cursor-pointer hover:-translate-y-0.5"
            >
              Hozir rasmiylashtirish ✨
            </button>
            <a
              href="#calculator-section"
              className="w-full sm:w-auto bg-sage-800 hover:bg-sage-750 text-sage-200 border border-sage-700/80 font-bold py-3.5 px-8 rounded-2xl transition-all text-center text-sm sm:text-base cursor-pointer"
            >
              Kalkulyatorda qayta hisoblash
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-sage-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-sage-550 text-sage-400" /> Professional 24/7 telefon orqali qo'llab quvvatlash xizmati.
          </div>

        </div>
      </section>

      {/* 10. Footer info details section */}
      <footer className="bg-sage-900 text-sage-300 pt-16 pb-8 border-t border-sage-850 text-xs balance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-sage-800">
            
            {/* Logo and brief company bio info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white">
                <span className="p-1.5 bg-sage-850 rounded-lg border border-sage-700">
                  <Leaf className="w-4 h-4 text-sage-300" />
                </span>
                <span className="text-lg font-display font-extrabold text-white tracking-tight">
                  Level <span className="text-sage-300 font-serif font-normal">Kitchen</span>
                </span>
              </div>
              <p className="text-sage-400/80 leading-relaxed">
                Toshkentda professional darajadagi eng toza va muvozanatlashtirilgan fitnes hamda salomatlik parhez taomlarini yetkazish brendi.
              </p>
            </div>

            {/* Program selection fast-links */}
            <div>
              <h4 className="text-white font-serif font-bold mb-3 uppercase tracking-wider text-[11px]">Ratsionlar parhezlari</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setSelectedProgramId('light')} className="hover:text-white transition-colors cursor-pointer text-left">Light ratsioni (1000 - 1200 kcal)</button></li>
                <li><button onClick={() => setSelectedProgramId('balance')} className="hover:text-white transition-colors cursor-pointer text-left">Balance ratsioni (1500 - 1800 kcal)</button></li>
                <li><button onClick={() => setSelectedProgramId('power')} className="hover:text-white transition-colors cursor-pointer text-left">Power ratsioni (2000 - 2500 kcal)</button></li>
              </ul>
            </div>

            {/* Quick contact numbers */}
            <div>
              <h4 className="text-white font-serif font-bold mb-3 uppercase tracking-wider text-[11px]">Aloqa markazi</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-1.5 text-sage-200 font-mono">
                  <Phone className="w-3.5 h-3.5 text-sage-400" /> +998 (71) 200-02-02
                </li>
                <li className="text-sage-400/80">
                  Biz har kuni soat 08:00 dan 21:00 gacha qo'ng'iroqlarni qabul qilamiz.
                </li>
              </ul>
            </div>

            {/* Head office location & legal credentials, satisfies no-tech larp literal humans */}
            <div>
              <h4 className="text-white font-serif font-bold mb-3 uppercase tracking-wider text-[11px]">Kompaniya ma’lumotlari</h4>
              <ul className="space-y-2 text-sage-400/80 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-sage-400 shrink-0" />
                  <span>O'zbekiston, Toshkent sh., Chilonzor tumani, Lutfiy ko'chasi, 24-bino</span>
                </li>
                <li>
                  "Level Kitchen Healthy Food LLC" MChJ.
                </li>
              </ul>
            </div>

          </div>

          {/* Final credentials row */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sage-500 font-mono text-[10.5px]">
            <p>© 2026 Level Kitchen UZ. Barcha huquqlar himoyalangan.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sage-300 transition-colors">Yordam</a>
              <a href="#" className="hover:text-sage-300 transition-colors">Foydalanish shartlari</a>
              <a href="#" className="hover:text-sage-300 transition-colors">Maxfiylik siyosati</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 11. Custom Order Checkout Modal */}
      <OrderModal 
        program={orderProgram} 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </div>
  );
}
