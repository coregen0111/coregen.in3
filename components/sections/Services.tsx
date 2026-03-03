'use client';

import { Code2, Palette, BarChart3, FileJson, Database, Zap, Brain, Headphones, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with latest technologies and best practices.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
  },
  {
    icon: Palette,
    title: 'Software Designing & Development',
    description: 'End-to-end software solutions tailored to your business requirements and goals.',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization & Dashboards',
    description: 'Interactive dashboards and visualizations for data-driven decision making.',
  },
  {
    icon: FileJson,
    title: 'Business Analytics & Reporting',
    description: 'Comprehensive analytics and reporting solutions to track business performance.',
  },
  {
    icon: Database,
    title: 'API Development & Integration',
    description: 'Robust APIs and seamless integrations with third-party services.',
  },
  {
    icon: Zap,
    title: 'Database Design & Management',
    description: 'Scalable database architecture and optimization for high performance.',
  },
  {
    icon: Brain,
    title: 'Automation & AI Integration',
    description: 'Intelligent automation and AI solutions to streamline operations.',
  },
  {
    icon: Headphones,
    title: 'IT Support & Maintenance',
    description: '24/7 technical support and maintenance for your systems and applications.',
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding section-grid-creamy border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group glass-hover p-6 rounded-xl flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
