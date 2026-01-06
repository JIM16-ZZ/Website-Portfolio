import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cloud, Brain, Globe, FileCode, Workflow, Monitor } from 'lucide-react';

const certifications = [
    {
        name: "Civil Service Exam (CSC) 2025 - Professional Passer",
        issuer: "Government",
        icon: ShieldCheck,
        color: "from-emerald-500 to-green-600"
    },
    {
        name: "Agile Explorer",
        issuer: "IBM",
        icon: Workflow,
        color: "from-blue-500 to-blue-600"
    },
    {
        name: "Artificial Intelligence Fundamentals",
        issuer: "IBM",
        icon: Brain,
        color: "from-violet-500 to-purple-600"
    },
    {
        name: "Digital Literacy",
        issuer: "IBM",
        icon: Monitor,
        color: "from-blue-500 to-indigo-600"
    },
    {
        name: "Data Fundamentals",
        issuer: "IBM",
        icon: Cloud,
        color: "from-cyan-500 to-blue-500"
    },
    {
        name: "Web Development Fundamentals",
        issuer: "IBM",
        icon: Globe,
        color: "from-teal-500 to-cyan-500"
    },
    {
        name: "Ethics of Generative AI",
        issuer: "LinkedIn",
        icon: Brain,
        color: "from-sky-500 to-blue-600"
    },
    {
        name: "Microsoft 365 for Business",
        issuer: "LinkedIn",
        icon: FileCode,
        color: "from-orange-500 to-amber-500"
    },
    {
        name: "Generative AI",
        issuer: "LinkedIn",
        icon: Brain,
        color: "from-purple-500 to-pink-500"
    },
    {
        name: "Hardware Computer Basics",
        issuer: "Cisco",
        icon: Monitor,
        color: "from-rose-500 to-red-600"
    }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                        Credentials
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Certifications & Licenses
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Continuous learning and professional development in emerging technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="group"
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 text-center">
                                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                    <cert.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-medium text-sm mb-1 line-clamp-2">
                                    {cert.name}
                                </h4>
                                <p className="text-slate-500 text-xs">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}