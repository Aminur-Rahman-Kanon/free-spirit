import React from 'react';
import styles from './navbar.module.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <NavLink to="/" className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Home</NavLink>
            <div className={styles.blogs} id={styles.pLink}>
                <span className={styles.parentLink}>Blogs</span>
                <ul className={styles.childLinkContainer}>
                    <li className={styles.childLinks}>
                        <Link to={'/blog/Who Are You'} className={styles.childLink}>Who are you</Link>
                    </li>
                    <li className={styles.childLinks}>
                        <Link to={'/blog/What is the aim of your life'} className={styles.childLink}>Aim of your life</Link>
                    </li>
                    <li className={styles.childLinks}>
                        <Link to={'/blog/Worriors of Islam'} className={styles.childLink}>Worriors of Islam</Link>
                    </li>
                    {/* <li className={styles.childLinks}>
                        <Link to={'/blog/Deceitiful Leaders'} className={styles.childLink}>Deceitiful Leaders</Link>
                    </li> */}
                </ul>
            </div>
            <NavLink to="/contact" className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>Contact</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? `${styles.navlink} ${styles.active}` : styles.navlink}>About</NavLink>
        </div>
    )
}

export default Navbar;
