import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and twMerge for proper Tailwind merging
 */
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
