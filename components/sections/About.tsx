"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, Briefcase } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import CompanyCarousel from "@/components/sections/CompanyCarousel";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold">
                            {t.hero.greeting} <span className="text-primary">{PERSONAL_INFO.name}</span>, a {t.about.role}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {t.about.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t.about.experience}</h4>
                                    <p className="text-sm text-gray-500">{t.about.experienceLabel}</p>
                                </div>
                            </div>

                            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                                <div className="bg-secondary/20 p-3 rounded-lg text-secondary">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t.about.freelance}</h4>
                                    <p className="text-sm text-gray-500">{t.about.available}</p>
                                </div>
                            </div>

                            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                                <div className="bg-accent/20 p-3 rounded-lg text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t.about.location}</h4>
                                    <p className="text-sm text-gray-500">{t.about.locationLabel}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 glass-card p-8 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                                    <img
                                        src={PERSONAL_INFO.profileImage}
                                        alt={PERSONAL_INFO.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{PERSONAL_INFO.name}</h4>
                                    <p className="text-sm text-gray-400">{t.about.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-400 italic mb-6">&quot;{t.about.quote}&quot;</p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Mail size={18} className="text-primary" />
                                    <span>kevin.lopez@kevinlg.dev</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>
            </div>

            <div className="mt-20">
                <CompanyCarousel />
            </div>
        </section>
    );
}
