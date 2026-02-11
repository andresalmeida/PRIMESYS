import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from '../lib/basePath';

export default function Portales() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Diseño de Portales Web
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/3.jpg")} 
            alt="Diseño de Portales Web"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ayudamos a crear portales web estructurados que centralizan tus servicios, información y contenido. Nuestro objetivo es mejorar la experiencia de tus usuarios, fortalecer tu presencia digital y facilitar el acceso a los recursos clave de tu empresa.            
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Con nuestro servicio de Diseño de Portales Web potenciamos tu presencia digital con soluciones funcionales y atractivas:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Funcionalidades a medida, integración de sistemas, secciones dinámicas y herramientas interactivas.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Escalabilidad y fácil administración, plataformas listas para crecer y gestionarse de forma sencilla.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Buena experiencia de usuario, navegación intuitiva que facilita el acceso a información y servicios.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
