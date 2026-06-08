import Link from "next/link";
import SEO, { createWebPageSchema } from "../src/components/SEO";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function TerminosPage() {
  const schema = createWebPageSchema({
    title: "Términos de uso - PRIMESYS",
    description: "Condiciones generales de uso del sitio web de PRIMESYS.",
    url: "/terminos",
  });

  return (
    <>
      <SEO
        title="Términos de uso"
        description="Consulta las condiciones generales de uso del sitio web de PRIMESYS y sus canales de contacto."
        schema={schema}
      />
      <div className="antialiased min-h-screen flex flex-col bg-white">
        <Header />

        {/* ── HERO ── */}
        <section className="w-full bg-surface-container-lowest">
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
            <p className="font-label-mono text-label-mono text-outline uppercase mb-6">
              LEGAL
            </p>
            <h1 className="font-headline-lg text-headline-lg text-white uppercase max-w-2xl">
              ESTE SITIO COMUNICA<br />CAPACIDADES Y CONTACTO.
            </h1>
          </div>
        </section>

        {/* ── CONTENIDO ── */}
        <main id="main-content" className="flex-grow w-full bg-white border-b border-outline-variant">
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding-md">
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                <p className="font-body-lg text-body-lg text-outline">
                  La información publicada aquí tiene fines informativos y comerciales. Puede actualizarse para reflejar cambios en servicios, experiencia acumulada, alcance de proyectos o contenido institucional.
                </p>
                <p className="font-body-lg text-body-lg text-outline">
                  El uso de este sitio no constituye una relación contractual automática con PRIMESYS. Cualquier propuesta técnica, económica o de implementación se define de forma específica para cada cliente y contexto operativo.
                </p>
                <p className="font-body-lg text-body-lg text-outline">
                  Si necesitas una aclaración sobre el contenido, la mejor vía es escribirnos a{" "}
                  <a
                    href="mailto:contacto@primesys-ec.com"
                    className="text-secondary-container border-b border-secondary-container hover:opacity-70 transition-opacity"
                  >
                    contacto@primesys-ec.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-outline-variant">
              <Link
                href="/"
                className="font-label-mono text-label-mono text-outline-variant uppercase border-b border-outline-variant pb-px hover:text-surface-container-lowest hover:border-surface-container-lowest transition-colors"
              >
                ← VOLVER AL INICIO
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
