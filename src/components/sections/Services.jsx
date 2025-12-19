import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { Container, SectionHeading, Card } from '@/components/ui';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { cn } from '@/lib/utils';

const Services = () => {
  const { ref, inView } = useAnimateOnScroll({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-background">
      <Container>
        <SectionHeading
          title="Services"
          subtitle="Transforming complex problems into seamless digital solutions through innovative web and software development."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map(service => {
            const Icon = service.icon;

            // Color mapping for proper Tailwind classes
            const colorClasses = {
              violet: {
                bg: 'bg-violet-100 dark:bg-violet-900/30',
                text: 'text-violet-600 dark:text-violet-400',
              },
              green: {
                bg: 'bg-green-100 dark:bg-green-900/30',
                text: 'text-green-600 dark:text-green-400',
              },
              blue: {
                bg: 'bg-blue-100 dark:bg-blue-900/30',
                text: 'text-blue-600 dark:text-blue-400',
              },
            };

            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={cn(
                      'w-16 h-16 rounded-full flex items-center justify-center mb-6',
                      colorClasses[service.color]?.bg ||
                        'bg-violet-100 dark:bg-violet-900/30'
                    )}
                  >
                    <Icon
                      size={32}
                      className={cn(
                        colorClasses[service.color]?.text ||
                          'text-violet-600 dark:text-violet-400'
                      )}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
