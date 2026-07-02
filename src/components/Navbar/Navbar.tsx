import { CONFIG } from "../../config";
import "./Navbar.scss";

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen
}: NavbarProps) {
  
  // Generamos el texto codificado de manera segura para la consulta general
  const mensajeGeneral = encodeURIComponent("Hola, me comunico desde el sitio web para realizar una consulta general.");
  const whatsappLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${mensajeGeneral}`;

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* LOGO CORPORATIVO */}
        <a href="#inicio" className="logo-container">
          <img 
            src="/img/products/logo.jpeg" 
            alt={CONFIG.shopName} 
            className="brand-logo" 
          />
        </a>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* ENLACES DE NAVEGACIÓN */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
          </li>

          <li>
            <a href="#flores" onClick={() => setIsMenuOpen(false)}>
              Flores
            </a>
          </li>

          <li>
            <a href="#buchones" onClick={() => setIsMenuOpen(false)}>
              Buchones
            </a>
          </li>

          <li>
            <a href="#ramos-funebres" onClick={() => setIsMenuOpen(false)}>
              Ramos Fúnebres
            </a>
          </li>

          <li>
            <a href="#combos" onClick={() => setIsMenuOpen(false)}>
              Combinaciones
            </a>
          </li>

          <li>
            {/* 🛠️ ENLACE DE WHATSAPP GLOBAL CORREGIDO Y VINCULADO A LA CONFIGURACIÓN */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-whatsapp"
              onClick={() => setIsMenuOpen(false)}
            >
              Consultas por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
