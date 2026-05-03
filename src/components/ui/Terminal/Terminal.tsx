import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  onCommand?: (cmd: string) => string;
}

export const Terminal: React.FC<TerminalProps> = ({ onCommand }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    { command: '', output: 'Welcome to Patrick Gonzaga\'s interactive terminal. Type "help" to see available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const defaultCommands = (cmd: string): string => {
    const trimmed = cmd.trim().toLowerCase();
    switch (trimmed) {
      case 'help':
        return 'Available commands:\n  whoami      - display summary\n  skills      - list core skills\n  experience  - show latest role\n  clear       - clear terminal';
      case 'whoami':
        return 'Software engineer with 15+ years of experience across backend development, system integration, and enterprise platforms. Focus: .NET, Azure, APIs.';
      case 'skills':
        return 'C#, ASP.NET Core, Azure (Functions, Service Bus), SQL Server, React, TypeScript, SOLID Architecture.';
      case 'experience':
        return 'Current: .NET Developer @ EMAPTA (Client: Discovery Holiday Parks)\nBuilding REST APIs, shared microservices, and integrating Azure services.';
      case 'clear':
        return '';
      case '':
        return '';
      default:
        return `Command not found: ${trimmed}. Type "help" for a list of commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.trim().toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = onCommand ? onCommand(input) : defaultCommands(input);
    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Toggle Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-full glass-panel flex items-center justify-center hover:bg-[var(--border-color)] transition-colors cursor-none group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Open Terminal"
        >
          <TerminalIcon size={20} className="text-[var(--text-primary)] group-hover:text-blue-500 transition-colors" />
        </motion.button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="w-80 sm:w-96 rounded-lg glass-panel overflow-hidden border border-[var(--border-color)] shadow-2xl flex flex-col"
          style={{ height: '400px' }}
        >
          {/* Header */}
          <div className="bg-[var(--card-bg)] px-4 py-2 border-b border-[var(--border-color)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TerminalIcon size={14} className="text-[var(--text-secondary)]" />
              <span className="text-xs font-mono text-[var(--text-secondary)]">guest@patrick-portfolio:~</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-red-500 transition-colors"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-sm flex flex-col gap-2"
          >
            {history.map((item, idx) => (
              <div key={idx}>
                {item.command && (
                  <div className="flex gap-2">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-[var(--text-primary)]">{item.command}</span>
                  </div>
                )}
                {item.output && (
                  <div className="text-[var(--text-secondary)] whitespace-pre-wrap mt-1">
                    {item.output}
                  </div>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
              <span className="text-green-500">➜</span>
              <span className="text-blue-400">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-[var(--text-primary)]"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
};
