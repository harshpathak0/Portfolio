import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Star, Github, ExternalLink } from 'lucide-react';
import { projectsData, categoriesData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore my latest work showcasing innovative solutions and creative designs
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    className="flex flex-wrap gap-3 justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {categoriesData.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.button
                                key={category.id}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${filter === category.id
                                        ? 'bg-white text-gray-900 shadow-lg shadow-white/25'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFilter(category.id)}
                            >
                                <Icon className="w-4 h-4" />
                                {category.label}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    layout
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20">
                                        {project.category.toUpperCase()}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-gray-700/50 rounded-md text-xs font-medium text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-700/50 rounded-md text-xs font-medium text-gray-300">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {project.stats.views}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star className="w-4 h-4" />
                                            {project.stats.likes}
                                        </span>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
