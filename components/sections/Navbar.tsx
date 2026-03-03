'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Solutions', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0fff4]/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/logo.png"
              alt="CoreGen Logo"
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl md:text-2xl font-bold gradient-text">
              CoreGen
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-800 hover:text-primary font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}

            {/* Careers Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-slate-800 hover:text-primary font-medium transition-colors duration-300">
                Careers
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-0 bg-white/95 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-40 shadow-xl border border-green-50">
                <button
                  onClick={() => scrollToSection('careers')}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:text-primary hover:bg-green-50 transition-colors"
                >
                  Internship
                </button>
                <button
                  onClick={() => scrollToSection('careers')}
                  className="w-full text-left px-4 py-3 text-slate-700 hover:text-primary hover:bg-green-50 transition-colors border-t border-green-50"
                >
                  Job Openings
                </button>
              </div>
            </div>
          </div>

          {/* Apply Now Button */}
          <button
            onClick={() => scrollToSection('careers')}
            className="hidden md:inline-flex px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Apply Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-border">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-slate-800 hover:text-primary hover:bg-green-50 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="space-y-2 px-4 py-2">
              <p className="text-sm text-slate-500 font-semibold mb-2">Careers</p>
              <button
                onClick={() => scrollToSection('careers')}
                className="block w-full text-left px-2 py-2 text-slate-800 hover:text-primary hover:bg-green-50 rounded transition-colors"
              >
                Internship
              </button>
              <button
                onClick={() => scrollToSection('careers')}
                className="block w-full text-left px-2 py-2 text-slate-800 hover:text-primary hover:bg-green-50 rounded transition-colors"
              >
                Job Openings
              </button>
            </div>
            <button
              onClick={() => scrollToSection('careers')}
              className="w-full mx-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
