import type { Meta, StoryObj } from "@storybook/react"
import {  } from "../components/Spacer/Spacer"
import { AnimatedBanner } from "../components/AnimatedBanner/AnimatedBanner"

const meta: Meta<typeof AnimatedBanner> = {
  title: "Components/AnimatedBanner",
  component: AnimatedBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AnimatedBanner>

export const Default: Story = {
  args: {
    itemList: [
      { id: "1", backgroundColor: "", title: "Section 1", description: "Subtitle for section 1", backgroundImage: "https://res.cloudinary.com/customappmern/image/upload/v1742039685/truck_guwpwo.png" },
      { id: "2", backgroundColor: "", title: "Section 2", description: "Subtitle for section 2", backgroundImage: "https://res.cloudinary.com/customappmern/image/upload/v1742039684/Pro-6048-XP-thumb_x3z4g4.webp" },
      { id: "3", backgroundColor: "", title: "Section 3", description: "Subtitle for section 3", backgroundImage: "https://res.cloudinary.com/customappmern/image/upload/v1742039684/2119-11_zevtrt.webp" },
    ]
    }
  }