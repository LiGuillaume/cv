import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Liogier Guillaume",
  initials: "LG",
  location: "Lyon, France, CET",
  locationLink: "https://www.google.com/maps/place/Lyon",
  about:
    "Full Stack Engineer",
  summary:
    "As a Full Stack engineer, I've been working on a number of business application projects, from the design phase to the production phase in line with business requirements, for the past 6 years. I currently work mainly with TypeScript, Angular, Nest.js, Node.js and PostgreSQL.",
  avatarUrl: "https://avatars.githubusercontent.com/u/30837240?v=4",
  personalWebsiteUrl: "https://guli.io",
  contact: {
    email: "guillaume.liogier@gmail.com",
    tel: "+33633321928",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/LiGuillaume",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guillaume-liogier-b7a5a1179/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "SUPINFO International University",
      degree: "Master of Science in Computer Science",
      start: "2019",
      end: "2022",
    },
    {
      school: "Lycée la Chartreuse Paradis",
      degree: "BTS SIO Option SLAM (Application design and development)",
      start: "2017",
      end: "2019",
    }
  ],
  educational: [
    {
      company: "Supinfo",
      link: "https://www.supinfo.com/",
      badges: ["1TEAM x1", "3APIS x3", "3SECU x1", "5BLOC x2"],
      title: "Instructor ",
      start: "2021",
      end: "now",
      description:
      [
        "1TEAM : Learning teamwork skills",
        "3APIS : Develop API REST with Express.js and MongoDB",
        "3SECU : Web application security",
        "5BLOC : Introduction to blockchain" 
      ]
    },

    {
      company: "Epitech",
      link: "https://www.epitech.eu",
      badges: ["PGE3"],
      title: "RNCP Level 3 Certification Board",
      start: "2025",
      end: "now",
      description:
        ["Evaluates and validates professional skills at the RNCP Level 3, ensuring alignment with national standards and industry needs."],
    },
  ],
  work: [
    {
      company: "Dougs",
      link: "https://www.dougs.fr",
      badges: ["Partial Remote (80/20)"],
      title: "Software Engineer",
      start: "sep. 2024",
      end: "now",
      description:
        "",
    },

    {
      company: "PALO IT",
      link: "https://www.palo-it.com/en/",
      badges: ["Remote"],
      title: "Full Stack Developer / Consultant",
      start: "jan. 2023",
      end: "march 2024",
      description:
        "",
    },
    {
      company: "Enedis",
      link: "https://www.enedis.fr/",
      badges: [],
      title: "Full Stack Developer",
      start: "nov. 2019",
      end: "oct. 2022",
      description:
        "",
    },
    {
      company: "Enedis",
      link: "https://www.enedis.fr/",
      badges: ["intership"],
      title: "Full Stack Developer",
      start: "jan. 2019",
      end: "feb. 2019",
      description:
        "",
    },
    {
      company: "Enedis",
      link: "https://www.enedis.fr/",
      badges: ["intership"],
      title: "Full Stack Developer",
      start: "may 2018",
      end: "june 2018",
      description: "",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Svelte",	
    "Nest.js",
    "Express.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Wordpress"
  ],
  projects: [
    {
      title: "Dougs",
      techStack: ["TypeScript", "NestJS", "Angular", "Sequelize" ,"PostgreSQL", "Metabase", "Datadog", "Miro", "Github", "Notion"],
      description: "Improvement and development of the application for internal accountants and customers",
      link: {
        label: "dougs.fr",
        href: "https://www.dougs.fr",
      },

    },
    {
      title: "Actua Formation",
      techStack: ["TypeScript", "Svelte", "Express.js", "Prisma" ,"PostgreSQL"],
      description: "Metrics dashboard for management",

    },
    {
      title: "Act 4 Talents",
      techStack: ["Typescript", "React", "Express"],
      description:
        "Test platform for discovering, developing and strengthening your interpersonal and interpersonal skills",
      link: {
        label: "act4talents.fr",
        href: "https://www.act4-talents.fr/testez-vos-capacit%C3%A9s",
      },
    },
    {
      title: "SmarTrack",
      techStack: ["Typescript", "React", "AWS Lambda", "Hyperledger Fabric"],
      description:
        "Manage the carbon impact and the supply of your products thanks to an integral traceability system, while strictly respecting the confidentiality of your business",
      link: {
        label: "smartrack.fr",
        href: "https://smartrack.fr",
      },
    },
    {
      title: "GEDEQ",
      techStack: ["Typescript", "Nest.js", "Angular", "Prisma", "PostgreSQL"],
      description:
        "Intranet application for managing customer requests",
    },
    {
      title: "Petal'",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Intranet application for managing all authorisations, permits and clearances for field operatives",
    },
    {
      title: "Siroco",
      techStack: [
        "PHP",
        "Chart.js",
        "MariaDB",
      ],
      description: "Intranet application for management of cases relating to the mapping of the electricity network",
    },
    {
      title: "CPA LOG",
      techStack: ["PHP", "MariaDB", "javascript", "jQuery"],
      description:
        "Intranet application for schedule management for several departments working together",
    },
  ],
} as const;
