import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { assetUrl } from "@/lib/utils";

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
}

export const COMPANIES = [
  { name: "La Voz", logo: assetUrl("images/carousel-logos/logo-lavoz.jpg") },
  { name: "Scio", logo: assetUrl("images/carousel-logos/logo-scio.png") },
  { name: "Anmex", logo: assetUrl("images/carousel-logos/logo-anmex.png") },
  { name: "Newww", logo: assetUrl("images/carousel-logos/logo-newww.png") },
  { name: "Gobierno Digital", logo: assetUrl("images/carousel-logos/logo-gobierno-digital.png") },
];

export const PERSONAL_INFO = {
  name: "Kevin López",
  role: "Full-Stack Developer",
  bio: "I am a Full-Stack developer with a passion for creating beautiful responsive websites. I have a passion for learning new technologies and practicing by doing projects; I am dedicated to building robust and scalable web applications.",
  experience: "4 years working",
  freelance: "Freelance",
  available: "Available",
  location: "Morelia, Michoacán",
  email: "kevin.lopez@kevinlg.dev",
  github: "https://github.com/nightmare28899",
  linkedin: "https://linkedin.com/in/kevinlg-dev",
  profileImage: assetUrl("images/profile/profile.png"),
  resumeEn: assetUrl("cv/CV_KLG.pdf"),
  resumeEs: assetUrl("cv/CV_KLG_SPANISH.pdf"),
};

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/nightmare28899",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kevinlg-dev",
    icon: FiLinkedin,
  },
  {
    name: "Email",
    url: "mailto:kevin.lopez@kevinlg.dev",
    icon: Mail,
  },
];

export const SKILLS = [
  { name: "TypeScript", level: "Intermediate", category: "Languages" },
  { name: "JavaScript", level: "Experienced", category: "Languages" },
  { name: "Java", level: "Basic", category: "Languages" },
  { name: "PHP", level: "Intermediate", category: "Languages" },
  { name: "HTML5", level: "Experienced", category: "Frontend" },
  { name: "React", level: "Experienced", category: "Frontend" },
  { name: "Next.js", level: "Intermediate", category: "Frontend" },
  { name: "Vue", level: "Intermediate", category: "Frontend" },
  { name: "Angular", level: "Basic", category: "Frontend" },
  { name: "CSS3", level: "Intermediate", category: "CSS & UI" },
  { name: "SASS", level: "Intermediate", category: "CSS & UI" },
  { name: "Bootstrap", level: "Experienced", category: "CSS & UI" },
  { name: "TailwindCSS", level: "Intermediate", category: "CSS & UI" },
  { name: "Material UI", level: "Experienced", category: "CSS & UI" },
  { name: "Ant-Design", level: "Experienced", category: "CSS & UI" },
  { name: "React-native", level: "Intermediate", category: "Mobile" },
  { name: "Ionic", level: "Intermediate", category: "Mobile" },
  { name: "Capacitor", level: "Basic", category: "Mobile" },
  { name: "Kotlin", level: "Basic", category: "Mobile" },
  { name: "Jetpack Compose", level: "Basic", category: "Mobile" },
  { name: "Node.js", level: "Basic", category: "Backend" },
  { name: "Laravel", level: "Intermediate", category: "Backend" },
  { name: "Spring Boot", level: "Basic", category: "Backend" },
  { name: "Express.js", level: "Basic", category: "Backend" },
  { name: "MySQL", level: "Basic", category: "Databases" },
  { name: "PostgreSQL", level: "Basic", category: "Databases" },
  { name: "Vite", level: "Intermediate", category: "Tools" },
  { name: "Git", level: "Intermediate", category: "Tools" },
  { name: "Docker", level: "Basic", category: "Tools" },
  { name: "xcode", level: "Basic", category: "Tools" },
  {
    name: "AWS S3",
    level: "Intermediate",
    category: "Cloud & Infrastructure",
    description: "Secure cloud storage and asset management"
  },
  {
    name: "AWS Amplify",
    level: "Intermediate",
    category: "Cloud & Infrastructure",
    description: "Rapid full-stack deployment and seamless CI/CD"
  },
  {
    name: "CloudFront",
    level: "Intermediate",
    category: "Cloud & Infrastructure",
    description: "Optimizing performance through global content delivery"
  },
  {
    name: "Route 53",
    level: "Intermediate",
    category: "Cloud & Infrastructure",
    description: "DNS configuration and domain management"
  },
];

