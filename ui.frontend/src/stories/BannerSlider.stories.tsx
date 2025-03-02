import type { Meta, StoryObj } from "@storybook/react"
import { BannerSlider } from "../components/BannerSlider/BannerSlider"

const meta: Meta<typeof BannerSlider> = {
  title: "Components/BannerSlider",
  component: BannerSlider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BannerSlider>

export const Default: Story = {
  args: {
    slides: [
      {
        id: "1",
        title: "First Slide",
        description: "This is the first slide description",
        backgroundImage: "/placeholder.svg?height=500&width=1600",
        cta: { label: "Learn More", url: "#" },
      },
      {
        id: "2",
        title: "Second Slide",
        description: "This is the second slide description",
        backgroundImage: "/placeholder.svg?height=500&width=1600",
        cta: { label: "Get Started", url: "#" },
      },
      {
        id: "3",
        title: "Third Slide",
        description: "This is the third slide description",
        backgroundImage: "/placeholder.svg?height=500&width=1600",
        cta: { label: "Contact Us", url: "#" },
      },
    ],
    autoPlay: true,
    interval: 5000,
    showDots: true,
    showArrows: true,
  },
}

