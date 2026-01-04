import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code, Database, Palette, Clock, Trophy, Star } from 'lucide-react';
import { stats } from '@/data/stats';
import { Button, Container, Badge } from '@/components/ui';
import profileImg from '@/assets/images/profile.png';

const Hero = () => {
  const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0 });

  // Respect user's reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Count-up animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ 0: 2, 1: 10, 2: 98 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to section helper (matches Navbar behavior)
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // navbar offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const formatCount = (value, stat) => {
    if (stat.id === 1) return `${value}+`;
    if (stat.id === 2) return `${value}+`;
    if (stat.id === 3) return `${value}%`;
    return value;
  };

  // Animation variants - Professional & Smooth
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0.001 }
        : { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  const fadeInRight = {
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: prefersReducedMotion
        ? { duration: 0.001 }
        : { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: prefersReducedMotion
        ? { duration: 0.001 }
        : { type: 'spring', damping: 15, stiffness: 100 },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: custom => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0.001 }
        : {
            type: 'spring',
            damping: 12,
            stiffness: 150,
            delay: 0.8 + custom * 0.15,
          },
    }),
  };

  // Floating badge data
  const floatingBadges = [
    {
      id: 1,
      icon: Palette,
      label: 'Web Designer',
      color: 'violet',
      position: 'top-4 -right-2 md:top-8 md:-right-6 lg:top-12 lg:-right-8',
    },
    {
      id: 2,
      icon: Code,
      label: 'Web Developer',
      color: 'violet',
      position: 'top-1/2 -translate-y-1/2 -right-4 md:-right-8 lg:-right-12',
    },
    {
      id: 3,
      icon: Database,
      label: 'Software Developer',
      color: 'violet',
      position:
        'bottom-4 -right-2 md:bottom-8 md:-right-6 lg:bottom-12 lg:-right-8',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center hero-gradient pt-20 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center py-8 md:py-12">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
            >
              Hi!
              <br />I am Kenrick.
            </motion.h1>

            {/* Subtitle - Only visible on mobile (replaces hidden badges) */}
            <motion.p
              variants={fadeInUp}
              className="block md:hidden text-base text-muted mb-4 font-medium"
            >
              Web Designer • Web Developer • Software Developer
            </motion.p>

            {/* Desktop Description - Full version */}
            <motion.p
              variants={fadeInUp}
              className="hidden md:block text-base md:text-lg text-muted mb-6 md:mb-8 max-w-xl"
            >
              IT student specializing in web and software development. I combine
              academic knowledge with practical expertise to build responsive
              websites and robust systems that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-row flex-wrap gap-4 mb-12"
            >
              <Button
                variant="primary"
                onClick={() => scrollToSection('#contact')}
                aria-label="Go to contact"
              >
                Let's Talk
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection('#works')}
                aria-label="View projects"
              >
                View Projects
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = { Clock, Trophy, Star }[stat.icon];
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      damping: 15,
                      stiffness: 100,
                      delay: 0.6 + index * 0.1,
                    }}
                    className="flex flex-col items-start"
                  >
                    {Icon && (
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground dark:text-white mb-2 opacity-90" />
                    )}
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                      {formatCount(counts[index], stat)}
                    </div>
                    <div className="text-xs sm:text-sm text-muted">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Floating Badges */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative max-w-md mx-auto px-12 md:px-8 lg:px-0">
              {/* Profile Image */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="relative z-10 profile-shadow-wrap"
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-auto rounded-3xl relative z-10 [mask-image:linear-gradient(to_bottom,black_50%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_90%)]"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Mobile Badges - Hidden on all views (badges only appear as floating on desktop) */}

              {/* Floating Badges - Hidden on mobile, visible on md+ (tablet/desktop) */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  custom={index}
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  className={`hidden md:block absolute ${badge.position} z-20`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { type: 'spring', stiffness: 300, damping: 10 },
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  >
                    <Badge icon={badge.icon} color={badge.color}>
                      {badge.label}
                    </Badge>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
