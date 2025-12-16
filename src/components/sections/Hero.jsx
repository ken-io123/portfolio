import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette } from 'lucide-react';
import { stats } from '@/data/stats';
import { Button, Container, Badge } from '@/components/ui';
import profileImg from '@/assets/images/profile.png';

const Hero = () => {
  const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0 });

  // Detect if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Count-up animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ 0: 2, 1: 10, 2: 98 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatCount = (value, stat) => {
    if (stat.id === 1) return `${value}+`;
    if (stat.id === 2) return `${value}`;
    if (stat.id === 3) return `${value}%`;
    return value;
  };

  // Animation variants - Professional & Smooth
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 20,
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
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
      icon: Code,
      label: 'Web Development',
      color: 'violet',
      position: 'top-4 -right-2 md:top-8 md:-right-6 lg:top-12 lg:-right-8',
    },
    {
      id: 2,
      icon: Database,
      label: 'System Development',
      color: 'violet',
      position: 'top-1/2 -translate-y-1/2 -right-4 md:-right-8 lg:-right-12',
    },
    {
      id: 3,
      icon: Palette,
      label: 'Logo Designing',
      color: 'violet',
      position: 'bottom-4 -right-2 md:bottom-8 md:-right-6 lg:bottom-12 lg:-right-8',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center hero-gradient pt-20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12">
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
              <br />
              I am Kenrick.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted mb-6 md:mb-8 max-w-xl"
            >
              IT student specializing in web and system development. I build responsive websites and systems
              using modern technologies to deliver reliable, high-quality solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button variant="primary">Let's Talk</Button>
              <Button variant="outline">View Projects</Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 md:gap-8"
            >
              {stats.map((stat, index) => (
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
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {formatCount(counts[index], stat)}
                  </div>
                  <div className="text-xs sm:text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Floating Badges */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative max-w-md mx-auto px-8 md:px-0">
              {/* Profile Image */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="relative z-10"
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-auto rounded-3xl"
                />
              </motion.div>

              {/* Floating Badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  custom={index}
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  className={`absolute ${badge.position} z-20`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { type: 'spring', stiffness: 300, damping: 10 }
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

export default Hero;
