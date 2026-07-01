import { CONFIG } from "../../config";
import type { Product } from "../../config"; 
import { formatCLP } from "../../utils/currency";
import { generateWhatsAppLink } from "../../utils/whatsapp";
import "./ProductCard.scss"; 

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  
  const handleWhatsAppConsult = () => {
    const url = generateWhatsAppLink(product);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // 🛠️ Mantenemos solo el filtro del precio para Buchones y Combos
  const showPrice = product.category === "Buchones" || product.category === "Combos";
  const hasDiscount = showPrice && product.price !== undefined && product.price >= CONFIG.umbralDescuento;

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={`/img/${product.img}`} alt={product.name} />

        {hasDiscount && (
          <span className="tag-discount">-10%</span>
        )}
      </div>

      <div className="product-info">
        {/* 🛠️ CORRECCIÓN CRUCIAL: Eliminamos showName para que siempre dibuje el código/nombre del producto */}
        <h3>{product.name}</h3>

        {showPrice && product.price !== undefined && (
          <p className="price">{formatCLP(product.price)}</p>
        )}

        <button className="buy-btn" onClick={handleWhatsAppConsult}>
          {product.category === "Flores" ? "Consultar Disponibilidad" : "Consultar al Tiro"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
