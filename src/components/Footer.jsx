import { Mail, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Cómo trabajo', href: '#como-trabajo' },
  { label: 'Contacto', href: '#contacto' },
];

const contactLinks = [
  {
    icon: Mail,
    label: 'jhcarrillo@orketech.com',
    href: 'mailto:jhcarrillo@orketech.com',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/carrillojorge',
    href: 'https://linkedin.com/in/carrillojorge',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/company/orketech',
    href: 'https://linkedin.com/company/orketech',
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1E2140' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo/Logo_4_Orketech.png"
              alt="Orketech"
              style={{ width: 180 }}
            />
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              Automatización de procesos con IA para pequeñas empresas.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Navegación
            </p>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={`/${href}`}
                className="text-sm font-medium transition-colors duration-150"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Contacto
            </p>
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-sm transition-colors duration-150"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                <Icon size={15} strokeWidth={2} style={{ flexShrink: 0 }} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <hr
          className="my-10"
          style={{ borderColor: 'rgba(255,255,255,0.12)', borderTopWidth: 1 }}
        />

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p
            className="text-center text-xs"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            © 2026 Orketech SpA · Santiago, Chile
          </p>
          <a
            href="/politica-de-privacidad"
            className="text-xs transition-colors duration-150"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
          >
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
