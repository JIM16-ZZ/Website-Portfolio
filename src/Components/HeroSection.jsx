import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import { Button } from "./ui/button";

export default function HeroSection() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl rotate-6 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-3xl -rotate-3 opacity-60" />
                            <img
                                src="/Jim Profile.jpg"
                                alt="Jim Paul G. Niñeria"
                                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-slate-800/50"
                            />
                            {/* Status badge */}
                            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                Open to Work
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
                                Junior Programmer • Computer Engineer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl lg:text-6xl font-bold whitespace-nowrap"
                        >
                            <span className="text-white">Jim Paul G. </span>
                            <span className="text-teal-400">Niñeria</span>
                        </motion.h1>


                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-slate-400 text-lg max-w-xl mt-6 mb-8 leading-relaxed"
                        >
                            A computer engineer with experience in software development, hardware programming, 
                            IT support, and database management. Passionate about building innovative systems 
                            for educational and business environments.
                        </motion.p>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                        >
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 text-teal-400" />
                                Cordova, Cebu, Philippines
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Mail className="w-4 h-4 text-teal-400" />
                                nineriajimpaul@gmail.com
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Phone className="w-4 h-4 text-teal-400" />
                                09661431942
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <Button
                                onClick={() => scrollToSection('contact')}
                                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-6 rounded-xl font-medium text-base shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/30"
                            >
                                Get In Touch
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => scrollToSection('projects')}
                                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 rounded-xl font-medium text-base"
                            >
                                View Projects
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => scrollToSection('about')}
                        className="flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}