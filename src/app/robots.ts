import { env } from "@/env";
import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: env.DOMAIN,
    sitemap: `${env.DOMAIN}/sitemap.xml`,
  };
} 