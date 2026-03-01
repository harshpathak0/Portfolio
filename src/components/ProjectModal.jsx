import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        className="relative max-w-4xl w-full bg-gray-800 rounded-2xl overflow-hidden cursor-default max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-gray-300 mb-6">{project.description}</p>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                            </div>
                        </div>

                        <button
                            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors text-white"
                            onClick={onClose}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
