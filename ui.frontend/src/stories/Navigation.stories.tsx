import type { Meta, StoryObj } from "@storybook/react"
import { Navigation } from "../components/Navigation/Navigation"

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  args: {
    items: [
      { id: "1", label: "Home", url: "/" },
      { id: "2", label: "About", url: "/about" },
      {
        id: "3",
        label: "Products",
        url: "/products",
        children: [
          {
            id: "3-1",
            label: "Category 1",
            url: "/products/category-1",
            children: [
              { id: "3-1-1", label: "Subcategory 1", url: "/products/category-1/subcategory-1" },
              { id: "3-1-2", label: "Subcategory 2", url: "/products/category-1/subcategory-2" },
            ],
          },
          { id: "3-2", label: "Category 2", url: "/products/category-2" },
          { id: "3-3", label: "Category 3", url: "/products/category-3" },
        ],
        featured: [
          {
            title: "New Release",
            description: "Check out our latest product",
            image: "/placeholder.svg?height=200&width=300",
            link: "/products/new-release",
          },
          {
            title: "Best Seller",
            description: "Our most popular item",
            image: "/placeholder.svg?height=200&width=300",
            link: "/products/best-seller",
          },
        ],
      },
      {
        id: "4",
        label: "Services",
        url: "/services",
        children: [
          { id: "4-1", label: "Consulting", url: "/services/consulting" },
          {
            id: "4-2",
            label: "Development",
            url: "/services/development",
            children: [
              { id: "4-2-1", label: "Web Development", url: "/services/development/web" },
              { id: "4-2-2", label: "Mobile Development", url: "/services/development/mobile" },
            ],
          },
          { id: "4-3", label: "Support", url: "/services/support" },
        ],
      },
      { id: "5", label: "Contact", url: "/contact" },
    ],
  },
}

