import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const ThemeToggle = ({ className }) => {
  const { isDark, toggleTheme, isLoading } = useTheme();

  if (isLoading) {
    return (
      <button
        className={cn(
          'p-2 rounded-lg bg-slate-200 dark:bg-slate-700',
          className
        )}
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg transition-all duration-300',
        'bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600',
        'text-slate-800 dark:text-slate-200',
        className
      )}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="transition-transform hover:rotate-12" />
      ) : (
        <Moon size={20} className="transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
