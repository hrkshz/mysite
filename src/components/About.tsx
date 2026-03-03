import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Factory, Briefcase, HardHat, ShoppingBag, Calculator } from 'lucide-react';
import styles from './About.module.css';

interface Career {
    type: 'engineer' | 'general';
    icon: React.ReactNode;
    company: string;
    role: string;
    project?: string;
    desc: string;
    tasks?: string[];
    achievements?: string[];
    tech?: string;
}

const engineerCareers: Career[] = [
    {
        type: 'engineer',
        icon: <Server size={18} />,
        company: '会社A',
        role: 'インフラエンジニア',
        project: '金融機関 基幹システム RHEL8.4 EOL対応バージョンアップ',
        desc: 'RHEL8.4のEOLに伴い、金融機関の基幹システム（本番環境サーバー100台）のバージョンアップを実施。PM配下でプロジェクト推進を担当。',
        tasks: [
            '変更管理：100台規模のシステムバージョンアップのプロジェクト推進',
            '影響調査：ミドルウェアの洗い出し、互換性調査、基幹システムへの影響評価',
            'テスト管理：開発環境でのテスト計画策定・実施',
            'ステークホルダー調整：利用サービスとの影響調査、テスト実施依頼',
        ],
        achievements: [
            '重要案件において、徹底した影響調査とリスク評価により役職者の承認を取得',
            '利用サービスとの密な調整により、100台規模のバージョンアップを計画通りに遂行',
            '変更計画書、影響調査書、テスト計画書、プレゼン資料の作成',
        ],
        tech: 'AWS, Linux',
    },
    {
        type: 'engineer',
        icon: <Cloud size={18} />,
        company: '会社B',
        role: 'インフラエンジニア',
        project: 'オンプレミスからAWSへの大規模システム移行',
        desc: 'オンプレミス環境からAWSへの移行を中心に、複数の大規模プロジェクトに参画。',
        tasks: [
            'バックオフィス統合情報管理システム AlmaLinux移行（CentOS 7サポート終了に伴うOS移行、SELinux全サーバー有効化）',
            'バックオフィスシステム AWS移行（冗長構成設計、Direct Connect/VPC Peering構築）',
            'ポイントプラットフォームシステム AWS移行（マルチAZ構成、RDS/Redis冗長化）',
        ],
        tech: 'AWS (EC2, RDS, S3, EFS, CloudWatch, CloudTrail, IAM, VPC), Linux (CentOS, AlmaLinux), Apache, MySQL, SELinux',
    },
];

const generalCareers: Career[] = [
    {
        type: 'general',
        icon: <Calculator size={18} />,
        company: '企業（非公開）',
        role: '経理',
        desc: '資金繰り表の作成、会計ソフトへの入力、税理士対応を担当。',
    },
    {
        type: 'general',
        icon: <ShoppingBag size={18} />,
        company: '企業（非公開）',
        role: '生産管理・バイヤー',
        desc: 'バングラデシュに駐在し、生産管理および工場との交渉を担当。',
    },
    {
        type: 'general',
        icon: <HardHat size={18} />,
        company: '企業（非公開）',
        role: '現場監督',
        desc: '現場での顧客折衝、工程管理、各種資料の作成、現場管理を担当。',
    },
    {
        type: 'general',
        icon: <Briefcase size={18} />,
        company: '企業（非公開）',
        role: '営業・貿易事務',
        desc: '物流のコーディネート、貿易書類の作成を担当。',
    },
    {
        type: 'general',
        icon: <Factory size={18} />,
        company: '企業（非公開）',
        role: '製造工',
        desc: 'ライン作業にてエンジンのパーツ据え付けを担当。',
    },
];

const About: React.FC = () => {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>職務経歴 (Career)</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <div className={styles.timeline}>
                    {/* Engineer careers */}
                    <div className={styles.timelineSection}>
                        <p className={styles.timelineLabel}>エンジニアキャリア</p>
                        {engineerCareers.map((career, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.timelineItem} ${styles.engineer}`}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className={styles.timelineDot}>
                                    {career.icon}
                                </div>
                                <div className={styles.engineerCard}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.cardIcon}>{career.icon}</span>
                                        <div>
                                            <h3 className={styles.cardTitle}>{career.company}</h3>
                                            <span className={styles.cardRole}>{career.role}</span>
                                        </div>
                                    </div>
                                    {career.project && (
                                        <h4 className={styles.projectTitle}>{career.project}</h4>
                                    )}
                                    <p className={styles.cardDesc}>{career.desc}</p>

                                    {career.tasks && career.tasks.length > 0 && (
                                        <div className={styles.sectionBlock}>
                                            <span className={styles.sectionLabel}>【主な担当業務】</span>
                                            <ul className={styles.sectionList}>
                                                {career.tasks.map((task, i) => (
                                                    <li key={i}>{task}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {career.achievements && career.achievements.length > 0 && (
                                        <div className={styles.sectionBlock}>
                                            <span className={styles.sectionLabel}>【実績・成果】</span>
                                            <ul className={styles.sectionList}>
                                                {career.achievements.map((ach, i) => (
                                                    <li key={i}>{ach}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {career.tech && (
                                        <div className={styles.techBadge}>
                                            <strong>使用技術: </strong>{career.tech}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Non-engineer careers */}
                    <div className={styles.timelineSection}>
                        <p className={styles.timelineLabel}>それ以前のキャリア</p>
                        {generalCareers.map((career, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.timelineItem} ${styles.general}`}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                            >
                                <div className={styles.timelineDot}></div>
                                <div className={styles.generalCard}>
                                    <span className={styles.generalCardIcon}>{career.icon}</span>
                                    <div className={styles.generalCardBody}>
                                        <span className={styles.generalCardTitle}>{career.role}</span>
                                        <span className={styles.generalCardDesc}>{career.desc}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
