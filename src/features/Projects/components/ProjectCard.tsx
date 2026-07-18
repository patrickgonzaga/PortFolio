import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { type Project } from '../Projects.types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Tilt calculations (capped at 10 degrees to maintain professional weight)
    const rotateX = -((y - yc) / yc) * 10;
    const rotateY = ((x - xc) / xc) * 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });

    // Spotlight gradient tracking mouse position
    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;
    setGlowStyle({
      background: `radial-gradient(circle 250px at ${xPct}% ${yPct}%, var(--glow-color) 0%, transparent 85%)`,
    });
  };

  const handleMouseLeave = () => {
    // Reset cards to default
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    });
    setGlowStyle({
      background: 'transparent',
      transition: 'background 0.5s ease-out',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group cursor-pointer rounded-2xl border border-border-color bg-card-bg overflow-hidden relative transition-all duration-300 flex flex-col h-full hover:border-accent-color hover:shadow-xl hover:shadow-glow-color"
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={glowStyle}
      />

      {/* Top accent light reflection */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-color to-transparent scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

      {/* Project Thumbnail Image */}
      {project.image && (
        <div className="w-full h-48 sm:h-56 overflow-hidden relative border-b border-border-color group-hover:border-accent-color transition-colors duration-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
            loading="lazy"
            onError={(e) => {
              // Graceful fallback for local files
              (e.target as HTMLElement).style.display = 'none';
              const parent = (e.target as HTMLElement).parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = "w-full h-full flex flex-col items-center justify-center bg-bg-color/50 text-accent-color/60";
                fallback.innerHTML = `
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                `;
                parent.appendChild(fallback);
              }
            }}
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      )}

      {/* Content details */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-color transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm text-text-secondary font-light mb-6 flex-grow leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech tags list */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2.5 py-0.5 text-[10px] font-mono border border-border-color text-text-secondary rounded-full bg-bg-color/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
