import { useState, useEffect } from "react";
// 🛠️ RUTAS EXACTAS CON APUNTADO AL ARCHIVO TSX FINAL
import Navbar from "./components/Navbar/Navbar"; 
import Hero from "./components/Hero/Hero";
// CAMBIA LA IMPORTACIÓN DE PROMOBANNER POR ESTA:
import PromoBanner from "./components/PromoBanner/PromoBanner";
import ProductSection from "./components/ProductSection/ProductSection";
import Footer from "./components/Footer/Footer";
// CAMBIA LA IMPORTACIÓN DE PROMOBANNER POR ESTA:


// Inyectamos los datos limpios desde el archivo de configuración centralizado
import { HERO_SLIDES } from "./config";

export default function App() {
  // Tipamos los estados explícitamente para evitar advertencias de TypeScript
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  // Estados necesarios obligatorios para el Navbar
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Efecto para detectar el scroll de la página y pasarlo al Navbar
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AUTO SLIDE HERO usando los datos centralizados de HERO_SLIDES
  useEffect(() => {
    if (!HERO_SLIDES || !HERO_SLIDES.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* HERO */}
      <Hero
        slides={HERO_SLIDES}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />

      {/* BANNER DE DESCUENTO */}
      <PromoBanner /> 

      {/* PRODUCTOS */}
      <ProductSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
