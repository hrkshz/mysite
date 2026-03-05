import React from 'react';
import { Github } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Hiroki Shinzato
                </p>
                <a href="https://github.com/hrkshz" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Github size={16} /> GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
