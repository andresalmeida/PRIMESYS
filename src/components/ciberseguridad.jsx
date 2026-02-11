import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from '../lib/basePath';

export default function Ciberseguridad() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Servicios Integrales de Ciberseguridad
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/9.jpg")} 
            alt="Servicios Integrales de Ciberseguridad"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ofrecemos soluciones integrales de ciberseguridad basadas en prácticas, tecnologías y procesos que protegen tus sistemas, redes, dispositivos y datos contra ataques digitales, accesos no autorizados, robos de información y posibles daños.
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Gestionamos la identificación, análisis y evaluación de riesgos de ciberseguridad con un marco de trabajo AVRACIBER que incluye el impacto económico en la gestión de riesgos:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Identificación y análisis de activos, vulnerabilidades y amenazas.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Matriz de riesgo en dimensiones de seguridad, incluyendo el impacto económico.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
