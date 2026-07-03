export interface Product {
  id: string;
  name: string;
  price?: number; 
  category: string;
  img: string;
}

export interface Slide {
  title: string;
  desc: string;
  link: string;
  btnText: string;
  img: string;
}

export const CONFIG = {
  whatsappNumber: "56947085345",
  umbralDescuento: 30000,
  porcentajeDescuento: 0.10,
  shopName: "Florería Boutique"
};

export const PRODUCTS: Product[] = [
  // --- CATEGORÍA: FLORES ---
  { id: "flo-32", name: "Tulipan Fucsia", category: "Flores", img: "products/32.jpeg" },
  { id: "flo-33", name: "Rosas", category: "Flores", img: "products/33.jpeg" },
  { id: "flo-39", name: "Maule", category: "Flores", img: "products/39.jpeg" },
  { id: "flo-35", name: "Gerberas", category: "Flores", img: "products/35.jpeg" },
  { id: "flo-40", name: "Maule", category: "Flores", img: "products/40.jpeg" },
  { id: "flo-38", name: "Rosa Unitaria", category: "Flores", img: "products/38.jpeg" },
  { id: "flo-42", name: "Maule", category: "Flores", img: "products/42.jpeg" },
  { id: "flo-43", name: "Maule", category: "Flores", img: "products/43.jpeg" },
  { id: "flo-44", name: "Maule", category: "Flores", img: "products/44.jpeg" },
  { id: "flo-45", name: "Girasoles", category: "Flores", img: "products/45.jpeg" },
  { id: "flo-48", name: "Tulipan Blanco", category: "Flores", img: "products/48.jpeg" },
  { id: "flo-65", name: "Clavel", category: "Flores", img: "products/65.jpeg" },
  { id: "flo-66", name: "Lilium", category: "Flores", img: "products/66.jpeg" },
  { id: "flo-67", name: "Flor del Buque", category: "Flores", img: "products/67.jpeg" },
  
  

  // --- CATEGORÍA: BUCHONES ---
  { id: "bu-01", name: "Mix Perdoname", price: 80000, category: "Buchones", img: "products/1.jpg" },
  { id: "bu-02", name: "Mix Mirate", price: 50000, category: "Buchones", img: "products/2.jpg" },
  { id: "bu-03", name: "Buchon Rosas Letra", price: 80000, category: "Buchones", img: "products/3.jpg" },
  { id: "bu-04", name: "Buchon Princesa", price: 100000, category: "Buchones", img: "products/4.jpg" },
  { id: "bu-05", name: "Dulce Corazón", price: 100000, category: "Buchones", img: "products/5.jpg" },
  { id: "bu-06", name: "Pink Princess", price: 75000, category: "Buchones", img: "products/6.jpg" },
  { id: "bu-07", name: "Buchon Amor", price: 35000, category: "Buchones", img: "products/7.jpg" },
  { id: "bu-08", name: "Romantico Viajero", price: 45000, category: "Buchones", img: "products/8.jpg" },
  { id: "bu-09", name: "Alegria Mix", price: 60000, category: "Buchones", img: "products/9.jpg" },
  { id: "bu-10", name: "Casual", price: 25000, category: "Buchones", img: "products/10.jpg" },
  { id: "bu-11", name: "Oro de Amor", price: 50000, category: "Buchones", img: "products/11.jpg" },
  { id: "bu-12", name: "Jardin del Bosque", price: 50000, category: "Buchones", img: "products/12.jpg" },
  { id: "bu-13", name: "Regaloneo", price: 35000, category: "Buchones", img: "products/13.jpg" },
  { id: "bu-14", name: "Corazon de Oro", price: 40000, category: "Buchones", img: "products/14.jpg" },
  { id: "bu-15", name: "Te Quiero", price: 27000, category: "Buchones", img: "products/15.jpg" },
  { id: "bu-16", name: "Especial Mix", price: 50000, category: "Buchones", img: "products/16.jpg" },
  { id: "bu-17", name: "Mix gerber full color", price: 50000, category: "Buchones", img: "products/17.jpg" },
  { id: "bu-18", name: "Desfile Rojo", price: 25000, category: "Buchones", img: "products/18.jpg" },
  { id: "bu-37", name: "Buque de mano", price: 22000, category: "Buchones", img: "products/37.jpeg" },


  // --- CATEGORÍA: RAMOS FÚNEBRES ---
  { id: "rf-01", name: "Rf-01", category: "Ramos Fúnebres", img: "products/20.jpg" },
  { id: "rf-02", name: "Rf-02", category: "Ramos Fúnebres", img: "products/21.jpg" },
  { id: "rf-03", name: "Rf-03", category: "Ramos Fúnebres", img: "products/22.jpg" },
  { id: "rf-04", name: "Rf-04", category: "Ramos Fúnebres", img: "products/23.jpg" },
  { id: "rf-05", name: "Rf-05", category: "Ramos Fúnebres", img: "products/24.jpg" },
  { id: "rf-06", name: "Rf-06", category: "Ramos Fúnebres", img: "products/25.jpg" },
  { id: "rf-07", name: "Rf-07", category: "Ramos Fúnebres", img: "products/26.jpg" },
  { id: "rf-08", name: "Rf-08", category: "Ramos Fúnebres", img: "products/27.jpg" },
  { id: "rf-09", name: "Rf-09", category: "Ramos Fúnebres", img: "products/28.jpg" },
  { id: "rf-10", name: "Rf-10", category: "Ramos Fúnebres", img: "products/29.jpg" },
  { id: "rf-11", name: "Rf-11", category: "Ramos Fúnebres", img: "products/30.jpg" },

    // --- CATEGORÍA: COMBOS ---
  { id: "cb-01", name: "Flor/Peluche 01", category: "Combos", img: "products/49.jpeg" },
  { id: "cb-02", name: "Flor/Peluche 02", category: "Combos", img: "products/58.jpeg" },
  { id: "cb-03", name: "Flor/Peluche 03", category: "Combos", img: "products/60.jpeg" },
  { id: "cb-04", name: "Flor/Peluche 04", category: "Combos", img: "products/59.jpeg" },
  { id: "cb-05", name: "Flor/Peluche/globo 01", category: "Combos", img: "products/61.jpeg" },
  { id: "cb-06", name: "Flor/Peluche 05", category: "Combos", img: "products/58.jpeg" },
  { id: "cb-07", name: "Flor/Peluche/globo 02", category: "Combos", img: "products/57.jpeg" },
  { id: "cb-08", name: "Flor/Peluche/globo 03", category: "Combos", img: "products/50.jpeg" },
  { id: "cb-09", name: "Flor/Peluche/globo 04", category: "Combos", img: "products/62.jpeg" },
  { id: "cb-10", name: "Flor/Peluche/globo 05", category: "Combos", img: "products/63.jpeg" },
  { id: "cb-11", name: "Flor/Peluche/globo 06", category: "Combos", img: "products/64.jpeg" },

];

export const HERO_SLIDES: Slide[] = [
  {
    title: "Jardín d Amore",
    desc: "Encuentra el arreglo perfecto en Jardín d Amore.",
    link: "#flores",
    btnText: "Ver Catálogo",
    img: "49.jpeg" // <-- Cambiado de .jpg a .jpeg
  },
  {
    title: "Arreglos que Enamoran",
    desc: "Colección exclusiva de flores frescas diseñadas por expertos.",
    link: "#buchones",
    btnText: "Ver Buchones",
    img: "36.jpeg" // <-- Cambiado de .jpg a .jpeg
  },
  {
    title: "Acompañando Momentos",
    desc: "Diseños solemnes y respetuosos para ocasiones especiales.",
    link: "#ramos-funebres",
    btnText: "Ver Ofrendas",
    img: "34.jpeg" // <-- Cambiado de .jpg a .jpeg
  },
  {
    title: "Sorpresas Inolvidables",
    desc: "Combos perfectos de flores y regalos para prevenir.",
    link: "#combos",
    btnText: "Ver Combos",
    img: "47.jpeg" // Este ya estaba correcto
  }
];
