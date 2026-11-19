import { useTranslations } from "next-intl";

const ITEMS = ["tech", "figma", "freelance", "time", "admin", "language"] as const;

export default function FAQ() {
  const t = useTranslations("FAQ");

  return (
    <section className="container p-2" id="faq">
      <h2 className="main-heading">{t("title")}</h2>
      <div className="mx-auto max-w-3xl space-y-3">
        {ITEMS.map((key) => (
          <details
            key={key}
            className="group rounded-lg border border-zinc-800 bg-black p-5 open:border-(--color3)"
          >
            <summary className="cursor-pointer list-none font-bold text-white marker:hidden">
              <span className="flex items-center justify-between gap-4">
                {t(`items.${key}.q`)}
                <span className="text-(--main-color) transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              {t(`items.${key}.a`)}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
