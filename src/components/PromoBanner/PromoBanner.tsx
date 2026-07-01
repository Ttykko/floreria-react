import { CONFIG } from "../../config";
import { formatCLP } from "../../utils/currency";
import "./PromoBanner.scss";

export default function PromoBanner() {
  // Convertimos el 0.10 de la configuración a un número entero para mostrar (10)
    const porcentajeString = `${CONFIG.porcentajeDescuento * 100}%`;
  
  // Formateamos los 30000 de la configuración a formato chileno ($30.000)
  const umbralFormateado = formatCLP(CONFIG.umbralDescuento);

  return (
    <div className="promo-banner">
      <div className="promo-container">
        
        {/* Icono / Insignia de la izquierda */}
        <div className="promo-badge">
          <span className="promo-percent">%</span>
          <span className="promo-badge-text">PROMO ESPECIAL</span>
        </div>

        {/* Textos Informativos Dinámicos */}
        <div className="promo-content">
          <h2>
            ¡Aprovecha un <span className="highlight">{porcentajeString} de Descuento</span> automático! con Jardín d Amore
          </h2>
          <p>
            En todas tus compras superiores a {umbralFormateado} pesos. Al presionar el botón de un producto, 
            la rebaja se calculará de inmediato en tu consulta de WhatsApp.
          </p>
        </div>

        {/* Icono de bolsa de la derecha (Opcional) */}
        <div className="promo-icon-bag">
          {/* Aquí puedes dejar tu icono SVG o clase actual */}
          <span className="bag-emoji">🛍️</span>
        </div>

      </div>
    </div>
  );
}
