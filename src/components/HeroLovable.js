"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { withBasePath } from "../lib/basePath";

export default function HeroLovable() {
  const containerRef = useRef(null);

  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0b1a2d]"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11, 26, 45, 0.7), rgba(11, 26, 45, 0.5), rgba(11, 26, 45, 0.9)), url('${withBasePath('/diego/diego.jpg')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col pt-32 sm:pt-40 md:pt-48 lg:pt-56">
          {/* Main Headline */}
          <div className="flex flex-col items-start">
            <motion.h1
              className="font-['Rubik'] text-6xl font-black uppercase leading-[0.98] tracking-[-2px] text-white sm:text-7xl md:text-8xl lg:text-[100px]"
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="block"
                custom={0}
                variants={lineVariants}
              >
                TECNOLOGÍA
              </motion.span>
              <motion.span
                className="block"
                custom={1}
                variants={lineVariants}
              >
                QUE IMPULSA
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                custom={2}
                variants={lineVariants}
              >
                TU NEGOCIO
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 max-w-xl font-['Rubik'] text-lg font-medium text-gray-200 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Más de 25 años transformando ideas en soluciones digitales de impacto.
              Desarrollo de software, ciberseguridad, cloud services y más.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="#contact"
                className="group relative inline-flex h-[65px] w-[184px] items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* SVG Background */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 184 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H176C180.418 0 184 3.58172 184 8V57C184 61.4183 180.418 65 176 65H8C3.58172 65 0 61.4183 0 57V8Z"
                    fill="white"
                  />
                </svg>
                {/* Button Text */}
                <span className="relative z-10 font-['Rubik'] text-xl font-bold uppercase tracking-wide text-[#161a20]">
                  EMPEZAR
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            className="mt-auto pb-12 pt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div className="text-center sm:text-left">
                <div className="font-['Rubik'] text-4xl font-black text-white sm:text-5xl">
                  25+
                </div>
                <div className="mt-1 font-['Rubik'] text-sm font-medium text-gray-300">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-['Rubik'] text-4xl font-black text-white sm:text-5xl">
                  150+
                </div>
                <div className="mt-1 font-['Rubik'] text-sm font-medium text-gray-300">
                  Proyectos exitosos
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-['Rubik'] text-4xl font-black text-white sm:text-5xl">
                  99.9%
                </div>
                <div className="mt-1 font-['Rubik'] text-sm font-medium text-gray-300">
                  Disponibilidad
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
