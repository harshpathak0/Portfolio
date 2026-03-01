import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../data/portfolioData';

const Stats = () => {
    return (
        <section className="py-20 bg-gray-800/50 backdrop-blur-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <Icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
