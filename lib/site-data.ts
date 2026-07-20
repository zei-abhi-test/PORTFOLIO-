import {
  BrainCircuit,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Server,
  TerminalSquare,
  Wrench,
} from "lucide-react";

export const owner = {
  name: "Abhishek BK",
  role: "Software Product Engineering Student",
  tagline: "Building AI Products, Full Stack Applications and Developer Tools.",
  email: "mailto:bnks.abhishek@gmail.com",
  github: "https://github.com/zei-abhi-test",
  linkedin: "https://www.linkedin.com/in/abhishek--bk",
  resume: "/resume",
};

export const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

export const projects = [
  {
    title: "Muraai",
    description:
      "Contract reminder and workflow automation product built for teams that need reliable follow-ups, cleaner visibility, and fewer missed renewals.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI"],
    github: "https://github.com/zei-abhi-test/Muraai-contract-remainder",
    demo: "https://muraai-contract-remainder.onrender.com",
  },
  {
    title: "ZEI.shop",
    description:
      "Commerce storefront concept focused on fast product discovery, precise interaction design, and a conversion-minded checkout experience.",
    technologies: ["Next.js", "TailwindCSS", "Stripe", "Prisma", "Vercel"],
    github: "https://github.com/zei-abhi-test/zei-shop",
    demo: "https://zei.shop",
  },
  {
    title: "Portfolio",
    description:
      "A premium personal site designed as a product surface: fast, accessible, responsive, and built with reusable App Router components.",
    technologies: ["Next.js 15", "React 19", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/zei-abhi-test/portfolio",
    demo: "https://abhishek-bk.dev",
  },
  {
    title: "AI Assistant",
    description:
      "Developer-focused assistant prototype that combines retrieval, structured tool calls, and clean product UX for daily engineering workflows.",
    technologies: ["OpenAI", "TypeScript", "Node.js", "Vector Search", "React"],
    github: "https://github.com/zei-abhi-test/ai-assistant",
    demo: "https://ai-assistant.abhishek-bk.dev",
  },
];

export const techGroups = [
  { title: "Languages", icon: Code2, items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { title: "Frontend", icon: BrainCircuit, items: ["Next.js", "React", "TailwindCSS", "shadcn/ui"] },
  { title: "Backend", icon: Server, items: ["Node.js", "FastAPI", "REST", "Auth"] },
  { title: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
  { title: "Cloud", icon: ExternalLink, items: ["Vercel", "AWS", "Cloudflare", "Supabase"] },
  { title: "DevOps", icon: TerminalSquare, items: ["Docker", "GitHub Actions", "CI/CD", "Linux"] },
  { title: "Tools", icon: Wrench, items: ["Git", "Figma", "Postman", "VS Code"] },
];

export const experiences = [
  {
    year: "Now",
    title: "Building product-grade engineering systems",
    description:
      "Designing AI products, full stack applications, and developer tools with a focus on clarity, maintainability, and measurable user value.",
  },
  {
    year: "2025",
    title: "Full stack product development",
    description:
      "Shipped application flows across frontend, backend, data modeling, authentication, and deployment pipelines.",
  },
  {
    year: "2024",
    title: "Software product engineering foundation",
    description:
      "Built strong fundamentals across modern web development, typed interfaces, API design, and product thinking.",
  },
];

export const articles = [
  "Designing AI product interfaces that earn trust",
  "What I learned building contract automation workflows",
  "A practical checklist for production-ready Next.js apps",
];

export const contactLinks = [
  { label: "GitHub", href: owner.github, icon: Github },
  { label: "LinkedIn", href: owner.linkedin, icon: Linkedin },
  { label: "Email", href: owner.email, icon: Mail },
  { label: "Resume", href: owner.resume, icon: ExternalLink },
];
