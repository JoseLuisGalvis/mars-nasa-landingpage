// components/AboutMars.jsx
import PropTypes from "prop-types";
import "./AboutMars.css";


const AboutMars = ({ imageSrc, language }) => {
  const texts = {
    es: {
      title: "Sobre Nosotros",
      description:
        "Exploramos Marte a través de imágenes y actividades de la NASA. Descubre la historia y los hallazgos sobre el Planeta Rojo.",
    },
    en: {
      title: "About Us",
      description:
        "We explore Mars through NASA's images and activities. Discover the history and findings about the Red Planet.",
    },
  };

  const handleBackClick = () => {
    window.location.href = "/"; // Redirige al inicio
  };

  return (
    <section className="container about-container min-vh-100">
      <div className="about-content mt-3">
        <img 
          src={imageSrc} 
          alt="Mars" 
          className="about-image" 
          data-aos="fade-right" 
          data-aos-duration="3000" // Duración de la animación en milisegundos
          data-aos-easing="ease-in-out" // Cambia la función de temporización
        />
        <div className="about-text" 
          data-aos="fade-left" 
          data-aos-duration="000" 
          data-aos-easing="ease-in-out">
          <h2>{texts[language].title}</h2>
          <p>{texts[language].description}</p>
          <button className="btn btn-back bg-dark" onClick={handleBackClick}>
            Volver al Inicio
          </button>
        </div>
      </div>
    </section>
  );
};

AboutMars.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default AboutMars;
