import { Metadata } from "next";

import { getGroup, getModel } from "@/app/utils/groups";

export function buildMetadata(
  group: string | undefined,
  model: string | undefined,
): Metadata {
  const baseUrl: string = "https://token-counter.app";
  let title = "All in one LLM Token Counter";
  let description =
    "Calculate tokens of prompt for all popular LLMs including GPT-4, Claude-3, Llama-3 and many more using pure browser-based Tokenizer.";
  let canonical = "/";

  if (group && model === undefined) {
    canonical = `/${group}`;
    const groupData = getGroup(group);
    if (groupData) {
      title = `${groupData.name} | Token Counter`;
      description = `Calculate tokens of prompt for all popular LLMs for ${groupData.name} models using pure browser-based Tokenizer.`;
    }
  }

  if (group && model) {
    canonical = `/${group}/${model}`;
    const groupData = getGroup(group);
    if (groupData) {
      const modelData = getModel(groupData, model);
      if (modelData) {
        title = `${modelData.name} | Token Counter`;
        description = `Calculate tokens of prompt for all popular LLMs for ${modelData.name} using pure browser-based Tokenizer.`;
      }
    }
  }
  return {
    title: title,
    description: description,
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Hantian Pang", url: "https://github.com/ppaanngggg" }],
    creator: "Hantian Pang",
    publisher: "Hantian Pang",
    robots: "follow, index",
    icons: { icon: "/favicon.ico" },
    verification: {
      google: "1IppxSZ3nTfcrEZ--z1XPzzH5Km-0rmvAaKZ4eBs38U",
      yandex: "e471e35b09a83570",
    },
    alternates: {
      canonical: baseUrl + canonical,
    },
    metadataBase: new URL(baseUrl),
    openGraph: {
      url: baseUrl,
      title: title,
      description: description,
      siteName: "Token Counter",
      images: [
        {
          url: "/static/og.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      creator: "@HantianPang",
      creatorId: "1767790642477060096",
      images: [
        {
          url: "/static/og.jpg",
          alt: title,
        },
      ],
    },
  };
}
