'use client';
import React, { useState, useEffect, useRef } from 'react';
import { AchievementData } from '@/types/templates.types';
import { FaUsers, FaWrench, FaThumbsUp, FaCalendarAlt, FaAward, FaHardHat, FaHome, FaSnowflake } from 'react-icons/fa';

const AnimatedCounter = ({ value }: { value?: string }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  const safeValue = value || '';
  const numberStr = safeValue.replace(/[^0-9]/g, '');
  const target = parseInt(numberStr, 10);
  const suffix = safeValue.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = target;
          const duration = 2000;
          const stepTime = 20; // 50fps
          const steps = duration / stepTime;
          const increment = end / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  if (!target) return <span>{value}</span>;

  return <span ref={counterRef}>{count.toLocaleString()}{suffix}</span>;
};

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaWrench': return <FaWrench />;
    case 'FaThumbsUp': return <FaThumbsUp />;
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaAward': return <FaAward />;
    case 'FaUserTie': return <FaHardHat />;
    case 'FaHome': return <FaHome />;
    case 'MdAir': return <FaSnowflake />;
    default: return <FaUsers />;
  }
};

export const Achievement = ({ data }: { data?: AchievementData }) => {
  if (!data) return null;

  return (
    <section
      className="relative py-16 lg:py-12 bg-primary text-white bg-cover bg-center"
      style={data.bgImage ? { backgroundImage: `url(${data.bgImage})` } : undefined}
    >
      {/* Dark solid overlay so text is 100% readable and background image does not wash out */}
      <div className="absolute inset-0 bg-[#161b22] opacity-90 z-0"></div>

      {/* Accent shape overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-bl-[100%] opacity-15 z-0 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-tr-[100%] opacity-15 z-0 hidden md:block"></div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {data.subtitle && (
            <div className="inline-block px-6 py-2 rounded-full border border-blue-500/50 bg-[var(--color-primary)]/50 text-sm font-bold tracking-wider mb-6 backdrop-blur-sm">
              {data.subtitle}
            </div>
          )}

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {data.title1}{' '}
            {data.titleHighlight && (
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>
            )}
            {' '}{data.title2}
          </h2>

          {data.description && (
            <p className="text-gray-300 text-lg">
              {data.description}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${data.achievements.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-blue-800/50`}>
          {data.achievements.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[var(--color-accent)]/30 bg-[var(--color-accent)] flex items-center justify-center text-4xl mb-6 shadow-[0_0_20px_rgba(0,123,255,0.4)]">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                <AnimatedCounter value={item.count || item.value} />
              </h3>
              <p className="text-gray-300 text-lg">{item.title || item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
