import React from 'react';
import Navigation from '../Components/Navigation';
import HeroSection from '../Components/HeroSection';
import SkillsSection from '../Components/Skills';
import ExperienceSection from '../Components/WorkExperience';
import ProjectsSection from '../Components/ProjectSec';
import EducationSection from '../Components/EducationSec';
import CertificationsSection from '../Components/CertificationSection';
import ContactSection from '../Components/Contacts';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Navigation />
            
            <main>
                <HeroSection />
                
                {/* About Section */}
                <section id="about" className="py-24 bg-slate-950 relative">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                                About Me
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                                Passionate About Technology
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                        5+
                                    </div>
                                    <p className="text-slate-400">Years Learning</p>
                                </div>
                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                        8+
                                    </div>
                                    <p className="text-slate-400">Projects Completed</p>
                                </div>
                                <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                        10+
                                    </div>
                                    <p className="text-slate-400">Certifications</p>
                                </div>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                As a computer engineer with hands-on experience in software development, 
                                hardware programming, IT support, and database management, I bring a 
                                well-rounded skill set to every project. My journey includes leading 
                                academic and organizational initiatives, developing innovative systems 
                                for educational institutions, and continuously expanding my expertise 
                                through certifications in AI, Cloud technologies, and Agile methodologies.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <EducationSection />
                <CertificationsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
}