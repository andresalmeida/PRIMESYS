import ArquitecturaEmpresarial from "../src/components/arquitecturaEmpresarial";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function ArquitecturaEmpresarialPage() {
  const schema = createServiceSchema({
    name: "Arquitectura Empresarial",
    description: "Enfoque estratégico para planificar, diseñar y gestionar infraestructura tecnológica. Alineación de estrategia de negocio con plataformas tecnológicas, modelos de datos, aplicaciones y procesos.",
    url: "/arquitectura-empresarial",
    image: "/servicios/6.jpg",
  });

  return (
    <>
      <SEO
        title="Arquitectura Empresarial - Transformación Digital"
        description="Conecta tu tecnología con tu negocio mediante nuestra arquitectura empresarial. Sincronización de objetivos empresariales, integración de sistemas y modernización para mantenerte competitivo."
        keywords="arquitectura empresarial, enterprise architecture, TOGAF, transformación digital, infraestructura TI, alineación negocio TI, modelos datos, integración sistemas, arquitectura tecnológica Ecuador"
        schema={schema}
      />
      <ArquitecturaEmpresarial />
    </>
  );
}
