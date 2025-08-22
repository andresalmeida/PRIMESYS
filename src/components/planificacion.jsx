import "../Styles/servicios.css"; 
import imagen4 from '../servicios/4.jpg';

export default function Planificacion() {
  return (
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
                La planificación estratégica es un proceso realizado por los altos dirigentes de una empresa para el crecimiento y mejora continua de la misma, y ayuda especificar las acciones que debe realizar la organización para lograr cumplir con la misión y visión de la empresa.
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

      {/* Si usas React Router */}
      <a href="/#services" className="back-link">
        ← Volver a Servicios
      </a>
    </div>
  );
}