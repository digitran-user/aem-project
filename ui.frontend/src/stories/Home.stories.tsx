import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "../components/Header/Header"
import { Banner } from "../components/Banner/Banner"
import { ColumnController } from "../components/ColumnController/ColumnController"
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
          <ColumnController layout="75-25" gap={32}>
            {/* Main Content Column */}
            <div>
              {/* Features Section */}
              <section id="features-section" className="mb-32">
                <h2 className="text-3xl font-bold mb-8">Our Features</h2>
                <ColumnController layout="33-33-33" gap={24}>
                  <Card
                    title="Easy Integration"
                    description="Seamlessly integrate with your existing systems and workflows."
                    image={{ src: "/placeholder.svg?height=200&width=300", alt: "Integration" }}
                    cta={{ label: "Learn More", url: "#" }}
                  />
                  <Card
                    title="Powerful Analytics"
                    description="Gain valuable insights with our comprehensive analytics tools."
                    image={{ src: "/placeholder.svg?height=200&width=300", alt: "Analytics" }}
                    cta={{ label: "Learn More", url: "#" }}
                  />
                  <Card
                    title="Secure Platform"
                    description="Rest easy knowing your data is protected by enterprise-grade security."
                    image={{ src: "/placeholder.svg?height=200&width=300", alt: "Security" }}
                    cta={{ label: "Learn More", url: "#" }}
                  />
                </ColumnController>
              </section>

              {/* Products Section */}
              <section id="products-section" className="mb-32">
                <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
                <Carousel
                  items={carouselItems}
                  autoPlay={true}
                  interval={5000}
                  showDots={true}
                  showArrows={true}
                  slidesToShow={3}
                />
              </section>

              {/* Image Text Section */}
              <section className="mb-32">
                <ImageText
                  title="Designed for Performance"
                  content="Our platform is built from the ground up with performance in mind. Experience lightning-fast load times and responsive interfaces that make your work more efficient."
                  image={{ src: "/placeholder.svg?height=400&width=600", alt: "Performance" }}
                  cta={{ label: "Discover More", url: "#" }}
                  imagePosition="right"
                />
              </section>

              {/* Tabs Section */}
              <section className="mb-32">
                <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <Tabs items={tabItems} defaultActiveTab="1" />
              </section>

              {/* FAQ Section */}
              <section id="faq-section" className="mb-32">
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <Accordion items={accordionItems} allowMultiple={false} />
              </section>

              {/* Contact Section */}
              <section id="contact-section" className="mb-32">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <ColumnController layout="50-50" gap={32}>
                  <Card
                    title="Contact Us"
                    description="Have questions? Our team is here to help. Reach out to us for assistance with any aspect of our platform."
                    cta={{ label: "Contact Support", url: "#" }}
                    variant="minimal"
                  />
                  <Card
                    title="Schedule a Demo"
                    description="See our platform in action. Schedule a personalized demo with one of our product specialists."
                    cta={{ label: "Book Demo", url: "#" }}
                    variant="minimal"
                  />
                </ColumnController>
              </section>
            </div>

            {/* Sidebar Column */}
            <div>
              <div className="sticky top-8">
                <Anchoring title="On This Page" items={anchorItems} smooth={true} offset={100} />

                <div className="mt-8">
                  <LinkList title="Quick Links" items={linkListItems} showArrows={true} />
                </div>
              </div>
            </div>
          </ColumnController>
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

