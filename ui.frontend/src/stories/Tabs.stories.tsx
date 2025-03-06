import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "../components/Tabs/Tabs"

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    items: [
      { id: "1", title: "Tab 1", content: <p>Content for Tab 1</p> },
      { id: "2", title: "Tab 2", content: <p>Content for Tab 2</p> },
      { id: "3", title: "Tab 3", content: <p>Content for Tab 3</p> },
    ],
    defaultActiveTab: "1",
  },
}

