import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "../components/Header/Header"
import { Banner } from "../components/Banner/Banner"
import { ColumnController, ColumnLayout } from "../components/ColumnController/ColumnController"; // Adjust path
import { Anchoring } from "../components/Anchoring/Anchoring"
import { LinkList } from "../components/LinkList/LinkList"
import { Accordion } from "../components/Accordion/Accordion"
import { Tabs } from "../components/Tabs/Tabs"
import { Card } from "../components/Card/Card"
import { ImageText } from "../components/ImageText/ImageText"
import { Footer } from "../components/Footer/Footer"
import { Carousel } from "../components/Carousel/Carousel"

const meta: Meta = {
  title: "Pages/Home",
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj

// Define the props type for the story
interface ColumnControllerStoryProps {
  layout: ColumnLayout;
  gap: number;
  className: string;
  columnClassName: string;
  childrenCount: number;
}


// Sample data for the components
const navigationItems = [
  {
    id: "1",
    label: "Products",
    url: "/products",
    children: [
      {
        id: "1-1",
        label: "Category 1",
        url: "/products/category-1",
        children: [
          { id: "1-1-1", label: "Subcategory 1", url: "/products/category-1/subcategory-1" },
          { id: "1-1-2", label: "Subcategory 2", url: "/products/category-1/subcategory-2" },
        ],
      },
      { id: "1-2", label: "Category 2", url: "/products/category-2" },
      { id: "1-3", label: "Category 3", url: "/products/category-3" },
    ],
    featured: [
      {
        title: "New Release",
        description: "Check out our latest product",
        image: "/placeholder.svg?height=48&width=48",
        link: "/products/new-release",
      },
      {
        title: "Best Seller",
        description: "Our most popular item",
        image: "/placeholder.svg?height=48&width=48",
        link: "/products/best-seller",
      },
    ],
  },
  {
    id: "2",
    label: "Services",
    url: "/services",
    children: [
      { id: "2-1", label: "Consulting", url: "/services/consulting" },
      { id: "2-2", label: "Development", url: "/services/development" },
      { id: "2-3", label: "Support", url: "/services/support" },
    ],
  },
  { id: "3", label: "About", url: "/about" },
  { id: "4", label: "Contact", url: "/contact" },
]

const anchorItems = [
  { id: "hero-section", label: "Home" },
  { id: "features-section", label: "Features" },
  { id: "products-section", label: "Products" },
  { id: "faq-section", label: "FAQ" },
  { id: "contact-section", label: "Contact" },
]

const linkListItems = [
  {
    id: "1",
    label: "Getting Started Guide",
    url: "/getting-started",
    description: "Learn how to get started with our platform",
  },
  {
    id: "2",
    label: "Documentation",
    url: "/docs",
  },
  {
    id: "3",
    label: "API Reference",
    url: "/api",
    description: "Explore our API endpoints and functionality",
  },
  {
    id: "4",
    label: "Community Forums",
    url: "/community",
  },
]

const accordionItems = [
  {
    id: "1",
    title: "What services do you offer?",
    content:
      "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs.",
  },
  {
    id: "2",
    title: "How much does it cost?",
    content:
      "Our pricing varies depending on the scope and requirements of your project. We offer competitive rates and flexible pricing models to accommodate different budgets.",
  },
  {
    id: "3",
    title: "How long does a typical project take?",
    content:
      "Project timelines depend on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take several months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: "4",
    title: "Do you offer ongoing support?",
    content:
      "Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally after launch.",
  },
]

const tabItems = [
  {
    id: "1",
    title: "Web Development",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">Web Development Services</h3>
        <p className="text-gray-600">
          Our web development team creates responsive, high-performance websites and web applications using the latest
          technologies and best practices.
        </p>
      </div>
    ),
  },
  {
    id: "2",
    title: "Mobile Apps",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">Mobile App Development</h3>
        <p className="text-gray-600">
          We build native and cross-platform mobile applications for iOS and Android that deliver exceptional user
          experiences.
        </p>
      </div>
    ),
  },
  {
    id: "3",
    title: "UI/UX Design",
    content: (
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">UI/UX Design Services</h3>
        <p className="text-gray-600">
          Our design team creates intuitive, beautiful interfaces that enhance user engagement and satisfaction while
          achieving your business goals.
        </p>
      </div>
    ),
  },
]

const carouselItems = [
  {
    id: "1",
    image: "/placeholder.svg?height=300&width=400",
    title: "Product 1",
    description: "Description for product 1",
    link: "#",
  },
  {
    id: "2",
    image: "/placeholder.svg?height=300&width=400",
    title: "Product 2",
    description: "Description for product 2",
    link: "#",
  },
  {
    id: "3",
    image: "/placeholder.svg?height=300&width=400",
    title: "Product 3",
    description: "Description for product 3",
    link: "#",
  },
  {
    id: "4",
    image: "/placeholder.svg?height=300&width=400",
    title: "Product 4",
    description: "Description for product 4",
    link: "#",
  },
]

export const HomePage: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col">
      {/* Header - Full width with content constrained */}
      <div className="w-full bg-white shadow-md">
        <div className="max-w-[1280px] mx-auto">
          <Header
            logo={{
              src: "/placeholder.svg?height=32&width=120",
              alt: "Company Logo",
              url: "/",
            }}
            navigationItems={navigationItems}
            showSearch={true}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section - Full width */}
        <section id="hero-section" className="mb-32">
          <Banner
            title="Welcome to Our Platform"
            description="Discover our comprehensive suite of tools and services designed to help your business grow."
            backgroundImage="/placeholder.svg?height=600&width=1600"
            cta={{ label: "Get Started", url: "#" }}
            alignment="center"
            overlay={true}
            overlayOpacity={0.6}
            textColor="white"
          />
        </section>

        {/* Content with Sidebar - Constrained width */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
        </div>
      </main>

      {/* Footer - Full width with content constrained */}
      <div className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto">
          <Footer
            logo={{ src: "/placeholder.svg?height=32&width=120", alt: "Company Logo" }}
            navigation={{
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
            }}
            copyright={`© ${new Date().getFullYear()} Your Company, Inc. All rights reserved.`}
          />
        </div>
      </div>
    </div>
  ),
}

