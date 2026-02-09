import imagen6 from '../servicios/6.jpg';
import Header from "./Header";
import Footer from "./Footer";
export default function ArquitecturaEmpresarial() {
  return (
    <div>
  <Header />

      <div className="container">
        <h1>Arquitectura Empresarial</h1>

      <div className="intro-grid">
        <img
          src={imagen6}
          alt="Capas de Arquitectura Empresarial"
          className="service-image"
        />

        <section className="description seccion-intro">
          <p>
            Te ayudamos a implementar un enfoque estratégico para planificar, diseñar y gestionar la infraestructura tecnológica de tu organización. Con nuestra asesoría, alineas tu estrategia de negocio con las plataformas tecnológicas, modelos de datos, aplicaciones y procesos, garantizando eficiencia y coherencia en cada nivel de tu empresa.
          </p>
        </section>
      </div>

      <section className="description seccion-servicios" >
        <h2>Servicios</h2>
        <p>
          Con nuestra solución de Arquitectura Empresarial te ayudamos a transformar tu
          organización con un enfoque estratégico que conecta la tecnología con el negocio:
        </p>
        <ul>
          <li>Sincronización de los objetivos empresariales con la infraestructura tecnológica.</li>
          <li>Conexión de sistemas, aplicaciones y datos para mejorar la productividad.</li>
          <li>Impulsamos la modernización de tu empresa para que se mantenga competitiva.</li>
        </ul>
      </section>

    </div>
    <Footer />
       </div>
  );
}
