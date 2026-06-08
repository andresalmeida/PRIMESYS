import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function Planificacion() {
  return <ServicePageTemplate service={servicePages.planificacion} />;
}
