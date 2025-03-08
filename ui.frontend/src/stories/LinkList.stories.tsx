import type { Meta, StoryObj } from "@storybook/react"
import { LinkList } from "../components/LinkList/LinkList"

const meta: Meta<typeof LinkList> = {
  title: "Components/LinkList",
  component: LinkList,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LinkList>

export const Default: Story = {
  args: {
    title: "Popular Links",
    items: [
      {
        id: "1",
        label: "Getting Started Guide",
        url: "/getting-started",
        description: "Learn how to get started with our platform",
      },
      {
        id: "2",
        label: "Documentation",
        url: "/docs",
      },
      {
        id: "3",
        label: "API Reference",
        url: "/api",
        description: "Explore our API endpoints and functionality",
      },
      {
        id: "4",
        label: "Community Forums",
        url: "/community",
      },
      {
        id: "5",
        label: "Support",
        url: "/support",
        target: "_blank",
      },
    ],
    showArrows: true,
  },
}

export const WithoutArrows: Story = {
  args: {
    ...Default.args,
    showArrows: false,
  },
}

export const SimpleList: Story = {
  args: {
    title: "Quick Links",
    items: [
      { id: "1", label: "Home", url: "/" },
      { id: "2", label: "About", url: "/about" },
      { id: "3", label: "Services", url: "/services" },
      { id: "4", label: "Contact", url: "/contact" },
    ],
    showArrows: true,
  },
}

