"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedinIn, FaQuoteLeft, FaStar } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { testimonialsData } from "@/data/testimonialsData";

const AUTOPLAY_MS = 10000;

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({
  name,
  src,
  size,
}: {
  name: string;
  src?: string;
  size: number;
}) {
  return src ? (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  ) : (
    <span
      aria-hidden
      className="flex shrink-0 items-center justify-center rounded-full bg-[#217c2c]/30 font-bold text-white"
      style={{ width: size, height: size, fontSize: size / 3 }}
    >
      {initials(name)}
    </span>
  );
}

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const locale = useLocale() as "en" | "ar";
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonialsData.length;

  // Auto-rotate every 10s. Pauses while hovering/focusing, and is skipped
  // for users who prefer reduced motion. Clicking a tab resets the timer.
  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setActive((i) => (i + 1) % count),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(timer);
  }, [active, paused, count]);

  if (testimonialsData.length === 0) return null;
  const current = testimonialsData[active];

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
      dateStyle: "medium",
    }).format(new Date(date));

  return (
    <section className="container p-2 pt-10" id="testimonials">
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_1.5fr] md:gap-14">
        {/* Intro */}
        <div className="text-start">
          <span className="mb-5 inline-block rounded-full border border-(--color3) bg-[#217c2c]/20 px-4 py-1 text-xs text-white">
            {t("badge")}
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
            <span className="text-white">{t("headlineDark")}</span>{" "}
            <span className="text-gray-500">{t("headlineMuted")}</span>
          </h2>
          <Link
            href="/contact-us"
            className="inline-block rounded-[35px] border border-(--main-color) bg-(--color3) px-7 py-3 text-white transition hover:brightness-125"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Featured testimonial */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            role="tabpanel"
            aria-live="polite"
            className="relative min-h-[300px] overflow-hidden rounded-2xl border border-(--color3) bg-[#173119]/60 p-6 md:p-8"
          >
            <FaQuoteLeft
              aria-hidden
              className="pointer-events-none absolute end-6 top-14 text-6xl text-(--main-color)/10 md:text-8xl"
            />
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative flex min-h-[250px] flex-col"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Avatar name={current.name} src={current.avatar} size={48} />
                  <figcaption className="me-auto">
                    <span className="block font-bold text-white">
                      {current.name}
                    </span>
                    <span className="text-sm text-(--main-color)">
                      {current.role[locale]}
                    </span>
                  </figcaption>
                  {current.linkedin && (
                    <a
                      href={current.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${current.name} on LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-(--color3)"
                    >
                      <FaLinkedinIn aria-hidden />
                    </a>
                  )}
                </div>

                <blockquote className="mb-8 text-lg leading-8 text-white md:text-xl md:leading-9">
                  {current.quote[locale]}
                </blockquote>

                <div className="mt-auto flex items-center justify-between">
                  <div
                    className="flex gap-1"
                    role="img"
                    aria-label={`${current.rating} / 5`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <FaStar
                        key={n}
                        aria-hidden
                        className={
                          n <= current.rating
                            ? "text-yellow-400"
                            : "text-zinc-600"
                        }
                      />
                    ))}
                  </div>
                  {current.date && (
                    <time
                      dateTime={current.date}
                      className="text-sm text-gray-400"
                    >
                      {formatDate(current.date)}
                    </time>
                  )}
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          {testimonialsData.length > 1 && (
            <div
              role="tablist"
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {testimonialsData.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`${item.name} (${index + 1}/${testimonialsData.length})`}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer rounded-full p-1 transition ${
                    index === active
                      ? "opacity-100 ring-2 ring-(--main-color)"
                      : "opacity-40 hover:opacity-80"
                  }`}
                >
                  <Avatar name={item.name} src={item.avatar} size={44} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
