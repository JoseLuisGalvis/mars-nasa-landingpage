// components/Footer.jsx
import PropTypes from "prop-types";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ language }) => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-content">
        <p>
          {language === "es"
            ? "Todas las imágenes son propiedad de la NASA."
            : "All images are property of NASA."}{" "}
          <a
            href="https://www.nasa.gov/multimedia/guidelines/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "es" ? "Ver políticas de uso" : "View usage policies"}
          </a>
        </p>
        
        {/* 🔹 Redes sociales */}
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100046965497737" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://x.com/JosegalvisDip" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/jose_galvis65/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/josé-luis-galvis-escobar-1344821a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Validar las props
Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer;


