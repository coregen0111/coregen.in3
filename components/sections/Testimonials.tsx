'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovations Inc',
    company: 'Tech Innovations Inc',
    content: 'CoreGen exceeded our expectations with their innovative approach to our web application development. The team was responsive, professional, and delivered ahead of schedule.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, Data Dynamics',
    company: 'Data Dynamics',
    content: 'The analytics dashboard they created transformed how we understand our data. Their AI integration was seamless and has significantly improved our business operations.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'CTO, Cloud Systems Corp',
    company: 'Cloud Systems Corp',
    content: 'Working with CoreGen on our infrastructure modernization was a game-changer. Their expertise in cloud systems and database optimization saved us significant costs.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding section-grid-creamy border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            See what our clients have to say about their experience working with CoreGen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-hover p-8 rounded-xl flex flex-col group bg-white/50 border border-black/5"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-base leading-relaxed mb-6 flex-grow italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-black/10 pt-4">
                <p className="font-semibold text-slate-900">
                  {testimonial.name}
                </p>
                <p className="text-secondary text-sm">
                  {testimonial.role}
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
