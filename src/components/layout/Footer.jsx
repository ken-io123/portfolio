import React from 'react';
import { navLinks } from '@/data/navLinks';
import { socialLinks } from '@/data/socialLinks';
import { Container } from '@/components/ui';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <Container>
        <div className="py-8 md:py-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 items-start">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                KENRICK.
              </h3>
              <p className="text-muted text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto lg:mx-0">
                IT student specializing in web and software development. I
                combine academic knowledge with practical expertise to build
                responsive websites and robust systems that solve real-world
                problems.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col items-start space-y-2">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={e => handleNavClick(e, link.href)}
                      className="text-muted hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center lg:text-right">
                Connect
              </h4>
              <div className="flex justify-center lg:justify-end gap-4">
                {socialLinks.map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-muted text-sm">© {currentYear}. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
