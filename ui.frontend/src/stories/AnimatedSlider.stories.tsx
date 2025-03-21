import type { Meta, StoryObj } from "@storybook/react"
import { AnimatedSlider } from "../components/AnimatedSlider/AnimatedSlider"

const meta: Meta<typeof AnimatedSlider> = {
  title: "Components/AnimatedSlider",
  component: AnimatedSlider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AnimatedSlider>

export const Default: Story = {
  args: {
    centerImage: "https://res.cloudinary.com/customappmern/image/upload/v1742148698/eicherlogo_d6boja.png",
    slides: [
        { id: "1", imageUrl: "https://res.cloudinary.com/customappmern/image/upload/v1742039685/truck_guwpwo.png" },
        { id: "2", imageUrl: "https://res.cloudinary.com/customappmern/image/upload/v1742039684/Pro-6048-XP-thumb_x3z4g4.webp" },
        { id: "3", imageUrl: "https://res.cloudinary.com/customappmern/image/upload/v1742039684/2119-11_zevtrt.webp" },
        { id: "4", imageUrl: "https://res.cloudinary.com/customappmern/image/upload/v1742039685/truck_guwpwo.png" },
        { id: "5", imageUrl: "https://res.cloudinary.com/customappmern/image/upload/v1742039684/Pro-6048-XP-thumb_x3z4g4.webp" },
        { id: "6", imageUrl: "https://res.cloudinary.com/customappmern/image/upload/v1742039684/2119-11_zevtrt.webp" },
      ]
  }
}