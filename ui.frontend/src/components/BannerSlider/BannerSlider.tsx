"use client"

import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export interface BannerSlide {
  id: string
  title: string
  description?: string
  backgroundImage: string
  cta?: {
    label: string
    url: string
  }
}

export interface BannerSliderProps {
  slides?: BannerSlide[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
}

export const BannerSlider: React.FC<BannerSliderProps> = ({
  slides = [],
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={showArrows}
      pagination={showDots ? { clickable: true } : false}
      autoplay={autoPlay ? { delay: interval, disableOnInteraction: false } : false}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-20">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h2>
              {slide.description && <p className="mt-6 text-xl text-white max-w-lg" dangerouslySetInnerHTML={{__html: slide.description}} />}
              {slide.cta && (
                <div className="mt-10">
                  <a
                    href={slide.cta.url}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {slide.cta.label}
                  </a>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

