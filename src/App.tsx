import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Percent } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaCcVisa, FaCcMastercard, FaUniversity } from 'react-icons/fa';
import { CONFIG, PRODUCTS } from './config';

// Estructura de TypeScript para los productos
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  img: string;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // REFERENCIA PARA CONTROLAR LOS CARRUSELES DE FORMA INDEPENDIENTE
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Textos e imágenes del carrusel principal (Hero)
   // Textos e imágenes del carrusel principal (Hero)
  const slides = [
    { title: "Expresa tus Emociones con Diseños Florales", desc: "Encuentra el arreglo perfecto para cada ocasión con despacho a domicilio o retiro en nuestras sucursales.", link: "#buke-de-mano", btnText: "Ver Catálogo", img: "img/2.jpeg" }, // <-- Asegúrate de que tenga esta coma
    { title: "Arreglos que Enamoran", desc: "Explora nuestra colección exclusiva de bukes de mano hechos por floristas expertos.", link: "#buchones", btnText: "Ver Buchones", img: "img/3.jpeg" }, // <-- Asegúrate de que tenga esta coma
    { title: "Acompañando Momentos", desc: "Diseños solemnes y ramos fúnebres armados con el máximo respeto y delicadeza.", link: "#ramos-funebres", btnText: "Ver Ofrendas", img: "img/4.jpeg" }, // <-- ¡AQUÍ FALTA LA COMA! Agrégala después de la llave
    { title: "Sorpresas Inolvidables", desc: "Combos perfectos de flores frescas accompanied de tiernos peluches para regalar.", link: "#combos", btnText: "Ver Combos", img: "img/5.jpeg" }
  ];


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  const formatCLP = (value: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(value);
  };

  // FUNCIÓN PARA MOVER LAS TARJETAS DE PRODUCTOS DE LADO A LADO
  const handleScrollCarousel = (section: string, direction: 'left' | 'right') => {
    const container = sectionRefs.current[section];
    if (container) {
      const scrollAmount = 340; // Ancho aproximado de la tarjeta + gap
      container.scrollTo({
        left: direction === 'left' 
          ? container.scrollLeft - scrollAmount 
          : container.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // REDIRECCIÓN ROBUSTA PARA TARJETAS: Abre en pestaña nueva de forma segura
  const handleWhatsAppConsult = (product: Product) => {
    let mensaje = `💐 *CONSULTA DE COMPRA - ${CONFIG.shopName.toUpperCase()}* 💐\n\n`;
    mensaje += `Hola, me interesa encargar el siguiente diseño:\n`;
    mensaje += `────────────────────\n`;
    mensaje += `• *Producto:* ${product.name}\n`;
    mensaje += `• *Precio:* ${formatCLP(product.price)}\n`;
    mensaje += `────────────────────\n`;

    if (product.price >= CONFIG.umbralDescuento) {
      const descuento = product.price * CONFIG.porcentajeDescuento;
      const precioFinal = product.price - descuento;
      mensaje += `*¡Aplica 10% de descuento por compra mayor a $30.000!*\n`;
      mensaje += `*Precio con Descuento:* ${formatCLP(precioFinal)}\n\n`;
    }

    mensaje += `¿Tienen disponibilidad para coordinar el despacho o retiro?`;

    const urlFinal = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    
    // Método nativo fantasma para saltarse bloqueos estrictos de Chrome
    const link = document.createElement('a');
    link.href = urlFinal;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Categorías vinculadas directamente con tu config.ts
  const sections = ["Buke de Mano", "Buchones", "Ramos Fúnebres", "Combos"];

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#inicio" className="logo">Florería<span>Boutique</span></a>
          
          <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
            <li><a href="#buke-de-mano" onClick={() => setIsMenuOpen(false)}>Buke de Mano</a></li>
            <li><a href="#buchones" onClick={() => setIsMenuOpen(false)}>Buchones</a></li>
            <li><a href="#ramos-funebres" onClick={() => setIsMenuOpen(false)}>Ramos Fúnebres</a></li>
            <li><a href="#combos" onClick={() => setIsMenuOpen(false)}>Combinaciones</a></li>
            <li>
              {/* CORRECCIÓN: Arreglado con /$ para evitar la pantalla de error */}
              <a 
                href={`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Hola, me comunico desde el sitio web para realizar una consulta general.')}`} 
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

      {/* HERO CAROUSEL */}
      <header id="inicio" className="hero-carousel">
        <div className="carousel-container">
          <div className="carousel-track">
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                <img src={`/${slide.img}`} alt={slide.title} />
                <div className="carousel-caption">
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <a href={slide.link} className="btn-primary">{slide.btnText}</a>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>&lt;</button>
          <button className="carousel-btn next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>&gt;</button>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
            ))}
          </div>
        </div>
      </header>

      {/* BANNER PROMO */}
      <section className="promo-banner">
        <div className="banner-content">
          <div className="banner-flex-layout">
            <div className="promo-icon-badge">
              <Percent size={22} />
              <span>PROMO ESPECIAL</span>
            </div>
            <div className="promo-text-details">
              <h2>¡Aprovecha un <span>10% de Descuento</span> automático!</h2>
              <p>En todas tus compras superiores a $30.000 pesos. Al presionar el botón de un producto, la rebaja se calculará de inmediato en tu consulta de WhatsApp.</p>
            </div>
            <div className="promo-bag-icon">
              <ShoppingBag size={56} />
            </div>
          </div>
        </div>
      </section>

      {/* GRILLAS DE PRODUCTOS CON CONVERSOR A CARRUSEL */}
      {sections.map((section) => (
        <section 
          key={section} 
          id={section.toLowerCase().replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ /g, '-')} 
          className="products-section relative-carousel-group"
        >
          <h2 className="section-title">{section === "Combos" ? "Combinaciones" : section}</h2>
          
          <div className="carousel-wrapper">
            {/* Botón Izquierdo */}
            <button 
              className="carousel-arrow left-arrow" 
              onClick={() => handleScrollCarousel(section, 'left')}
              aria-label="Anterior"
            >
              ❮
            </button>

            {/* Contenedor de las Tarjetas con Indexación anti-duplicados */}
            <div 
              ref={(el) => { sectionRefs.current[section] = el; }} 
              className="products-grid carousel-mode"
            >
              {PRODUCTS.filter(p => p.category === section).map((product, index) => (
                <div key={`${product.id}-${index}`} className="product-card">
                  <div className="product-img-wrapper">
                    <img src={`/${product.img}`} alt={product.name} />
                    {product.price >= CONFIG.umbralDescuento && (
                      <span className="tag-discount">-10%</span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">{formatCLP(product.price)}</p>
                    <button className="buy-btn" onClick={() => handleWhatsAppConsult(product)}>
                      Consultar al Tiro
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Derecho */}
            <button 
              className="carousel-arrow right-arrow" 
              onClick={() => handleScrollCarousel(section, 'right')}
              aria-label="Siguiente"
            >
              ❯
            </button>
          </div>
        </section>
      ))}

      {/* FOOTER RECONSTRUIDO Y PROTEGIDO */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#inicio" className="logo">Florería<span>Boutique</span></a>
            <p>Diseños florales premium para cada momento especial. Atención personalizada y despachos confiables.</p>
          </div>
          
          <div className="footer-info">
            <h4>Atención</h4>
            <p>Lunes a Domingo</p>
            <p>08:00 a 20:00 hrs.</p>
            <p className="footer-highlight">Consultas vía WhatsApp</p>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </div>
          
          <div className="footer-payments">
            <h4>Medios de Pago</h4>
            <div className="payment-badges">
              <span className="badge-card" title="Visa"><FaCcVisa /></span>
              <span className="badge-card" title="Mastercard"><FaCcMastercard /></span>
              <span className="badge-card" title="Transferencia"><FaUniversity /></span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Florería Boutique. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
