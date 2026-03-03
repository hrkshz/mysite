import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
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
                        こんにちは、
                    </motion.span>
                    <h1 className={styles.title}>
                        <span className="text-gradient">新里 浩己</span> です。
                    </h1>
                    <p className={styles.subtitle}>
                        インフラエンジニアとして培ってきた大規模システムの構築・運用経験を活かし、
                        現在はモダンなフロントエンド技術を用いたWebアプリケーション開発にも挑戦しています。
                    </p>
                    <div className={styles.actions}>
                        <a href="#projects" className={styles.primaryBtn}>
                            制作物を見る <ArrowRight size={18} />
                        </a>
                        <a href="#about" className={styles.secondaryBtn}>
                            経歴を見る <BookOpen size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
