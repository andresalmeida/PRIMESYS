import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { servicesImages } from "../lib/images";

export default function ServicePageTemplate({ service }) {
  const image = servicesImages[service.imageId];

  return (
    <div className="min-h-[100dvh] bg-[#f4f2ec] text-[#202a38]">
      <Header />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-[#202a38]/10 bg-[#f4f2ec]">
          <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_right,_rgba(33,41,84,0.08),_transparent_42%),radial-gradient(circle_at_15%_15%,_rgba(255,79,70,0.13),_transparent_24%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1400px] gap-16 px-4 pb-16 pt-28 sm:px-6 md:pb-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8 lg:pb-24 lg:pt-36">
            <div className="max-w-2xl">
              <div className="mb-8 flex items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#6a7381]">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[#202a38]/12 bg-white/70 px-3 text-[#ff4f46]">
                  {service.index}
                </span>
                <span>{service.shortTitle}</span>
              </div>

              <h1 className="max-w-[12ch] text-balance font-['Space_Grotesk'] text-5xl font-[780] leading-[0.94] tracking-[-0.06em] text-[#1f2937] sm:text-6xl lg:text-[5.4rem]">
                {service.title}
              </h1>

              <p className="mt-8 max-w-[62ch] text-pretty font-['Sora'] text-[1.02rem] leading-8 text-[#465163]">
                {service.lead}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/#contact" className="ps-action ps-action--primary">
                  Solicitar diagnóstico
                </Link>
                <Link href="/#services" className="ps-action ps-action--secondary">
                  Ver capacidades
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-[#ff4f46]/10 blur-3xl lg:block" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#202a38]/12 bg-[#e9e7e2] p-3 shadow-[0_28px_70px_-42px_rgba(33,41,84,0.48)]">
                <div className="grid gap-3 rounded-[1.5rem] border border-white/70 bg-[#f8f6f2] p-4">
                  <div className="flex items-center justify-between border-b border-[#202a38]/8 pb-4">
                    <div>
                      <p className="font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.22em] text-[#768194]">
                        Delivery focus
                      </p>
                      <p className="mt-1 font-['Space_Grotesk'] text-xl font-bold tracking-[-0.04em] text-[#1f2937]">
                        {service.shortTitle}
                      </p>
                    </div>
                    <span className="rounded-full border border-[#202a38]/12 bg-white px-3 py-1 font-['IBM_Plex_Mono'] text-[0.68rem] uppercase tracking-[0.18em] text-[#ff4f46]">
                      PRIMESYS
                    </span>
                  </div>

                  <img
                    src={image.src || image}
                    alt={service.title}
                    className="h-[22rem] w-full rounded-[1.35rem] object-cover"
                  />

                  <div className="grid gap-3 md:grid-cols-3">
                    {service.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-[1.15rem] border border-[#202a38]/10 bg-white px-4 py-4 font-['Sora'] text-sm leading-6 text-[#4d5868]"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f2ec] px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="lg:pt-2">
              <p className="font-['IBM_Plex_Mono'] text-[0.74rem] uppercase tracking-[0.22em] text-[#ff4f46]">
                Qué resolvemos
              </p>
              <h2 className="mt-5 max-w-[14ch] font-['Space_Grotesk'] text-4xl font-[760] leading-[1.02] tracking-[-0.05em] text-[#1f2937] sm:text-5xl">
                Tecnología útil para decisiones y operación.
              </h2>
              <p className="mt-6 max-w-[62ch] font-['Sora'] text-base leading-8 text-[#516070]">
                {service.body}
              </p>
            </div>

            <div className="grid gap-0 border-y border-[#202a38]/10">
              {service.deliverables.map((deliverable, index) => (
                <article
                  key={deliverable}
                  className="group grid gap-4 border-b border-[#202a38]/10 py-7 transition-colors duration-300 last:border-b-0 md:grid-cols-[3.5rem_minmax(0,1fr)]"
                >
                  <span className="font-['IBM_Plex_Mono'] text-[0.72rem] uppercase tracking-[0.22em] text-[#7a8593] transition-colors duration-300 group-hover:text-[#ff4f46]">
                    0{index + 1}
                  </span>
                  <p className="max-w-[55ch] font-['Sora'] text-[0.98rem] leading-8 text-[#344255]">
                    {deliverable}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#202a38]/10 bg-[#ece9e1] px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
              <div>
                <p className="font-['IBM_Plex_Mono'] text-[0.74rem] uppercase tracking-[0.22em] text-[#ff4f46]">
                  Señales de valor
                </p>
                <h2 className="mt-5 max-w-[12ch] font-['Space_Grotesk'] text-4xl font-[760] leading-[1.02] tracking-[-0.05em] text-[#1f2937] sm:text-5xl">
                  Lo que cambia cuando el sistema está bien resuelto.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {service.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-[1.4rem] border border-[#202a38]/10 bg-white/90 px-5 py-6 shadow-[0_18px_40px_-34px_rgba(33,41,84,0.45)]"
                  >
                    <p className="font-['Space_Grotesk'] text-lg font-bold tracking-[-0.04em] text-[#1f2937]">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#202a38] px-4 py-18 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-['IBM_Plex_Mono'] text-[0.74rem] uppercase tracking-[0.22em] text-white/48">
                Próximo paso
              </p>
              <h2 className="mt-4 max-w-[14ch] font-['Space_Grotesk'] text-4xl font-[760] leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl">
                Conversemos sobre el tramo más crítico de tu operación.
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="ps-action ps-action--primary">
                Abrir conversación
              </Link>
              <Link href="/nuestro-trabajo" className="ps-action ps-action--dark">
                Ver trabajo aplicado
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
