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
  contentPosition?: "top" | "center" | "bottom"
  backgroundColor?: string
}

export const ImageText: React.FC<ImageTextProps> = ({
  image = {
    src: "",
    alt: "",
  },
  title = "",
  content = "",
  cta = {
    label: "",
    url: "#",
  },
  contentPosition = "center",
  imagePosition = "left",
  backgroundColor = "white",
}) => {
  const contentPositionArray = {
    center : 'center',
    top: 'start',
    bottom: 'end',
  }
  return (
    <div style={{backgroundColor: backgroundColor}}>
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-4">
        <div
          className={`flex flex-col ${imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} items-${contentPositionArray[contentPosition]} py-6 lg:py-12`}
        >
          <div className="w-full lg:w-1/2 lg:pr-8 lg:pl-8">
          {image && image.hasOwnProperty("src") && <img
              src={image.src}
              alt={image.alt}
              className="transition-transform duration-300 hover:scale-110 rounded-lg shadow-xl w-full h-auto object-cover"
            /> }
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-8 lg:pl-8">
           {title && <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2> }
           {content && <p className="mt-4 text-lg text-gray-500" dangerouslySetInnerHTML={{__html: content}} /> }
            {cta && cta.hasOwnProperty("label") && (
              <div className="mt-8">
                <a
                  href={cta.url}
                  className="dgt-rounded-button inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

