import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToolsRated — Honest Reviews of the Best Productivity & Business Tools",
  description:
    "We test and compare the top productivity tools, invoicing software, project management apps, and business SaaS so you don't have to. Unbiased ratings, real-world testing, and clear recommendations for freelancers and small teams.",
  keywords:
    "productivity tools, business software reviews, best SaaS tools, tool comparisons, software reviews, invoicing software, project management, CRM",
  metadataBase: new URL("https://toolsrated.vercel.app"),
  openGraph: {
    title: "ToolsRated — Honest Reviews of the Best Business Tools",
    description:
      "In-depth, hands-on reviews and side-by-side comparisons of productivity tools, invoicing software, and business SaaS. Find the right tool for your workflow.",
    url: "https://toolsrated.vercel.app",
    siteName: "ToolsRated",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolsRated — Honest Tool Reviews",
    description:
      "We test productivity tools, invoicing software, and business SaaS so you don't have to. Real ratings, no fluff.",
  },
  alternates: {
    canonical: "https://toolsrated.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-xl text-gray-900">Tools<span className="text-blue-600">Rated</span></a>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/reviews" className="hover:text-gray-900">Reviews</a>
              <a href="/compare" className="hover:text-gray-900">Compare</a>
              <a href="/blog" className="hover:text-gray-900">Blog</a>
              <a href="/about" className="hover:text-gray-900">About</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-gray-100 mt-20 py-10">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500 space-y-3">
            <p>
              <span className="font-medium text-gray-700">Sister product:</span>{" "}
              <a
                href="https://invoicequick.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                InvoiceQuick
              </a>{" "}
              — Free invoice generator for freelancers. No sign-up required.
            </p>
            <p>&copy; {new Date().getFullYear()} ToolsRated. Affiliate Disclosure: We may earn commissions from qualifying purchases.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
