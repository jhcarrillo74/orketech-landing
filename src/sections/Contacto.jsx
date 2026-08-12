import { Mail, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { MICROSOFT_BOOKINGS_URL } from '../constants/booking';
import { useInView } from '../hooks/useInView';

export default function Contacto() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ nombre: '', email: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
          <p className="text-base" style={{ fontFamily: "'Inter', sans-serif", color: '#666666' }}>
            30 minutos para entender qué procesos están frenando tu empresa.
          </p>
        </div>

        <a
          href={MICROSOFT_BOOKINGS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors duration-200"
          style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#5B5BD6', marginBottom: '16px' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4a4ab8')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5B5BD6')}
        >
          Agenda una reunión sin costo de 30 min
        </a>

        <p className="mb-4 text-center text-sm" style={{ fontFamily: "'Inter', sans-serif", color: '#666666' }}>
          O envía un mensaje y te responderé dentro de un día hábil.
        </p>

        {status === 'success' ? (
          <div
            className="text-center py-10 transition-all duration-700"
            style={{ opacity: inView ? 1 : 0 }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#111111', fontSize: '1.1rem', fontWeight: 600 }}>
              Mensaje enviado!
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#666666', marginTop: '8px' }}>
              Te responderé pronto.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 transition-all duration-700 delay-100"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="nombre" className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif", color: '#374151' }}>
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-sm outline-none transition-all"
                style={{ fontFamily: "'Inter', sans-serif", border: '1.5px solid #E2E8F0', color: '#111111' }}
                onFocus={e => (e.target.style.borderColor = '#5B5BD6')}
                onBlur={e => (e.target.style.borderColor = '#E2E8F0')}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif", color: '#374151' }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@empresa.com"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-sm outline-none transition-all"
                style={{ fontFamily: "'Inter', sans-serif", border: '1.5px solid #E2E8F0', color: '#111111' }}
                onFocus={e => (e.target.style.borderColor = '#5B5BD6')}
                onBlur={e => (e.target.style.borderColor = '#E2E8F0')}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="mensaje" className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif", color: '#374151' }}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Cuéntame brevemente qué proceso quieres mejorar..."
                required
                value={form.mensaje}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-sm outline-none transition-all resize-none"
                style={{ fontFamily: "'Inter', sans-serif", border: '1.5px solid #E2E8F0', color: '#111111' }}
                onFocus={e => (e.target.style.borderColor = '#5B5BD6')}
                onBlur={e => (e.target.style.borderColor = '#E2E8F0')}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                Hubo un error al enviar. Intenta de nuevo o escríbeme directamente.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-colors duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: status === 'loading' ? '#9090e0' : '#5B5BD6',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                border: 'none',
              }}
              onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.backgroundColor = '#4a4ab8'; }}
              onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.backgroundColor = '#5B5BD6'; }}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        )}

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
