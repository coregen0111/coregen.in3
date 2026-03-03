export function About() {
  return (
    <section id="about" className="section-padding section-grid-creamy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">About CoreGen</span>
              </h2>
              <p className="text-slate-800 leading-relaxed text-lg">
                CoreGen is a forward-thinking technology company dedicated to delivering innovative solutions that transform businesses. With a focus on quality, reliability, and customer success, we've built a reputation for excellence in software development, data analytics, and digital transformation.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Expert Team</h3>
                  <p className="text-slate-600 text-sm">Talented professionals with years of industry experience</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Proven Track Record</h3>
                  <p className="text-slate-600 text-sm">250+ successful projects across diverse industries</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Innovative Solutions</h3>
                  <p className="text-slate-600 text-sm">Leveraging latest technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center w-full">
            <div className="glass p-2 md:p-3 rounded-2xl w-full max-w-[500px] hover:scale-[1.02] transition-transform duration-500 shadow-xl overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/about.jpeg"
                  alt="About CoreGen"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
