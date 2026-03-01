import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200%20L60%2030%20L30%2060%20L0%2030%20Z%22%20fill%3D%22rgba(255%2C255%2C255%2C0.03)%22%2F%3E%3C%2Fsvg%3E')]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's Create Something Amazing
                </motion.h2>

                <motion.p
                    className="text-xl text-white/80 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.a
                        href="mailto:harshpathak9691@gmail.com"
                        className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-lg hover:shadow-white/25 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail className="w-5 h-5" />
                        Get In Touch
                    </motion.a>

                    <div className="flex gap-3">
                        {[
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/harsh-pathak-b672a5212" },
                            { Icon: Github, href: "https://github.com/harshpathak0" },
                            { Icon: Twitter, href: "https://x.com/HarshPathak96" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all border border-white/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
