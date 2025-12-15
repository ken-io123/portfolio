import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Pen, Sparkles } from 'lucide-react';
import { stats } from '@/data/stats';
import { Button, Container, Badge } from '@/components/ui';
import profileImg from '@/assets/images/profile.png';

const Hero = () => {
  const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0 });

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

  // Floating badge data
  const floatingBadges = [
    {
      id: 1,
      icon: Pen,
      label: 'Illustration',
      color: 'violet',
      position: 'top-4 -right-2 md:top-8 md:-right-6 lg:top-12 lg:-right-8',
      animation: 'animate-float',
    },
    {
      id: 2,
      icon: Palette,
      label: 'Graphic Design',
      color: 'green',
      position: 'top-1/2 -translate-y-1/2 -right-4 md:-right-8 lg:-right-12',
      animation: 'animate-float-delayed',
    },
    {
      id: 3,
      icon: Sparkles,
      label: 'Creative Branding',
      color: 'blue',
      position: 'bottom-4 -right-2 md:bottom-8 md:-right-6 lg:bottom-12 lg:-right-8',
      animation: 'animate-float-slow',
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Let's Work Together to Create Wonders with Us
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted mb-6 md:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A visionary creative, crafting captivating wonders through art and
              design. Adept at turning imagination into extraordinary reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button variant="primary">Let's Talk</Button>
              <Button variant="outline">Start Project</Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.id}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {formatCount(counts[index], stat)}
                  </div>
                  <div className="text-xs sm:text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Floating Badges */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-md mx-auto px-8 md:px-0">
              {/* Profile Image */}
              <motion.div
                className="relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
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
                  className={`absolute ${badge.position} ${badge.animation} z-20`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                >
                  <Badge icon={badge.icon} color={badge.color}>
                    {badge.label}
                  </Badge>
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
