import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useContact } from './useContact';

export const Contact: React.FC = () => {
  const { form, status, socialLinks, handleChange, handleSubmit } = useContact();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'email':
        return <Mail size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 border-t border-border-color relative overflow-hidden z-10">
      
      {/* Background glow orb */}
      <div className="bg-glow-orb w-[250px] h-[250px] md:w-[500px] md:h-[500px] -bottom-20 -right-20 opacity-20" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Let's Talk CTA banner */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent-color"></span>
                <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
                  Get In Touch
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight">
                Let's build<br />
                something <span className="text-accent-color">great.</span>
              </h2>
              
              <p className="text-text-secondary font-light max-w-sm leading-relaxed">
                I am currently open for backend engineering, cloud integration, or AI automation projects. Send me a message and I will get back to you shortly!
              </p>

              {/* Social links */}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full border border-border-color bg-card-bg text-text-secondary hover:text-text-primary hover:border-accent-color hover:shadow-lg hover:shadow-glow-color transition-all duration-300 flex items-center justify-center cursor-pointer"
                    title={link.label}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Glass panel form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl glass-panel relative overflow-hidden group hover:border-accent-color transition-colors duration-500 shadow-xl"
            >
              {/* Glowing accent border */}
              <div className="absolute inset-0 rounded-3xl border border-accent-color/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-semibold text-text-secondary uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-xl border border-border-color bg-bg-color/50 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-color focus:ring-1 focus:ring-accent-color transition-all duration-300 text-sm font-semibold"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-semibold text-text-secondary uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    placeholder="name@company.com"
                    className="w-full px-5 py-4 rounded-xl border border-border-color bg-bg-color/50 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-color focus:ring-1 focus:ring-accent-color transition-all duration-300 text-sm font-semibold"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-semibold text-text-secondary uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-xl border border-border-color bg-bg-color/50 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-color focus:ring-1 focus:ring-accent-color transition-all duration-300 text-sm font-semibold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full py-4 rounded-xl font-bold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 border border-transparent shadow-md cursor-pointer ${
                    status === 'success'
                      ? 'bg-green-600 text-white'
                      : status === 'submitting'
                      ? 'bg-text-secondary text-bg-color'
                      : 'bg-text-primary text-bg-color hover:bg-accent-color hover:text-white'
                  }`}
                >
                  {status === 'success' ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bg-color border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;
