import { FaInstagram, FaLocationDot, FaCompass, FaThreads } from "react-icons/fa6";
import { CONFIG } from "../../config";
import "./Footer.scss";

function Footer() {
  // Enlaces de Google Maps reales con la dirección exacta para Quillota y La Cruz
  const urlLocalPrincipal = "https://www.google.com/maps/place/Vi%C3%B1a+del+Mar,+Valpara%C3%ADso/@-33.0053579,-71.6126582,12z/data=!3m1!4b1!4m6!3m5!1s0x9689de84ead41255:0x8e5fde76df3d413f!8m2!3d-33.0153481!4d-71.5500276!16zL20vMDFybnR5?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D";
  const urlLocalLaCruz = "https://www.google.com/maps/place/Bosque+Natura/@-33.2409119,-71.6644145,16z/data=!4m15!1m8!3m7!1s0x9689de84ead41255:0x8e5fde76df3d413f!2zVmnDsWEgZGVsIE1hciwgVmFscGFyYcOtc28!3b1!8m2!3d-33.0153481!4d-71.5500276!16zL20vMDFybnR5!3m5!1s0x96620d2e1174417b:0xef0c401508de5559!8m2!3d-33.243319!4d-71.658265!16s%2Fg%2F11g2tl6qby?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D";

  // Enlaces de redes sociales oficiales de la florería
  const urlInstagram = "https://www.instagram.com/?hl=pt-br";
  const urlThreads = "https://www.threads.com/?xmt=AQG0i9-FV71gyTm2_DynYFgstrEi7Bl3-RSSb8tysHjSAN8"; 

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
                <span className="loc-title">Local Principal </span>
                <span className="loc-desc">Viña del Mar</span>
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
                <span className="loc-title">Sucursal 2</span>
                <span className="loc-desc">Paradero 11</span>
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
