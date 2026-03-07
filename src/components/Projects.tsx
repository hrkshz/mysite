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
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
        tags: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'AWS', 'Terraform', 'pytest'],
        github: 'https://github.com/hrkshz/school_diary',
        demo: 'https://d11e79eaa3tdud.cloudfront.net',
        time: '100h',
        challenge: '5ロールを持つ学校向け業務アプリを、認可・状態管理・ダッシュボード・公開構成まで含めて整理して実装する。',
        approach: 'Django Templates をベースに、views / services / authorization を分けて責務を整理。Inbox Pattern、早期警告、共有メモ、ロールベース認可を組み合わせて、担任が見逃しにくい導線を設計した。',
        result: 'AWS/Terraform で CloudFront / ALB / EC2 / RDS 構成を構築し、pytest を中心にテストを整備。Ruff・mypy による静的解析も取り入れた。',
        demoInfoNote: 'デモのログイン情報はソースコードの README に記載しています。',
    },
    {
        title: 'Plushie Forest（開発中）',
        description: '家族だけのクローズドSNS。好きなぬいぐるみになって会話することで、夫・妻・親・子といった役割から少し離れ、直接だと強くなりやすい言葉や弱音もやわらかく伝えやすくすることを目指したアプリ。遊び心のある“なりきり”を入口に、安心して気持ちを出しやすいコミュニケーションの形を考えています。',
        image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'TypeScript', 'Hono', 'PostgreSQL', 'Supabase', 'Kysely', 'Terraform', 'Docker'],
        github: 'https://github.com/hrkshz/PLUSHI-FOREST',
        demo: '',
        time: '開発中',
        availabilityNote: '現在は GitHub を private にしており、デモ公開も控えています。転職活動時には公開予定です。',
        challenge: '家族の近い関係性では、直接だと強く聞こえる言葉や弱音が出しにくく、気持ちをやわらかく伝えられる場をどう設計するかが課題でした。',
        approach: 'ぬいぐるみになりきる体験を入口に、役割から少し距離を取って話せるUIを設計。実装はReact + HonoのMonorepoで進め、Supabase + Kyselyによる型安全なDB設計と、Terraformを前提にしたインフラ構成も検討しています。',
        result: 'コンセプト、画面体験、技術方針をドキュメント化しながらMVPを実装中。遊び心と安心感のあるコミュニケーション設計を形にしています。',
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
    {
        title: 'ポートフォリオテンプレート',
        description: '自己紹介用のポートフォリオサイトを、React の画面構成やデータの流れを追いながら自分用に直しやすくしたテンプレートです。',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Documentation'],
        github: 'https://github.com/hrkshz/Use-this-template',
        demo: '',
        time: '改善・整備',
        challenge: '職業訓練の受講者と話す中で、自己紹介用のポートフォリオサイトをどこから作ればいいか分からず、その土台づくりで止まる人がいると感じました。本来は、ポートフォリオとして載せるオリジナル Web アプリや、自分の経験から考えた課題に向き合う制作に時間を使えるほうがよいのに、そこへ進む前に時間を取られやすいのが課題でした。',
        approach: '表示データを一か所にまとめ、README・編集ガイド・学習ガイドを用意しました。自己紹介サイトのベースを先に作りつつ、React の構成を見ながら自分の内容に置き換えやすい形にしています。',
        result: '自己紹介用ポートフォリオサイトをゼロから組む負担を減らし、ポートフォリオとして載せる Web アプリ制作に時間を回しやすい土台にしました。',
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
