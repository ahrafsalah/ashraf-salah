"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Landing = () => {
  const t = useTranslations("Landing");

  return (
    <div
      className="
        container
        mx-auto px-4
        text-white
      "
    >
      <div
        className="
          flex
          mt-10
          relative
          md:mt-20 md:items-start
        "
      >
        <div
          style={{ backgroundImage: "url('/images/Gradient.png')" }}
          className="
            w-[460px] h-[260px]
            bg-contain bg-no-repeat bg-center
            relative
            md:w-[260px]
          "
        >
          <Image
            src="/images/image.png"
            alt="Ashraf"
            width={120}
            height={120}
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            "
          />
        </div>

        <Image
          src="/images/arrow.png"
          alt="arrow"
          width={130}
          height={130}
          className="
            absolute -top-10 left-1/4 rtl:right-1/4 rtl:md:right-34 rtl:left-auto rtl:md:left-auto rtl:-scale-x-100
            md:left-34
          "
        />

        {/* Text */}
        <div
          className="
            flex flex-col
            -mt-2
          "
        >
          <h1
            className="
              min-[450px]:text-lg min-[540px]:relative
              text-xs
              rtl:text-lg 
              absolute -top-4 right-3
              rtl:left-0 rtl:right-auto
              sm:text-lg
            "
          >
            {t("greeting")}
          </h1>
          <div
            className="
              flex flex-col
              mt-10
              gap-1
              md:mt-0
            "
          >
            <p
              className="
                mt-10
                text-xs font-light
                sm:text-[10px]
                md:text-sm
              "
            >
              {t("roleDesigner")}
            </p>
            <p
              className="
                text-xl font-light
                relative
                sm:text-2xl
                md:text-5xl
              "
            >
              {t("quotePart1")}{" "}
              <span
                className="
                  block
                "
              >
                {t("quotePart2")}{" "}
                <span
                  className="
                    text-(--main-color)
                  "
                >
                  {t("quotePart3")}
                </span>
              </span>
            </p>

            <p
              className="
                text-xs text-gray-400
                italic
                sm:text-sm
                md:text-base
              "
            >
              {t("quoteReason")}
            </p>
          </div>
        </div>
      </div>

      <div
        className="
          p-2 md:p-6 mt-6 
        "
      >
        <h2
          className="
            mb-7
            text-2xl md:text-4xl font-bold text-transparent 
            bg-gradient-to-r from-white to-gray-400 bg-clip-text text-center
          "
        >
          {t("developerTitle")}
        </h2>
        <p
          className="
            max-w-4xl
            font-thin text-[15px] leading-7 text-gray-300
          "
        >
          {t("developerDescription")}
        </p>
      </div>
    </div>
  );
};

export default Landing;
