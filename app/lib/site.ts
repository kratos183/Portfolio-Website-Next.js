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
    "Backend-focused engineer with 3+ years building production web applications and distributed systems. Shipped four full-stack products end to end — a multi-tenant loan origination platform, an AI-powered learning platform, a RAG-assisted e-commerce storefront, and a video streaming platform — plus a React Native app for on-demand labour booking. Currently building production e-commerce and LMS platforms for clients at Nitecore Solutions Private Limited.",
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
