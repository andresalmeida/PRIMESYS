import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function Procesos() {
  return <ServicePageTemplate service={servicePages.procesos} />;
}
