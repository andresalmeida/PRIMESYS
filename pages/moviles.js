import AplicacionesMoviles from "../src/components/aplicacionesMoviles";
import SEO, { createServiceSchema } from "../src/components/SEO";

export default function MovilesPage() {
  const schema = createServiceSchema({
    name: "Desarrollo de Aplicaciones Móviles",
    description: "Desarrollo de aplicaciones móviles para celulares y tablets. Soluciones que acercan servicios, productos e información a usuarios de forma rápida, cómoda y personalizada.",
    url: "/moviles",
    image: "/servicios/7.jpg",
  });

  return (
    <>
      <SEO
        title="Aplicaciones Móviles - Desarrollo iOS y Android"
        description="Transforma ideas en aplicaciones móviles innovadoras. Apps a medida, interfaces modernas e intuitivas, y soluciones escalables para iOS y Android que potencian tu negocio y conectan con tus clientes."
        keywords="aplicaciones móviles, desarrollo apps, mobile development, apps iOS, apps Android, desarrollo móvil Ecuador, aplicaciones empresariales, mobile apps Quito, desarrollo smartphones"
        schema={schema}
      />
      <AplicacionesMoviles />
    </>
  );
}
