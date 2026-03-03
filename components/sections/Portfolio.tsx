'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Interactive dashboard for real-time business analytics and performance tracking.',
    technologies: ['React', 'D3.js', 'PostgreSQL', 'Express'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'AI Content Generator',
    category: 'AI Integration',
    description: 'Machine learning-powered content generation system with natural language processing.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'CRM System',
    category: 'Software Development',
    description: 'Enterprise CRM solution with automation, reporting, and team collaboration features.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'IoT Monitoring Platform',
    category: 'Cloud & Database',
    description: 'Real-time monitoring system for IoT devices with predictive analytics.',
    technologies: ['Next.js', 'AWS', 'GraphQL', 'InfluxDB'],
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    title: 'Mobile App',
    category: 'Software Development',
    description: 'Cross-platform mobile application with offline support and cloud synchronization.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
    links: {
      live: '#',
      github: '#',
    },
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Showcase of our successful projects and innovative solutions delivered to clients worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-hover p-6 rounded-xl flex flex-col h-full group"
            >
              {/* Project Header */}
              <div className="mb-4">
                <p className="text-sm text-accent font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.links.live}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary/20 text-secondary hover:bg-secondary/40 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  View
                </a>
                <a
                  href={project.links.github}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 text-primary hover:bg-primary/40 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
