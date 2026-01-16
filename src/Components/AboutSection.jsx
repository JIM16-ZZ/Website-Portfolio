import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Award, Zap, Users } from 'lucide-react';

const stats = [
    { value: "6+", label: "Years Learning", icon: Award },
    { value: "8+", label: "Projects Completed", icon: Code },
    { value: "10+", label: "Certifications", icon: Zap }
];

const highlights = [
    {
        icon: Code,
        title: "Software Development",
        description: "Building robust applications with modern frameworks and best practices"
    },
    {
        icon: Cpu,
        title: "Hardware Programming",
        description: "Embedded systems and digital circuit design expertise"
    },
    {
        icon: Database,
        title: "Database Management",
        description: "Designing and optimizing efficient data solutions"
    },
    {
        icon: Users,
        title: "Leadership",
        description: "Leading academic initiatives and collaborative projects"
    }
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                        About Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Passionate About Technology
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        As a computer engineer with hands-on experience in software development, 
                        hardware programming, IT support, and database management, I bring a 
                        well-rounded skill set to every project. My journey includes leading 
                        academic and organizational initiatives, developing innovative systems 
                        for educational institutions, and continuously expanding my expertise 
                        through certifications in AI, Cloud technologies, and Agile methodologies.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="group bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center hover:border-teal-500/50 transition-all"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <motion.div 
                                className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                {stat.value}
                            </motion.div>
                            <p className="text-slate-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Highlights Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Core Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-teal-500/30 transition-all group"
                            >
                                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <highlight.icon className="w-6 h-6 text-teal-400" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                                <p className="text-slate-400 text-sm">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}