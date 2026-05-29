import { useInView } from '../hooks/useInView';

const Hero = () => {
  const { ref, inView } = useInView(0.1);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen bg-dark flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div
            className="order-2 lg:order-1 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img
                src="/logo/Logo_3_Orketech.png"
                alt="Orketech"
                className="h-[180px]"
              />
            </div>

            {/* Titular */}
            <h1 className="font-space-grotesk font-bold text-white text-3xl lg:text-[48px] leading-tight mb-6 text-center lg:text-left">
              Automatizo los procesos de tu empresa con inteligencia artificial
            </h1>

            {/* Subtítulo */}
            <p className="text-gray-300 text-base lg:text-xl mb-8 text-center lg:text-left leading-relaxed">
              Elimino el trabajo manual repetitivo en ventas, operaciones y finanzas para que tu equipo se enfoque en lo que realmente importa.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleScrollToContact}
                className="bg-primary text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ transition: 'background-color 0.2s, transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#4a4ab8')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
              >
                Conversemos sobre tu operación
              </button>
            </div>
          </div>

          {/* Image - Hidden on mobile */}
          <div
            className="order-1 lg:order-2 hidden lg:block transition-all duration-700 delay-200"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c2270a8f?q=80&w=1000&auto=format&fit=crop"
              alt="Business automation technology"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
