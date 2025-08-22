import "../Styles/servicios.css"; 
import imagen8 from '../servicios/8.jpg';
import Header from "./Header";
import Footer from "./Footer";
export default function Cloud() {
  return (
        <div>
          <Header />

    <div className="container">
      <h1>Cloud Services</h1>

      <div className="intro-grid">
        <img
          src={imagen8} 
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
            <p>
                Es el uso de recursos informáticos (servidores, almacenamiento, redes y software) a través de Internet bajo
                demanda. Sirve para que empresas y usuarios accedan a infraestructura y aplicaciones sin necesidad de
                instalarlas o mantenerlas localmente.
            </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Con nuestros Cloud Services transformamos la forma en que tu negocio utiliza la tecnología:
        </p>
        
        <ul>
            <li>Infraestructura flexible, almacenamiento y servidores en la nube que se adaptan al crecimiento de tu empresa.</li>
            <li>Optimización de costos, paga solo por lo que usas y reduce gastos en infraestructura física.</li>
            <li>Acceso remoto, disponibilidad de tus aplicaciones y datos desde cualquier lugar y dispositivo.</li>
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