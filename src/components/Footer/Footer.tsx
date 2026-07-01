import { FaInstagram, FaLocationDot, FaCompass, FaThreads } from "react-icons/fa6";
import { CONFIG } from "../../config";
import "./Footer.scss";

function Footer() {
  // Enlaces de Google Maps reales con la dirección exacta para Quillota y La Cruz
  const urlLocalPrincipal = "https://maps.app.goo.gl/tD4qLEsXKVBCJ86NA";
  const urlLocalLaCruz = "https://maps.app.goo.gl/4S5CgS8a9eb1Geiq8";

  // Enlaces de redes sociales oficiales de la florería
  const urlInstagram = "https://www.instagram.com/jardind.amore/";
  const urlThreads = "https://www.threads.com/@jardind.amore?xmt=AQG0i9-FV71gyTm2_DynYFgstrEi7Bl3-RSSb8tysHjSAN8"; 

  return (
    <footer className="main-footer">
      <div className="footer-container">

        {/* COLUMNA 1: MARCA CON LOGO CORPORATIVO SÓLO (MÉTODO MINIMALISTA) */}
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo-container">
            <img 
              src="/img/products/logo.jpeg" 
              alt={CONFIG.shopName} 
              className="footer-brand-logo" 
            />
          </a>
          <p>
            Diseños florales premium para cada momento especial. Atención personalizada y despachos confiables.
          </p>
        </div>

        {/* COLUMNA 2: HORARIOS */}
        <div className="footer-info">
          <h4>Atención</h4>
          <p>Lunes a Domingo</p>
          <p>08:00 a 20:00 hrs.</p>
          <p className="footer-highlight">Consultas vía WhatsApp</p>
        </div>

        {/* COLUMNA 3: REDES SOCIALES CONFIGURADAS */}
        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            {/* Instagram */}
            <a 
              href={urlInstagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            
            {/* Threads */}
            <a 
              href={urlThreads} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Threads"
            >
              <FaThreads />
            </a>
          </div>
        </div>

        {/* COLUMNA 4: RADAR ULTRA MODERNO DE MAPAS */}
        <div className="footer-locations">
          <h4>Nuestras Tiendas</h4>
          <div className="locations-wrapper">
            
            {/* Local Principal */}
            <a 
              href={urlLocalPrincipal} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-card"
            >
              <div className="radar-icon">
                <FaLocationDot />
                <span className="ping"></span> {/* Onda expansiva del radar */}
              </div>
              <div className="location-text">
                <span className="loc-title">Local Principal (101)</span>
                <span className="loc-desc">Av. Carlos Condell 101, Quillota</span>
              </div>
            </a>

            {/* Sucursal La Cruz */}
            <a 
              href={urlLocalLaCruz} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-card"
            >
              <div className="radar-icon static-radar">
                <FaCompass />
              </div>
              <div className="location-text">
                <span className="loc-title">Sucursal La Cruz</span>
                <span className="loc-desc">Paradero 13, La Cruz</span>
              </div>
            </a>

          </div>
        </div>

      </div>

      {/* BASE INFERIOR */}
      <div className="footer-bottom">
        <p>
          &copy; 2026 {CONFIG.shopName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
