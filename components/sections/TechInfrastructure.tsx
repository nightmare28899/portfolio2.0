"use client";

import { motion } from "framer-motion";
import { SiNextdotjs, SiTypescript, SiAmazon, SiIonos, SiTailwindcss } from "react-icons/si";
import { Cloud, Globe, Database, Server, Layout, Workflow } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TechInfrastructure() {
    const { t } = useLanguage();

    const frontendTech = [
        {
            icon: <SiNextdotjs className="w-8 h-8 md:w-10 md:h-10 text-white" />,
            name: "Next.js",
            desc: t.techInfrastructure.items.nextjs,
            color: "group-hover:shadow-white/20 group-hover:bg-white/5 group-hover:border-white/20"
        },
        {
            icon: <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10 text-[#38B2AC]" />,
            name: "Tailwind CSS",
            desc: t.techInfrastructure.items.tailwindcss,
            color: "group-hover:shadow-[#38B2AC]/20 group-hover:bg-[#38B2AC]/5 group-hover:border-[#38B2AC]/20"
        },
        {
            icon: <SiTypescript className="w-8 h-8 md:w-10 md:h-10 text-[#3178C6]" />,
            name: "TypeScript",
            desc: t.techInfrastructure.items.typescript,
            color: "group-hover:shadow-[#3178C6]/20 group-hover:bg-[#3178C6]/5 group-hover:border-[#3178C6]/20"
        }
    ];

    const infraTech = [
        {
            icon: <SiAmazon className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            icon2: <Database className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            name: "AWS S3",
            desc: t.techInfrastructure.items.s3,
            color: "group-hover:shadow-[#FF9900]/20 group-hover:bg-[#FF9900]/5 group-hover:border-[#FF9900]/20"
        },
        {
            icon: <SiAmazon className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            icon2: <Globe className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            name: "CloudFront",
            desc: t.techInfrastructure.items.cloudfront,
            color: "group-hover:shadow-[#FF9900]/20 group-hover:bg-[#FF9900]/5 group-hover:border-[#FF9900]/20"
        },
        {
            icon: <SiAmazon className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            icon2: <Workflow className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            name: "AWS Amplify",
            desc: t.techInfrastructure.items.amplify,
            color: "group-hover:shadow-[#FF9900]/20 group-hover:bg-[#FF9900]/5 group-hover:border-[#FF9900]/20"
        },
        {
            icon: <SiAmazon className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            icon2: <Server className="w-8 h-8 md:w-10 md:h-10 text-[#FF9900]" />,
            name: "Route 53",
            desc: t.techInfrastructure.items.route53,
            color: "group-hover:shadow-[#FF9900]/20 group-hover:bg-[#FF9900]/5 group-hover:border-[#FF9900]/20"
        },
        {
            icon: <SiIonos className="w-8 h-8 md:w-10 md:h-10 text-[#003D8F]" />,
            name: "IONOS",
            desc: t.techInfrastructure.items.ionos,
            color: "group-hover:shadow-[#003D8F]/20 group-hover:bg-[#003D8F]/5 group-hover:border-[#003D8F]/20"
        }
    ];

    const cloudInfraTech = infraTech.slice(0, 3);
    const domainTech = infraTech.slice(3, 5);

    return (
        <section id="tech-infrastructure" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">{t.techInfrastructure.title}</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">{t.techInfrastructure.subtitle}</p>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-8" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                            <Layout className="text-primary" />
                            {t.techInfrastructure.frontend.title}
                        </h3>
                        <p className="text-gray-400 mb-8">{t.techInfrastructure.frontend.description}</p>

                        <div className="space-y-4">
                            {frontendTech.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className={`group glass-card p-4 rounded-xl border border-white/5 transition-all duration-300 flex items-center gap-4 ${tech.color}`}
                                >
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{tech.name}</h4>
                                        <p className="text-sm text-gray-400">{tech.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                            <Cloud className="text-secondary" />
                            {t.techInfrastructure.infrastructure.title}
                        </h3>
                        <p className="text-gray-400 mb-8">{t.techInfrastructure.infrastructure.description}</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {cloudInfraTech.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    whileHover={{ y: -5 }}
                                    className={`group glass-card p-4 rounded-xl border border-white/5 transition-all duration-300 ${tech.color} ${index === cloudInfraTech.length - 1 ? "sm:col-span-2" : ""}`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                                            {tech.name === "AWS S3" || tech.name === "CloudFront" || tech.name === "AWS Amplify" || tech.name === "Route 53" ? tech.icon2 : tech.icon}
                                        </div>
                                        <h4 className="font-bold text-white group-hover:text-secondary transition-colors">{tech.name}</h4>
                                    </div>
                                    <p className="text-xs text-gray-400 leading-relaxed">{tech.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                                <Globe className="text-emerald-500" />
                                {t.techInfrastructure.domainManagement.title}
                            </h3>
                            <p className="text-gray-400 mb-8">{t.techInfrastructure.domainManagement.description}</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {domainTech.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{ y: -5 }}
                                        className={`group glass-card p-4 rounded-xl border border-white/5 transition-all duration-300 ${tech.color}`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                                                {tech.name === "AWS S3" || tech.name === "CloudFront" || tech.name === "AWS Amplify" || tech.name === "Route 53" ? tech.icon2 : tech.icon}
                                            </div>
                                            <h4 className="font-bold text-white group-hover:text-secondary transition-colors">{tech.name}</h4>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">{tech.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
