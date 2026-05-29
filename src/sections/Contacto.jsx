import { Mail, Linkedin } from 'lucide-react';
import { useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function Contacto() {
  const { ref, inView } = useInView();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      <div className="max-w-xl mx-auto">
        <div
          className="text-center mb-10 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <h2
            className="mb-3"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '2rem',
              color: '#111111',
              lineHeight: 1.2,
            }}
          >
            Conversemos sobre tu operación
          </h2>
          <p
            className="text-base"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: '#666666',
            }}
          >
            30 minutos para entender qué procesos están frenando tu empresa.
          </p>
        </div>

        <div
          className="transition-all duration-700 delay-100"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <button
            onClick={() => {
              if (window.Tally) {
                window.Tally.openPopup('MeMADI', {
                  overlay: true,
                  emoji: { text: '👋', animation: 'wave' },
                });
              }
            }}
            className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-colors duration-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              backgroundColor: '#5B5BD6',
              cursor: 'pointer',
              border: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4a4ab8')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5B5BD6')}
          >
            Conversemos →
          </button>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-8 border-t border-gray-200 transition-all duration-700 delay-200"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <a
            href="mailto:jhcarrillo@orketech.com"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ fontFamily: "'Inter', sans-serif", color: '#374151' }}
          >
            <Mail size={16} strokeWidth={2} style={{ color: '#5B5BD6' }} />
            jhcarrillo@orketech.com
          </a>
          <span className="hidden sm:block text-gray-300">·</span>
          <a
            href="https://linkedin.com/in/carrillojorge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ fontFamily: "'Inter', sans-serif", color: '#374151' }}
          >
            <Linkedin size={16} strokeWidth={2} style={{ color: '#5B5BD6' }} />
            linkedin.com/in/carrillojorge
          </a>
        </div>
      </div>
    </section>
  );
}
