"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// @ts-ignore
import "./projects.css";

import { projectsData } from '@/data/projectsData';
import Image from 'next/image';

function Projects() {
  return (
    <div className="container" id='projects'>
      <h1 className="main-heading">Latest Projects</h1>

      <Swiper 
        modules={[Pagination, Navigation, Autoplay]} 
        grabCursor 
        initialSlide={3}
        centeredSlides={true}
        slidesPerView="auto"
        speed={800}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        // بنسيب Swiper يتعامل مع المسافات بناءً على حجم الشاشة بشكل سليم
        breakpoints={{
          320: { spaceBetween: 20 },
          650: { spaceBetween: 30 },
          1040: { spaceBetween: 40 }
        }}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-lg object-contain"
            />
            <div className='title'>
              <h1 className='text-white'>{project.title}</h1>
            </div>
            <div className='content'>
              <div className='text-box'>
                <p className='text-white'>{project.description}</p>
              </div>
              <div className="footer">
                <div className='category'>
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
};

export default Projects;