"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Smartphone,
  Terminal,
  Workflow,
} from "lucide-react";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";
import Header from "./Header";
import Footer from "./Footer";
import diegoImage from "../diego/diego.jpg";
import { servicesImages, clientsImages, findImage } from "../lib/images";
import ParticleBackground from "./ParticleBackground";
import AnimatedCounter from "./AnimatedCounter";
import ScrollProgress from "./ScrollProgress";
import TextReveal from "./TextReveal";

const serviceIcons = [Layers, Cpu, BadgeCheck, Workflow, ShieldCheck, Cloud, Smartphone, Layers, Workflow];

const services = [
  { title: "Diseño de portales web", slug: "portales" },
  { title: "Desarrollo de software a la medida", slug: "software-medida" },
  { title: "Capacitaciones", slug: "capacitaciones" },
  { title: "Planificación estratégica", slug: "planificacion" },
  { title: "Ciberseguridad", slug: "ciberseguridad" },
  { title: "Arquitectura empresarial", slug: "arquitectura-empresarial" },
  { title: "Aplicaciones móviles", slug: "moviles" },
  { title: "Cloud services", slug: "cloud" },
  { title: "Gestión de procesos empresariales", slug: "procesos" },
];

const terminalSnippet = [
  "git checkout -b launch/primesys-enterprise",
  "pnpm install --frozen-lockfile",
  "pnpm run lint && pnpm run test",
  "docker compose up -d api dashboard postgres",
  "npx prisma migrate deploy",
  "terraform apply -var env=production",
  "kubectl rollout status deployment/primesys-web",
  "echo 'Release completed without incidents.'",
];

