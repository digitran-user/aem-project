import React from "react"
import ReactDOM from "react-dom/client"
import { Navigation } from "./components/Navigation/Navigation"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Banner } from "./components/Banner/Banner"
import { BannerSlider } from "./components/BannerSlider/BannerSlider"
import { Carousel } from "./components/Carousel/Carousel"
import { ImageText } from "./components/ImageText/ImageText"
import { Card } from "./components/Card/Card"
import { Location } from "./components/Location/Location"
import { ContactForm } from "./components/ContactForm/ContactForm"

// Helper function to create web components from React components
function createWebComponent(ReactComponent: React.ComponentType<any>, tagName: string) {
  class WebComponent extends HTMLElement {
    private root: ReactDOM.Root | null = null
    private observer: MutationObserver | null = null

    connectedCallback() {
      const mountPoint = document.createElement("div")
      this.attachShadow({ mode: "open" }).appendChild(mountPoint)

      // Add Tailwind styles to shadow DOM
      const styleSheet = document.createElement("style")
      styleSheet.textContent = `@import url('/src/index.css')`
      this.shadowRoot?.appendChild(styleSheet)

      this.root = ReactDOM.createRoot(mountPoint)
      this.renderComponent()

      // Observe attribute changes
      this.observer = new MutationObserver(this.renderComponent.bind(this))
      this.observer.observe(this, { attributes: true })
    }

    disconnectedCallback() {
      this.observer?.disconnect()
      this.root?.unmount()
    }

    renderComponent() {
      if (!this.root) return

      let props = {}
      const aemData = this.getAttribute("aem-data")

      if (aemData) {
        try {
          props = JSON.parse(aemData)
        } catch (e) {
          console.error("Invalid JSON in aem-data attribute", e)
        }
      }

      this.root.render(
        <React.StrictMode>
          <ReactComponent {...props} />
        </React.StrictMode>,
      )
    }
  }

  customElements.define(tagName, WebComponent)
}

export function defineCustomElements() {
  createWebComponent(Navigation, "web-navigation")
  createWebComponent(Header, "web-header")
  createWebComponent(Footer, "web-footer")
  createWebComponent(Banner, "web-banner")
  createWebComponent(BannerSlider, "web-banner-slider")
  createWebComponent(Carousel, "web-carousel")
  createWebComponent(ImageText, "web-image-text")
  createWebComponent(Card, "web-card")
  createWebComponent(Location, "web-location")
  createWebComponent(ContactForm, "web-contact-form")
}

