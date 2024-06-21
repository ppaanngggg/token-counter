import { MetadataRoute } from "next";

import { groups } from "@/app/utils/groups";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl: string = "https://token-counter.app";
  const arr: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
  for (const group of groups) {
    arr.push({
      url: `${baseUrl}/${group.name.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });
    for (const model of group.models) {
      arr.push({
        url: `${baseUrl}/${group.name.toLowerCase()}/${model.value}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      });
    }
  }

  return arr;
}
