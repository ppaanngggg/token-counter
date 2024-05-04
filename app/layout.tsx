import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All in one LLM Token Counter",
  description:
    "Count tokens for all popular LLMs (GPT-4, Claude-3, Command-R and more) in one place.",
};

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
