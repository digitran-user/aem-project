"use client"

import React, { useState, useRef, useEffect } from "react"
import "./Navigation.css"

export interface NavigationItem {
  id: string
  label: string
  url: string
  children?: NavigationItem[]
  featured?: {
    title: string
    description: string
    image: string
    link: string
  }[]
}

export interface NavigationProps {
  items: NavigationItem[]
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [activeSecondLevelMenu, setActiveSecondLevelMenu] = useState<string | null>(null)
  const submenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null)
        setActiveSecondLevelMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSubmenu = (id: string) => {
    setActiveSubmenu(activeSubmenu === id ? null : id)
    setActiveSecondLevelMenu(null)
  }

  const toggleSecondLevelMenu = (id: string) => {
    setActiveSecondLevelMenu(activeSecondLevelMenu === id ? null : id)
  }

  const renderDesktopMenu = () => (
    <nav className="hidden md:flex space-x-10">
      {items.map((item) => (
        <div key={item.id} className="relative">
          {item.children ? (
            <>
              <button
                className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => toggleSubmenu(item.id)}
              >
                <span>{item.label}</span>
                <svg
                  className={`ml-2 h-5 w-5 group-hover:text-gray-500 ${activeSubmenu === item.id ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeSubmenu === item.id && (
                <div
                  ref={submenuRef}
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {item.children.map((subitem) => (
                        <div key={subitem.id}>
                          {subitem.children ? (
                            <div>
                              <button
                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                                onClick={() => toggleSecondLevelMenu(subitem.id)}
                              >
                                {subitem.label}
                                <svg
                                  className={`ml-2 h-5 w-5 inline-block ${
                                    activeSecondLevelMenu === subitem.id ? "rotate-180" : ""
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                              {activeSecondLevelMenu === subitem.id && (
                                <div className="mt-2 space-y-2 pl-4">
                                  {subitem.children.map((childItem) => (
                                    <a
                                      key={childItem.id}
                                      href={childItem.url}
                                      className="atag block text-sm text-gray-500 hover:text-gray-900"
                                    >
                                      {childItem.label}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <a href={subitem.url} className="-m-3 atag flex items-start rounded-lg p-3 hover:bg-gray-50">
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{subitem.label}</p>
                              </div>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                    {item.featured && (
                      <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                        <div className="mt-5 text-sm">
                          <h3 className="font-medium text-gray-500">Featured</h3>
                          <ul role="list" className="mt-4 space-y-4">
                            {item.featured.map((feature, index) => (
                              <li key={index} className="truncate">
                                <a href={feature.link} className="atag font-medium text-gray-900 hover:text-gray-700">
                                  {feature.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <a href={item.url} className="atag text-base font-medium text-gray-500 hover:text-gray-900">
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  )

  const renderMobileMenu = () => (
    <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
      <div className="space-y-1 px-2 pt-2 pb-3">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            {item.children ? (
              <div>
                <button
                  className="text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md w-full text-left"
                  onClick={() => toggleSubmenu(item.id)}
                >
                  {item.label}
                  <svg
                    className={`ml-2 h-5 w-5 inline-block ${activeSubmenu === item.id ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {activeSubmenu === item.id && (
                  <div className="ml-4">
                    {item.children.map((subitem) => (
                      <div key={subitem.id}>
                        {subitem.children ? (
                          <div>
                            <button
                              className="text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md w-full text-left"
                              onClick={() => toggleSecondLevelMenu(subitem.id)}
                            >
                              {subitem.label}
                              <svg
                                className={`ml-2 h-5 w-5 inline-block ${
                                  activeSecondLevelMenu === subitem.id ? "rotate-180" : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                            {activeSecondLevelMenu === subitem.id && (
                              <div className="ml-4">
                                {subitem.children.map((childItem) => (
                                  <a
                                    key={childItem.id}
                                    href={childItem.url}
                                    className="text-base font-medium text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md"
                                  >
                                    {childItem.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            href={subitem.url}
                            className="text-base font-medium text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md"
                          >
                            {subitem.label}
                          </a>
                        )}
                      </div>
                    ))}
                    {item.featured && (
                      <div className="mt-5 space-y-4">
                        <h3 className="font-medium text-gray-500 px-3">Featured</h3>
                        {item.featured.map((feature, index) => (
                          <a
                            key={index}
                            href={feature.link}
                            className="text-base font-medium text-gray-900 hover:text-gray-700 block px-3 py-2"
                          >
                            {feature.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.url}
                className="text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md"
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          {renderDesktopMenu()}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {renderMobileMenu()}
    </div>
  )
}

