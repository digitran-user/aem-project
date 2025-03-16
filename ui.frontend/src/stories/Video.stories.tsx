import type { Meta, StoryObj } from "@storybook/react"
import { Video } from "../components/Video/Video"

const meta: Meta<typeof Video> = {
  title: "Components/Video",
  component: Video,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Video>

export const Default: Story = {
  args: {
    videoUrl: "https://www.youtube.com/watch?v=6x5xtNhOts0",
    thumbnailUrl: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    videoTitle: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
  }
}