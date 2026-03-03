'use client';

import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-green-100 bg-[#f0fff4] section-grid-light-green py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="CoreGen Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold gradient-text">CoreGen</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Innovating core technology solutions for modern businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@coregen.in"
                  className="text-slate-600 hover:text-primary transition-colors break-all"
                >
                  contact@coregen.in
                </a>
              </li>
              <li>
                <a
                  href="mailto:coregen0111@gmail.com"
                  className="text-slate-600 hover:text-primary transition-colors break-all text-xs"
                >
                  HR: coregen0111@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918545840111"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  +91 85458 40111
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/coregen-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-primary hover:text-secondary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/coregen.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/20 hover:bg-secondary/40 rounded-full flex items-center justify-center text-secondary hover:text-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/918545840111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366]/20 hover:bg-[#25D366]/40 rounded-full flex items-center justify-center text-[#25D366] hover:text-[#128C7E] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="mailto:contact@coregen.in"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-primary hover:text-secondary transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {currentYear} CoreGen. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
