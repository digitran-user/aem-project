import type React from "react"

export interface LinkItem {
  id: string
  label: string
  url: string
  target?: "_self" | "_blank" | "_parent" | "_top"
  description?: string
}

export interface LinkListProps {
  items: LinkItem[]
  title?: string
  showArrows?: boolean
  className?: string
  itemClassName?: string
}

export const LinkList: React.FC<LinkListProps> = ({
  items = [],
  title = "",
  showArrows = true,
  className = "",
  itemClassName = "",
}) => {
  return (
    <div className={`link-list ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-3">
            <a
              href={item.url}
              target={item.target || "_self"}
              className={`group flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors duration-200 ${itemClassName}`}
            >
              <div>
                <span className="font-medium">{item.label}</span>
                {item.description && (
                  <p className="text-sm text-gray-500 group-hover:text-blue-500 mt-1">{item.description}</p>
                )}
              </div>
              {showArrows && (
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

