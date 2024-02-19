import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <NavLink to="/" className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Home</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Contact</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>About</NavLink>
        </div>
    )
}

export default Navbar;
