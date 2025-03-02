import type { Meta, StoryObj } from "@storybook/react"
import { Footer } from "../components/Footer/Footer"

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    logo: { src: "/placeholder.svg", alt: "Company Logo" },
    navigation: {
      main: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Accessibility", href: "#" },
        { name: "Partners", href: "#" },
      ],
      social: [
        { name: "Facebook", href: "#", icon: "facebook" },
        { name: "Instagram", href: "#", icon: "instagram" },
        { name: "Twitter", href: "#", icon: "twitter" },
        { name: "LinkedIn", href: "#", icon: "linkedin" },
      ],
    },
    copyright: `© ${new Date().getFullYear()} Your Company, Inc. All rights reserved.`,
  },
}

