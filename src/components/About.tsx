import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
    const careers = [
        {
            icon: <Server size={24} className={styles.icon} />,
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
                '変更計画書、影響調査書、テスト計画書、プレゼン資料の作成'
            ],
            tech: 'AWS, Linux'
        },
        {
            icon: <Cloud size={24} className={styles.icon} />,
            company: '会社B',
            role: 'インフラエンジニア',
            project: 'オンプレミスからAWSへの大規模システム移行',
            desc: 'オンプレミス環境からAWSへの移行を中心に、複数の大規模プロジェクトに参画。',
            tasks: [
                'バックオフィス統合情報管理システム AlmaLinux移行（CentOS 7サポート終了に伴うOS移行、SELinux全サーバー有効化）',
                'バックオフィスシステム AWS移行（冗長構成設計、Direct Connect/VPC Peering構築）',
                'ポイントプラットフォームシステム AWS移行（マルチAZ構成、RDS/Redis冗長化）'
            ],
            achievements: [],
            tech: 'AWS (EC2, RDS, S3, EFS, CloudWatch, CloudTrail, IAM, VPC), Linux (CentOS, AlmaLinux), Apache, MySQL, SELinux'
        }
    ];

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

                <div className={styles.grid}>
                    <div className={styles.cards} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                        {careers.map((career, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                style={{ width: '100%', maxWidth: 'none', textAlign: 'left', alignItems: 'flex-start' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    {career.icon}
                                    <div>
                                        <h3 className={styles.cardTitle} style={{ margin: 0 }}>{career.company}</h3>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>{career.role}</span>
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{career.project}</h4>
                                <p className={styles.cardDesc} style={{ marginBottom: '1rem' }}>{career.desc}</p>

                                <div style={{ marginBottom: '1rem' }}>
                                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>【主な担当業務】</strong>
                                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-tertiary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                        {career.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                    </ul>
                                </div>

                                {career.achievements.length > 0 && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <strong style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>【実績・成果】</strong>
                                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-tertiary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                            {career.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                        </ul>
                                    </div>
                                )}

                                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', width: '100%' }}>
                                    <strong style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>使用技術: </strong>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{career.tech}</span>
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
