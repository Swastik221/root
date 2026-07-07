export interface Project {
  name: string;
  status?: string;
  description: string;
  links: {
    github?: string;
    visit?: string;
    preview?: string;
    live?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  logo?: string; // Optional URL or emoji
  location: string;
  dateRange: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface Writing {
  title: string;
  date: string;
  link: string;
}

export interface PortfolioConfig {
  name: string;
  title: string;
  location: string;
  bio: string;
  email: string;
  calendarLink?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  medium?: string;
  resume: string;
  experiences: Experience[];
  projects: Project[];
  writings: Writing[];
  searchQuery: string;
}

export const portfolioConfig: PortfolioConfig = {
  name: "Swastik Tiwari",
  title: "Software Engineer",
  location: "Lucknow, India",
  bio: "I'm a Full-Stack Engineer based in Lucknow, India, building modern products with thoughtful design and scalable engineering.",
  email: "tswastik90@gmail.com",
  calendarLink: "https://cal.com/swastik-navubp/15min",
  github: "https://github.com/Swastik221", // Based on their corpus Swastik221
  linkedin: "https://www.linkedin.com/in/swastik-tiwari-940780305/",
  twitter: "https://x.com/Swas__tikk",
  medium: "https://medium.com/@swastiktiwari", // Placeholder
  resume: "#", // Placeholder
  searchQuery: "Why might Swastik Tiwari (Web3 Engineer) matter?",
  experiences: [
    {
      role: "Software Engineering Intern",
      company: "EdRealm",
      logo: "/edrealm.png",
      location: "On-site",
      dateRange: "June 2026 – Present",
      description: "Contributed to the development of secure and scalable backend systems powering payment and blockchain applications. Designed REST APIs, integrated payment gateways, implemented cryptocurrency transaction workflows, and optimized databases while ensuring system security, scalability, and reliability.",
      highlights: [
        "Engineered scalable backend services and REST APIs.",
        "Integrated payment gateways and crypto payment workflows.",
        "Built blockchain and smart contract integrations.",
        "Developed secure wallet authentication mechanisms.",
        "Optimized database performance and backend security."
      ],
      techStack: ["Node.js", "Express.js", "SQL", "JWT", "Blockchain", "Smart Contracts", "Git"]
    }
  ],
  projects: [
    {
      name: "Convoy",
      status: "active",
      description: "Real-time collaborative project tracker with live cursors and sync.",
      links: {
        github: "https://github.com/Swastik221/Convoy"
      }
    },
    {
      name: "Vestly",
      status: "active",
      description: "On-chain token vesting and escrow platform built on Solana/Anchor.",
      links: {
        github: "https://github.com/Swastik221/Vestly"
      }
    },
    {
      name: "Glassbox",
      status: "active",
      description: "Transparent AI agent displaying live reasoning traces and tool calls.",
      links: {
        github: "https://github.com/Swastik221/Glassbox"
      }
    },
    {
      name: "Solstice",
      status: "active",
      description: "AI agent orchestrating and simulating Solana transactions in natural language.",
      links: {
        github: "https://github.com/Swastik221/Solstice"
      }
    }
  ],
  writings: [
    {
      title: "Real-Time Collaboration in Full-Stack Apps: WebSockets, Optimistic UI, and Conflict Resolution",
      date: "Jul 07, 2026",
      link: "https://medium.com/@swastiktiwari9336414294/real-time-collaboration-in-full-stack-apps-websockets-optimistic-ui-and-conflict-resolution-597990819e57?sharedUserId=swastiktiwari9336414294"
    }
  ]
};
