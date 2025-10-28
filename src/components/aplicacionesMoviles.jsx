import "../Styles/servicios.css"; 
import imagen7 from '../servicios/7.jpg';
import Footer from "./Footer";
import Header from "./Header";
export default function aplicacionesMoviles() {
  return (
    <div>
      <Header />
    
    
    <div className="container">
      
      <h1>Desarrollo de Aplicaciones Móviles</h1>

      <div className="intro-grid">
        <img
          src={imagen7}
          alt="Imagen del servicio"
          className="service-image"
        />

        <section className="description seccion-intro">
          <p>
            Te ofrecemos el desarrollo de aplicaciones móviles diseñadas para funcionar en celulares y tablets. Estas soluciones te permiten acercar tus servicios, productos e información a tus usuarios de forma rápida, cómoda y personalizada, fortaleciendo la conexión con tus clientes.
          </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
            Con nuestro servicio de Desarrollo de Aplicaciones Móviles te ayudamos a transformar ideas en soluciones digitales innovadoras que potencian tu negocio:
        </p>
        <ul>
        <li>Aplicaciones a medida diseñadas para tu empresa, adaptadas a tus objetivos y necesidades específicas.</li>
        <li>Interfaces modernas, intuitivas y fáciles de usar que aumentan la fidelización de clientes.</li>
        <li>soluciones preparadas para crecer contigo y adaptarse a nuevas funcionalidades en el futuro.</li>
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