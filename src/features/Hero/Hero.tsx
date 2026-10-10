import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { useHero } from './useHero';
import { HeroSculpture } from './HeroSculpture';
import './hero.css';

export const Hero = () => {
  const { personal } = useHero();
  const [first, ...rest] = personal.name.split(' ');

  return (
    <section id="home" className="section portfolio-hero" aria-labelledby="hero-name">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-topline">
          <span>Independent thinking. Enterprise experience.</span>
          <a href="#contact" className="hero-availability">
            <span aria-hidden="true" /> Open to opportunities <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-eyebrow"><span aria-hidden="true">01 /</span> {personal.title}</p>
            <h1 id="hero-name" className="hero-name">
              <span>{first}</span>
              <span className="hero-surname">{rest.join(' ')}<span className="hero-period">.</span></span>
            </h1>
            <p className="hero-statement">Complex systems.<br />Beautifully engineered.</p>
            <p className="hero-description">
              I turn real business challenges into resilient software.
              From enterprise .NET to cloud architecture and AI automation.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="hero-primary">Explore my work <ArrowUpRight size={19} /></a>
              <a href={personal.resumePdf} download className="hero-resume"><Download size={16} /> Get my resume</a>
            </div>
          </div>
          <HeroSculpture />
        </div>
        <div className="hero-bottomline">
          <dl className="hero-experience">
            <div><dt>20+</dt><dd>Years in enterprise IT</dd></div>
            <div><dt>5+</dt><dd>Years in C# & modern .NET</dd></div>
            <div><dt>15+</dt><dd>Years in VB.NET</dd></div>
          </dl>
          <a href="#about" className="hero-scroll">A little more about me <ArrowDown size={16} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
