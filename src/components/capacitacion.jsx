import "../Styles/servicios.css"; 
import imagen3 from '../servicios/3.jpg';

export default function Capacitaciones() {
  return (
    <div className="container">
      <h1>Capacitaciones en Software</h1>

      <div className="intro-grid">
        <img
          src={imagen3} 
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
            <p>
                Las capacitaciones en software son programas de formación diseñados para fortalecer las habilidades tecnológicas de los usuarios y equipos de trabajo. Permiten dominar herramientas informáticas, aplicaciones empresariales y soluciones digitales.
            </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Con nuestras Capacitaciones en Software impulsamos el crecimiento de tu empresa a través de formación personalizada:
        </p>
        <ul>
            <li>Entrenamiento práctico, cursos enfocados en el uso real de herramientas y aplicaciones.</li>
            <li>Productividad al máximo, optimizamos el trabajo diario reduciendo errores y tiempos.</li>
            <li>Formación personalizada, programas adaptados al nivel y necesidades de tu equipo.</li>
            <li>Actualización constante, capacitaciones en tecnologías emergentes y últimas tendencias.</li>
        </ul>
      </section>

      {/* Si usas React Router */}
      <a href="/#services" className="back-link">
        ← Volver a Servicios
      </a>
    </div>
  );
}