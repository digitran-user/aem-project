import React from "react"

export type ColumnLayout =
  | "100" // 1 column: 100%
  | "50-50" // 2 columns: 50% 50%
  | "75-25"
  | "25-75" // 2 columns: 75% 25% or 25% 75%
  | "33-33-33" // 3 columns: 33.3% 33.3% 33.3%
  | "50-25-25"
  | "25-50-25"
  | "25-25-50" // 3 columns with different distributions
  | "25-25-25-25" // 4 columns: 25% 25% 25% 25%
  | "40-20-20-20"
  | "20-40-20-20"
  | "20-20-40-20"
  | "20-20-20-40" // 4 columns with different distributions

export interface ColumnControllerProps {
  layout: ColumnLayout
  children?: React.ReactNode
  gap?: number
  className?: string
  columnClassName?: string
}

export const ColumnController: React.FC<ColumnControllerProps> = ({
  layout = "100",
  children = null,
  gap = 16,
  className = "",
  columnClassName = "",
}) => {
  // Convert children to array to handle them individually
  const childrenArray = React.Children.toArray(children)

  // Get grid template columns based on layout
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

  // Get the number of columns based on the layout
  const getColumnCount = (): number => {
    return layout.split("-").length
  }

  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: getGridTemplateColumns(),
        gap: `${gap}px`,
      }}
    >
      {childrenArray.slice(0, getColumnCount()).map((child, index) => (
        <div key={index} className={`column ${columnClassName}`}>
          {child}
        </div>
      ))}
    </div>
  )
}

