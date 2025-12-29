"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/lib/types";

export default function Projects() {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    return (
        <section id="projects" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.projects.items.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClickAction={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <ProjectDetailModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
