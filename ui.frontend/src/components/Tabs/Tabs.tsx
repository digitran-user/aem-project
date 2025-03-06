"use client"

import type React from "react"
import { useState } from "react"

export interface TabItem {
  id: string
  title: string
  content: React.ReactNode
}

export interface TabsProps {
  items: TabItem[]
  defaultActiveTab?: string
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0].id)

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {items.map((item) => (
          <button
            key={item.id}
            className={`px-4 py-2 font-medium text-sm focus:outline-none ${
              activeTab === item.id
                ? "border-b-2 border-indigo-500 text-indigo-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="mt-4">{items.find((item) => item.id === activeTab)?.content}</div>
    </div>
  )
}

