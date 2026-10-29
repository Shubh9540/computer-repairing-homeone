import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FaUsers, FaShieldAlt, FaDatabase, FaStopwatch, FaCog } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaDatabase': return <FaDatabase />;
    case 'FaStopwatch': return <FaStopwatch />;
    case 'FaCog': return <FaCog />;
    default: return null;
  }
};

export const AboutUs = ({ data, hideButton = false }: { data?: AboutUsData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section id="about" className="relative w-full bg-white py-12 lg:py-12 overflow-hidden">

      {/* Background Watermark */}
      <div className="absolute right-[-5%] top-10 text-[#f8f9fa] opacity-60 pointer-events-none" style={{ fontSize: '400px' }}>
        <FaCog />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Column - Images */}
          <div className="w-full lg:w-[50%] relative py-12 pl-10 pr-16 lg:pl-16 lg:pr-20">
            
            {/* Background Dotted Shape */}
            <div className="absolute top-2 left-2 opacity-40 -z-20 hidden md:block">
              <svg width="150" height="150" viewBox="0 0 100 100">
                <pattern id="aboutDots" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="var(--color-accent)" />
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#aboutDots)" />
              </svg>
            </div>

            {/* Blue Background Shape */}
            <div className="absolute left-0 top-[15%] bottom-[5%] w-[75%] bg-[var(--color-accent)] rounded-[30px] rounded-tl-xl rounded-bl-xl -z-10"></div>

            {/* Main Image */}
            <div className="w-full rounded-[24px] overflow-hidden shadow-md border-[8px] border-white relative z-10">
              <img src={data.imageMain} alt="Computer Repair" className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover" />
            </div>

            {/* Small Images - Parallel Stack on Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 w-[45%] lg:w-[40%] z-20">
              {data.imageSmall1 && (
                <div className="rounded-[20px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.15)] border-[6px] border-white bg-white">
                  <img src={data.imageSmall1} alt="Screen Repair" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
              )}
              {data.imageSmall2 && (
                <div className="rounded-[20px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.15)] border-[6px] border-white bg-white">
                  <img src={data.imageSmall2} alt="Motherboard Repair" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
              )}
            </div>

            {/* Experience Badge */}
            {data.yearsOfService && (
              <div className="absolute left-[-2%] bottom-[2%] bg-[var(--color-accent)] text-white p-5 lg:p-6 rounded-2xl shadow-2xl z-30 flex items-center justify-center gap-4 min-w-[240px]">
                <div className="text-[44px] text-white">
                  <FaCog />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[32px] font-extrabold leading-none">{data.yearsOfService}</h4>
                  <p className="text-xs font-semibold opacity-95 mt-1 leading-tight tracking-wide">{data.yearsText}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[50%] pt-10 lg:pt-0 flex flex-col justify-center xl:pl-10">

            {/* Subtitle */}
            {data.subtitle && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[var(--color-accent)]"></div>
                <span className="text-[var(--color-accent)] text-xs font-bold tracking-[0.1em] uppercase">
                  {data.subtitle}
                </span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 leading-[1.2]">
              {data.title1 && <span>{data.title1} </span>}
              {data.title2 && <span className="text-[var(--color-accent)]">{data.title2} </span>}
              {data.titleHighlight && <span>{data.titleHighlight}</span>}
            </h2>

            {/* Description */}
            {data.description && (
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-[600px]">
                {data.description}
              </p>
            )}

            {/* Features Grid */}
            {data.features && data.features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {data.features.map(feature => (
                  <div key={feature.id} className="bg-[var(--color-bg-alt)] rounded-xl p-4 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-lg">
                      {renderIcon(feature.icon || '')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-primary)] mb-1 leading-tight">{feature.title}</h4>
                      <p className="text-gray-500 text-xs leading-snug">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Button */}
            {!hideButton && data.button && (
              <div className="mt-2">
                <Link
                  href={data.button.url}
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-md font-bold text-sm md:text-base hover:opacity-90 transition-colors shadow-lg"
                >
                  {data.button.text}
                </Link>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
