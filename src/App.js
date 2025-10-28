import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@nextui-org/button";
import emailjs from "emailjs-com";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import logo from "./logo/logo.svg";
import Header from "./components/Header";
import diegoImage from "./diego/diego.jpg";
// 🚦 Router (BrowserRouter para CPanel)
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// ✅ subpágina
import ArquitecturaEmpresarial from "./components/arquitecturaEmpresarial";
import AplicacionesMoviles from "./components/aplicacionesMoviles";
import Capacitacion from "./components/capacitacion";
import Ciberseguridad from "./components/ciberseguridad";
import Cloud from "./components/Cloud";
import Software from "./components/softwareMedida";
import Portales from "./components/portales";
import Procesos from "./components/procesos";
import Planificacion from "./components/planificacion";
import NuestroTrabajo from "./components/nuestroTrabajo";
import SobreNosotros from "./components/sobreNosotros";

// Estilos para mejorar la visibilidad de los placeholders
const placeholderStyles = `
  .form-input::placeholder {
    color: rgba(255, 255, 255, 0.8) !important;
    opacity: 1 !important;
  }
  .form-input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8) !important;
    opacity: 1 !important;
  }
  .form-input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.8) !important;
    opacity: 1 !important;
  }
  .form-input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.8) !important;
    opacity: 1 !important;
  }
`;



// Cargar imágenes dinámicamente desde servicios y clientes
const servicesImages = require.context("./servicios", false, /\.(png|jpe?g|JPG|PNG)$/);
const clientsImages = require.context("./clientes", false, /\.(png|jpe?g|JPG|PNG)$/);

// Config de servicios (título + slug para la ruta)
const services = [
  { title: "Diseño de portales web", slug: "portales" },
  { title: "Desarrollo de Software a la Medida", slug: "software-medida" },
  { title: "Capacitaciones", slug: "capacitaciones" },
  { title: "Planificación Estratégica", slug: "planificacion" },
  { title: "Ciberseguridad", slug: "ciberseguridad" },
  { title: "Arquitectura Empresarial", slug: "arquitectura-empresarial" },
  { title: "Desarrollo de Aplicaciones Móviles", slug: "moviles" },
  { title: "Cloud Services", slug: "cloud" },
  { title: "Gestión de Procesos Empresariales", slug: "procesos" },
];


// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", message: "" });
//   };


