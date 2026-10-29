import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FaShieldAlt, FaCog, FaCoins, FaAward, FaHeadset, FaUsers, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaCog': return <FaCog />;
    case 'FaCoins': return <FaCoins />;
    case 'FaAward': return <FaAward />;
    case 'FaHeadset': return <FaHeadset />;
    case 'FaUsers': return <FaUsers />;
    default: return <FaShieldAlt />;
  }
};

export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 relative overflow-hidden bg-white">
      {/* Background Dots Shape */}
      <div className="absolute top-10 left-[45%] opacity-30 z-0 hidden lg:block">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <pattern id="dotsPattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="var(--color-accent)" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dotsPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-[1280px] relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Content & Grid */}
        <div className="flex-1 lg:max-w-[60%]">
          {data.subtitle && (
            <div className="inline-block px-4 py-1.5 rounded-full border border-amber-200 text-[var(--color-accent)] text-xs font-bold tracking-wider mb-4">
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
            <p className="text-gray-500 text-sm md:text-base sm:text-base leading-relaxed mb-10 max-w-2xl">
              {data.description}
            </p>
          )}

          {/* Features Grid */}
          {data.features && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {data.features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-50 p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-[var(--color-accent)] text-xl mb-1">
                    {renderIcon(feature.icon || '')}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-[var(--color-primary)] leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          {data.button && (
            <Link
              href={data.button.url}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-lg font-bold text-sm md:text-base hover:opacity-90 transition-colors shadow-lg shadow-amber-500/20"
            >
              {data.button.text.replace('->', '')} <FaArrowRight className="text-sm" />
            </Link>
          )}
        </div>

        {/* Right Side: Image & Stats Card */}
        <div className="w-full lg:w-[40%] relative mt-10 lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[650px] w-full">
            <img 
              src={data.image} 
              alt="Technician working" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Stats Overlay Card */}
          {data.stats && (
            <div className="absolute -bottom-8 -left-8 lg:-left-16 bg-[var(--color-primary)] text-white p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center min-w-[200px] border-4 border-white">
              <div className="text-4xl text-white mb-2">
                {renderIcon(data.stats.icon || '')}
              </div>
              <h3 className="text-4xl font-extrabold text-[var(--color-accent)] mb-1">
                {data.stats.count}
              </h3>
              <p className="text-gray-200 text-sm font-medium text-center leading-snug whitespace-pre-line">
                {data.stats.label.replace('\\n', '\n')}
              </p>
              
              {/* Decorative Lines/Sparkles */}
              <div className="absolute -top-4 -left-4 text-[var(--color-accent)] opacity-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L12 8M2 12L8 12M4.9 4.9L9.1 9.1" />
                </svg>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};
