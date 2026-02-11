import Procesos from "../src/components/procesos";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function ProcesosPage() {
  const schema = createServiceSchema({
    name: "Gestión de Procesos Empresariales",
    description: "Análisis, diseño, implementación y optimización de procesos mediante metodologías BPM. Fortalecimiento de eficiencia operativa y alineación entre recursos, estrategias y objetivos.",
    url: "/procesos",
    image: "/servicios/9.jpg",
  });

  return (
    <>
      <SEO
        title="Gestión de Procesos Empresariales - BPM"
        description="Estructura, mejora y automatiza los procesos clave de tu organización con nuestra metodología BPM. Identificación de ineficiencias, automatización de flujos y acompañamiento continuo para mayor productividad."
        keywords="gestión procesos empresariales, BPM, business process management, automatización procesos, mejora continua, eficiencia operativa, optimización procesos, BPM Ecuador, procesos negocio"
        schema={schema}
      />
      <Procesos />
    </>
  );
}
