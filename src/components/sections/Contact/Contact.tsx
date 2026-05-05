import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-20 border-t border-[var(--border-color)]" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[var(--text-primary)]"></span>
            <span className="text-sm tracking-widest uppercase text-[var(--text-secondary)] font-mono">
              What's Next
            </span>
            <span className="w-8 h-[1px] bg-[var(--text-primary)]"></span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-8">
            Get In Touch.
          </h2>

          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto mb-12 font-light">
            I'm currently open for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:patrickgonzaga@gmail.com"
            className="inline-block px-10 py-5 bg-[var(--text-primary)] text-[var(--bg-color)] rounded-full font-medium hover:scale-105 transition-transform text-lg mb-20"
          >
            Say Hello
          </a>

          <div className="flex gap-8 justify-center items-center font-mono text-sm tracking-widest text-[var(--text-secondary)]">
            <a href="https://linkedin.com/in/patgonzaga" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors uppercase">
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-[var(--border-color)]"></span>
            <a href="mailto:patrickgonzaga@gmail.com" className="hover:text-[var(--text-primary)] transition-colors uppercase">
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
