import Header from "./Header";
import imagen9 from '../servicios/9.jpg';
import Footer from "./Footer";
export default function Procesos() {
  return (
    <div>
      <Header />
    
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
              Te ayudamos a analizar, diseñar, implementar y optimizar los procesos de tu organización mediante metodologías de Gestión de Procesos Empresariales (BPM). Con este enfoque, fortaleces la eficiencia operativa y logras una mejor alineación entre tus recursos, estrategias y objetivos institucionales.            
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

    </div>
    <Footer />
    </div>
  );
}