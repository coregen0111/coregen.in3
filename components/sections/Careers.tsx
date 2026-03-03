'use client';

import { useState } from 'react';
import { Briefcase, Users } from 'lucide-react';

type FormType = 'internship' | 'job' | null;

export function Careers() {
  const [selectedForm, setSelectedForm] = useState<FormType>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    const formData = new FormData(e.currentTarget);
    const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
    let resumeData = null;

    // Convert file to Base64
    if (fileInput?.files?.[0]) {
      const file = fileInput.files[0];
      resumeData = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
          base64: (reader.result as string).split(',')[1],
          name: file.name,
          type: file.type
        });
        reader.readAsDataURL(file);
      });
    }

    const data: any = {
      formType: selectedForm === 'internship' ? 'Internship Application' : 'Job Application',
      timestamp: new Date().toLocaleString(),
      resume: resumeData
    };

    formData.forEach((value, key) => {
      if (key !== 'resume') { // Skip the raw file object
        data[key] = value;
      }
    });

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwITvVMiUwAmrjDh4M9SpmxINzSKeWnzkMH5l_Eo-zUnpdbC1DJspEtTMZ53D2F8uIy/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
      });

      setSubmitStatus('success');
      setTimeout(() => {
        setSubmitStatus('idle');
        setSelectedForm(null);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="careers" className="section-padding section-grid-creamy border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Join Our Team</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            We're looking for talented individuals passionate about technology and innovation. Apply now to be part of CoreGen!
          </p>
        </div>

        {/* Form Selection */}
        {!selectedForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            {/* Internship Card */}
            <button
              onClick={() => setSelectedForm('internship')}
              className="glass-hover p-8 rounded-xl flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Internship Program</h3>
              <p className="text-slate-600 text-sm mb-4">
                Launch your career with hands-on experience and mentorship from industry experts.
              </p>
              <span className="text-primary font-semibold text-sm">Apply Now →</span>
            </button>

            {/* Job Opening Card */}
            <button
              onClick={() => setSelectedForm('job')}
              className="glass-hover p-8 rounded-xl flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Job Opening</h3>
              <p className="text-slate-600 text-sm mb-4">
                Explore career opportunities and join our growing team of professionals.
              </p>
              <span className="text-secondary font-semibold text-sm">Apply Now →</span>
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto glass-hover p-8 rounded-xl bg-white/50 border border-black/10">
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedForm === 'internship' ? 'Internship Application' : 'Job Application'}
              </h3>
              <button
                onClick={() => setSelectedForm(null)}
                className="text-slate-500 hover:text-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
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
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    {selectedForm === 'internship' ? 'University' : 'Current Role'}
                  </label>
                  <input
                    type="text"
                    name="university_role"
                    required
                    placeholder={selectedForm === 'internship' ? 'Your university' : 'Your current position'}
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Dropdown - Position (Only for Internship) */}
              {selectedForm === 'internship' && (
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Position Applying For
                  </label>
                  <div className="relative">
                    <select
                      required
                      name="position"
                      className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a position</option>
                      <option value="fullstack">Full-Stack Web Developer Intern</option>
                      <option value="python">Python Developer Intern</option>
                      <option value="datascience">Data Science & Analytics Intern</option>
                      <option value="ai">Artificial Intelligence (AI) Intern</option>
                      <option value="frontend">Front-End Developer Intern</option>
                      <option value="backend">BackEnd Developer Intern</option>
                      <option value="java">Java Developer Intern</option>
                      <option value="app">App Development Intern</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Row 3 */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  {selectedForm === 'internship' ? 'Field of Study' : 'Years of Experience'}
                </label>
                <input
                  type="text"
                  name="field_study_experience"
                  required
                  placeholder={selectedForm === 'internship' ? 'e.g., Computer Science' : 'e.g., 5+ years'}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  required
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2">
                  Upload Resume/CV
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm">
                  ✓ Application submitted successfully! We'll be in touch soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">
                  ✗ Error submitting form. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' ? 'Submitting...' : 'Submit Application'}
              </button>

              {/* Back Button */}
              <button
                type="button"
                onClick={() => setSelectedForm(null)}
                className="w-full px-6 py-3 border border-black/10 text-slate-700 rounded-lg font-semibold hover:bg-black/5 transition-all duration-300"
              >
                Back
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
