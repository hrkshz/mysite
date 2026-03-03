import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'インフラ・クラウド (Infrastructure & Cloud)',
            skills: ['AWS (EC2, RDS, VPC, S3)', 'Linux (RHEL, CentOS, AlmaLinux)', 'Apache', 'MySQL', 'SELinux']
        },
        {
            title: 'フロントエンド・その他 (Frontend & Tools)',
            skills: ['React', 'TypeScript', 'Vite', 'HTML/CSS', 'Git', 'Vercel']
        },
        {
            title: '保有資格 (Qualifications)',
            skills: [
                'AWS Certified Solutions Architect - Professional (2023年10月)',
                'AWS Certified SysOps Administrator - Associate (2024年12月)',
                'LinuC レベル2 (2024年8月)',
                'Google サイバーセキュリティ プロフェッショナル (2024年9月)',
                'Google AI Essentials V1 (2024年9月)',
                '貿易実務検定 C級 (2005年8月)',
                '安全保障輸出管理実務能力認定試験 Associate (2014年5月)',
                'ServiceNow CSA (取得予定)'
            ]
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
                    <h2 className={styles.title}>スキル・資格 (Skills & Qualifications)</h2>
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
