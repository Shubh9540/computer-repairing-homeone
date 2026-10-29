import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';
import { FaWrench, FaPhoneAlt, FaUserTie, FaCog, FaShieldAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaWrench': return <FaWrench />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaUserTie': return <FaUserTie />;
    case 'FaCog': return <FaCog />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    default: return null;
  }
};

export const Hero = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id="home" className="relative w-full bg-[var(--color-primary)] flex flex-col lg:flex-row overflow-hidden min-h-[500px] xl:min-h-[600px]">
      
      {/* Left Image Area */}
      <div 
        className="w-full lg:w-[45%] xl:w-[50%] h-[350px] lg:h-auto relative z-10 shrink-0"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
        }}
      >
        <img 
          src={data.imageMain} 
          alt="Computer Repair" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--color-primary)]/60"></div>
      </div>
      
      {/* Fallback pattern on the right background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

      {/* Right Content Area */}
      <div className="w-full lg:w-[55%] xl:w-[50%] flex items-center p-8 lg:pl-16 xl:pl-20 lg:py-16 relative z-20">
        <div className="max-w-[600px]">
          
          {/* Badge */}
          {data.badge && (
            <div className="inline-block border border-white/20 rounded-full px-4 py-1 mb-5">
              <span className="text-white text-xs font-bold tracking-[0.15em] uppercase">
                {data.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-5">
            {data.title1 && <span className="block">{data.title1}</span>}
            {data.title2 && <span className="block">{data.title2}</span>}
            {data.titleHighlight && <span className="block text-[var(--color-accent)]">{data.titleHighlight}</span>}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-[500px]">
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {data.button1 && (
              <Link 
                href={data.button1.url}
                className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-md font-bold text-sm md:text-base hover:opacity-90 transition-colors shadow-lg"
              >
                {data.button1.icon && <span className="text-lg">{renderIcon(data.button1.icon)}</span>}
                {data.button1.text}
              </Link>
            )}
            {data.button2 && (
              <Link 
                href={data.button2.url}
                className="flex items-center gap-2 bg-white text-[var(--color-primary)] px-6 py-3 rounded-md font-bold text-sm md:text-base hover:bg-gray-100 transition-colors shadow-lg"
              >
                {data.button2.icon && <span className="text-[var(--color-accent)] text-lg">{renderIcon(data.button2.icon)}</span>}
                {data.button2.text}
              </Link>
            )}
          </div>

          {/* Features */}
          {data.features && data.features.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {data.features.map(feature => (
                <div key={feature.id} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-xs">
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="text-white text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

    </section>
  );
};
