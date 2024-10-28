import React from "react";
import styles from "../../styles/components//layout/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/reservations">Reservas</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
