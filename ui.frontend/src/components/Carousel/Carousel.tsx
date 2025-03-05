"use client"

import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "./Carousel.css" // Add this import at the top of the file

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export interface CarouselItem {
  id: string
  image: string
  title?: string
  description?: string
  link?: string
}

export interface CarouselProps {
  items?: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
  slidesToShow?: number
}

export const Carousel: React.FC<CarouselProps> = ({
  items = [],
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  slidesToShow = 3,
}) => {
  return (
    <div className="carousel-container relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesToShow}
        navigation={showArrows}
        pagination={showDots ? { clickable: true, el: ".carousel-pagination" } : false}
        autoplay={autoPlay ? { delay: interval, disableOnInteraction: false } : false}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: slidesToShow,
          },
        }}
        className="mb-10" // Add margin bottom to create space for pagination
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <a href={item.link} className="block">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title || ""}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  {item.title && <h3 className="text-lg font-semibold mb-2">{item.title}</h3>}
                  {item.description && <p className="text-gray-600" dangerouslySetInnerHTML={{__html: item.description}} />}
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showDots && <div className="carousel-pagination"></div>}
    </div>
  )
}

