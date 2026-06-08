"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";
import { clientLogos as clientLogosImport } from "../lib/images";

/* ── PRIMESYS services data ─────────────────────────────────────── */
const services = [
  {
    num: "01", title: "Portales Web",         href: "/portales",
    body: "Portales institucionales y corporativos que organizan información crítica, conectan servicios y sostienen experiencias claras para usuarios con alta exigencia operativa.",
    stats: [{ label: "Tiempo de carga", value: "< 1.5S" }, { label: "Disponibilidad", value: "99.9%" }],
  },
  {
    num: "02", title: "Software a la Medida", href: "/software-medida",
    body: "Plataformas construidas sobre la lógica real del negocio. Sin plantillas. Automatización de decisiones, trazabilidad total y escalabilidad real.",
    stats: [{ label: "Deuda técnica", value: "CERO" }, { label: "Ciclo de build", value: "CONTINUO" }],
  },
  {
    num: "03", title: "Capacitaciones",       href: "/capacitaciones",
    body: "Programas aplicados para que nuevas herramientas y procesos sí se adopten. Transferencia de conocimiento sin dependencia externa.",
    stats: [{ label: "Retención", value: "+85%" }, { label: "Adopción", value: "SOSTENIDA" }],
  },
  {
    num: "04", title: "Planificación TI",     href: "/planificacion",
    body: "Hoja de ruta tecnológica conectada con ejecución operativa real. Prioridades técnicas alineadas al ciclo del negocio.",
    stats: [{ label: "Horizonte", value: "PLURIANUAL" }, { label: "Decisiones", value: "PRIORIZADAS" }],
  },
  {
    num: "05", title: "Ciberseguridad",       href: "/ciberseguridad",
    body: "Riesgo, exposición y remediación con criterio técnico y económico. Seguridad diseñada desde el inicio, no añadida como capa tardía.",
    stats: [{ label: "Nivel de riesgo", value: "CONTROLADO" }, { label: "Respuesta", value: "< 4H" }],
  },
  {
    num: "06", title: "Arquitectura Empresarial", href: "/arquitectura-empresarial",
    body: "Procesos, datos y aplicaciones alineados para decidir con coherencia. Sistemas que escalan sin fragmentar la operación.",
    stats: [{ label: "Cobertura", value: "FULL STACK" }, { label: "Integración", value: "NATIVA" }],
  },
  {
    num: "07", title: "Apps Móviles",         href: "/moviles",
    body: "Experiencias móviles para servicio, velocidad de uso y continuidad del producto. iOS y Android desde una sola base de código.",
    stats: [{ label: "Plataformas", value: "iOS + ANDROID" }, { label: "Modo offline", value: "HABILITADO" }],
  },
  {
    num: "08", title: "Cloud",                href: "/cloud",
    body: "Infraestructura y operación cloud con mejor lectura de capacidad, costo y gobierno. Escalado controlado sin sorpresas.",
    stats: [{ label: "Escalado", value: "AUTOMÁTICO" }, { label: "Optimización", value: "CONTINUA" }],
  },
  {
    num: "09", title: "Procesos",             href: "/procesos",
    body: "Procesos mejorados y digitalizados para reducir cuellos de botella y tareas repetitivas. Fricción operativa eliminada.",
    stats: [{ label: "Fricción ops", value: "REDUCIDA" }, { label: "Automatización", value: "ACTIVA" }],
  },
];

/* ── Form validation ────────────────────────────────────────────── */
const validateName  = (v) => /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/.test(v.trim());
const validateEmail = (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v) && v.length <= 254;
const validateMsg   = (v) => v.trim().length >= 10 && v.length <= 1000;
const sanitize      = (v) => typeof v === "string" ? v.replace(/[<>]/g, "").replace(/&/g, "&amp;").trim() : "";

