"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

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
  items = [
    {
      id: "1",
      image: "/placeholder.svg?height=300&width=400",
      title: "Item 1",
      description: "Description for item 1",
      link: "#",
    },
    {
      id: "2",
      image: "/placeholder.svg?height=300&width=400",
      title: "Item 2",
      description: "Description for item 2",
      link: "#",
    },
    {
      id: "3",
      image: "/placeholder.svg?height=300&width=400",
      title: "Item 3",
      description: "Description for item 3",
      link: "#",
    },
    {
      id: "4",
      image: "/placeholder.svg?height=300&width=400",
      title: "Item 4",
      description: "Description for item 4",
      link: "#",
    },
    {
      id: "5",
      image: "/placeholder.svg?height=300&width=400",
      title: "Item 5",
      description: "Description for item 5",
      link: "#",
    },
  ],
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  slidesToShow = 3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const totalSlides = items.length
  const maxIndex = Math.max(0, totalSlides - slidesToShow)

  // Responsive slidesToShow
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1)
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2)
      } else {
        setVisibleSlides(slidesToShow)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [slidesToShow])

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, currentIndex, maxIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNextSlide()
    }

    if (touchStart - touchEnd < -50) {
      goToPrevSlide()
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            width: `${(100 * totalSlides) / visibleSlides}%`,
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="px-2" style={{ width: `${100 / totalSlides}%` }}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <a href={item.link} className="block">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title || ""}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    {item.title && <h3 className="text-lg font-semibold mb-2">{item.title}</h3>}
                    {item.description && <p className="text-gray-600">{item.description}</p>}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            className={`absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-gray-800 shadow-md ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={goToPrevSlide}
            disabled={currentIndex === 0}
          >
            <span className="sr-only">Previous</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className={`absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 text-gray-800 shadow-md ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={goToNextSlide}
            disabled={currentIndex === maxIndex}
          >
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 flex space-x-1">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-indigo-600" : "bg-gray-300"}`}
              onClick={() => goToSlide(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

