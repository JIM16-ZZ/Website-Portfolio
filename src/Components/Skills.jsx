import React from 'react';
import { motion } from 'framer-motion';
import { 
    Monitor, Code, Globe, Cpu, Network, Database, 
    GitBranch, BarChart3 
} from 'lucide-react';

const skillCategories = [
    {
        title: "Productivity Tools",
        icon: Monitor,
        color: "from-blue-500 to-blue-600",
        skills: ["Word", "Excel", "PowerPoint", "Outlook", "Teams/365", "Visual Studio", "Visual Studio Code"]
    },
    {
        title: "Software Development",
        icon: Code,
        color: "from-violet-500 to-purple-600",
        skills: ["C", "C++", "C#", "Java", "Android Studio", "Python", "MATLAB"]
    },
    {
        title: "Web Development",
        icon: Globe,
        color: "from-teal-500 to-cyan-500",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "React JS", "XAMPP Server"]
    },
    {
        title: "Hardware & Circuits",
        icon: Cpu,
        color: "from-orange-500 to-amber-500",
        skills: ["Micro C", "Arduino", "Verilog HDL", "Embedded Systems"]
    },
    {
        title: "Networking & Systems",
        icon: Network,
        color: "from-rose-500 to-pink-500",
        skills: ["Cisco Net Acad", "Microprocessors", "Kali Linux", "VB.NET"]
    },
    {
        title: "Database Management",
        icon: Database,
        color: "from-emerald-500 to-green-500",
        skills: ["MSSQL", "MySQL", "MS Database Access"]
    },
    {
        title: "Project Management",
        icon: GitBranch,
        color: "from-indigo-500 to-blue-500",
        skills: ["Git", "GitHub", "Bitbucket", "Trello", "ClickUp"]
    },
    {
        title: "Data Analytics",
        icon: BarChart3,
        color: "from-cyan-500 to-teal-500",
        skills: ["Power BI", "Data Visualization"]
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                        Technical Expertise
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit spanning software development, hardware engineering, 
                        and modern web technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-semibold mb-3">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg hover:bg-slate-700 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}