import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = ({ children }: { children: React.ReactNode }) => {
  const setActiveStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.activeMenuItem : styles.inActiveMenuItem;

  const navItemOnClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        {children}
        <ul className={styles.menu}>
          <li>
            <NavLink
              className={setActiveStyle}
              onClick={(e) => navItemOnClick(e, 'http://localhost:4000/')}
              to="/"
            >
              Host
            </NavLink>
            <NavLink
              className={setActiveStyle}
              onClick={(e) => navItemOnClick(e, 'http://localhost:4300/')}
              to="/"
            >
              Remote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
