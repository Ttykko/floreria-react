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
        
        {/* COLUMNA 1: Promoción Automática (Mantenida intacta) */}
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

        {/* DIVIDER VISUAL */}
        <div className="promo-divider" aria-hidden="true"></div>

        {/* COLUMNA 2: Transformada en Slider Vertical con la Nueva Info */}
        <div className="promo-section workshop-block">
          <div className="section-header">
            <span className="promo-badge-icon">🌸</span>
            <h3>Eventos y Talleres</h3>
          </div>
          
          <div className="slider-futuristic-container">
            {/* Luces difuminadas para suavizar los bordes al subir */}
            <div className="slider-glow-top"></div>
            
            <div className="slider-track">
              {/* Tarjeta 1 Original */}
              <div className="slide-card">
                <div className="card-top">
                  <span className="card-badge">🌻 Zona Kids</span>
                  <h4>Arma tu Propio Ramo</h4>
                </div>
                <p>
                  ¡Que los niños también jueguen con flores! Nuestro taller didáctico es 100% exclusivo para niños. Con materiales seguros y la guía de nuestros expertos, cada niño crea su ramo y se lo lleva a casa. Ideal para fiestas, showrooms y ferias escolares.
                </p>
              </div>

              {/* Tarjeta 2 Original */}
              <div className="slide-card">
                <div className="card-top">
                  <span className="card-badge">✨ Eventos</span>
                  <h4>Diseños Únicos</h4>
                </div>
                <p>
                  Transformamos tus celebraciones con diseños florales únicos y llenos de vida. Bodas, cumpleaños, bautizos y eventos corporativos. Cada detalle está pensado para sorprender.
                </p>
              </div>

              {/* CLONES EXACTOS PARA EL LOOP INFINITO SIN SALTOS */}
              <div className="slide-card" aria-hidden="true">
                <div className="card-top">
                  <span className="card-badge">🌻 Zona Kids</span>
                  <h4>Arma tu Propio Ramo</h4>
                </div>
                <p>
                  ¡Que los niños también jueguen con flores! Nuestro taller didáctico es 100% exclusivo para niños. Con materiales seguros y la guía de nuestros expertos, cada niño crea su ramo y se lo lleva a casa. Ideal para fiestas, showrooms y ferias escolares.
                </p>
              </div>

              <div className="slide-card" aria-hidden="true">
                <div className="card-top">
                  <span className="card-badge">✨ Eventos</span>
                  <h4>Diseños Únicos</h4>
                </div>
                <p>
                  Transformamos tus celebraciones con diseños florales únicos y llenos de vida. Bodas, cumpleaños, bautizos y eventos corporativos. Cada detalle está pensado para sorprender.
                </p>
              </div>
            </div>

            <div className="slider-glow-bottom"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
