import { defineCustomElements } from "./defineCustomElements"
import "./index.css"; // Add this to main.tsx
// Export all components
export * from "./components/Navigation/Navigation"
export * from "./components/Header/Header"
export * from "./components/Footer/Footer"
export * from "./components/Banner/Banner"
export * from "./components/BannerSlider/BannerSlider"
export * from "./components/Carousel/Carousel"
export * from "./components/ImageText/ImageText"
export * from "./components/Card/Card"
export * from "./components/Location/Location"
export * from "./components/ContactForm/ContactForm"
export * from "./components/Accordion/Accordion"
export * from "./components/Tabs/Tabs"
export * from "./components/Anchoring/Anchoring"
export * from "./components/MegaMenu/MegaMenu"
export * from "./components/LinkList/LinkList"
export * from "./components/ColumnController/ColumnController"

// Register all web components
defineCustomElements()

