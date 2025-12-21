"use client";

import { motion } from "framer-motion";
import { Layout, Server, Wrench, Code2, Cloud } from "lucide-react";
import { SKILLS } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { getTechIcon } from "../ui/TechIcons";

export default function Skills() {
    const { t } = useLanguage();
    const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Frontend":
                return "hover:border-primary hover:shadow-primary/50 hover:bg-primary/10";
            case "Languages":
                return "hover:border-secondary hover:shadow-secondary/50 hover:bg-secondary/10";
            case "Backend":
                return "hover:border-emerald-500 hover:shadow-emerald-500/50 hover:bg-emerald-500/10";
            case "Tools":
                return "hover:border-blue-500 hover:shadow-blue-500/50 hover:bg-blue-500/10";
            case "Cloud & Infrastructure":
                return "hover:border-purple-500 hover:shadow-purple-500/50 hover:bg-purple-500/10";
            default:
                return "hover:border-white/20";
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Frontend":
                return <Layout className="w-6 h-6" />;
            case "Languages":
                return <Code2 className="w-6 h-6" />;
            case "Backend":
                return <Server className="w-6 h-6" />;
            case "Tools":
                return <Wrench className="w-6 h-6" />;
            case "Cloud & Infrastructure":
                return <Cloud className="w-6 h-6" />;
            default:
                return <Code2 className="w-6 h-6" />;
        }
    };

    return (
        <section id="skills" className="py-20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">{t.skills.title}</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-12">
                    {categories.map((category, catIndex) => (
                        <div key={category}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * catIndex }}
                                viewport={{ once: true }}
                                className="text-xl font-bold mb-6 text-primary border-l-4 border-primary pl-4 flex items-center gap-2"
                            >
                                {getCategoryIcon(category)}
                                {category}
                            </motion.h3>

                            <div className="flex flex-wrap gap-4">
                                {SKILLS.filter(s => s.category === category).map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        viewport={{ once: true }}
                                        className={`glass-card group relative px-6 py-3 rounded-full transition-all duration-300 cursor-default border border-white/5 cursor-pointer shadow-lg hover:shadow-xl ${getCategoryColor(skill.category)} flex items-center gap-2`}
                                    >
                                        <span className="text-xl">{getTechIcon(skill.name)}</span>
                                        <span className="font-medium text-white">{skill.name}</span>
                                        <span className="ml-2 text-xs text-gray-400 opacity-60">| {skill.level}</span>
                                        {/* @ts-ignore */}
                                        {skill.description && (
                                            <span className="hidden group-hover:block absolute -top-12 left-1/2 -translate-x-1/2 w-64 p-2 bg-black/90 text-white text-xs rounded border border-white/10 z-20 pointer-events-none">
                                                {/* @ts-ignore */}
                                                {skill.description}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
