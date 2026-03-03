'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: 'Contact Form',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwITvVMiUwAmrjDh4M9SpmxINzSKeWnzkMH5l_Eo-zUnpdbC1DJspEtTMZ53D2F8uIy/exec', {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for simple POST
        body: JSON.stringify(data),
      });

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding section-grid-creamy border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">Get Quote</span>
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Have a project in mind or need technical consultation? Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:contact@coregen.in"
                className="flex items-start gap-4 p-4 glass-hover rounded-lg group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <p className="text-slate-900 font-semibold break-all">contact@coregen.in</p>
                </div>
              </a>

              {/* HR Email */}
              <a
                href="mailto:coregen0111@gmail.com"
                className="flex items-start gap-4 p-4 glass-hover rounded-lg group cursor-pointer"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-slate-500 mb-1">HR Recruitment</p>
                  <p className="text-slate-900 font-semibold break-all">coregen0111@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918545840111"
                className="flex items-start gap-4 p-4 glass-hover rounded-lg group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-slate-500 mb-1">Phone</p>
                  <p className="text-slate-900 font-semibold">+91 85458 40111</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 glass rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p className="text-slate-900 font-semibold">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-hover p-8 rounded-xl border border-black/5 bg-white/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Service Required
                </label>
                <select
                  required
                  name="service"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="software">Software Development</option>
                  <option value="data">Data Visualization</option>
                  <option value="analytics">Business Analytics</option>
                  <option value="api">API Development</option>
                  <option value="database">Database Design</option>
                  <option value="ai">AI Integration</option>
                  <option value="support">IT Support</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-accent/20 border border-accent rounded-lg text-accent text-sm">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
                  ✗ Error sending message. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
