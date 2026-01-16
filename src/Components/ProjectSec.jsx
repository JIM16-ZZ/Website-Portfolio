import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layers, Cpu, Rocket, ChevronRight, Award, Globe } from 'lucide-react';

const projects = [
    {
        title: "PARKompanion",
        subtitle: "YOLO V8-based Vehicle Monitoring System",
        description: "Real-time parking management system using Artificial Intelligence for vehicle plate detection and parking assistance at UCLM.",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "YOLO V8", "Paddle OCR", "NVidia Cuda", "Figma"],
        type: "Thesis Design Project",
        icon: Layers,
        color: "from-violet-500 to-purple-600",
        featured: true
    },
    {
        title: "Automated College Diploma Generator",
        subtitle: "University of Cebu Lapu-Lapu and Mandaue",
        description: "Software solution for College Records Section to automate diploma generation process.",
        technologies: ["C#", "MSSQL"],
        type: "Software Development",
        icon: Code2,
        color: "from-teal-500 to-cyan-500"
    },
    {
        title: "Campus Information Systems",
        subtitle: "University of Cebu Lapu-Lapu and Mandaue",
        description: "Maintained and enhanced campus information systems including debugging, feature additions, and query optimization.",
        technologies: ["C#", "MSSQL"],
        type: "Software Development",
        icon: Code2,
        color: "from-blue-500 to-indigo-500"
    },
    {
        title: "Automated Library Statistics Report",
        subtitle: "University of Cebu Lapu-Lapu and Mandaue",
        description: "Real-time reporting system for the Library Department to track and analyze statistics.",
        technologies: ["C#", "MSSQL", "Excel"],
        type: "Software Development",
        icon: Code2,
        color: "from-emerald-500 to-green-500"
    },
    {
        title: "Order and Billing Management System",
        subtitle: "Kristal Kaye Trading",
        description: "Complete billing and order management solution for sales, product purchases, and invoicing.",
        technologies: ["Java", "MySQL"],
        type: "Software Development",
        icon: Code2,
        color: "from-orange-500 to-amber-500"
    },
    {
        title: "Reservation Management System",
        subtitle: "Canjulao Private Pool",
        description: "Booking and accommodation management system for pool reservations.",
        technologies: ["C#", ".NET MVC", "HTML", "CSS", "MySQL"],
        type: "System Analysis & Design",
        icon: Layers,
        color: "from-rose-500 to-pink-500"
    },
    {
        title: "IOT Water Tank Level Detector",
        subtitle: "Embedded Systems Project",
        description: "Water level monitoring system with mobile application for real-time level detection.",
        technologies: ["MIT App Inventor", "Arduino IDE"],
        type: "Embedded Systems",
        icon: Cpu,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "UCLM College of Engineering Website",
        subtitle: "Course Project",
        description: "Showcase department's offerings including degree programs, research initiatives, and student resources for prospective and current engineering students.",
        technologies: ["HTML", "CSS", "JavaScript", "Canva"],
        type: "Web Development",
        icon: Globe,
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Smart Home Lighting Automation (Village Miniature)",
        subtitle: "Side Project",
        description: "Miniature smart home system with automated lighting control using sensors.",
        technologies: ["Arduino IDE", "Electronic Sensors", "Fairy Lights"],
        type: "Hardware Programming",
        icon: Cpu,
        color: "from-amber-500 to-yellow-500"
    }
];

export default function ProjectsSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [filter, setFilter] = useState('all');

    const projectTypes = ['all', 'Software Development', 'Embedded Systems', 'Thesis Design Project', 'System Analysis & Design', 'Hardware Programming'];
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.type === filter);

    return (
        <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            {/* Animated orbs */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4"
                    >
                        <span className="flex items-center gap-2">
                            <Rocket className="w-4 h-4" />
                            Portfolio
                        </span>
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Projects Implemented
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A showcase of systems and applications built for educational institutions 
                        and businesses.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {projectTypes.map((type) => (
                        <motion.button
                            key={type}
                            onClick={() => setFilter(type)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                                filter === type
                                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30'
                                    : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600 hover:text-slate-300'
                            }`}
                        >
                            {type === 'all' ? 'All Projects' : type}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 flex flex-col">
                                    {/* Featured badge */}
                                    {project.featured && (
                                        <div className="absolute -top-3 -right-3">
                                            <motion.div
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                                            >
                                                <Award className="w-3 h-3" />
                                                Featured
                                            </motion.div>
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <motion.div 
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <project.icon className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <span className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1.5 rounded-lg font-medium">
                                            {project.type}
                                        </span>
                                    </div>
                                    
                                    {/* Content */}
                                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-teal-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-teal-400 text-sm mb-3 font-medium">{project.subtitle}</p>
                                    <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.08 + techIndex * 0.03 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 hover:text-teal-400 hover:border hover:border-teal-500/30 transition-all cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Hover indicator */}
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="absolute bottom-4 right-4"
                                            >
                                                <ChevronRight className="w-5 h-5 text-teal-400" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Decorative corner */}
                                    <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${project.color} opacity-5 rounded-tl-3xl rounded-br-2xl group-hover:opacity-10 transition-opacity`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: "Total Projects", value: projects.length, color: "from-teal-400 to-cyan-400" },
                        { label: "Software Dev", value: projects.filter(p => p.type === 'Software Development').length, color: "from-blue-400 to-indigo-400" },
                        { label: "Embedded Systems", value: projects.filter(p => p.type.includes('Embedded') || p.type.includes('Hardware')).length, color: "from-violet-400 to-purple-400" },
                        { label: "Technologies Used", value: [...new Set(projects.flatMap(p => p.technologies))].length, color: "from-emerald-400 to-green-400" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center hover:border-teal-500/30 transition-all"
                        >
                            <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                {stat.value}
                            </div>
                            <p className="text-slate-400 font-medium text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}