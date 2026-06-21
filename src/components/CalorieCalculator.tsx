/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, User, Accessibility, Compass, Heart } from 'lucide-react';
import { Program } from '../types';

interface CalorieCalculatorProps {
  programs: Program[];
  onSelectProgram: (programId: 'light' | 'balance' | 'power') => void;
}

export default function CalorieCalculator({ programs, onSelectProgram }: CalorieCalculatorProps) {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(172);
  const [age, setAge] = useState<number>(28);
  const [activity, setActivity] = useState<number>(1.375); // Light
  const [goal, setGoal] = useState<'lose' | 'maintain' | 'gain'>('maintain');
  
  const [calculatedCalories, setCalculatedCalories] = useState<number>(2000);
  const [suggestedProgram, setSuggestedProgram] = useState<Program>(programs[1]); // Default Balance

  useEffect(() => {
    // Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    let dailyNeed = bmr * activity;

    // Adjust for goal
    if (goal === 'lose') {
      dailyNeed -= 350;
    } else if (goal === 'gain') {
      dailyNeed += 400;
    }

    const roundedCalories = Math.round(dailyNeed);
    setCalculatedCalories(roundedCalories);

    // Dynamic Suggestion logic
    if (roundedCalories < 1350) {
      setSuggestedProgram(programs.find(p => p.id === 'light') || programs[0]);
    } else if (roundedCalories >= 1350 && roundedCalories < 1900) {
      setSuggestedProgram(programs.find(p => p.id === 'balance') || programs[1]);
    } else {
      setSuggestedProgram(programs.find(p => p.id === 'power') || programs[2]);
    }
  }, [gender, weight, height, age, activity, goal, programs]);

  const activityOptions = [
    { label: 'Minimal faollik (Ofis ishi)', value: 1.2 },
    { label: 'Engil mashg‘ulotlar (Haftada 1-3 kun)', value: 1.375 },
    { label: 'O‘rtacha faollik (Haftada 3-5 kun)', value: 1.55 },
    { label: 'Yuqori faollik (Har kuni mashg‘ulot)', value: 1.725 },
  ];

  return (
    <div className="bg-white rounded-3xl border border-sage-200 p-6 md:p-8 lg:p-10 shadow-sm max-w-4xl mx-auto" id="calorie-calculator-container">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-100 text-sage-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-sage-500" /> Kalkulyatordan foydalaning
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-sage-800 tracking-tight">
          Kunlik kaloriya va mukammal dasturingizni hisoblang
        </h3>
        <p className="text-sage-olive mt-2 max-w-xl mx-auto text-sm md:text-base">
          Jismoniy ma’lumotlaringizni kiriting va o'zingizga mos keladigan sog’lom ovqatlanish rejasini aniqlang.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Gender selection */}
          <div>
            <label className="block text-sm font-semibold text-sage-800 mb-2">Jinsingiz</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                id="select-gender-male"
                onClick={() => setGender('male')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                  gender === 'male'
                    ? 'border-sage-500 bg-sage-100 text-sage-800 shadow-xs'
                    : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                }`}
              >
                <User className="w-4 h-4 text-sage-500" /> Erkak
              </button>
              <button
                type="button"
                id="select-gender-female"
                onClick={() => setGender('female')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                  gender === 'female'
                    ? 'border-sage-500 bg-sage-100 text-sage-800 shadow-xs'
                    : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                }`}
              >
                <User className="w-4 h-4 text-sage-500" /> Ayol
              </button>
            </div>
          </div>

          {/* Weight, Height, Age side-by-side or sliding */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-semibold text-sage-800 mb-1">
                <span>Vazningiz (kg)</span>
                <span className="text-sage-800 bg-sage-100 px-2 py-0.5 rounded text-xs font-mono">{weight} kg</span>
              </div>
              <input
                type="range"
                id="range-weight"
                min="40"
                max="150"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-sage-500 cursor-pointer h-2 bg-sage-50 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-sage-800 mb-1">
                <span>Bo‘yingiz (cm)</span>
                <span className="text-sage-800 bg-sage-100 px-2 py-0.5 rounded text-xs font-mono">{height} cm</span>
              </div>
              <input
                type="range"
                id="range-height"
                min="130"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-sage-500 cursor-pointer h-2 bg-sage-50 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-sage-800 mb-1">
                <span>Yoshingiz</span>
                <span className="text-sage-800 bg-sage-100 px-2 py-0.5 rounded text-xs font-mono">{age} yosh</span>
              </div>
              <input
                type="range"
                id="range-age"
                min="14"
                max="85"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-sage-500 cursor-pointer h-2 bg-sage-50 rounded-lg"
              />
            </div>
          </div>

          {/* Activity Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-sage-800 mb-2 flex items-center gap-1.5">
              <Accessibility className="w-4 h-4 text-sage-500" /> Jismoniy faollik darajasi
            </label>
            <select
              id="select-activity"
              value={activity}
              onChange={(e) => setActivity(Number(e.target.value))}
              className="w-full py-3 px-4 rounded-xl border border-sage-300 focus:border-sage-500 focus:ring focus:ring-sage-200/50 bg-white text-sage-800 text-sm font-medium transition-all"
            >
              {activityOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Core Goal Selection */}
          <div>
            <label className="block text-sm font-semibold text-sage-800 mb-2 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-sage-500" /> Asosiy maqsadingiz
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                id="goal-lose"
                onClick={() => setGoal('lose')}
                className={`py-3 px-2 rounded-xl border text-xs sm:text-sm font-medium transition-all text-center ${
                  goal === 'lose'
                    ? 'border-sage-500 bg-sage-100 text-sage-800 shadow-xs'
                    : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                }`}
              >
                Ozish 📉
              </button>
              <button
                type="button"
                id="goal-maintain"
                onClick={() => setGoal('maintain')}
                className={`py-3 px-2 rounded-xl border text-xs sm:text-sm font-medium transition-all text-center ${
                  goal === 'maintain'
                    ? 'border-sage-500 bg-sage-100 text-sage-800 shadow-xs'
                    : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                }`}
              >
                Vazn Saqlash ⚖️
              </button>
              <button
                type="button"
                id="goal-gain"
                onClick={() => setGoal('gain')}
                className={`py-3 px-2 rounded-xl border text-xs sm:text-sm font-medium transition-all text-center ${
                  goal === 'gain'
                    ? 'border-sage-500 bg-sage-100 text-sage-800 shadow-xs'
                    : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                }`}
              >
                Mushak Mas. 💪
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Result Display & Recommendation Cards */}
        <div className="lg:col-span-5 bg-sage-50 p-6 rounded-2xl border border-sage-200 flex flex-col justify-between h-full space-y-6">
          <div className="text-center py-4 border-b border-sage-300/60">
            <span className="text-xs uppercase text-sage-olive tracking-wider font-bold">Hisoblangan Kunlik Ehtiyoj</span>
            <div className="text-4xl md:text-5xl font-display font-extrabold text-sage-800 mt-1 mb-1 font-mono tracking-tight">
              {calculatedCalories} <span className="text-lg text-sage-500 font-sans font-medium">Kkal</span>
            </div>
            <p className="text-xs text-sage-olive italic">
              *Tavsiya etilgan miqdorda ovqatlanish maqsadga erishishni tezlashtiradi
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-sage-200/80 shadow-xs flex flex-col items-start">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="p-1.5 bg-sage-100 text-sage-700 rounded-lg">
                <Heart className="w-4 h-4 fill-sage-500/20 text-sage-500" />
              </span>
              <span className="text-xs font-semibold text-sage-700 uppercase tracking-widest">Siz uchun tavsiya</span>
            </div>
            <h4 className="text-lg font-display font-bold text-sage-800 leading-snug">
              {suggestedProgram.name}
            </h4>
            <p className="text-xs text-sage-500 font-medium mb-3 mt-1 underline decoration-sage-300 underline-offset-4 font-serif italic">
              {suggestedProgram.heading} ({suggestedProgram.kcalRange})
            </p>
            <p className="text-xs text-sage-olive line-clamp-3">
              {suggestedProgram.description}
            </p>

            {/* Macros visualization */}
            <div className="grid grid-cols-3 gap-2 w-full mt-4 pt-4 border-t border-sage-200 text-center">
              <div className="bg-sage-50 p-1.5 rounded-lg border border-sage-200">
                <div className="text-xs font-mono font-bold text-sage-800">{suggestedProgram.macros.protein}g</div>
                <div className="text-[10px] uppercase text-sage-olive font-semibold">Oqsil</div>
              </div>
              <div className="bg-sage-50 p-1.5 rounded-lg border border-sage-200">
                <div className="text-xs font-mono font-bold text-sage-800">{suggestedProgram.macros.fat}g</div>
                <div className="text-[10px] uppercase text-sage-olive font-semibold">Yog‘</div>
              </div>
              <div className="bg-sage-50 p-1.5 rounded-lg border border-sage-200">
                <div className="text-xs font-mono font-bold text-sage-800">{suggestedProgram.macros.carbs}g</div>
                <div className="text-[10px] uppercase text-sage-olive font-semibold">Uglevod</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            id="choose-calculated-program-btn"
            onClick={() => onSelectProgram(suggestedProgram.id)}
            className="w-full bg-sage-800 hover:bg-sage-900 text-sage-100 font-medium py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 text-sm cursor-pointer hover:shadow-lg active:scale-98"
          >
            Sizga mos reja bilan boshlash <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
