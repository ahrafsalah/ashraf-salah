"use client";

import { servicesData } from "@/data/servicesData";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLocale, useTranslations } from "next-intl"; // 1. استيراد useLocale هنا

const Services = () => {
  const t = useTranslations("Services");
  const locale = useLocale() as "en" | "ar";

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="container p-2" id="services">
      <h2 className="main-heading">{t("title")}</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 w-full">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="box bg-black relative cursor-pointer rounded-lg overflow-hidden border border-zinc-800 flex flex-col h-full"
          >
            <Image
              src={service.image}
              alt={service.title[locale]}
              width={200}
              height={200}
              className="object-cover w-full h-50"
            />

            <h3 className="text-(--main-color) m-5 text-center font-bold">
              {service.title[locale]}
            </h3>
            <p className="text-xs mb-5 px-5 leading-5 text-white">
              {service.desc[locale]}
            </p>
            <div
              className={`info relative p-5 mt-auto bg-black ${
                locale === "ar" ? "info-ar" : "info-en"
              }`}
            >
              <span className="service-number flex px-5 items-center  justify-start ">
                {new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                }).format(index + 1)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
