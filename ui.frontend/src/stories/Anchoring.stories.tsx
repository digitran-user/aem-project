import type { Meta, StoryObj } from "@storybook/react"
import { Anchoring } from "../components/Anchoring/Anchoring"

const meta: Meta<typeof Anchoring> = {
  title: "Components/Anchoring",
  component: Anchoring,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{  maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ width: "100%", marginBottom: "440px" }}>
          <Story />
        </div>
        <div style={{ width: "100%", paddingLeft: "40px" }}>
          <section id="section1" style={{ marginBottom: "140px" }}>
            <h2>Section 1: Introduction</h2>
            <p>This is the content for section 1. It provides an introduction to the topic.</p>
          </section>
          <section id="section2" style={{ marginBottom: "140px" }}>
            <h2>Section 2: Main Content</h2>
            <p>This is the content for section 2. It contains the main information about the topic.</p>
          </section>
          <section id="section3" style={{ marginBottom: "140px" }}>
            <h2>Section 3: Additional Information</h2>
            <p>This is the content for section 3. It provides additional details and examples.</p>
          </section>
          <section id="section4" style={{ marginBottom: "1s40px" }}>
            <h2>Section 4: Conclusion</h2>
            <p>This is the content for section 4. It summarizes the main points and concludes the topic.</p>
          </section>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Anchoring>

export const Default: Story = {
  args: {
    title: "Table of Contents",
    items: [
      { id: "section1", label: "Introduction" },
      { id: "section2", label: "Main Content" },
      { id: "section3", label: "Additional Information" },
      { id: "section4", label: "Conclusion" },
    ],
    smooth: true,
    offset: 20,
  },
}

