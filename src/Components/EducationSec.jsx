import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, BookOpen, Users, Star } from 'lucide-react';

const education = [
    {
        level: "Master's Degree",
        school: "Eastern Visayas State University (EVSU)",
        degree: "Master of Science in Information Technology (MSIT)",
        period: "2025 - Present",
        achievements: [],
        icon: GraduationCap,
        color: "from-blue-500 to-indigo-600",
        status: "ongoing"
    },
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
        period: "2021 - 2022",
        icon: Users,
        color: "from-teal-500 to-cyan-500"
    },
    {
        role: "Board of Directors",
        organization: "UCLM Engineering Council",
        period: "2021 - 2022",
        icon: Star,
        color: "from-blue-500 to-indigo-600"
    },
    {
        role: "Health and Safety Officer",
        organization: "UCLM Engineering Council",
        period: "2023 - 2024",
        icon: BookOpen,
        color: "from-violet-500 to-purple-600"
    }
];

export default function EducationSection() {
    return (
        <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            {/* Animated orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
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
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Academic achievements and leadership experience throughout my educational journey.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.level}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 hover:shadow-2xl hover:shadow-teal-500/10 transition-all">
                                {/* Ongoing badge */}
                                {edu.status === 'ongoing' && (
                                    <div className="absolute -top-3 -right-3">
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg"
                                        >
                                            Ongoing
                                        </motion.div>
                                    </div>
                                )}

                                <div className="flex items-start gap-4">
                                    <motion.div 
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                        whileHover={{ rotate: [0, -5, 5, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <edu.icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <span className="text-teal-400 text-sm font-semibold">{edu.period}</span>
                                        <h3 className="text-white font-bold text-xl mt-1 group-hover:text-teal-400 transition-colors">
                                            {edu.level}
                                        </h3>
                                        <p className="text-slate-300 font-medium mt-3 leading-relaxed">
                                            {edu.degree}
                                        </p>
                                        <p className="text-slate-400 text-sm mt-2 flex items-start gap-1.5">
                                            <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                            {edu.school}
                                        </p>
                                        
                                        {edu.achievements.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {edu.achievements.map((achievement) => (
                                                    <motion.span
                                                        key={achievement}
                                                        initial={{ scale: 0 }}
                                                        whileInView={{ scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 }}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-400 rounded-full text-sm font-medium"
                                                    >
                                                        <Trophy className="w-3.5 h-3.5" />
                                                        {achievement}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${edu.color} opacity-5 rounded-tl-3xl rounded-br-2xl group-hover:opacity-10 transition-opacity`} />
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
                    <div className="text-center mb-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Leadership Roles</h3>
                        <p className="text-slate-400">
                            Positions held in student organizations and academic councils.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {leadership.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/5 transition-all"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <motion.div
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <role.icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                </div>

                                <div className="text-center">
                                    <p className="text-teal-400 text-sm font-semibold mb-2">{role.period}</p>
                                    <h4 className="text-white font-bold text-lg mb-2 group-hover:text-teal-400 transition-colors">
                                        {role.role}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {role.organization}
                                    </p>
                                </div>

                                {/* Decorative line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent rounded-full" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { label: "Degrees", value: education.length },
                        { label: "Leadership Roles", value: leadership.length },
                        { label: "Academic Honors", value: education.filter(e => e.achievements.length > 0).length }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center hover:border-teal-500/30 transition-all"
                        >
                            <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <p className="text-slate-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}