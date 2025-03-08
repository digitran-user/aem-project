import type { Meta, StoryObj } from "@storybook/react"
import { ColumnController } from "../components/ColumnController/ColumnController"

const meta: Meta<typeof ColumnController> = {
  title: "Components/ColumnController",
  component: ColumnController,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ColumnController>

// Create a placeholder column for demonstration
const Column = ({ color = "bg-gray-200", height = "h-40", text = "" }) => (
  <div className={`${color} ${height} flex items-center justify-center rounded-md p-4`}>
    <span className="text-lg font-semibold">{text}</span>
  </div>
)

export const OneColumn: Story = {
  args: {
    layout: "100",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="100%" />
    </ColumnController>
  ),
}

export const TwoColumnsEqual: Story = {
  args: {
    layout: "50-50",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="50%" />
      <Column color="bg-green-100" text="50%" />
    </ColumnController>
  ),
}

export const TwoColumnsWide: Story = {
  args: {
    layout: "75-25",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="75%" />
      <Column color="bg-green-100" text="25%" />
    </ColumnController>
  ),
}

export const TwoColumnsNarrow: Story = {
  args: {
    layout: "25-75",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="25%" />
      <Column color="bg-green-100" text="75%" />
    </ColumnController>
  ),
}

export const ThreeColumnsEqual: Story = {
  args: {
    layout: "33-33-33",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="33%" />
      <Column color="bg-green-100" text="33%" />
      <Column color="bg-yellow-100" text="33%" />
    </ColumnController>
  ),
}

export const ThreeColumnsWideFirst: Story = {
  args: {
    layout: "50-25-25",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="50%" />
      <Column color="bg-green-100" text="25%" />
      <Column color="bg-yellow-100" text="25%" />
    </ColumnController>
  ),
}

export const ThreeColumnsWideMiddle: Story = {
  args: {
    layout: "25-50-25",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="25%" />
      <Column color="bg-green-100" text="50%" />
      <Column color="bg-yellow-100" text="25%" />
    </ColumnController>
  ),
}

export const ThreeColumnsWideLast: Story = {
  args: {
    layout: "25-25-50",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="25%" />
      <Column color="bg-green-100" text="25%" />
      <Column color="bg-yellow-100" text="50%" />
    </ColumnController>
  ),
}

export const FourColumnsEqual: Story = {
  args: {
    layout: "25-25-25-25",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="25%" />
      <Column color="bg-green-100" text="25%" />
      <Column color="bg-yellow-100" text="25%" />
      <Column color="bg-red-100" text="25%" />
    </ColumnController>
  ),
}

export const FourColumnsWideFirst: Story = {
  args: {
    layout: "40-20-20-20",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="40%" />
      <Column color="bg-green-100" text="20%" />
      <Column color="bg-yellow-100" text="20%" />
      <Column color="bg-red-100" text="20%" />
    </ColumnController>
  ),
}

export const FourColumnsWideSecond: Story = {
  args: {
    layout: "20-40-20-20",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="20%" />
      <Column color="bg-green-100" text="40%" />
      <Column color="bg-yellow-100" text="20%" />
      <Column color="bg-red-100" text="20%" />
    </ColumnController>
  ),
}

export const FourColumnsWideThird: Story = {
  args: {
    layout: "20-20-40-20",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="20%" />
      <Column color="bg-green-100" text="20%" />
      <Column color="bg-yellow-100" text="40%" />
      <Column color="bg-red-100" text="20%" />
    </ColumnController>
  ),
}

export const FourColumnsWideFourth: Story = {
  args: {
    layout: "20-20-20-40",
    gap: 16,
  },
  render: (args) => (
    <ColumnController {...args}>
      <Column color="bg-blue-100" text="20%" />
      <Column color="bg-green-100" text="20%" />
      <Column color="bg-yellow-100" text="20%" />
      <Column color="bg-red-100" text="40%" />
    </ColumnController>
  ),
}

