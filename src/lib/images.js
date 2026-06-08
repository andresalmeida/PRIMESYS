// Importar imágenes de servicios
import servicio1 from '../servicios/1.jpg';
import servicio2 from '../servicios/2.jpg';
import servicio3 from '../servicios/3.jpg';
import servicio4 from '../servicios/4.jpg';
import servicio5 from '../servicios/5.jpg';
import servicio6 from '../servicios/6.jpg';
import servicio7 from '../servicios/7.jpg';
import servicio8 from '../servicios/8.jpg';
import servicio9 from '../servicios/9.jpg';

// Importar logos de clientes (webp, fondo transparente)
import logo1  from '../clientes/cliente_1.webp';
import logo2  from '../clientes/cliente_2.webp';
import logo3  from '../clientes/cliente_3.webp';
import logo4  from '../clientes/cliente_4.webp';
import logo5  from '../clientes/cliente_5.webp';
import logo6  from '../clientes/cliente_6.webp';
import logo7  from '../clientes/cliente_7.webp';
import logo8  from '../clientes/cliente_8.webp';
import logo9  from '../clientes/cliente_9.webp';
import logo10 from '../clientes/cliente_10.webp';
import logo11 from '../clientes/cliente_11.webp';

export const servicesImages = {
  1: servicio1,
  2: servicio2,
  3: servicio3,
  4: servicio4,
  5: servicio5,
  6: servicio6,
  7: servicio7,
  8: servicio8,
  9: servicio9,
};

export const clientLogos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10, logo11,
];

export function findImage(imagesMap, index) {
  return imagesMap[index] || null;
}
