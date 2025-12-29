import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

import TechInfrastructure from "@/components/sections/TechInfrastructure";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/globals/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <TechInfrastructure/>
            <Contact/>
            <Footer/>
        </main>
    );
}
