// App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground"; // Nuevo
import AboutMars from "./components/AboutMars"; // Nuevo
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

// Importamos los archivos de medios
import videoFile from "./assets/mars-video.mp4"
import marsImage from "./assets/images/martePathfinder.jpg";

function App() {
  const [language, setLanguage] = useState("es"); // Estado para el idioma
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro

  // Función para cambiar el idioma
  const toggleLanguage = (lang) => {
    console.log("Cambiando idioma a:", lang);
    setLanguage(lang);
  };

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Aplica la clase al body
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar con opciones de idioma y modo oscuro */}
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main>
        {/* Sección con video de fondo */}
        <VideoBackground videoSrc={videoFile} language={language} />

        {/* Sección "Nosotros" */}
        <AboutMars imageSrc={marsImage} language={language} />

        {/* Galería de imágenes */}
        <Gallery darkMode={darkMode} />
      </main>

      {/* Footer con idioma */}
      <Footer language={language} />
    </div>
  );
}

export default App;


