import HomePage from "../src/components/HomePage";
import SEO, { createWebPageSchema } from "../src/components/SEO";

export default function IndexPage() {
  const schema = createWebPageSchema({
    title: "PRIMESYS - Soluciones Tecnológicas Innovadoras",
    description: "Más de 25 años de experiencia en soluciones tecnológicas innovadoras. Desarrollo de software, ciberseguridad, cloud services, aplicaciones móviles y más.",
    url: "/",
    image: "/web-app-manifest-512x512.png",
  });

  return (
    <>
      <SEO
        title="Soluciones Tecnológicas Innovadoras"
        description="Más de 25 años de experiencia en soluciones tecnológicas innovadoras. Desarrollo de software, ciberseguridad, cloud services, aplicaciones móviles y más. Transformamos procesos en productos digitales de impacto."
        keywords="soluciones tecnológicas, desarrollo software, ciberseguridad, cloud services, aplicaciones móviles, Ecuador, Quito, PRIMESYS, transformación digital, arquitectura empresarial, portales web, capacitaciones tecnológicas"
        schema={schema}
      />
      <HomePage />
    </>
  );
}
