import React from "react";
import styles from "../../styles/components/layout/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; 2024 Hotel Catalinas Tucumán. Todos los derechos reservados.
        </p>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/">Inicio</a>
            </li>
            <li className={styles.navItem}>
              <a href="/about">Nosotros</a>
            </li>
            <li className={styles.navItem}>
              <a href="/contact">Contacto</a>
            </li>
            <li className={styles.navItem}>
              <a href="/privacy">Privacidad</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
