import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vurvo.robiai.com",
      lastModified: new Date(),
    },
    {
      url: "https://vurvo.robiai.com/demo",
      lastModified: new Date(),
    },
  ];
}
