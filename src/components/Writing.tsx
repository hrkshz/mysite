import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenText, ExternalLink, FileText } from 'lucide-react';
import styles from './Writing.module.css';

const Writing: React.FC = () => {
    return (
        <section className={styles.writing} id="writing">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>技術発信</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className={styles.cardHeader}>
                        <div className={styles.iconBox}>
                            <BookOpenText size={24} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>Zenn</h3>
                            <p className={styles.cardLead}>
                                AWS / Terraform / Linux などの学習記録や検証内容を公開しています。
                            </p>
                        </div>
                    </div>

                    <p className={styles.bodyText}>
                        技術記事として外に出すことで、学習内容を整理しながら理解を深めています。今後は ServiceNow の学習記録や、
                        AWS 上のシステムと PDI 接続の検証内容も残していく予定です。
                    </p>

                    <div className={styles.topicGrid}>
                        <div className={styles.topicCard}>
                            <FileText size={18} />
                            <div>
                                <p className={styles.topicTitle}>公開中のテーマ</p>
                                <p className={styles.topicText}>AWS、Terraform、Linux、ミドルウェア設定のメモや検証記録</p>
                            </div>
                        </div>
                        <div className={styles.topicCard}>
                            <FileText size={18} />
                            <div>
                                <p className={styles.topicTitle}>今後の発信予定</p>
                                <p className={styles.topicText}>ServiceNow 学習、PDI 連携、構成検証の記録</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://zenn.dev/shz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkBtn}
                    >
                        Zenn プロフィールを見る <ExternalLink size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Writing;
