"use client"

import type React from "react"
import { useEffect, useState } from "react"

export interface AnchorItem {
  id: string
  label: string
}

export interface AnchoringProps {
  items: AnchorItem[]
  title?: string
  smooth?: boolean
  offset?: number
}

export const Anchoring: React.FC<AnchoringProps> = ({
  items,
  title = "Table of Contents",
  smooth = true,
  offset = 0,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `-${offset}px 0px -90% 0px` },
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items, offset])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      if (smooth) {
        window.scrollTo({ top, behavior: "smooth" })
      } else {
        window.scrollTo(0, top)
      }
    }
  }

  return (
    <nav className="anchoring-nav">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeId === item.id
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

