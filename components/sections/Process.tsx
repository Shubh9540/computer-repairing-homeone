import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa';

export const Process = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  return (
    <section id="process" className="relative w-full bg-[var(--color-bg-alt)] py-16 lg:py-12 overflow-hidden">

      {/* Light Background Wave / Shape */}
      <div className="absolute bottom-0 right-0 w-full h-[60%] bg-gradient-to-tl from-blue-50 to-transparent z-0 rounded-tl-[100%] opacity-70"></div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {data.subtitle && (
            <div className="inline-block border border-[var(--color-accent)] rounded-full px-5 py-1.5 mb-4">
              <span className="text-[var(--color-primary)] text-xs font-bold tracking-[0.1em] uppercase">
                {data.subtitle}
              </span>
            </div>
          )}

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
            {data.title1 && <span>{data.title1} </span>}
            {data.titleHighlight && <span className="text-[var(--color-accent)]">{data.titleHighlight} </span>}
            {data.title2 && <span>{data.title2}</span>}
          </h2>

          {data.description && (
            <p className="text-gray-600 text-sm md:text-base md:text-base max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-4 relative">

          {data.steps.map((step, index) => (
            <React.Fragment key={step.id}>

              {/* Step Item */}
              <div className="flex flex-col items-center text-center max-w-[280px] group relative">

                {/* Image & Circle Container */}
                <div className="relative mb-6 flex items-center justify-center w-[160px] h-[160px] lg:w-[180px] lg:h-[180px]">
                  
                  {/* Dotted Circle Border (Outer) */}
                  <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[var(--color-accent)]/50 bg-transparent group-hover:border-[var(--color-accent)] transition-colors duration-300 pointer-events-none z-10"></div>

                  {/* Inner Solid Circle Background (Smaller) */}
                  <div className="absolute inset-[10%] rounded-full bg-gradient-to-tr from-blue-100/60 to-blue-50/30 z-0"></div>

                  {/* Number Badge - placed exactly on the dashed border */}
                  <div className="absolute top-[14.5%] left-[14.5%] w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-base md:text-lg z-20 shadow-sm border-[2px] border-white -translate-x-1/2 -translate-y-1/2">
                    {step.number}
                  </div>

                  {/* Icon Image */}
                  <div className="relative z-10 w-[65%] h-[65%]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out drop-shadow-sm"
                    />
                  </div>

                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

              </div>

              {/* Arrow Connector (Hidden on last item and small screens) */}
              {index < data.steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[var(--color-accent-light)] text-2xl px-2 lg:px-4 shrink-0">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)]"></span>
                    <FaArrowRight className="ml-1" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}

        </div>

      </div>
    </section>
  );
};
