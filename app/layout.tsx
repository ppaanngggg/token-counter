import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/app/components/navbar";
import { buildMetadata } from "@/app/utils/metadata";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  return buildMetadata(
    "All in one LLM Token Counter",
    "Count tokens for all popular LLMs (GPT-4, Claude-3, Llama and more) in one place.",
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
      </body>
    </html>
  );
}
