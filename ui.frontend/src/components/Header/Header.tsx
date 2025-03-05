import type React from "react"
import { Navigation, type NavigationItem } from "../Navigation/Navigation"

export interface HeaderProps {
  logo?: {
    src: string
    alt: string
    url: string
  }
  navigationItems: NavigationItem[]
  showSearch?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  logo = {
    src: "/placeholder.svg",
    alt: "Company Logo",
    url: "/",
  },
  navigationItems = [],
  showSearch = true,
}) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <a href={logo.url} className="flex-shrink-0">
              <img className="h-8 w-auto" src={logo.src || "/placeholder.svg"} alt={logo.alt} />
            </a>
          </div>
          <Navigation items={navigationItems} />
          {showSearch && (
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                />
                <svg
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

