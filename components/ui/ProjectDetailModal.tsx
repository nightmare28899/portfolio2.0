"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectItem } from "@/lib/types";
import { getTechIcon } from "./TechIcons";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailModalProps {
    project: ProjectItem;
    onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
    const { t } = useLanguage();
    const images = [
        project.img,
        project.img2,
        project.img3,
        project.img4,
        project.img5,
        project.img6
    ].filter(Boolean) as string[];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                layoutId={`project-${project.id}`}
                className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="w-full md:w-1/2 bg-black/40 relative flex flex-col">
                    <div className="relative flex-grow min-h-[300px] md:min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                    fill
                                    className="object-contain p-4"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-primary/80 rounded-full text-white transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-primary/80 rounded-full text-white transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Thumbnails */}
                    {images.length > 1 && (
                        <div className="p-4 flex gap-2 overflow-x-auto border-t border-white/5 bg-black/20">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${idx === currentImageIndex ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                >
                                    <Image
                                        src={img}
                                        alt="thumbnail"
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                    <div className="mb-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                                {project.role && (
                                    <p className="text-primary font-medium">{project.role}</p>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </Link>
                                )}
                                {project.demo && (
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="p-2 bg-primary hover:bg-primary/80 rounded-lg text-white transition-colors"
                                        title="Live Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-semibold">{t.projects.technologies}</h3>
                        <div className="flex flex-wrap gap-2">
                            {(project.techStack || project.tags).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 flex items-center gap-1.5"
                                >
                                    {getTechIcon(tech)}
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        <div>
                            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold">{t.projects.overview}</h3>
                            <p>{project.longDescription || project.description}</p>
                        </div>

                        {project.responsibilities && project.responsibilities.length > 0 && (
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold">{t.projects.keyResponsibilities}</h3>
                                <ul className="space-y-2">
                                    {project.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
