import { cn } from '@/lib/utils';

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg',
        hover && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
