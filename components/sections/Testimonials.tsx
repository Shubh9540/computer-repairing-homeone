'use client';
import React, { useRef, useState, useEffect } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!data) return null;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth / cardsPerView;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth / cardsPerView;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (activeIndex <= 0) {
        scrollToIndex(Math.max(0, data.testimonials.length - cardsPerView));
      } else {
        scrollToIndex(activeIndex - 1);
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
        scrollToIndex(0);
      } else {
        scrollToIndex(activeIndex + 1);
      }
    }
  };

  const totalDots = Math.max(1, data.testimonials.length - cardsPerView + 1);
  const dots = Array.from({ length: totalDots });

  return (
    <section id="testimonials" className="py-12 lg:py-12 relative overflow-hidden bg-[var(--color-bg-alt)]">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[var(--color-text-light)]">
          <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots2)" />
        </svg>
      </div>
      <div className="absolute top-0 right-10 text-9xl text-blue-50 opacity-50 hidden lg:block rotate-180 z-0 select-none">
        <FaQuoteLeft />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -mb-16 -ml-16 rounded-full bg-amber-50 opacity-50 hidden md:block z-0"></div>

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

        <div className="relative group px-2 sm:px-6 md:px-12">
          {/* Slider Controls */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 sm:-left-2 md:-left-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[var(--color-accent)] z-30 cursor-pointer hover:bg-gray-50 hidden md:flex transition-transform hover:scale-110 active:scale-95"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 sm:-right-2 md:-right-4 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[var(--color-accent)] z-30 cursor-pointer hover:bg-gray-50 hidden md:flex transition-transform hover:scale-110 active:scale-95"
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex gap-4 relative overflow-hidden flex-shrink-0 snap-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                {/* Left Side Content */}
                <div className="flex-1 flex flex-col z-10 relative">
                  <div className="text-[var(--color-accent)] text-xl mb-4">
                    <FaQuoteLeft />
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow leading-relaxed">
                    {item.quote}
                  </p>

                  <div className="flex text-[#ffc107] text-sm mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < item.rating ? "" : "text-gray-200"} />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover bg-gray-100"
                    />
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)] text-sm">{item.name}</h4>
                      {item.location && (
                        <div className="flex items-center text-xs text-[var(--color-accent)] gap-1 mt-0.5">
                          <FaLocationDot />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side Product Image */}
                {item.productImage && (
                  <div className="w-[120px] shrink-0 h-full bg-gray-50/50 rounded-xl flex items-center justify-center p-2 relative z-0">
                    <img
                      src={item.productImage}
                      alt="Product"
                      className="max-w-full max-h-[150px] object-contain drop-shadow-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalDots > 1 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {dots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`rounded-full transition-all duration-300 ${activeIndex === i
                    ? 'w-3 h-3 bg-[var(--color-accent)]'
                    : 'w-2 h-2 bg-blue-200 hover:bg-blue-300'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
