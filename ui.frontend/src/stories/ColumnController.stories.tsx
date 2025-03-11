import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ColumnController, ColumnLayout } from "../components/ColumnController/ColumnController"; // Adjust path

// Define the props type for the story
interface ColumnControllerStoryProps {
  layout: ColumnLayout;
  gap: number;
  className: string;
  columnClassName: string;
  childrenCount: number;
}

export default {
  title: "Components/ColumnController",
  component: ColumnController,
  argTypes: {
    layout: {
      control: { type: "select" },
      options: [
        "100",
        "50-50",
        "75-25",
        "25-75",
        "33-33-33",
        "50-25-25",
        "25-50-25",
        "25-25-50",
        "25-25-25-25",
        "40-20-20-20",
        "20-40-20-20",
        "20-20-40-20",
        "20-20-20-40",
      ] as ColumnLayout[],
      description: "Grid layout configuration",
    },
    gap: {
      control: { type: "number" },
      description: "Gap between columns in pixels",
    },
    className: {
      control: { type: "text" },
      description: "Additional class for the grid wrapper",
    },
    columnClassName: {
      control: { type: "text" },
      description: "Additional class for column wrappers",
    },
    childrenCount: {
      control: { type: "number", min: 1, max: 4, step: 1 },
      description: "Number of demo children to render",
    },
  },
} as Meta<typeof ColumnController>;

// Array of Tailwind background colors
const bgColors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-indigo-200",
  "bg-teal-200",
];

// Template function with random background colors
const Template: StoryFn<ColumnControllerStoryProps> = ({
  layout,
  gap,
  className,
  columnClassName,
  childrenCount,
}) => {
  const children = Array.from({ length: childrenCount }, (_, i) => {
    // Pick a random color from bgColors
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    return (
      <div key={i} className={`demo-column ${randomColor} p-4`}>
        Column {i + 1}
      </div>
    );
  });

  return (
    <ColumnController
      layout={layout}
      gap={gap}
      className={className}
      columnClassName={columnClassName}
    >
      {children}
    </ColumnController>
  );
};

export const Default = Template.bind({});
Default.args = {
  layout: "50-50",
  gap: 16,
  className: "",
  columnClassName: "",
  childrenCount: 2,
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  layout: "33-33-33",
  gap: 16,
  className: "",
  columnClassName: "",
  childrenCount: 3,
};

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  layout: "100",
  gap: 16,
  className: "",
  columnClassName: "",
  childrenCount: 1,
};

export const WithExtras = Template.bind({});
WithExtras.args = {
  layout: "50-50",
  gap: 16,
  className: "",
  columnClassName: "",
  childrenCount: 4,
};