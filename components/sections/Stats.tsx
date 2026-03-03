'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, Users2, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: 1000,
    label: 'Total Visitors',
    suffix: '+',
  },
  {
    icon: Briefcase,
    number: 250,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    icon: Users2,
    number: 500,
    label: 'Interns Trained',
    suffix: '+',
  },
  {
    icon: Zap,
    number: 40,
    label: 'Technologies Used',
    suffix: '+',
  },
];

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}</div>;
}

export function Stats() {
  return (
    <section className="section-padding section-grid-creamy border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            <span className="gradient-text">Our Impact</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Delivering measurable results and creating value for businesses worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-hover p-8 rounded-xl text-center group bg-white/50 border border-black/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                  <Icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 animate-counter text-slate-900">
                  <AnimatedCounter target={stat.number} />
                  <span className="text-lg">{stat.suffix}</span>
                </div>
                <p className="text-slate-700 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
