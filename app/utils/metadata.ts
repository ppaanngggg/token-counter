import { Metadata } from "next";

import { getGroup, getModel } from "@/app/utils/groups";

export function buildMetadata(
  group: string | undefined,
  model: string | undefined,
): Metadata {
  let title = "All in one LLM Token Counter";
  let description =
    "Our pure browser-based LLM token counter allows you to accurately calculate tokens of prompt " +
    "for all popular LLMs including GPT-3.5, GPT-4, Claude-3, Llama-3 and many more. " +
    "Easily track and manage token usage with our user-friendly tool.";
  let canonical = "/";

  if (group && model) {
    canonical = `/${group}/${model}`;
    const groupData = getGroup(group);
    if (groupData) {
      const modelData = getModel(groupData, model);
      if (modelData) {
        title = `${groupData.name} ${modelData.name} | Token Counter`;
        description =
          "Our pure browser-based LLM token counter allows you to accurately calculate tokens of prompt " +
          `for ${groupData.name} ${modelData.name}. ` +
          "Easily track and manage token usage with our user-friendly tool.";
      }
    }
  }
  return {
    title: title,
    description: description,
    verification: {
      google: "1IppxSZ3nTfcrEZ--z1XPzzH5Km-0rmvAaKZ4eBs38U",
      yandex: "e471e35b09a83570",
    },
    alternates: {
      canonical: canonical,
    },
    metadataBase: new URL("https://token-counter.app"),
  };
}
