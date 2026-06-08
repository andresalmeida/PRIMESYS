import ServicePageTemplate from "./ServicePageTemplate";
import { servicePages } from "../content/servicePages";

export default function Cloud() {
  return <ServicePageTemplate service={servicePages.cloud} />;
}
