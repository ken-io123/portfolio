import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

const SectionHeading = ({ 
  title, 
  subtitle, 
  className,
  titleClassName,
  subtitleClassName,
  align = 'center',
  ...props 
}) => {
  const { ref, inView } = useAnimateOnScroll({ threshold: 0.3 });

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={cn('mb-12', alignments[align], className)}
      {...props}
    >
      {title && (
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4',
            titleClassName
          )}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'text-base md:text-lg text-muted max-w-2xl',
            align === 'center' && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
