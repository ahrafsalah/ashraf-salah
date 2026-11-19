import { useTranslations } from "next-intl";

const STATS = [
  { key: "years", value: "1+" },
  { key: "projects", value: "6" },
  { key: "live", value: "5" },
] as const;

export default function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="container p-2" aria-label={t("label")}>
      <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 text-center">
        {STATS.map(({ key, value }) => (
          <div
            key={key}
            className="flex flex-col rounded-lg border border-zinc-800 bg-black px-2 py-6"
          >
            <dt className="order-2 mt-1 text-xs text-gray-400 sm:text-sm">
              {t(key)}
            </dt>
            <dd className="text-3xl font-bold text-(--main-color) sm:text-4xl">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
