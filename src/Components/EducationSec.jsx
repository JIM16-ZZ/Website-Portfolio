import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const education = [
    {
        level: "Bachelor's Degree",
        school: "University of Cebu Lapu-Lapu and Mandaue (UCLM)",
        degree: "Bachelor of Science in Computer Engineering (BSCpE)",
        period: "2020 - 2024",
        achievements: ["Service and Leadership Awardee"],
        icon: GraduationCap,
        color: "from-teal-500 to-cyan-500"
    },
    {
        level: "Senior High School",
        school: "University of Cebu Lapu-Lapu and Mandaue (UCLM)",
        degree: "TVL - ICT Strand Major in Computer Programming and Hardware Servicing",
        period: "2018 - 2020",
        achievements: ["With Honors – Top 9"],
        icon: Award,
        color: "from-violet-500 to-purple-600"
    }
];

const leadership = [
    {
        role: "Vice President (External)",
        organization: "Institute of Computer Engineers of the Philippines - Student Edition (ICPEP.SE)",
        period: "2021 - 2022"
    },
    {
        role: "Board of Directors",
        organization: "UCLM Engineering Council",
        period: "2021 - 2022"
    },
    {
        role: "Health and Safety Officer",
        organization: "UCLM Engineering Council",
        period: "2023 - 2024"
    }
];

export default function EducationSection() {
    return (
        <section id="education" className="py-24 bg-slate-950 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                        Academic Background
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Education & Leadership
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.level}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}>
                                        <edu.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-teal-400 text-sm font-medium">{edu.period}</span>
                                        <h3 className="text-white font-bold text-xl mt-1">{edu.level}</h3>
                                        <p className="text-slate-300 font-medium mt-2">{edu.degree}</p>
                                        <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                                        
                                        {edu.achievements.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {edu.achievements.map((achievement) => (
                                                    <span
                                                        key={achievement}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 rounded-full text-sm"
                                                    >
                                                        <Trophy className="w-3.5 h-3.5" />
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Leadership Roles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Leadership Roles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {leadership.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 text-center hover:border-teal-500/30 transition-all"
                            >
                                <p className="text-teal-400 text-sm mb-1">{role.period}</p>
                                <h4 className="text-white font-semibold mb-1">{role.role}</h4>
                                <p className="text-slate-400 text-sm">{role.organization}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}