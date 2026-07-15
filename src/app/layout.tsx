import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cadture · Student Starter",
    template: "%s · Cadture",
  },
  description: "Student-built VIS iGEM 2026 Cadture team wiki.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="site-body">
        {/* TODO(S06-3): explain why Navbar and Footer belong in the root layout. */}
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
