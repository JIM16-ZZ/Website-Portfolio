import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        title: "Junior Programmer / Software Developer/ Database Administrator",
        company: "University of Cebu, Inc.",
        location: "Mandaue City, Cebu",
        period: "2024 – Present",
        type: "current",
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
        responsibilities: [
            "Supported the Records and Accounting sections by encoding and verifying student information"
        ]
    },
    {
        title: "Working Scholar – Electronic Data Processing Section",
        company: "University of Cebu Lapu-Lapu and Mandaue (UCLM)",
        location: "Mandaue City, Cebu",
        period: "2022 – 2024",
        responsibilities: [
            "Provided IT support and assisted in system maintenance for university records"
        ]
    },
    {
        title: "Technical Support Associate",
        company: "Qualfon Philippines",
        location: "Cebu City",
        period: "2021",
        responsibilities: [
            "Delivered front-line technical support, troubleshooting, and customer service assistance"
        ]
    },
    {
        title: "Student Immersion Program",
        company: "Mandaue City – Management Information Systems Office (MISO)",
        location: "Cebu",
        period: "2019 – 2020",
        responsibilities: [
            "Assisted in system administration and city IT operations"
        ]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative">
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

                {experiences.length > 0 ? (
                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                                        <Briefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                            <h3 className="text-white font-bold text-xl">{experience.title}</h3>
                                            <span className="text-teal-400 text-sm font-medium flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {experience.period}
                                            </span>
                                        </div>
                                        <p className="text-slate-300 font-medium mb-1">{experience.company}</p>
                                        {experience.location && (
                                            <p className="text-slate-400 text-sm flex items-center gap-1 mb-4">
                                                <MapPin className="w-4 h-4" />
                                                {experience.location}
                                            </p>
                                        )}
                                        <p className="text-slate-400 mb-4 leading-relaxed">{experience.description}</p>
                                        {experience.achievements && experience.achievements.length > 0 && (
                                            <ul className="list-disc list-inside space-y-2">
                                                {experience.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="text-slate-400 text-sm">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-12"
                    >
                        <p className="text-slate-400 text-lg">
                            Work experience will be displayed here.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

