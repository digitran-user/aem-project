import React from "react"

export type ColumnLayout =
  | "100"
  | "50-50"
  | "75-25"
  | "25-75"
  | "33-33-33"
  | "50-25-25"
  | "25-50-25"
  | "25-25-50"
  | "25-25-25-25"
  | "40-20-20-20"
  | "20-40-20-20"
  | "20-20-40-20"
  | "20-20-20-40"

export interface ColumnControllerProps {
  layout: ColumnLayout
  children: React.ReactNode
  gap?: number
  className?: string
  columnClassName?: string
}

export const ColumnController: React.FC<ColumnControllerProps> = ({
  layout = "100",
  children,
  gap = 16,
  className = "",
  columnClassName = "",
}) => {
  const childrenArray = React.Children.toArray(children)

  const getGridTemplateColumns = (): string => {
    switch (layout) {
      case "100":
        return "1fr"
      case "50-50":
        return "1fr 1fr"
      case "75-25":
        return "3fr 1fr"
      case "25-75":
        return "1fr 3fr"
      case "33-33-33":
        return "1fr 1fr 1fr"
      case "50-25-25":
        return "2fr 1fr 1fr"
      case "25-50-25":
        return "1fr 2fr 1fr"
      case "25-25-50":
        return "1fr 1fr 2fr"
      case "25-25-25-25":
        return "1fr 1fr 1fr 1fr"
      case "40-20-20-20":
        return "2fr 1fr 1fr 1fr"
      case "20-40-20-20":
        return "1fr 2fr 1fr 1fr"
      case "20-20-40-20":
        return "1fr 1fr 2fr 1fr"
      case "20-20-20-40":
        return "1fr 1fr 1fr 2fr"
      default:
        return "1fr"
    }
  }

  const getColumnCount = (): number => {
    return layout.split("-").length
  }

  const renderColumns = () => {
    const columnCount = getColumnCount()
    return childrenArray.slice(0, columnCount).map((child, index) => (
      <div key={index} className={`column ${columnClassName}`}>
        {child}
      </div>
    ))
  }

  return (
    <div
      className={`column-controller ${className}`}
      style={
        {
          display: "grid",
          gap: `${gap}px`,
          gridTemplateColumns: "1fr",
          "--desktop-grid": getGridTemplateColumns(),
        } as React.CSSProperties
      }
    >
      {renderColumns()}
      <style jsx>{`
        @media (min-width: 768px) {
          .column-controller {
            grid-template-columns: var(--desktop-grid);
          }
        }
      `}</style>
    </div>
  )
}

