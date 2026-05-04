export const PROFILE = {
  name: "Esteban Rolon",
  role: "Tecnico en Informatica",
  website: "https://reidan.dev",
  profile: "/profile.jpg",
  social: {
    github: "https://github.com/Esteban09R",
    linkedin: "https://www.linkedin.com/in/estebanrolon09",
    twitter: "https://www.twitter.com/reidandev",
  },
  get socialLinks() {
    return [
      { id: "github", label: "GitHub", href: this.social.github },
      { id: "linkedin", label: "LinkedIn", href: this.social.linkedin },
      { id: "twitter", label: "Twitter", href: this.social.twitter },
    ];
  },
  projects: {
    v0idCoffee: {
      github: "https://github.com/Esteban09R/v0id-coffee",
      webpage: "https://v0id-coffee.vercel.app/",
    },
    blance: {
      github: "https://github.com/Esteban09R/blance",
    },
  },
};
