import { DollarSign, Settings, FileText, Monitor } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const casos = [
  {
    icono: DollarSign,
    titulo: "Finanzas",
    ejemplos: ["Conciliaciones", "Reportes automáticos", "Alertas de flujo de caja"]
  },
  {
    icono: Settings,
    titulo: "Operaciones",
    ejemplos: ["Seguimiento de pedidos", "Estimación de compras", "Predicción de demanda"]
  },
  {
    icono: FileText,
    titulo: "Documentos",
    ejemplos: ["Contratos", "Informes clínicos", "Clasificación normativa"]
  },
  {
    icono: Monitor,
    titulo: "Web & Digital",
    ejemplos: ["Chatbots de soporte", "Landing pages", "Evaluaciones técnicas"]
  }
];

const CasosUso = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="casos-uso"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-space-grotesk font-bold text-center text-3xl lg:text-4xl mb-12 transition-all duration-700"
          style={{
            color: '#111111',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          Qué puedo automatizar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {casos.map((caso, index) => {
            const Icono = caso.icono;
            return (
              <div
                key={index}
                className="flex flex-col gap-5 p-6 bg-white transition-all duration-300 hover:shadow-xl"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 2px 16px 0 rgba(17,17,17,0.07)',
                  border: '1.5px solid transparent',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(32px)',
                  transitionDelay: inView ? `${index * 100}ms` : '0ms',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#5B5BD6';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl"
                  style={{ backgroundColor: '#5B5BD610' }}
                >
                  <Icono size={24} strokeWidth={1.8} style={{ color: '#5B5BD6' }} />
                </div>

                <h3
                  className="font-space-grotesk font-bold text-lg leading-snug"
                  style={{ color: '#111111' }}
                >
                  {caso.titulo}
                </h3>

                <ul className="flex flex-col gap-2">
                  {caso.ejemplos.map((ejemplo, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#555555' }}>
                      <span
                        className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: '#5B5BD6' }}
                      />
                      {ejemplo}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CasosUso;
