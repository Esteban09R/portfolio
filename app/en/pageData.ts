export const PAGE_DATA = {
  hero: {
    description: "Fullstack Developer",
    text: "I develop applications and systems focused on solving ",
    highlight: "real needs",
    conclusion: ", prioritizing simplicity, efficiency, and maintainability.",
  },
  nav: [
    { label: "home", href: "#home" },
    { label: "projects", href: "#projects" },
    { label: "about me", href: "#about-me" },
  ],
  projects: {
    sectionTitle: "Projects",
    v0idCoffee: {
      title: "v0id coffee",
      description:
        "Landing page for a coffee shop aimed at night owls and programmers, featuring a 'terminal' aesthetic with modern glassmorphism, a dark theme reminiscent of a terminal, and smooth animations.",
      image: "/v0id-coffee.png",
      githubLabel: "View on GitHub",
      webpageLabel: "Visit website",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Resend",
      ],
    },
    blance: {
      title: "Blance",
      description:
        "Blance is a budget management app focused on simplicity, control, and offline use. It was designed as a minimalist alternative to financial apps overloaded with unnecessary functions and intrusive advertising.",
      image: "/blance.png",
      githubLabel: "View on GitHub",
      technologies: ["Rust", "Tauri", "Next.js", "TypeScript", "Tailwind CSS"],
      inDevelopment: "Currently in development",
    },
  },
  about: {
    title: "About me",
    paragraphs: [
      "I am a 19-year-old developer passionate about efficiency and systems architecture. My daily workflow takes place in a highly customized Arch Linux environment, where optimization isn't just a hobby—it's a standard.",
      "Currently, I work in the banking sector leading a Data Digitalization operations team. While my primary role focuses on strategic management and information flow, I leverage my passion for programming to understand and improve how we interact with technology.",
    ],
    conclusion:
      "My personal technical focus is centered on the Rust and Tauri ecosystem for high-performance applications, alongside Next.js for modern interfaces. I aim to merge my real-world team leadership experience with my technical skills to build robust, aesthetic digital tools.",
    image: "/desktop.png",
    imageAlt: "Illustrative image of my operating system",
  },
  footer: {
    title: "Contact me",
    description:
      "Let's keep in touch through my social networks or by sending me a direct message:",
    formLabels: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      success: "Message sent successfully!",
      error: "There was an error sending the message.",
      namePlaceholder: "your name",
      emailPlaceholder: "user@example.com",
      messagePlaceholder: "message content",
    },
    copyright: "Esteban Rolon. All rights reserved.",
  },
  contact: {
    label: "Contact me",
    id: "contact",
  },
};
