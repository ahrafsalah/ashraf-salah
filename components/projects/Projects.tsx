"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// @ts-ignore
import "./projects.css";

import { projectsData } from '@/data/projectsData';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
function Projects() {
  const swiperwrapperRef = useRef<HTMLElement | null>(null);
  const adjustMargin = () => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    if (swiperwrapperRef.current) {
      swiperwrapperRef.current.style.marginLeft = screenWidth <= 520 ? '0px' : screenWidth <= 650 ? "-50px" :
        screenWidth <= 800 ? "-100px" : "-250px";
    }

  }
  useEffect(() => {
    adjustMargin();
    window.addEventListener('resize', adjustMargin);
    return () => {
      window.removeEventListener('resize', adjustMargin);
    }
  }, [])
  return (
    <div className="container " id='projects'>
      <h1 className="main-heading">Latest Projects</h1>

      <Swiper modules={[Pagination, Navigation, Autoplay]} grabCursor initialSlide={3}
        centeredSlides
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}

        breakpoints={{
          320: { spaceBetween: 40 },
          650: { spaceBetween: 30 },
          1040: { spaceBetween: 20 }
        }}
        onSwiper={(swiper) => swiperwrapperRef.current = swiper.wrapperEl}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-lg object-contain"
            />
            <div className='title'>
              <h1>{project.title}</h1>
            </div>
            <div className='content'>
              <div className='text-box'>
                <p >{project.description}</p>
              </div>
              <div className="footer">
                <div className='category'>
                  {project?.categories.map((category, index) => (
                    <span
                      key={index}
                      style={{ "--i": index + 1 } as React.CSSProperties}
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
};

export default Projects;
