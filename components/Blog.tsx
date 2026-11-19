import { useLocale, useTranslations } from "next-intl";
import { blogData } from "@/data/blogData";

export default function Blog() {
  const t = useTranslations("Blog");
  const locale = useLocale() as "en" | "ar";

  if (blogData.length === 0) return null;

  return (
    <section className="container p-2" id="blog">
      <h2 className="main-heading">{t("title")}</h2>
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {blogData.map((post) => (
          <article
            key={post.url}
            className="rounded-lg border border-zinc-800 bg-black p-6"
          >
            <time className="text-xs text-gray-400" dateTime={post.date}>
              {new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
                dateStyle: "medium",
              }).format(new Date(post.date))}
            </time>
            <h3 className="my-2 font-bold text-white">{post.title[locale]}</h3>
            <p className="mb-4 text-sm leading-6 text-gray-300">
              {post.excerpt[locale]}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-(--main-color) underline-offset-4 hover:underline"
            >
              {t("readMore")}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
