export const PAGE_DATA = {
  hero: {
    description: "Desarrollador Fullstack",
    text: "Desarrollo aplicaciones y sistemas enfocados en resolver ",
    highlight: "necesidades reales",
    conclusion: ", priorizando la simplicidad, eficiencia y mantenibilidad.",
  },
  nav: [
    { label: "inicio", href: "#inicio" },
    { label: "proyectos", href: "#proyectos" },
    { label: "sobre-mi", href: "#sobre-mi" },
  ],
  projects: {
    sectionTitle: "Proyectos",
    v0idCoffee: {
      title: "v0id coffee",
      description:
        "Landing page para una cafetería orientada a noctámbulos y programadores, con una estética de 'terminal' con glassmorphism moderno, un tema oscuro que recuerda a una terminal y animaciones fluidas.",
      image: "/v0id-coffee.png",
      githubLabel: "Ver en GitHub",
      webpageLabel: "Visitar web",
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
        "Blance es una aplicación de gestión de presupuesto enfocada en la simplicidad, el control y el uso sin conexión. Fue diseñada como una alternativa minimalista a las aplicaciones financieras sobrecargadas con funciones innecesarias y publicidad intrusiva.",
      image: "/blance.png",
      githubLabel: "Ver en GitHub",
      technologies: ["Rust", "Tauri", "Next.js", "TypeScript", "Tailwind CSS"],
      inDevelopment: "Actualmente en desarrollo",
    },
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy un desarrollador de 19 años apasionado por la eficiencia y la arquitectura de sistemas. Mi día a día transcurre en un entorno Arch Linux altamente personalizado, donde la optimización no es un hobby, sino un estándar.",
      "Actualmente, me desempeño en el sector bancario liderando un equipo operativo de digitalización de datos. Aunque mi rol principal es la gestión estratégica y el flujo de información, utilizo mi pasión por la programación para entender y mejorar cómo interactuamos con la tecnología.",
    ],
    conclusion:
      "Mi enfoque técnico personal se centra en el ecosistema de Rust y Tauri para aplicaciones de alto rendimiento, y en Next.js para interfaces modernas. Busco fusionar mi experiencia liderando equipos en el mundo real con mi capacidad técnica para construir herramientas digitales sólidas y estéticas.",
    image: "/desktop.png",
    imageAlt: "Imagen ilustrativa de mi sistema operativo",
  },
  footer: {
    title: "Contacto",
    description:
      "Sigamos en contacto a través de mis redes o enviándome un mensaje directo:",
    formLabels: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
      success: "¡Mensaje enviado con éxito!",
      error: "Hubo un error al enviar el mensaje.",
      namePlaceholder: "tu nombre",
      emailPlaceholder: "user@example.com",
      messagePlaceholder: "contenido del mensaje",
    },
    copyright: "Esteban Rolón. Todos los derechos reservados.",
  },
  contact: {
    label: "Contacto",
    id: "contacto",
  },
};
