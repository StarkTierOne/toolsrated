import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — ToolsRated`,
    description: article.description,
  };
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">{article.category}</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-3">{article.title}</h1>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>Updated {article.date}</span>
          <span>{article.readTime} read</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Affiliate Disclosure:</strong> Some links in this article are affiliate links. We may earn a commission if you make a purchase, at no extra cost to you. We only recommend tools we&apos;ve personally tested.
      </div>

      <article className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">{article.description}</p>

        <div className="bg-gray-50 rounded-xl p-6 my-8 border">
          <h2 className="text-xl font-bold mb-4 mt-0">Quick Summary</h2>
          <p className="text-gray-600">This article provides an in-depth comparison and review. Full content will be published here with detailed analysis, screenshots, pricing breakdowns, and our final verdict.</p>
        </div>

        <h2>What We Tested</h2>
        <p>We evaluated each tool based on:</p>
        <ul>
          <li><strong>Ease of Use</strong> — How quickly can you get started?</li>
          <li><strong>Features</strong> — Does it have what you actually need?</li>
          <li><strong>Pricing</strong> — Is it worth the money?</li>
          <li><strong>Support</strong> — Can you get help when you need it?</li>
          <li><strong>Integration</strong> — Does it play nice with other tools?</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
          <h3 className="text-lg font-bold text-green-800 mt-0">Our Top Pick</h3>
          <p className="text-green-700 mb-0">Full review content with our recommendation will be published here. Check back soon for the complete analysis.</p>
        </div>
      </article>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border text-center">
        <h3 className="font-bold text-lg mb-2">Want More Tool Recommendations?</h3>
        <p className="text-gray-600 text-sm mb-4">Get weekly roundups of the best tools and deals.</p>
        <div className="flex gap-2 max-w-sm mx-auto">
          <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2 rounded-lg border outline-none text-sm" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Subscribe</button>
        </div>
      </div>
    </main>
  );
}
