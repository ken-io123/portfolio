import { cn } from '@/lib/utils';

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
