import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from '../lib/basePath';

export default function Capacitacion() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Capacitaciones
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/8.jpg")} 
            alt="Capacitaciones"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ofrecemos programas de formación diseñados para fortalecer tus habilidades tecnológicas y las de tu equipo de trabajo. Con nuestras capacitaciones podrás dominar herramientas informáticas, aplicaciones empresariales y soluciones digitales que impulsen el crecimiento y la eficiencia de tu organización.           
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Con nuestras Capacitaciones en Software impulsamos el crecimiento de tu empresa a través de formación personalizada:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Entrenamiento práctico, cursos enfocados en el uso real de herramientas y aplicaciones.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Productividad al máximo, optimizamos el trabajo diario reduciendo errores y tiempos.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Formación personalizada, programas adaptados al nivel y necesidades de tu equipo.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Actualización constante, capacitaciones en tecnologías emergentes y últimas tendencias.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
