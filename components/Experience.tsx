import { useLocale, useTranslations } from "next-intl";
import { experienceData } from "@/data/experienceData";

export default function Experience() {
  const t = useTranslations("Experience");
  const locale = useLocale() as "en" | "ar";

  return (
    <section className="container p-2" id="experience">
      <h2 className="main-heading">{t("title")}</h2>

      <div className="mx-auto max-w-4xl">
        <ol className="border-s border-zinc-700">
          {experienceData.map((item) => (
            <li key={item.id} className="relative mb-10 ms-6">
              <span className="absolute -start-[31px] top-1.5 h-3 w-3 rounded-full bg-(--main-color)" />
              <div className="rounded-lg border border-zinc-800 bg-black p-6">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-bold text-white">{item.company}</h3>
                  <span className="rounded-full border border-(--color3) px-3 text-xs text-(--main-color)">
                    {t(item.type)}
                  </span>
                </div>
                <p className="mb-3 text-sm text-gray-400">
                  {item.role[locale]} · {item.period[locale]}
                </p>
                <ul className="list-disc space-y-1 ps-5 text-sm leading-6 text-gray-300">
                  {item.bullets[locale].map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-(--main-color) underline-offset-4 hover:underline"
                  >
                    {t("viewLive")}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-800 bg-black p-6">
            <h3 className="mb-3 font-bold text-(--main-color)">
              {t("educationTitle")}
            </h3>
            <p className="text-white">{t("education.degree")}</p>
            <p className="text-sm text-gray-400">{t("education.school")}</p>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-black p-6">
            <h3 className="mb-3 font-bold text-(--main-color)">
              {t("languagesTitle")}
            </h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>{t("languages.ar")}</li>
              <li>{t("languages.en")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
