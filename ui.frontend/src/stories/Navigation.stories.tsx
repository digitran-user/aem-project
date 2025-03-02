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
      { id: "1", label: "Home", url: "#" },
      { id: "2", label: "About", url: "#" },
      { id: "3", label: "Services", url: "#" },
      {
        id: "4",
        label: "Products",
        url: "#",
        children: [
          { id: "4-1", label: "Product 1", url: "#" },
          { id: "4-2", label: "Product 2", url: "#" },
          { id: "4-3", label: "Product 3", url: "#" },
        ],
      },
      { id: "5", label: "Contact", url: "#" },
    ],
    logo: {
      src: "/placeholder.svg",
      alt: "Company Logo",
      url: "/",
    },
  },
}

