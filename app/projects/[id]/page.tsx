import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { DATA } from "@/lib/data";

export function generateStaticParams() {
    const projectIds = DATA.en.projects.items.map((project) => ({
        id: project.id.toString(),
    }));
    return projectIds;
}

const ProjectDetail = ({ params }: { params: { id: string } }) => {
    // Default to English for static generation
    const t = DATA.en;
    const id = params.id;
    const project = t.projects.items.find((p) => p.id === Number(id));

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Project Not Found</div>;
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-6 pt-32 pb-20">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft size={20} /> {t.projects.back}
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>

                        <div className="flex flex-wrap gap-3">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="pt-6 flex gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-medium backdrop-blur-sm"
                                >
                                    <FiGithub size={20} /> {t.projects.viewSource}
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 transition-colors font-medium text-white shadow-lg shadow-primary/25"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProjectDetail;
