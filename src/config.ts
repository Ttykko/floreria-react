export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  img: string;
}

export const CONFIG = {
  whatsappNumber: "56977539944",
  umbralDescuento: 30000,         
  porcentajeDescuento: 0.10 ,
  shopName: "Florería Boutique"
};
  
      


export const PRODUCTS: Product[] = [
  { 
    id: "bm-01", 
    name: "Buke Premium Rosas Rojas", 
    price: 35000, 
    category: "Buke de Mano", 
    img: "img/1.jpeg" 
  },
  { 
    id: "bm-02", 
    name: "Buke de Tulipanes Mix", 
    price: 55000, 
    category: "Buke de Mano", 
    img: "img/2.jpeg" 
  },
  { 
    id: "bm-03", // CORREGIDO (Antes bm-01)
    name: "Buke mix", 
    price: 35000, 
    category: "Buke de Mano", 
    img: "img/10.jpeg" 
  },
  { 
    id: "bm-04", // CORREGIDO (Antes bm-02)
    name: "Buke de maguaco", 
    price: 28000, 
    category: "Buke de Mano", 
    img: "img/11.jpeg" 
  },
  { 
    id: "bm-05", // CORREGIDO (Antes bm-01)
    name: "Buke classic", 
    price: 35000, 
    category: "Buke de Mano", 
    img: "img/28.jpeg" 
  },
  { 
    id: "bm-06", // CORREGIDO (Antes bm-02)
    name: "Buke de Tulipanes Mix", 
    price: 28000, 
    category: "Buke de Mano", 
    img: "img/2.jpeg" 
  },
  { 
    id: "bm-07", // CORREGIDO (Antes bm-02)
    name: "Buke de Tulipanes Mix", 
    price: 28000, 
    category: "Buke de Mano", 
    img: "img/2.jpeg" 
  },
  { 
    id: "bm-08", // CORREGIDO (Antes bm-02)
    name: "Buke de Tulipanes Mix", 
    price: 28000, 
    category: "Buke de Mano", 
    img: "img/2.jpeg" 
  },
  { 
    id: "bm-09", // CORREGIDO (Antes bm-02)
    name: "Buke de Tulipanes Mix", 
    price: 28000, 
    category: "Buke de Mano", 
    img: "img/2.jpeg" 
  },
  { 
    id: "bm-10", // CORREGIDO (Antes bm-02)
    name: "Rosas mix", 
    price: 28000, 
    category: "Buke de Mano", 
    img: "img/6.jpeg" 
  },
  { 
    id: "bm-11", // CORREGIDO (Antes bm-02)
    name: "Rosas tulipanes mix", 
    price: 28000, 
    category: "Buke de Mano", 
    img: "img/12.jpeg" 
  },
  { 
    id: "bu-01", 
    name: "Ramo Buchón Extravaganza (100 Rosas)", 
    price: 85000, 
    category: "Buchones", 
    img: "img/25.jpeg" 
  },
  { 
    id: "bu-02", // CORREGIDO (Antes bu-01)
    name: "Ramo Buchón de amor (100 Rosas)", 
    price: 85000, 
    category: "Buchones", 
    img: "img/26.jpeg" 
  },
  { 
    id: "bu-03", // CORREGIDO (Antes bu-01)
    name: "Ramo Buchón aniversario (100 Rosas)", 
    price: 85000, 
    category: "Buchones", 
    img: "img/29.jpeg" 
  },
  { 
    id: "bu-04", // CORREGIDO (Antes bu-01)
    name: "Ramo Buchón proesa (100 Rosas)", 
    price: 85000, 
    category: "Buchones", 
    img: "img/16.jpeg" 
  },
  { 
    id: "bu-05", // CORREGIDO (Antes bu-01)
    name: "Ramo Buchón Extravaganza (100 Rosas)", 
    price: 85000, 
    category: "Buchones", 
    img: "img/WhatsApp Image 2026-05-25 at 8.58.45 AM.jpeg" 
  },
  { 
    id: "bu-06", // CORREGIDO (Antes bu-01)
    name: "Ramo Buchón Extravaganza (100 Rosas)", 
    price: 85000, 
    category: "Buchones", 
    img: "img/WhatsApp Image 2026-05-25 at 8.58.45 AM.jpeg" 
  },
  { 
    id: "rf-01", 
    name: "Corona de Condolencias Respeto", 
    price: 45000, 
    category: "Ramos Fúnebres", 
    img: "img/4.jpeg" 
  },
  { 
    id: "rf-01", 
    name: "Corona premium", 
    price: 45000, 
    category: "Ramos Fúnebres", 
    img: "img/13.jpeg" 
  },
  { 
    id: "rf-01", 
    name: "Corona multicolor", 
    price: 45000, 
    category: "Ramos Fúnebres", 
    img: "img/2.jpeg" 
  },
  { 
    id: "rf-01", 
    name: "Corona de Condolencias Respeto", 
    price: 45000, 
    category: "Ramos Fúnebres", 
    img: "img/30.jpeg" 
  },




  { 
    id: "cb-01", 
    name: "Combo Amor Puro (Rosas + Oso Gigante)", 
    price: 32000, 
    category: "Combos", 
    img: "img/5.jpeg" 
  },
  { 
    id: "cb-01", 
    name: "Combo Stish rosa", 
    price: 32000, 
    category: "Combos", 
    img: "img/7.jpeg" 
  },
  { 
    id: "cb-01", 
    name: "Combo Stish Azul ", 
    price: 32000, 
    category: "Combos", 
    img: "img/8.jpeg" 
  },
  { 
    id: "cb-01", 
    name: "Combo Stish+Globo", 
    price: 32000, 
    category: "Combos", 
    img: "img/21.jpeg" 
  },
];
