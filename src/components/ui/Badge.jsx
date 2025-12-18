import { cn } from '@/lib/utils';

const Badge = ({
  children,
  icon: Icon,
  className,
  color = 'violet',
  ...props
}) => {
  const colorVariants = {
    // Light: badge is black with white label. Dark: badge is white with black label.
    violet:
      'bg-black text-white shadow-lg shadow-black/40 border border-black/30 dark:bg-white dark:text-black dark:shadow-lg dark:shadow-white/20 dark:border dark:border-violet-200',
    green:
      'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-200 dark:border dark:border-green-500/30',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200 dark:border dark:border-blue-500/30',
    yellow:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-200 dark:border dark:border-yellow-500/30',
    pink: 'bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-200 dark:border dark:border-pink-500/30',
  };

  return (
    <div
      className={cn(
        'px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 w-fit backdrop-blur-sm',
        colorVariants[color],
        className
      )}
      {...props}
    >
      {Icon && <Icon size={18} className="text-current" />}
      {children}
    </div>
  );
};

export default Badge;
