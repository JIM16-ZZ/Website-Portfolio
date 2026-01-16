import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  Cloud,
  Brain,
  Globe,
  FileCode,
  Workflow,
  Monitor
} from 'lucide-react';

const certifications = [
  {
    name: "Civil Service Exam (CSC) 2025 – Professional Passer",
    issuer: "Government",
    icon: ShieldCheck,
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "Agile Explorer",
    issuer: "IBM",
    icon: Workflow,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    icon: Brain,
    color: "from-violet-500 to-purple-600"
  },
  {
    name: "Digital Literacy",
    issuer: "IBM",
    icon: Monitor,
    color: "from-indigo-500 to-blue-600"
  },
  {
    name: "Data Fundamentals",
    issuer: "IBM",
    icon: Cloud,
    color: "from-cyan-500 to-sky-500"
  },
  {
    name: "Web Development Fundamentals",
    issuer: "IBM",
    icon: Globe,
    color: "from-teal-500 to-cyan-500"
  },
  {
    name: "Ethics of Generative AI",
    issuer: "LinkedIn",
    icon: Brain,
    color: "from-sky-500 to-blue-600"
  },
  {
    name: "Microsoft 365 for Business",
    issuer: "LinkedIn",
    icon: FileCode,
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "Generative AI",
    issuer: "LinkedIn",
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Hardware Computer Basics",
    issuer: "Cisco",
    icon: Monitor,
    color: "from-rose-500 to-red-600"
  }
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative py-28 bg-slate-900 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f766e20,_transparent_60%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Credentials
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certifications & Licenses
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating continuous learning,
            adaptability, and expertise in modern technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 rounded-xl bg-gradient-to-br ${cert.color} opacity-0 blur transition group-hover:opacity-20`}
              />

              <div className="relative h-full rounded-xl bg-slate-800/60 backdrop-blur border border-slate-700/50 p-5 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-600 group-hover:shadow-xl group-hover:shadow-black/30">
                {/* Icon */}
                <div
                  className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <cert.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h4 className="text-white font-semibold text-sm mb-2 leading-snug line-clamp-2">
                  {cert.name}
                </h4>

                {/* Issuer badge */}
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300 text-[11px] font-medium">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}