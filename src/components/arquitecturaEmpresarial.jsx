import "../Styles/servicios.css"; 
import imagen6 from '../servicios/6.jpg';

export default function ArquitecturaEmpresarial() {
  return (
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
            La Arquitectura Empresarial es un enfoque estratégico para planificar, diseñar y
            gobernar la infraestructura tecnológica de una organización. Permite alinear la
            estrategia de negocio con las plataformas tecnológicas, modelos de datos, aplicaciones
            y procesos.
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

      {/* Si usas React Router */}
      <a href="/#services" className="back-link">
        ← Volver a Servicios
      </a>
    </div>
  );
}
