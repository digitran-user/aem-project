"use client"

import type React from "react"
import { useState, useEffect } from "react"

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
  slides = [
    {
      id: "1",
      title: "First Slide",
      description: "This is the first slide description",
      backgroundImage: "/placeholder.svg?height=500&width=1600",
      cta: { label: "Learn More", url: "#" },
    },
    {
      id: "2",
      title: "Second Slide",
      description: "This is the second slide description",
      backgroundImage: "/placeholder.svg?height=500&width=1600",
      cta: { label: "Get Started", url: "#" },
    },
    {
      id: "3",
      title: "Third Slide",
      description: "This is the third slide description",
      backgroundImage: "/placeholder.svg?height=500&width=1600",
      cta: { label: "Contact Us", url: "#" },
    },
  ],
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
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
              {slide.description && <p className="mt-6 text-xl text-white max-w-lg">{slide.description}</p>}
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
        ))}
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white"
            onClick={goToPrevSlide}
          >
            <span className="sr-only">Previous</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white"
            onClick={goToNextSlide}
          >
            <span className="sr-only">Next</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-3 w-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
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

