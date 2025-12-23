import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  className,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]';

  const variants = useMemo(() => ({
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 active:scale-95',
    secondary:
      'bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background active:scale-95',
    outline:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95 dark:text-white',
  }), []);

  const buttonClasses = useMemo(
    () => cn(
      baseStyles,
      variants[variant],
      disabled && 'opacity-50 cursor-not-allowed',
      className
    ),
    [variant, disabled, className, variants]
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
