import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.backgroundGlow}></div>
            <div className={`container ${styles.heroContainer}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Hello, I am
                    </motion.span>
                    <h1 className={styles.title}>
                        A Creative <br />
                        <span className="text-gradient">Frontend Developer</span>
                    </h1>
                    <p className={styles.subtitle}>
                        I build modern, interactive, and high-performance web applications.
                        Let's turn your ideas into functional realities.
                    </p>
                    <div className={styles.actions}>
                        <a href="#projects" className={styles.primaryBtn}>
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a href="/resume.pdf" className={styles.secondaryBtn}>
                            Download CV <Download size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
