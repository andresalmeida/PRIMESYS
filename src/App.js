import Footer from "./components/Footer";
import React, { useState } from "react";
import "./App.css";
import { Button } from "@nextui-org/button";
import emailjs from "emailjs-com";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import logo from "./logo/logo.svg";
import Header from "./components/Header";
import diegoImage from "./diego/diego.jpg";

// 🚦 Router (usa HashRouter para que funcione en cualquier subruta)
import { HashRouter, Routes, Route, Link } from "react-router-dom";

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
            <Button className="button" style={{ backgroundColor: '#212840', color: '#F0E7D5', border: 'none' }} onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
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
                    alt={`Cliente ${index + 1}`}
                    key={index}
                    className="client-logo"
                  />
                ))}
                {Array.from({ length: 9 }).map((_, index) => (
                  <img
                    src={findImage(clientsImages, index + 1)}
                    alt={`Cliente ${index + 1}`}
                    key={index + 8}
                    className="client-logo"
                  />
                ))}
              </div>
            </div>
            <Button className="button" style={{ backgroundColor: '#212840', color: '#F0E7D5', border: 'none', marginTop: '2em' }}>
              Ver todos
            </Button>
          </section>

        {/* Contacto - compacto y visualmente limpio */}
        <section id="contact" style={{ background: 'linear-gradient(135deg, #212840, #203a43, #2c5364)', color: '#F0E7D5', padding: '2em 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#F0E7D5', fontSize: '2rem', marginBottom: '0.2em', letterSpacing: '0.5px' }}>Contáctenos</h2>
          <form onSubmit={handleSubmit} style={{
            background: 'rgba(240,231,213,0.10)',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(33,40,64,0.10)',
            padding: '1.2em 1em',
            maxWidth: 600,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7em',
            alignItems: 'center',
          }}>
            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleInputChange} required style={{
              width: '100%',
              padding: '0.5em 0.8em',
              borderRadius: '6px',
              border: '1px solid #F0E7D5',
              background: '#fff',
              color: '#212840',
              fontSize: '1em',
              outline: 'none',
              boxShadow: '0 1px 4px rgba(33,40,64,0.03)'
            }} />
            <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} required style={{
              width: '100%',
              padding: '0.5em 0.8em',
              borderRadius: '6px',
              border: '1px solid #F0E7D5',
              background: '#fff',
              color: '#212840',
              fontSize: '1em',
              outline: 'none',
              boxShadow: '0 1px 4px rgba(33,40,64,0.03)'
            }} />
            <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleInputChange} required rows={3} style={{
              width: '100%',
              padding: '0.5em 0.8em',
              borderRadius: '6px',
              border: '1px solid #F0E7D5',
              background: '#fff',
              color: '#212840',
              fontSize: '1em',
              outline: 'none',
              resize: 'vertical',
              boxShadow: '0 1px 4px rgba(33,40,64,0.03)'
            }} />
            <Button type="submit" style={{
              background: 'linear-gradient(90deg, #212840 60%, #203a43 100%)',
              color: '#F0E7D5',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5em 1.5em',
              fontWeight: 600,
              fontSize: '1em',
              boxShadow: '0 1px 4px rgba(33,40,64,0.07)',
              transition: 'background 0.2s, color 0.2s',
            }}>Enviar</Button>
            {formStatus && <p className="form-status" style={{ color: formStatus.includes('correctamente') ? '#2ecc71' : '#e74c3c', marginTop: '0.3em', fontWeight: 500, fontSize: '0.98em' }}>{formStatus}</p>}
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
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arquitectura-empresarial" element={<ArquitecturaEmpresarial />} />
        <Route path="/moviles" element={<AplicacionesMoviles />} />
        <Route path="/capacitaciones" element={<Capacitacion />} />
        <Route path="/ciberseguridad" element={<Ciberseguridad />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="software-medida" element={<Software />} />
        <Route path="portales" element={<Portales />} />
        <Route path="procesos" element={<Procesos />} />
        <Route path="planificacion" element={<Planificacion />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

// SEGUNDA VERSION SOLO FORMULARIO

// import React, { useState } from "react";
// import "./App.css";
// import { Button } from "@nextui-org/button";
// import emailjs from "emailjs-com";
// import logo from "./logo/primesys_logo.png";
// import letras from "./logo/primesys_letras.svg";
// import diegoImage from "./diego/diego.jpg";

// // Cargar imágenes dinámicamente desde servicios y clientes
// const servicesImages = require.context("./servicios", false, /\.(png|jpe?g|JPG|PNG)$/);
// const clientsImages = require.context("./clientes", false, /\.(png|jpe?g|JPG|PNG)$/);

// function App() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [formStatus, setFormStatus] = useState("");

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validación básica del correo electrónico
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setFormStatus("Correo electrónico inválido");
//       return;
//     }

//     // Enviar correo con EmailJS
//     emailjs
//       .send(
//         "service_xxx", // Reemplaza con tu Service ID
//         "template_xxx", // Reemplaza con tu Template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//           to_email: "almeidaandres@proton.me",
//         },
//         "user_xxx" // Reemplaza con tu Public Key de EmailJS
//       )
//       .then(
//         () => {
//           setFormStatus("Mensaje enviado correctamente");
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           console.error("Error al enviar el mensaje", error);
//           setFormStatus("Error al enviar el mensaje");
//         }
//       );
//   };

//   // Función para encontrar imágenes dinámicamente
//   const findImage = (imagesContext, index) => {
//     const keys = imagesContext.keys();
//     const image = keys.find((key) => key.includes(`${index}`));
//     return image ? imagesContext(image) : null;
//   };

//   return (
//     <div className="App">
//       <header>
//         <div className="container">
//           <div className="logo">
//             <img src={logo} alt="Primesys Logo" className="logo-icon" />
//             <img src={letras} alt="Primesys Letras" className="logo-text" />
//           </div>
//           <nav>
//             <ul className={`nav-links ${sidebarOpen ? "open" : ""}`}>
//               <li><a href="#hero" onClick={closeSidebar}>Inicio</a></li>
//               <li><a href="#mision" onClick={closeSidebar}>Sobre Nosotros</a></li>
//               <li><a href="#services" onClick={closeSidebar}>Servicios</a></li>
//               <li><a href="#clients" onClick={closeSidebar}>Clientes</a></li>
//               <li><a href="#contact" onClick={closeSidebar}>Contacto</a></li>
//               <li className="close-icon" onClick={closeSidebar}>&times;</li>
//             </ul>
//             <div className="menu-icon" onClick={toggleSidebar}>
//               &#9776;
//             </div>
//           </nav>
//         </div>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section id="hero" style={{ backgroundImage: `url(${diegoImage})` }}>
//           <h1>Soluciones Innovadoras para su Negocio</h1>
//           <p>Más de 25 años de experiencia mejorando la operatividad y competitividad de nuestros clientes</p>
//           <Button className="button" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
//             Contáctenos
//           </Button>
//         </section>

//         {/* Contact Section */}
//         <section id="contact">
//           <h2>Contáctenos</h2>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleInputChange} required />
//             </div>
//             <div>
//               <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} required />
//             </div>
//             <div>
//               <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleInputChange} required />
//             </div>
//             <Button type="submit">Enviar Mensaje</Button>
//           </form>
//           {formStatus && <p className="form-status">{formStatus}</p>}
//         </section>
//       </main>

//       <footer>
//         <p>&copy; 2024 Primesys. Todos los derechos reservados.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


