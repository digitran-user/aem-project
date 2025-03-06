import type { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "../components/Accordion/Accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    items: [
      { id: "1", title: "Section 1", content: "Content for section 1" },
      { id: "2", title: "Section 2", content: "Content for section 2" },
      { id: "3", title: "Section 3", content: "Content for section 3" },
    ],
    allowMultiple: false,
  },
}

export const AllowMultiple: Story = {
  args: {
    ...Default.args,
    allowMultiple: true,
  },
}

