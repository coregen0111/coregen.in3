'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const successStories = [
  { text: "Aman: Job Secured! 💼", color: "bg-green-500", border: "border-green-200" },
  { text: "Riya: CoreGen Intern! 🚀", color: "bg-blue-500", border: "border-blue-200" },
  { text: "Aman: Placed 🏆", color: "bg-yellow-400", border: "border-yellow-200" },
  { text: "Vivek: Analyst Role 📊", color: "bg-purple-500", border: "border-purple-200" },
  { text: "Sara: SDE Role 💻", color: "bg-pink-500", border: "border-pink-200" },
  { text: "Rahul: AI Engineer 🤖", color: "bg-cyan-500", border: "border-cyan-200" },
  { text: "Priya: Data scientist 📁", color: "bg-indigo-500", border: "border-indigo-200" },
  { text: "Kabir: UI expert 🎨", color: "bg-orange-500", border: "border-orange-200" },
  { text: "Nikhil: Cloud Architect ☁️", color: "bg-sky-500", border: "border-sky-200" },
  { text: "Ananya: Product Manager 💡", color: "bg-rose-500", border: "border-rose-200" },
  { text: "Ishaan: DevOps Lead 🛠️", color: "bg-emerald-500", border: "border-emerald-200" },
  { text: "Sanya: UX Researcher 🔍", color: "bg-fuchsia-500", border: "border-fuchsia-200" },
];

const slots = [
  { pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-6", spin: "animate-[spin_20s_linear_infinite]", rev: "animate-[spin_20s_linear_infinite_reverse]" },
  { pos: "bottom-10 right-20", spin: "animate-[spin_25s_linear_infinite_reverse]", rev: "animate-[spin_25s_linear_infinite]" },
  { pos: "top-1/2 -left-10", spin: "animate-[spin_22s_linear_infinite_1s]", rev: "animate-[spin_22s_linear_infinite_reverse_1s]" },
  { pos: "-top-10 right-10", spin: "animate-[spin_28s_linear_infinite]", rev: "animate-[spin_28s_linear_infinite_reverse]" },
  { pos: "left-0 bottom-1/4", spin: "animate-[spin_24s_linear_infinite_reverse_2s]", rev: "animate-[spin_24s_linear_infinite_2s]" },
  { pos: "-bottom-16 left-1/3", spin: "animate-[spin_30s_linear_infinite_0.5s]", rev: "animate-[spin_30s_linear_infinite_reverse_0.5s]" },
  { pos: "top-1/4 -right-16", spin: "animate-[spin_32s_linear_infinite_reverse_3s]", rev: "animate-[spin_32s_linear_infinite_3s]" },
  { pos: "bottom-1/2 -right-24", spin: "animate-[spin_35s_linear_infinite_1.5s]", rev: "animate-[spin_35s_linear_infinite_reverse_1.5s]" },
];

export function Hero() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % successStories.length);
    }, 4000); // 4 seconds swap
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 section-padding overflow-hidden section-grid-creamy"
    >
      {/* Scattered background boxes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] w-4 h-4 bg-accent/20 border border-accent/40 rotate-12" />
        <div className="absolute top-[20%] right-[10%] w-6 h-6 bg-accent/10 border border-accent/30 -rotate-12" />
        <div className="absolute bottom-[15%] left-[20%] w-3 h-3 bg-accent/25 border border-accent/50 rotate-45" />
        <div className="absolute bottom-[30%] right-[15%] w-5 h-5 bg-accent/15 border border-accent/40 -rotate-45" />
        <div className="absolute top-[60%] left-[50%] w-2 h-2 bg-accent/30 border border-accent/60 rotate-12" />
        <div className="absolute top-[40%] right-[40%] w-4 h-4 bg-accent/10 border border-accent/30 rotate-3" />
        <div className="absolute top-[15%] left-[30%] w-2 h-2 bg-accent/40 border border-accent/60" />
        <div className="absolute top-[80%] left-[10%] w-4 h-4 bg-accent/5 border border-accent/20 rotate-45" />
        <div className="absolute top-[45%] right-[5%] w-3 h-3 bg-accent/20 border border-accent/40 -rotate-12" />
        <div className="absolute bottom-[40%] left-[40%] w-2 h-2 bg-accent/30 border border-accent/50" />
        <div className="absolute top-[70%] right-[30%] w-5 h-5 bg-accent/10 border border-accent/30 rotate-[30deg]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="text-accent" size={20} />
              <span className="text-sm font-semibold text-accent">Welcome to CoreGen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Innovating Core</span>
              <br />
              <span className="text-slate-900">Technology Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Transforming businesses through cutting-edge software development, data solutions, and intelligent automation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Quote
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="px-8 py-3 border-2 border-primary/20 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Apply Now
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats Preview */}
          <div className="flex flex-col sm:flex-row gap-8 pt-8 justify-center lg:justify-start">
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">1000+</p>
              <p className="text-sm text-slate-600">Active Users</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">250+</p>
              <p className="text-sm text-slate-600">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold gradient-text">50+</p>
              <p className="text-sm text-slate-600">Team Members</p>
            </div>
          </div>
        </div>

        {/* Right - Visual Element */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            {/* Pulsing background glow - larger */}
            <div className="absolute w-[450px] h-[450px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-[120px] opacity-60 animate-pulse" />

            {/* Central Large Logo (Circular container that rotates slowly) */}
            <div className="relative z-20 transition-all duration-700 hover:scale-110">
              <div className="w-64 h-64 md:w-[400px] md:h-[400px] flex items-center justify-center animate-spin-slow">
                <img
                  src="/images/logo-hex-transparent.png"
                  alt="CoreGen Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Orbiting Path (Visual lines) - Kept simple visual orbits but removed the names */}
            <div className="absolute w-[440px] h-[440px] border border-dashed border-slate-300/30 rounded-full" />
            <div className="absolute w-[540px] h-[540px] border border-dashed border-slate-300/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/60">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

