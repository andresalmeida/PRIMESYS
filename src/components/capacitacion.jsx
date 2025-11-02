import Header from "./Header";
import "../Styles/servicios.css"; 
import imagen3 from '../servicios/3.jpg';
import Footer from "./Footer";
export default function Capacitacion() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Capacitaciones</h1>
        <div className="intro-grid">
          <img
            src={imagen3}
            alt="Imagen del servicio"
            className="service-image"
          />
          <section className="description seccion-intro">
            <p>
              Te ofrecemos programas de formación diseñados para fortalecer tus habilidades tecnológicas y las de tu equipo de trabajo. Con nuestras capacitaciones podrás dominar herramientas informáticas, aplicaciones empresariales y soluciones digitales que impulsen el crecimiento y la eficiencia de tu organización.           
           </p>
          </section>
        </div>

        <section className="description seccion-servicios">
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

      </div>
      <Footer />
    </div>
  );
}
