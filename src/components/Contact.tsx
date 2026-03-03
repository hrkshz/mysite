import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, User } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for form submission would go here
        alert("お問い合わせありがとうございます。（デモ用のフォームです）");
    };

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>基本情報・お問い合わせ</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.subtitle}>お気軽にお問い合わせください</h3>
                        <p className={styles.desc}>
                            フォームまたはメールにてご連絡をお待ちしております。
                        </p>

                        <div className={styles.contactItems}>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <User size={20} />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>お名前 / 生年月日</span>
                                    <span className={styles.itemDesc}>新里 浩己 (1985年1月7日生)</span>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>メールアドレス</span>
                                    <a href="mailto:hiroki0107@gmail.com" className={styles.itemLink}>hiroki0107@gmail.com</a>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>住所</span>
                                    <span className={styles.itemDesc}>埼玉県所沢市</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="お名前" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="email" placeholder="メールアドレス" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="件名" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea placeholder="メッセージ" rows={5} className={styles.textarea} required></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            送信する <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
