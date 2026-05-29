import { Map, Lightbulb, Layout, Code2, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Map,
    titulo: 'Entender el proceso',
    descripcion: 'Mapeo el flujo actual, actores y puntos de dolor',
  },
  {
    number: 2,
    icon: Lightbulb,
    titulo: 'Detectar oportunidades',
    descripcion: 'Identifico qué vale la pena automatizar y cuánto impacto genera',
  },
  {
    number: 3,
    icon: Layout,
    titulo: 'Diseñar la solución',
    descripcion: 'Defino la arquitectura técnica y el flujo automatizado',
  },
  {
    number: 4,
    icon: Code2,
    titulo: 'Implementar',
    descripcion: 'Desarrollo y pongo en producción con pruebas controladas',
  },
  {
    number: 5,
    icon: TrendingUp,
    titulo: 'Optimizar',
    descripcion: 'Monitoreo y ajusto para maximizar eficiencia',
  },
];

export default function ComoTrabajo() {
  return (
    <section
      id="como-trabajo"
      style={{ backgroundColor: '#F5F7FA' }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#111111' }}
        >
          Cómo trabajo
        </h2>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-10 left-0 right-0 h-0.5"
            style={{
              backgroundColor: '#5B5BD6',
              left: 'calc(10%)',
              right: 'calc(10%)',
            }}
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  {/* Icon above circle */}
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full mb-3 relative z-10"
                    style={{ backgroundColor: '#EEF0FB' }}
                  >
                    <Icon size={20} style={{ color: '#5B5BD6' }} strokeWidth={1.8} />
                  </div>

                  {/* Step number circle */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold relative z-10 mb-5"
                    style={{
                      backgroundColor: '#5B5BD6',
                      fontFamily: "'Space Grotesk', sans-serif",
                      boxShadow: '0 0 0 4px #F5F7FA',
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Text */}
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#111111' }}
                  >
                    {step.titulo}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#666' }}>
                    {step.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline vertical */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: '#5B5BD6' }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex items-start gap-6 pl-0">
                  {/* Left: circle node */}
                  <div className="flex flex-col items-center flex-shrink-0" style={{ width: '48px' }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        backgroundColor: '#5B5BD6',
                        boxShadow: '0 0 0 4px #F5F7FA',
                      }}
                    >
                      <Icon size={20} color="white" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Right: text */}
                  <div className="pt-2 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{
                          backgroundColor: '#5B5BD6',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {step.number}
                      </span>
                      <h3
                        className="text-base font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#111111' }}
                      >
                        {step.titulo}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                      {step.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
