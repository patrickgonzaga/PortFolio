import { useState } from 'react';
import type { ContactFormState } from './Contact.types';

export const useContact = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/patgonzaga', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/patrickgonzaga', icon: 'github' },
    { label: 'Email', href: 'mailto:patrickgonzaga@gmail.com', icon: 'email' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('submitting');
    
    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return {
    form,
    status,
    socialLinks,
    handleChange,
    handleSubmit,
  };
};
