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

const dashboards = [
  {
    id: 1,
    title: "Análisis de Importaciones Ecuador",
    description: "Dashboard interactivo que analiza las importaciones bajo régimen general (2024–2025). Incluye métricas de valor CIF, países de origen y tendencias temporales.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiODM0YThhMWMtYTdjMC00OWU1LWFiNDctZWUyMTBiMWE3Mjc5IiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9&pageName=9853d6945e241505ddeb",
  },
  {
    id: 2,
    title: "Research Funding Global",
    description: "Análisis académico sobre la financiación gubernamental destinada a investigación de ansiedad y depresión a nivel mundial y su priorización por país.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTA5MDg4N2YtNDZmMC00MzI3LWE0ZTMtM2Q0YjkyZDg1Y2QzIiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9",
  },
];

const proyectos = [
  { n: "01", title: "Análisis de Datos y Business Intelligence", desc: "Dashboards interactivos y modelos predictivos que transforman datos crudos en decisiones estratégicas de alto impacto.", sector: "MÚLTIPLES SECTORES" },
  { n: "02", title: "ERP para Automatización de Tesorería",     desc: "Sistema integral para conjuntos residenciales que elimina la carga administrativa y centraliza la gestión financiera.", sector: "REAL ESTATE" },
  { n: "03", title: "Gestión de Riesgos Sector Cooperativo",    desc: "Plataforma de cumplimiento normativo y evaluación de riesgos en tiempo real, diseñada para la solidez financiera.", sector: "SECTOR FINANCIERO" },
];

export default function NuestroTrabajo() {
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
            CASOS REALES.<br />
            <span className="text-surface-variant">RESULTADOS MEDIBLES.</span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Ejemplos reales de los dashboards, software y sistemas que hemos construido para organizaciones en Ecuador.
          </motion.p>
        </div>
      </section>

      {/* ── DASHBOARDS ────────────────────────────────────── */}
      <section className="w-full bg-white border-b border-outline-variant py-section-padding-md">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            className="mb-14 border-b border-outline-variant pb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="font-label-mono text-label-mono text-outline uppercase mb-6">
              INTELIGENCIA DE NEGOCIO
            </p>
            <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest uppercase">
              DASHBOARDS<br />EN PRODUCCIÓN.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-20">
            {dashboards.map((db, i) => (
              <motion.article
                key={db.id}
                className="grid grid-cols-12 gap-gutter items-start border-b border-outline-variant pb-20"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.1} variants={fadeUp}
              >
                {/* Description */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
                  <span className="font-label-mono text-label-mono text-outline uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-surface-container-lowest uppercase">
                    {db.title}
                  </h3>
                  <p className="font-body-md text-body-md text-outline max-w-sm">
                    {db.description}
                  </p>
                  <a
                    href={db.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-label-mono text-label-mono text-secondary-container uppercase border-b border-secondary-container pb-px hover:opacity-70 transition-opacity w-fit"
                  >
                    VER DASHBOARD
                  </a>
                </div>

                {/* Embed */}
                <div className="col-span-12 md:col-span-8 border border-outline-variant overflow-hidden">
                  <div className="relative aspect-video bg-surface-container">
                    <iframe
                      src={db.embedUrl}
                      title={db.title}
                      className="absolute inset-0 h-full w-full"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ─────────────────────────────────────── */}
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-section-padding-md">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div
            className="mb-14 border-b border-outline-variant pb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <p className="font-label-mono text-label-mono text-outline uppercase mb-6">
              SOLUCIONES A MEDIDA
            </p>
            <h2 className="font-headline-lg text-headline-lg text-white uppercase">
              PROYECTOS<br />DESTACADOS.
            </h2>
          </motion.div>

          <div>
            {proyectos.map((p, i) => (
              <motion.div
                key={p.n}
                className="grid grid-cols-12 gap-gutter items-baseline border-b border-outline-variant py-10"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i * 0.09} variants={fadeUp}
              >
                <span className="col-span-1 font-label-mono text-label-mono text-outline uppercase">
                  {p.n}
                </span>
                <div className="col-span-12 md:col-span-7 min-w-0">
                  <h3 className="font-headline-md text-headline-md text-white uppercase">{p.title}</h3>
                  <p className="mt-4 max-w-lg font-body-md text-body-md text-on-surface-variant">{p.desc}</p>
                </div>
                <span className="col-span-12 md:col-span-4 font-label-mono text-label-mono text-outline uppercase md:text-right">
                  {p.sector}
                </span>
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
              ¿TIENES UN<br />PROYECTO EN MENTE?
            </h2>
          </motion.div>
          <Link
            href="/#contact"
            className="bg-secondary-container text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-on-secondary transition-colors self-start sm:self-end"
          >
            INICIAR PROYECTO
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
