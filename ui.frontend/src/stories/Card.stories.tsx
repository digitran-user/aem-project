import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "../components/Card/Card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    image: {
      src: "",
      alt: "Card image",
    },
    title: "Card Title",
    description: "This is a description for the card component.",
    cta: {
      label: "Learn More",
      url: "#",
    },
    tags: ["Tag 1", "Tag 2"],
    variant: "default",
  },
}

export const Horizontal: Story = {
  args: {
    ...Default.args,
    variant: "horizontal",
  },
}

export const HorizontalRight: Story = {
  args: {
    ...Default.args,
    variant: "horizontal",
    alignment: "right",
  },
}

export const Minimal: Story = {
  args: {
    ...Default.args,
    variant: "minimal",
  },
}

