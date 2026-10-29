"use client";
import React from 'react';
import { BookRepairData } from '@/types/templates.types';
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhoneAlt, FaDesktop, FaCog, FaClock, FaMapMarkerAlt, FaShieldAlt, FaPhoneVolume, FaPaperPlane } from 'react-icons/fa';
import { FaWrench, FaCheckCircle, FaBolt, FaCoins } from 'react-icons/fa';

export const BookRepair = ({ data }: { data?: BookRepairData }) => {
  if (!data) return null;

  return (
    <section id="book" className="w-full py-12 md:py-16 bg-[var(--color-bg-alt)]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Header + Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            
            {/* Header Content */}
            <div>
              {data.subtitle && (
                <div className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] border border-amber-100 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm">
                  <FaCalendarAlt className="text-sm" />
                  <span>{data.subtitle}</span>
                </div>
              )}
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-4 tracking-tight leading-tight">
                {data.title1 && <span>{data.title1} <br className="hidden md:block" /></span>}
                {data.title2 && <span className="text-[var(--color-accent)]">{data.title2}</span>}
              </h2>
              
              {data.description && (
                <p className="text-[var(--color-text-light)] text-sm md:text-base md:text-base md:text-lg max-w-2xl leading-relaxed">
                  {data.description}
                </p>
              )}
            </div>

            {/* Form */}
            <div className="w-full bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100 relative">
            <h3 className="text-2xl font-extrabold text-[var(--color-primary)] mb-2">{data.form.title}</h3>
            <p className="text-[var(--color-text-light)] text-sm mb-8">{data.form.subtitle}</p>
            
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser />
                  </div>
                  <input type="text" placeholder="Your Name *" className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all" />
                </div>
                {/* Email */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input type="email" placeholder="Your Email *" className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all" />
                </div>
                {/* Phone */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaPhoneAlt />
                  </div>
                  <input type="tel" placeholder="Your Phone Number *" className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all" />
                </div>
                {/* Device Type */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaDesktop />
                  </div>
                  <select className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="">Select Device Type *</option>
                    <option value="laptop">Laptop</option>
                    <option value="desktop">Desktop PC</option>
                    <option value="macbook">MacBook</option>
                  </select>
                </div>
                {/* Select Service */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaCog />
                  </div>
                  <select className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="">Select Service *</option>
                    <option value="screen">Screen Replacement</option>
                    <option value="battery">Battery Replacement</option>
                    <option value="keyboard">Keyboard Repair</option>
                    <option value="software">Software Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* Preferred Date */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaCalendarAlt />
                  </div>
                  <input type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.value === "" ? e.target.type = "text" : null)} placeholder="Preferred Date *" className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all" />
                </div>
                {/* Preferred Time */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaClock />
                  </div>
                  <select className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="">Preferred Time *</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
                {/* Service Type */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaMapMarkerAlt />
                  </div>
                  <select className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-3.5 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all appearance-none cursor-pointer">
                    <option value="">Service Type *</option>
                    <option value="store">Bring to Store</option>
                    <option value="onsite">On-Site Repair</option>
                    <option value="pickup">Pick & Drop</option>
                  </select>
                </div>
              </div>
              
              {/* Additional Details */}
              <div className="relative mt-2">
                <textarea rows={4} placeholder="Additional Details *\nTell us about the issue or any specific requirement..." className="w-full bg-[var(--color-bg-alt)] border border-gray-200 rounded-lg py-4 px-4 text-sm text-gray-700 outline-none focus:border-[var(--color-accent)] focus:bg-white transition-all resize-none"></textarea>
              </div>
              
              {/* Submit Button */}
              <button type="button" className="w-full bg-[var(--color-accent)] text-white font-bold text-base py-4 rounded-lg hover:bg-[#0056b3] transition-colors mt-2 shadow-md flex justify-center items-center gap-2">
                {data.form.buttonText} <span>→</span>
              </button>
              
              {/* Privacy Text */}
              <div className="flex items-start gap-3 mt-4 bg-[var(--color-bg-alt)] p-4 rounded-lg border border-blue-50">
                <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0">
                  <FaShieldAlt className="text-xs" />
                </div>
                <p className="text-xs text-[var(--color-text-light)] leading-relaxed">
                  {data.form.privacyText}
                </p>
              </div>
            </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Image & Floating Card */}
            <div className="relative w-full rounded-[24px] overflow-hidden bg-white shadow-sm mb-2 h-[400px] lg:h-[500px]">
              <div className="absolute right-0 top-0 h-full w-4 bg-[var(--color-accent)] z-10"></div>
              <img src={data.image} alt="Repair Service" className="w-full h-full object-cover" />
              
              {/* Floating Card */}
              <div className="absolute top-6 left-6 bg-white rounded-xl p-5 shadow-lg max-w-[220px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-alt)] flex items-center justify-center text-[var(--color-accent)]">
                    <FaWrench />
                  </div>
                  <h4 className="font-bold text-[var(--color-primary)] text-sm leading-tight">{data.floatingCard.title}</h4>
                </div>
                <ul className="flex flex-col gap-2">
                  {data.floatingCard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[var(--color-text-light)] font-medium">
                      <FaCheckCircle className="text-[var(--color-accent)]" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Book With Us? */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
              <h3 className="text-2xl font-extrabold text-[var(--color-primary)] mb-6">{data.whyBook.title1} <span className="text-[var(--color-accent)]">{data.whyBook.title2}</span></h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.whyBook.features.map((feature, idx) => {
                  let Icon = FaWrench;
                  if (idx === 0) Icon = FaCog;
                  if (idx === 1) Icon = FaShieldAlt;
                  if (idx === 2) Icon = FaBolt;
                  if (idx === 3) Icon = FaCoins;
                  return (
                    <div key={feature.id} className="flex flex-col items-center text-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-bg-alt)] flex items-center justify-center text-[var(--color-accent)] mb-1">
                        <Icon className="text-xl" />
                      </div>
                      <h4 className="font-bold text-[var(--color-primary)] text-xs leading-tight">{feature.title}</h4>
                      <p className="text-xs text-[var(--color-text-light)] leading-snug">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Need Immediate Assistance? */}
            <div className="bg-[var(--color-bg-alt)] rounded-[24px] p-6 border border-blue-50 shadow-sm">
              <h3 className="text-xl font-extrabold text-[var(--color-primary)] mb-5">{data.assistance.title1} <span className="text-[var(--color-accent)]">{data.assistance.title2}</span></h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4 flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0">
                    <FaPhoneVolume className="text-xl" />
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider mb-0.5">{data.assistance.phoneLabel}</span>
                    <span className="block text-[var(--color-primary)] font-extrabold text-sm md:text-base">{data.assistance.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0">
                    <FaPaperPlane className="text-xl" />
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider mb-0.5">{data.assistance.emailLabel}</span>
                    <span className="block text-[var(--color-primary)] font-extrabold text-sm md:text-base">{data.assistance.email}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
