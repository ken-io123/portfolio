import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: 'hover:text-slate-800 dark:hover:text-slate-200',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-blue-600',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'hover:text-sky-500',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com',
    color: 'hover:text-pink-600',
  },
  {
    id: 'email',
    label: 'Email',
    icon: Mail,
    href: 'mailto:your.email@example.com',
    color: 'hover:text-violet-600',
  },
];
