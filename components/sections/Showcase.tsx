"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Server, Globe, RefreshCcw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Showcase() {
    const { t } = useLanguage();
    const [apiData, setApiData] = useState<{ time: string; message: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchTime = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/time");
            const data = await res.json();
            setApiData(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="showcase" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">{t.showcase.title}</h2>
                    <p className="text-gray-400">{t.showcase.subtitle}</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1: SSG */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-card p-6 rounded-2xl border border-white/5"
                    >
                        <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.showcase.ssgTitle}</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {t.showcase.ssgDesc}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-green-400">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            {t.showcase.buildTime}
                        </div>
                    </motion.div>

                    {/* Feature 2: API Routes */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-card p-6 rounded-2xl border border-white/5"
                    >
                        <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.showcase.apiTitle}</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {t.showcase.apiDesc}
                        </p>

                        <div className="bg-black/30 p-3 rounded-lg mb-3 min-h-[60px] flex items-center justify-center text-sm font-mono text-center">
                            {loading ? (
                                <RefreshCcw className="animate-spin text-gray-500" />
                            ) : apiData ? (
                                <div>
                                    <div className="text-primary">{apiData.time}</div>
                                    <div className="text-xs text-gray-500">{apiData.message}</div>
                                </div>
                            ) : (
                                <span className="text-gray-600">{t.showcase.clickToFetch}</span>
                            )}
                        </div>

                        <button
                            onClick={fetchTime}
                            className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
                        >
                            {t.showcase.testApi}
                        </button>
                    </motion.div>

                    {/* Feature 3: Server Components */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="glass-card p-6 rounded-2xl border border-white/5"
                    >
                        <div className="bg-pink-500/20 w-12 h-12 rounded-lg flex items-center justify-center text-pink-400 mb-4">
                            <Server size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.showcase.serverTitle}</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {t.showcase.serverDesc}
                        </p>
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                            <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full w-[85%]" />
                        </div>
                        <p className="text-xs text-gray-500 text-right">{t.showcase.bundleReduced}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
