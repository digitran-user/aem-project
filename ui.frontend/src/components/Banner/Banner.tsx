import type React from "react"

export interface BannerProps {
  title?: string
  description?: string
  backgroundImage?: string
  cta?: {
    label: string
    url: string
  }
  alignment?: "left" | "center" | "right"
  overlay?: boolean
  overlayOpacity?: number
  textColor?: string
}

export const Banner: React.FC<BannerProps> = ({
  title = "Banner Title",
  description = "This is a description for the banner component.",
  backgroundImage = "/placeholder.svg?height=400&width=1600",
  cta = { label: "Learn More", url: "#" },
  alignment = "center",
  overlay = true,
  overlayOpacity = 0.5,
  textColor = "white",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {overlay && <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>}
      </div>
      <div
        className={`relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col ${alignmentClasses[alignment]}`}
      >
        <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-${textColor}`}>{title}</h1>
        <p className={`mt-6 text-xl max-w-2xl text-${textColor}-200`}>{description}</p>
        {cta && (
          <div className="mt-10">
            <a
              href={cta.url}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

