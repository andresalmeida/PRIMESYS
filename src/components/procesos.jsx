import "../Styles/servicios.css"; 
import imagen9 from '../servicios/9.jpg';

export default function Procesos() {
  return (
    <div className="container">
      <h1>Gestión de Procesos Empresariales</h1>

      <div className="intro-grid">
        <img
          src={imagen9} 
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
            <p>
                La Gestión de Procesos Empresariales (BPM – Business Process Management) es una disciplina administrativa que se enfoca en analizar, diseñar, implementar, monitorear y optimizar los procesos de una organización.           
            </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Con nuestro servicio de Gestión de Procesos Empresariales te ayudamos a estructurar, mejorar y automatizar los procesos clave de tu organización para alcanzar mayor productividad y control:        
        </p>
        
        <ul>
            <li>Identificación de cuellos de botella, ineficiencias y oportunidades de mejora.</li>
            <li>Automatización de flujos, implementación de soluciones digitales que reducen tareas repetitivas y manuales.</li>
            <li>Capacitación y acompañamiento para que la organización mantenga procesos eficientes a largo plazo.</li>
        </ul>
      </section>

      {/* Si usas React Router */}
      <a href="/#services" className="back-link">
        ← Volver a Servicios
      </a>
    </div>
  );
}