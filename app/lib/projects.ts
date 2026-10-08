export type Metric = { value: string; label: string };

export type Tone = {
  /** Icon chip background + text + ring */
  chip: string;
  /** Gradient used on the featured panel and hover accents */
  bar: string;
  /** Small solid dot used in lists */
  dot: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Short category label shown above the title */
  kicker: string;
  /** One-paragraph explanation of what the product is */
  summary: string;
  liveUrl?: string;
  /** Rendered as an external link when false */
  liveIsPublic: boolean;
  tech: string[];
  highlights: string[];
  metrics?: Metric[];
  tone: Tone;
  /** First project renders as a wide feature card */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "safarloan",
    name: "SafarLoan",
    kicker: "Fintech · Loan Origination & Servicing",
    summary:
      "A role-gated digital lending platform covering the complete loan lifecycle — application, underwriting, sanctioning, disbursal, repayment and NOC release — across separate portals for borrowers, loan officers and administrators, all served from a single Postgres database.",
    liveUrl: "https://loanmanagement-omega.vercel.app/",
    liveIsPublic: true,
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Server Actions",
      "Tailwind CSS 4",
      "Vercel",
    ],
    highlights: [
      "Shipped three role-gated portals behind one database, resolving roles at the edge so unauthorised users never reach a protected route.",
      "Made Row-Level Security the authorization boundary across roughly 45 policies and 26 tables, so a leaked client key exposes no tenant data.",
      "Built a reducing-balance EMI engine with drift-corrected amortisation schedules, dual-mode prepayment modelling and grace-period-aware late fees, mirrored exactly in a SQL function.",
      "Scored applications against eight underwriting rules — FOIR, income, amount, tenure, headroom, CIBIL, collateral cover and PAN — each returning PASS, WARN or FAIL with actual-versus-required values instead of a single opaque verdict.",
      "Implemented two-tier delegated sanctioning that escalates above an officer's approval limit rather than silently approving, writing an audit row for every decision.",
      "Replaced a hardcoded application form with a data-driven wizard rendered from a document-requirements table, so checklist changes ship as database rows rather than code changes.",
      "Authored twelve custom Node scripts — a build-time environment guard, a real PostgreSQL-parser migration gate, a PostgREST embed verifier and a role-based HTTP smoke test — behind four per-PR CI gates.",
    ],
    metrics: [
      { value: "25", label: "Routes" },
      { value: "26", label: "DB tables" },
      { value: "~45", label: "RLS policies" },
      { value: "~19k", label: "Lines of code" },
    ],
    tone: {
      chip: "bg-blue-50 text-blue-700 ring-blue-100",
      bar: "from-blue-600 to-indigo-600",
      dot: "bg-blue-600",
    },
    featured: true,
  },
  {
    slug: "edupress",
    name: "EduPress",
    kicker: "EdTech · AI-Powered Learning Platform",
    summary:
      "A multi-role learning platform with dedicated student, instructor and admin dashboards. Polyglot persistence, real-time push, an event-driven certificate pipeline and a rate-limited AI study assistant, running as a web app plus three supporting backend processes.",
    liveUrl: "https://learnportal.duckdns.org/",
    liveIsPublic: true,
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Razorpay",
      "Playwright",
      "Docker",
    ],
    highlights: [
      "Ran a polyglot persistence layer: PostgreSQL for relational course data, MongoDB for reviews, AI conversations and hash-sharded activity logs, and Redis for caching, rate limits and the job queue.",
      "Enforced role-based access twice — edge route guarding in proxy.ts, plus cryptographic JWT verification on every API route with roles read from server-controlled app metadata.",
      "Built HMAC-SHA256 verified Razorpay webhooks behind Redis idempotency locks, so replayed payment events are detected and double-charging is impossible.",
      "Moved certificate issuance onto an event-driven pipeline, publishing to a Redis Stream consumed by a worker group that generates, uploads and emails the certificate.",
      "Shipped an AI gateway with a Redis sliding-window rate limiter, request timeout, four-model failover and response caching, surfacing live cache-hit versus model latency in the UI.",
      "Wrote a Playwright authorization-contract suite proving that a forged session cookie combined with a spoofed admin role cannot authorize a write or list admin users.",
      "Scaled horizontally with Docker Compose running three application instances behind Nginx, deployed by a GitHub Actions build, test and deploy pipeline.",
    ],
    metrics: [
      { value: "26", label: "API endpoints" },
      { value: "3", label: "Backend services" },
      { value: "4", label: "Data stores" },
      { value: "~15.7k", label: "Lines of code" },
    ],
    tone: {
      chip: "bg-emerald-50 text-emerald-700 ring-emerald-100",
      bar: "from-emerald-600 to-teal-600",
      dot: "bg-emerald-600",
    },
    featured: false,
  },
  {
    slug: "videostream",
    name: "VideoStream",
    kicker: "Media · Full-Stack Streaming Platform",
    summary:
      "A YouTube-style video platform on the Next.js App Router, handling direct-to-cloud uploads, server-generated thumbnails, full-text search, threaded comments, channel subscriptions and resumable playback progress.",
    liveUrl: "https://youtube-app-teal.vercel.app/",
    liveIsPublic: true,
    tech: [
      "Next.js 14",
      "React 18",
      "MongoDB Atlas",
      "Mongoose",
      "Cloudinary",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    highlights: [
      "Streamed uploads straight to Cloudinary with real XHR progress and cancellable transfers, then generated thumbnails server-side from a URL transform — no temp files written to disk.",
      "Modelled the domain in four Mongoose schemas with ten strategic indexes, including a compound text index powering search and a unique compound index guaranteeing one watch-history row per user and video pair.",
      "Implemented threaded comments through a self-referencing parent reference, hydrating replies in parallel so latency stays flat as thread depth grows, with cascading deletion.",
      "Used atomic increments for view counters and idempotent add/remove operations for likes and subscriptions, eliminating read-modify-write races under concurrent traffic.",
      "Auto-saved playback progress on a ten-second throttle with resume-from-position and a completion threshold at ninety percent watched.",
      "Secured the platform with NextAuth.js JWT credentials auth, bcrypt password hashing at cost factor twelve, and two-tier viewer versus uploader gating.",
    ],
    metrics: [
      { value: "15", label: "API endpoints" },
      { value: "4", label: "Data models" },
      { value: "10", label: "DB indexes" },
      { value: "~4.3k", label: "Lines of code" },
    ],
    tone: {
      chip: "bg-violet-50 text-violet-700 ring-violet-100",
      bar: "from-violet-600 to-purple-600",
      dot: "bg-violet-600",
    },
    featured: false,
  },
  {
    slug: "commerce",
    name: "E-Commerce Platform",
    kicker: "Commerce · AI-Assisted Storefront",
    summary:
      "A production storefront with dynamic catalogue browsing, cart management, secure checkout and order tracking, fronted by a real-time streaming AI shopping assistant that gives context-aware guidance during product discovery.",
    liveUrl: "https://ecommerce-smoky-two-80.vercel.app/",
    liveIsPublic: true,
    tech: [
      "Next.js 16",
      "React 19",
      "MongoDB",
      "Razorpay",
      "OpenAI SDK",
      "JWT",
      "Tailwind CSS 4",
    ],
    highlights: [
      "Architected the catalogue, cart and checkout flow with order tracking on the Next.js App Router.",
      "Integrated a streaming AI shopping assistant over ReadableStream, delivering context-aware guidance at roughly sixty percent lower perceived latency than a buffered response.",
      "Secured the application with JWT sessions in HTTP-only cookies, bcrypt hashing and Next.js middleware enforcing role-based access on admin and dashboard routes.",
      "Implemented Razorpay with server-side signature verification, automated order-status synchronisation and dual-mode cart sync for both guest and authenticated shoppers.",
    ],
    tone: {
      chip: "bg-amber-50 text-amber-700 ring-amber-100",
      bar: "from-amber-500 to-orange-500",
      dot: "bg-amber-500",
    },
    featured: false,
  },
  {
    slug: "kaamnow",
    name: "KaamNow",
    kicker: "Mobile · On-Demand Service Booking",
    summary:
      "A Blinkit-style consumer booking app for skilled on-demand workers, built with Expo and React Native. Covers the full funnel from service discovery through slot selection, checkout, live tracking, booking history and ratings.",
    liveUrl: "",
    liveIsPublic: false,
    tech: [
      "React Native",
      "Expo SDK 57",
      "TypeScript",
      "React Navigation",
      "AsyncStorage",
      "EAS Build",
    ],
    highlights: [
      "Built the complete booking funnel across twelve screens and ten routes: browse, service detail, slot and worker selection, checkout, confirmation, live tracking, history and ratings.",
      "Encoded a six-state booking lifecycle with timeline, per-status design tokens, cancellation rules and rating eligibility as domain invariants in a single reducer.",
      "Shipped a wallet with top-ups, a credit and debit ledger and rewards, plus a coupon engine handling flat and percentage discounts with minimum-order gates and caps.",
      "Wrote a zero-dependency PNG encoder in Node using zlib and CRC32 to generate app icons, adaptive icons and splash assets directly from brand colours.",
      "Kept every screen decoupled from transport behind a single AsyncStorage-backed context, so replacing local persistence with a REST and WebSocket backend requires no screen changes.",
      "Added a failure-tolerant haptics layer, native-driver transitions and complete accessibility labelling across every interactive element.",
      "Released through EAS Build to both a sideloadable APK and a Play Store-ready AAB.",
    ],
    metrics: [
      { value: "12", label: "Screens" },
      { value: "10", label: "Routes" },
      { value: "3", label: "Payment modes" },
      { value: "~8.5k", label: "Lines of code" },
    ],
    tone: {
      chip: "bg-rose-50 text-rose-700 ring-rose-100",
      bar: "from-rose-600 to-pink-600",
      dot: "bg-rose-600",
    },
    featured: false,
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const supportingProjects = projects.filter((p) => !p.featured);
