import Capacitacion from "../src/components/capacitacion";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function CapacitacionesPage() {
  const schema = createServiceSchema({
    name: "Capacitaciones Tecnológicas",
    description: "Programas de formación diseñados para fortalecer habilidades tecnológicas y dominar herramientas informáticas, aplicaciones empresariales y soluciones digitales.",
    url: "/capacitaciones",
    image: "/servicios/3.jpg",
  });

  return (
    <>
      <SEO
        title="Capacitaciones - Formación Tecnológica Empresarial"
        description="Fortalece las habilidades de tu equipo con nuestras capacitaciones tecnológicas. Entrenamiento práctico, formación personalizada, productividad máxima y actualización constante en tecnologías emergentes."
        keywords="capacitaciones tecnológicas, formación empresarial, training TI, cursos tecnología, capacitación software, entrenamiento equipos, desarrollo profesional, formación corporativa Ecuador, cursos informática"
        schema={schema}
      />
      <Capacitacion />
    </>
  );
}
