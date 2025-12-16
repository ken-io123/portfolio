import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Container, SectionHeading, Badge } from '@/components/ui';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

const Works = () => {
  const { ref, inView } = useAnimateOnScroll({ threshold: 0.1 });

  const containerVariants = {
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
      },
    },
  };

  return (
    <section
      id="works"
      className="py-12 md:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900"
    >
      <Container>
        <SectionHeading
          title="Featured Works"
          subtitle="A showcase of creative projects that blend design excellence with innovative solutions"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map(project => (
            <motion.div key={project.id} variants={cardVariants}>
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-white font-medium hover:text-violet-300 transition-colors"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Works;
