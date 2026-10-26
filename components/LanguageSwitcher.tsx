"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../i18n/routing"; 


export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (nextLocale: "en" | "ar") => {
    router.replace({ pathname }, { locale: nextLocale });
  };

  return (
    <div className="fixed bottom-6 left-4 z-50">

      {locale === "en" ? (
        <button 
          onClick={() => switchLanguage("ar")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          العربية
        </button>
      ) : (
        <button 
          onClick={() => switchLanguage("en")}
          className="bg-(--main-color) hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          English
        </button>
      )}
    </div>
  );
}