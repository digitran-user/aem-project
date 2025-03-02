"use client"

import type React from "react"
import { useEffect, useRef } from "react"

export interface LocationProps {
  title?: string
  address?: string
  phone?: string
  email?: string
  hours?: Array<{
    days: string
    hours: string
  }>
  mapEmbedUrl?: string
  showMap?: boolean
}

export const Location: React.FC<LocationProps> = ({
  title = "Our Location",
  address = "123 Main Street, City, State 12345",
  phone = "(123) 456-7890",
  email = "info@example.com",
  hours = [
    { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1332899194916!2d-122.41941548468176!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1625687631587!5m2!1sen!2sus",
  showMap = true,
}) => {
  const mapRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Add event listener to handle map loading
    const handleMapLoad = () => {
      if (mapRef.current) {
        mapRef.current.style.opacity = "1"
      }
    }

    if (mapRef.current) {
      mapRef.current.addEventListener("load", handleMapLoad)
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.removeEventListener("load", handleMapLoad)
      }
    }
  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{title}</h2>
            <div className="mt-8">
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Address</h3>
                <p className="mt-2 text-base text-gray-500">{address}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Phone number</dt>
                    <dd>Phone: {phone}</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Email</dt>
                    <dd>Email: {email}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                <dl className="mt-2 text-base text-gray-500">
                  {hours.map((item, index) => (
                    <div key={index} className="mt-1">
                      <dt className="font-medium inline">{item.days}: </dt>
                      <dd className="inline">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          {showMap && (
            <div className="mt-12 lg:mt-0">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
                <iframe
                  ref={mapRef}
                  src={mapEmbedUrl}
                  title="Google Maps"
                  className="w-full h-full transition-opacity duration-700 opacity-0"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

