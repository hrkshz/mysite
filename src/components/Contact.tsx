import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for form submission would go here
        alert("Thanks for your message! This is a demo form.");
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
                    <h2 className={styles.title}>Get In Touch</h2>
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
                        <h3 className={styles.subtitle}>Let's talk about everything!</h3>
                        <p className={styles.desc}>
                            Don't like forms? Send me an email. 👋
                        </p>

                        <div className={styles.contactItems}>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>Email</span>
                                    <a href="mailto:hello@example.com" className={styles.itemLink}>hello@example.com</a>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>Phone</span>
                                    <a href="tel:+1234567890" className={styles.itemLink}>+1 (234) 567-890</a>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className={styles.itemTitle}>Location</span>
                                    <span className={styles.itemDesc}>Tokyo, Japan</span>
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
                            <input type="text" placeholder="Your Name" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="email" placeholder="Email Address" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <input type="text" placeholder="Subject" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea placeholder="Message" rows={5} className={styles.textarea} required></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
