import "./Hero.scss";

interface Slide {
  title: string;
  desc: string;
  link: string;
  btnText: string;
  img: string;
}

interface HeroProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

function Hero({
  slides,
  currentSlide,
  setCurrentSlide
}: HeroProps) {
  return (
    <header id="inicio" className="hero-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(/img/hero/${slide.img})` }} // <-- ¡Listo! Ahora sí va dentro del div
            >
              <div className="carousel-caption">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <a href={slide.link} className="btn-primary">
                  {slide.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn prev"
          onClick={() =>
            setCurrentSlide(
              (currentSlide - 1 + slides.length) % slides.length
            )
          }
        >
          &lt;
        </button>

        <button
          className="carousel-btn next"
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % slides.length)
          }
        >
          &gt;
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}

export default Hero;
