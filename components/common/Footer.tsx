'use client';
import React, { useEffect, useState } from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';

export const Footer = ({ data }: { data?: FooterData }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer 
      className="w-full relative bg-[var(--color-primary)] text-white bg-cover bg-center bg-no-repeat"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      <div className="absolute inset-0 bg-[#0d1117] opacity-90 z-0"></div>
      
      {/* Main Content Area */}
      <div className="relative z-10 pt-16 pb-12">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:pr-[250px]">
            
            {/* Column 1: Brand & Social */}
            <div className="flex flex-col">
              <Link href="/">
                <img src={data.logo || "/main logo/header logo.png"} alt={data.logoAlt || 'Logo'} className="h-14 w-auto object-contain object-left mb-6" />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {data.description}
              </p>
              <div className="flex items-center gap-3">
                <Link href={data.socialLinks[0]?.url || '#'} className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-md text-sm">
                  <FaFacebookF />
                </Link>
                <Link href={data.socialLinks[1]?.url || '#'} className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-md text-sm">
                  <FaInstagram />
                </Link>
                <Link href={data.socialLinks[2]?.url || '#'} className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-md text-sm">
                  <FaLinkedinIn />
                </Link>
                <Link href={data.socialLinks[3]?.url || '#'} className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-md text-sm">
                  <FaYoutube />
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:border-l lg:border-white/10 lg:pl-8">
              <h3 className="text-lg font-bold text-white mb-6">
                Quick Links
                <div className="w-8 h-[2px] bg-[var(--color-accent)] mt-2"></div>
              </h3>
              <ul className="flex flex-col gap-3">
                {data.quickLinks.map(link => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-300 text-sm hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                      <FaChevronRight className="text-[var(--color-accent)] text-[10px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="lg:border-l lg:border-white/10 lg:pl-8">
              <h3 className="text-lg font-bold text-white mb-6">
                Our Services
                <div className="w-8 h-[2px] bg-[var(--color-accent)] mt-2"></div>
              </h3>
              <ul className="flex flex-col gap-3">
                {data.servicesLinks.map(link => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-300 text-sm hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                      <FaChevronRight className="text-[var(--color-accent)] text-[10px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div className="lg:border-l lg:border-white/10 lg:pl-8">
              <h3 className="text-lg font-bold text-white mb-6">
                Contact Information
                <div className="w-8 h-[2px] bg-[var(--color-accent)] mt-2"></div>
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0 text-base shadow-lg shadow-amber-500/20">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-snug">{data.contactInfo.address}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0 text-base shadow-lg shadow-amber-500/20">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{data.contactInfo.phone}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0 text-base shadow-lg shadow-amber-500/20">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{data.contactInfo.email}</p>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="relative z-10 border-t border-white/10 py-5 bg-[var(--color-primary)]/50 backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex justify-start">
          <p className="text-gray-400 text-xs">
            © 2026 TechFix. All Rights Reserved.Powered by Lestow
          </p>
        </div>
      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaChevronRight className="-rotate-90" />
        </button>
      )}

    </footer>
  );
};
