import { useInView } from '../hooks/useInView';

const PorQueYo = () => {
  const { ref, inView } = useInView();

  const metricas = [
    {
      numero: "+20 años",
      etiqueta: "Transformación digital"
    },
    {
      numero: "US$300 → US$100",
      etiqueta: "Costo adquisición AFP Capital"
    },
    {
      numero: "1% → 25%",
      etiqueta: "Ventas digitales AFP Capital"
    },
    {
      numero: "10 casos",
      etiqueta: "Automatización, IA y mejora operacional desde 2023"
    }
  ];

  return (
    <section
      id="por-que-yo"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-24 bg-[#F5F7FA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout dos columnas desktop, una columna mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Columna izquierda: Texto */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            <h2 className="font-space-grotesk font-bold text-text text-3xl lg:text-4xl mb-6">
              Por qué yo
            </h2>
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
              No implemento tecnología por implementar. Entiendo tu operación, identifico qué vale la pena automatizar, y lo hago funcionar.
            </p>
          </div>

          {/* Columna derecha: Métricas en cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metricas.map((metrica, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border-l-4 border-[#5B5BD6] p-5 transition-all duration-300 hover:shadow-xl"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(32px)',
                  transitionDelay: inView ? `${100 + index * 80}ms` : '0ms',
                  outline: '1.5px solid transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.outline = '1.5px solid #5B5BD6';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.outline = '1.5px solid transparent';
                }}
              >
                <div className="font-space-grotesk font-bold text-text text-2xl lg:text-3xl mb-2">
                  {metrica.numero}
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {metrica.etiqueta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueYo;
