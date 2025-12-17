"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANIES } from "@/lib/data";

export default function CompanyCarousel() {
    return (
        <div className="w-full py-10 overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/5">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Trusted by Innovative Teams
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <motion.div
                    className="flex gap-12 items-center flex-nowrap"
                    animate={{ x: [0, -1035] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, index) => (
                        <div
                            key={`${company.name}-${index}`}
                            className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0 flex items-center justify-center p-4"
                        >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={150}
                                height={80}
                                className="object-contain max-h-full w-auto"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
