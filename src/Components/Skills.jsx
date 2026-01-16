import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Monitor, Code, Globe, Cpu, Network, Database, 
    GitBranch, BarChart3, Palette, Sparkles, ChevronRight
} from 'lucide-react';

const skillCategories = [
    {
        title: "Artificial Intelligence & ML",
        icon: Sparkles,
        color: "from-violet-500 to-purple-600",
        skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Artificial Neural Networks", "AI Ethics", "Chatbots", "IBM Watson Knowledge Studio"],
        description: "AI, machine learning, and neural network technologies"
    },
    {
        title: "Data Science & Analytics",
        icon: BarChart3,
        color: "from-cyan-500 to-teal-500",
        skills: ["Data Science", "Data Analysis", "Data Visualization", "Data Presentation", "Data Cleansing", "Analytics Tools", "Power BI"],
        description: "Data analysis, visualization, and business intelligence"
    },
    {
        title: "Software Development",
        icon: Code,
        color: "from-teal-500 to-cyan-500",
        skills: ["C", "C++", "C#", "Java", "Python", "MATLAB", "Software Engineering", "Software Design", "Visual Studio", "Android Studio"],
        description: "Programming languages and development environments"
    },
    {
        title: "Web & Mobile Development",
        icon: Globe,
        color: "from-blue-500 to-indigo-600",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "React JS", "VB.NET", "Mobile Applications", "Web Navigation", "Visual Studio Code", "XAMPP Server"],
        description: "Web technologies, frameworks, and mobile apps"
    },
    {
        title: "Agile & Project Management",
        icon: GitBranch,
        color: "from-indigo-500 to-blue-500",
        skills: ["Agile Software Development", "Agile Management", "Kanban Principles", "Software Management", "Git", "GitHub", "Bitbucket", "Trello", "ClickUp"],
        description: "Agile methodologies and project management tools"
    },
    {
        title: "Database Management",
        icon: Database,
        color: "from-emerald-500 to-green-500",
        skills: ["MSSQL", "MySQL", "MS Access", "Database Design"],
        description: "Data storage and database systems"
    },
    {
        title: "Hardware & Embedded Systems",
        icon: Cpu,
        color: "from-orange-500 to-amber-500",
        skills: ["Micro C", "Arduino", "Verilog HDL", "Embedded Systems", "Robotics", "Microprocessors"],
        description: "Embedded systems and digital circuits"
    },
    {
        title: "Digital Literacy & Security",
        icon: Monitor,
        color: "from-rose-500 to-pink-500",
        skills: ["Computer Literacy", "Digital Literacy", "Digital Communications", "Internet Security", "Cisco Net Acad", "Kali Linux"],
        description: "Digital skills, security, and networking"
    },
    {
        title: "Professional & Soft Skills",
        icon: Network,
        color: "from-amber-500 to-yellow-500",
        skills: ["Communication", "Collaboration", "Creative Thinking", "Critical Thinking", "Business Acumen", "Presentation", "Career Management"],
        description: "Soft skills and professional competencies"
    },
    {
        title: "Design & User Experience",
        icon: Palette, 
        color: "from-fuchsia-500 to-pink-500",
        skills: ["Canva", "Iterative Design", "Use Cases", "Data Presentation"],
        description: "Visual design and user experience"
    },
    {
        title: "Productivity Tools",
        icon: Monitor,
        color: "from-sky-500 to-blue-500",
        skills: ["Word", "Excel", "PowerPoint", "Outlook", "Teams 365"],
        description: "Office productivity and collaboration tools"
    }
];

export default function SkillsSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            {/* Animated orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4"
                    >
                        <span className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Technical Expertise
                        </span>
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit spanning software development, hardware engineering, 
                        and modern web technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
                                {/* Icon and title */}
                                <div className="flex items-center gap-4 mb-4">
                                    <motion.div 
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                        whileHover={{ rotate: [0, -5, 5, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <category.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-lg group-hover:text-teal-400 transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs mt-1">
                                            {category.skills.length} skills
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {category.description}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-xs rounded-lg hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-cyan-500/20 hover:text-teal-400 hover:border hover:border-teal-500/30 transition-all cursor-default font-medium"
                                        >
                                            {skill}
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
                                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${category.color} opacity-5 rounded-tl-3xl rounded-br-2xl group-hover:opacity-10 transition-opacity`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { 
                            label: "Skill Categories", 
                            value: skillCategories.length,
                            icon: Sparkles,
                            color: "from-teal-400 to-cyan-400"
                        },
                        { 
                            label: "Total Technologies", 
                            value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0),
                            icon: Code,
                            color: "from-blue-400 to-indigo-400"
                        },
                        { 
                            label: "Years Experience", 
                            value: "5+",
                            icon: BarChart3,
                            color: "from-violet-400 to-purple-400"
                        }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center hover:border-teal-500/30 transition-all group"
                        >
                            <div className="flex justify-center mb-3">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <stat.icon className={`w-6 h-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                                </div>
                            </div>
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