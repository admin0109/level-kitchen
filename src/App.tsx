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
    <div className="bg-slate-950 font-sans text-slate-100 selection:bg-amber-500/30 antialiased min-h-screen">
      {/* 1. Header Navigation Panel */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-300 text-slate-950 font-black text-lg shadow-lg shadow-amber-500/20">
              LK
            </div>
            <div>
              <p className="text-lg font-display font-black tracking-tight text-white">Level <span className="text-amber-300">Kitchen</span></p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Sog‘lom ovqatlanish</p>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#programs-section" className="hover:text-white transition-colors">Ratsionlar</a>
            <a href="#calculator-section" className="hover:text-white transition-colors">Kalkulyator</a>
            <a href="#testimonials-section" className="hover:text-white transition-colors">Fikrlar</a>
            <a href="#faq-section" className="hover:text-white transition-colors">Savollar</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+998712000202"
              className="hidden lg:inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 hover:bg-slate-800 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" /> +998 71 200-02-02
            </a>
            <button
              onClick={() => handleOrderNow(activeProgram)}
              className="rounded-2xl bg-amber-300 px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-200 transition"
            >
              Buyurtma
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO PART */}
      <section className="relative overflow-hidden pb-24 pt-12" id="hero-section">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-amber-500/15 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/85 px-4 py-2 text-xs uppercase tracking-[0.24em] text-amber-300 font-semibold">
                <Sparkles className="w-4 h-4" /> Premium kutishsiz ratsionlar
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-tight text-white">
                Endi <span className="text-amber-300">sog‘lom ovqat</span> har kuni siz bilan.
              </h1>
              <p className="max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
                Level Kitchen o‘ziga xos balanslangan ratsionlar, tez yetkazib berish va fitnesga mos menyu bilan sizni kundalik energiya bilan boyitadi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#programs-section"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-7 py-3 text-sm font-bold uppercase tracking-[0.15em] text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-200"
                >
                  Ratsionlar
                </a>
                <a
                  href="#calculator-section"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-200 transition hover:border-amber-300 hover:text-white"
                >
                  Kalkulyator
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-5 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Tabiiy</p>
                  <p className="mt-3 text-2xl font-bold text-white">100% mahsulot</p>
                </div>
                <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-5 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Menyu</p>
                  <p className="mt-3 text-2xl font-bold text-white">75+ retsept</p>
                </div>
                <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-5 shadow-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Yetkazish</p>
                  <p className="mt-3 text-2xl font-bold text-white">06:00 - 10:00</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-amber-300/20 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">Tanlangan ratsion</p>
                    <h2 className="mt-2 text-3xl font-black text-white">{activeProgram.name}</h2>
                  </div>
                  <span className="rounded-2xl bg-slate-950/80 px-4 py-2 text-sm font-semibold text-slate-200 border border-slate-800">{activeProgram.kcalRange}</span>
                </div>

                <img
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] rounded-[2rem] object-cover border border-slate-800"
                />

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                  <div className="rounded-3xl bg-slate-950/90 p-4 border border-slate-800 text-center">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Narxi</p>
                    <p className="mt-2 text-xl font-bold text-white">{activeProgram.pricePerDay.toLocaleString('uz-UZ')} UZS</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-4 border border-slate-800 text-center">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Yetkazish</p>
                    <p className="mt-2 text-xl font-bold text-white">Har kuni</p>
                  </div>
                </div>

                <div className="mt-6 rounded-[2rem] bg-slate-800/80 p-5 border border-slate-700">
                  <div className="flex justify-between text-xs uppercase tracking-[0.25em] text-slate-500 mb-4">
                    <span>Oqsil</span>
                    <span>Yog‘</span>
                    <span>Uglevod</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-3xl bg-slate-950/90 p-3">{activeProgram.macros.protein}g</div>
                    <div className="rounded-3xl bg-slate-950/90 p-3">{activeProgram.macros.fat}g</div>
                    <div className="rounded-3xl bg-slate-950/90 p-3">{activeProgram.macros.carbs}g</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] rounded-[2rem] border border-amber-400/20 bg-amber-400/10 p-4 text-center text-sm text-amber-100 shadow-xl shadow-amber-500/20">
                <strong>Mutaxassis dietologlar tomonidan boshqariladigan menyu.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMS DESCRIPTION SECTION */}
      <section className="py-24 bg-slate-900" id="programs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-amber-300 font-bold">Ratsionlar</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-black text-white tracking-tight">Maqsadingizga mos dastur tanlang</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-base leading-relaxed">
              Sizning energiya sarfingizga mos ravishda tuzilgan 3 ta ratsion, har biri o‘zgacha taomlarni taqdim etadi.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="space-y-4">
              {programsData.map((prog) => (
                <button
                  key={prog.id}
                  type="button"
                  id={`program-tab-${prog.id}`}
                  onClick={() => setSelectedProgramId(prog.id)}
                  className={`w-full rounded-[2rem] border p-6 text-left transition-all ${
                    selectedProgramId === prog.id
                      ? 'border-amber-300/40 bg-slate-800 text-white shadow-2xl'
                      : 'border-slate-800 bg-slate-950/70 text-slate-300 hover:border-amber-300/20 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80 font-semibold">{prog.kcalRange}</p>
                      <h3 className="mt-3 text-xl font-bold">{prog.name}</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-amber-300" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{prog.description}</p>
                </button>
              ))}
            </div>

            <div className="rounded-[2.5rem] border border-slate-800 bg-slate-950/90 p-8 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] items-start">
                <div className="rounded-[2rem] overflow-hidden border border-slate-800 bg-slate-900">
                  <img
                    src={activeProgram.image}
                    alt={activeProgram.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-full bg-amber-300/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-200">{activeProgram.kcalRange}</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300 border border-slate-700">
                      <Award className="w-4 h-4 text-amber-300" /> Dietologlar tavsiyasi
                    </span>
                  </div>
                  <h3 className="text-3xl font-display font-black text-white">{activeProgram.heading}</h3>
                  <p className="text-slate-400 leading-relaxed">{activeProgram.description}</p>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-[1.5rem] bg-slate-900/90 p-4 border border-slate-800 text-center">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/80">Oqsil</p>
                      <p className="mt-2 text-2xl font-bold text-white">{activeProgram.macros.protein}g</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-slate-900/90 p-4 border border-slate-800 text-center">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/80">Yog‘</p>
                      <p className="mt-2 text-2xl font-bold text-white">{activeProgram.macros.fat}g</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-slate-900/90 p-4 border border-slate-800 text-center">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-amber-300/80">Uglevod</p>
                      <p className="mt-2 text-2xl font-bold text-white">{activeProgram.macros.carbs}g</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                {activeProgram.meals.map((meal) => (
                  <div key={meal.id} className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-5 text-slate-300">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">{meal.type}</p>
                        <p className="mt-2 text-sm font-semibold text-white">{meal.name}</p>
                      </div>
                      <span className="text-sm font-bold text-amber-300">{meal.kcal} kcal</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Kunlik narx</p>
                  <p className="mt-2 text-3xl font-black text-white font-mono">{activeProgram.pricePerDay.toLocaleString('uz-UZ')} UZS</p>
                </div>
                <button
                  type="button"
                  id={`active-order-trigger-${activeProgram.id}`}
                  onClick={() => handleOrderNow(activeProgram)}
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-slate-950 shadow-xl shadow-amber-500/20 hover:bg-amber-200 transition"
                >
                  Buyurtma berish
                </button>
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
