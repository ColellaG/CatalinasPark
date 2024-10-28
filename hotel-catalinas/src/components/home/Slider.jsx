import React, { useEffect, useState } from "react";
import styles from "../../styles/components/home/Slider.module.css"; // Importa los estilos

const Slider = () => {
  const images = [
    "/@slider-images/Hotel Catalina (Slider - 1).jpeg",
    "/@slider-images/Hotel Catalina (Slider - 2).jpeg",
    "/@slider-images/Hotel Catalina (Slider - 3).jpeg",
    "/@slider-images/Hotel Catalina (Slider - 4).jpeg",
    "/@slider-images/Hotel Catalina (Slider - 5).jpeg",
    // Agrega más imágenes según sea necesario
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(true); // Muestra el texto inicialmente

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText(false); // Oculta el texto antes de cambiar la imagen

      // Cambia la imagen después de 1 segundo (500ms de fade-out + 500ms de espera)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowText(true); // Muestra el texto después de 500ms de mostrar la nueva imagen
      }, 1000); // Tiempo total para ocultar el texto y cambiar la imagen
    }, 3000); // Cambia la imagen cada 3 segundos

    // Muestra el texto después de 500ms de mostrar la imagen
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 500); // Tiempo para mostrar el texto

    return () => {
      clearInterval(intervalId); // Limpia el intervalo al desmontar
      clearTimeout(textTimeout); // Limpia el timeout del texto
    };
  }, [currentImageIndex]);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        <img
          src={images[currentImageIndex]}
          alt="Imagen del hotel"
          className={styles.slide}
        />
        {showText &&
          currentImageIndex === 0 && ( // Muestra el texto solo en la primera imagen
            <div className={styles.sliderText}>
              <h2>Bienvenidos a Hotel Catalinas Tucuman</h2>
              <p>
                Disfrute de una estancia inolvidable en el corazón de Tucumán
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Slider;
