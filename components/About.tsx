import { useTranslations } from "next-intl";

const FACTS = ["location", "focus", "status"] as const;

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="container p-2" id="about">
      <h2 className="main-heading">{t("title")}</h2>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-[15px] leading-7 text-gray-300">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>

        <ul className="space-y-5 self-start rounded-lg border border-zinc-800 bg-black p-6">
          {FACTS.map((key) => (
            <li key={key}>
              <span className="block text-xs uppercase tracking-wide text-(--main-color)">
                {t(`facts.${key}.label`)}
              </span>
              <span className="text-white">{t(`facts.${key}.value`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
