import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-white font-bold text-xl bg-transparent border-none cursor-pointer"
                        >
                        JP<span className="text-teal-400">.</span>
                        </button>


                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection('#contact')}
                                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg"
                            >
                                Hire Me
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-lg" />
                        <div className="relative flex flex-col items-center justify-center h-full gap-6 p-6">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-white text-2xl font-medium hover:text-teal-400 transition-colors"
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Button
                                    onClick={() => scrollToSection('#contact')}
                                    className="mt-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-6 rounded-xl text-lg"
                                >
                                    Hire Me
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}