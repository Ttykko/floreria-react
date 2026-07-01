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
  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* 🛠️ LOGO CORPORATIVO CON LA RUTA EXACTA DE PRODUCTOS */}
        <a href="#inicio" className="logo-container">
          <img 
            src="/img/products/logo.jpeg" // 👈 ¡Esta es la ruta real donde está tu archivo!
            alt={CONFIG.shopName} 
            className="brand-logo" 
          />
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

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
            <a
              href={`https://wa.me{CONFIG.whatsappNumber}?text=${encodeURIComponent(
                "Hola, me comunico desde el sitio web para realizar una consulta general."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-whatsapp"
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
