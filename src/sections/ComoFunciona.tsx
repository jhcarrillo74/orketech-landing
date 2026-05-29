import { Search, PenTool, Zap, ChevronRight, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ComoFunciona = () => {
  const { ref, inView } = useInView();

  const pasos = [
    {
      icon: Search,
      titulo: "Analizar",
      descripcion: "Entiendo tu operación y detecto qué vale la pena automatizar"
    },
    {
      icon: PenTool,
      titulo: "Diseñar",
      descripcion: "Defino el flujo automatizado y la arquitectura técnica"
    },
    {
      icon: Zap,
      titulo: "Automatizar",
      descripcion: "Implemento, pruebo y dejo funcionando en producción"
    }
  ];

  return (
    <section
      id="como-funciona"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-24 bg-[#1E2140]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2
          className="font-space-grotesk font-bold text-white text-3xl lg:text-4xl mb-12 lg:mb-16 text-center transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          Cómo funciona
        </h2>

        {/* Pasos con flex para desktop, grid para mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
          {pasos.map((paso, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(32px)',
                transitionDelay: inView ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Card del paso */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <paso.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-space-grotesk font-semibold text-white text-xl mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>

              {/* Flecha entre pasos */}
              {index < pasos.length - 1 && (
                <>
                  <ChevronRight className="hidden lg:block w-8 h-8 text-primary mx-4" />
                  <ChevronDown className="lg:hidden w-8 h-8 text-primary my-4" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
