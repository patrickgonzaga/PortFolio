import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type SectionHeaderProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  /** word(s) from the title rendered with the animated gradient */
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}) => {
  const centered = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${centered ? 'text-center flex flex-col items-center' : ''}`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sky-600 dark:text-sky-400 font-mono text-[11px] uppercase tracking-[0.2em] mb-4">
        <Icon size={13} />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient-animated">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`text-slate-600 dark:text-slate-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
