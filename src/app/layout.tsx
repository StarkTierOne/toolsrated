import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToolsRated — Honest Reviews of the Best Productivity & Business Tools",
  description: "In-depth reviews and comparisons of the best productivity tools, business software, and SaaS products. Find the perfect tool for your workflow.",
  keywords: "productivity tools, business software reviews, best SaaS tools, tool comparisons, software reviews",
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
              <a href="/blog" className="hover:text-gray-900">Blog</a>
              <a href="/about" className="hover:text-gray-900">About</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-gray-100 mt-20 py-8">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ToolsRated. Affiliate Disclosure: We may earn commissions from qualifying purchases.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
