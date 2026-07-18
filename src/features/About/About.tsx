import React from 'react';
import { motion } from 'framer-motion';
import { useAbout } from './useAbout';

export const About: React.FC = () => {
  const { bioParagraphs, stats, avatarUrl } = useAbout();

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-accent-color"></span>
            <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            My Background<span className="text-accent-color">.</span>
          </h2>
        </motion.div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Bio Text & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 text-text-secondary text-base sm:text-lg leading-relaxed font-light"
            >
              {/* PLACEHOLDER BIOGRAPHY TEXT */}
              {bioParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-panel flex flex-col gap-1 relative overflow-hidden group hover:border-accent-color transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Avatar / Photo Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl p-3 glass-panel group hover:shadow-2xl hover:shadow-glow-color hover:border-accent-color transition-all duration-500 ease-out"
            >
              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-3xl border border-accent-color/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* PLACEHOLDER PHOTO/AVATAR CONTAINER
                  Patrick: You can replace the standard image source below with your own photograph (/pat.png). 
                  Ensure the image file is placed inside the public directory. */}
              <div className="w-full h-full rounded-[20px] overflow-hidden relative bg-bg-color">
                <img
                  src={avatarUrl}
                  alt="Patrick Gonzaga"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to stylized abstract SVG if local image does not exist
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const svg = document.createElement('div');
                      svg.className = "w-full h-full flex flex-col items-center justify-center bg-card-bg text-accent-color gap-4";
                      svg.innerHTML = `
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span class="text-xs font-mono text-text-secondary tracking-widest uppercase">Patrick Gonzaga</span>
                      `;
                      parent.appendChild(svg);
                    }
                  }}
                />
                
                {/* Subtle dark layout grid layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-color/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;
