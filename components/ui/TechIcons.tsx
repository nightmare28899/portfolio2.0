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
} from "react-icons/si";
import { Code2, Box, Database } from "lucide-react";

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

    // Abstract concepts
    if (normalizedTag.includes("modular")) return <Box size={14} className="text-gray-300" />;
    if (normalizedTag.includes("designpatterns")) return <Database size={14} className="text-gray-300" />; // Or architecture icon

    // Default
    return <Code2 size={14} className="text-gray-400" />;
};
