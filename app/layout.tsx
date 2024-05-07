import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/app/components/navbar";
import { buildMetadata } from "@/app/utils/metadata";
import Footer from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  return buildMetadata(
    "All in one LLM Token Counter",
    "All in one LLM Token Counter - Count tokens for all popular LLMs (GPT-3.5, GPT-4, Claude-3, Llama-3 and more).",
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <body
        className={clsx(
          "min-h-screen flex flex-col subpixel-antialiased",
          inter.className,
        )}
      >
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-XTJZTH352K" />
        <Analytics />
      </body>
    </html>
  );
}
