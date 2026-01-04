import { useState, useEffect } from 'react';

// Helper to get initial theme value
// Default to dark mode for new visitors
const getInitialTheme = () => {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem('theme');
  // If no stored preference, default to dark mode
  if (!stored) return true;
  return stored === 'dark';
};

export const useTheme = () => {
  // Initialize with computed value to avoid flash
  const [isDark, setIsDark] = useState(getInitialTheme);
  // Start as false since we initialize with correct value
  const [isLoading, setIsLoading] = useState(false);

  // Apply theme class to document when isDark changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  const setTheme = theme => {
    const isDarkTheme = theme === 'dark';
    setIsDark(isDarkTheme);
    localStorage.setItem('theme', theme);
  };

  return { isDark, toggleTheme, setTheme, isLoading };
};
