import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';
import styles from './Projects.module.css';

interface ProjectType {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    time: string;
    featured?: boolean;
    challenge?: string;
    approach?: string;
    result?: string;
}

const projects: ProjectType[] = [
    {
        title: '連絡帳管理システム',
        description: '中学校向けの連絡帳アプリ。生徒が体調やメンタルを記録し、担任が確認・フィードバックする仕組み。5つの権限ロールに対応。',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
        tags: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'AWS', 'Terraform', 'Playwright'],
        github: 'https://github.com/hrkshz/school_diary',
        demo: 'https://d11e79eaa3tdud.cloudfront.net',
        time: '100h',
        featured: true,
        challenge: '権限の異なる5ロールが使う業務アプリを、インフラ含めてひとりで作り切る。',
        approach: 'Django + DRFでAPI、Bootstrap + Django Templatesで画面を実装。優先度で未読を分類するInbox Pattern、3日連続メンタル低下を検知する警告機能などを組み込み。インフラはTerraformで管理。',
        result: 'AWSにCloudFront / ALB / EC2 / RDS構成でデプロイ。pytest + Playwrightでテスト、Ruff + mypyで静的解析まで実施。',
    },
    {
        title: 'Plushie Forest（開発中）',
        description: '家族だけのクローズドSNS。ぬいぐるみのアバターを使って、役割を離れて気持ちを伝え合うアプリ。',
        image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'TypeScript', 'Hono', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
        github: 'https://github.com/hrkshz',
        demo: '',
        time: '開発中',
        challenge: 'フロントからバックエンドまで自分で設計・実装する。',
        approach: 'React 19 + TypeScriptとHono + Node.jsをMonorepo構成で開発。DBはPostgreSQL (Supabase)、開発環境はDocker Compose。',
        result: 'MVP実装を進行中。',
    },
    {
        title: 'ポートフォリオサイト',
        description: 'このサイト。React + TypeScriptで制作。ダークモード、スクロールアニメーション対応。',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'CSS Modules'],
        github: 'https://github.com/hrkshz/mysite',
        demo: 'https://mysite-git-main-hiroki0107-7181s-projects.vercel.app/',
        time: '2h',
        challenge: '自分の経歴とスキルを分かりやすく伝えるサイトを作る。',
        approach: 'Framer Motionでアニメーション、CSS変数でダークモード切り替え、Vercelにデプロイ。',
        result: '継続的に改善中。',
    },
];

const Projects: React.FC = () => {
    const featured = projects.filter(p => p.featured);
    const regular = projects.filter(p => !p.featured);

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
                    <h2 className={styles.title}>制作物</h2>

                    <div className={styles.line}></div>
                </motion.div>

                {/* Featured projects */}
                {featured.map((project, index) => (
                    <motion.div
                        key={`featured-${index}`}
                        className={styles.featuredCard}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.featuredImage}>
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                width={600}
                                height={400}
                            />
                            <div className={styles.timeBadge}>
                                <Clock size={12} />
                                <span>{project.time}</span>
                            </div>
                        </div>
                        <div className={styles.featuredContent}>
                            <h3 className={styles.featuredTitle}>{project.title}</h3>
                            <p className={styles.featuredDesc}>{project.description}</p>

                            {project.challenge && (
                                <div className={styles.caseStudy}>
                                    <div className={styles.caseItem}>
                                        <span className={styles.caseLabel}>課題</span>
                                        <p className={styles.caseText}>{project.challenge}</p>
                                    </div>
                                    <div className={styles.caseItem}>
                                        <span className={styles.caseLabel}>アプローチ</span>
                                        <p className={styles.caseText}>{project.approach}</p>
                                    </div>
                                    <div className={styles.caseItem}>
                                        <span className={styles.caseLabel}>成果</span>
                                        <p className={styles.caseText}>{project.result}</p>
                                    </div>
                                </div>
                            )}

                            <div className={styles.tags}>
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <div className={styles.visibleActionLinks}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                                    <Github size={16} /> ソースコード
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtnPrimary}>
                                        <ExternalLink size={16} /> デモサイトを見る
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Regular projects */}
                {regular.length > 0 && (
                    <div className={styles.grid}>
                        {regular.map((project, index) => (
                            <motion.div
                                key={`regular-${index}`}
                                className={styles.card}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            >
                                <div className={styles.imageContainer}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={styles.image}
                                        loading="lazy"
                                        width={500}
                                        height={220}
                                    />
                                    <div className={styles.timeBadge}>
                                        <Clock size={12} />
                                        <span>{project.time}</span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDesc}>{project.description}</p>

                                    {project.challenge && (
                                        <div className={styles.caseStudyCompact}>
                                            <div className={styles.caseItemCompact}>
                                                <span className={styles.caseLabelCompact}>課題:</span>
                                                <span className={styles.caseTextCompact}>{project.challenge}</span>
                                            </div>
                                            <div className={styles.caseItemCompact}>
                                                <span className={styles.caseLabelCompact}>成果:</span>
                                                <span className={styles.caseTextCompact}>{project.result}</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className={styles.tags}>
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className={styles.visibleActionLinks}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                                            <Github size={16} /> ソースコード
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtnPrimary}>
                                                <ExternalLink size={16} /> デモを見る
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
