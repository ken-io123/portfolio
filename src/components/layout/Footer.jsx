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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ken.
              </h3>
              <p className="text-muted text-sm max-w-xs">
                Creating captivating wonders through art and design. Turning
                imagination into extraordinary reality.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
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
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted text-sm">
                © {currentYear} Ken. All rights reserved.
              </p>
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

export default Footer;
