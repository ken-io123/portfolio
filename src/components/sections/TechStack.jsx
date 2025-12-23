import { motion } from 'framer-motion';
import { techStack } from '@/data/techStack';
import { Container, SectionHeading, Card } from '@/components/ui';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { cn } from '@/lib/utils';

const TechStack = () => {
  const { ref, inView } = useAnimateOnScroll({ threshold: 0.1 });

  // Root container for categories (stagger between category cards)
  const rootVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  // Color mapping for category cards - NO COLORS, just categories
  const categoryColors = {
    Languages: {},
    Frameworks: {},
    'Databases & Backend Services': {},
    Tools: {},
  };

  return (
    <section id="techstack" className="py-12 md:py-16 lg:py-20 bg-background">
      <Container>
        <SectionHeading
          title="What I Can Do"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <motion.div
          ref={ref}
          variants={rootVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {techStack.map(category => {
            const colors =
              categoryColors[category.category] || categoryColors.Languages;

            return (
              <motion.div key={category.id} variants={cardVariants}>
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {/* Category Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
                    {category.category}
                  </h3>

                  {/* Tech Items Grid */}
                  <div className="flex flex-wrap gap-2.5 lg:gap-3">
                    {category.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={cn(
                            'flex items-center justify-center',
                            'px-3 py-2 lg:px-4 lg:py-2.5',
                            'text-xs sm:text-sm lg:text-base font-medium',
                            'rounded-full',
                            'bg-violet-100 text-violet-700 border border-violet-200',
                            'dark:bg-violet-900/30 dark:text-violet-200 dark:border-violet-500/30',
                            'shadow-lg',
                            'transition-all duration-200',
                            'cursor-default'
                          )}
                        >
                          {/* Tech Name (icons removed) */}
                          <span className="whitespace-nowrap">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStack;
