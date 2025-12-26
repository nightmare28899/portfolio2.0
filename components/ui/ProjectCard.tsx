"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { type ProjectItem } from "@/lib/types";
import { getTechIcon } from "./TechIcons";

export default function ProjectCard({ project, index, onClick }: { project: ProjectItem; index: number; onClick: () => void }) {
    const images = [
        project.img,
        project.img2,
        project.img3,
        project.img4,
        project.img5,
        project.img6
    ].filter(Boolean) as string[];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showAllTags, setShowAllTags] = useState(false);

    useEffect(() => {
        if (!isHovered && images.length > 1) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [isHovered, images.length]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-xl overflow-hidden glass-card border-none h-full flex flex-col p-1 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className={`relative w-full ${project.type === "mobile" ? "bg-gray-900 p-8 flex items-center justify-center min-h-[400px]" : "h-64 overflow-hidden"}`}>

                {project.type === "mobile" ? (
                    images.length > 1 ? (
                        <div className="relative w-[200px] h-[350px] border-gray-800 bg-gray-800 border-[8px] rounded-[2rem] shadow-xl">
                            <div className="w-[60px] h-[10px] bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>

                            <div className="h-[334px] w-full overflow-hidden rounded-[1.5rem] bg-white relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={images[currentImageIndex]}
                                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                            fill
                                            sizes="200px"
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.preventDefault(); setCurrentImageIndex(idx); }}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-primary w-4" : "bg-white/50"}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute -left-[10px] top-[80px] w-[2px] h-[30px] bg-gray-700 rounded-l-md"></div>
                            <div className="absolute -left-[10px] top-[120px] w-[2px] h-[30px] bg-gray-700 rounded-l-md"></div>
                            <div className="absolute -right-[10px] top-[100px] w-[2px] h-[40px] bg-gray-700 rounded-r-md"></div>
                        </div>
                    ) : (
                        <div className="relative w-[200px] h-[350px] border-gray-800 bg-gray-800 border-[8px] rounded-[2rem] shadow-xl">
                            <div className="w-[60px] h-[10px] bg-gray-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
                            <div className="h-[334px] w-full overflow-hidden rounded-[1.5rem] bg-white relative">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    sizes="200px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -left-[10px] top-[80px] w-[2px] h-[30px] bg-gray-700 rounded-l-md"></div>
                            <div className="absolute -left-[10px] top-[120px] w-[2px] h-[30px] bg-gray-700 rounded-l-md"></div>
                            <div className="absolute -right-[10px] top-[100px] w-[2px] h-[40px] bg-gray-700 rounded-r-md"></div>
                        </div>
                    )
                ) : (
                    images.length > 1 ? (
                        <div className="relative w-full h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.preventDefault(); setCurrentImageIndex(idx); }}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-primary w-4" : "bg-white/50"}`}
                                    />
                                ))}
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white backdrop-blur-sm"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FiGithub size={20} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ) : (
                        <>
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white backdrop-blur-sm"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FiGithub size={20} />
                                    </Link>
                                )}
                            </div>
                        </>
                    )
                )}
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.titleLink ? (
                        <Link href={project.titleLink} target="_blank" onClick={(e) => e.stopPropagation()}>{project.title}</Link>
                    ) : (
                        <Link href={project.demo!} target="_blank" onClick={(e) => e.stopPropagation()}>{project.title}</Link>
                    )}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {(showAllTags ? project.tags : project.tags.slice(0, 3)).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300 flex items-center gap-1.5">
                            {getTechIcon(tag)}
                            {tag}
                        </span>
                    ))}
                    {!showAllTags && project.tags.length > 3 && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowAllTags(true);
                            }}
                            className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                        >
                            +{project.tags.length - 3}
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
