import Header from "./Header";
import "../Styles/servicios.css"; 
import imagen1 from '../servicios/1.jpg';
import Footer from "./Footer";
export default function Portales() {
  return (
    <div>
      <Header />
   
    <div className="container">
      <h1>Diseño de Portales Web</h1>

      <div className="intro-grid">
        
        <img
          src={imagen1} 
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
            <p>
                El diseño de portales web consiste en la creación estructurada de sitios web que centralizan servicios, información o contenido. Sirve para mejorar la experiencia del usuario, fortalecer la presencia digital y facilitar el acceso a recursos clave.
            </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Con nuestro servicio de Diseño de Portales Web potenciamos tu presencia digital con soluciones funcionales y atractivas:
        </p>
        
        <ul>
            <li>Funcionalidades a medida, integración de sistemas, secciones dinámicas y herramientas interactivas.</li>
            <li>Escalabilidad y fácil administración, plataformas listas para crecer y gestionarse de forma sencilla.</li>
            <li>Buena experiencia de usuario, navegación intuitiva que facilita el acceso a información y servicios.</li>
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