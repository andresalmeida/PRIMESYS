import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from '../lib/basePath';

export default function Cloud() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Cloud Services
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/4.jpg")} 
            alt="Cloud Services"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ofrecemos servicios en la nube que te permiten acceder a servidores, almacenamiento, redes y software a través de Internet bajo demanda. Con esta solución, tu empresa puede utilizar infraestructura y aplicaciones sin necesidad de instalarlas o mantenerlas localmente, optimizando recursos y reduciendo costos operativos.
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Con nuestros Cloud Services transformamos la forma en que tu negocio utiliza la tecnología:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Infraestructura flexible, almacenamiento y servidores en la nube que se adaptan al crecimiento de tu empresa.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Optimización de costos, paga solo por lo que usas y reduce gastos en infraestructura física.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Acceso remoto, disponibilidad de tus aplicaciones y datos desde cualquier lugar y dispositivo.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
