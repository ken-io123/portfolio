import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { projects } from '@/data/projects';
import { Container, SectionHeading, Badge } from '@/components/ui';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

const Works = () => {
  const { ref, inView } = useAnimateOnScroll({ threshold: 0.1 });
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const controlsTimer = useRef(null);
  const [controlsVisible, setControlsVisible] = useState(true);

  const startHideTimer = useCallback(() => {
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
    controlsTimer.current = setTimeout(() => {
      setControlsVisible(false);
    }, 1000);
  }, []);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    startHideTimer();
  }, [startHideTimer]);

  const openGallery = images => {
    setGalleryImages(images || []);
    setCurrentIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const showPrev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const showNext = useCallback(() => {
    setCurrentIndex(i => (i + 1) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    const onKey = e => {
      if (!isGalleryOpen) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isGalleryOpen, showNext, showPrev]);

  // prevent background scroll when gallery is open (mobile UX)
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isGalleryOpen]);

  // when gallery opens, show controls then auto-hide
  useEffect(() => {
    if (!isGalleryOpen) {
      if (controlsTimer.current) {
        clearTimeout(controlsTimer.current);
        controlsTimer.current = null;
      }
      if (typeof window !== 'undefined' && window.requestAnimationFrame) {
        window.requestAnimationFrame(() => setControlsVisible(true));
      } else {
        setTimeout(() => setControlsVisible(true), 0);
      }
      return;
    }

    // show then hide after delay (defer visible update to avoid sync state-in-effect)
    if (typeof window !== 'undefined' && window.requestAnimationFrame) {
      window.requestAnimationFrame(() => startHideTimer());
    } else {
      setTimeout(() => startHideTimer(), 0);
    }

    return () => {
      if (controlsTimer.current) {
        clearTimeout(controlsTimer.current);
        controlsTimer.current = null;
      }
    };
  }, [isGalleryOpen, startHideTimer]);

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
          title="Featured Projects"
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
              <div className="group relative overflow-visible transition-all duration-300 -translate-y-1 hover:-translate-y-3">
                {/* soft spread shadow under the card (separate element so card has no box-shadow) */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[92%] h-40 rounded-2xl pointer-events-none z-0 filter blur-3xl bg-gradient-to-b from-transparent to-black/25 dark:to-black/40 opacity-90"></div>
                {/* card surface (above the soft shadow) */}
                <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden">
                {/* Project Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 scale-[1.12] group-hover:scale-[1.20]"
                  />
                  {/* Overlay on Hover - open gallery modal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button
                      onClick={() => openGallery(project.images || [project.image])}
                      className="flex items-center gap-2 text-white font-medium hover:text-violet-300 transition-colors"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </button>
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Fullscreen Modal Gallery Viewer */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 lg:p-8"
          onClick={e => {
            // close when clicking backdrop
            if (e.target === e.currentTarget) closeGallery();
          }}
          onMouseMove={showControls}
          onTouchStart={showControls}
        >
            <div className="relative w-full max-w-full lg:max-w-7xl mx-auto">
              <button
                onClick={closeGallery}
                className={`absolute top-6 sm:top-4 lg:top-6 right-4 lg:right-6 text-white bg-slate-800/40 hover:bg-slate-800/60 rounded-full p-3 sm:p-2 lg:p-3 z-50 transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Close gallery"
              >
                ✕
              </button>

              <button
                onClick={showPrev}
                className={`absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 text-white bg-slate-800/40 hover:bg-slate-800/60 rounded-full p-4 sm:p-3 lg:p-5 z-40 transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Previous image"
              >
                ‹
              </button>

              <div
                className="w-full flex items-center justify-center px-4 sm:px-12 lg:px-20"
                onTouchStart={e => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={e => {
                  touchEndX.current = e.changedTouches[0].clientX;
                  const delta = touchStartX.current - touchEndX.current;
                  const threshold = 40; // px
                  if (delta > threshold) showNext();
                  else if (delta < -threshold) showPrev();
                }}
              >
                {galleryImages.length > 0 && (
                  <img
                    src={galleryImages[currentIndex]}
                    alt={`Gallery ${currentIndex + 1}`}
                    className="w-full max-h-[75vh] md:max-h-[85vh] lg:max-h-[92vh] object-contain rounded-md shadow-lg"
                  />
                )}
              </div>

              <button
                onClick={showNext}
                className={`absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 text-white bg-slate-800/40 hover:bg-slate-800/60 rounded-full p-4 sm:p-3 lg:p-5 z-40 transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Next image"
              >
                ›
              </button>

            {/* indicator */}
            {galleryImages.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-white/90">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
