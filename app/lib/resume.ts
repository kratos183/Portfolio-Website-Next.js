import { site } from "./site";

/** Long-form professional summary used on the printable résumé. */
export const summaryText = `Backend-focused engineer with 3+ years building production web applications and distributed systems. Shipped four full-stack products end-to-end — a multi-tenant loan origination platform, an AI-powered LMS, an e-commerce suite with a retrieval-augmented AI assistant, and a video streaming platform — plus a React Native mobile app for on-demand labour booking. Architected event-driven order pipelines using Apache Kafka and Redis, cutting database load by 40%. Experienced in containerised deployments (Docker), CI/CD automation (GitHub Actions) and cloud infrastructure on AWS, with industry experience at Nitecore Solutions Private Limited. Seeking a remote backend or full-stack role at a high-growth company.`;

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "Fastify",
      "Next.js Route Handlers",
      "Next.js Server Actions",
      "REST API Design",
      "WebSockets (Socket.IO)",
      "JWT Auth",
      "RBAC",
      "Row-Level Security",
      "Prisma",
      "Python (FastAPI, Flask)",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js 14 / 16",
      "App Router",
      "SSR",
      "Proxy & Middleware",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "SWR",
    ],
  },
  {
    label: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Mongoose",
      "Redis",
      "MySQL",
      "Firebase",
      "Prisma",
      "Indexing & Aggregation",
      "Schema Design",
      "Polyglot Persistence",
      "Sharding",
    ],
  },
  {
    label: "Cloud, DevOps & Delivery",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions CI/CD",
      "AWS EC2",
      "PM2",
      "Nginx",
      "SSL/TLS (Let's Encrypt)",
      "Linux",
      "Vercel",
      "Playwright E2E",
      "Unit Testing",
    ],
  },
  {
    label: "Mobile",
    items: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Navigation",
      "EAS Build",
      "AsyncStorage",
      "Offline-first Design",
    ],
  },
  {
    label: "AI, Payments & Media",
    items: [
      "LangChain",
      "RAG Pipelines",
      "Vector Embeddings",
      "Groq API",
      "OpenAI SDK",
      "Razorpay",
      "Stripe",
      "Cloudinary",
      "Cloudflare R2",
    ],
  },
];

export const tickerItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "Docker",
  "Tailwind CSS",
  "React Native",
  "AWS",
  "GitHub Actions",
  "Socket.IO",
  "Prisma",
  "Playwright",
];

export type Experience = {
  role: string;
  org: string;
  location?: string;
  period?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    org: "Nitecore Solutions Private Limited",
    period: "Present",
    points: [
      "Building and shipping production e-commerce websites for clients — product catalogues, cart and checkout flows, and order management — using Next.js, Node.js and MongoDB/PostgreSQL.",
      "Developing LMS platforms with live class capabilities — video lesson delivery, class scheduling and student dashboards — for online education clients.",
      "Owning features end-to-end across the stack: REST API design, authentication and role-based access control, and deployment to production.",
      "Shipped additional client work — company websites with blogs, landing pages and utility tools such as a browser-based PDF editor — with SEO-ready structure, fully responsive layouts and fast load times.",
    ],
  },
  {
    role: "Independent Software Engineer / Contract Developer",
    org: "Self-Employed",
    period: "2022 – 2025",
    points: [
      "Architected event-driven backend services using Apache Kafka for asynchronous order processing and Redis for high-throughput caching, reducing database load by 40% and improving API latency.",
      "Containerised full-stack applications with Docker and automated zero-downtime deployments via GitHub Actions CI/CD pipelines.",
      "Designed and built RESTful APIs with strict input validation, pagination and JWT-based RBAC middleware using Node.js, Express and Next.js.",
      "Deployed production applications on AWS EC2 with an Nginx reverse proxy, SSL termination via Let's Encrypt and PM2 process management.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Aroha Technologies",
    location: "Bangalore, India",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Built the full frontend and backend of a RAG-powered conversational AI with a ChatGPT-style interface, streaming responses and persistent chat history.",
      "Implemented end-to-end Firebase OAuth for Google and GitHub with MongoDB as the user store, handling token exchange and secure profile persistence.",
      "Owned the chat history module: designed MongoDB schemas, built paginated history APIs and managed session-based context windows to optimise LLM token usage.",
      "Collaborated in a cross-functional agile team to design API contracts, conduct code reviews and ship features faster.",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Noida International University",
    location: "Noida, India",
    period: "2025 – Expected 2028",
    note: "Undergraduate, currently in progress.",
  },
];

export const stats = [
  { value: "4", label: "Full-stack platforms shipped" },
  { value: "1", label: "React Native app in production" },
  { value: "40%", label: "DB load reduction via Kafka + Redis" },
  { value: "3+", label: "Years building software" },
];

export const contactMeta = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
  { label: "Location", value: site.location, href: undefined },
  { label: "Availability", value: site.availability, href: undefined },
];
