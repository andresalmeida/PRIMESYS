"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { withBasePath } from "../lib/basePath";

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroLovable() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[#080D14]">
      {/* Background — deep dark gradient over photo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(155deg, rgba(8,13,20,0.82) 0%, rgba(33,41,84,0.42) 52%, rgba(8,13,20,0.93) 100%), url('${withBasePath('/diego/diego.jpg')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dot grid — structural texture over the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Thin red accent bar — top-left structural anchor */}
      <motion.div
        className="absolute left-0 top-0 z-[2] h-[3px] bg-[#FF4F46]"
        initial={{ width: 0 }}
        animate={{ width: '120px' }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[100dvh] flex-col pt-28 sm:pt-36 md:pt-44 lg:pt-52">

          {/* Eyebrow */}
          <motion.p
            className="mb-5 font-['Sora'] text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#FF4F46]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Quito, Ecuador · Desde 1999
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-['Space_Grotesk'] text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            initial="hidden"
            animate="visible"
          >
            <motion.span className="block" custom={0} variants={lineVariants}>
              Ingeniería de software
            </motion.span>
            <motion.span className="block" custom={1} variants={lineVariants}>
              y arquitectura digital
            </motion.span>
            <motion.span className="block text-[#FF4F46]" custom={2} variants={lineVariants}>
              para empresas que escalan.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-7 max-w-[540px] font-['Sora'] text-base leading-relaxed text-white/60 sm:text-[1.05rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6 }}
          >
            Más de 25 años transformando operaciones complejas en productos digitales
            de alto rendimiento y disponibilidad continua.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="mt-10 inline-flex w-fit items-center rounded-[14px] bg-[#FF4F46] px-7 py-4 font-['Sora'] text-[0.92rem] font-bold text-white transition-colors duration-200 hover:bg-[#e8433b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4F46]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.5 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar asesoría
          </motion.a>

          {/* Stats — editorial inline presentation, not the hero metric template */}
          <motion.div
            className="mt-auto pb-12 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <dl className="flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-white/10 pt-7">
              <div className="flex items-baseline gap-2">
                <dt className="font-['Space_Grotesk'] text-2xl font-bold leading-none text-white">25+</dt>
                <dd className="font-['Sora'] text-sm text-white/45">años de experiencia</dd>
              </div>
              <div className="hidden h-3 w-px self-center bg-white/15 sm:block" aria-hidden="true" />
              <div className="flex items-baseline gap-2">
                <dt className="font-['Space_Grotesk'] text-2xl font-bold leading-none text-white">150+</dt>
                <dd className="font-['Sora'] text-sm text-white/45">implementaciones</dd>
              </div>
              <div className="hidden h-3 w-px self-center bg-white/15 sm:block" aria-hidden="true" />
              <div className="flex items-baseline gap-2">
                <dt className="font-['Space_Grotesk'] text-2xl font-bold leading-none text-white">99.9%</dt>
                <dd className="font-['Sora'] text-sm text-white/45">disponibilidad objetivo</dd>
              </div>
            </dl>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
