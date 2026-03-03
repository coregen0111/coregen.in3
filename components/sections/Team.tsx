'use client';

import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Himanshu Rai',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years of experience in technology and business innovation.',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'himanshu@coregen.in',
    },
  },
  {
    name: 'Yash Pratap Singh',
    role: 'Co-Founder & Program Coordinator',
    description: 'Passionate about nurturing talent and building innovative solutions that matter.',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'yash@coregen.in',
    },
  },
];

export function Team() {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Leadership Team</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Meet the visionary team driving innovation and excellence at CoreGen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group glass-hover p-8 rounded-xl flex flex-col h-full"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-foreground">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground text-center mb-1">
                {member.name}
              </h3>
              <p className="text-secondary font-semibold text-center text-sm mb-3">
                {member.role}
              </p>
              <p className="text-foreground/70 text-center text-sm leading-relaxed mb-6 flex-grow">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href={member.socials.linkedin}
                  className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-primary hover:text-secondary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.socials.twitter}
                  className="w-10 h-10 bg-secondary/20 hover:bg-secondary/40 rounded-full flex items-center justify-center text-secondary hover:text-accent transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={`mailto:${member.socials.email}`}
                  className="w-10 h-10 bg-accent/20 hover:bg-accent/40 rounded-full flex items-center justify-center text-accent hover:text-primary transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
