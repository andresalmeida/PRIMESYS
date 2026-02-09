import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Atom, Code2, Database, Flame, Globe, MapPin, Server, Smartphone } from "lucide-react";
import "../Styles/servicios.css";

export default function NuestroTrabajo() {
  const dashboards = [
    {
      id: 1,
      title: "Análisis de Importaciones en Ecuador - Régimen General",
      description:
        "Dashboard interactivo que analiza las importaciones de Ecuador bajo régimen general durante el período 2024-2025. Incluye métricas de valor CIF, países de origen, productos principales, tendencias temporales y análisis comparativo sectorial.",
      embedUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiODM0YThhMWMtYTdjMC00OWU1LWFiNDctZWUyMTBiMWE3Mjc5IiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9&pageName=9853d6945e241505ddeb",
      align: "left", // iframe izquierda, texto derecha
    },
    {
      id: 2,
      title: "Government Funding for Anxiety/Depression Research",
      description:
        "Análisis académico sobre la financiación gubernamental destinada a investigación de ansiedad y depresión a nivel mundial. Visualiza la prioridad que cada país otorga a la salud mental a través de sus inversiones en I+D.",
      embedUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiOTA5MDg4N2YtNDZmMC00MzI3LWE0ZTMtM2Q0YjkyZDg1Y2QzIiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9",
      align: "right", // iframe derecha, texto izquierda
    },
  ];

  const proyectos = [
    {
      id: 1,
      title: "Sistema de Gestión Empresarial",
      desc:
        "Plataforma web para inventarios, facturación y control de clientes desarrollada a medida.",
      tech: ["React", "Node.js", "PostgreSQL"],
      icon: Globe,
    },
    {
      id: 2,
      title: "App Móvil de Servicios",
      desc:
        "Aplicación multiplataforma con geolocalización y sistema de reservas.",
      tech: ["React Native", "Firebase", "Google Maps API"],
      icon: Smartphone,
    },
  ];

  const techIcons = {
    React: Atom,
    "Node.js": Server,
    PostgreSQL: Database,
    "React Native": Smartphone,
    Firebase: Flame,
    "Google Maps API": MapPin,
  };

  return (
    <div className="nt">
      <Header />

      {/* ===== ENCABEZADO (mismo estilo de ‘Sobre Nosotros’) ===== */}
      <section className="nt-encabezado">
        <div className="nt-encabezado__inner">
          <h1>NUESTRO TRABAJO</h1>
          <p>Explora nuestros proyectos de análisis de datos y business intelligence</p>
          <div className="nt-linea" />
        </div>
      </section>

      {/* ===== SECCIÓN DASHBOARDS (sin cuadros internos) ===== */}
      <section className="nt-bi">
        <h2>Dashboards de Business Intelligence</h2>
        <div className="nt-linea nt-linea--small" />

        {dashboards.map((d) => (
          <div
            key={d.id}
            className={`nt-bi__row ${d.align === "right" ? "reverse" : ""}`}
          >
            <div className="nt-bi__frame">
              <div className="nt-aspect">
                <iframe
                  src={d.embedUrl}
                  title={d.title}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="nt-bi__copy">
              <h3>{d.title}</h3>
              <p>{d.description}</p>
              <button
                className="nt-btn"
                onClick={() => window.open(d.embedUrl, "_blank")}
              >
                Ver Dashboard
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ===== PROYECTOS DESTACADOS (sección clara, sin tarjetas extra) ===== */}
      <section className="nt-featured">
        <div className="nt-featured__inner">
          <h2>Proyectos Destacados</h2>
          <div className="nt-linea nt-linea--small nt-linea--dark" />

          <div className="nt-grid">
            {proyectos.map((p) => (
              <div className="nt-item" key={p.id}>
                <div className="nt-item__head">
                  <div className="nt-item__icon">
                    <p.icon size={22} />
                  </div>
                  <h4>{p.title}</h4>
                </div>
                <p>{p.desc}</p>
                <div className="nt-pills">
                  {p.tech.map((t) => {
                    const TechIcon = techIcons[t] || Code2;
                    return (
                      <span className="nt-pill" key={t}>
                        <TechIcon size={13} />
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL (gradiente oscuro como la sección CEO) ===== */}
      <section className="nt-cta">
        <div className="nt-cta__inner">
          <h3>¿Tienes un proyecto en mente?</h3>
          <button
            className="nt-btn"
            onClick={() => (window.location.href = "/#contact")}
          >
            Contáctanos
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
