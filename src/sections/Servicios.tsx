import { Workflow, GitMerge, BarChart2, Globe, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const servicios = [
  {
    icono: Workflow,
    titulo: "Automatización de Procesos",
    descripcion: "Convierto tareas manuales y repetitivas en flujos automáticos que funcionan solos."
  },
  {
    icono: GitMerge,
    titulo: "Integración de Sistemas",
    descripcion: "Conecto plataformas, bases de datos y apps para que la información fluya sin fricción."
  },
  {
    icono: BarChart2,
    titulo: "Diagnóstico Operacional",
    descripcion: "Identifico exactamente qué vale la pena automatizar y cuánto impacto genera."
  },
  {
    icono: Globe,
    titulo: "Landing Page con IA",
    descripcion: "Tu web publicada en 2 semanas. Tú la construyes. Yo te guío."
  },
  {
    icono: Users,
    titulo: "Mejora de Procesos con IA",
    descripcion: "Taller práctico para equipos: IA aplicada a reportes, datos y decisiones."
  }
];

const Servicios = () => {
  const { ref, inView } = useInView();

  return (
    <section
      id="servicios"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-24 bg-[#1E2140]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-space-grotesk font-bold text-white text-3xl lg:text-4xl mb-12 text-center transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => {
            const Icono = servicio.icono;
            return (
              <div
                key={index}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-white/20 bg-white/[0.06] transition-all duration-300 hover:border-[#5B5BD6] hover:bg-white/[0.10] hover:shadow-[0_8px_32px_rgba(91,91,214,0.18)] cursor-default"
                style={{
                  borderRadius: '16px',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(32px)',
                  transitionDelay: inView ? `${index * 80}ms` : '0ms',
                }}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-white group-hover:bg-[#5B5BD6]/20 transition-colors duration-300">
                  <Icono size={22} strokeWidth={1.8} />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-space-grotesk font-bold text-white text-lg leading-snug">
                    {servicio.titulo}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <span className="inline-block text-sm font-semibold text-[#5B5BD6] hover:text-[#7c7cff] transition-colors duration-200 cursor-pointer">
                    Cotizar →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
