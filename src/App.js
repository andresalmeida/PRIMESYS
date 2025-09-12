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

          {/* Misión y Visión */}
          <section id="mision-vision" className="mision-vision-section">
            <div className="mision-vision-container">
              <div className="mision">
                <h2>Misión</h2>
                <p>Ofrecer soluciones tecnológicas innovadoras y personalizadas para satisfacer las necesidades específicas de nuestros clientes, con un enfoque en la calidad del servicio y la atención al cliente.</p>
              </div>
              <div className="vision">
                <h2>Visión</h2>
                <p>Ser líderes en el mercado de servicios computacionales, reconocidos por nuestra excelencia en la calidad del servicio, la innovación tecnológica y la satisfacción del cliente. Queremos ser la empresa a la que acuden los clientes para obtener soluciones tecnológicas confiables y eficientes.</p>
              </div>
            </div>
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

        {/* Contacto - diseño mejorado y armónico */}
        <section id="contact" style={{ 
          background: 'linear-gradient(135deg, #212840, #203a43, #2c5364)', 
          color: '#F0E7D5', 
          padding: '4em 0', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Elementos decorativos */}
          <div style={{
            position: 'absolute',
            top: '-150px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(62, 128, 254, 0.1) 0%, rgba(39, 103, 213, 0) 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-50px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(111, 66, 193, 0.1) 0%, rgba(111, 66, 193, 0) 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          
          <h2 style={{ 
            color: '#FFFFFF', 
            fontSize: '3rem', 
            marginBottom: '1.5em', 
            letterSpacing: '1px', 
            textAlign: 'center',
            fontWeight: '700',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            position: 'relative',
            zIndex: 2
          }}>
            Contáctenos
          </h2>
            
          <form onSubmit={handleSubmit} style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '40px',
            maxWidth: '650px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5em',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            margin: '0 auto',
            zIndex: 2
          }}>
            {/* Borde decorativo */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '5px',
              background: 'linear-gradient(to right, #3e80fe, #6f42c1)'
            }}></div>
              
              <input 
                type="text" 
                name="name" 
                placeholder="Nombre" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '1.1em',
                  fontWeight: '400',
                  outline: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                }}
                className="form-input"
              />
            <input 
                type="email" 
                name="email" 
                placeholder="Correo electrónico" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '1.1em',
                  fontWeight: '400',
                  outline: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                }}
                className="form-input"
              />
              
              <textarea 
                name="message" 
                placeholder="Mensaje" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
                rows={4} 
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '1.1em',
                  fontWeight: '400',
                  outline: 'none',
                  resize: 'vertical',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  minHeight: '120px'
                }}
                className="form-input"
              />
              
              <Button type="submit" style={{
                background: 'linear-gradient(135deg, #3e80fe, #6f42c1)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '15px 40px',
                fontWeight: '600',
                fontSize: '1.1em',
                boxShadow: '0 8px 20px rgba(62, 128, 254, 0.25)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                marginTop: '15px',
                letterSpacing: '0.5px'
              }}>Enviar</Button>
              
              {formStatus && <p className="form-status" style={{ 
                color: formStatus.includes('correctamente') ? '#8cffbe' : '#ff9c9c', 
                marginTop: '1em', 
                fontWeight: 500, 
                fontSize: '1.1em',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
              }}>{formStatus}</p>}
            </form>
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