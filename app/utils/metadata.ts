import { Metadata } from "next";

export function buildMetadata(title: string, description: string): Metadata {
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
