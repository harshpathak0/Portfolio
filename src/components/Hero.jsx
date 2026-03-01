import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20d%3D%22M30%200%20L60%2030%20L30%2060%20L0%2030%20Z%22%20fill%3D%22rgba(255%2C255%2C255%2C0.03)%22%2F%3E%3C%2Fsvg%3E')] opacity-20" />

                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-white/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm font-medium">Welcome to my creative space</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Harsh Pathak
                        <span className="text-gradient block mt-2">Full Stack Developer</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        I'm a full-stack developer passionate about building exceptional digital products
                        that combine beautiful design with powerful functionality.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.button
                            className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View My Work
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                                initial={{ x: '100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>

                        <motion.button
                            className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
