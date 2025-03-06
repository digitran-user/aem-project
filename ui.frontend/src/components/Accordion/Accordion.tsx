"use client"

import type React from "react"
import { useState } from "react"

export interface AccordionItem {
  id: string
  title: string
  content: string
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      } else {
        return prev.includes(id) ? [] : [id]
      }
    })
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-md">
          <button
            className="flex justify-between items-center w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleItem(item.id)}
          >
            <span className="font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform ${openItems.includes(item.id) ? "transform rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {openItems.includes(item.id) && (
            <div className="px-4 py-2">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

