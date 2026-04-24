export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: "best-project-management-tools",
    title: "7 Best Project Management Tools in 2026 (Tested & Compared)",
    description: "We tested the top project management tools side-by-side. Here's which one is best for solopreneurs, small teams, and enterprises.",
    category: "Project Management",
    date: "2026-04-10",
    readTime: "12 min",
    featured: true,
  },
  {
    slug: "best-invoicing-software",
    title: "Best Free Invoicing Software for Freelancers (2026 Guide)",
    description: "Stop chasing payments. These invoicing tools help freelancers create professional invoices and get paid faster.",
    category: "Finance",
    date: "2026-04-08",
    readTime: "10 min",
    featured: true,
  },
  {
    slug: "notion-vs-obsidian",
    title: "Notion vs Obsidian: Which Note-Taking App Wins in 2026?",
    description: "A deep dive comparison of Notion and Obsidian — features, pricing, use cases, and which one suits your workflow.",
    category: "Productivity",
    date: "2026-04-05",
    readTime: "15 min",
  },
  {
    slug: "best-email-marketing-tools",
    title: "5 Best Email Marketing Tools for Small Businesses (2026)",
    description: "Compare ConvertKit, Mailchimp, Beehiiv, and more. Find the best email platform for your audience size and budget.",
    category: "Marketing",
    date: "2026-04-01",
    readTime: "11 min",
    featured: true,
  },
  {
    slug: "best-ai-writing-tools",
    title: "Best AI Writing Tools for Content Creators (Honest Review)",
    description: "We tested 10 AI writing tools for blog posts, social media, and marketing copy. Here are the ones worth paying for.",
    category: "AI & Automation",
    date: "2026-03-28",
    readTime: "14 min",
  },
  {
    slug: "best-website-builders",
    title: "Best Website Builders for Small Business (No Code Required)",
    description: "Squarespace vs Wix vs Framer vs Carrd — which website builder is right for your business in 2026?",
    category: "Web & Design",
    date: "2026-03-25",
    readTime: "13 min",
  },
  {
    slug: "best-accounting-software-freelancers",
    title: "Best Accounting Software for Freelancers & Self-Employed (2026)",
    description: "QuickBooks, FreshBooks, Wave, and more — we compare the top accounting tools for solopreneurs and freelancers.",
    category: "Finance",
    date: "2026-04-15",
    readTime: "12 min",
  },
  {
    slug: "best-crm-small-business",
    title: "Best CRM Software for Small Business (Free & Paid Options)",
    description: "HubSpot, Pipedrive, Salesforce Essentials — find the CRM that fits your sales process and budget.",
    category: "Sales",
    date: "2026-03-15",
    readTime: "12 min",
  },
  {
    slug: "best-ai-automation-tools-solopreneurs",
    title: "7 Best AI Automation Tools for Solopreneurs in 2026 (Ranked)",
    description: "Zapier, Make, n8n, and more — we ranked the top AI-powered automation platforms that let solopreneurs reclaim hours every week without hiring.",
    category: "AI & Automation",
    date: "2026-04-13",
    readTime: "13 min",
    featured: true,
  },
  {
    slug: "best-time-tracking-tools-freelancers",
    title: "5 Best Time Tracking Tools for Freelancers (Free & Paid, 2026)",
    description: "Track your billable hours accurately so you can invoice confidently. We tested Toggl, Clockify, Harvest, Timely, and more — here's which one is worth your time.",
    category: "Finance",
    date: "2026-04-24",
    readTime: "11 min",
  },
];
