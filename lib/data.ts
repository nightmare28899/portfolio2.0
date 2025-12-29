import { assetUrl } from "@/lib/utils";
import { ProjectItem, SkillItem } from "@/lib/types";

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

export const DATA = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      tech: "Portfolio",
      contact: "Contact",
    },
    hero: {
      role: "Full-Stack Developer",
      greeting: "Hello, I'm",
      description: "I am a Front-End focused Full-Stack Developer with experience building scalable, maintainable web applications for real-world products.\n\nI currently work as a Front-End Team Coordinator, contributing to technical decision-making, code reviews, and close collaboration with designers, backend engineers, and stakeholders to deliver high-quality, production-ready solutions.",
      ctaProject: "View Projects",
      ctaCV: "Download CV",
      techTitle: "Modern Tech",
      techSubtitle: "Next.js • React • Tailwind",
    },
    about: {
      title: "About Me",
      role: "Full-Stack Developer",
      description: "Full-Stack Developer with a strong Front-End focus, experienced in leading and structuring scalable front-end solutions for real-world products. I focus on clean architecture, performance optimization, and long-term maintainability, contributing not only with code but also with technical decision-making and team collaboration.",
      experience: "4 years working",
      experienceLabel: "Experience",
      freelance: "Freelance",
      available: "Available",
      location: "Morelia, Michoacán",
      locationLabel: "Location",
      quote: "Building production-ready web applications with a focus on performance, accessibility, and long-term maintainability.",
      trusted: "Trusted by Innovative Teams"
    },
    skills: {
      title: "Skills & Tech Stack",
      items: [
        {
          name: "React",
          category: "Core Expertise",
          description: "Advanced component composition, custom hooks, and state management patterns for large-scale applications."
        },
        {
          name: "Next.js",
          category: "Core Expertise",
          description: "Building performance-critical web apps with SSR, ISR, and App Router architecture."
        },
        {
          name: "TypeScript",
          category: "Core Expertise",
          description: "Enforcing strict type safety to improve code reliability and developer experience in complex codebases."
        },
        {
          name: "JavaScript",
          category: "Core Expertise",
          description: "Deep understanding of the event loop, async programming, and modern ES6+ features."
        },
        {
          name: "Tailwind CSS",
          category: "Core Expertise",
          description: "Architecting responsive, scalable design systems with utility-first CSS."
        },
        {
          name: "CSS",
          category: "Core Expertise",
          description: "Advanced CSS techniques for customizing component styles and layout."
        },
        {
          name: "Ant-design",
          category: "Core Expertise",
          description: "Designing accessible, responsive, and consistent user interfaces with a component library."
        },
        {
          name: "Clean Architecture",
          category: "Engineering & Architecture",
          description: "Designing modular, maintainable codebases using SOLID principles and layered architecture."
        },
        {
          name: "Performance",
          category: "Engineering & Architecture",
          description: "Optimizing Core Web Vitals, bundle size, and ensuring 60fps rendering performance."
        },
        {
          name: "REST & GraphQL",
          category: "Engineering & Architecture",
          description: "Designing and consuming efficient APIs for seamless data layering."
        },
        {
          name: "Mobile Dev",
          category: "Engineering & Architecture",
          description: "Cross-platform mobile development with React Native, Ionic, and Capacitor."
        },
        {
          name: "AWS",
          category: "Infrastructure & Tooling",
          description: "Cloud-native deployment using S3, CloudFront, Amplify, and Route53 for global scale."
        },
        {
          name: "Docker",
          category: "Infrastructure & Tooling",
          description: "Containerizing applications for consistent development, testing, and production environments."
        },
        {
          name: "CI/CD",
          category: "Infrastructure & Tooling",
          description: "Automating testing and deployment pipelines to ensure reliable delivery."
        },
        {
          name: "Tech Leadership",
          category: "Team & Leadership",
          description: "Leading frontend initiatives, architectural decision-making, and driving technical standards."
        },
        {
          name: "Code Review",
          category: "Team & Leadership",
          description: "Ensuring code quality, preventing regression, and mentoring team members through reviews."
        },
        {
          name: "Agile Process",
          category: "Team & Leadership",
          description: "Streamlining development workflows and collaborating in fast-paced Scrum environments."
        },
      ] as SkillItem[]
    },
    projects: {
      title: "Featured Projects",
      technologies: "Technologies",
      overview: "Overview",
      keyResponsibilities: "Key Responsibilities",
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
          description: "I contributed to the development and maintenance of a production web application, working on multiple modules, fixing bugs, and ensuring long-term stability. My responsibilities included feature development, bug fixing, and code reviews, maintaining high code quality standards across the team. I actively collaborated with other developers to ensure clean, maintainable, and scalable solutions. Additionally, we held regular meetings with stakeholders and clients to present progress, gather feedback, and refine new requirements. The client’s ecosystem consists of three different applications; however, for confidentiality reasons, only the publicly available application can be showcased in this portfolio.",
          longDescription: "RedÁguila is the definitive mobile experience for Club América fans, designed to deepen the connection between the team and its supporters. Beyond standard news and updates, the app offers a gamified ecosystem where user engagement—watching videos, attending matches, and participating in trivia—translates into loyalty points. These points can be redeemed for exclusive rewards, creating a tangible value exchange. The app handles high traffic during match days and integrates real-time data updates, requiring a robust and optimized frontend architecture.",
          role: "Lead Front-End Engineer",
          responsibilities: [
            "Architected and implemented core mobile modules using React Native and TypeScript.",
            "Optimized application performance to handle concurrent user spikes during live matches.",
            "Integrated complex loyalty program logic and gamification features.",
            "Collaborated closely with backend teams to design efficient API data structures.",
            "Mentored junior developers and established code quality standards."
          ],
          techStack: ["React Native", "TypeScript", "Styled Components", "Redux Toolkit", "Axios", "AWS", "S3", "Modular Architecture"],
          demo: "https://play.google.com/store/apps/details?id=com.clubamerica.redaguila_app&hl=es_MX",
          tags: ["React Native", "TypeScript", "Styled Components", "Redux Toolkit", "Axios", "AWS", "S3", "Modular Architecture"],
          type: "mobile",
          titleLink: "https://play.google.com/store/apps/details?id=com.clubamerica.redaguila_app&hl=es_MX",
        },
        {
          id: 2,
          img: assetUrl("images/government/ingresos-propios-login.png"),
          img2: assetUrl("images/government/ingresos-propios-home.png"),
          title: "Ingresos Propios",
          description: "A government platform designed to manage public institutions in the state of Michoacán, providing detailed reporting and statistical insights on operational costs and revenue generated through institutional registrations.",
          longDescription: "Ingresos Propios is a critical government platform that streamlines the financial management of public institutions in Michoacán. It replaces legacy manual processes with a centralized digital system for tracking revenue, expenses, and budget allocation. The dashboard provides real-time visualization of financial data, enabling decision-makers to audit and analyze institutional performance with valid, granular data. Security and data integrity were paramount in its design.",
          role: "Full-Stack Developer",
          responsibilities: [
            "Developed the entire frontend using React, focusing on accessibility and responsive design.",
            "Implemented complex data visualization dashboards using Chart libraries.",
            "Designed and integrated a secure authentication and role-based access control system.",
            "Created reusable UI components to ensure consistency across the government platform.",
            "Optimized data fetching strategies to handle large datasets efficiently."
          ],
          techStack: ["React", "Material UI", "Redux", "Chart.js", "Vite", "Axios", "Modular Architecture"],
          demo: "https://www.ingresospropios.michoacan.gob.mx/",
          tags: ["React", "Material UI", "Redux", "Chart.js", "Vite", "Axios", "Modular Architecture"],
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
          longDescription: "SIMON is a comprehensive utility management app designed for ease of use and reliability. It allows customers to manage their accounts, view consumption history, and securely pay bills. The app focuses on cross-platform compatibility, delivering a native-like experience on both iOS and Android from a single codebase. Key features include push notifications for bill alerts, offline mode for viewing past data, and secure payment gateway integration.",
          role: "Frontend Developer",
          responsibilities: [
            "Migrated legacy codebase to modern Angular and Ionic versions.",
            "Implemented secure payment processing flows and receipt generation.",
            "Added offline capabilities and data synchronization using local storage.",
            "Wrote unit and integration tests to ensure app stability across updates."
          ],
          techStack: ["Angular", "Ionic", "Capacitor", "TypeScript", "RxJS", "SASS"],
          demo: "https://play.google.com/store/apps/details?id=mx.com.divox.simonapp&hl=es_MX",
          tags: ["Angular", "Ionic", "Capacitor", "TypeScript", "RxJS", "SASS"],
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
    },
    techInfrastructure: {
      title: "Portfolio Technologies & Infrastructure",
      subtitle: "This portfolio is built on a production-ready architecture, prioritizing performance, scalability, and long-term maintainability. Every technology choice reflects a deliberate engineering decision to ensure reliability and global availability.",
      frontend: {
        title: "Modern Frontend",
        description: "Built for speed and user experience"
      },
      infrastructure: {
        title: "Cloud Infrastructure",
        description: "Scalable, secure, and globally distributed"
      },
      domainManagement: {
        title: "Domain & DNS Management",
        description: "Ensuring high availability and secure routing for global access"
      },
      items: {
        nextjs: "Hybrid rendering strategy (SSR/SSG) for optimal performance and SEO.",
        tailwindcss: "Utility-first architecture for consistent, scalable design systems.",
        typescript: "Strict type safety ensuring robust, maintainable codebases.",
        s3: "Durable object storage for high-availability asset delivery.",
        cloudfront: "Global content delivery network ensuring low-latency access.",
        amplify: "Automated CI/CD pipelines for reliable, continuous deployment.",
        route53: "Scalable DNS management for high-availability routing.",
        ionos: "Domain management integration for seamless service configuration."
      }
    },
    footer: {
      rights: "All rights reserved.",
      role: "Software Engineer"
    }
  },
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      tech: "Portafolio",
      contact: "Contacto",
    },
    hero: {
      role: "Desarrollador Full-Stack",
      greeting: "Hola, soy",
      description: "Soy un Desarrollador Full-Stack enfocado en el Front-End con experiencia en la construcción de aplicaciones web escalables y mantenibles para productos del mundo real.\n\nActualmente trabajo como Coordinador de Equipo Front-End, contribuyendo a la toma de decisiones técnicas, revisiones de código y una estrecha colaboración con diseñadores, ingenieros backend y partes interesadas para entregar soluciones de alta calidad listas para producción.",
      ctaProject: "Ver Proyectos",
      ctaCV: "Descargar CV",
      techTitle: "Tecnología Moderna",
      techSubtitle: "Next.js • React • Tailwind",
    },
    about: {
      title: "Sobre mí",
      role: "Desarrollador Full-Stack",
      description: "Desarrollador Full-Stack con un fuerte enfoque en Front-End, con experiencia liderando y estructurando soluciones front-end escalables para productos del mundo real. Me enfoco en arquitectura limpia, optimización de rendimiento y mantenibilidad a largo plazo, contribuyendo no solo con código sino también con toma de decisiones técnicas y colaboración en equipo.",
      experience: "4 años trabajando",
      experienceLabel: "Experiencia",
      freelance: "Freelance",
      available: "Disponible",
      location: "Morelia, Michoacán",
      locationLabel: "Ubicación",
      quote: "Construyendo aplicaciones web listas para producción con un enfoque en rendimiento, accesibilidad y mantenibilidad a largo plazo.",
      trusted: "Con la confianza de equipos innovadores"
    },
    skills: {
      title: "Habilidades y Tecnologías",
      items: [
        {
          name: "React",
          category: "Experiencia Principal",
          description: "Composición avanzada de componentes, hooks personalizados y patrones de gestión de estado para aplicaciones a gran escala."
        },
        {
          name: "Next.js",
          category: "Experiencia Principal",
          description: "Construcción de aplicaciones web de rendimiento crítico con SSR, ISR y arquitectura App Router."
        },
        {
          name: "TypeScript",
          category: "Experiencia Principal",
          description: "Aplicación de seguridad de tipos estricta para mejorar la fiabilidad del código y la experiencia del desarrollador en bases de código complejas."
        },
        {
          name: "JavaScript",
          category: "Experiencia Principal",
          description: "Profundo entendimiento del event loop, programación asíncrona y características modernas de ES6+."
        },
        {
          name: "Tailwind CSS",
          category: "Experiencia Principal",
          description: "Arquitectura de sistemas de diseño responsivos y escalables con CSS de utilidad primero."
        },
        {
          name: "CSS",
          category: "Experiencia Principal",
          description: "Técnicas avanzadas de CSS para personalizar estilos y maquetación de componentes."
        },
        {
          name: "Ant-design",
          category: "Experiencia Principal",
          description: "Diseño de interfaces de usuario accesibles, responsivas y consistentes con una biblioteca de componentes."
        },
        {
          name: "Clean Architecture",
          category: "Ingeniería y Arquitectura",
          description: "Diseño de bases de código modulares y mantenibles utilizando principios SOLID y arquitectura por capas."
        },
        {
          name: "Performance",
          category: "Ingeniería y Arquitectura",
          description: "Optimización de Core Web Vitals, tamaño del bundle y aseguramiento de rendimiento de renderizado a 60fps."
        },
        {
          name: "REST & GraphQL",
          category: "Ingeniería y Arquitectura",
          description: "Diseño y consumo de APIs eficientes para una capa de datos fluida."
        },
        {
          name: "Mobile Dev",
          category: "Ingeniería y Arquitectura",
          description: "Desarrollo móvil multiplataforma con React Native, Ionic y Capacitor."
        },
        {
          name: "AWS",
          category: "Infraestructura y Herramientas",
          description: "Despliegue nativo en la nube usando S3, CloudFront, Amplify y Route53 para escala global."
        },
        {
          name: "Docker",
          category: "Infraestructura y Herramientas",
          description: "Contenerización de aplicaciones para entornos consistentes de desarrollo, pruebas y producción."
        },
        {
          name: "CI/CD",
          category: "Infraestructura y Herramientas",
          description: "Automatización de pipelines de pruebas y despliegue para asegurar entregas fiables."
        },
        {
          name: "Technical Leadership",
          category: "Equipo y Liderazgo",
          description: "Liderazgo de iniciativas frontend, toma de decisiones arquitectónicas e impulso de estándares técnicos."
        },
        {
          name: "Code Review",
          category: "Equipo y Liderazgo",
          description: "Aseguramiento de calidad de código, prevención de regresiones y mentoría a miembros del equipo mediante revisiones."
        },
        {
          name: "Agile Process",
          category: "Equipo y Liderazgo",
          description: "Optimización de flujos de desarrollo y colaboración en entornos Scrum de ritmo rápido."
        },
      ] as SkillItem[]
    },
    projects: {
      title: "Proyectos Destacados",
      technologies: "Tecnologías",
      overview: "Descripción General",
      keyResponsibilities: "Responsabilidades Clave",
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
          description: "Contribuí al desarrollo y mantenimiento de una aplicación web en producción, trabajando en múltiples módulos, corrigiendo errores y asegurando la estabilidad a largo plazo. Mis responsabilidades incluyeron el desarrollo de funcionalidades, corrección de errores y revisiones de código, manteniendo altos estándares de calidad de código en todo el equipo. Colaboré activamente con otros desarrolladores para asegurar soluciones limpias, mantenibles y escalables. Además, mantuvimos reuniones regulares con las partes interesadas y clientes para presentar avances, recopilar comentarios y refinar nuevos requisitos. El ecosistema del cliente consta de tres aplicaciones diferentes; sin embargo, por razones de confidencialidad, solo la aplicación disponible públicamente puede mostrarse en este portafolio.",
          longDescription: "RedÁguila es la experiencia móvil definitiva para los fanáticos del Club América, diseñada para profundizar la conexión entre el equipo y sus seguidores. Más allá de noticias y actualizaciones estándar, la aplicación ofrece un ecosistema gamificado donde la participación del usuario—ver videos, asistir a partidos y participar en trivias—se traduce en puntos de lealtad. Estos puntos pueden canjearse por recompensas exclusivas, creando un intercambio de valor tangible. La aplicación maneja alto tráfico durante los días de partido e integra actualizaciones de datos en tiempo real, requiriendo una arquitectura frontend robusta y optimizada.",
          role: "Ingeniero Front-End Líder",
          responsibilities: [
            "Arquitecté e implementé módulos móviles centrales utilizando React Native y TypeScript.",
            "Optimicé el rendimiento de la aplicación para manejar picos de usuarios concurrentes durante los partidos en vivo.",
            "Integré lógica compleja del programa de lealtad y características de gamificación.",
            "Colaboré estrechamente con los equipos de backend para diseñar estructuras de datos de API eficientes.",
            "Mentoricé a desarrolladores junior y establecí estándares de calidad de código."
          ],
          techStack: ["React Native", "TypeScript", "Styled Components", "Redux", "Axios", "AWS", "S3", "Modular Architecture"],
          tags: ["React Native", "TypeScript", "Styled Components", "Redux", "Axios", "AWS", "S3", "Modular Architecture"],
          type: "mobile",
          titleLink: "https://play.google.com/store/apps/details?id=com.clubamerica.redaguila_app&hl=es_MX",
        },
        {
          id: 2,
          img: assetUrl("images/government/ingresos-propios-login.png"),
          img2: assetUrl("images/government/ingresos-propios-home.png"),
          title: "Ingresos Propios",
          description: "Una plataforma gubernamental diseñada para administrar las instituciones públicas del estado de Michoacán, proporcionando reportes detallados y análisis estadísticos sobre los costos operativos y los ingresos generados a través de los procesos de inscripción institucional.",
          longDescription: "Ingresos Propios es una plataforma gubernamental crítica que agiliza la gestión financiera de las instituciones públicas en Michoacán. Reemplaza los procesos manuales heredados por un sistema digital centralizado para el seguimiento de ingresos, gastos y asignación presupuestaria. El panel proporciona visualización en tiempo real de datos financieros, permitiendo a los tomadores de decisiones auditar y analizar el desempeño institucional con datos válidos y granulares. La seguridad y la integridad de los datos fueron primordiales en su diseño.",
          role: "Desarrollador Full-Stack",
          responsibilities: [
            "Desarrollé todo el frontend utilizando React, con un enfoque en accesibilidad y diseño responsivo.",
            "Implementé paneles complejos de visualización de datos utilizando bibliotecas de gráficos.",
            "Diseñé e integré un sistema de autenticación seguro y control de acceso basado en roles.",
            "Creé componentes de UI reutilizables para garantizar la consistencia en toda la plataforma gubernamental.",
            "Optimicé las estrategias de obtención de datos para manejar grandes conjuntos de datos de manera eficiente."
          ],
          techStack: ["React", "Material UI", "Redux Toolkit", "Chart.js", "Vite", "Axios"],
          demo: "https://www.ingresospropios.michoacan.gob.mx/",
          tags: ["React", "Material UI", "Redux Toolkit", "Chart.js", "Vite", "Axios"],
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
          longDescription: "SIMON es una aplicación integral de gestión de servicios públicos diseñada para facilitar su uso y fiabilidad. Permite a los clientes administrar sus cuentas, ver el historial de consumo y pagar facturas de forma segura. La aplicación se centra en la compatibilidad multiplataforma, ofreciendo una experiencia nativa tanto en iOS como en Android desde una única base de código. Las características clave incluyen notificaciones push para alertas de facturas, modo fuera de línea para ver datos pasados e integración segura de pasarela de pagos.",
          role: "Desarrollador Frontend",
          responsibilities: [
            "Migré la base de código heredada a versiones modernas de Angular e Ionic.",
            "Implementé flujos seguros de procesamiento de pagos y generación de recibos.",
            "Agregué capacidades fuera de línea y sincronización de datos utilizando almacenamiento local.",
            "Escribí pruebas unitarias y de integración para asegurar la estabilidad de la aplicación a través de las actualizaciones."
          ],
          techStack: ["Angular", "Ionic", "Capacitor", "TypeScript", "RxJS", "SASS"],
          demo: "https://play.google.com/store/apps/details?id=mx.com.divox.simonapp&hl=es_MX",
          tags: ["Angular", "Ionic", "Capacitor", "TypeScript", "RxJS", "SASS"],
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
    },
    techInfrastructure: {
      title: "Portafolio Tecnológia e Infraestructura",
      subtitle: "Este portafolio está construido sobre una arquitectura lista para producción, priorizando el rendimiento, la escalabilidad y la mantenibilidad a largo plazo. Cada elección tecnológica refleja una decisión de ingeniería deliberada para garantizar la fiabilidad y la disponibilidad global.",
      frontend: {
        title: "Frontend Moderno",
        description: "Construido para velocidad y experiencia de usuario"
      },
      infrastructure: {
        title: "Infraestructura Cloud",
        description: "Escalable, segura y distribuida globalmente"
      },
      domainManagement: {
        title: "Gestión de Dominios y DNS",
        description: "Asegurando alta disponibilidad y enrutamiento seguro para acceso global"
      },
      items: {
        nextjs: "Estrategia de renderizado híbrido (SSR/SSG) para un rendimiento y SEO óptimos.",
        tailwindcss: "Arquitectura 'utility-first' para sistemas de diseño consistentes y escalables.",
        typescript: "Seguridad de tipos estricta que garantiza bases de código robustas y mantenibles.",
        s3: "Almacenamiento de objetos duradero para entrega de activos de alta disponibilidad.",
        cloudfront: "Red de entrega de contenido global que asegura acceso de baja latencia.",
        amplify: "Pipelines de CI/CD automatizados para despliegues continuos y fiables.",
        route53: "Gestión de DNS escalable para enrutamiento de alta disponibilidad.",
        ionos: "Integración de gestión de dominios para configuración de servicios fluida."
      }
    },
    footer: {
      rights: "Todos los derechos reservados.",
      role: "Ingeniero de Software"
    }
  }
};
