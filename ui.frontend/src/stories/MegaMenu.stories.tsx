import type { Meta, StoryObj } from "@storybook/react"
import { MegaMenu } from "../components/MegaMenu/MegaMenu"

const meta: Meta<typeof MegaMenu> = {
  title: "Components/MegaMenu",
  component: MegaMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MegaMenu>

export const Default: Story = {
  args: {
    logo: {
      src: "/placeholder.svg?height=32&width=32",
      alt: "Company Logo",
      url: "/",
    },
    items: [
      {
        id: "1",
        label: "Products",
        url: "/products",
        children: [
          {
            id: "1-1",
            label: "Category 1",
            url: "/products/category-1",
            children: [
              { id: "1-1-1", label: "Subcategory 1", url: "/products/category-1/subcategory-1" },
              { id: "1-1-2", label: "Subcategory 2", url: "/products/category-1/subcategory-2" },
            ],
          },
          { id: "1-2", label: "Category 2", url: "/products/category-2" },
          { id: "1-3", label: "Category 3", url: "/products/category-3" },
        ],
        featured: [
          {
            title: "New Release",
            description: "Check out our latest product",
            image: "/placeholder.svg?height=48&width=48",
            link: "/products/new-release",
          },
          {
            title: "Best Seller",
            description: "Our most popular item",
            image: "/placeholder.svg?height=48&width=48",
            link: "/products/best-seller",
          },
        ],
      },
      {
        id: "2",
        label: "Services",
        url: "/services",
        children: [
          { id: "2-1", label: "Consulting", url: "/services/consulting" },
          { id: "2-2", label: "Development", url: "/services/development" },
          { id: "2-3", label: "Support", url: "/services/support" },
        ],
      },
      { id: "3", label: "About", url: "/about" },
      { id: "4", label: "Contact", url: "/contact" },
    ],
  },
}

