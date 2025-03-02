import type React from "react"

export interface HeaderProps {
  title?: string
  subtitle?: string
  cta?: {
    label: string
    url: string
  }
  secondaryCta?: {
    label: string
    url: string
  }
  backgroundImage?: string
}

export const Header: React.FC<HeaderProps> = ({
  title = "Welcome to our website",
  subtitle = "Discover amazing content and services",
  cta = { label: "Get Started", url: "#" },
  secondaryCta = { label: "Learn More", url: "#" },
  backgroundImage = "/placeholder.svg?height=600&width=1600",
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 text-xl text-white max-w-3xl">{subtitle}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={cta.url}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {cta.label}
          </a>
          <a
            href={secondaryCta.url}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </div>
  )
}

