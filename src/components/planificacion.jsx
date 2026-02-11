import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from '../lib/basePath';

export default function Planificacion() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Planificación Estratégica
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/6.jpg")} 
            alt="Planificación Estratégica"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ayudamos a llevar a cabo un proceso de planificación estratégica orientado al crecimiento y la mejora continua de tu empresa. Juntos definimos las acciones necesarias para que tu organización cumpla con su misión, visión y objetivos institucionales.            
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Con nuestro servicio de Planificación Estratégica impulsamos el crecimiento y sostenibilidad de tu negocio:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Establecemos metas medibles y alcanzables que guían el rumbo de la empresa.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Análisis de entorno y recursos, identificamos oportunidades, riesgos y fortalezas para una mejor toma de decisiones.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Transformación organizacional, aseguramos que toda la empresa esté alineada con la visión y misión corporativa.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
