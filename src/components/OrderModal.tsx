/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, Smartphone, MapPin, Clock, Calendar, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Program } from '../types';

interface OrderModalProps {
  program: Program;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ program, isOpen, onClose }: OrderModalProps) {
  const [duration, setDuration] = useState<number>(6); // 6, 12, 24, 30 days
  const [timeSlot, setTimeSlot] = useState<string>('07:00 - 08:30');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  // Pricing calculations
  const pricePerDay = program.pricePerDay;
  const subtotal = pricePerDay * duration;
  
  let discountPercentage = 0;
  if (duration === 12) discountPercentage = 5;
  else if (duration === 24) discountPercentage = 10;
  else if (duration === 30) discountPercentage = 15;

  const discountAmount = Math.round((subtotal * discountPercentage) / 100);
  const totalAmount = subtotal - discountAmount;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Ism va familiyangizni kiriting';
    
    // basic phone validation
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length < 9) {
      newErrors.phone = `Telefon raqamingizni to'liq kiriting (masalan, +998 xx xxx xxxx)`;
    }
    
    if (!address.trim()) newErrors.address = 'Yetkazib berish manzilini kiriting';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccess(true);
    }
  };

  const formatCurrency = (val: number) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " UZS";
  };

  // Safe tomorrow's date representation in Uzbek
  const getTomorrowDateString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const months = [
      'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
      'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ];
    return `${tomorrow.getDate()}-${months[tomorrow.getMonth()]}, soat ${timeSlot} oralig'ida`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-sage-900/40 backdrop-blur-xs transition-opacity" 
        id="order-modal-backdrop" 
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-3xl bg-[#F9F9F6] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-sage-200">
          
          {/* Close button */}
          <button
            type="button"
            className="absolute top-4 right-4 text-sage-olive hover:text-sage-900 p-1.5 hover:bg-sage-200 rounded-full transition-all z-10"
            onClick={onClose}
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8" id="order-submit-form">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="p-2 bg-sage-150 bg-sage-200 text-sage-800 rounded-xl">
                  <ShoppingBag className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-xl font-display font-bold text-sage-800" id="modal-title">
                    Buyurtma Rasmiylashtirish
                  </h3>
                  <p className="text-xs text-sage-olive font-medium">
                    Siz tanlagan dastur: <span className="text-sage-700 font-semibold font-serif">{program.name}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
                
                {/* Inputs area */}
                <div className="md:col-span-7 space-y-4">
                  
                  {/* Select Duration */}
                  <div>
                    <label className="block text-xs font-bold text-sage-olive uppercase tracking-wider mb-2">
                      1. Kunlar Soni (Davomiylik)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { days: 6, label: '6 kun', discount: '' },
                        { days: 12, label: '12 kun', discount: '-5%' },
                        { days: 24, label: '24 kun', discount: '-10%' },
                        { days: 30, label: '30 kun', discount: '-15%' },
                      ].map((item) => (
                        <button
                          key={item.days}
                          type="button"
                          id={`duration-${item.days}-btn`}
                          onClick={() => setDuration(item.days)}
                          className={`relative py-3 rounded-xl border transition-all text-center flex flex-col items-center justify-center ${
                            duration === item.days
                              ? 'border-sage-500 bg-white text-sage-800 font-bold shadow-xs'
                              : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                          }`}
                        >
                          <span className="text-sm">{item.label}</span>
                          {item.discount && (
                            <span className="absolute -top-2 -right-1 px-1 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-lg leading-none scale-90">
                              {item.discount}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Delivery time slots */}
                  <div>
                    <label className="block text-xs font-bold text-sage-olive uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sage-500" /> 2. Yetkazish Vaqti
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['06:00 - 07:30', '07:30 - 09:00', '09:00 - 10:30'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          id={`time-${slot.replace(/\s+/g, '')}-btn`}
                          onClick={() => setTimeSlot(slot)}
                          className={`py-2 rounded-xl border text-[11px] font-medium transition-all text-center ${
                            timeSlot === slot
                              ? 'border-sage-500 bg-white text-sage-800 font-bold shadow-xs'
                              : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* User details */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-bold text-sage-olive uppercase tracking-wider">
                      3. Shaxsiy Ma'lumotlaringiz
                    </label>

                    <div>
                      <input
                        type="text"
                        id="form-name-input"
                        placeholder="Ism va Familiyangiz"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (e.target.value.trim() && errors.name) {
                            setErrors(prev => { const copy = {...prev}; delete copy.name; return copy; });
                          }
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl border bg-white focus:outline-hidden focus:ring-2 text-sm ${
                          errors.name 
                            ? 'border-red-400 focus:ring-red-200' 
                            : 'border-sage-300 focus:border-sage-500 focus:ring-sage-200/50 text-sage-800'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 pl-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        id="form-phone-input"
                        placeholder="Telefon raqamingiz (+998 xx xxx xxxx)"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (e.target.value.trim() && errors.phone) {
                            setErrors(prev => { const copy = {...prev}; delete copy.phone; return copy; });
                          }
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl border bg-white focus:outline-hidden focus:ring-2 text-sm ${
                          errors.phone 
                            ? 'border-red-400 focus:ring-red-200' 
                            : 'border-sage-300 focus:border-sage-500 focus:ring-sage-200/50 text-sage-800'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1 pl-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <textarea
                        id="form-address-input"
                        rows={2}
                        placeholder="Yetkazib berish manzili (Masalan: Toshkent sh., Chilonzor tumani, 5-kvartal, 12-uy)"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          if (e.target.value.trim() && errors.address) {
                            setErrors(prev => { const copy = {...prev}; delete copy.address; return copy; });
                          }
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl border bg-white focus:outline-hidden focus:ring-2 text-sm resize-none ${
                          errors.address 
                            ? 'border-red-400 focus:ring-red-200' 
                            : 'border-sage-300 focus:border-sage-500 focus:ring-sage-200/50 text-sage-800'
                        }`}
                      />
                      {errors.address && <p className="text-xs text-red-500 mt-1 pl-1">{errors.address}</p>}
                    </div>
                  </div>

                  {/* Payment option */}
                  <div>
                    <label className="block text-xs font-bold text-sage-olive uppercase tracking-wider mb-2 flex items-center gap-1">
                      4. To'lov Usuli
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        id="pay-card-btn"
                        onClick={() => setPaymentMethod('card')}
                        className={`py-2.5 rounded-xl border text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 ${
                          paymentMethod === 'card'
                            ? 'border-sage-500 bg-white text-sage-800 font-semibold shadow-xs'
                            : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                        }`}
                      >
                        💳 Humo / Uzcard / Visa
                      </button>
                      <button
                        type="button"
                        id="pay-cash-btn"
                        onClick={() => setPaymentMethod('cash')}
                        className={`py-2.5 rounded-xl border text-xs font-medium transition-all text-center flex items-center justify-center gap-1.5 ${
                          paymentMethod === 'cash'
                            ? 'border-sage-500 bg-white text-sage-800 font-semibold shadow-xs'
                            : 'border-sage-300 hover:bg-sage-50 text-sage-olive'
                        }`}
                      >
                        💵 Qabul qilishda (Naqd)
                      </button>
                    </div>
                  </div>

                </div>

                {/* Vertical checkout summary calculation sidebar */}
                <div className="md:col-span-5 bg-sage-50 p-5 rounded-2xl border border-sage-200 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-sage-olive uppercase tracking-wider mb-3">Hisoblarimiz</h4>
                    
                    <div className="space-y-2 text-xs text-sage-olive">
                      <div className="flex justify-between">
                        <span>Ratsion narxi (kuniga):</span>
                        <span className="font-semibold text-sage-800">{formatCurrency(pricePerDay)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Kunlar soni:</span>
                        <span className="font-semibold text-sage-800">{duration} kun</span>
                      </div>
                      <div className="flex justify-between border-b border-sage-200 pb-2">
                        <span>Yetkazib berish:</span>
                        <span className="font-semibold text-sage-600">Bepul (0 UZS)</span>
                      </div>
                      
                      <div className="flex justify-between pt-1">
                        <span>Dastlabki summa:</span>
                        <span className="font-semibold font-mono text-sage-800">{formatCurrency(subtotal)}</span>
                      </div>

                      {discountAmount > 0 && (
                        <div className="flex justify-between text-red-600">
                          <span>Chegirma ({discountPercentage}%):</span>
                          <span>-{formatCurrency(discountAmount)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-sage-250 border-sage-200 pt-3">
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="text-xs font-bold text-sage-800">Jami summasi:</span>
                      <span className="text-lg font-display font-extrabold text-sage-900 font-mono tracking-tight">
                        {formatCurrency(totalAmount)}
                      </span>
                    </div>

                    <p className="text-[10px] text-sage-olive mb-3 block leading-relaxed">
                      *Toshkent shahar ichra yetkazib berish butunlay tekin. Mutaxassis maslahati bepul taqdim etiladi.
                    </p>

                    <button
                      type="submit"
                      id="submit-order-button"
                      className="w-full bg-sage-800 hover:bg-sage-900 text-sage-100 font-bold py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 text-sm cursor-pointer hover:shadow-lg active:scale-98"
                    >
                      Tasdiqlash va Buyurtma Qilish ✨
                    </button>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-center gap-1.5 mt-5 text-[11px] text-sage-olive">
                <ShieldCheck className="w-4 h-4 text-sage-500" /> Barcha to‘lovlar va malumotlar xavfsiz himoyalangan.
              </div>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="p-8 text-center" id="order-success-screen">
              <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-5 animate-pulse">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-display font-extrabold text-sage-800 tracking-tight">
                Tabriklaymiz, Buyurtmangiz Qabul Qilindi! 🎉
              </h3>
              
              <p className="text-sage-olive text-sm mt-3 max-w-md mx-auto leading-relaxed">
                Hurmatli <span className="font-semibold text-sage-800">{name}</span>, Level Kitchen oilasiga xush kelibsiz! Sog'lom va mazali yangi hayot boshlanishi bilan sizni qutlaymiz.
              </p>

              <div className="bg-white border border-sage-200 rounded-2xl p-4 my-6 text-left max-w-md mx-auto text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-sage-800 font-bold border-b border-sage-100 pb-1.5">
                  <Calendar className="w-4 h-4 text-sage-500" /> Ilk etkazib berish vaqti:
                </div>
                <p className="text-sage-olive pl-6">
                  <strong className="text-sage-800">Ertaga ertalab, {getTomorrowDateString()}</strong>
                </p>
                
                <div className="flex items-center gap-2 text-sage-800 font-bold border-b border-sage-100 pt-1 pb-1.5">
                  <MapPin className="w-4 h-4 text-sage-500" /> Manzil:
                </div>
                <p className="text-sage-olive pl-6 leading-relaxed">
                  {address}
                </p>

                <div className="flex items-center gap-2 text-sage-800 font-bold pt-1">
                  <Smartphone className="w-4 h-4 text-sage-500" /> Aloqa raqami:
                </div>
                <p className="text-sage-olive pl-6 font-mono font-semibold">
                  {phone}
                </p>
              </div>

              <p className="text-xs text-sage-olive mb-6">
                Operatorimiz yaqin 10 daqiqa ichida buyurtmani tasdiqlash uchun siz bilan bog'lanadi.
              </p>

              <button
                type="button"
                id="close-success-btn"
                onClick={onClose}
                className="w-full max-w-xs bg-sage-800 hover:bg-sage-900 text-sage-100 font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm cursor-pointer"
              >
                Oynani yopish
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
