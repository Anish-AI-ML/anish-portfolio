import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anish | AI/ML Engineer & Full Stack Developer",
  description: "Portfolio of Anish, Founder of Anve Tech. Specializing in Machine Learning, Deep Learning, Computer Vision, and Full Stack Development.",
  keywords: ["Anish", "AI/ML Engineer", "Full Stack Developer", "Anve Tech", "Machine Learning", "Next.js"],
  authors: [{ name: "Anish" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-noise bg-[#030303] text-white selection:bg-white/20">
        <SmoothScroll>
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
