import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "../components/Header/Header"

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    title: "Welcome to our website",
    subtitle: "Discover amazing content and services",
    cta: { label: "Get Started", url: "#" },
    secondaryCta: { label: "Learn More", url: "#" },
    backgroundImage: "/placeholder.svg?height=600&width=1600",
  },
}

