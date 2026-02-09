import Header from "./Header";
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
              Te ayudamos a crear portales web estructurados que centralizan tus servicios, información y contenido. Nuestro objetivo es mejorar la experiencia de tus usuarios, fortalecer tu presencia digital y facilitar el acceso a los recursos clave de tu empresa.            
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

    </div>
    <Footer />
     </div>
  );
}