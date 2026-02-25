import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React', 'TypeScript', 'Next.js', 'Vue', 'Tailwind CSS', 'Framer Motion']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
        },
        {
            title: 'Tools & Other',
            skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma', 'Jest']
        }
    ];

    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>My Skills</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <div className={styles.grid}>
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className={styles.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillTags}>
                                {category.skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className={styles.tag}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
