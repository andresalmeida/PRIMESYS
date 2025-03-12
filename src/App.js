import React, { useState } from "react";
import "./App.css";
import { Button } from "@nextui-org/button";
import emailjs from "emailjs-com";
import logo from "./logo/primesys_logo.png";
import letras from "./logo/primesys_letras.svg";
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
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Primesys Logo" className="logo-icon" />
            <img src={letras} alt="Primesys Letras" className="logo-text" />
          </div>
          <nav>
            <ul className={`nav-links ${sidebarOpen ? 'open' : ''}`}>
              <li><a href="#hero" onClick={closeSidebar}>Inicio</a></li>
              <li><a href="#mision" onClick={closeSidebar}>Sobre Nosotros</a></li>
              <li><a href="#services" onClick={closeSidebar}>Servicios</a></li>
              <li><a href="#clients" onClick={closeSidebar}>Clientes</a></li>
              <li><a href="#contact" onClick={closeSidebar}>Contacto</a></li>
              <li className="close-icon" onClick={closeSidebar}>&times;</li>
            </ul>
            <div className="menu-icon" onClick={toggleSidebar}>
              &#9776;
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" style={{ backgroundImage: `url(${diegoImage})` }}>
          <h1>Soluciones Innovadoras para su Negocio</h1>
          <p>
            Más de 25 años de experiencia mejorando la operatividad y
            competitividad de nuestros clientes
          </p>
          {/* <Button className="button">
            Contáctenos
          </Button> */}
           <Button className="button" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
             Contáctenos
           </Button>
        </section>

        <section id="mision">
          <div className="mision-vision-container">
            <div className="mision">
              <h2>Misión</h2>
              <p>
                Ofrecer soluciones tecnológicas innovadoras y personalizadas
                para satisfacer las necesidades específicas de nuestros clientes,
                con un enfoque en la calidad del servicio y la atención al cliente.
              </p>
            </div>
            <div className="vision">
              <h2>Visión</h2>
              <p>
                Ser líderes en el mercado de servicios computacionales, reconocidos
                por nuestra excelencia en la calidad del servicio, la innovación tecnológica
                y la satisfacción del cliente. Queremos ser la empresa a la que acuden los
                clientes para obtener soluciones tecnológicas confiables y eficientes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
          <section id="services">
          <h2>Nuestros Servicios</h2>
          <div className="grid">
            {[
              "Diseño de portales web",
              "Desarrollo de Software a la Medida",
              "Capacitaciones",
              "Planificación Estratégica",
              "Ciberseguridad",
              "Arquitectura Empresarial",
              "Desarrollo de Aplicaciones Móviles",
              "Cloud Services",
              "Gestión de Procesos Empresariales"
            ].map((service, index) => (
              <div
                key={index}
                className="card"
                style={{
                  backgroundImage: `url(${findImage(servicesImages, index + 1)})`
                }}
              >
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients">
            <h2>Clientes</h2>
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
          </section>

        {/* Contact Section
        <section id="contact">
          <h2>Contáctenos</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">Enviar Mensaje</Button>
          </form>
        </section>
      </main> */}

         {/* Contact Section */}
         <section id="contact">
           <h2>Contáctenos</h2>
           <form onSubmit={handleSubmit}>
             <div>
               <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleInputChange} required />
             </div>
             <div>
               <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} required />
             </div>
             <div>
               <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleInputChange} required />
             </div>
             <Button type="submit">Enviar Mensaje</Button>
           </form>
           {formStatus && <p className="form-status">{formStatus}</p>}
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


