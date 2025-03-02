import type { Meta, StoryObj } from "@storybook/react"
import { Location } from "../components/Location/Location"

const meta: Meta<typeof Location> = {
  title: "Components/Location",
  component: Location,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Location>

export const Default: Story = {
  args: {
    title: "Our Location",
    address: "123 Main Street, City, State 12345",
    phone: "(123) 456-7890",
    email: "info@example.com",
    hours: [
      { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
      { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1332899194916!2d-122.41941548468176!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1625687631587!5m2!1sen!2sus",
    showMap: true,
  },
}

