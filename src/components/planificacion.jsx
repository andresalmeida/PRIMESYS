import Header from "./Header";
import imagen4 from '../servicios/4.jpg';
import Footer from "./Footer";
export default function Planificacion() {
  return (
    <div>
<Header />
   
    <div className="container">
      
      <h1>Planificación Estratégica</h1>

      <div className="intro-grid">
        <img
          src={imagen4} 
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
            <p>
              Te ayudamos a llevar a cabo un proceso de planificación estratégica orientado al crecimiento y la mejora continua de tu empresa. Juntos definimos las acciones necesarias para que tu organización cumpla con su misión, visión y objetivos institucionales.            
            </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Con nuestro servicio de Planificación Estratégica impulsamos el crecimiento y sostenibilidad de tu negocio:
        </p>
        
        <ul>
            <li>Establecemos metas medibles y alcanzables que guían el rumbo de la empresa.</li>
            <li>Análisis de entorno y recursos, identificamos oportunidades, riesgos y fortalezas para una mejor toma de decisiones.</li>
            <li>Transformación organizacional, aseguramos que toda la empresa esté alineada con la visión y misión corporativa.</li>
        </ul>
      </section>

    </div>
    <Footer />
     </div>
  );
}