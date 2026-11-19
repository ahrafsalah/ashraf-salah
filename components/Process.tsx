import { useTranslations } from "next-intl";

const STEPS = ["understand", "plan", "build", "launch"] as const;

export default function Process() {
  const t = useTranslations("Process");

  return (
    <section className="container p-2" id="process">
      <h2 className="main-heading">{t("title")}</h2>

      <ol className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <li
            key={step}
            className="rounded-lg border border-zinc-800 bg-black p-6"
          >
            <span className="mb-3 block text-3xl font-bold text-(--main-color)">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2 font-bold text-white">
              {t(`steps.${step}.title`)}
            </h3>
            <p className="text-sm leading-6 text-gray-300">
              {t(`steps.${step}.desc`)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
