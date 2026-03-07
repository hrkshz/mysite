import React from 'react';
import { BookOpenText, Github } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Hiroki Shinzato
                </p>
                <div className={styles.links}>
                    <a href="https://zenn.dev/shz" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <BookOpenText size={16} /> Zenn
                    </a>
                    <a href="https://github.com/hrkshz" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <Github size={16} /> GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
