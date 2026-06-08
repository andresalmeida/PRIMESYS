import Link from "next/link";
import SEO from "../src/components/SEO";

export default function Custom404() {
  return (
    <>
      <SEO
        title="Página no encontrada — Error 404"
        description="La página que buscas no existe o fue movida."
        noIndex={true}
      />
      <div className="antialiased min-h-screen flex flex-col items-center justify-center bg-white bg-grid px-margin-mobile md:px-margin-desktop py-24 text-center">
        <div className="max-w-2xl">
          <p className="font-label-mono text-label-mono text-outline uppercase">
            ERROR 404
          </p>
          <h1 className="mt-8 font-display-xl text-display-xl text-surface-container-lowest uppercase leading-[0.9] md:w-full">
            RUTA NO<br />
            <span className="text-surface-variant">ENCONTRADA.</span>
          </h1>
          <p className="mt-8 font-body-lg text-body-lg text-outline max-w-md mx-auto">
            La página que buscas fue movida o eliminada. Regresa al inicio y navega desde las capacidades principales.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="bg-secondary-container text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-on-secondary transition-colors"
            >
              VOLVER AL INICIO
            </Link>
            <Link
              href="/#services"
              className="border border-outline-variant text-surface-container-lowest px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-gray-50 transition-colors"
            >
              VER CAPACIDADES
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
