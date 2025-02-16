// components/VideoBackground.jsx
import { useEffect } from "react";
import PropTypes from "prop-types";
import "./VideoBackground.css";
import AOS from "aos";
import 'aos/dist/aos.css';

const VideoBackground = ({ videoSrc, language }) => {
  const titles = {
    es: "Marte, el Planeta Rojo",
    en: "Mars, the Red Planet",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: -100, // Valor negativo para activar antes de entrar al viewport
      mirror: false,
      startEvent: 'DOMContentLoaded', // Dispara al cargar el DOM
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
  
    // Espera a que se renderice el componente
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <div className="container-fluid video-section min-vh-100">
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1 
          className="video-title"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-once="true"
        >
          {titles[language]}
        </h1>
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default VideoBackground;