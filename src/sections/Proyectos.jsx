import { useInView } from '../hooks/useInView';

const egloProject = {
  cliente: 'Eglo',
  sector: 'Retail',
  titulo: 'Conciliación POS-ERP · Eglo · Retail',
  descripcion: 'App con IA que concilia POS vs ERP automáticamente.',
  badge: 'Ahorro: 5 días/analista por ciclo',
};

const compactProjects = [
  {
    cliente: 'RentaFact',
    sector: 'Finanzas',
    descripcion: 'Aplicación para control de flujos de dinero en operaciones de factoring.',
  },
  {
    cliente: 'Loop Seguros',
    sector: 'Seguros',
    descripcion: 'Evaluación técnica y funcional de plataforma digital, identificando brechas de escalabilidad.',
  },
  {
    cliente: 'MoneyFy',
    sector: 'Fintech',
    descripcion: 'Evaluación técnica y funcional de plataforma digital, identificando brechas para salida a producción.',
  },
  {
    cliente: 'Grupo Alianza',
    sector: 'Medioambiente',
    descripcion: 'Modelo predictivo para clasificación automatizada de normativa ambiental.',
  },
  {
    cliente: 'Max Service',
    sector: 'Industrial',
    descripcion: 'Modelo de predicción de demanda para empresa de artículos de seguridad industrial.',
  },
  {
    cliente: 'Banco Falabella',
    sector: 'Banca',
    descripcion: 'Piloto de chatbot IA para soporte interno del área de operaciones.',
  },
  {
    cliente: 'Hospifarma',
    sector: 'Salud',
    descripcion: 'Aplicación con IA para estimación automática de órdenes de compra.',
  },
  {
    cliente: 'Redda',
    sector: 'Salud mental',
    descripcion: 'Plataforma con IA para transcripción de sesiones y generación de informes clínicos.',
  },
];

export default function Proyectos() {
  const { ref, inView } = useInView();

  return (
    <section
      id="proyectos"
      ref={ref}
      style={{ backgroundColor: '#1E2140' }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 tracking-tight transition-all duration-700"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          Proyectos realizados
        </h2>

        {/* Card destacada Eglo */}
        <div
          className="relative bg-white rounded-2xl p-8 sm:p-10 mb-10 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(91,91,214,0.22)]"
          style={{
            border: '2px solid #5B5BD6',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transitionDelay: inView ? '100ms' : '0ms',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#5B5BD620', color: '#5B5BD6', border: '1px solid #5B5BD6' }}
                >
                  Proyecto destacado
                </span>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Retail
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Conciliación POS-ERP
              </h3>
              <p className="text-gray-500 font-medium mb-4 text-lg">Eglo</p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
                {egloProject.descripcion}
              </p>
            </div>

            <div className="flex-shrink-0 flex items-start justify-start sm:justify-end">
              <div
                className="rounded-xl px-6 py-4 text-center"
                style={{ backgroundColor: '#F0FFF4', border: '1.5px solid #22C55E' }}
              >
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">
                  Resultado
                </p>
                <p
                  className="text-base font-bold text-green-700"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {egloProject.badge}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 8 cards compactas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {compactProjects.map((project, index) => (
            <div
              key={project.cliente}
              className="rounded-xl p-6 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(91,91,214,0.18)]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.065)',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: inView ? `${200 + index * 60}ms` : '0ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#5B5BD6';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4
                  className="text-white font-bold text-base leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.cliente}
                </h4>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {project.sector}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {project.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
