import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-on-surface w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-gutter pt-section-padding-md pb-16">

          {/* Brand watermark */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-between gap-16">
            <div
              className="font-display-xl font-black text-white uppercase tracking-tighter leading-none select-none"
              style={{ fontSize: "clamp(64px, 7vw, 120px)", opacity: 0.1 }}
            >
              PRIMESYS
            </div>
            <p className="font-label-mono-sm text-label-mono-sm uppercase text-outline max-w-xs leading-relaxed">
              Tecnología de ingeniería para organizaciones<br />que operan con presión real.
            </p>
          </div>

          {/* Link columns */}
          <div className="col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-2 gap-8 mt-16 md:mt-0">
            <div className="flex flex-col space-y-4 border-l border-outline-variant pl-8">
              <h4 className="font-label-mono-sm text-label-mono-sm uppercase text-outline tracking-widest mb-4">
                Índice
              </h4>
              <Link href="/#services"      className="font-body-lg text-outline hover:text-white transition-colors !text-[16px]">CAPACIDADES</Link>
              <Link href="/nuestro-trabajo" className="font-body-lg text-outline hover:text-white transition-colors !text-[16px]">NUESTRO TRABAJO</Link>
              <Link href="/sobre-nosotros"  className="font-body-lg text-outline hover:text-white transition-colors !text-[16px]">SOBRE NOSOTROS</Link>
              <Link href="/#contact"        className="font-body-lg text-white hover:text-secondary transition-colors !text-[16px]">CONTACTO</Link>
            </div>
            <div className="flex flex-col space-y-4 border-l border-outline-variant pl-8">
              <h4 className="font-label-mono-sm text-label-mono-sm uppercase text-outline tracking-widest mb-4">
                Legal
              </h4>
              <Link href="/privacidad" className="font-body-lg text-outline hover:text-white transition-colors !text-[16px]">PRIVACIDAD</Link>
              <Link href="/terminos"   className="font-body-lg text-outline hover:text-white transition-colors !text-[16px]">TÉRMINOS</Link>
              <a
                href="mailto:contacto@primesys.ec"
                className="font-body-lg text-outline hover:text-white transition-colors !text-[16px] mt-4"
              >
                contacto@primesys.ec
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-label-mono-sm text-label-mono-sm uppercase text-outline">
            ©2026 PRIMESYS · TODOS LOS DERECHOS RESERVADOS
          </p>
          <p className="font-label-mono-sm text-label-mono-sm uppercase text-outline">
            QUITO, ECUADOR · DESDE 1999
          </p>
        </div>

      </div>
    </footer>
  );
}
