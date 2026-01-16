import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ChevronDown, Code2, Sparkles } from 'lucide-react';

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const roles = ["Software Developer", "Computer Engineer", "College Instructor", "Tech Enthusiast"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    animate={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 30 }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
                />
                <motion.div 
                    animate={{
                        x: -mousePosition.x,
                        y: -mousePosition.y,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 30 }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />
                
                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            x: [null, Math.random() * window.innerWidth],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Enhanced grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Enhanced Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            {/* Animated rings */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl rotate-6 opacity-20 blur-xl"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-3xl -rotate-3 opacity-20 blur-xl"
                            />
                            
                            {/* Main image container */}
                            <div className="relative w-full h-full overflow-hidden rounded-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:opacity-0 transition-opacity duration-500" />
                                <img
                                    src="/Jim Profile.jpg"
                                    alt="Jim Paul G. Niñeria"
                                    className="relative w-full h-full object-cover shadow-2xl border-4 border-slate-800/50 group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Enhanced status badge */}
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold shadow-2xl shadow-teal-500/50 flex items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4 animate-pulse" />
                                Open to Work
                            </motion.div>

                            {/* Skill badges around image */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute -top-6 -left-6 bg-slate-800/90 backdrop-blur-sm border border-teal-500/30 px-4 py-2 rounded-xl shadow-lg"
                            >
                                <Code2 className="w-5 h-5 text-teal-400" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Enhanced Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <span className="inline-block px-5 py-2 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium mb-6 shadow-lg shadow-teal-500/10">
                                Junior Programmer • Computer Engineer
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                                <span className="text-white">Jim Paul G. </span>
                                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
                                    Niñeria
                                </span>
                            </h1>
                            
                            {/* Rotating role text */}
                            <div className="h-10 overflow-hidden mb-6">
                                <motion.div
                                    key={currentRole}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-2xl font-semibold text-teal-400"
                                >
                                    {roles[currentRole]}
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-slate-400 text-lg max-w-xl mt-6 mb-8 leading-relaxed"
                        >
                            A computer engineer with experience in software development, hardware programming, 
                            IT support, and database management. Passionate about building innovative systems 
                            for educational and business environments.
                        </motion.p>

                        {/* Enhanced Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                        >
                            {[
                                { Icon: MapPin, text: "Cordova, Cebu, Philippines" },
                                { Icon: Mail, text: "nineriajimpaul@gmail.com" },
                                { Icon: Phone, text: "09661431942" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-xl hover:border-teal-500/30 transition-all"
                                >
                                    <item.Icon className="w-4 h-4 text-teal-400" />
                                    <span className="text-slate-300 text-sm">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Enhanced CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="group relative bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-teal-500/30 overflow-hidden"
                            >
                                <span className="relative z-10">Get In Touch</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('projects')}
                                className="border-2 border-slate-700 bg-slate-800/30 backdrop-blur-sm text-slate-300 hover:bg-slate-800 hover:border-teal-500/50 hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all"
                            >
                                View Projects
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Enhanced scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.button
                        onClick={() => scrollToSection('about')}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors group"
                    >
                        <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronDown className="w-6 h-6" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}