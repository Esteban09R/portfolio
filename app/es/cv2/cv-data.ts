import { PROFILE } from "@/constants/profile";
import { getPrivateProfile } from "@/constants/private-profile";

export const CV_DATA = {
  name: PROFILE.name,
  image: PROFILE.profile,
  role: "Desarrollador Fullstack",
  contact: {
    email: PROFILE.email,
    phone: getPrivateProfile().phone,
    location: getPrivateProfile().location,
    website: PROFILE.website.replace("https://", ""),
    linkedin: PROFILE.social.linkedin,
    github: PROFILE.social.github,
  },
  summary:
    "Técnico en Informática con interés en el desarrollo de software y la automatización de procesos. Especializado en encontrar soluciones eficientes a problemas prácticos, optimizar flujos de trabajo y aplicar pensamiento analítico en cada proyecto. Actualmente enfocado en el desarrollo frontend con tecnologías modernas y en fortalecer habilidades como desarrollador.",
  experience: [
    {
      company: "Negocios y Servicios S.A.",
      role: "Líder de Equipo - Digitalización y Operativo de Pago de Salarios en Banco contiental",
      period: "2025 - Presente",
      description:
        "• Optimización de Procesos: Desarrollé un sistema de validación lógica en Excel que automatiza la identificación de marcaciones requeridas por documento. Esta herramienta redujo el tiempo de proceso en un 50%.\n• Gestión de Operaciones y Liderazgo: Coordino el equipo de digitalización, estableciendo metas diarias de producción, capacitando al personal y asegurando la calidad bajo estándares bancarios.\n• Gestión Interdepartamental: Actúo como enlace técnico con sucursales para la resolución de errores en transferencias y gestión de incidencias operativas.\n• Control de Inventarios: Administro la base de datos de inventario general para garantizar la trazabilidad absoluta de documentos físicos y digitales.\n• Gestión Integral: Ejecuto tareas de recuperación física y despacho de documentación, manteniendo la continuidad operativa del departamento.",
    },
    {
      company: "Cooperativa Lambaré",
      role: "Pasante en Tesorería",
      period: "Enero - Febrero 2024",
      description:
        "Asistente general en el área de tesorería\n• Apoyo general en procesos diarios de tesorería.\n• Clasificación y control básico de documentación financiera.",
    },
  ],
  skills: {
    technical: [
      "Next.js",
      "React",
      "JavaScript/TypeScript",
      "Tailwind",
      "Framer Motion",
      "HTML/CSS",
      "Python",
      "PHP",
      "SQL (PostgreSQL)",
      "Git/GitHub",
      "Bash / Shell Scripting",
      "Sistemas GNU/Linux",
      "Tauri",
      "Automatización de Datos (Excel)",
    ],
    languages: ["Español (Lengua materna)", "Inglés intermedio (B2)"],
  },
  softSkills: [
    { name: "Pensamiento Crítico y Analítico" },
    { name: "Liderazgo de Equipos" },
    { name: "Automatización de Procesos" },
    { name: "Resolución de Conflictos" },
    { name: "Gestión de Metas (KPIs)" },
  ],
  interests: ["Open Source", "Scripting", "UI/UX Design"],
  education: [
    {
      school: "Universidad Americana",
      degree: "Ingeniería Informática",
      period: "2025 - Presente",
    },
    {
      school: "Escuela Nacional de Comercio N°1",
      degree: "Bachillerato Técnico en Informática",
      period: "2022 - 2024",
    },
  ],
  projects: [
    {
      name: "v0id coffee",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS v4"],
      description:
        'Landing page conceptual enfocada en demostrar alto nivel de personalización y calidad visual dentro de soluciones personalizadas. V0id coffee es una marca ficticia de cafetería que se enfoca en los "night owls".\n• Desarrollo de una interfaz de alto rendimiento con Next.js (App Router), priorizando la modularidad mediante componentes reutilizables.\n• Diseño UI/UX custom con estética "terminal" (dark + neon).\n• Implementación de efectos glassmorphism y animaciones personalizadas.',
      link: PROFILE.projects.v0idCoffee.webpage.replace("https://", ""),
    },
  ],
};

export const CV_LABELS = {
  contact: "Contacto",
  skills: "Skills",
  languages: "Idiomas",
  profile: "Perfil Profesional",
  experience: "Experiencia Laboral",
  projects: "Proyectos",
  education: "Educación",
  softSkills: "Aptitudes",
  interests: "Intereses",
  download: "Descargar",
  loading: "Preparando...",
  error: "Error al generar PDF",
};
