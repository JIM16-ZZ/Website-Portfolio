import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import { Badge } from "./ui/badge";

const projects = [
    {
        title: "PARKompanion",
        subtitle: "YOLO V8-based Vehicle Monitoring System",
        description: "Real-time parking management system using AI for vehicle plate detection and parking assistance at UCLM.",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "YOLO V8", "Paddle OCR", "NVidia Cuda"],
        type: "Thesis Design Project",
        icon: Layers,
        color: "from-violet-500 to-purple-600"
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
        technologies: ["C#", "MSSQL"],
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
        technologies: ["C#", ".NET MVC", "HTML", "CSS"],
        type: "System Analysis & Design",
        icon: Layers,
        color: "from-rose-500 to-pink-500"
    },
    {
        title: "IoT Water Tank Level Detector",
        subtitle: "Embedded Systems Project",
        description: "Water level monitoring system with mobile application for real-time level detection.",
        technologies: ["MIT App Inventor", "Arduino IDE"],
        type: "Embedded Systems",
        icon: Cpu,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Smart Home Lighting Automation",
        subtitle: "Side Project",
        description: "Miniature smart home system with automated lighting control using sensors.",
        technologies: ["Arduino IDE", "Electronic Sensors", "Fairy Lights"],
        type: "Hardware Programming",
        icon: Cpu,
        color: "from-amber-500 to-yellow-500"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 -right-32 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Projects Implemented
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A showcase of systems and applications built for educational institutions 
                        and businesses.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <project.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                                        {project.type}
                                    </Badge>
                                </div>
                                
                                <h3 className="text-white font-semibold text-lg mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-teal-400 text-sm mb-3">{project.subtitle}</p>
                                <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg"
                                        >
                                            {tech}
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