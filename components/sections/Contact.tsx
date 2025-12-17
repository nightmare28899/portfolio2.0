"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SOCIALS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from "emailjs-com";

export default function Contact() {
    const { t } = useLanguage();
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        if (!form.current) return;

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setStatus("success");
            form.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl border border-white/10">
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="user_name" className="text-sm font-medium text-gray-300">{t.contact.name}</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder={t.contact.namePlaceholder}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-gray-300">{t.contact.email}</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                    placeholder={t.contact.emailPlaceholder}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">{t.contact.message}</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none"
                                placeholder={t.contact.messagePlaceholder}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                        >
                            {status === "loading" ? (
                                t.contact.sending
                            ) : status === "success" ? (
                                <>
                                    <CheckCircle size={20} /> {t.contact.success}
                                </>
                            ) : status === "error" ? (
                                <>
                                    <AlertCircle size={20} /> {t.contact.error}
                                </>
                            ) : (
                                <>
                                    <Send size={20} /> {t.contact.send}
                                </>
                            )}
                        </button>
                    </form>

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
