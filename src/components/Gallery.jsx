// components/Gallery.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import nasaGallery from '../data/galleryImages';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = ({ darkMode }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  const handleBackClick = () => {
    window.location.href = "/"; // Redirige al inicio
  };

  return (
    <>
      <div className={`container gallery-grid ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}           
          data-aos="zoom-in" 
          data-aos-duration="3000"
          data-aos-easing="ease-in-out" >
        {nasaGallery.map(({ id, href, description }, index) => (
          <div key={id || index} className="gallery-item">
            <div className="card floating-container h-100">
              <div className="position-relative overflow-hidden h-100">
                <img
                  src={href}
                  className="card-img-top img-fluid gallery-image"
                  alt={`Imagen de Marte ${index + 1}`}
                />
                <div className="card-img-overlay d-flex align-items-end">
                  <div className="image-info p-3 w-100">
                    <p className="card-text small mb-0">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Contenedor para el botón */}
      <div className="container back-button-container">
        <button className="btn btn-back bg-dark" onClick={handleBackClick}>
          Volver al Inicio
        </button>
      </div>
    </>
  );
};

Gallery.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Gallery;