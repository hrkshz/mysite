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
                        <li><a href="#about" className={styles.navLink}>経歴</a></li>
                        <li><a href="#projects" className={styles.navLink}>プロジェクト</a></li>
                        <li><a href="#skills" className={styles.navLink}>スキル・資格</a></li>
                        <li><a href="#contact" className={styles.navLink}>基本情報</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
