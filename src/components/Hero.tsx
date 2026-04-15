import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import styles from './Hero.module.css';

const heroHighlights = ['インフラ運用', 'AWS移行', 'セキュリティ・運用改善'];

const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.backgroundGlow}></div>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        こんにちは、
                    </motion.span>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <ruby><span className="text-gradient">新里 浩己</span><rt className={styles.furigana}>しんざと ひろき</rt></ruby> です。
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        インフラ運用・AWS移行の実務経験を土台に、
                        クラウド運用、セキュリティ、業務改善・DX推進に取り組んでいます。
                    </motion.p>
                    <motion.div
                        className={styles.highlightList}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        {heroHighlights.map((highlight) => (
                            <span key={highlight} className={styles.statusBadge}>
                                {highlight}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.45 }}
                    >
                        <motion.a href="#projects" className={styles.primaryBtn} whileTap={{ scale: 0.97 }}>
                            制作物を見る <ArrowRight size={18} />
                        </motion.a>
                        <motion.a href="#about" className={styles.secondaryBtn} whileTap={{ scale: 0.97 }}>
                            経歴と実績を見る <BookOpen size={18} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
