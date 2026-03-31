import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import styles from './Skills.module.css';

type Level = 1 | 2 | 3;

interface Skill {
    name: string;
    level: Level;
    detail?: string;
}

interface Certification {
    name: string;
    date: string;
}

const skillCategories: { title: string; skills: Skill[] }[] = [
    {
        title: 'インフラ・クラウド',
        skills: [
            {
                name: 'AWS インフラ運用・移行',
                level: 3,
                detail: 'EC2, RDS, VPC, S3, CloudFront, ALB',
            },
            {
                name: 'Linux サーバー運用',
                level: 3,
                detail: 'RHEL, CentOS, AlmaLinux',
            },
            {
                name: '監視・権限管理',
                level: 2,
                detail: 'CloudWatch, CloudTrail, IAM',
            },
            {
                name: '構成管理・自動化',
                level: 2,
                detail: 'CloudFormation, AWS Lambda (Node.js)',
            },
            { name: 'Terraform', level: 1 },
            { name: 'Docker', level: 1 },
            { name: 'Apache', level: 2 },
        ],
    },
    {
        title: 'アプリケーション開発',
        skills: [
            { name: 'Python / Django', level: 1 },
            { name: 'TypeScript / React', level: 1 },
            { name: 'HTML / CSS', level: 1 },
            { name: 'PostgreSQL', level: 1 },
            { name: 'Git', level: 1 },
        ],
    },
];

const certifications: Certification[] = [
    { name: 'ServiceNow CSA', date: '2026.03' },
    { name: 'AWS Solutions Architect - Professional', date: '2023.10' },
    { name: 'AWS SysOps Administrator - Associate', date: '2024.12' },
    { name: 'LinuC レベル2', date: '2024.08' },
    { name: 'Google サイバーセキュリティ プロフェッショナル', date: '2024.09' },
    { name: 'Google AI Essentials V1', date: '2024.09' },
    { name: '安全保障輸出管理実務能力認定 Associate', date: '2014.05' },
    { name: '貿易実務検定 C級', date: '2005.08' },
];

const levelLabels = ['学習中', '実務経験', '強み'];

const LevelDots: React.FC<{ level: Level }> = ({ level }) => (
    <div className={styles.levelDots} aria-label={`習熟度: ${levelLabels[level - 1]}`}>
        {[1, 2, 3].map(i => (
            <span key={i} className={`${styles.dot} ${i <= level ? styles.dotFilled : ''}`} />
        ))}
        <span className={styles.levelLabel}>{levelLabels[level - 1]}</span>
    </div>
);

const Skills: React.FC = () => {
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
                    <h2 className={styles.title}>スキル・資格</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <div className={styles.skillGrid}>
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
                            <div className={styles.skillList}>
                                {category.skills.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <div className={styles.skillText}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            {skill.detail && (
                                                <span className={styles.skillDetail}>{skill.detail}</span>
                                            )}
                                        </div>
                                        <LevelDots level={skill.level} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.certSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className={styles.certTitle}>
                        <Award size={22} /> 保有資格
                    </h3>
                    <div className={styles.certGrid}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className={styles.certCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                            >
                                <span className={styles.certName}>{cert.name}</span>
                                <span className={styles.certDate}>{cert.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
