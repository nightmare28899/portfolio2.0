"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Users, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTechIcon } from "../ui/TechIcons";

export default function Skills() {
    const { t } = useLanguage();
    // Use t.skills.items from the translation context
    const skillsList = t.skills.items || [];
    const categories = Array.from(new Set(skillsList.map((s) => s.category)));

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Core Expertise":
            case "Experiencia Principal":
                return "hover:border-primary hover:shadow-primary/50 hover:bg-primary/10";
            case "Engineering & Architecture":
            case "Ingeniería y Arquitectura":
                return "hover:border-purple-500 hover:shadow-purple-500/50 hover:bg-purple-500/10";
            case "Infrastructure & Tooling":
            case "Infraestructura y Herramientas":
                return "hover:border-amber-500 hover:shadow-amber-500/50 hover:bg-amber-500/10";
            case "Team & Leadership":
            case "Equipo y Liderazgo":
                return "hover:border-emerald-500 hover:shadow-emerald-500/50 hover:bg-emerald-500/10";
            default:
                return "hover:border-white/20";
        }
    };

    const getCategoryTitleColor = (category: string) => {
        switch (category) {
            case "Core Expertise":
            case "Experiencia Principal":
                return "text-primary border-primary";
            case "Engineering & Architecture":
            case "Ingeniería y Arquitectura":
                return "text-purple-500 border-purple-500";
            case "Infrastructure & Tooling":
            case "Infraestructura y Herramientas":
                return "text-amber-500 border-amber-500";
            case "Team & Leadership":
            case "Equipo y Liderazgo":
                return "text-emerald-500 border-emerald-500";
            default:
                return "text-primary border-primary";
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Core Expertise":
            case "Experiencia Principal":
                return <Code2 className="w-6 h-6" />;
            case "Engineering & Architecture":
            case "Ingeniería y Arquitectura":
                return <Layers className="w-6 h-6" />;
            case "Infrastructure & Tooling":
            case "Infraestructura y Herramientas":
                return <Cloud className="w-6 h-6" />;
            case "Team & Leadership":
            case "Equipo y Liderazgo":
                return <Users className="w-6 h-6" />;
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
                                className={`text-xl font-bold mb-6 pl-4 border-l-4 flex items-center gap-2 ${getCategoryTitleColor(category)}`}
                            >
                                {getCategoryIcon(category)}
                                {category}
                            </motion.h3>

                            <div className="flex flex-wrap gap-4">
                                {skillsList.filter((s) => s.category === category).map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        viewport={{ once: true }}
                                        className={`glass-card group relative px-6 py-3 rounded-full transition-all duration-300 cursor-default border border-white/5 shadow-lg hover:shadow-xl ${getCategoryColor(skill.category)} flex items-center gap-2`}
                                    >
                                        <span className="text-xl">{getTechIcon(skill.name)}</span>
                                        <span className="font-medium text-white">{skill.name}</span>
                                        {skill.description && (
                                            <span className="hidden group-hover:block absolute -top-24 left-1/2 -translate-x-1/2 w-64 p-3 bg-black/90 text-white text-xs rounded-lg border border-white/10 z-20 pointer-events-none shadow-xl">
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
