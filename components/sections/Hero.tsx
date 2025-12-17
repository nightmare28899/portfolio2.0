"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t, language } = useLanguage();

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-medium tracking-wider mb-4 block uppercase text-sm">
                        {t.hero.role}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {t.hero.greeting} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            {PERSONAL_INFO.name}
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-transform active:scale-95 flex items-center gap-2"
                        >
                            {t.hero.ctaProject} <ArrowRight size={18} />
                        </a>
                        <a
                            href={language === "en" ? PERSONAL_INFO.resumeEn : PERSONAL_INFO.resumeEs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-transform active:scale-95 flex items-center gap-2 border border-white/10"
                        >
                            {t.hero.ctaCV} <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-[400px] mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] opacity-20 blur-3xl animate-pulse group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative z-10 w-full h-full glass-card rounded-[2rem] p-3 border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
                            <img
                                src={PERSONAL_INFO.profileImage}
                                alt={PERSONAL_INFO.name}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
