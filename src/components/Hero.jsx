import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-subtitle">
          STHEFY • Luxury Jewelry
        </span>

        <h1>
          Joyas que cuentan
          <br />
          tu historia.
        </h1>

        <p>
          Descubre colecciones pensadas para mujeres que
          aman la elegancia, la personalidad y los pequeños
          detalles que hacen grande cada momento.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            Descubrir colección
          </button>

          <button className="btn-secondary">
            Ver novedades
          </button>

        </div>

      </div>

      <div className="hero-image">

        <div className="image-placeholder">

          Próximamente
          <br />
          Modelo STHEFY

        </div>

      </div>

    </section>
  );
}

export default Hero;