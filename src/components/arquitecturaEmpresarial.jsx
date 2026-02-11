import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from '../lib/basePath';

export default function ArquitecturaEmpresarial() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Arquitectura Empresarial
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/5.jpg")} 
            alt="Arquitectura Empresarial"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ayudamos a implementar un enfoque estratégico para planificar, diseñar y gestionar la infraestructura tecnológica de tu organización. Con nuestra asesoría, alineas tu estrategia de negocio con las plataformas tecnológicas, modelos de datos, aplicaciones y procesos, garantizando eficiencia y coherencia en cada nivel de tu empresa.
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Con nuestra solución de Arquitectura Empresarial te ayudamos a transformar tu organización con un enfoque estratégico que conecta la tecnología con el negocio:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Sincronización de los objetivos empresariales con la infraestructura tecnológica.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Conexión de sistemas, aplicaciones y datos para mejorar la productividad.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Impulsamos la modernización de tu empresa para que se mantenga competitiva.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
