import "../Styles/servicios.css"; 
import imagen2 from '../servicios/2.jpg';
import Header from "./Header";
import Footer from "./Footer";
export default function Software() {
  return (
    <div>
<Header />
   
    <div className="container">
      
      <h1>Desarrollo de Software a la Medida</h1>

      <div className="intro-grid">
        <img
          src={imagen2} 
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
            <p>
                El desarrollo de software a la medida consiste en crear soluciones digitales personalizadas que responden a necesidades
                específicas de una empresa u organización. Este enfoque se adapta totalmente a los procesos internos del cliente,
                optimizando su funcionamiento y productividad.
            </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Con nuestro servicio de Desarrollo de Software a la Medida impulsamos la transformación digital de tu empresa con soluciones únicas:
        </p>
        
        <ul>
            <li>Soluciones personalizadas, software diseñado específicamente para los objetivos de tu negocio.</li>
            <li>Automatización de procesos, eliminamos tareas repetitivas y reducimos errores operativos.</li>
            <li>Escalabilidad garantizada, sistemas preparados para crecer junto con tu empresa.</li>
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