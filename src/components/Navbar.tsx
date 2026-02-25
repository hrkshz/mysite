import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
    scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
    const isScrolled = scrollY > 50;

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <a href="#" className={styles.logo}>
                    <span className="text-gradient">Portfolio.</span>
                </a>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href="#about" className={styles.navLink}>About</a></li>
                        <li><a href="#projects" className={styles.navLink}>Projects</a></li>
                        <li><a href="#skills" className={styles.navLink}>Skills</a></li>
                        <li><a href="#contact" className={styles.navLink}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
