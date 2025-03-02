import type { Meta, StoryObj } from "@storybook/react"
import { Banner } from "../components/Banner/Banner"

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    title: "Banner Title",
    description: "This is a description for the banner component.",
    backgroundImage: "/placeholder.svg?height=400&width=1600",
    cta: { label: "Learn More", url: "#" },
    alignment: "center",
    overlay: true,
    overlayOpacity: 0.5,
    textColor: "white",
  },
}

