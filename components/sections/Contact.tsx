"use client";

import { motion } from "framer-motion";
import { SOCIALS } from "@/lib/socials";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/lib/data";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">{t.contact.subtitle}</p>
                </motion.div>

                <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl border border-white/10 text-center">
                    <p className="text-gray-300 mb-2">Remote Full-time · 9:00 AM – 6:00 PM (Mexico)</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary hover:underline text-lg font-semibold">
                        {PERSONAL_INFO.email}
                    </a>

                    <div className="mt-8 pt-8 border-t border-white/10 flex justify-center gap-6">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                title={social.name}
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
