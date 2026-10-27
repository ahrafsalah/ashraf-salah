"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { usePathname, useRouter } from "../i18n/routing";

type Locale = "en" | "ar";

const LABELS: Record<Locale, { name: string; aria: string }> = {
  en: { name: "English", aria: "Switch to English" },
  ar: { name: "العربية", aria: "التبديل إلى العربية" },
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const nextLocale: Locale = locale === "en" ? "ar" : "en";

  const switchLanguage = () => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale, scroll: false });
    });
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      disabled={isPending}
      aria-label={LABELS[nextLocale].aria}
      className="
        flex
        p-2 px-4
        text-sm text-white
        bg-[conic-gradient(from_181.06deg_at_50%_50%,rgba(100,154,99,0.35)_0deg,rgba(0,0,0,0)_172.66deg,rgba(107,219,106,0.31)_281.25deg,rgba(100,154,99,0.35)_360deg)]
        rounded-[35px]
        cursor-pointer
        items-center gap-2
        transition hover:brightness-125 disabled:opacity-60
      "
    >
      <HiOutlineGlobeAlt size={18} aria-hidden="true" />
      <span lang={nextLocale} className="hidden sm:inline">
        {LABELS[nextLocale].name}
      </span>
      <span lang={nextLocale} className="uppercase sm:hidden">
        {nextLocale}
      </span>
    </button>
  );
}