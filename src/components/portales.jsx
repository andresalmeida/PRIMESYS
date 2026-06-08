import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function Portales() {
  return <ServicePageTemplate service={servicePages.portales} />;
}
