import { articles } from "@/lib/articles";
import { articleContent } from "@/lib/content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Tools Side-by-Side — ToolsRated",
  description:
    "Compare ratings, pricing, and features of the best productivity and business tools in one table. Find the right tool for your workflow.",
};

export default function ComparePage() {
  // Collect all tools from all articles that have content
  const allTools: {
    name: string;
    rating: number;
    price: string;
    bestFor: string;
    category: string;
    articleSlug: string;
    articleTitle: string;
  }[] = [];

  for (const article of articles) {
    const content = articleContent[article.slug];
    if (!content) continue;
    for (const tool of content.tools) {
      allTools.push({
        name: tool.name,
        rating: tool.rating,
        price: tool.price,
        bestFor: tool.bestFor,
        category: article.category,
        articleSlug: article.slug,
        articleTitle: article.title,
      });
    }
  }

  // Sort by rating descending
  allTools.sort((a, b) => b.rating - a.rating);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-2">Compare All Tools</h1>
      <p className="text-gray-600 mb-8">
        Every tool we have reviewed, ranked by rating. Click any tool to read the
        full review.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-4 py-3 font-semibold">Tool</th>
              <th className="px-4 py-3 font-semibold">Rating</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                Price
              </th>
              <th className="px-4 py-3 font-semibold hidden md:table-cell">
                Best For
              </th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Review</th>
            </tr>
          </thead>
          <tbody>
            {allTools.map((tool, i) => (
              <tr
                key={`${tool.articleSlug}-${tool.name}`}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 font-medium">{tool.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      tool.rating >= 9
                        ? "bg-green-100 text-green-800"
                        : tool.rating >= 8
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tool.rating}/10
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">
                  {tool.price}
                </td>
                <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                  {tool.bestFor.length > 60
                    ? tool.bestFor.slice(0, 60) + "..."
                    : tool.bestFor}
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs text-blue-600 font-medium">
                    {tool.category}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/reviews/${tool.articleSlug}`}
                    className="text-blue-600 hover:underline text-xs font-medium"
                  >
                    Read Review
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/reviews"
          className="text-blue-600 hover:underline font-medium"
        >
          Browse all review articles &rarr;
        </Link>
      </div>
    </main>
  );
}
