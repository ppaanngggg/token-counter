import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/app/components/navbar";
import { buildMetadata } from "@/app/utils/metadata";
import Footer from "@/app/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  return buildMetadata(undefined, undefined);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7974984103802210"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen flex flex-col subpixel-antialiased",
          inter.className,
        )}
      >
        <Navbar />
        <main className="flex-1 flex flex-col items-center bg-base-200">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-XTJZTH352K" />
      </body>
    </html>
  );
}
