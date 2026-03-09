import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';
import styles from './Projects.module.css';

interface ProjectType {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    time: string;
    availabilityNote?: string;
    challenge?: string;
    approach?: string;
    result?: string;
    demoInfoNote?: string;
}

const projects: ProjectType[] = [
    {
        title: '連絡帳管理システム',
        description: '中学校向けの連絡帳管理 Web アプリ。生徒の体調・メンタル・振り返りを記録し、担任が優先度順に状況を確認できるよう設計。共有メモや学年・学校向けダッシュボードまで実装。',
        tags: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'AWS', 'Terraform', 'Docker', 'GitHub Actions', 'CloudWatch', 'pytest'],
        github: 'https://github.com/hrkshz/school_diary',
        demo: 'https://d38tsdyews51a2.cloudfront.net/',
        time: '運用改善中',
        challenge: '5ロールの認可設計からインフラ構築・CI/CD・監視まで、開発と運用の両面を一人で設計・改善する。',
        approach: 'Django Templates をベースに、views / services / authorization を分けて責務を整理。Inbox Pattern、早期警告、共有メモ、ロールベース認可を組み合わせて、担任が見逃しにくい導線を設計した。インフラは Terraform の state 分離で再構築可能な設計とし、GitHub Actions では OIDC 認証でアクセスキーを使わないデプロイを構築した。',
        result: 'GitHub Actions によるデプロイパイプライン構築、CloudWatch アラーム重大度分類とダッシュボード整備、Terraform によるインフラ構成管理と運用品質の継続的な改善に取り組んでいる。',
        demoInfoNote: 'デモのログイン情報はソースコードの README に記載しています。',
    },
    {
        title: 'Plushie Forest（開発中）',
        description: '家族で遊べるクローズドSNSとして考え始めた、ぬいぐるみになりきるコミュニケーションアプリです。ぬいぐるみを通すと場の空気がやわらぎ、言いにくいことも少し伝えやすくなる感覚をヒントに、楽しく安心してやり取りできる体験を目指しています。',
        tags: ['React', 'TypeScript', 'Hono', 'PostgreSQL', 'Supabase', 'Kysely', 'Terraform', 'Docker'],
        github: 'https://github.com/hrkshz/PLUSHI-FOREST',
        demo: '',
        time: '開発中',
        challenge: '家族向けの小さな遊び場として、やわらかい空気を保ちながら、本音や弱音も出しやすい体験をどう作るかが課題でした。',
        approach: 'ぬいぐるみになりきることで気持ちを直接ぶつけすぎずに伝えられる体験を軸に、クローズドな場で安心してやり取りできるUIを検討。実装は React + Hono の Monorepo で進め、Supabase + Kysely による型安全なデータ設計と、Terraform を前提にした構成も合わせて整理しています。',
        result: 'コンセプトと画面体験を整理しながらMVPを実装中です。React + Hono をベースに、クローズドなコミュニケーションの土台を形にしています。',
    },
    {
        title: 'ポートフォリオサイト',
        description: 'このサイト。React + TypeScriptで制作。ダークモード、スクロールアニメーション対応。',
        tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'CSS Modules'],
        github: 'https://github.com/hrkshz/mysite',
        demo: '',
        time: '2h',
        challenge: '自分の経歴とスキルを分かりやすく伝えるサイトを作る。',
        approach: 'Framer Motionでアニメーション、CSS変数でダークモード切り替え、Vercelにデプロイ。',
        result: '継続的に改善中。',
    },
    {
        title: 'ポートフォリオテンプレート',
        description: '自己紹介用ポートフォリオサイトを、初学者や土台づくりに時間をかけたくない人向けに、Reactで作り始めやすく整理したテンプレートです。',
        tags: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Documentation'],
        github: 'https://github.com/hrkshz/Use-this-template',
        demo: '',
        time: '改善・整備',
        challenge: '初学者は自己紹介用ポートフォリオサイトの土台づくりで手が止まりやすく、本来注力すべきオリジナル制作に進む前に時間を使ってしまう。',
        approach: '編集箇所を集約し、README・編集ガイド・学習ガイドを用意して、初学者でも短時間で内容を差し替えながら進めやすい形にした。',
        result: '編集箇所を集約したテンプレートとガイドを用意し、自己紹介サイトの立ち上げ負荷を下げることで、初学者が本命のWebアプリ制作に時間を回しやすい土台を整えた。',
    },
];

const Projects: React.FC = () => {
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

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={`project-${index}`}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <div className={styles.content}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <div className={styles.timeBadge}>
                                        <Clock size={12} />
                                        <span>{project.time}</span>
                                    </div>
                                </div>
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
                                {project.demoInfoNote && (
                                    <p className={styles.demoInfoNote}>{project.demoInfoNote}</p>
                                )}
                                {project.availabilityNote && (
                                    <p className={styles.availabilityNote}>{project.availabilityNote}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
