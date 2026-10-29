import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight, FaCalendarCheck } from 'react-icons/fa';

export const Services = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id="services" className="w-full bg-[var(--color-bg-alt)] py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-12">
          {data.subtitle && (
            <div className="inline-block border border-[var(--color-accent)] rounded-full px-5 py-1.5 mb-4 bg-white/80">
              <span className="text-[var(--color-primary)] text-xs font-bold tracking-[0.1em] uppercase">
                {data.subtitle}
              </span>
            </div>
          )}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
            {data.title1 && <span>{data.title1} </span>}
            {data.titleHighlight && <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>}
          </h2>
          
          {data.description && (
            <p className="text-gray-600 text-sm md:text-base md:text-base max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
        </div>

        {/* Services Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-200 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom and Hover Overlay */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {/* Floating Book Now Button on Hover */}
                  <Link 
                    href={service.url || '/#book'}
                    className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center gap-2 bg-[var(--color-accent)] hover:opacity-90 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-lg"
                  >
                    <FaCalendarCheck className="text-xs" />
                    <span>Book Now</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>

              {/* Card Body — Clean static text without permanent bottom button */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[var(--color-primary)] mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h3>
                  
                  {service.description && (
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
