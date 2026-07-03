import { CONFIG } from "../../config";
import { formatCLP } from "../../utils/currency";
import "./PromoBanner.scss";

export default function PromoBanner() {
  // Convertimos el 0.10 de la configuración a un número entero para mostrar (10%)
  const porcentajeString = `${CONFIG.porcentajeDescuento * 100}%`;
  
  // Formateamos los 30000 de la configuración a formato chileno ($30.000)
  const umbralFormateado = formatCLP(CONFIG.umbralDescuento);

  return (
    <div className="promo-banner">
      <div className="promo-container">
        
        {/* COLUMNA 1: Promoción Automática */}
        <div className="promo-section discount-block">
          <div className="section-header">
            <span className="promo-badge">%</span>
            <h3>Descuento Especial</h3>
          </div>
          <div className="section-body">
            <h2>
              ¡Aprovecha un <span className="highlight">{porcentajeString} de descuento</span> con Jardín d'Amore!
            </h2>
            <p>
              Automático en compras superiores a <strong>{umbralFormateado}</strong>. 
              La rebaja se calculará de inmediato en tu consulta de WhatsApp al seleccionar un producto.
            </p>
          </div>
        </div>

        {/* DIVIDER VISUAL (Opcional, se maneja por CSS) */}
        <div className="promo-divider" aria-hidden="true"></div>

        {/* COLUMNA 2: Decoración & Taller (Captura de pantalla) */}
        <div className="promo-section workshop-block">
          <div className="section-header">
            <span className="promo-badge-icon">🌸</span>
            <h3>Eventos y Talleres</h3>
          </div>
          <div className="section-body">
            <h2>
              Decoración floral para eventos & Taller <span className="highlight">"Arma tu Diseño"</span>
            </h2>
            <p>
              Realizamos decoraciones florales profesionales para todo tipo de eventos. Además, vive la experiencia 
              guiada por nuestros floristas para crear tu propio arreglo floral.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
