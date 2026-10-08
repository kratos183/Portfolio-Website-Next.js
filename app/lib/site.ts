export const site = {
  name: "Chand Ansari",
  role: "Backend & Full-Stack Engineer",
  url: "https://chandansari.dev",
  location: "Dhanbad, India",
  timezone: "IST (UTC+5:30)",
  email: "chandansaricreative@gmail.com",
  phone: "+91-7992430183",
  availability: "Open to Remote — US/EU overlap",
  summary:
    "Backend-focused engineer building production web platforms and distributed systems. Shipped four full-stack products end to end — a role-gated loan origination platform, an AI-powered learning platform, a video streaming service and an e-commerce suite — plus a React Native booking app. Comfortable owning a system from schema design through deployment, CI and observability.",
  links: {
    github: "https://github.com/kratos183",
    linkedin: "https://www.linkedin.com/in/chand-ansari-610348366/",
    email: "mailto:chandansaricreative@gmail.com",
  },
  nav: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;
