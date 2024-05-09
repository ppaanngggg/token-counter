import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/app/components/navbar";
import { buildMetadata } from "@/app/utils/metadata";
import Footer from "@/app/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      </body>
    </html>
  );
}
