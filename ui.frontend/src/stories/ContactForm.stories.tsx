import type { Meta, StoryObj } from "@storybook/react"
import { ContactForm } from "../components/ContactForm/ContactForm"

const meta: Meta<typeof ContactForm> = {
  title: "Components/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ContactForm>

export const Default: Story = {
  args: {
    title: "Contact Us",
    description:
      "Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.",
    fields: {
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    },
    submitLabel: "Send Message",
    successMessage: "Thank you! Your message has been sent successfully.",
    errorMessage: "There was an error sending your message. Please try again.",
  },
}

