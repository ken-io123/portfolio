import { cn } from '@/lib/utils';

const Badge = ({ 
  children, 
  icon: Icon, 
  className,
  color = 'violet',
  ...props 
}) => {
  const colorVariants = {
    violet: 'bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-200 dark:border dark:border-violet-500/30',
    green: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-200 dark:border dark:border-green-500/30',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200 dark:border dark:border-blue-500/30',
    yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-200 dark:border dark:border-yellow-500/30',
    pink: 'bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-200 dark:border dark:border-pink-500/30',
  };

  return (
    <div
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 w-fit shadow-lg backdrop-blur-sm',
        colorVariants[color],
        className
      )}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </div>
  );
};

export default Badge;
