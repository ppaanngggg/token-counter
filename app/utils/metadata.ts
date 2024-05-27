import { Metadata } from "next";

import { getGroup, getModel } from "@/app/utils/groups";

export function buildMetadata(
  group: string | undefined,
  model: string | undefined,
): Metadata {
  const baseUrl: string = "https://token-counter.app";
  let title = "All in one LLM Token Counter";
  let description =
    "Our pure browser-based LLM token counter allows you to accurately calculate tokens of prompt " +
    "for all popular LLMs including GPT-3.5, GPT-4, Claude-3, Llama-3 and many more. " +
    "Easily track and manage token usage with our user-friendly tool.";
  let canonical = "/";

  if (group && model === undefined) {
    canonical = `/${group}`;
    const groupData = getGroup(group);
    if (groupData) {
      title = `${groupData.name} | Token Counter`;
      description =
        "Our pure browser-based LLM token counter allows you to accurately calculate tokens of prompt " +
        `for ${groupData.name}. ` +
        "Easily track and manage token usage with our user-friendly tool.";
    }
  }

  if (group && model) {
    canonical = `/${group}/${model}`;
    const groupData = getGroup(group);
    if (groupData) {
      const modelData = getModel(groupData, model);
      if (modelData) {
        title = `${modelData.name} | Token Counter`;
        description =
          "Our pure browser-based LLM token counter allows you to accurately calculate tokens of prompt " +
          `for ${modelData.name}. ` +
          "Easily track and manage token usage with our user-friendly tool.";
      }
    }
  }
  return {
    metadataBase: new URL(baseUrl),
    title: title,
    description: description,
    verification: {
      google: "1IppxSZ3nTfcrEZ--z1XPzzH5Km-0rmvAaKZ4eBs38U",
      yandex: "e471e35b09a83570",
    },
    alternates: {
      canonical: baseUrl + canonical,
    },
    openGraph: {
      title: title,
      description: description,
      url: baseUrl + canonical,
      siteName: "Token Counter",
      images: [
        {
          url: baseUrl + "/static/og.jpg",
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
          url: baseUrl + "/static/og.jpg",
          alt: title,
        },
      ],
    },
  };
}
