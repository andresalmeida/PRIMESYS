import Link from "next/link";
import SEO, { createWebPageSchema } from "../src/components/SEO";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function PrivacidadPage() {
  const schema = createWebPageSchema({
    title: "Política de privacidad - PRIMESYS",
    description: "Información sobre el tratamiento de datos y canales de contacto de PRIMESYS.",
    url: "/privacidad",
  });

  return (
    <>
      <SEO
        title="Política de privacidad"
        description="Conoce cómo PRIMESYS gestiona la información compartida a través de sus canales de contacto y formularios."
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
              TRATAMOS LA INFORMACIÓN<br />CON CRITERIO Y RESERVA.
            </h1>
          </div>
        </section>

        {/* ── CONTENIDO ── */}
        <main id="main-content" className="flex-grow w-full bg-white border-b border-outline-variant">
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding-md">
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                <p className="font-body-lg text-body-lg text-outline">
                  Cuando completas el formulario de contacto de PRIMESYS, utilizamos tus datos únicamente para analizar tu solicitud, responderte y continuar la conversación comercial o técnica que hayas iniciado.
                </p>
                <p className="font-body-lg text-body-lg text-outline">
                  No compartimos esta información con terceros ajenos a la operación del servicio ni la utilizamos para campañas no solicitadas. Si necesitas actualizar o eliminar la información que nos hayas enviado, puedes escribirnos a{" "}
                  <a
                    href="mailto:contacto@primesys.ec"
                    className="text-secondary-container border-b border-secondary-container hover:opacity-70 transition-opacity"
                  >
                    contacto@primesys.ec
                  </a>
                  .
                </p>
                <p className="font-body-lg text-body-lg text-outline">
                  Este contenido resume la política actual del sitio y puede actualizarse cuando cambien los procesos internos o las obligaciones aplicables.
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
