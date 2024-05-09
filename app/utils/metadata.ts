import { Metadata } from "next";

import { getModel, getGroup } from "@/app/utils/groups";

export function buildMetadata(
  group: string | undefined,
  model: string | undefined,
): Metadata {
  let title = "All in one LLM Token Counter";
  let description =
    "Pure browser-based LLM token counter - Count tokens for all popular LLMs (GPT-3.5, GPT-4, Claude-3, Llama-3 and more).";
  let canonical = "/";

  if (group && model) {
    canonical = `/${group}/${model}`;
    const groupData = getGroup(group);
    if (groupData) {
      const modelData = getModel(groupData, model);
      if (modelData) {
        title = `${groupData.name} ${modelData.name} Token Counter`;
        description = `Pure browser-based LLM token counter - Count tokens for ${groupData.name} ${modelData.name}.`;
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
