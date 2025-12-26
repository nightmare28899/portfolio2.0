import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiAmazon,
    SiAngular,
    SiIonic,
    SiCapacitor,
    SiJasmine,
    SiRedux,
    SiMui,
    SiVite,
    SiReactrouter,
    SiStyledcomponents,
    SiNextdotjs,
    SiTailwindcss,
    SiDocker,
    SiGit,
    SiChartdotjs,
    SiExpress,
    SiAxios,
    SiFirebase,
    SiGitlab,
    SiNodedotjs,
    SiPostgresql,
} from "react-icons/si";
import { Code2, Box, Database, Layers, Zap, Globe, Users, CheckCircle, Repeat, Smartphone, Server } from "lucide-react";

export const getTechIcon = (tag: string) => {
    // Normalize string to lowercase for easier matching
    const normalizedTag = tag.toLowerCase().replace(/\s+/g, "");

    if (normalizedTag.includes("react-native")) return <SiReact className="text-[#61DAFB]" />;
    if (normalizedTag.includes("reactrouter")) return <SiReactrouter className="text-[#CA4245]" />;
    if (normalizedTag.includes("react")) return <SiReact className="text-[#61DAFB]" />;
    if (normalizedTag.includes("typescript")) return <SiTypescript className="text-[#3178C6]" />;
    if (normalizedTag.includes("javascript")) return <SiJavascript className="text-[#F7DF1E]" />;
    if (normalizedTag.includes("html")) return <SiHtml5 className="text-[#E34F26]" />;
    if (normalizedTag.includes("css")) return <SiCss3 className="text-[#1572B6]" />;
    if (normalizedTag.includes("s3")) return <SiAmazon className="text-[#FF9900]" />;
    if (normalizedTag.includes("angular")) return <SiAngular className="text-[#DD0031]" />;
    if (normalizedTag.includes("ionic")) return <SiIonic className="text-[#3880FF]" />;
    if (normalizedTag.includes("capacitor")) return <SiCapacitor className="text-[#119EFF]" />;
    if (normalizedTag.includes("jasmine")) return <SiJasmine className="text-[#8A4182]" />;
    if (normalizedTag.includes("redux")) return <SiRedux className="text-[#764ABC]" />;
    if (normalizedTag.includes("materialui")) return <SiMui className="text-[#007FFF]" />;
    if (normalizedTag.includes("vite")) return <SiVite className="text-[#646CFF]" />;
    if (normalizedTag.includes("styled-components") || normalizedTag.includes("styledcomponents")) return <SiStyledcomponents className="text-[#DB7093]" />;
    if (normalizedTag.includes("next")) return <SiNextdotjs className="text-[#000000] dark:text-white" />;
    if (normalizedTag.includes("tailwind")) return <SiTailwindcss className="text-[#06B6D4]" />;
    if (normalizedTag.includes("docker")) return <SiDocker className="text-[#2496ED]" />;
    if (normalizedTag.includes("git")) return <SiGit className="text-[#F05032]" />;
    if (normalizedTag.includes("gitlab")) return <SiGitlab className="text-[#FC6D26]" />;
    if (normalizedTag.includes("chart")) return <SiChartdotjs className="text-[#FF6384]" />;
    if (normalizedTag.includes("express")) return <SiExpress className="text-white" />;
    if (normalizedTag.includes("axios")) return <SiAxios className="text-[#5A29E4]" />;
    if (normalizedTag.includes("firebase")) return <SiFirebase className="text-[#FFCA28]" />;
    if (normalizedTag.includes("node")) return <SiNodedotjs className="text-[#339933]" />;
    if (normalizedTag.includes("postgres")) return <SiPostgresql className="text-[#4169E1]" />;
    if (normalizedTag === "aws") return <SiAmazon className="text-[#FF9900]" />;

    // Engineering & Architecture
    if (normalizedTag.includes("cleanarchitecture")) return <Layers size={14} className="text-purple-400" />;
    if (normalizedTag.includes("performance")) return <Zap size={14} className="text-yellow-400" />;
    if (normalizedTag.includes("rest") || normalizedTag.includes("graphql")) return <Globe size={14} className="text-blue-400" />;
    if (normalizedTag.includes("mobile")) return <Smartphone size={14} className="text-green-400" />;

    // Infrastructure
    if (normalizedTag.includes("ci/cd")) return <Repeat size={14} className="text-orange-400" />;

    // Leadership
    if (normalizedTag.includes("leadership")) return <Users size={14} className="text-emerald-400" />;
    if (normalizedTag.includes("review")) return <CheckCircle size={14} className="text-emerald-400" />;
    if (normalizedTag.includes("agile")) return <Repeat size={14} className="text-cyan-400" />;

    // Abstract concepts
    if (normalizedTag.includes("modular")) return <Box size={14} className="text-gray-300" />;
    if (normalizedTag.includes("designpatterns")) return <Database size={14} className="text-gray-300" />; // Or architecture icon

    // Default
    return <Code2 size={14} className="text-gray-400" />;
};
