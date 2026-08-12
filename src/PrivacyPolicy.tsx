import Footer from './components/Footer';
import Navbar from './components/Navbar';

const sectionTitleStyle = {
  fontFamily: "'Inter', sans-serif",
  color: '#1E2140',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-light font-inter">
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-wider"
            style={{ fontFamily: "'Inter', sans-serif", color: '#5B5BD6' }}
          >
            Orketech SpA
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl" style={sectionTitleStyle}>
            Política de privacidad
          </h1>
          <p className="mb-12 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: '#666666' }}>
            Última actualización: 12 de agosto de 2026
          </p>

          <div className="space-y-9 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: '#353535' }}>
            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>1. Responsable</h2>
              <p>
                Orketech SpA (en adelante, “Orketech”) es responsable del tratamiento de los datos personales
                recopilados a través de sus formularios de contacto, formularios de generación de contactos de
                LinkedIn y otros canales comerciales propios.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>2. Datos que podemos recopilar</h2>
              <p>
                Según el canal y la información que decidas proporcionar, podemos recopilar nombre, apellido,
                correo electrónico laboral, empresa, cargo y el mensaje o descripción del proceso que quieres
                mejorar o automatizar.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>3. Finalidad del uso</h2>
              <p>
                Usamos estos datos para responder consultas, evaluar oportunidades de automatización, contactarte
                por motivos comerciales, coordinar un diagnóstico sin costo y dar seguimiento a conversaciones
                relacionadas con los servicios de Orketech.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>4. Origen de los datos</h2>
              <p>
                Los datos pueden provenir directamente de ti mediante esta web, correo electrónico u otros canales
                de contacto, o de formularios de generación de contactos de LinkedIn cuando aceptas enviar tu
                información a Orketech.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>5. Compartición y protección</h2>
              <p>
                Orketech no vende tus datos personales. Puede utilizar proveedores tecnológicos necesarios para
                operar sus canales comerciales y de comunicación. Aplicamos medidas razonables para proteger la
                información contra acceso, uso o divulgación no autorizados.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>6. Conservación</h2>
              <p>
                Conservamos los datos durante el tiempo necesario para atender la consulta, mantener una relación
                comercial o cumplir obligaciones aplicables. Puedes solicitar su eliminación cuando corresponda.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>7. Tus solicitudes</h2>
              <p>
                Puedes solicitar acceso, corrección o eliminación de tus datos personales escribiendo a{' '}
                <a className="font-medium underline" style={{ color: '#5B5BD6' }} href="mailto:jhcarrillo@orketech.com">
                  jhcarrillo@orketech.com
                </a>
                . También puedes utilizar este correo para realizar consultas sobre esta política.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold" style={sectionTitleStyle}>8. Actualizaciones</h2>
              <p>
                Orketech puede actualizar esta política para reflejar cambios en sus canales, servicios o prácticas
                de tratamiento de datos. La fecha de actualización mostrada al inicio indica la versión vigente.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
