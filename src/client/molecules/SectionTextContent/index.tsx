import React from "react";

interface SectionTextContentProps {
  variant: "large" | "medium";
  alignment?: "left" | "center" | "right";
  topComponent: React.JSX.Element;
  title: string;
  description: string;
  bottomComponent?: React.JSX.Element;
}
export const SectionTextContent = ({
  variant,
  alignment = "center",
  topComponent,
  title,
  description,
  bottomComponent,
}: SectionTextContentProps) => {
  const alignmentClass = () => {
    switch (alignment) {
      case "left":
        return "items-start text-left";
      case "right":
        return "items-end text-right";
      case "center":
      default:
        return "items-center text-center";
    }
  };
  switch (variant) {
    case "medium":
      return (
        <div
          className={`flex flex-col ${alignmentClass()} gap-3 lg:w-2/4 md:w-4/5`}
        >
          {topComponent && topComponent}
          <h1 className="text-4xl font-bold leading-tight">{title}</h1>
          <p className="text-sm text-[#71717A] lg:w-4/6 md:w-5/6 tracking-wider">
            {description}
          </p>
          {bottomComponent && bottomComponent}
        </div>
      );
    case "large":
    default:
      return (
        <div className="flex flex-col items-center relative gap-8">
          <div
            className={`${alignmentClass()} flex flex-col gap-3 lg:w-7/12 md:w-11/12`}
          >
            {topComponent && topComponent}
            <h1 className="text-5xl font-bold leading-tight">{title}</h1>
            <p className="text-base text-[#71717A] w-8/12 tracking-wider">
              {description}
            </p>
            {bottomComponent && bottomComponent}
          </div>
        </div>
      );
  }
};
