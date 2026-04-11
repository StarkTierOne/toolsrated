import { articles } from "@/lib/articles";
import Link from "next/link";

export default function Home() {
  const featured = articles.filter((a) => a.featured);
  const recent = articles.slice(0, 6);

  return (
    <main className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Find the <span className="text-blue-600">Best Tools</span> for Your Business
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          In-depth, honest reviews and comparisons of productivity tools, business software, and SaaS products.
          We test everything so you don&apos;t have to.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/reviews" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Browse Reviews
          </Link>
          <Link href="/blog" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg transition">
            Read Blog
          </Link>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((article) => (
            <Link key={article.slug} href={`/reviews/${article.slug}`} className="group block bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition border border-gray-100 hover:border-blue-200">
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">{article.category}</span>
              <h3 className="font-bold text-lg mt-2 mb-2 group-hover:text-blue-600 transition">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{article.description}</p>
              <div className="text-xs text-gray-400">{article.readTime} read</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="space-y-4">
          {recent.map((article) => (
            <Link key={article.slug} href={`/reviews/${article.slug}`} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition">
              <div className="flex-1">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">{article.category}</span>
                <h3 className="font-semibold mt-1 group-hover:text-blue-600 transition">{article.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{article.description}</p>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap mt-1">{article.date}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center text-white my-12">
        <h2 className="text-2xl font-bold mb-2">Get Tool Recommendations in Your Inbox</h2>
        <p className="text-blue-100 mb-6">Weekly roundups of the best tools, deals, and productivity tips. No spam.</p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input type="email" placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none" />
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition">Subscribe</button>
        </div>
      </section>
    </main>
  );
}
