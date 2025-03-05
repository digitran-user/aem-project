import type { Meta, StoryObj } from "@storybook/react"
import { ImageText } from "../components/ImageText/ImageText"

const meta: Meta<typeof ImageText> = {
  title: "Components/ImageText",
  component: ImageText,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ImageText>

export const Default: Story = {
  args: {
    image: {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Feature image",
    },
    title: "Feature Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    cta: {
      label: "Learn More",
      url: "#",
    },
    contentPosition: 'center',
    imagePosition: "left",
    backgroundColor: "white",
  },
}

export const ImageOnLeft: Story = {
  args: {
    ...Default.args,
    imagePosition: "right",
    contentPosition: 'top',
  },
}