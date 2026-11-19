import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashraf-salah.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/contact-us"];
  return ["en", "ar"].flatMap((locale) =>
    pages.map((page) => ({
      url: `${SITE_URL}/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}/en${page}`,
          ar: `${SITE_URL}/ar${page}`,
        },
      },
    })),
  );
}
