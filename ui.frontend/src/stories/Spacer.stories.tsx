import type { Meta, StoryObj } from "@storybook/react"
import { Spacer } from "../components/Spacer/Spacer"

const meta: Meta<typeof Spacer> = {
  title: "Components/Spacer",
  component: Spacer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Spacer>

export const Default: Story = {
  args: {
    top: "10px",
    bottom: "0px",
    left: "10px",
    right: "0px"
  }
}