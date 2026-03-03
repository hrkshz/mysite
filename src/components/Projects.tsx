import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import styles from './Projects.module.css';
import CodeViewer from './CodeViewer';

const Projects: React.FC = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const projects = [
        {
            title: 'School Diary Application',
            description: 'A comprehensive school diary application showcasing modern web development practices, clean UI design, and responsive layouts.',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
            tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
            isPrivateCode: true,
            demo: 'https://d11e79eaa3tdud.cloudfront.net'
        },
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with Next.js, Stripe integration, and a custom CMS dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
            tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
            github: '#',
            demo: '#'
        },
        {
            title: 'AI Dashboard',
            description: 'Analytics dashboard featuring AI-driven insights and interactive charting using D3.js and React.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
            tags: ['React', 'D3.js', 'Node.js', 'Express'],
            github: '#',
            demo: '#'
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
                        <h2 className={styles.title}>Featured Projects</h2>
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
                                    <div className={styles.overlay}>
                                        <div className={styles.links}>
                                            {project.isPrivateCode ? (
                                                <button onClick={() => setIsViewerOpen(true)} className={styles.iconLink} aria-label="View Private Source Code">
                                                    <Lock size={20} />
                                                </button>
                                            ) : (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub Repository">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Live Demo">
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>
                                    <img src={project.image} alt={project.title} className={styles.image} />
                                    {project.isPrivateCode && (
                                        <div className={styles.privateBadge}>
                                            <Lock size={12} className={styles.lockIcon} /> Private Repo
                                        </div>
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDesc}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CodeViewer
                isOpen={isViewerOpen}
                onClose={() => setIsViewerOpen(false)}
                projectName="School Diary API & Source"
            />
        </>
    );
};

export default Projects;
