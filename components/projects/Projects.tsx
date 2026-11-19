"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// @ts-ignore
import "./projects.css";

import { projectsData } from "@/data/projectsData";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale() as "en" | "ar";
  return (
    <div className="container" id="projects">
      <h2 className="main-heading">{t("title")}</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor
        initialSlide={0}
        centeredSlides={true}
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { spaceBetween: 20 },
          650: { spaceBetween: 30 },
          1040: { spaceBetween: 40 },
        }}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <Image
              src={project.image}
              alt={project.title[locale]}
              fill
              className="rounded-lg object-contain"
            />
            <div className="title">
              <h1 className="text-white">{project.title[locale]}</h1>
            </div>
            <div className="content">
              <div className="text-box">
                <p className="text-white">{project.description[locale]}</p>
                {(project.live || project.github) && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-(--main-color) bg-(--color3) px-4 py-1 text-sm text-white hover:brightness-125"
                      >
                        {t("live")}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-zinc-600 px-4 py-1 text-sm text-white hover:border-(--main-color)"
                      >
                        {t("code")}
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="footer">
                <div className="category">
                  {project?.categories.map((category, idx) => (
                    <span
                      key={idx}
                      style={{ "--i": idx + 1 } as React.CSSProperties}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
