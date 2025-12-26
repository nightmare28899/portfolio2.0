export type Language = "en" | "es";

export interface ProjectItem {
    id: number;
    img: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;
    img6?: string;
    title: string;
    github?: string;
    description: string;
    demo?: string;
    tags: string[];
    type: "mobile" | "web";
    titleLink?: string;
    longDescription?: string;
    role?: string;
    responsibilities?: string[];
    techStack?: string[];
}

export interface SkillItem {
    name: string;
    level: string;
    category: string;
    description: string;
}
