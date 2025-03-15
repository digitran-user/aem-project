import type React from "react"

export interface CardProps {
  image?: {
    src: string
    alt: string
  }
  title?: string
  description?: string
  cta?: {
    label: string
    url: string
  }
  tags?: string[]
  variant?: "default" | "horizontal" | "minimal"
  alignment?: "left" | "right"
  className?: string
}

export const Card: React.FC<CardProps> = ({
  image = {
    src: "",
    alt: "",
  },
  title = "Card Title",
  description = "This is a description for the card component.",
  cta = {
    label: "Learn More",
    url: "#",
  },
  tags = [],
  variant = "default",
  alignment = "left",
  className = "",
}) => {
  const renderDefault = () => (
    <div className={`mx-1 my-1 bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
     {image && image.hasOwnProperty("src") && <img src={image.src} alt={image.alt} className="hover:animate-rotate-y w-full h-48 object-cover" /> }
      <div className="p-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{__html: description}} />
        <div className="flex justify-center">
          {cta && (
            <a
              href={cta.url}
              className="w-full transition flex justify-center inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </div>
  )

  const renderHorizontal = () => (
    <div className={`mx-1 my-1 bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row ${className} ${alignment === 'right' ? 'sm:flex-row-reverse' : ''}`}>
      <div className="sm:w-1/3">
      {image && image.hasOwnProperty("src") && <img src={image.src} alt={image.alt} className="w-full h-48 sm:h-full object-cover" /> }
      </div>
      <div className="p-6 sm:w-2/3">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{__html: description}} />
        {cta && (
          <a
            href={cta.url}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {cta.label}
          </a>
        )}
      </div>
    </div>
  )

  const renderMinimal = () => (
    <div className={`bg-white rounded-lg overflow-hidden ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{__html: description}} />
        {cta && (
          <a href={cta.url} className="text-indigo-600 hover:text-indigo-500 font-medium">
            {cta.label} →
          </a>
        )}
      </div>
    </div>
  )

  switch (variant) {
    case "horizontal":
      return renderHorizontal()
    case "minimal":
      return renderMinimal()
    default:
      return renderDefault()
  }
}

