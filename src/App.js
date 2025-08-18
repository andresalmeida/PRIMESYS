import React, { useState } from "react";
import "./App.css";
import { Button } from "@nextui-org/button";
import emailjs from "emailjs-com";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from "./logo/logo.svg";
import diegoImage from "./diego/diego.jpg"; 

// Cargar imágenes dinámicamente desde servicios y clientes
const servicesImages = require.context("./servicios", false, /\.(png|jpe?g|JPG|PNG)$/);
const clientsImages = require.context("./clientes", false, /\.(png|jpe?g|JPG|PNG)$/);

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


function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]*$/;
      if (!regex.test(value)) return; // Evita caracteres no válidos
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus("Correo electrónico inválido");
      return;
    }

    // Enviar correo con EmailJS
    emailjs
      .send(
        // "gmail_primesys", // Reemplaza con tu Service ID
        // "template-primesys", // Reemplaza con tu Template ID
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "almeidaandres@proton.me",
        },
        // "sgB5PNd1fRF-vA3V-" // Reemplaza con tu Public Key de EmailJS
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

  // Función para buscar imágenes dinámicamente por índice
  const findImage = (imagesContext, index) => {
    const keys = imagesContext.keys();
    const image = keys.find((key) => key.includes(`${index}`));
    if (image) {
      return imagesContext(image);
    } else {
      console.error(`No se encontró imagen para el índice: ${index}`);
      return null; // Evitar errores si no se encuentra una imagen
    }
  };

  return (
    <div className="App">
      <header style={{ boxShadow: '0 4px 16px rgba(33,40,64,0.15)', background: 'linear-gradient(to right,  #212840, #203a43,#2c5364 )', color: '#F0E7D5', padding: '1vh 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', marginLeft: '2vw' }}>
            <img src={logo} alt="Primesys Logo" className="logo-icon" style={{ width: '200px', height: 'auto', boxShadow: '0 2px 8px rgba(33,40,64,0.10)' }} />
          </div>
          <nav style={{ width: 'auto', marginRight: '2vw', position: 'relative' }}>
            {/* Menú hamburguesa para móvil */}
            <div className="menu-icon" onClick={toggleSidebar} style={{ display: 'none', fontSize: '2.2rem', cursor: 'pointer', color: '#ffffffff' }}>
              &#9776;
            </div>
            <ul className={`nav-links ${sidebarOpen ? 'open' : ''}`} style={{
              display: sidebarOpen ? 'flex' : 'flex',
              flexDirection: sidebarOpen ? 'column' : 'row',
              justifyContent: sidebarOpen ? 'center' : 'flex-end',
              alignItems: sidebarOpen ? 'center' : 'center',
              gap: sidebarOpen ? '2em' : '1vw',
              fontWeight: '500',
              fontSize: '0.8rem',
              margin: 0,
              position: sidebarOpen ? 'fixed' : 'static',
              top: sidebarOpen ? 0 : 'auto',
              right: sidebarOpen ? 0 : 'auto',
              height: sidebarOpen ? '100%' : 'auto',
              width: sidebarOpen ? '70%' : 'auto',
              background: sidebarOpen ? '#212840' : 'none',
              zIndex: sidebarOpen ? 1000 : 'auto',
              transition: 'transform 0.3s ease-in-out',
              transform: sidebarOpen ? 'translateX(0)' : 'none',
            }}>
              <li><a href="#hero" onClick={closeSidebar} style={{ padding: '0.4em 0.8em', borderRadius: '6px', transition: 'background 0.2s', color: '#F0E7D5', background: '#212840' }}>Inicio</a></li>
              <li><a href="#mision" onClick={closeSidebar} style={{ padding: '0.4em 0.8em', borderRadius: '6px', transition: 'background 0.2s', color: '#F0E7D5', background: '#212840' }}>Sobre Nosotros</a></li>
              <li><a href="#services" onClick={closeSidebar} style={{ padding: '0.4em 0.8em', borderRadius: '6px', transition: 'background 0.2s', color: '#F0E7D5', background: '#212840' }}>Servicios</a></li>
              <li><a href="#clients" onClick={closeSidebar} style={{ padding: '0.4em 0.8em', borderRadius: '6px', transition: 'background 0.2s', color: '#F0E7D5', background: '#212840' }}>Clientes</a></li>
              <li><a href="#contact" onClick={closeSidebar} style={{ padding: '0.4em 0.8em', borderRadius: '6px', transition: 'background 0.2s', color: '#F0E7D5', background: '#212840' }}>Contacto</a></li>
              {sidebarOpen && (
                <li className="close-icon" onClick={closeSidebar} style={{ color: '#F0E7D5', fontSize: '2.5rem', position: 'absolute', top: 20, right: 20, cursor: 'pointer' }}>&times;</li>
              )}
            </ul>
          </nav>
        </div>
        {/* Mostrar el icono hamburguesa solo en móvil */}
        <style>{`
          @media (max-width: 768px) {
            .menu-icon { display: block !important; }
            .nav-links { display: none !important; }
            .nav-links.open { display: flex !important; }
          }
        `}</style>
      </header>

      <main>
        {/* Hero Section - fondo indigo, texto cream */}
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
            Más de 25 años de experiencia mejorando la operatividad y
            competitividad de nuestros clientes
          </p>
           <Button className="button" style={{ backgroundColor: '#212840', color: '#F0E7D5', border: 'none' }} onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
             Contáctenos
           </Button>
        </section>

        {/* Misión y Visión - fondo cream, texto indigo */}
        <section id="mision-vision" className="mision-vision-section">
          <div className="mision-vision-container">
            <div className="mision">
              <h2>Misión</h2>
              <p>
                Ofrecer soluciones tecnológicas innovadoras y personalizadas para satisfacer las necesidades específicas de nuestros clientes, con un enfoque en la calidad del servicio y la atención al cliente.
              </p>
            </div>
            <div className="vision">
              <h2>Visión</h2>
              <p>
                Ser líderes en el mercado de servicios computacionales, reconocidos por nuestra excelencia en la calidad del servicio, la innovación tecnológica y la satisfacción del cliente. Queremos ser la empresa a la que acuden los clientes para obtener soluciones tecnológicas confiables y eficientes.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios - fondo indigo, texto cream */}
        <section id="services" className="services">
          <div className="services__head">
            <h2>Nuestros Servicios</h2>
            <div className="services__line"></div>
            <p>Soluciones que combinan estrategia, diseño y tecnología para impulsar tu negocio.</p>
          </div>

          <div className="services__grid">
            {[
              "Diseño de portales web",
              "Desarrollo de Software a la Medida",
              "Capacitaciones",
              "Planificación Estratégica",
              "Ciberseguridad",
              "Arquitectura Empresarial",
              "Desarrollo de Aplicaciones Móviles",
              "Cloud Services",
              "Gestión de Procesos Empresariales",
            ].map((title, i) => (
              <article
                key={i}
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
                    <button className="btn btn--ghost" type="button">Más información</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Clientes - fondo cream, texto indigo */}
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
            <Button className="button" style={{ backgroundColor: '#212840', color: '#F0E7D5', border: 'none', marginTop: '2em' }}>Ver todos</Button>
          </section>

        {/* Contacto - fondo indigo, texto cream */}
         <section id="contact" style={{ background: 'linear-gradient(to right,  #212840, #203a43, #2c5364)', color: '#F0E7D5' }}>
           <h2 style={{ color: '#F0E7D5' }}>Contáctenos</h2>
           <form onSubmit={handleSubmit}>
             <div>
               <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleInputChange} required style={{ backgroundColor: '#F0E7D5', color: '#212840', border: '1px solid #212840' }} />
             </div>
             <div>
               <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} required style={{ backgroundColor: '#F0E7D5', color: '#212840', border: '1px solid #212840' }} />
             </div>
             <div>
               <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleInputChange} required style={{ backgroundColor: '#F0E7D5', color: '#212840', border: '1px solid #212840' }} />
             </div>
             <Button type="submit" style={{ backgroundColor: '#212840', color: '#e9e9e9ff', border: 'none' }}>Enviar Mensaje</Button>
           </form>
           {formStatus && <p className="form-status" style={{ color: '#F0E7D5' }}>{formStatus}</p>}
         </section>
       </main>

      <footer>
        <p>&copy; 2025 PRIMESYS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

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


