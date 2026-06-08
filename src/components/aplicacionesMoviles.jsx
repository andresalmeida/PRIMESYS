import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function AplicacionesMoviles() {
  return <ServicePageTemplate service={servicePages.moviles} />;
}
