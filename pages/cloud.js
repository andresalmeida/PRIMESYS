import Cloud from "../src/components/cloud";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function CloudPage() {
  const schema = createServiceSchema({
    name: "Cloud Services",
    description: "Servicios en la nube que permiten acceder a servidores, almacenamiento, redes y software a través de Internet bajo demanda. Optimiza recursos y reduce costos operativos.",
    url: "/cloud",
    image: "/servicios/8.jpg",
  });

  return (
    <>
      <SEO
        title="Cloud Services - Servicios en la Nube"
        description="Transforma tu negocio con nuestros Cloud Services. Infraestructura flexible, almacenamiento en la nube, acceso remoto y optimización de costos. Paga solo por lo que usas y reduce gastos en infraestructura física."
        keywords="cloud services, servicios nube, cloud computing, AWS, Azure, infraestructura nube, almacenamiento nube, servidores cloud, computación nube Ecuador, migración nube, cloud empresarial"
        schema={schema}
      />
      <Cloud />
    </>
  );
}
