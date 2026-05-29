import { Linkedin, GraduationCap } from 'lucide-react';

export default function QuienSoy() {
  return (
    <section
      id="sobre-mi"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#1E2140' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Desktop: two columns | Mobile: stacked */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* Left column: photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div
              className="rounded-full overflow-hidden"
              style={{
                width: 'clamp(200px, 30vw, 350px)',
                height: 'clamp(200px, 30vw, 350px)',
                border: '3px solid #3B9BD8',
                boxShadow: '0 0 40px rgba(59,155,216,0.18)',
              }}
            >
              <img
                src="/images/Foto_Jorge_Carrillo_.JPG"
                alt="Jorge H. Carrillo"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right column: text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-1">

            {/* Name */}
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '2rem',
                color: '#ffffff',
              }}
            >
              Jorge H. Carrillo
            </h2>

            {/* Subtitle */}
            <p
              className="text-base font-medium"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#3B9BD8',
              }}
            >
              Ingeniero Civil Industrial (PUC) · MBA (UAI)
            </p>

            {/* Bio */}
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              Ejecutivo Senior bilingüe con más de 20 años en transformación digital y automatización.
              Combina visión estratégica con ejecución técnica.
            </p>

            {/* LinkedIn links */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 mt-2">
              <a
                href="https://linkedin.com/in/carrillojorge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: '#3B9BD8', fontFamily: "'Inter', sans-serif" }}
              >
                <Linkedin size={16} strokeWidth={2} />
                linkedin.com/in/carrillojorge
              </a>
              <a
                href="https://linkedin.com/company/orketech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: '#3B9BD8', fontFamily: "'Inter', sans-serif" }}
              >
                <Linkedin size={16} strokeWidth={2} />
                linkedin.com/company/orketech
              </a>
            </div>

            {/* Professor note */}
            <div
              className="flex items-center gap-2 mt-1"
              style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Inter', sans-serif" }}
            >
              <GraduationCap size={15} strokeWidth={1.8} />
              <span className="text-sm">Profesor Supervisor — PUC Ingeniería Industrial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