export default function HomePage() {
  const router        = useRouter();
  const canvasRef     = useRef(null);
  const scrollRef     = useRef(null);
  const isPausedRef   = useRef(false);
  const rafRef        = useRef(null);
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const clientLogos = clientLogosImport;

  /* scroll-to handler */
  useEffect(() => {
    const target = router.query.scrollTo;
    if (typeof target !== "string") return;
    const id = requestAnimationFrame(() =>
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
    return () => cancelAnimationFrame(id);
  }, [router.query.scrollTo]);

  /* canvas wave animation — port of Stitch's brutalist-waves */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let W = 0, H = 0;
    const ROWS = 20, COLS = 40, SX = 40, SY = 30;

    function init() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
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
        ctx.strokeStyle = "#1a1a1a";
        ctx.lineWidth   = 0.5;
        for (let j = 0; j < COLS; j++) {
          const p    = particles[i * COLS + j];
          const dist = Math.sqrt((p.bx - cx + ox) ** 2 + (p.by - cy + oy) ** 2);
          const wave = Math.sin(dist * 0.01 - t * 0.002) * 20;
          const x    = p.bx + ox;
          const y    = p.by + wave + oy;
          j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          ctx.fillStyle = "#2e2ebe";
          if (Math.random() > 0.90) ctx.fillStyle = "#ffb4ab";
          ctx.fillRect(x - 1, y - 1, 3, 3);
        }
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);

  /* cards auto-scroll — pauses when a card is hovered */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    function step() {
      if (!isPausedRef.current) {
        el.scrollLeft += 0.7;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  /* form handlers */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s'-]*$/.test(value)) return;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const s = { name: sanitize(form.name), email: sanitize(form.email).toLowerCase(), message: sanitize(form.message) };

    if (!validateName(s.name))  return setStatus({ type: "error", message: "Nombre inválido. Usa entre 2 y 50 caracteres." });
    if (!validateEmail(s.email)) return setStatus({ type: "error", message: "Ingresa un correo electrónico válido." });
    if (!validateMsg(s.message)) return setStatus({ type: "error", message: "El mensaje debe tener al menos 10 caracteres." });

    const svcId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const tplId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const key   = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!svcId || !tplId || !key || svcId === "your_service_id_here")
      return setStatus({ type: "error", message: "El canal de contacto no está configurado aún." });

    setStatus({ type: "sending", message: "" });
    try {
      const res = await emailjs.send(svcId, tplId, { from_name: s.name, from_email: s.email, message: s.message, to_email: "almeidaandres@proton.me" }, key);
      if (res.status === 200) {
        setStatus({ type: "success", message: "Recibimos tu mensaje. Te responderemos en menos de 24 horas." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "No pudimos enviar tu solicitud. Inténtalo de nuevo." });
      }
    } catch {
      setStatus({ type: "error", message: "Error al enviar. Escríbenos a contacto@primesys-ec.com" });
    }
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-grid">
      <Header />

      <main id="main-content" className="flex-grow flex flex-col mx-auto w-full">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="w-full relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0"
            aria-hidden="true"
          />
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding-lg grid grid-cols-12 gap-gutter relative z-10 pointer-events-none">
            <div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col items-start gap-16 pointer-events-auto">
              <h1 className="font-display-xl text-display-xl text-surface-container-lowest md:w-[90%] leading-[0.9] uppercase pointer-events-none">
                INGENIERÍA DE SOFTWARE<br />
                <span className="text-surface-variant">PARA EMPRESAS REALES.</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter w-full">
                <div className="col-span-1">
                  <p
                    className="font-body-lg text-body-lg text-surface-container-highest max-w-md font-medium"
                    style={{
                      background: "linear-gradient(to right, rgba(255,255,255,0.96) 60%, transparent 100%)",
                      padding: "10px 32px 10px 0",
                    }}
                  >
                    Construimos software, integramos sistemas y sostenemos infraestructura para empresas en Ecuador. 25 años de entrega continua, sin promesas vacías.
                  </p>
                </div>
                <div className="col-span-1 flex items-end md:justify-end mt-8 md:mt-0">
                  <Link
                    href="/#contact"
                    className="bg-secondary-container text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-on-secondary transition-colors flex items-center space-x-4"
                  >
                    <span>CONTACTAR AL EQUIPO</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT MARQUEE ───────────────────────────────────── */}
        <section
          id="clients"
          className="w-full border-y border-outline-variant bg-primary-fixed overflow-hidden py-10"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="inline-flex items-center justify-center px-14 flex-shrink-0">
                <img
                  src={typeof logo === "string" ? logo : logo?.src}
                  alt=""
                  loading="eager"
                  className="h-14 w-auto max-w-[180px] object-contain"
                  style={{ filter: "grayscale(1)", opacity: 0.6 }}
                  onError={(e) => { e.currentTarget.parentElement.style.display = "none"; }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── SYSTEM CAPABILITIES ──────────────────────────────── */}
        <section id="services" className="w-full bg-surface-container-lowest border-b border-outline-variant py-section-padding-md overflow-hidden relative">
          <div className="px-margin-mobile md:px-margin-desktop mb-16 max-w-container-max mx-auto w-full">
            <h2 className="font-display-xl text-display-xl text-white uppercase border-b border-outline-variant pb-8 font-extrabold tracking-tighter w-full">
              CAPACIDADES DEL SISTEMA
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-8 font-medium w-full max-w-4xl">
              Nueve disciplinas técnicas bajo un solo equipo. Software, infraestructura, datos, seguridad y procesos — todo lo que una empresa necesita para construir y sostener su tecnología.
            </p>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar pl-margin-mobile md:pl-margin-desktop pb-12 gap-6 w-full"
          >
            {[...services, ...services].map((svc, idx) => (
              <div
                key={`${svc.num}-${idx}`}
                onMouseEnter={() => { isPausedRef.current = true; }}
                onMouseLeave={() => { isPausedRef.current = false; }}
                className="shrink-0 w-[85vw] md:w-[560px] border border-outline-variant bg-surface-container flex flex-col group hover:bg-surface-container-highest hover:border-secondary-container transition-colors duration-200 cursor-default select-none"
              >
                <div className="p-8 border-b border-outline-variant flex justify-between items-baseline group-hover:border-secondary-container transition-colors">
                  <h3 className="font-headline-md text-headline-md text-white uppercase font-bold tracking-tight">
                    {svc.title}
                  </h3>
                  <span className="font-label-mono text-label-mono text-outline">{svc.num}</span>
                </div>
                <div className="p-8">
                  <p className="font-body-md text-body-md text-on-surface-variant">{svc.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT FORM ─────────────────────────────────────── */}
        <section id="contact" className="w-full bg-primary-fixed border-t border-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding-md">
            <div className="grid grid-cols-12 gap-gutter items-start">

              {/* Left — title + contact info */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-10 mb-16 md:mb-0">
                <h2 className="font-headline-lg text-headline-lg text-surface-container-lowest uppercase">
                  CUÉNTANOS<br />TU RETO.
                </h2>
                <dl className="flex flex-col gap-5">
                  <div>
                    <dt className="font-label-mono-sm text-label-mono-sm text-outline uppercase mb-1">CORREO</dt>
                    <dd className="font-body-md text-body-md text-surface-container-lowest">contacto@primesys-ec.com</dd>
                  </div>
                  <div>
                    <dt className="font-label-mono-sm text-label-mono-sm text-outline uppercase mb-1">UBICACIÓN</dt>
                    <dd className="font-body-md text-body-md text-surface-container-lowest">Quito, Ecuador</dd>
                  </div>
                  <div>
                    <dt className="font-label-mono-sm text-label-mono-sm text-outline uppercase mb-1">DISPONIBILIDAD</dt>
                    <dd className="font-body-md text-body-md text-surface-container-lowest">Lun–Vie · 09:00–18:00 ECT</dd>
                  </div>
                </dl>
              </div>

              {/* Right — three fields stacked + button */}
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-outline-variant uppercase">NOMBRE</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength={50}
                      placeholder="APELLIDO, NOMBRE"
                      className="w-full border border-surface-container-lowest bg-transparent px-4 py-3 font-body-md text-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary-container placeholder:text-outline"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-outline-variant uppercase">CORREO</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      placeholder="DEPT@EMPRESA.COM"
                      className="w-full border border-surface-container-lowest bg-transparent px-4 py-3 font-body-md text-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary-container placeholder:text-outline"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-mono text-label-mono text-outline-variant uppercase">DESCRIPCIÓN DEL PROYECTO</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      maxLength={1000}
                      rows={5}
                      placeholder="DESCRIBE EL PROYECTO O PROBLEMA QUE ENFRENTAS..."
                      className="w-full border border-surface-container-lowest bg-transparent px-4 py-3 font-body-md text-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary-container placeholder:text-outline resize-none"
                    />
                    <span className="self-end font-label-mono-sm text-label-mono-sm text-outline">
                      {form.message.length}/1000
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={status.type === "sending"}
                      className="w-full bg-secondary-container text-white py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-on-secondary transition-colors disabled:opacity-60"
                    >
                      {status.type === "sending" ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
                    </button>
                    {status.type !== "idle" && status.type !== "sending" && (
                      <p
                        role="alert"
                        className={`font-body-md text-body-md ${status.type === "success" ? "text-surface-container-lowest" : "text-red-700"}`}
                      >
                        {status.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
