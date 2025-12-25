"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 text-center">
                <h4 className="text-white font-medium tracking-wide mb-2 opacity-90">
                    {t.footer.role}
                </h4>
                <p className="text-sm text-gray-500 font-light">
                    &copy; {currentYear} Kevin López González. {t.footer.rights}
                </p>
            </div>
        </footer>
    );
}
