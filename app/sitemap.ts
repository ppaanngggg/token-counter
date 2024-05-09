import { MetadataRoute } from "next";

import { groups } from "@/app/utils/groups";

export default function sitemap(): MetadataRoute.Sitemap {
  const arr: MetadataRoute.Sitemap = [
    {
      url: "https://token-counter.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
  for (const group of groups) {
    for (const model of group.models) {
      arr.push({
        url: `https://token-counter.app/${group.name.toLowerCase()}/${model.value}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      });
    }
  }

  return arr;
}
