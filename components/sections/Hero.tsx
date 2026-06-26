"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t, language } = useLanguage();
    const shouldReduceMotion = useReducedMotion();

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55 },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,rgba(10,10,10,1)_0%,rgba(18,18,24,0.98)_48%,rgba(8,28,34,0.92)_100%)] pt-28 pb-12 md:pt-32 md:pb-20"
        >
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(139,92,246,0.16),transparent_34%,rgba(6,182,212,0.12)_68%,transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_48%)] pointer-events-none" />

            <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] items-center gap-12 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16 lg:gap-16">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: shouldReduceMotion ? 0 : 0.09,
                                delayChildren: shouldReduceMotion ? 0 : 0.1,
                            },
                        },
                    }}
                    className="max-w-3xl"
                >
                    <motion.span
                        variants={itemVariants}
                        className="mb-4 block text-sm font-semibold uppercase tracking-[0.22em] text-accent"
                    >
                        {t.hero.role}
                    </motion.span>

                    <motion.div variants={itemVariants} className="mb-5 flex flex-wrap gap-2">
                        {t.hero.highlights.map((highlight) => (
                            <span
                                key={highlight}
                                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/80 shadow-sm backdrop-blur md:text-sm"
                            >
                                {highlight}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="mb-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        {t.hero.headline} <br />
                        <span className="bg-linear-to-r from-white via-accent to-secondary bg-clip-text text-transparent">
                            {PERSONAL_INFO.name}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mb-9 max-w-xl text-base leading-8 text-white/70 md:text-lg"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Link
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_50px_rgba(6,182,212,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_22px_60px_rgba(6,182,212,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:scale-[0.98]"
                        >
                            <BriefcaseBusiness size={18} />
                            {t.hero.ctaHire}
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1] active:scale-[0.98]"
                        >
                            {t.hero.ctaProject} <ArrowRight size={18} />
                        </Link>
                        <a
                            href={language === "en" ? PERSONAL_INFO.resumeEn : PERSONAL_INFO.resumeEs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold text-white/70 transition duration-300 hover:text-white active:scale-[0.98]"
                        >
                            {t.hero.ctaCV} <Download size={18} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.22 }}
                    className="relative mx-auto w-full max-w-[380px] md:max-w-[430px]"
                >
                    <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/40 backdrop-blur">
                        <div className="absolute inset-x-3 top-3 z-20 flex justify-end">
                            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                                {PERSONAL_INFO.available}
                            </span>
                        </div>
                        <div className="relative h-full overflow-hidden rounded-[1.35rem]">
                            <Image
                                src={PERSONAL_INFO.profileImage}
                                alt={PERSONAL_INFO.name}
                                width={520}
                                height={650}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
