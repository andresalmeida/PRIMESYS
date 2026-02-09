// Utilidad para importar imágenes sin require.context()
// Todas las imágenes se importan estáticamente

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

// Importar imágenes de clientes
import cliente1 from '../clientes/1.jpg';
import cliente2 from '../clientes/2.jpg';
import cliente3 from '../clientes/3.jpg';
import cliente4 from '../clientes/4.jpg';
import cliente5 from '../clientes/5.jpg';
import cliente6 from '../clientes/6.jpg';
import cliente7 from '../clientes/7.jpg';
import cliente8 from '../clientes/8.jpg';

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

export const clientsImages = {
  1: cliente1,
  2: cliente2,
  3: cliente3,
  4: cliente4,
  5: cliente5,
  6: cliente6,
  7: cliente7,
  8: cliente8,
};

export function findImage(imagesMap, index) {
  return imagesMap[index] || null;
}
