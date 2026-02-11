import Ciberseguridad from "../src/components/ciberseguridad";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function CiberseguridadPage() {
  const schema = createServiceSchema({
    name: "Servicios Integrales de Ciberseguridad",
    description: "Soluciones integrales de ciberseguridad basadas en prácticas, tecnologías y procesos que protegen tus sistemas, redes, dispositivos y datos contra ataques digitales y accesos no autorizados.",
    url: "/ciberseguridad",
    image: "/servicios/5.jpg",
  });

  return (
    <>
      <SEO
        title="Ciberseguridad - Servicios de Protección Digital"
        description="Protege tu empresa con nuestras soluciones integrales de ciberseguridad. Identificación y análisis de riesgos, evaluación de vulnerabilidades y protección contra ataques digitales. Marco de trabajo AVRACIBER con análisis de impacto económico."
        keywords="ciberseguridad, seguridad informática, protección datos, análisis vulnerabilidades, gestión riesgos, AVRACIBER, ciberataques, Ecuador, Quito, seguridad TI, protección empresarial, ciberseguridad Ecuador"
        schema={schema}
      />
      <Ciberseguridad />
    </>
  );
}
