"use client"

import type React from "react"
import { useState } from "react"

export interface MegaMenuItem {
  id: string
  label: string
  url: string
  children?: MegaMenuItem[]
  featured?: {
    title: string
    description: string
    image: string
    link: string
  }[]
}

export interface MegaMenuProps {
  items: MegaMenuItem[]
  logo?: {
    src: string
    alt: string
    url: string
  }
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ items, logo }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleMouseEnter = (id: string) => {
    setActiveMenu(id)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
         
          <div className="flex">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.url}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-indigo-600"
                >
                  {item.label}
                </a>
                {item.children && activeMenu === item.id && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md sm:px-0 z-10">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {item.children.map((child) => (
                          <a
                            key={child.id}
                            href={child.url}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{child.label}</p>
                              {child.children && (
                                <ul className="mt-2 space-y-2">
                                  {child.children.map((grandchild) => (
                                    <li key={grandchild.id}>
                                      <a href={grandchild.url} className="text-sm text-gray-500 hover:text-gray-700">
                                        {grandchild.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                      {item.featured && (
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {item.featured.map((feature, index) => (
                            <div key={index} className="flow-root">
                              <a
                                href={feature.link}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <img
                                  src={feature.image || "/placeholder.svg"}
                                  alt={feature.title}
                                  className="w-12 h-12 object-cover rounded-md mr-4"
                                />
                                <div>
                                  <p className="text-base font-medium text-gray-900">{feature.title}</p>
                                  <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

