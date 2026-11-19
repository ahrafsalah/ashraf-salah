import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function CTA() {
  const t = useTranslations("CTA");
  const contact = useTranslations("Contact");
  const email = contact("ContactInfo.email.value");

  return (
    <section className="container p-2 pb-20" id="cta">
      <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-(--color3) bg-[#173119]/60 px-6 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          {t("title")}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-gray-300">{t("description")}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="rounded-[35px] border border-(--main-color) bg-(--color3) px-8 py-3 text-white transition hover:brightness-125"
          >
            {t("button")}
          </Link>
          <a
            href={`mailto:${email}`}
            className="text-sm text-gray-300 underline-offset-4 hover:text-(--main-color) hover:underline"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
