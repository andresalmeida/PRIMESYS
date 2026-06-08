"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { delay: d * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] } }),
};

const valores = [
  { n: "01", title: "Excelencia",    desc: "Cada entrega pasa por estándares rigurosos de calidad, pruebas y documentación antes de salir a producción." },
  { n: "02", title: "Colaboración",  desc: "Trabajamos como extensión del equipo del cliente. El conocimiento se transfiere, no se retiene." },
  { n: "03", title: "Confiabilidad", desc: "25 años de relaciones que perduran porque cada compromiso se cumple, especialmente los difíciles." },
  { n: "04", title: "Seguridad",     desc: "Ciberseguridad y arquitectura de datos diseñadas desde el día uno, no añadidas como capa tardía." },
];

const stats = [
  { n: "25+",   label: "Años en el mercado",      sub: "Operando en Ecuador desde 1999" },
  { n: "150+",  label: "Implementaciones",        sub: "Sector público, financiero e industrial" },
  { n: "99.9%", label: "Disponibilidad objetivo", sub: "SLA comprometido en contratos activos" },
];

export default function SobreNosotros() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let W = 0, H = 0, particles = [];
    const ROWS = 14, COLS = 28, SX = 52, SY = 42;

    function init() {
      const rect = canvas.getBoundingClientRect();
      W = canvas.width  = rect.width  || canvas.offsetWidth  || 1200;
      H = canvas.height = rect.height || canvas.offsetHeight || 500;
      particles = [];
      for (let i = 0; i < ROWS; i++)
        for (let j = 0; j < COLS; j++)
          particles.push({ bx: j * SX, by: i * SY });
    }

    let t = 0;
    function draw() {
      t++;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      const ox = (W - COLS * SX) / 2, oy = (H - ROWS * SY) / 2;
      for (let i = 0; i < ROWS; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0.18)";
        ctx.lineWidth = 0.6;
        for (let j = 0; j < COLS; j++) {
          const p    = particles[i * COLS + j];
          const dist = Math.sqrt((p.bx - cx + ox) ** 2 + (p.by - cy + oy) ** 2);
          const wave = Math.sin(dist * 0.011 - t * 0.0007) * 9;
          const x    = p.bx + ox;
          const y    = p.by + wave + oy;
          j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          if (Math.random() > 0.982) {
            ctx.fillStyle = "rgba(46,46,190,0.45)";
            ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    }

    requestAnimationFrame(() => { init(); draw(); });
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);

  return (
    <div className="antialiased min-h-screen flex flex-col bg-white bg-grid">
      <Header />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="w-full bg-surface-container-lowest overflow-hidden relative min-h-[68vh] flex items-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0"
          style={{ background: "transparent" }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding-lg" style={{ zIndex: 2 }}>
          <motion.h1
            className="font-display-xl text-display-xl text-white uppercase leading-[0.9] md:w-[80%]"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            25 AÑOS CONSTRUYENDO<br />
            <span className="text-surface-variant">INFRAESTRUCTURA DIGITAL.</span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Desde 1999, diseñamos, construimos y sostenemos sistemas que mueven operaciones reales en Ecuador y la región.
          </motion.p>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ─────────────────────────────────── */}
      <section className="w-full bg-white border-b border-outline-variant py-section-padding-md">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter items-start">

          <motion.div
            className="col-span-12 md:col-span-7"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="font-label-mono text-label-mono text-outline uppercase mb-6">
              NUESTRA HISTORIA
            </p>
            <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest uppercase">
              UNA EMPRESA DE INGENIERÍA,<br />NO DE PROMESAS.
            </h2>
            <p className="mt-8 max-w-xl font-body-lg text-body-lg text-outline">
              PRIMESYS nació con una premisa simple: la tecnología empresarial debe ser tan confiable como el equipo que la opera. Más de dos décadas después, esa premisa guía cada proyecto que entregamos.
            </p>
            <p className="mt-5 max-w-xl font-body-lg text-body-lg text-outline">
              Trabajamos con organizaciones públicas y privadas en Ecuador para modernizar sus sistemas, integrar tecnología nueva con infraestructura existente y garantizar que sus operaciones no se detengan.
            </p>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-5 border-l border-outline-variant pl-8 mt-12 md:mt-0"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            custom={0.15} variants={fadeUp}
          >
            <dl className="flex flex-col gap-10">
              {stats.map(({ n, label, sub }) => (
                <div key={n}>
                  <dt className="font-display-xl !text-[56px] font-extrabold leading-none text-surface-container-lowest">{n}</dt>
                  <dd className="mt-2 font-label-mono text-label-mono text-surface-container-lowest uppercase">{label}</dd>
                  <dd className="mt-1 font-body-md text-body-md text-outline">{sub}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* ── VALORES ───────────────────────────────────────── */}
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-section-padding-md">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            className="mb-14 border-b border-outline-variant pb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="font-label-mono text-label-mono text-outline uppercase mb-6">
              PRINCIPIOS OPERATIVOS
            </p>
            <h2 className="font-headline-lg text-headline-lg text-white uppercase">
              CÓMO TOMAMOS<br />DECISIONES.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {valores.map((v, i) => (
              <motion.div
                key={v.n}
                className="border-b border-outline-variant py-10 sm:px-10 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-outline-variant sm:[&:nth-child(odd)]:pl-0"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.09} variants={fadeUp}
              >
                <span className="font-label-mono text-label-mono text-outline uppercase block mb-4">{v.n}</span>
                <h3 className="font-headline-md text-headline-md text-white uppercase">{v.title}</h3>
                <p className="mt-4 max-w-xs font-body-md text-body-md text-on-surface-variant">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO QUOTE ─────────────────────────────────────── */}
      <section className="w-full bg-primary-fixed border-b border-outline-variant py-section-padding-md">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.figure
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          >
            <blockquote
              className="font-headline-lg text-surface-container-lowest font-bold leading-[1.2] uppercase"
              style={{ fontSize: "clamp(1.5rem, 3vw, 48px)" }}
            >
              "LLEVAMOS 25 AÑOS PORQUE ENTREGAMOS LO QUE PROMETEMOS. EL CLIENTE DE HOY ES EL CLIENTE DE MAÑANA."
            </blockquote>
            <figcaption className="mt-12 flex flex-col gap-1">
              <p className="font-headline-md text-headline-md text-surface-container-lowest uppercase">
                MARCELO REA GUAMÁN
              </p>
              <p className="font-label-mono text-label-mono text-outline uppercase">
                CEO &amp; FUNDADOR · PRIMESYS
              </p>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ── MISIÓN / VISIÓN ───────────────────────────────── */}
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-section-padding-md">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.p
            className="font-label-mono text-label-mono text-outline uppercase mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            NUESTRA ESENCIA
          </motion.p>
          <div className="grid grid-cols-1 border-t border-outline-variant sm:grid-cols-2">
            {[
              { n: "01", title: "Misión", body: "Construir y sostener soluciones tecnológicas a medida para nuestros clientes, con foco en calidad real, seguridad y resultados tangibles en cada entrega." },
              { n: "02", title: "Visión", body: "Ser el equipo tecnológico de confianza para empresas en Ecuador y la región, reconocidos por la solidez de nuestro trabajo y la permanencia de nuestras relaciones." },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                className="py-12 sm:px-10 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-outline-variant sm:[&:nth-child(odd)]:pl-0"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.12} variants={fadeUp}
              >
                <span className="font-label-mono text-label-mono text-outline uppercase block mb-4">{item.n}</span>
                <h3 className="font-headline-md text-headline-md text-white uppercase">{item.title}</h3>
                <p className="mt-4 max-w-sm font-body-md text-body-md text-on-surface-variant">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="w-full bg-white border-b border-outline-variant py-section-padding-md">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-label-mono text-label-mono text-outline uppercase mb-6">SIGUIENTE PASO</p>
            <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest uppercase">
              HABLEMOS DE<br />TU PROYECTO.
            </h2>
          </motion.div>
          <Link
            href="/#contact"
            className="bg-secondary-container text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-on-secondary transition-colors self-start sm:self-end"
          >
            INICIAR CONVERSACIÓN
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
