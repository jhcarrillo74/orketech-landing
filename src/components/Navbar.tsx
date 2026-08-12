import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Cómo trabajo', href: '#como-trabajo' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const isHomePage = window.location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-dark transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.35)]' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="flex flex-shrink-0 items-center gap-2 text-white hover:text-primary transition-colors duration-200"
            aria-label="Ir al inicio de Orketech"
          >
            <img
              src="/logo/Orketech_symbol_white.png"
              alt=""
              aria-hidden="true"
              className="h-8 w-8"
            />
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Orketech
            </span>
          </a>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={isHomePage ? (e) => handleNavClick(e, link.href) : undefined}
                className="text-white font-medium hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-dark">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={isHomePage ? (e) => handleNavClick(e, link.href) : undefined}
                className="block text-white font-medium hover:text-primary transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
