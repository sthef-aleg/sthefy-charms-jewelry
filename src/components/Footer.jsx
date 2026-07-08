import { MapPin, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="D:\joyascharms-v2\src\assets\J e w e l s.jpg" alt="Sthefy" />
          <p>Joyas y charms exclusivos en Paraguay. Calidad cuidada, precios accesibles y atencion por WhatsApp.</p>
        </div>
        <div>
          <h4>Enlaces</h4>
          <a href="#inicio">Inicio</a>
          <a href="#coleccion">Coleccion</a>
          <a href="#nosotros">Nosotros</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <p><MessageCircle size={16} /> +595 973 779 707</p>
          <p><span className="social-dot">IG</span> @charms_py</p>
          <p><MapPin size={16} /> Paraguay</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Sthefy Joyas & Charms. Todos los derechos reservados.</div>
    </footer>
  );
}

export default Footer;
