'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes, FaChevronDown, FaRegCalendarAlt } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="w-full flex min-h-[80px] lg:min-h-[100px] items-center justify-between px-4 lg:px-12">
        
        {/* Logo Area */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center">
            <img src={data.logo} alt={data.logoAlt || 'Logo'} className="h-12 sm:h-14 lg:h-[60px] object-contain" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="flex h-10 w-10 items-center justify-center rounded-md text-2xl text-[var(--color-primary)]"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 pl-12">
          {navLinks.map((link) => {
            const hasDropdown = link.subLinks && link.subLinks.length > 0;
            return (
              <div key={link.id} className="relative group py-8">
                {hasDropdown ? (
                  <div 
                    className={`relative flex items-center gap-1.5 text-sm md:text-base font-bold tracking-wide transition-colors cursor-default ${
                      pathname === link.url || (link.subLinks && link.subLinks.some(sub => pathname === sub.url))
                        ? 'text-[var(--color-accent)] after:absolute after:-bottom-[34px] after:left-0 after:h-[3px] after:w-full after:bg-[var(--color-accent)]' 
                        : 'text-[var(--color-primary)] hover:text-[var(--color-accent)]'
                    }`}
                  >
                    {link.label}
                    <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link 
                    href={link.url} 
                    className={`relative flex items-center gap-1.5 text-sm md:text-base font-bold tracking-wide transition-colors ${
                      pathname === link.url 
                        ? 'text-[var(--color-accent)] after:absolute after:-bottom-[34px] after:left-0 after:h-[3px] after:w-full after:bg-[var(--color-accent)]' 
                        : 'text-[var(--color-primary)] hover:text-[var(--color-accent)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <div className="absolute top-[80%] left-0 mt-2 w-[220px] bg-white shadow-lg rounded-b-lg border-t-[3px] border-[var(--color-accent)] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                    <ul className="flex flex-col py-2">
                      {link.subLinks!.map((subLink) => (
                        <li key={subLink.id}>
                          <Link 
                            href={subLink.url}
                            className={`block px-5 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-[var(--color-accent)] ${
                              pathname === subLink.url ? 'text-[var(--color-accent)] bg-gray-50' : 'text-gray-700'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:flex shrink-0">
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              className="flex items-center justify-center gap-2 bg-[var(--color-accent)] pl-5 pr-8 py-3 rounded-l-md rounded-tr-md text-sm md:text-base font-bold text-white hover:opacity-90 transition-colors shadow-md relative"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
            >
              <FaRegCalendarAlt className="text-lg" />
              {data.contactButton.text}
              <FaArrowRight className="text-xs ml-1" />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full flex max-h-[calc(100vh-80px)] w-full flex-col overflow-y-auto border-t border-gray-100 bg-white p-4 shadow-xl lg:hidden">
          {navLinks.map((link) => {
            const hasSubLinks = link.subLinks && link.subLinks.length > 0;
            return (
              <div key={link.id} className="flex flex-col border-b border-gray-50">
                {hasSubLinks ? (
                  <div 
                    onClick={() => setOpenDropdowns(prev => ({ ...prev, [link.id]: !prev[link.id] }))}
                    className={`flex items-center justify-between px-2 py-3 text-sm md:text-base font-bold tracking-wide cursor-pointer ${
                      pathname === link.url || link.subLinks!.some(sub => pathname === sub.url) ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
                    }`}
                  >
                    {link.label}
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${openDropdowns[link.id] ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link 
                    href={link.url} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className={`px-2 py-3 text-sm md:text-base font-bold tracking-wide ${
                      pathname === link.url ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                
                {hasSubLinks && (
                  <div className={`flex flex-col pl-6 overflow-hidden transition-all duration-300 ${openDropdowns[link.id] ? 'max-h-[500px] pb-2' : 'max-h-0'}`}>
                    {link.subLinks!.map(sub => (
                      <Link
                        key={sub.id}
                        href={sub.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-2 text-sm font-medium ${
                          pathname === sub.url ? 'text-[var(--color-accent)]' : 'text-gray-600'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {data.contactButton && (
            <Link 
              href={data.contactButton.url} 
              onClick={() => setMobileMenuOpen(false)} 
              className="mt-6 flex items-center justify-center gap-2 bg-[var(--color-accent)] pl-5 pr-8 py-3 rounded-l-md rounded-tr-md text-sm md:text-base font-bold text-white shadow-md w-max mx-auto"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
            >
              <FaRegCalendarAlt className="text-lg" />
              {data.contactButton.text}
              <FaArrowRight className="text-xs ml-1" />
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
