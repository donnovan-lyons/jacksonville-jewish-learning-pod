import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/program", changeFrequency: "monthly", priority: 0.9 },
    { path: "/schedule", changeFrequency: "monthly", priority: 0.8 },
    { path: "/philosophy", changeFrequency: "yearly", priority: 0.7 },
    { path: "/community", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "yearly", priority: 0.7 },
    { path: "/enroll", changeFrequency: "monthly", priority: 0.9 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency,
    priority,
  }));
}
