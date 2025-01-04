import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://demo.useVurvo.com",
      lastModified: new Date(),
    },
    {
      url: "https://demo.useVurvo.com/demo",
      lastModified: new Date(),
    },
  ];
}
