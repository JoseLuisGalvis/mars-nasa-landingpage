// components/Navbar.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logoNASA from "../assets/images/logoNASA.png";

const translations = {
  es: {
    navbarTitle: "Exploración de Marte",
    moreAboutMars: "Más sobre Marte",
    darkMode: "🌞 Modo Claro",
    lightMode: "🌙 Modo Oscuro",
    language: "Español",
    english: "Inglés",
  },
  en: {
    navbarTitle: "Mars Exploration",
    moreAboutMars: "More about Mars",
    darkMode: "🌞 Light Mode",
    lightMode: "🌙 Dark Mode",
    language: "Spanish",
    english: "English",
  },
};

const Navbar = ({ language, toggleLanguage }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) document.body.classList.add("dark-mode");
  }, []);

  const t = translations[language];

  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <div className="row w-100 align-items-center g-3">
          {/* Logo y título */}
          <div className="col-lg-4 col-12">
            <div className="d-flex align-items-center">
              <img
                src={logoNASA}
                alt="NASA Logo"
                width="60"
                height="50"
                className="me-2 rounded-circle"
              />
              <h1 className="navbar-title mb-0">{t.navbarTitle}</h1>
            </div>
          </div>

          {/* Texto animado */}
          <div className="col-lg-4 col-12">
            <div className="text-container">
              <span className="animated-text">
                {language === "es" 
                  ? "Este es un regalo para Mr Dan Goldin" 
                  : "This is a Gift for Mr Dan Goldin"}
              </span>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="col-lg-4 col-12">
            <div className="d-flex flex-lg-row flex-column gap-2">
              <a
                href="https://mars.nasa.gov"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.moreAboutMars}
              </a>
              <button 
                className="btn btn-secondary" 
                onClick={toggleDarkMode}
              >
                {darkMode ? t.darkMode : t.lightMode}
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language === "es" ? t.language : t.english}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => toggleLanguage("es")}
                    >
                      {t.language}
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => toggleLanguage("en")}
                    >
                      {t.english}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};

export default Navbar;


