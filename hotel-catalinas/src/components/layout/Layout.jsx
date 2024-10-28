import React from "react";
import Slider from "../home/Slider";
import Gallery from "../home/Gallery";
import styles from "../../styles/components//layout/Layout.module.css"; // Asegúrate de importar los estilos
import About from "../home/About";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Slider />
      <About />
      <Gallery />
    </div>
  );
};

export default Layout;
