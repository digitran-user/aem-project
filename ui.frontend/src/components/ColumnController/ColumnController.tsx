import React, { useEffect } from "react";

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
  | "20-20-20-40";

export interface ColumnControllerProps {
  layout: ColumnLayout;
  children?: React.ReactNode; // Use children prop for React
  gap?: number;
  className?: string;
  columnClassName?: string;
  container?: HTMLElement; // Optional for web component usage
}

export const ColumnController: React.FC<ColumnControllerProps> = ({
  layout = "100",
  children,
  gap = 16,
  className = "",
  columnClassName = "",
  container,
}) => {
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    console.log("Children count:", childrenArray.length);
  }, [childrenArray]);

  const getGridClass = (): string => {
    switch (layout) {
      case "100":
        return "grid-cols-1";
      case "50-50":
        return "grid-cols-1 md:grid-cols-2";
      case "75-25":
        return "grid-cols-1 md:grid-cols-[3fr_1fr]";
      case "25-75":
        return "grid-cols-1 md:grid-cols-[1fr_3fr]";
      case "33-33-33":
        return "grid-cols-1 md:grid-cols-3";
      case "50-25-25":
        return "grid-cols-1 md:grid-cols-[2fr_1fr_1fr]";
      case "25-50-25":
        return "grid-cols-1 md:grid-cols-[1fr_2fr_1fr]";
      case "25-25-50":
        return "grid-cols-1 md:grid-cols-[1fr_1fr_2fr]";
      case "25-25-25-25":
        return "grid-cols-1 md:grid-cols-4";
      case "40-20-20-20":
        return "grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr]";
      case "20-40-20-20":
        return "grid-cols-1 md:grid-cols-[1fr_2fr_1fr_1fr]";
      case "20-20-40-20":
        return "grid-cols-1 md:grid-cols-[1fr_1fr_2fr_1fr]";
      case "20-20-20-40":
        return "grid-cols-1 md:grid-cols-[1fr_1fr_1fr_2fr]";
      default:
        return "grid-cols-1";
    }
  };

  const getColumnCount = (): number => {
    return layout.split("-").length;
  };

  const renderColumns = () => {
    const columnCount = getColumnCount();
    return childrenArray.slice(0, columnCount).map((child, index) => (
      <div key={index} className={`column ${columnClassName}`}>
        {child}
      </div>
    ));
  };

  // If container is provided (web component mode), use DOM manipulation
  if (container) {
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (container && wrapperRef.current) {
        const childrenNodes = Array.from(container.children).filter(
          (node) => node !== wrapperRef.current?.parentElement
        );
        const columnCount = getColumnCount();
        const nodesToMove = childrenNodes.slice(0, columnCount);
        const nodesToRemove = childrenNodes.slice(columnCount);

        nodesToMove.forEach((node, index) => {
          const columnWrapper = document.createElement("div");
          columnWrapper.className = `column ${columnClassName}`;
          columnWrapper.appendChild(node);
          wrapperRef.current!.appendChild(columnWrapper);
        });

        nodesToRemove.forEach((node) => node.remove());
      }
    }, [container, columnClassName, layout]);

    return (
      <div
        ref={wrapperRef}
        className={`grid ${getGridClass()} ${className}`}
        style={{ gap: `${gap}px` }}
      />
    );
  }

  // Otherwise, use React children (Storybook mode)
  return (
    <div className={`grid ${getGridClass()} ${className}`} style={{ gap: `${gap}px` }}>
      {renderColumns()}
    </div>
  );
};