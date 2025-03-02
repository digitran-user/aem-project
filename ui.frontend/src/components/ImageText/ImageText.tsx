import type React from "react"

export interface ImageTextProps {
  image?: {
    src: string
    alt: string
  }
  title?: string
  content?: string
  cta?: {
    label: string
    url: string
  }
  imagePosition?: "left" | "right"
  backgroundColor?: string
}

export const ImageText: React.FC<ImageTextProps> = ({
  image = {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Feature image",
  },
  title = "Feature Title",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  cta = {
    label: "Learn More",
    url: "#",
  },
  imagePosition = "left",
  backgroundColor = "white",
}) => {
  return (
    <div className={`bg-${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center py-16 lg:py-24`}
        >
          <div className="w-full lg:w-1/2 lg:pr-8 lg:pl-8">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-8 lg:pl-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-gray-500">{content}</p>
            {cta && (
              <div className="mt-8">
                <a
                  href={cta.url}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {cta.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

