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
    demoCredentials?: Array<{ label: string; value: string }>;
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
        demoCredentials: [
            { label: '生徒', value: 'student_1_a_01@example.com' },
            { label: '担任', value: 'teacher_1_a@example.com' },
            { label: '学年主任', value: 'grade_leader_1@example.com' },
            { label: '共通PW', value: 'password123' },
        ],
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
        description: '自作のポートフォリオサイトをもとに、職業訓練などで React を学んでいる人が、画面構成やデータの流れを追いながら自分用に直しやすい形へ整理したテンプレートです。',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'TypeScript', 'Vite', 'CSS Modules', 'Documentation'],
        github: 'https://github.com/hrkshz/Use-this-template',
        demo: '',
        time: '改善・整備',
        challenge: '職業訓練の受講者と話す中で、ポートフォリオサイトをどこから作ればいいか分からず、最初の土台づくりで手が止まる人が多いと感じました。本来は、自分の経歴や自分なりの課題をもとにした制作に時間を使えるほうがよいのに、そこに入る前で詰まりやすいのが課題でした。',
        approach: '表示データを一か所にまとめ、README・編集ガイド・学習ガイドを用意しました。完成形を配るだけでなく、React の構成を見ながら少しずつ自分用に変えられる形に整理しています。',
        result: 'ゼロから画面構成を考える負担を減らし、ポートフォリオ作成の入り口として使える土台にしました。見た目を整える前段で止まりにくくし、各自が本当に取り組みたい制作に時間を回しやすい形にまとめています。',
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
                                {project.demoCredentials && (
                                    <div className={styles.credentialsBox}>
                                        <p className={styles.credentialsTitle}>代表ログイン情報</p>
                                        <div className={styles.credentialsList}>
                                            {project.demoCredentials.map((credential, cIndex) => (
                                                <div key={cIndex} className={styles.credentialItem}>
                                                    <span className={styles.credentialLabel}>{credential.label}:</span>
                                                    <code className={styles.credentialValue}>{credential.value}</code>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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
