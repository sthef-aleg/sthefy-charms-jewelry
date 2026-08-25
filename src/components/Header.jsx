import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1>STHEFY</h1>
        <span>Joyas</span>
      </div>

      <nav className="navigation">
        <a href="#inicio">Inicio</a>
        <a href="#charms">Charms</a>
        <a href="#joyas">Joyas</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <button className="btn-whatsapp">
        WhatsApp
      </button>
    </header>
  );
}

export default Header;