import { articles } from "@/lib/articles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tool Reviews — ToolsRated",
  description: "In-depth reviews of the best productivity and business tools. Honest, tested, and compared.",
};

export default function ReviewsPage() {
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-2">All Reviews</h1>
      <p className="text-gray-600 mb-8">Every tool we&apos;ve tested, reviewed, and compared.</p>

      {categories.map((cat) => (
        <section key={cat} className="mb-12">
          <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-gray-100 pb-2">{cat}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {articles.filter((a) => a.category === cat).map((article) => (
              <Link key={article.slug} href={`/reviews/${article.slug}`} className="group block p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition">
                <h3 className="font-semibold group-hover:text-blue-600 transition">{article.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{article.description}</p>
                <div className="flex gap-3 mt-3 text-xs text-gray-400">
                  <span>{article.readTime} read</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
