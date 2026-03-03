'use client';

import { FileText, ShieldAlert, Monitor } from 'lucide-react';

const researchProjects = [
  {
    icon: FileText,
    title: 'Rice Leaf Disease Detection Using EfficientNet Transfer Learning and Explainable AI (Grad-CAM)',
    problem: 'Rice crops often suffer from diseases like Bacterial Leaf Blight, Brown Spot, and Leaf Smut. Traditional diagnosis is manual and time-consuming. This research aims to create automated detection using AI.',
    highlights: [
      'EfficientNetV2-S Transfer Learning',
      'Explainable AI (Grad-CAM Heatmap)',
      'Disease Severity Estimation (%)',
      'Real-field dataset usage',
      '78%–81% Accuracy achieved'
    ],
    isDetailed: true
  },
  {
    icon: Monitor,
    title: 'AI-Enabled GPS Based Employee Attendance and Live Monitoring System with Real-time Alerts',
    description: 'A comprehensive system for tracking employee attendance and monitoring live status with integrated GPS and AI-driven alerts.',
    image: '/images/ai-enable.png'
  },
  {
    icon: ShieldAlert,
    title: 'The Art of Deception Through Social Engineering',
    description: 'An in-depth study into the psychological techniques used in social engineering attacks and how to defend against them.',
    image: '/images/security.png'
  }
];

export function ResearchInnovation() {
  return (
    <section id="research" className="section-padding section-grid-creamy border-t border-black/5 overflow-hidden">
      {/* Subtle Research Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-[15%] left-[10%] w-32 h-32 border-2 border-primary/30 rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 border border-secondary/20 rounded-lg rotate-12" />
        <div className="absolute top-[40%] right-[25%] w-24 h-24 border-2 border-accent/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Research & Innovation</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Exploring the frontiers of technology through rigorous academic research and practical innovation.
          </p>
        </div>

        {/* Research Projects Grid */}
        <div className="space-y-8">
          {researchProjects.map((project, index) => {
            const Icon = project.icon;
            if (project.isDetailed) {
              return (
                <div key={index} className="glass-hover p-8 rounded-xl bg-white border border-black/5 shadow-sm">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Research Problem</h4>
                        <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-50 p-6 rounded-lg border border-black/5">
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Innovation Highlights</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.highlights?.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 text-slate-700 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="glass-hover p-8 rounded-xl bg-white border border-black/5 shadow-sm flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-6 flex-1">
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm max-w-2xl">{project.description}</p>
                  </div>
                </div>
                {project.image && (
                  <div className="md:w-48 w-full h-32 relative rounded-lg overflow-hidden border border-black/5 shrink-0 bg-slate-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
