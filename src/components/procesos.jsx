import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from '../lib/basePath';

export default function Procesos() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Gestión de Procesos Empresariales
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/7.jpg")} 
            alt="Gestión de Procesos Empresariales"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ayudamos a analizar, diseñar, implementar y optimizar los procesos de tu organización mediante metodologías de Gestión de Procesos Empresariales (BPM). Con este enfoque, fortaleces la eficiencia operativa y logras una mejor alineación entre tus recursos, estrategias y objetivos institucionales.            
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Con nuestro servicio de Gestión de Procesos Empresariales te ayudamos a estructurar, mejorar y automatizar los procesos clave de tu organización para alcanzar mayor productividad y control:        
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Identificación de cuellos de botella, ineficiencias y oportunidades de mejora.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Automatización de flujos, implementación de soluciones digitales que reducen tareas repetitivas y manuales.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Capacitación y acompañamiento para que la organización mantenga procesos eficientes a largo plazo.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
