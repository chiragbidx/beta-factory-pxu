// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types unchanged...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "RelateCRM is live",
    titleBefore: "",
    titleHighlight: "All Your Contacts, Companies, and Deals in One Place",
    titleAfter: "",
    subtitle:
      "RelateCRM streamlines your team’s client management with an intuitive dashboard and collaborative workflows.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "Request a Demo", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "RelateCRM dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why RelateCRM",
    heading: "Simplify Your Client Relationships",
    description:
      "RelateCRM empowers teams by organizing all client data in one efficient platform—boosting productivity and clarity.",
    items: [
      {
        icon: "Blocks",
        title: "Centralized Contact Management",
        description: "Store, organize, and access all your client information from a single, unified platform.",
      },
      {
        icon: "LineChart",
        title: "Company and Deal Tracking",
        description: "Easily associate contacts with companies and manage deals through their lifecycle.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description: "Share updates, assign responsibilities, and work together seamlessly.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Simplify Your Client Relationships",
    subtitle: "",
    items: [
      { icon: "AddressBook", title: "Centralized Contact Management", description: "Store, organize, and access all your client information from a single, unified platform." },
      { icon: "Building2", title: "Company and Deal Tracking", description: "Easily associate contacts with companies and manage deals through their lifecycle." },
      { icon: "Users", title: "Team Collaboration", description: "Share updates, assign responsibilities, and work together seamlessly." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What RelateCRM Offers",
    subtitle:
      "Fundamental tools to help teams build and nurture client relationships.",
    items: [
      { title: "Contact and Company Records", description: "All your client and organization data, organized.", pro: false },
      { title: "Deal Pipeline", description: "Track each opportunity from introduction to closed-won.", pro: false },
      { title: "Collaboration Tools", description: "Work together as a team, assign and share.", pro: false },
      { title: "Secure, Modern Platform", description: "Current best practices for security and reliability.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams using RelateCRM",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "RelateCRM transformed our workflow. Organizing client data is effortless!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "Our sales and support teams feel truly aligned since adopting RelateCRM.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Head of Growth, Nimbus", comment: "Onboarding new team members is now seamless!", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the RelateCRM team",
    members: [], // can optionally populate here if you'd like, otherwise keep as placeholder
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Pricing",
    subtitle: "Get started for free, then scale as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Ideal for small teams just getting started.",
        buttonText: "Start for Free",
        benefits: ["Unlimited contacts", "Unlimited companies", "Unlimited deals", "Core dashboard", "Team collaboration"],
      },
      {
        title: "Pro",
        popular: true,
        price: 29,
        description: "Best for growing businesses and sales teams.",
        buttonText: "Start Trial",
        benefits: ["All Starter features", "Deal pipeline", "Permissions", "Priority support", "Integrations (Email, Calendar)"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 99,
        description: "For organizations with advanced workflow needs.",
        buttonText: "Contact Sales",
        benefits: ["All Pro features", "Custom fields/tags", "Reporting", "Dedicated support", "Custom integrations"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the RelateCRM team",
    description:
      "Have questions, need a demo, or curious how RelateCRM fits your team? We’re here to help.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Support hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Request a Demo", "Partnership Inquiry", "Support", "Other"],
    formSubmitLabel: "Send Inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is RelateCRM free to start?", answer: "Yes! Get started with all core features absolutely free." },
      { question: "Can I import my existing contacts?", answer: "Import capabilities are coming soon—stay tuned!" },
      { question: "Does RelateCRM support collaboration?", answer: "Yes. All plans let teams organize, tag, and manage together." },
      { question: "Is my data secure?", answer: "Absolutely. Your information is protected with strict security standards." },
      { question: "Can I request a feature?", answer: "We love feedback—reach out through the contact page or demo request." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "RelateCRM",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Request a Demo", href: "#contact" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "#faq" },
          { label: "Support", href: "#contact" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
        ],
      },
    ],
    copyright: `RelateCRM © ${new Date().getFullYear()}. The CRM made for teams who want simplicity and results.`,
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "RelateCRM",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "RelateCRM dashboard preview" },
    features: [
      { title: "Centralized Contacts", description: "Organize all your client data in one platform." },
      { title: "Companies & Deals", description: "Link contacts to companies and easily manage deal pipelines." },
      { title: "Collaboration", description: "Invite your team, assign work, keep everyone in sync." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}