// app/layout.js
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (only in server component)
export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Shopping List App & Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen`}
      >
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col gap-4 sticky top-0 h-screen">
          <h2 className="text-xl font-bold mb-6">Assignments</h2>
          <Link href="/" className="hover:text-cyan-300">
            Week 1
          </Link>
          <Link href="/week-2" className="hover:text-cyan-300">
            Week 2
          </Link>
          <Link href="/week-3" className="hover:text-cyan-300">
            Week 3
          </Link>
          <Link href="/week-4" className="hover:text-cyan-300">
            Week 4
          </Link>
          <Link href="/week-5" className="hover:text-cyan-300">
            Week 5
          </Link>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