// ---------- HOME (tu página actual) ----------
function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  
  // Añadir estilos de placeholders cuando se monte el componente
  useEffect(() => {
    // Crear elemento de estilo
    const styleElement = document.createElement('style');
    styleElement.innerHTML = placeholderStyles;
    document.head.appendChild(styleElement);
    
    // Limpiar cuando se desmonte
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$/;
      if (!regex.test(value)) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        (error) => {
          console.error("Error al enviar el mensaje", error);
          setFormStatus("Error al enviar el mensaje");
        }
      );
  };

  const findImage = (imagesContext, index) => {
    const keys = imagesContext.keys();
    const image = keys.find((key) => key.includes(`${index}`));
    if (image) return imagesContext(image);
    console.error(`No se encontró imagen para el índice: ${index}`);
    return null;
  };

  // ...

  return (
    <div className="App">
      <Header />

        <main>
          {/* Hero */}
          <section
            id="hero"
            style={{
              backgroundImage: `url(${diegoImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#111',
              minHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: '#F0E7D5',
              position: 'relative'
            }}
          >
            <h1 style={{ color: '#F0E7D5' }}>Soluciones Innovadoras para su Negocio</h1>
            <p style={{ color: '#F0E7D5' }}>
              Más de 25 años de experiencia mejorando la operatividad y competitividad de nuestros clientes
            </p>
            <Button 
              className="button" 
              style={{ 
                background: 'linear-gradient(135deg, #3e80fe, #6f42c1)',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 28px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(62, 128, 254, 0.35)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '15px',
                letterSpacing: '0.5px'
              }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(62, 128, 254, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(62, 128, 254, 0.35)';
              }}
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            >
              Contáctenos
            </Button>
          </section>

          {/* Servicios */}
          <section id="services" className="services">
            <div className="services__head">
              <h2>Nuestros Servicios</h2>
              <div className="services__line"></div>
              <p>Soluciones que combinan estrategia, diseño y tecnología para impulsar tu negocio.</p>
            </div>

            <div className="services__grid">
              {services.map(({ title, slug }, i) => (
                <article
                  key={slug}
                  className="card"
                  style={{
                    "--card-bg": `url(${findImage(servicesImages, i + 1)})`,
                    "--accent": ["#A78BFA", "#60A5FA", "#34D399", "#F59E0B"][i % 4],
                  }}
                >
                  <div className="card__badge" aria-hidden>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">{title}</h3>
                    <div className="card__actions">
                      {/* 👇 Enlace a la subpágina */}
                      <Link to={`/${slug}`} className="btn btn--ghost">
                        Más información
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Clientes */}
          <section id="clients" style={{ backgroundColor: '#e9e9e9ff', color: '#212840' }}>
            <h2 style={{ color: '#212840' }}>Clientes</h2>
            <div className="clients-slider">
              <div className="slider-track">
                {Array.from({ length: 8 }).map((_, index) => (
                  <img
                    src={findImage(clientsImages, index + 1)}
                    alt={`Logo cliente ${index + 1} - Empresa colaboradora de Primesys`}
                    key={index}
                    className="client-logo"
                  />
                ))}
                {Array.from({ length: 9 }).map((_, index) => (
                  <img
                    src={findImage(clientsImages, index + 1)}
                    alt={`Logo cliente ${index + 1} - Empresa colaboradora de Primesys`}
                    key={index + 8}
                    className="client-logo"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Contacto – igual al mockup (texto izq + tarjeta con inputs claros a la der) */}
          <section
            id="contact"
            style={{
              background:
                "linear-gradient(90deg, #0b1a2d 0%, #10263a 45%, #2a4b60 100%)",
              color: "#EAF2FF",
              padding: "72px 0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* halos decorativos */}
            <div
              style={{
                position: "absolute",
                inset: "-120px auto auto -120px",
                width: 320,
                height: 320,
                background:
                  "radial-gradient(circle at 40% 40%, rgba(26,166,214,.28), transparent 65%)",
                borderRadius: "50%",
                filter: "blur(2px)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "auto -140px -140px auto",
                width: 360,
                height: 360,
                background:
                  "radial-gradient(circle at 60% 40%, rgba(111,66,193,.28), transparent 65%)",
                borderRadius: "50%",
                filter: "blur(2px)",
                zIndex: 0,
              }}
            />

            {/* contenedor 2 columnas */}
            <div
              style={{
                maxWidth: 1080,
                margin: "0 auto",
                padding: "0 24px",
                display: "grid",
                gridTemplateColumns: "1.05fr .95fr",
                gap: 36,
                alignItems: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* texto lateral */}
              <div style={{ lineHeight: 1.75 }}>
                <h2
                  style={{
                    margin: 0,
                    fontWeight: 800,
                    fontSize: "28px",
                    color: "#8fd3ff",
                  }}
                >
                  Contáctenos
                </h2>
                <p style={{ marginTop: 14, maxWidth: 560, color: "#e6eefb" }}>
                  Si desea obtener más información sobre nuestros servicios, realizar una
                  consulta o solicitar una cotización, no dude en escribirnos. Estaremos
                  encantados de ayudarle y brindarle asesoramiento personalizado.
                  <br />
                  <br />
                  También puede contactarnos directamente por correo.
                </p>
              </div>

              {/* tarjeta de formulario (glass oscuro) */}
              <form
                onSubmit={handleSubmit}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.04))",
                  border: "1px solid rgba(255,255,255,.16)",
                  boxShadow: "0 18px 48px rgba(0,0,0,.35)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: 14,
                  padding: 28,
                  width: "420px", // <-- más ancho (antes ~350px)
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    height: 46,
                    borderRadius: 10,
                    border: "1px solid rgba(9,26,47,.12)",
                    background: "rgba(210,236,232,.88)",
                    color: "#0a223a",
                    padding: "12px 16px",
                    fontSize: "1em",
                    outline: "none",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    height: 46,
                    borderRadius: 10,
                    border: "1px solid rgba(9,26,47,.12)",
                    background: "rgba(210,236,232,.88)",
                    color: "#0a223a",
                    padding: "12px 16px",
                    fontSize: "1em",
                    outline: "none",
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  style={{
                    borderRadius: 10,
                    border: "1px solid rgba(9,26,47,.12)",
                    background: "rgba(210,236,232,.88)",
                    color: "#0a223a",
                    padding: "12px 16px",
                    fontSize: "1em",
                    resize: "vertical",
                    minHeight: 120,
                    outline: "none",
                  }}
                />
                <Button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #3e80fe, #6f42c1)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    padding: "14px 0",
                    fontWeight: 700,
                    fontSize: "1em",
                    cursor: "pointer",
                    boxShadow: "0 10px 22px rgba(62,128,254,.35)",
                    transition: "transform .2s ease, filter .2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(1.08)")}
                  onMouseOut={(e) => (e.currentTarget.style.filter = "none")}
                >
                  Enviar
                </Button>

                {formStatus && (
                  <p
                    style={{
                      margin: "8px 2px 0",
                      fontSize: "14px",
                      color: formStatus.includes("correctamente") ? "#8cffbe" : "#ff9c9c",
                    }}
                  >
                    {formStatus}
                  </p>
                )}
              </form>

            </div>

            {/* estilos para placeholder (no se pueden poner inline) */}
            <style>{`
              #contact input::placeholder,
              #contact textarea::placeholder{
                color: rgba(10,34,58,.55);
              }
              @media (max-width: 980px){
                #contact > div{ grid-template-columns: 1fr; gap: 28px; }
              }
            `}</style>
          </section>

       </main>

  <Footer />
      </div>
    );
}

// ---------- APP (Router + Rutas) ----------
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arquitectura-empresarial" element={<ArquitecturaEmpresarial />} />
        <Route path="/moviles" element={<AplicacionesMoviles />} />
        <Route path="/capacitaciones" element={<Capacitacion />} />
        <Route path="/ciberseguridad" element={<Ciberseguridad />} />
        <Route path="/cloud" element={<Cloud />} />
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