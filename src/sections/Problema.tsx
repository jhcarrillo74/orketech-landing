import { RefreshCw, Clock, AlertTriangle, Unlink } from 'lucide-react';

const Problema = () => {
  const problemas = [
    {
      icon: RefreshCw,
      texto: "Tu equipo pierde horas en tareas que se repiten igual cada día"
    },
    {
      icon: Clock,
      texto: "Los procesos manuales consumen tiempo que debería ir al negocio"
    },
    {
      icon: AlertTriangle,
      texto: "Los errores humanos se acumulan y cuestan caro"
    },
    {
      icon: Unlink,
      texto: "Tus sistemas no se hablan y la información queda atrapada"
    }
  ];

  return (
    <section id="problema" className="py-16 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="font-space-grotesk font-bold text-[#111111] text-3xl lg:text-4xl mb-12 text-center">
          ¿Te suena familiar?
        </h2>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problemas.map((problema, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <problema.icon className="w-12 h-12 text-primary mb-4" />
              <p className="text-text-secondary text-base leading-relaxed">
                {problema.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problema;