export const DATA = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      role: "Full-Stack Developer",
      greeting: "Hello, I'm",
      description: "I am a Full-Stack developer with a passion for creating beautiful responsive websites. I have a passion for learning new technologies and practicing by doing projects; I am dedicated to building robust and scalable web applications.",
      ctaProject: "View Projects",
      ctaCV: "Download CV",
      techTitle: "Modern Tech",
      techSubtitle: "Next.js • React • Tailwind",
    },
    about: {
      title: "About Me",
      role: "Full-Stack Developer",
      description: "I am a Full-Stack developer with a passion for creating beautiful responsive websites. I have a passion for learning new technologies and practicing by doing projects; I am dedicated to building robust and scalable web applications.",
      experience: "4 years working",
      experienceLabel: "Experience",
      freelance: "Freelance",
      available: "Available",
      location: "Morelia, Michoacán",
      locationLabel: "Location",
      quote: "Passionate about building accessible, pixel-perfect, and performant web experiences.",
      trusted: "Trusted by Innovative Teams"
    },
    skills: {
      title: "Skills & Tech Stack"
    },
    projects: {
      title: "Featured Projects",
      viewSource: "View Source",
      back: "Back to Projects",
      items: [
        {
          id: 1,
          img: assetUrl("images/talentonet/redaguilapp/redaguila1.webp"),
          img2: assetUrl("images/talentonet/redaguilapp/redaguila2.webp"),
          img3: assetUrl("images/talentonet/redaguilapp/redaguila3.webp"),
          img4: assetUrl("images/talentonet/redaguilapp/redaguila4.webp"),
          title: "RedÁguila",
          description: "It is an official Club América application that allows fans to access exclusive content, team information, and experiences specially designed for supporters.",
          demo: "https://play.google.com/store/apps/details?id=com.clubamerica.redaguila_app&hl=es_MX",
          tags: ["TypeScript", "React-native", "Styled-components", "S3", "Design Patterns"],
          type: "mobile",
          titleLink: "https://play.google.com/store/apps/details?id=com.clubamerica.redaguila_app&hl=es_MX",
        },
        {
          id: 2,
          img: assetUrl("images/government/ingresos-propios-login.png"),
          img2: assetUrl("images/government/ingresos-propios-home.png"),
          title: "Ingresos Propios",
          description: "A government project to manage the payments of the state of Michoacán.",
          demo: "https://www.ingresospropios.michoacan.gob.mx/",
          tags: ["React", "React Router DOM", "Material UI", "Redux", "S3", "Hooks", "Modular Architecture", "Vite"],
          type: "web",
        },
        {
          id: 3,
          img: assetUrl("images/talentonet/simonapp/simon1.webp"),
          img2: assetUrl("images/talentonet/simonapp/simon2.webp"),
          img3: assetUrl("images/talentonet/simonapp/simon3.webp"),
          img4: assetUrl("images/talentonet/simonapp/simon4.webp"),
          img5: assetUrl("images/talentonet/simonapp/simon5.webp"),
          img6: assetUrl("images/talentonet/simonapp/simon6.webp"),
          title: "SIMON",
          description: "SIMON is an application that allows our customers to review their usage and make payments.",
          demo: "https://play.google.com/store/apps/details?id=mx.com.divox.simonapp&hl=es_MX",
          tags: ["TypeScript", "Angular", "Ionic", "Capacitor", "Karma", "Jasmine"],
          type: "mobile",
          titleLink: "https://play.google.com/store/apps/details?id=mx.com.divox.simonapp&hl=es_MX",
        },
      ] as ProjectItem[]
    },

    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.",
      name: "Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "john@example.com",
      message: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sending: "Sending...",
      success: "Sent Successfully",
      error: "Failed to Send"
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      role: "Desarrollador Full-Stack",
      greeting: "Hola, soy",
      description: "Soy un desarrollador Full-Stack apasionado por crear sitios web hermosos y responsivos. Me encanta aprender nuevas tecnologías y practicar creando proyectos; me dedico a construir aplicaciones web robustas y escalables.",
      ctaProject: "Ver Proyectos",
      ctaCV: "Descargar CV",
      techTitle: "Tecnología Moderna",
      techSubtitle: "Next.js • React • Tailwind",
    },
    about: {
      title: "Sobre mí",
      role: "Desarrollador Full-Stack",
      description: "Soy un desarrollador Full-Stack apasionado por crear sitios web hermosos y responsivos. Me encanta aprender nuevas tecnologías y practicar creando proyectos; me dedico a construir aplicaciones web robustas y escalables.",
      experience: "4 años trabajando",
      experienceLabel: "Experiencia",
      freelance: "Freelance",
      available: "Disponible",
      location: "Morelia, Michoacán",
      locationLabel: "Ubicación",
      quote: "Apasionado por construir experiencias web accesibles, perfectas y eficientes.",
      trusted: "Con la confianza de equipos innovadores"
    },
    skills: {
      title: "Habilidades y Tecnologías"
    },
    projects: {
      title: "Proyectos Destacados",
      viewSource: "Ver Código",
      back: "Volver a Proyectos",
      items: [
        {
          id: 1,
          img: assetUrl("images/talentonet/redaguilapp/redaguila1.webp"),
          img2: assetUrl("images/talentonet/redaguilapp/redaguila2.webp"),
          img3: assetUrl("images/talentonet/redaguilapp/redaguila3.webp"),
          img4: assetUrl("images/talentonet/redaguilapp/redaguila4.webp"),
          title: "RedÁguila",
          description: "Es una aplicación oficial del Club América que permite a los aficionados acceder a contenido exclusivo, información del equipo y experiencias diseñadas especialmente para la afición.",
          tags: ["TypeScript", "React-native", "Styled-components", "S3", "Design Patterns"],
          type: "mobile",
          titleLink: "https://play.google.com/store/apps/details?id=com.clubamerica.redaguila_app&hl=es_MX",
        },
        {
          id: 2,
          img: assetUrl("images/government/ingresos-propios-home.png"),
          title: "Ingresos Propios",
          description: "Un proyecto del gobierno.",
          demo: "https://www.ingresospropios.michoacan.gob.mx/",
          tags: ["React", "React Router DOM", "Material UI", "Redux", "S3", "Hooks", "Modular Architecture", "Vite"],
          type: "web",
        },
        {
          id: 3,
          img: assetUrl("images/talentonet/simonapp/simon1.webp"),
          img2: assetUrl("images/talentonet/simonapp/simon2.webp"),
          img3: assetUrl("images/talentonet/simonapp/simon3.webp"),
          img4: assetUrl("images/talentonet/simonapp/simon4.webp"),
          img5: assetUrl("images/talentonet/simonapp/simon5.webp"),
          img6: assetUrl("images/talentonet/simonapp/simon6.webp"),
          title: "SIMON",
          description: "SIMON, es una aplicación que permite a nuestros clientes revisar sus consumos y realizar pagos.",
          demo: "https://play.google.com/store/apps/details?id=mx.com.divox.simonapp&hl=es_MX",
          tags: ["TypeScript", "Angular", "Ionic", "Capacitor", "Karma", "Jasmine"],
          type: "mobile",
          titleLink: "https://play.google.com/store/apps/details?id=mx.com.divox.simonapp&hl=es_MX",
        },
      ] as ProjectItem[]
    },

    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente o solo quieres saludar? Siempre estoy abierto a nuevas oportunidades.",
      name: "Nombre",
      namePlaceholder: "Juan Pérez",
      email: "Correo",
      emailPlaceholder: "juan@ejemplo.com",
      message: "Mensaje",
      messagePlaceholder: "Tu mensaje...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "Enviado con Éxito",
      error: "Error al Enviar"
    }
  }
};
