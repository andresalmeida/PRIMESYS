import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function ArquitecturaEmpresarial() {
  return <ServicePageTemplate service={servicePages["arquitectura-empresarial"]} />;
}