// Variantes de animación para stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomePage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [visibleTerminalLines, setVisibleTerminalLines] = useState(2);
  const terminalSectionRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const clientLogos = useMemo(
    () => Array.from({ length: 8 }).map((_, index) => findImage(clientsImages, index + 1)).filter(Boolean),
    []
  );

  const serviceCards = useMemo(
    () =>
      services.map((service, index) => ({
        ...service,
        image: findImage(servicesImages, index + 1),
        Icon: serviceIcons[index] || Layers,
      })),
    []
  );

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = terminalSectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const viewport = window.innerHeight;
        const start = viewport * 0.85;
        const end = -rect.height * 0.25;
        const progressRaw = (start - rect.top) / (start - end);
        const progress = Math.max(0, Math.min(1, progressRaw));
        const linesToShow = Math.max(1, Math.min(terminalSnippet.length, Math.floor(progress * terminalSnippet.length) + 1));

        setVisibleTerminalLines((prev) => (prev === linesToShow ? prev : linesToShow));
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$/;
      if (!regex.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ============ VALIDACIONES Y SANITIZACIÓN ============
  
  // Sanitizar input - eliminar caracteres peligrosos
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input
      .replace(/[<>]/g, '') // Eliminar < y > para prevenir XSS
      .replace(/&/g, '&amp;') // Escapar &
      .replace(/"/g, '&quot;') // Escapar comillas
      .replace(/'/g, '&#x27;') // Escapar comillas simples
      .trim(); // Eliminar espacios al inicio y final
  };

  // Validar nombre - solo letras, espacios y acentos
  const validateName = (name) => {
    const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/;
    if (!nameRegex.test(name)) {
      return { valid: false, error: "Nombre inválido. Solo letras, espacios y acentos permitidos (2-50 caracteres)." };
    }
    // Verificar que no sea solo espacios
    if (name.trim().length < 2) {
      return { valid: false, error: "El nombre debe tener al menos 2 caracteres." };
    }
    return { valid: true };
  };

  // Validar email - formato estricto y dominios válidos
  const validateEmail = (email) => {
    // Formato básico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return { valid: false, error: "Formato de correo electrónico inválido." };
    }
    
    // Verificar longitud
    if (email.length > 254) {
      return { valid: false, error: "El correo es demasiado largo." };
    }
    
    // Verificar dominios temporales/desechables comunes
    const disposableDomains = [
      'tempmail.com', 'mailinator.com', 'guerrillamail.com', 
      '10minutemail.com', 'yopmail.com', 'throwawaymail.com'
    ];
    const domain = email.split('@')[1].toLowerCase();
    if (disposableDomains.includes(domain)) {
      return { valid: false, error: "Por favor usa un correo válido (no temporal)." };
    }
    
    // Verificar que no tenga caracteres sospechosos múltiples
    if ((email.match(/@/g) || []).length > 1) {
      return { valid: false, error: "Correo inválido (múltiples @)." };
    }
    
    return { valid: true };
  };

  // Validar mensaje
  const validateMessage = (message) => {
    if (!message || message.trim().length < 10) {
      return { valid: false, error: "El mensaje debe tener al menos 10 caracteres." };
    }
    if (message.length > 1000) {
      return { valid: false, error: "El mensaje es demasiado largo (máximo 1000 caracteres)." };
    }
    // Verificar patrones sospechosos
    const suspiciousPatterns = [
      /<script/i, /javascript:/i, /on\w+=/i, /data:/i,
      /SELECT\s+.*\s+FROM/i, /INSERT\s+INTO/i, /DELETE\s+FROM/i
    ];
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(message)) {
        return { valid: false, error: "El mensaje contiene caracteres no permitidos." };
      }
    }
    return { valid: true };
  };

  // Efecto confetti
  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // 1. Sanitizar inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email).toLowerCase(),
      message: sanitizeInput(formData.message)
    };

    // 2. Validaciones
    const nameValidation = validateName(sanitizedData.name);
    if (!nameValidation.valid) {
      setFormStatus(nameValidation.error);
      return;
    }

    const emailValidation = validateEmail(sanitizedData.email);
    if (!emailValidation.valid) {
      setFormStatus(emailValidation.error);
      return;
    }

    const messageValidation = validateMessage(sanitizedData.message);
    if (!messageValidation.valid) {
      setFormStatus(messageValidation.error);
      return;
    }

    // 3. Verificar credenciales EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id_here' || 
        templateId === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      setFormStatus("Error: EmailJS no está configurado.");
      console.error("EmailJS credentials missing");
      return;
    }

    setFormStatus("Enviando...");

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          message: sanitizedData.message,
          to_email: "almeidaandres@proton.me",
        },
        publicKey
      );
      
      if (result.status === 200) {
        setFormStatus("¡Mensaje enviado correctamente! Te contactaremos pronto.");
        setFormData({ name: "", email: "", message: "" });
        triggerConfetti(); // 🎊 ¡Confetti!
      } else {
        setFormStatus("Error al enviar. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus(`Error: ${error.text || "No se pudo enviar el mensaje"}`);
    }
  };

  return (
    <div className="ps-page">
      <ScrollProgress />
      <Header />

      <main>
        {/* ===== HERO SECTION CON PARALLAX Y PARTÍCULAS ===== */}
        <motion.section 
          ref={heroRef}
          className="ps-hero" 
          id="hero" 
          style={{ 
            "--hero-image": `url(${diegoImage.src || diegoImage})`,
            opacity: heroOpacity,
            scale: heroScale,
          }}
        >
          <ParticleBackground />
          <div className="ps-hero__fx ps-hero__fx--left" aria-hidden />
          <div className="ps-hero__fx ps-hero__fx--right" aria-hidden />

          <div className="ps-hero__layout">
            <motion.div
              className="ps-hero__content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants}>
                Soluciones Innovadoras para su Negocio
              </motion.h1>
              <motion.p className="ps-hero__description" variants={itemVariants}>
                Más de 25 años de experiencia mejorando la operatividad y competitividad de nuestros clientes.
              </motion.p>

              <motion.div className="ps-hero__actions" variants={itemVariants}>
                <motion.button
                  type="button"
                  className="ps-btn ps-btn--primary"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar asesoría
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button
                  type="button"
                  className="ps-btn ps-btn--ghost"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver servicios
                </motion.button>
              </motion.div>

              <motion.div className="ps-stats" variants={itemVariants}>
                <motion.article
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <strong><AnimatedCounter value={25} suffix="+" /></strong>
                  <span>Años de experiencia</span>
                </motion.article>
                <motion.article
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <strong><AnimatedCounter value={150} suffix="+" /></strong>
                  <span>Implementaciones</span>
                </motion.article>
                <motion.article
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <strong>99.9%</strong>
                  <span>Disponibilidad objetivo</span>
                </motion.article>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== TERMINAL SECTION ===== */}
        <section className="ps-code-flow" ref={terminalSectionRef}>
          <div className="ps-code-flow__sticky">
            <TextReveal>
              <div className="ps-code-flow__copy">
                <p className="ps-chip ps-chip--dark">Execution Layer</p>
                <h2>Ingeniería visible, trazable y lista para escalar.</h2>
                <p>
                  Implementamos prácticas de producto, seguridad y DevOps para que cada entrega tenga evidencia técnica
                  y continuidad operativa.
                </p>
              </div>
            </TextReveal>

            <motion.article 
              className="ps-terminal" 
              aria-label="Terminal de despliegue de ejemplo"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="ps-terminal__head">
                <div className="ps-terminal__lights" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <div className="ps-terminal__title">
                  <Terminal size={13} />
                  primesys-enterprise-shell
                </div>
              </div>
              <div className="ps-terminal__body">
                {terminalSnippet.map((line, index) => (
                  <div
                    key={line}
                    className={`ps-terminal__line ${index < visibleTerminalLines ? "is-visible" : "is-hidden"}`}
                  >
                    <span className="ps-terminal__prompt">$</span>
                    {line}
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        {/* ===== SECCIÓN MISIÓN / VISIÓN ===== */}
        <section className="ps-mision-vision" id="mision-vision">
          <div className="ps-mv-container">
            <motion.div
              className="ps-mv-card"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
            >
              <h3>Misión</h3>
              <div className="ps-mv-line" />
              <p>
                Ofrecer soluciones tecnológicas innovadoras y personalizadas para satisfacer 
                las necesidades específicas de nuestros clientes, con un enfoque en la calidad 
                del servicio y la atención al cliente.
              </p>
            </motion.div>

            <motion.div
              className="ps-mv-card"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
            >
              <h3>Visión</h3>
              <div className="ps-mv-line" />
              <p>
                Ser líderes en el mercado de servicios computacionales, reconocidos por nuestra 
                excelencia en la calidad del servicio, la innovación tecnológica y la satisfacción 
                del cliente. Queremos ser la empresa a la que acuden los clientes para obtener 
                soluciones tecnológicas confiables y eficientes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CLIENTS SECTION ===== */}
        <section className="ps-clients" id="clients">
          <TextReveal>
            <div className="ps-section-head ps-section-head--compact">
              <h2>Empresas que han trabajado con Primesys</h2>
            </div>
          </TextReveal>

          <div className="ps-marquee">
            <div className="ps-marquee__track">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div className="ps-client-logo" key={`client-${index}`}>
                  <img src={logo.src || logo} alt={`Cliente Primesys ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES SECTION CON CARDS 3D ===== */}
        <section className="ps-services" id="services">
          <TextReveal>
            <div className="ps-section-head">
              <h2>Nuestros Servicios</h2>
              <p>Soluciones que combinan estrategia, diseño y tecnología para impulsar su negocio.</p>
            </div>
          </TextReveal>

          <motion.div 
            className="ps-services__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {serviceCards.map(({ title, slug, image, Icon }, index) => (
              <motion.article
                key={slug}
                className="ps-service-card"
                style={{ "--service-image": image ? `url(${image.src || image})` : "none" }}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="ps-service-card__top">
                  <motion.div 
                    className="ps-service-card__icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{title}</h3>
                <Link href={`/${slug}`} className="ps-service-card__link">
                  Explorar
                  <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section className="ps-contact" id="contact">
          <div className="ps-contact__orb ps-contact__orb--one" aria-hidden />
          <div className="ps-contact__orb ps-contact__orb--two" aria-hidden />

          <div className="ps-contact__grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="ps-chip">Contacto estratégico</p>
              <h2>Conversemos sobre tu próximo sistema, dashboard o arquitectura digital.</h2>
              <p>
                Cuéntanos qué estás construyendo y te proponemos un enfoque técnico claro, con alcance, stack sugerido
                y una ruta realista de implementación.
              </p>

              <div className="ps-contact__points">
                <div>
                  <BadgeCheck size={16} />
                  Respuesta inicial en menos de 24 horas hábiles
                </div>
                <div>
                  <BadgeCheck size={16} />
                  Enfoque de producto, seguridad y escalabilidad
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="ps-contact__form"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ps-form-field">
                <label htmlFor="name">
                  Nombre <span className="ps-required">*</span>
                  <small className="ps-char-count">{formData.name.length}/50</small>
                </label>
                <input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  maxLength={50}
                  placeholder="Tu nombre completo"
                  pattern="[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s'-]+"
                  title="Solo letras, espacios y acentos permitidos"
                />
              </div>

              <div className="ps-form-field">
                <label htmlFor="email">
                  Correo electrónico <span className="ps-required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  maxLength={254}
                  placeholder="tu@email.com"
                  autoComplete="email"
                />
              </div>

              <div className="ps-form-field">
                <label htmlFor="message">
                  Mensaje <span className="ps-required">*</span>
                  <small className="ps-char-count">{formData.message.length}/1000</small>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  maxLength={1000}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <motion.button 
                type="submit" 
                className="ps-btn ps-btn--primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === "Enviando..."}
              >
                {formStatus === "Enviando..." ? "Enviando..." : "Enviar mensaje"}
                <ArrowRight size={16} />
              </motion.button>

              {formStatus ? (
                <p className={`ps-contact__status ${formStatus.includes("correctamente") ? "ok" : formStatus.includes("Enviando") ? "sending" : "error"}`}>
                  {formStatus}
                </p>
              ) : null}
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
