import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook, Download, MessageCircle, CheckCircle2 } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "nineriajimpaul@gmail.com",
        href: "mailto:nineriajimpaul@gmail.com",
        color: "from-teal-500 to-cyan-500"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "09661431942",
        href: "tel:09661431942",
        color: "from-blue-500 to-indigo-600"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Cordova, Cebu, Philippines",
        href: null,
        color: "from-violet-500 to-purple-600"
    }
];

const socialLinks = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jimpaulnineria16/",
        color: "hover:bg-[#0077B5]"
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/JIM16-ZZ",
        color: "hover:bg-[#333]"
    },
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/dirt.bluxx",
        color: "hover:bg-[#1877F2]"
    }
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSuccess(true);
            setTimeout(() => {
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
                setIsSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            {/* Animated orbs */}
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to discuss opportunities? 
                        I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ x: 5 }}
                                    className="group"
                                >
                                    {info.href ? (
                                        <a href={info.href} className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-slate-600 hover:shadow-xl hover:shadow-teal-500/5 transition-all">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <info.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                                                <p className="text-white font-semibold group-hover:text-teal-400 transition-colors">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5">
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                                                <info.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-sm mb-1">{info.label}</p>
                                                <p className="text-white font-semibold">{info.value}</p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Resume Download */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <motion.a
                                href="/Nineria Jim Paul - Resume CV.pdf"
                                download
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-500/40 group"
                            >
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                Download My Resume
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <p className="text-slate-400 text-sm mb-4 flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Connect with me
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-teal-500/50 ${social.color} transition-all`}
                                        title={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-6"
                        >
                            <p className="text-teal-400 font-semibold mb-2">💡 Quick Response</p>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                I typically respond to messages within 24 hours. Feel free to reach out anytime!
                            </p>
                        </motion.div>
                    </motion.div>
                    
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all">
                            {!isSuccess ? (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-2 font-medium">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="***********"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-slate-900/50 border border-slate-700 text-white placeholder:text-slate-500 h-12 px-4 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-2 font-medium">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="****@****.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-slate-900/50 border border-slate-700 text-white placeholder:text-slate-500 h-12 px-4 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-slate-400 text-sm mb-2 font-medium">
                                            Your Message
                                        </label>
                                        <textarea
                                            placeholder="Tell me about your project or idea..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={6}
                                            className="w-full bg-slate-900/50 border border-slate-700 text-white placeholder:text-slate-500 px-4 py-3 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none resize-none transition-all"
                                        />
                                    </div>
                                    
                                    <motion.button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white h-12 rounded-xl font-semibold shadow-lg shadow-teal-500/30 transition-all hover:shadow-xl hover:shadow-teal-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </span>
                                        )}
                                    </motion.button>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                        className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle2 className="w-10 h-10 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                                    <p className="text-slate-400 text-center">
                                        Thank you for reaching out. I'll get back to you soon!
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-tl-3xl rounded-br-2xl blur-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}