import React from 'react';
import { useTechMarquee } from './useTechMarquee';

export const TechMarquee: React.FC = () => {
  const { techItems } = useTechMarquee();

  const getTechLogo = (name: string) => {
    switch (name) {
      case 'React':
        return (
          <svg viewBox="-11.5 -10.23 23 20.46" className="w-5 h-5 select-none" fill="none" stroke="#61DAFB" strokeWidth="1.2">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            <circle r="2" fill="#61DAFB"/>
          </svg>
        );
      case 'TypeScript':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3178C6] select-none rounded-[4px]">
            <path d="M1.08 0h21.839c.6 0 1.08.48 1.08 1.08v21.84c0 .6-.48 1.08-1.08 1.08H1.08C.48 24 0 23.52 0 22.92V1.08C0 .48.48 0 1.08 0zm11.233 13.921c-.131-.767-.54-1.371-1.229-1.815-.688-.442-1.503-.665-2.443-.665-.968 0-1.77.247-2.404.743-.636.495-.975 1.18-.975 2.052 0 .809.309 1.439.924 1.888.617.45 1.494.759 2.632.932 1.34.204 2.296.48 2.871.826.574.346.974.778 1.199 1.295.225.518.337 1.155.337 1.91 0 .979-.271 1.792-.816 2.438-.544.646-1.292 1.115-2.24 1.408-.949.292-2.02.438-3.213.438-1.63 0-2.919-.344-3.868-1.034-.948-.689-1.488-1.688-1.621-2.997h2.883c.105.599.412 1.05.922 1.35.51.3 1.166.451 1.97.451.844 0 1.481-.17 1.912-.511.43-.341.646-.814.646-1.42 0-.495-.143-.889-.427-1.18-.285-.293-.728-.521-1.328-.684l-2.055-.544c-1.574-.419-2.712-.992-3.415-1.721-.703-.729-1.055-1.688-1.055-2.878 0-.961.272-1.782.816-2.464.544-.682 1.282-1.188 2.216-1.519.934-.33 1.989-.496 3.165-.496 1.425 0 2.61.289 3.555.866.945.578 1.499 1.406 1.661 2.486h-2.866zm10.742-5.748h-3.322v13.882h-3.003v-13.882h-3.322v-2.614h9.647v2.614z"/>
          </svg>
        );
      case 'Node.js':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#339933] select-none">
            <path d="M12 1.22L3.18 6.32v10.2L12 21.62l8.82-5.1v-10.2L12 1.22zm7.3 14.33l-7.3 4.21-7.3-4.21v-8.43l7.3-4.21 7.3 4.21v8.43zm-7.3-6.86a2.53 2.53 0 00-2.53 2.53v4.45h1.75V11.2a.78.78 0 011.56 0v4.45H14.7V11.2a2.53 2.53 0 00-2.7-2.51z"/>
          </svg>
        );
      case 'C#':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#239120] select-none">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.5 15.6c-.3.4-.8.7-1.4.9-.6.2-1.3.3-2.1.3-.9 0-1.6-.2-2.2-.6-.6-.4-1.1-.9-1.4-1.6-.3-.7-.5-1.5-.5-2.5s.2-1.8.5-2.5c.3-.7.8-1.2 1.4-1.6.6-.4 1.3-.6 2.2-.6.8 0 1.5.1 2.1.3.6.2 1.1.5 1.4.9l-1.4 1.4c-.2-.2-.5-.4-.8-.5-.3-.1-.7-.2-1.1-.2-.6 0-1.1.2-1.5.5-.4.3-.7.8-.9 1.4-.2.6-.3 1.3-.3 2.1s.1 1.5.3 2.1c.2.6.5 1.1.9 1.4.4.3.9.5 1.5.5.4 0 .8-.1 1.1-.2.3-.1.6-.3.8-.5l1.4 1.4zm4.5-5.6h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/>
          </svg>
        );
      case 'ASP.NET Core':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#512BD4] select-none">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.6 15.6l-1.8 1.8-3.8-3.8-3.8 3.8-1.8-1.8 3.8-3.8-3.8-3.8 1.8-1.8 3.8 3.8 3.8-3.8 1.8 1.8-3.8 3.8 3.8 3.8z"/>
          </svg>
        );
      case 'Azure Cloud':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0078d4] select-none">
            <path d="M5.4 19.3L0 12.8 10.9 3l5.3 6.6L5.4 19.3zM24 16.8l-7.7-10.7-5.4 6.6 7.7 10.7L24 16.8z"/>
          </svg>
        );
      case 'AWS Cloud':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF9900] select-none">
            <path d="M12.2 4.6c-2.3 0-4.3 1.2-5.3 3.1-.3.5-.1 1.2.4 1.5.5.3 1.2.1 1.5-.4.7-1.3 2.1-2.2 3.7-2.2 2.3 0 4.2 1.9 4.2 4.2 0 1.2-.5 2.3-1.3 3.1l-1-1c-.5-.5-1.3-.1-1.3.6v4c0 .6.4 1 1 1h4c.7 0 1-.8.6-1.3l-1-1c1.5-1.4 2.4-3.4 2.4-5.6-.1-4.3-3.6-7.7-7.9-7.7zM4 20c4.1 2.5 9.3 2.5 13.4 0 .5-.3.6-1 .3-1.5-.3-.5-1-.6-1.5-.3-3.3 2-7.5 2-10.8 0-.5-.3-1.2-.2-1.5.3-.4.5-.3 1.2.1 1.5z"/>
          </svg>
        );
      case 'SQL Server':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#CC292B] select-none">
            <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 11H6v-2h12v2zm0-4H6V9h12v2z"/>
          </svg>
        );
      case 'PostgreSQL':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#336791] select-none">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm2.7 15.6c-.6.4-1.3.6-2.1.6H9.2v-8.4h3.4c.8 0 1.5.2 2.1.6.6.4.9.9.9 1.6v4c0 .7-.3 1.2-.9 1.6z"/>
          </svg>
        );
      case 'n8n Agents':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#FF6C37] select-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="12" r="3" fill="#FF6C37" />
            <circle cx="18" cy="6" r="3" fill="#FF6C37" />
            <circle cx="18" cy="18" r="3" fill="#FF6C37" />
            <line x1="9" y1="12" x2="15" y2="7" />
            <line x1="9" y1="12" x2="15" y2="17" />
          </svg>
        );
      case 'Zapier Automation':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF4F00] select-none">
            <path d="M12.015 8.358V0L6.012 10.428h6.003v8.358l6.002-10.428h-6.002z"/>
          </svg>
        );
      case 'Framer Motion':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F024B6] select-none">
            <path d="M0 0h24v8l-12 12v-8H0zm12 12h12v12L12 12zm0-12v12L24 0z"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent-color select-none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        );
    }
  };

  // Duplicate items twice to ensure smooth, continuous loop
  const displayItems = [...techItems, ...techItems, ...techItems];

  return (
    <section className="relative py-10 bg-card-bg border-y border-border-color overflow-hidden w-full select-none z-10">
      {/* Cinematic Blur Edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-color to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-color to-transparent z-20 pointer-events-none" />

      <div className="flex overflow-hidden w-full relative">
        <div className="animate-marquee flex gap-6 md:gap-10 py-2">
          {displayItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-color bg-bg-color/50 backdrop-blur-sm shadow-sm hover:border-accent-color transition-colors duration-300 whitespace-nowrap"
            >
              {getTechLogo(item.name)}
              <span className="text-xs font-mono font-bold tracking-wider text-text-primary">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechMarquee;
