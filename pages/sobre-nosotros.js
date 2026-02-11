import SobreNosotros from "../src/components/sobreNosotros";
import SEO, { createWebPageSchema } from "../src/components/SEO";

export default function SobreNosotrosPage() {
  const schema = createWebPageSchema({
    title: "Sobre Nosotros - PRIMESYS",
    description: "Conoce nuestra historia, misión y visión. Más de 25 años transformando procesos en productos digitales de impacto.",
    url: "/sobre-nosotros",
  });

  return (
    <>
      <SEO
        title="Sobre Nosotros"
        description="Conoce la historia de PRIMESYS. Más de 25 años de experiencia ofreciendo soluciones tecnológicas innovadoras. Nuestra misión es ofrecer soluciones personalizadas con enfoque en calidad y atención al cliente."
        keywords="PRIMESYS, sobre nosotros, empresa tecnológica, historia, misión, visión, valores, experiencia, Ecuador, Quito, 25 años experiencia"
        schema={schema}
      />
      <SobreNosotros />
    </>
  );
}
