import type { Meta, StoryObj } from "@storybook/react"
import { TitleSubtitle } from "../components/TitleSubtitle/TitleSubtitle"

const meta: Meta<typeof TitleSubtitle> = {
  title: "Components/TitleSubtitle",
  component: TitleSubtitle,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TitleSubtitle>

export const Default: Story = {
  args: {
    title: "This is a title",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    alignment: "left",
    style: {
        titleFont: "20px",
        subtitleFont: "14px",
        yspacing: "30px"
    }
  }
}