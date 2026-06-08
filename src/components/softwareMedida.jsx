import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function SoftwareMedida() {
  return <ServicePageTemplate service={servicePages["software-medida"]} />;
}
