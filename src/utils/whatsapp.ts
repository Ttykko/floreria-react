import { CONFIG } from "../config";
import { formatCLP } from "./currency";

// Definimos el tipo aquí mismo para que TypeScript no reclame
interface Product {
  id: string;
  name: string;
  price?: number;
  category: string;
  img: string;
}

/**
 * Genera el mensaje estructurado de WhatsApp aplicando lógica de negocio y descuentos automáticos.
 */
export function generateWhatsAppLink(product: Product): string {
  let mensaje = `💐 *CONSULTA DE COMPRA - ${CONFIG.shopName.toUpperCase()}* 💐\n\n`;

  // 1. Plantilla exacta para la sección Flores
  if (product.category === "Flores") {
    mensaje += `Hola, ¿estará esta flor disponible?\n`;
    if (product.name) {
      mensaje += `• *Diseño:* ${product.name}\n`;
    }
  } 
  // 2. Plantilla optimizada para Ramos Fúnebres con sus nuevos códigos identificadores
  else if (product.category === "Ramos Fúnebres") {
    mensaje += `Hola, me interesa consultar por el ramo fúnebre seleccionado.\n`;
    mensaje += `• *Código de Identificación:* ${product.name} (${product.id})\n\n`;
    mensaje += `¿Tienen disponibilidad?`;
  } 
  // 3. NUEVA PLANTILLA: Combos sin precio asignado
  else if (product.category === "Combos" && (product.price === undefined || product.price === null)) {
    mensaje += `Hola, me interesa encargar el siguiente combo de regalo:\n`;
    mensaje += `────────────────────\n`;
    mensaje += `• *Producto:* ${product.name}\n`;
    mensaje += `• *Código:* ${product.id}\n`;
    mensaje += `────────────────────\n`;
    mensaje += `¿Cuál es el valor actual del combo y si tienen disponibilidad para coordinar despacho o retiro?`;
  }
  // 4. Plantilla tradicional para Buchones (y Combos que tengan precio cargado)
  else {
    mensaje += `Hola, me interesa encargar el siguiente diseño:\n`;
    mensaje += `────────────────────\n`;

    if (product.name) {
      mensaje += `• *Producto:* ${product.name}\n`;
    }

    // Se ejecuta con seguridad absoluta solo si el precio existe en el código de datos
    if (product.price !== undefined && product.price !== null) {
      mensaje += `• *Precio:* ${formatCLP(product.price)}\n`;

      if (product.price >= CONFIG.umbralDescuento) {
        const descuento = product.price * CONFIG.porcentajeDescuento;
        const precioFinal = product.price - descuento;

        mensaje += `────────────────────\n`;
        mensaje += `*¡Aplica 10% de descuento por compra mayor a $30.000!*\n`;
        mensaje += `*Precio con Descuento:* ${formatCLP(precioFinal)}\n`;
      }
    }

    mensaje += `────────────────────\n`;
    mensaje += `¿Tienen disponibilidad para coordinar despacho o retiro?`;
  }

  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
}
