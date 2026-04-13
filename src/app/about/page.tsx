import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ToolsRated — Honest Tool Reviews You Can Trust",
  description:
    "Learn how ToolsRated reviews and compares productivity tools, business software, and SaaS products with hands-on testing and transparent methodology.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-6">About ToolsRated</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          ToolsRated is an independent review site dedicated to helping
          freelancers, small business owners, and teams find the right software
          for their workflows. Every tool we feature is personally tested with
          real projects before we publish a review.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">
          How We Review Tools
        </h2>
        <p>
          We evaluate each tool on five criteria: ease of setup, daily
          usability, feature depth, integrations, and value for money. We test
          with real workflows over days or weeks, not quick demos. Our ratings
          reflect genuine hands-on experience.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">
          Affiliate Disclosure
        </h2>
        <p>
          Some links on ToolsRated are affiliate links, which means we may earn
          a small commission if you sign up through our link, at no extra cost to
          you. This helps us keep the site running and continue producing
          honest, in-depth reviews. Affiliate relationships never influence our
          ratings or recommendations.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">
          Our Other Projects
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a
              href="https://invoicequick-phi.vercel.app"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              InvoiceQuick
            </a>{" "}
            &mdash; A free invoicing tool for freelancers. Create and send
            professional invoices in seconds with no sign-up required.
          </li>
        </ul>

        <div className="mt-10 pt-8 border-t">
          <p className="text-sm text-gray-500">
            Have questions or feedback? We would love to hear from you. Reach out
            and let us know how we can improve.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="/reviews"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Browse Reviews
            </Link>
            <Link
              href="/compare"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Compare Tools
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
