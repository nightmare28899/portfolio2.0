"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();
    const activeSection = useActiveSection(["hero", "about", "projects", "skills", "tech-infrastructure", "contact"]);

    const navLinks = [
        { name: t.navbar.home, href: "#hero" },
        { name: t.navbar.about, href: "#about" },
        { name: t.navbar.skills, href: "#skills" },
        { name: t.navbar.projects, href: "#projects" },
        { name: t.navbar.tech, href: "#tech-infrastructure" },
        { name: t.navbar.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarVariants = {
        top: {
            backgroundColor: "rgba(10, 10, 10, 0)",
            backdropFilter: "blur(0px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0)",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem"
        },
        scrolled: {
            backgroundColor: "rgba(10, 10, 10, 0.7)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "1rem",
            paddingBottom: "1rem"
        }
    };

    return (
        <motion.nav
            variants={navbarVariants}
            initial="top"
            animate={scrolled ? "scrolled" : "top"}
            transition={{ duration: 0.3 }}
            className="fixed top-0 w-full z-50"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                    <Code2 className="text-primary" />
                    <span>Kevinlg<span className="text-primary">.dev</span></span>
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-300 uppercase tracking-wide ${isActive ? "text-primary scale-105" : "text-foreground opacity-80 hover:opacity-100 hover:text-primary"}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide opacity-80 hover:opacity-100 cursor-pointer"
                    >
                        <Globe size={16} />
                        {language === "en" ? "ES" : "EN"}
                    </button>
                </div>

                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden"
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsOpen(false);
                            }}
                            className="flex items-center gap-2 text-lg font-medium hover:text-primary cursor-pointer"
                        >
                            <Globe size={20} />
                            {language === "en" ? "Cambiar a Español" : "Switch to English"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
