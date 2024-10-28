import React, { useEffect, useState } from "react";
import styles from "../../styles/components/home/Gallery.module.css";

const allImages = [
  "/@gallery-images/Hotel%20Catalina%20(52).jpg",
  "/@gallery-images/Hotel%20Catalina%20(55).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(56).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(63).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(67).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(72).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(75).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(106).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(110).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(116).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(117).jpeg",
  "/@gallery-images/Hotel%20Catalina%20(119).jpeg",
];

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Selecciona aleatoriamente 5 imágenes únicas al inicio
    const uniqueImages = new Set();
    while (uniqueImages.size < 5) {
      const randomIndex = Math.floor(Math.random() * allImages.length);
      uniqueImages.add(allImages[randomIndex]);
    }
    setImages(Array.from(uniqueImages)); // Convierte el Set a un Array
  }, []);

  useEffect(() => {
    // Reemplaza imágenes cada 200 ms
    const intervalId = setInterval(() => {
      setImages((prevImages) => {
        return prevImages.map((image, index) => {
          if (index === 0) return image; // Mantiene la imagen grande
          let newImage;
          do {
            const randomIndex = Math.floor(Math.random() * allImages.length);
            newImage = allImages[randomIndex];
          } while (prevImages.includes(newImage)); // Asegura que la nueva imagen no esté ya en la lista
          return newImage; // Reemplaza la imagen actual con una nueva
        });
      });
    }, 2600);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.gallery}>
      <div className={styles.largeImage}>
        <img src={images[0]} alt="Imagen Grande" />
      </div>
      <div className={styles.smallImages}>
        {images.slice(1).map((image, index) => (
          <div className={styles.smallImage} key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
