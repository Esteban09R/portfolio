import { PROFILE } from "@/constants/profile";
import { PRIVATE_PROFILE } from "@/constants/private-profile";

export const CV_DATA = {
  name: PROFILE.name,
  image: PROFILE.profile,
  role: "IT Technician",
  contact: {
    email: PRIVATE_PROFILE.email,
    phone: PRIVATE_PROFILE.phone,
    location: PRIVATE_PROFILE.location,
    website: PROFILE.website.replace('https://', ''),
    linkedin: PROFILE.social.linkedin,
    github: PROFILE.social.github,
  },
  summary:
    "IT Technician interested in software development and process automation. Specialized in finding efficient solutions to practical problems, optimizing workflows, and applying analytical thinking to every project. Currently focused on frontend development with modern technologies and strengthening developer skills.",
  experience: [
    {
      company: "Continental Bank",
      role: "Team Leader - Digitization and Payment Operations",
      period: "2025 - Present",
      description:
        "• Process Optimization (Shadow IT): Developed a logical validation system in Excel that automates the identification of required markings per document. This tool reduced processing time by 50%.\n• Operations Management and Leadership: Coordinate the digitization team, setting daily production goals, training staff, and ensuring quality under banking standards.\n• Interdepartmental Management: Act as a technical liaison with branches for the resolution of transfer errors and operational incident management.\n• Inventory Control: Manage the general inventory database to ensure absolute traceability of physical and digital documents.\n• Integral Management: Execute physical recovery tasks and documentation dispatch, maintaining the department's operational continuity.",
    },
    {
      company: "Lambaré Cooperative",
      role: "Treasury Intern",
      period: "January - February 2024",
      description:
        "General support in daily treasury processes.\n• Basic classification and control of financial documentation.",
    },
  ],
  skills: {
    technical: [
      "React",
      "Next.js",
      "Tailwind",
      "HTML/CSS",
      "JavaScript/TypeScript",
      "Python",
      "PHP",
      "SQL (PostgreSQL)",
      "Git/GitHub",
      "Bash / Shell Scripting",
      "GNU/Linux systems",
      "Tauri",
      "Data Automation (Excel)",
    ],
    languages: ["Spanish (Native)", "Intermediate English (B2)"],
  },
  softSkills: [
    { name: "Critical & Analytical Thinking" },
    { name: "Team Leadership" },
    { name: "Process Automation" },
    { name: "Conflict Resolution" },
    { name: "KPI & Goals Management" },
  ],
  interests: ["Open Source", "Scripting", "UI/UX Design"],
  education: [
    {
      school: "American University",
      degree: "Computer Engineering",
      period: "2025 - Present",
    },
    {
      school: "Escuela Nacional de Comercio N°1",
      degree: "Technical High School Diploma in Computer Science",
      period: "2022 - 2024",
    },
  ],
  projects: [
    {
      name: "v0id coffee",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS v4"],
      description:
        "Conceptual landing page focused on demonstrating high level of customization and visual quality within personalized solutions. V0id coffee is a fictional coffee brand focusing on \"night owls\".\n• Development of a high-performance interface with Next.js (App Router), prioritizing modularity through reusable components.\n• Custom UI/UX design with \"terminal\" aesthetic (dark + neon).\n• Implementation of glassmorphism effects and custom animations.",
      link: PROFILE.projects.v0idCoffee.webpage.replace('https://', ''),
    },
  ],
};

export const CV_LABELS = {
  contact: "Contact",
  skills: "Skills",
  languages: "Languages",
  profile: "Professional Profile",
  experience: "Work Experience",
  projects: "Projects",
  education: "Education",
  softSkills: "Soft Skills",
  interests: "Interests",
  download: "Download CV",
  loading: "Preparing...",
  error: "Error generating PDF",
};
