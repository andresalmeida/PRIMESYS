import Header from "./Header";
import Footer from "./Footer";
import { withBasePath } from "../lib/basePath";

export default function AplicacionesMoviles() {
  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="font-['Rubik'] text-4xl font-bold text-white sm:text-5xl">
          Desarrollo de Aplicaciones Móviles
        </h1>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <img
            src={withBasePath("/servicios/7.jpg")} 
            alt="Desarrollo de Aplicaciones Móviles"
            className="h-[300px] w-full rounded-2xl object-cover shadow-xl"
          />

          <section className="flex flex-col justify-center">
            <p className="font-['Rubik'] text-lg leading-relaxed text-gray-300">
              Te ofrecemos el desarrollo de aplicaciones móviles diseñadas para funcionar en celulares y tablets. Estas soluciones te permiten acercar tus servicios, productos e información a tus usuarios de forma rápida, cómoda y personalizada, fortaleciendo la conexión con tus clientes.
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="font-['Rubik'] text-2xl font-bold text-white">Servicios</h2>
          <p className="mt-4 font-['Rubik'] text-gray-300">
            Con nuestro servicio de Desarrollo de Aplicaciones Móviles te ayudamos a transformar ideas en soluciones digitales innovadoras que potencian tu negocio:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Aplicaciones a medida diseñadas para tu empresa, adaptadas a tus objetivos y necesidades específicas.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Interfaces modernas, intuitivas y fáciles de usar que aumentan la fidelización de clientes.
            </li>
            <li className="flex items-start gap-3 font-['Rubik'] text-gray-300">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400"></span>
              Soluciones preparadas para crecer contigo y adaptarse a nuevas funcionalidades en el futuro.
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
}
