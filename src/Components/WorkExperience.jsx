import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Zap } from 'lucide-react';

const experiences = [
    {
        title: "Junior Programmer / Software Developer/ Database Administrator",
        company: "University of Cebu, Inc.",
        location: "Mandaue City, Cebu",
        period: "2024 – Present",
        type: "current",
        color: "from-teal-500 to-cyan-500",
        responsibilities: [
            "Develop, maintain, and enhance institutional information systems to improve operational efficiency",
            "Perform debugging, system optimization, and feature enhancements for existing applications",
            "Collaborate with accounting, records, and cashiering offices to support system requirements"
        ]
    },
    {
        title: "College Instructor",
        company: "University of Cebu, Inc.",
        location: "Mandaue City, Cebu",
        period: "2024 – Present",
        type: "current",
        color: "from-blue-500 to-indigo-600",
        responsibilities: [
            "Teach Engineering and IT-related courses covering computer programming, hardware servicing, and database systems",
            "Prepare instructional materials, activities, and assessments aligned with curriculum standards"
        ]
    },
    {
        title: "Data Entry Encoder",
        company: "University of Cebu Lapu-Lapu and Mandaue (UCLM)",
        location: "Mandaue City, Cebu",
        period: "2024",
        color: "from-violet-500 to-purple-600",
        responsibilities: [
            "Supported the Records and Accounting sections by encoding and verifying student information"
        ]
    },
    {
        title: "Working Scholar – Electronic Data Processing Section",
        company: "University of Cebu Lapu-Lapu and Mandaue (UCLM)",
        location: "Mandaue City, Cebu",
        period: "2022 – 2024",
        color: "from-indigo-500 to-blue-500",
        responsibilities: [
            "Provided IT support and assisted in system maintenance for university records"
        ]
    },
    {
        title: "Technical Support Associate",
        company: "Qualfon Philippines",
        location: "Cebu City",
        period: "2021",
        color: "from-cyan-500 to-teal-500",
        responsibilities: [
            "Delivered front-line technical support, troubleshooting, and customer service assistance"
        ]
    },
    {
        title: "Student Immersion Program",
        company: "Mandaue City – Management Information Systems Office (MISO)",
        location: "Cebu",
        period: "2019 – 2020",
        color: "from-emerald-500 to-green-500",
        responsibilities: [
            "Assisted in system administration and city IT operations"
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            {/* Animated background orbs */}
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                        Professional Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Work Experience
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A timeline of my professional experience and career milestones.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-cyan-500/30 to-teal-500/50 hidden md:block" />
                    
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 hidden md:block">
                                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${experience.color} ring-4 ring-slate-900 shadow-lg`}>
                                        {experience.type === 'current' && (
                                            <motion.div
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 rounded-full bg-teal-400/30"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Content card */}
                                <div className="md:w-[calc(50%-2rem)] group">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 hover:shadow-2xl hover:shadow-teal-500/10 transition-all"
                                    >
                                        {/* Current badge */}
                                        {experience.type === 'current' && (
                                            <div className="absolute -top-3 -right-3">
                                                <motion.div
                                                    animate={{ rotate: [0, 5, -5, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                                                >
                                                    <Zap className="w-3 h-3" />
                                                    Current
                                                </motion.div>
                                            </div>
                                        )}

                                        {/* Icon */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                <Briefcase className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-teal-400 transition-colors">
                                                    {experience.title}
                                                </h3>
                                                <p className="text-teal-400 font-semibold mb-1">{experience.company}</p>
                                                <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-3.5 h-3.5" />
                                                        {experience.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {experience.period}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <div className="space-y-3 mt-6">
                                            {experience.responsibilities.map((resp, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start gap-3 text-slate-300"
                                                >
                                                    <ChevronRight className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm leading-relaxed">{resp}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Decorative corner */}
                                        <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${experience.color} opacity-10 rounded-tl-3xl rounded-br-2xl`} />
                                    </motion.div>
                                </div>

                                {/* Spacer for timeline alignment */}
                                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Summary stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { label: "Years of Experience", value: "5+" },
                        { label: "Positions Held", value: experiences.length },
                        { label: "Current Roles", value: experiences.filter(e => e.type === 'current').length }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center hover:border-teal-500/30 transition-all"
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}