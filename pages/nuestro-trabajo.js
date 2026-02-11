import NuestroTrabajo from "../src/components/nuestroTrabajo";
import SEO, { createWebPageSchema } from "../src/components/SEO";

export default function NuestroTrabajoPage() {
  const schema = createWebPageSchema({
    title: "Nuestro Trabajo - PRIMESYS",
    description: "Descubre nuestros proyectos y casos de éxito. Más de 150 implementaciones exitosas para empresas en Ecuador.",
    url: "/nuestro-trabajo",
  });

  return (
    <>
      <SEO
        title="Nuestro Trabajo"
        description="Explora nuestros proyectos y casos de éxito. PRIMESYS ha realizado más de 150 implementaciones exitosas en desarrollo de software, ciberseguridad, cloud services y más para empresas en Ecuador."
        keywords="proyectos, casos de éxito, portafolio, trabajos realizados, implementaciones, clientes, Ecuador, desarrollo software, referencias"
        schema={schema}
      />
      <NuestroTrabajo />
    </>
  );
}
