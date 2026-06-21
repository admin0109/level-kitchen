/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Macros {
  protein: number; // in grams
  fat: number; // in grams
  carbs: number; // in grams
}

export interface Meal {
  id: string;
  name: string;
  type: 'Ertalabki' | 'Tushlik' | 'Ikkinchi tushlik' | 'Kechki' | 'shirinlik';
  kcal: number;
}

export interface Program {
  id: 'light' | 'balance' | 'power';
  name: string;
  heading: string;
  kcalRange: string;
  kcalValue: number;
  pricePerDay: number; // in UZS
  targetAudience: string;
  description: string;
  image: string;
  macros: Macros;
  meals: Meal[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  program: string;
  achievement: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
