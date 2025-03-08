import React from "react";
import ReactDOM from "react-dom/client";
import { Navigation } from "./components/Navigation/Navigation";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { BannerSlider } from "./components/BannerSlider/BannerSlider";
import { Carousel } from "./components/Carousel/Carousel";
import { ImageText } from "./components/ImageText/ImageText";
import { Card } from "./components/Card/Card";
import { Location } from "./components/Location/Location";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Accordion } from "./components/Accordion/Accordion"
import { Tabs } from "./components/Tabs/Tabs"
import { Anchoring } from "./components/Anchoring/Anchoring"
import { MegaMenu } from "./components/MegaMenu/MegaMenu"
import { ColumnController } from "./components/ColumnController/ColumnController"
// Helper function to create web components from React components
function createWebComponent(ReactComponent: React.ComponentType<any>, tagName: string) {
  class WebComponent extends HTMLElement {
    private root: ReactDOM.Root | null = null;

    connectedCallback() {
      // Create a mount point (div) and append it directly to the custom element
      const mountPoint = document.createElement("div");
      this.appendChild(mountPoint); // Append to light DOM instead of shadow DOM

      // Initialize React root
      this.root = ReactDOM.createRoot(mountPoint);
      this.render();

      // Observe attribute changes
      const observer = new MutationObserver(() => this.render());
      observer.observe(this, { attributes: true });
    }

    render() {
      if (!this.root) return;

      let props = {};
      const aemData = this.getAttribute("aem-data");

      if (aemData) {
        try {
          props = JSON.parse(aemData);
        } catch (e) {
          console.error(`Invalid JSON in aem-data attribute for ${tagName}`, e);
        }
      }

      this.root.render(
        <React.StrictMode>
          <ReactComponent {...props} />
        </React.StrictMode>
      );
    }

    // Optional: Clean up when the element is removed
    disconnectedCallback() {
      if (this.root) {
        this.root.unmount();
      }
    }
  }

  customElements.define(tagName, WebComponent);
}

export function defineCustomElements() {
  try {
    createWebComponent(Navigation, "web-navigation");
    createWebComponent(Header, "web-header");
    createWebComponent(Footer, "web-footer");
    createWebComponent(Banner, "web-banner");
    createWebComponent(BannerSlider, "web-banner-slider");
    createWebComponent(Carousel, "web-carousel");
    createWebComponent(ImageText, "web-image-text");
    createWebComponent(Card, "web-card");
    createWebComponent(Location, "web-location");
    createWebComponent(ContactForm, "web-contact-form");
    createWebComponent(Accordion, "web-accordion");
    createWebComponent(Tabs, "web-tabs");
    createWebComponent(Anchoring, "web-Anchoring");
    createWebComponent(MegaMenu, "web-mega-menu");
    createWebComponent(ColumnController, "web-column-controller")
    console.log("All web components defined successfully");
  } catch (error) {
    console.error("Error defining web components:", error);
  }
}