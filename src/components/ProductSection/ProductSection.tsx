import { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { PRODUCTS } from "../../config"; 
import "./ProductSection.scss";

const sections = ["Flores", "Buchones", "Ramos Fúnebres", "Combos"];

function ProductSection() {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleScrollCarousel = (
    section: string,
    direction: "left" | "right"
  ) => {
    const container = sectionRefs.current[section];

    if (!container) return;

    const scrollAmount = 340;

    container.scrollTo({
      left:
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const normalizeId = (text: string) =>
    text
      .toLowerCase()
      .replace(/á/g, "a")
      .replace(/é/g, "e")
      .replace(/í/g, "i")
      .replace(/ó/g, "o")
      .replace(/ú/g, "u")
      .replace(/ /g, "-");

  return (
    <>
      {sections.map((section) => {
        const sectionId = normalizeId(section);

        return (
          <section
            key={section}
            id={sectionId}
            className="products-section relative-carousel-group"
          >
            <h2 className="section-title">
              {section === "Combos" ? "Combinaciones" : section}
            </h2>

            <div className="carousel-wrapper">
              <button
                className="carousel-arrow left-arrow"
                onClick={() => handleScrollCarousel(section, "left")}
              >
                ❮
              </button>

              <div
                ref={(el) => {
                  sectionRefs.current[section] = el;
                }}
                className="products-grid carousel-mode"
              >
                {PRODUCTS.filter((p) => p.category === section).map(
                  (product) => (
                    <ProductCard key={product.id} product={product} />
                  )
                )}
              </div>

              <button
                className="carousel-arrow right-arrow"
                onClick={() => handleScrollCarousel(section, "right")}
              >
                ❯
              </button>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ProductSection;
