import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

interface ProjectType {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    demo: string;
}

const Projects: React.FC = () => {
    const projects: ProjectType[] = [
        {
            title: '学校日誌アプリケーション (School Diary)',
            description: 'モダンなWeb開発のベストプラクティス、クリーンなUIデザイン、レスポンシブなレイアウトを取り入れた包括的な学校日誌アプリケーションです。',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
            tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
            github: 'https://github.com/hrkshz/school_diary',
            demo: 'https://d11e79eaa3tdud.cloudfront.net'
        }
    ];

    return (
        <>
            <section className={styles.projects} id="projects">
                <div className="container">
                    <motion.div
                        className={styles.header}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.title}>制作物 (Works)</h2>
                        <div className={styles.line}></div>
                    </motion.div>

                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            >
                                <div className={styles.imageContainer}>
                                    <img src={project.image} alt={project.title} className={styles.image} />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDesc}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className={styles.visibleActionLinks}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                                            <Github size={16} /> GitHubを開く
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtnPrimary}>
                                            <ExternalLink size={16} /> デモサイトを見る
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
};

export default Projects;
