import Header from "./Header";
import "../Styles/servicios.css"; 
import imagen5 from '../servicios/5.jpg';
import Footer from "./Footer";
export default function Ciberseguridad() {
  return (
    <div>
      <Header />
   
    <div className="container">
  
      <h1>Servicios Integrales de Ciberseguridad</h1>

      <div className="intro-grid">
        <img
          src={imagen5} 
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
            <p>
              Te ofrecemos soluciones integrales de ciberseguridad basadas en prácticas, tecnologías y procesos que protegen tus sistemas, redes, dispositivos y datos contra ataques digitales, accesos no autorizados, robos de información y posibles daños.
            </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Gestionamos la identificación, análisis y evaluación de riesgos de ciberseguridad con un marco
            de trabajo AVRACIBER que incluye el impacto económico en la gestión de riesgos:
        </p>
        <ul>
            <li>Identificación y análisis de activos, vulnerabilidades y amenazas.</li>
            <li>Matriz de riesgo en dimensiones de seguridad, incluyendo el impacto económico.</li>
        </ul>
      </section>

      {/* Si usas React Router */}
      <a href="/#services" className="back-link">
        ← Volver a Servicios
      </a>
    </div>
    <Footer />
     </div>
  );
}