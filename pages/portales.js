import Portales from "../src/components/portales";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function PortalesPage() {
  const schema = createServiceSchema({
    name: "Diseño de Portales Web",
    description: "Creación de portales web estructurados que centralizan servicios, información y contenido. Mejoramos la experiencia de usuario, fortalecemos tu presencia digital y facilitamos el acceso a recursos clave.",
    url: "/portales",
    image: "/servicios/1.jpg",
  });

  return (
    <>
      <SEO
        title="Diseño de Portales Web - Desarrollo Profesional"
        description="Diseñamos portales web funcionales y atractivos que potencian tu presencia digital. Funcionalidades a medida, integración de sistemas, escalabilidad y excelente experiencia de usuario. Soluciones listas para crecer."
        keywords="diseño portales web, desarrollo web, portales corporativos, páginas web Ecuador, diseño web profesional, UX/UI, portales empresariales, web development, sitios web Ecuador, presencia digital"
        schema={schema}
      />
      <Portales />
    </>
  );
}
