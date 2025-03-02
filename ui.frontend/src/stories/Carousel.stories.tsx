import type { Meta, StoryObj } from "@storybook/react"
import { Carousel } from "../components/Carousel/Carousel"

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    items: [
      {
        id: "1",
        image: "/placeholder.svg?height=300&width=400",
        title: "Item 1",
        description: "Description for item 1",
        link: "#",
      },
      {
        id: "2",
        image: "/placeholder.svg?height=300&width=400",
        title: "Item 2",
        description: "Description for item 2",
        link: "#",
      },
      {
        id: "3",
        image: "/placeholder.svg?height=300&width=400",
        title: "Item 3",
        description: "Description for item 3",
        link: "#",
      },
      {
        id: "4",
        image: "/placeholder.svg?height=300&width=400",
        title: "Item 4",
        description: "Description for item 4",
        link: "#",
      },
      {
        id: "5",
        image: "/placeholder.svg?height=300&width=400",
        title: "Item 5",
        description: "Description for item 5",
        link: "#",
      },
    ],
    autoPlay: true,
    interval: 5000,
    showDots: true,
    showArrows: true,
    slidesToShow: 3,
  },
}

