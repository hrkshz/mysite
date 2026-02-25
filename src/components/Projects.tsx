import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
    const projects = [
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
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task manager with real-time updates via WebSockets and drag-and-drop functionality.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
            tags: ['Vue.js', 'Firebase', 'CSS Modules'],
            github: '#',
            demo: '#'
        }
    ];

    return (
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
                                        <a href={project.github} className={styles.iconLink} aria-label="GitHub Repository">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} className={styles.iconLink} aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
