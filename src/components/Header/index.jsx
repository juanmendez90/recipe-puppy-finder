import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.scss';

const Header = () => (
  <header className={styles.header}>
    <span className={styles.title}>Recipe finder</span>
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
