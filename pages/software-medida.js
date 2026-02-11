import SoftwareMedida from "../src/components/softwareMedida";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function SoftwareMedidaPage() {
  const schema = createServiceSchema({
    name: "Desarrollo de Software a la Medida",
    description: "Desarrollo de soluciones digitales personalizadas que responden a las necesidades específicas de tu empresa. Software adaptado a tus procesos internos para optimizar funcionamiento y aumentar productividad.",
    url: "/software-medida",
    image: "/servicios/2.jpg",
  });

  return (
    <>
      <SEO
        title="Desarrollo de Software a la Medida - Soluciones Personalizadas"
        description="Impulsa tu transformación digital con software personalizado diseñado específicamente para tu negocio. Automatización de procesos, escalabilidad garantizada y soluciones únicas que se adaptan a tus objetivos."
        keywords="desarrollo software medida, software personalizado, desarrollo aplicaciones, software empresarial, automatización procesos, desarrollo software Ecuador, programación a medida, sistemas personalizados, software Quito"
        schema={schema}
      />
      <SoftwareMedida />
    </>
  );
}
