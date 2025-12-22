import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navLinks';
import { Button, ThemeToggle, Container } from '@/components/ui';
import { cn } from '@/lib/utils';
import logo from '@/assets/images/k-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const navLinksRef = useRef({});
  const navWrapperRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep track of active nav link from URL hash (and on hash change)
  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash;
      const found = navLinks.find(l => l.href === hash);
      if (found) setActiveId(found.id);
      else setActiveId(null);
    };

    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  // Observe sections to update active link on scroll
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const found = navLinks.find(l => l.href === `#${id}` || l.id === id);
            if (found) setActiveId(found.id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0.4 }
    );

    const sections = navLinks
      .map(l => document.querySelector(l.href))
      .filter(Boolean);

    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  // Update animated indicator position (desktop)
  useEffect(() => {
    const updateIndicator = () => {
      const wrapper = navWrapperRef.current;
      if (!wrapper) return;

      const activeEl = navLinksRef.current[activeId];
      if (activeEl) {
        const wrapRect = wrapper.getBoundingClientRect();
        const rect = activeEl.getBoundingClientRect();
        const left = rect.left - wrapRect.left;
        const width = rect.width;

        setIndicator({ left, width, visible: true });
      } else {
        setIndicator(prev => ({ ...prev, visible: false }));
      }
    };

    // update on activeId change and after fonts/layout settle
    updateIndicator();
    const id = setTimeout(updateIndicator, 120);

    const onResize = () => updateIndicator();
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(id);
      window.removeEventListener('resize', onResize);
    };
  }, [activeId]);

  // Fallback / complement: update active link based on nearest section to top
  useEffect(() => {
    const offset = 88; // should match navbar height used in scroll calculations
    let ticking = false;

    const updateActive = () => {
      const sections = navLinks
        .map(l => ({ id: l.id, el: document.querySelector(l.href) }))
        .filter(s => s.el);

      if (!sections.length) return;

      const viewportTop = offset;
      let closest = null;
      let closestDistance = Infinity;

      sections.forEach(s => {
        const rect = s.el.getBoundingClientRect();
        // distance from element top to navbar bottom (viewportTop)
        const distance = Math.abs(rect.top - viewportTop);
        // consider element visible if any part is in viewport
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        if (isVisible && distance < closestDistance) {
          closestDistance = distance;
          closest = s.id;
        }
      });

      if (closest && closest !== activeId) {
        setActiveId(closest);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // init
    updateActive();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [activeId]);

  // Manage focus when mobile menu opens/closes: focus first focusable and restore previous
  useEffect(() => {
    const menu = mobileMenuRef.current;
    let previousActive = null;
    if (isMobileMenuOpen) {
      previousActive = document.activeElement;
      // focus first focusable element inside menu after animate in
      requestAnimationFrame(() => {
        if (!menu) return;
        const focusable = menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        if (focusable && focusable.length) {
          focusable[0].focus();
        }
      });

      const onKey = e => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };

      window.addEventListener('keydown', onKey);

      return () => window.removeEventListener('keydown', onKey);
    } else {
      // restore focus to toggle button when menu closes
      if (toggleButtonRef.current) {
        toggleButtonRef.current.focus();
      }
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();

    // Close mobile menu first
    setIsMobileMenuOpen(false);
    setActiveId(id);

    // Small delay to allow menu animation to complete
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Navbar height offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="inline-flex items-center transition-colors" aria-label="Home">
            <img
              src={logo}
              alt="Kenrick logo"
              className="translate-x-0 sm:-translate-x-1 md:-translate-x-2 lg:-translate-x-3 h-16 md:h-20 lg:h-24 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <div ref={navWrapperRef} className="hidden md:flex items-center gap-8 relative">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                ref={el => (navLinksRef.current[link.id] = el)}
                onClick={e => handleNavClick(e, link.href, link.id)}
                className={cn(
                  'transition-colors font-medium inline-flex flex-col items-center text-foreground px-1'
                )}
                aria-current={activeId === link.id ? 'page' : undefined}
              >
                <span>{link.label}</span>
                <span
                    className={cn(
                      'block h-0.5 rounded mt-1 w-full transition-colors bg-transparent'
                    )}
                  aria-hidden
                />
              </a>
            ))}

            {/* Animated indicator */}
            <span
              aria-hidden
              className={cn(
                'absolute bottom-0 h-0.5 rounded bg-black dark:bg-white transition-all duration-300 ease-in-out'
              )}
              style={{
                left: indicator.visible ? `${indicator.left}px` : 0,
                width: indicator.visible ? `${indicator.width}px` : 0,
                opacity: indicator.visible ? 1 : 0,
              }}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="primary"
              className="hidden md:inline-flex"
              onClick={e => handleNavClick(e, '#contact', 'contact')}
            >
              Start a Project
            </Button>

            {/* Mobile Menu Button */}
                      <button
                        ref={toggleButtonRef}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground transition-colors"
                        aria-label="Toggle menu"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                      >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                      </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700"
            onKeyDown={e => {
              // Basic focus trap: keep tabbing within the mobile menu
              if (e.key !== 'Tab') return;
              const node = mobileMenuRef.current;
              if (!node) return;
              const focusable = node.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
              if (!focusable || focusable.length === 0) return;
              const first = focusable[0];
              const last = focusable[focusable.length - 1];

              if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
              }

              if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
              }
            }}
          >
            <Container>
              <div className="py-6 space-y-2">
                {navLinks.map(link => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href, link.id)}
                    className={cn(
                        'block py-3 transition-colors font-medium text-lg text-foreground'
                      )}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col items-start">
                      <span>{link.label}</span>
                      <span
                        className={cn(
                            'block h-0.5 rounded mt-2 w-16 transition-colors',
                            activeId === link.id ? 'bg-black dark:bg-white' : 'bg-transparent'
                          )}
                        aria-hidden
                      />
                    </div>
                  </motion.a>
                ))}
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={e => handleNavClick(e, '#contact', 'contact')}
                >
                  Start a Project
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
