import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  let title = "All in one LLM Token Counter";
  let description =
    "Count tokens for all popular LLMs (GPT-4, Claude-3, Llama and more) in one place.";

  return {
    title: title,
    description: description,
    verification: { google: "1IppxSZ3nTfcrEZ--z1XPzzH5Km-0rmvAaKZ4eBs38U" },
    metadataBase: new URL("https://token-counter.app"),
    alternates: {
      canonical: "/",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <body
        className={clsx("min-h-screen subpixel-antialiased", inter.className)}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
