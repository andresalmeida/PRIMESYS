import Planificacion from "../src/components/planificacion";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function PlanificacionPage() {
  const schema = createServiceSchema({
    name: "Planificación Estratégica",
    description: "Proceso de planificación estratégica orientado al crecimiento y mejora continua. Definición de acciones para cumplir misión, visión y objetivos institucionales.",
    url: "/planificacion",
    image: "/servicios/4.jpg",
  });

  return (
    <>
      <SEO
        title="Planificación Estratégica - Consultoría Empresarial"
        description="Impulsa el crecimiento de tu empresa con nuestra planificación estratégica. Metas medibles, análisis de entorno, identificación de oportunidades y transformación organizacional alineada con tu visión."
        keywords="planificación estratégica, consultoría empresarial, estrategia negocio, crecimiento empresarial, análisis estratégico, transformación organizacional, consultoría Ecuador, planificación empresarial"
        schema={schema}
      />
      <Planificacion />
    </>
  );
}
