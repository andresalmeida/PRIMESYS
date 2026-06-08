import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function Capacitacion() {
  return <ServicePageTemplate service={servicePages.capacitaciones} />;
}
