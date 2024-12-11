import { env } from "@/env";
import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pricing",
    // 添加您网站的其他路由...
  ];

  const locales = ["en", "zh"]; // 您支持的语言列表

  return routes.flatMap((route) =>
    locales.map((locale) => {
        if (locale === "en") {
            return {
                url: `${env.DOMAIN}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: route === "" ? 1 : 0.8,
        }
        }

        return {
            url: `${env.DOMAIN}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === "" ? 1 : 0.8,
        }
    })
  );
} 