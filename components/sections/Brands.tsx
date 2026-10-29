import React from 'react';
import Image from 'next/image';
import { BrandsData } from '@/types/templates.types';

export const Brands = ({ data }: { data?: BrandsData }) => {
  if (!data) return null;

  return (
    <section id="brands" className="py-12 lg:py-20 bg-[var(--color-bg-alt)] relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[var(--color-text-light)]">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 -mt-16 -mr-16 rounded-full bg-amber-50 opacity-50 hidden md:block"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {data.subtitle && (
            <div className="inline-block px-6 py-2 rounded-full border border-amber-200 bg-white text-sm font-bold tracking-wider mb-4 text-[var(--color-primary)]">
              {data.subtitle}
            </div>
          )}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            {data.title1}{' '}
            {data.titleHighlight && (
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            )}
            {' '}{data.title2}
          </h2>
          
          {data.description && (
            <p className="text-[var(--color-text-light)] text-lg">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
          {data.brands.map((brand) => (
            <div 
              key={brand.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm py-4 px-2 md:py-6 md:px-4 flex flex-col items-center justify-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                {/* We use img here for simpler rendering, could use Next Image if domains are configured */}
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-[var(--color-primary)] text-sm md:text-base md:text-base md:text-lg">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
