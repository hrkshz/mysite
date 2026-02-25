import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Layout } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
    const cards = [
        {
            icon: <Code2 size={24} className={styles.icon} />,
            title: 'Frontend Development',
            description: 'Building responsive and interactive user interfaces using modern frameworks like React and Vue.'
        },
        {
            icon: <Layout size={24} className={styles.icon} />,
            title: 'UI/UX Design',
            description: 'Creating intuitive and accessible designs that provide great user experiences.'
        },
        {
            icon: <PenTool size={24} className={styles.icon} />,
            title: 'Creative Coding',
            description: 'Implementing complex animations and interactive experiences using WebGL and CSS.'
        }
    ];

    return (
        <section className={styles.about} id="about">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>About Me</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className={styles.text}>
                            I'm a passionate developer with a keen eye for design. With several years of experience in web development, I bridge the gap between aesthetics and functionality.
                        </p>
                        <p className={styles.text}>
                            My journey started with simple HTML/CSS and has evolved into building complex single-page applications. I enjoy learning new technologies and constantly pushing the boundaries of what's possible on the web.
                        </p>
                    </motion.div>

                    <div className={styles.cards}>
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                {card.icon}
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
