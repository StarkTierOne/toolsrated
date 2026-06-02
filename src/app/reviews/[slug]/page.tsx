import { articles } from "@/lib/articles";
import { articleContent } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  const content = articleContent[params.slug];
  const faqSchema = content?.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      }
    : null;

  return {
    title: `${article.title} — ToolsRated`,
    description: article.description,
    other: faqSchema
      ? { "script:ld+json": JSON.stringify(faqSchema) }
      : undefined,
  };
}

function RatingBar({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${rating * 10}%`,
            backgroundColor:
              rating >= 9
                ? "#16a34a"
                : rating >= 8
                ? "#2563eb"
                : rating >= 7
                ? "#ca8a04"
                : "#dc2626",
          }}
        />
      </div>
      <span className="text-sm font-bold tabular-nums min-w-[2.5rem] text-right">
        {rating}/10
      </span>
    </div>
  );
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const content = articleContent[params.slug];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
          {article.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-3">
          {article.title}
        </h1>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>Updated {article.date}</span>
          <span>{article.readTime} read</span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Affiliate Disclosure:</strong> Some links in this article are
        affiliate links. We may earn a commission if you make a purchase, at no
        extra cost to you. We only recommend tools we&apos;ve personally tested.
      </div>

      {content ? (
        <article className="max-w-none">
          {/* Introduction */}
          <div className="space-y-4 mb-10">
            {content.intro.split("\n\n").map((p, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Quick Summary / Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10 border">
            <h2 className="text-xl font-bold mb-4 mt-0">
              Quick Summary
            </h2>
            <div className="space-y-3">
              {content.tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="font-medium">
                    {i + 1}. {tool.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs hidden sm:inline">
                      {tool.bestFor.length > 50
                        ? tool.bestFor.slice(0, 50) + "..."
                        : tool.bestFor}
                    </span>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tool Reviews */}
          <div className="space-y-10">
            {content.tools.map((tool, i) => (
              <div
                key={tool.name}
                id={tool.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="border rounded-xl overflow-hidden"
              >
                {/* Tool Header */}
                <div className="bg-white p-6 border-b">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold mt-0 mb-0">
                      {i + 1}. {tool.name}
                    </h2>
                    <span
                      className={`text-lg font-bold px-3 py-1 rounded-lg ${
                        tool.rating >= 9
                          ? "bg-green-100 text-green-800"
                          : tool.rating >= 8
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {tool.rating}/10
                    </span>
                  </div>
                  <RatingBar rating={tool.rating} />
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      <strong>Price:</strong> {tool.price}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      <strong>Best for:</strong> {tool.bestFor}
                    </span>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-3 mt-0">
                      Pros
                    </h3>
                    <ul className="space-y-2 list-none pl-0 mb-0">
                      {tool.pros.map((pro, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm text-gray-700"
                        >
                          <span className="text-green-600 mt-0.5 shrink-0">
                            +
                          </span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-red-700 uppercase tracking-wide mb-3 mt-0">
                      Cons
                    </h3>
                    <ul className="space-y-2 list-none pl-0 mb-0">
                      {tool.cons.map((con, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-sm text-gray-700"
                        >
                          <span className="text-red-500 mt-0.5 shrink-0">
                            -
                          </span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict */}
                <div className="bg-gray-50 p-5 border-t">
                  <h3 className="text-sm font-bold uppercase tracking-wide mb-2 mt-0">
                    Our Verdict
                  </h3>
                  <p className="text-sm text-gray-700 mb-0">{tool.verdict}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 mb-10">
            <h2 className="text-2xl font-bold mb-4">Final Verdict</h2>
            <div className="space-y-4">
              {content.conclusion.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          {content.faq.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {content.faq.map((f, i) => (
                  <div key={i} className="border-b pb-5">
                    <h3 className="text-lg font-semibold mb-2 mt-0">{f.q}</h3>
                    <p className="text-gray-700 text-sm mb-0">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Schema JSON-LD */}
          {content.faq.length > 0 && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: content.faq.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: f.a,
                    },
                  })),
                }),
              }}
            />
          )}
        </article>
      ) : (
        <article className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed">
            {article.description}
          </p>
          <div className="bg-gray-50 rounded-xl p-6 my-8 border">
            <h2 className="text-xl font-bold mb-4 mt-0">Quick Summary</h2>
            <p className="text-gray-600">
              This article provides an in-depth comparison and review. Full
              content will be published here with detailed analysis, pricing
              breakdowns, and our final verdict.
            </p>
          </div>
        </article>
      )}

      {/* InvoiceQuick CTA — shown on relevant articles */}
      {(() => {
        const iqCtaConfig: Record<
          string,
          { eyebrow: string; headline: string; body: string } | undefined
        > = {
          "best-invoicing-software": {
            eyebrow: "Our Top Free Pick",
            headline: "InvoiceQuick — Free Invoicing, No Sign-Up Required",
            body: "Create professional invoices in under 60 seconds. No account needed, no credit card, no hidden fees. Used by thousands of freelancers.",
          },
          "best-scheduling-booking-tools-freelancers": {
            eyebrow: "Complete the Workflow",
            headline: "Booked the Call? Now Send the Invoice in 60 Seconds",
            body: "Pair your scheduling tool with InvoiceQuick — free, no sign-up, and ready in under a minute. The zero-cost stack to book clients and get paid.",
          },
          "best-time-tracking-tools-freelancers": {
            eyebrow: "Tracked the Hours? Now Bill For Them",
            headline: "From Time Sheet to Invoice in Under a Minute",
            body: "Once you've logged your hours, InvoiceQuick turns them into a professional invoice in 60 seconds — free, no sign-up, no credit card. The fastest path from tracked time to paid invoice.",
          },
          "best-accounting-software-freelancers": {
            eyebrow: "Skip the Subscription for Invoicing",
            headline: "InvoiceQuick — Free Invoicing That Works With Any Accounting Tool",
            body: "Most accounting software charges $15–$60/month and locks invoicing behind a paywall. InvoiceQuick is free, requires no account, and exports clean PDFs that import into any bookkeeping workflow.",
          },
          "best-project-management-tools": {
            eyebrow: "Closed the Project? Now Close the Loop",
            headline: "Ship the Work, Send the Invoice — In Under a Minute",
            body: "Your PM tool tracks what got done. InvoiceQuick turns that into a paid invoice in 60 seconds — free, no sign-up, no monthly fee. The fastest path from \"project complete\" to \"client paid\".",
          },
          "best-esignature-software": {
            eyebrow: "Contract Signed? Now Send the Invoice",
            headline: "From Signature to Invoice in Under a Minute",
            body: "The moment your client signs, send the first invoice. InvoiceQuick is free, needs no sign-up, and produces a professional PDF in 60 seconds — pair it with any e-signature tool for a complete sign-to-paid workflow.",
          },
          "best-online-course-platforms": {
            eyebrow: "For Sponsorships & B2B Course Sales",
            headline: "Invoice Sponsors and Corporate Clients in 60 Seconds",
            body: "Your course platform handles student checkout — but not sponsorships or bulk licensing. InvoiceQuick is free, no sign-up required, and creates a professional invoice PDF in under a minute for every B2B deal you close.",
          },
        };
        const cta = iqCtaConfig[params.slug];
        if (!cta) return null;
        return (
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <div className="text-sm font-medium uppercase tracking-wide text-blue-200 mb-2">
              {cta.eyebrow}
            </div>
            <h3 className="text-2xl font-bold mb-3">{cta.headline}</h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">{cta.body}</p>
            <a
              href="https://invoicequick-phi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Try InvoiceQuick Free &rarr;
            </a>
          </div>
        );
      })()}

      {/* Related Reviews */}
      {(() => {
        const currentIndex = articles.findIndex((a) => a.slug === params.slug);
        const others = articles.filter((a) => a.slug !== params.slug);
        const related = [
          others[currentIndex % others.length],
          others[(currentIndex + 1) % others.length],
          others[(currentIndex + 2) % others.length],
        ].filter((v, i, arr) => arr.indexOf(v) === i);
        return (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Related Reviews</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/reviews/${r.slug}`}
                  className="group block p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition"
                >
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                    {r.category}
                  </span>
                  <h4 className="font-semibold text-sm mt-1 group-hover:text-blue-600 transition">
                    {r.title}
                  </h4>
                  <div className="text-xs text-gray-400 mt-2">
                    {r.readTime} read
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border text-center">
        <h3 className="font-bold text-lg mb-2">
          Want More Tool Recommendations?
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Get weekly roundups of the best tools and deals.
        </p>
        <div className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 rounded-lg border outline-none text-sm"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}
