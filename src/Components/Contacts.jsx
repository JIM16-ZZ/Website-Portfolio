import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook } from 'lucide-react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Download } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "nineriajimpaul@gmail.com",
        href: "mailto:nineriajimpaul@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "09661431942",
        href: "tel:09661431942"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Cordova, Cebu, Philippines",
        href: null
    }
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? 
                        I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-6 mb-10">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                                        <info.icon className="w-5 h-5 text-teal-400" />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-sm">{info.label}</p>
                                        {info.href ? (
                                            <a 
                                                href={info.href}
                                                className="text-white font-medium hover:text-teal-400 transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-white font-medium">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Resume Download */}
                         <div className="mt-6">
                        <a
                            href="/Nineria Jim Paul - Resume CV.pdf"
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/30"
                        >
                            <Download className="w-4 h-4" /> Download CV
                        </a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-slate-500 text-sm mt-4 mb-4">Connect with me</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.linkedin.com/in/jimpaulnineria16/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/JIM16-ZZ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.facebook.com/dirt.bluxx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <Input
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-teal-500 focus:ring-teal-500/20"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-teal-500 focus:ring-teal-500/20"
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:border-teal-500 focus:ring-teal-500/20 resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white h-12 rounded-xl font-medium shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/30"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </span>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}