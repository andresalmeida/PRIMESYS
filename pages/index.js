import HomePage from "../src/components/HomePage";
import SEO, { createWebPageSchema } from "../src/components/SEO";

export default function IndexPage() {
  const schema = createWebPageSchema({
    title: "PRIMESYS — Ingeniería de Software para Empresas Reales",
    description: "Construimos software, integramos sistemas y sostenemos infraestructura para empresas en Ecuador. 25 años de entrega continua.",
    url: "/",
    image: "/android-chrome-512x512.png",
  });

  return (
    <>
      <SEO
        title="Ingeniería de Software para Empresas Reales"
        description="Construimos software, integramos sistemas y sostenemos infraestructura para empresas en Ecuador. 25 años de entrega continua, sin promesas vacías."
        keywords="desarrollo de software, ingeniería de software, ciberseguridad, cloud, aplicaciones móviles, Ecuador, Quito, PRIMESYS, arquitectura empresarial, portales web, capacitaciones"
        schema={schema}
      />
      <HomePage />
    </>
  );
}
