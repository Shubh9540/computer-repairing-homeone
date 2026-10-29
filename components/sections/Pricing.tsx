import React from 'react';
import { PricingData } from '@/types/templates.types';
import { FaCog, FaCheck, FaShieldAlt, FaBolt, FaWallet, FaPercentage } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCog': return <FaCog />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaBolt': return <FaBolt />;
    case 'FaWallet': return <FaWallet />;
    case 'FaCheck': return <FaCheck />;
    default: return <FaCog />;
  }
};

export const Pricing = ({ data }: { data?: PricingData }) => {
  if (!data) return null;

  return (
    <section id="pricing" className="w-full py-16 bg-[var(--color-bg-alt)]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div>
              {data.subtitle && (
                <div className="inline-flex items-center gap-2 bg-[var(--color-bg-alt)] text-[var(--color-accent)] px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                  <FaCog className="text-sm" />
                  <span>{data.subtitle}</span>
                </div>
              )}
              <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] leading-tight tracking-tight">
                {data.title1} <span className="text-[var(--color-accent)]">{data.title2}</span>
              </h2>
            </div>
            
            {data.description && (
              <p className="text-[var(--color-text-light)] text-base leading-relaxed">
                {data.description}
              </p>
            )}

            {data.features && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {data.features.map((feat) => (
                  <div key={feat.id} className="flex items-start gap-4 bg-white border border-gray-100 shadow-sm p-5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-bg-alt)] flex items-center justify-center text-[var(--color-accent)] flex-shrink-0 text-xl">
                      {renderIcon(feat.icon || '')}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)] text-sm md:text-base mb-1">{feat.title}</h4>
                      <p className="text-gray-500 text-xs leading-snug">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {data.image && (
            <div className="w-full lg:w-1/2 flex justify-end lg:pr-6">
              <div className="relative w-full max-w-[550px] mt-6 lg:mt-0">
                <div className="absolute -top-6 -right-6 w-[80%] h-[90%] bg-[var(--color-accent)] rounded-[24px] z-0"></div>
                <img src={data.image} alt="Pricing" className="relative z-10 w-full h-auto rounded-[24px] object-cover shadow-xl" />
              </div>
            </div>
          )}
        </div>

        {/* Pricing Tables */}
        {data.tables && data.tables.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {data.tables.map((table) => (
              <div key={table.id} className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)] mb-2">
                  {table.title1} <span className="text-[var(--color-accent)]">{table.title2}</span>
                </h3>
                {table.subtitle && (
                  <p className="text-gray-500 text-sm md:text-base mb-6">{table.subtitle}</p>
                )}
                
                <div className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-4 bg-[var(--color-accent)] text-white p-4 font-bold text-sm md:text-base">
                    <div className="col-span-3">Service</div>
                    <div className="col-span-1 text-right">Price (INR)</div>
                  </div>
                  <div className="flex flex-col divide-y divide-gray-100">
                    {table.items.map((item) => (
                      <div key={item.id} className="grid grid-cols-4 p-4 hover:bg-gray-50 transition-colors">
                        <div className="col-span-3 text-[var(--color-text-light)] font-medium text-sm md:text-base">{item.service}</div>
                        <div className="col-span-1 text-right font-bold text-[var(--color-primary)] text-sm md:text-base">{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Important Note */}
        {data.noteTitle && data.noteItems && (
          <div className="bg-[var(--color-bg-alt)] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-amber-500/20">
              <FaPercentage />
            </div>
            <div>
              <h4 className="font-extrabold text-[var(--color-primary)] text-xl mb-3">{data.noteTitle}</h4>
              <ul className="flex flex-col gap-2">
                {data.noteItems.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1 text-[var(--color-accent)]"><FaCheck className="text-xs" /></div>
                    <span className="text-[var(--color-text-light)] font-medium text-sm md:text-base">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
