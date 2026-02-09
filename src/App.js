import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import diegoImage from "./diego/diego.jpg";
import ArquitecturaEmpresarial from "./components/arquitecturaEmpresarial";
import AplicacionesMoviles from "./components/aplicacionesMoviles";
import Capacitacion from "./components/capacitacion";
import Ciberseguridad from "./components/ciberseguridad";
import CloudService from "./components/Cloud";
import Software from "./components/softwareMedida";
import Portales from "./components/portales";
import Procesos from "./components/procesos";
import Planificacion from "./components/planificacion";
import NuestroTrabajo from "./components/nuestroTrabajo";
import SobreNosotros from "./components/sobreNosotros";

const servicesImages = require.context("./servicios", false, /\.(png|jpe?g|JPG|PNG)$/);
const clientsImages = require.context("./clientes", false, /\.(png|jpe?g|JPG|PNG)$/);

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
  "npx cypress run --spec critical-path.cy.ts",
  "terraform apply -var env=production",
  "kubectl rollout status deployment/primesys-web",
  "curl -f https://api.primesys.ec/healthz",
  "echo 'Release completed without incidents.'",
];

function findImage(imagesContext, index) {
  const keys = imagesContext.keys();
  const image = keys.find((key) => key.includes(`${index}`));
  if (!image) {
    return null;
  }
  return imagesContext(image);
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname, location.state]);

  return null;
}

function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [visibleTerminalLines, setVisibleTerminalLines] = useState(2);
  const location = useLocation();
  const navigate = useNavigate();
  const terminalSectionRef = useRef(null);

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$/;
      if (!regex.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("Correo electrónico inválido");
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "almeidaandres@proton.me",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus("Mensaje enviado correctamente");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setFormStatus("Error al enviar el mensaje");
        }
      );
  };

  return (
    <div className="ps-page">
      <Header />

      <main>
        <section className="ps-hero" id="hero" style={{ "--hero-image": `url(${diegoImage})` }}>
          <div className="ps-hero__fx ps-hero__fx--left" aria-hidden />
          <div className="ps-hero__fx ps-hero__fx--right" aria-hidden />

          <div className="ps-hero__layout">
            <motion.div
              className="ps-hero__content"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <h1>Soluciones Innovadoras para su Negocio</h1>
              <p className="ps-hero__description">
                Más de 25 años de experiencia mejorando la operatividad y competitividad de nuestros clientes.
              </p>

              <div className="ps-hero__actions">
                <button
                  type="button"
                  className="ps-btn ps-btn--primary"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Solicitar asesoría
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  className="ps-btn ps-btn--ghost"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver servicios
                </button>
              </div>

              <div className="ps-stats">
                <article>
                  <strong>25+</strong>
                  <span>Años de experiencia</span>
                </article>
                <article>
                  <strong>150+</strong>
                  <span>Implementaciones</span>
                </article>
                <article>
                  <strong>99.9%</strong>
                  <span>Disponibilidad objetivo</span>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ps-code-flow" ref={terminalSectionRef}>
          <div className="ps-code-flow__sticky">
            <div className="ps-code-flow__copy">
              <p className="ps-chip ps-chip--dark">Execution Layer</p>
              <h2>Ingeniería visible, trazable y lista para escalar.</h2>
              <p>
                Implementamos prácticas de producto, seguridad y DevOps para que cada entrega tenga evidencia
                técnica y continuidad operativa.
              </p>
            </div>

            <article className="ps-terminal" aria-label="Terminal de despliegue de ejemplo">
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
            </article>
          </div>
        </section>

        <section className="ps-clients" id="clients">
          <div className="ps-section-head ps-section-head--compact">
            <h2>Empresas que han trabajado con Primesys</h2>
          </div>

          <div className="ps-marquee">
            <div className="ps-marquee__track">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div className="ps-client-logo" key={`client-${index}`}>
                  <img src={logo} alt={`Cliente Primesys ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ps-services" id="services">
          <div className="ps-section-head">
            <h2>Nuestros Servicios</h2>
            <p>
              Soluciones que combinan estrategia, diseño y tecnología para impulsar su negocio.
            </p>
          </div>

          <div className="ps-services__grid">
            {serviceCards.map(({ title, slug, image, Icon }, index) => (
              <motion.article
                key={slug}
                className="ps-service-card"
                style={{ "--service-image": image ? `url(${image})` : "none" }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="ps-service-card__top">
                  <div className="ps-service-card__icon">
                    <Icon size={18} />
                  </div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{title}</h3>
                <Link to={`/${slug}`} className="ps-service-card__link">
                  Explorar
                  <ArrowRight size={14} />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="ps-contact" id="contact">
          <div className="ps-contact__orb ps-contact__orb--one" aria-hidden />
          <div className="ps-contact__orb ps-contact__orb--two" aria-hidden />

          <div className="ps-contact__grid">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <p className="ps-chip">Contacto estratégico</p>
              <h2>Conversemos sobre tu próximo sistema, dashboard o arquitectura digital.</h2>
              <p>
                Cuéntanos qué estás construyendo y te proponemos un enfoque técnico claro, con alcance, stack
                sugerido y una ruta realista de implementación.
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
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" value={formData.name} onChange={handleInputChange} required />

              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="ps-btn ps-btn--primary">
                Enviar mensaje
                <ArrowRight size={16} />
              </button>

              {formStatus ? (
                <p className={`ps-contact__status ${formStatus.includes("correctamente") ? "ok" : "error"}`}>
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

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arquitectura-empresarial" element={<ArquitecturaEmpresarial />} />
        <Route path="/moviles" element={<AplicacionesMoviles />} />
        <Route path="/capacitaciones" element={<Capacitacion />} />
        <Route path="/ciberseguridad" element={<Ciberseguridad />} />
        <Route path="/cloud" element={<CloudService />} />
        <Route path="/software-medida" element={<Software />} />
        <Route path="/portales" element={<Portales />} />
        <Route path="/procesos" element={<Procesos />} />
        <Route path="/planificacion" element={<Planificacion />} />
        <Route path="/nuestro-trabajo" element={<NuestroTrabajo />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
