import { articles } from "@/lib/articles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Guides & Tips for Freelancers | ToolsRated",
  description:
    "In-depth guides on productivity tools, invoicing, accounting, AI automation, and more. Practical advice for freelancers and small business owners.",
  keywords:
    "freelancer tools guide, productivity software tips, invoicing for freelancers, accounting software guide, AI tools freelancers",
  alternates: {
    canonical: "https://toolsrated.vercel.app/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Finance": "bg-green-100 text-green-700",
  "Project Management": "bg-blue-100 text-blue-700",
  "Productivity": "bg-purple-100 text-purple-700",
  "Marketing": "bg-orange-100 text-orange-700",
  "AI & Automation": "bg-pink-100 text-pink-700",
  "Sales": "bg-yellow-100 text-yellow-700",
  "Web & Design": "bg-indigo-100 text-indigo-700",
};

export default function BlogPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featured = sorted.filter((a) => a.featured);
  const rest = sorted.filter((a) => !a.featured);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-2">Blog</h1>
      <p className="text-gray-600 mb-10">
        Guides, comparisons, and tips for freelancers and small business owners.
      </p>

      {featured.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/reviews/${article.slug}`}
                className="group block p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition"
              >
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {article.category}
                </span>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition mt-3 mb-1">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{article.description}</p>
                <div className="flex gap-3 mt-4 text-xs text-gray-400">
                  <span>{article.readTime} read</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
          All Articles
        </h2>
        <div className="space-y-4">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/reviews/${article.slug}`}
              className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime} read</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{article.description}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap pt-1">{article.date}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-xl font-bold mb-2">Need a free invoice tool?</h2>
        <p className="text-blue-100 mb-5 text-sm">
          Our sister product InvoiceQuick lets you create professional invoices in under 60 seconds — free, no sign-up required.
        </p>
        <a
          href="https://invoicequick-phi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition"
        >
          Try InvoiceQuick Free →
        </a>
      </section>
    </main>
  );
}
