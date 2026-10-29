'use client';
import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FaChevronDown, FaChevronUp, FaCog, FaMicrochip, FaTools } from 'react-icons/fa';

export const Faq = ({ data }: { data?: FaqData }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (!data) return null;

  return (
    <section id="faq" className="w-full py-16 lg:py-20 bg-white relative overflow-hidden">

      {/* Background Soft Curves */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[var(--color-bg-alt)]">
          <path d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-accent)] font-bold text-sm uppercase tracking-widest">
              {data.subtitle}
            </h4>
            <div className="h-[2px] w-8 bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
            {data.title1} <span className="text-[var(--color-accent)]">{data.title2}</span>
          </h2>
          <p className="text-[var(--color-text-light)] text-base max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Content Layout - items-start prevents right image from shifting when accordion expands */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Left: Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3.5">
            {data.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isOpen 
                      ? 'bg-white border-[var(--color-accent)] shadow-md' 
                      : 'bg-white border-[var(--color-border)] hover:border-gray-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 transition-colors cursor-pointer text-left ${
                      isOpen ? 'bg-[var(--color-accent)] text-white' : 'bg-white text-[var(--color-primary)]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isOpen ? 'bg-white text-[var(--color-accent)]' : 'bg-[var(--color-bg-alt)] text-[var(--color-accent)]'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="font-bold text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-3 transition-transform duration-300 ${
                      isOpen ? 'bg-white/20 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <FaChevronDown className="text-xs" />
                    </div>
                  </button>

                  {/* Smooth CSS Grid Accordion Transition - 100% stable & glitch-free */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 sm:p-5 pt-2 text-[var(--color-text-light)] text-sm sm:text-base leading-relaxed border-t border-gray-100/80 bg-amber-50/20">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Fixed Sticky Image & Tech Badges (Will NEVER shake or jump on accordion click) */}
          <div className="w-full lg:w-1/2 flex justify-center sticky top-28 self-start pt-2">
            <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              {/* Dashed outer ring */}
              <div className="absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-dashed border-[var(--color-accent)]/30 -z-10 animate-[spin_60s_linear_infinite]" />

              {/* Solid inner accent ring */}
              <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] rounded-full border-[6px] border-[var(--color-accent)] -z-10" />

              {/* Main Circle Image */}
              <div className="w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-8 border-white shadow-xl relative z-0">
                <img
                  src={data.image}
                  alt="Computer Repair Technician"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Computer Hardware Badges */}
              <div className="absolute top-6 right-2 sm:top-8 sm:right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-accent)] text-xl z-20 border border-gray-100">
                <FaMicrochip />
              </div>

              <div className="absolute top-1/3 -left-3 sm:-left-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-primary)] text-xl z-20 border border-gray-100">
                <FaCog />
              </div>

              <div className="absolute bottom-10 left-4 sm:bottom-12 sm:left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-accent)] text-xl z-20 border border-gray-100">
                <FaTools />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
