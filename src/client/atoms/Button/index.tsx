import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.JSX.Element;
  iconPosition?: "left" | "right" | "top" | "bottom";
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
}
export const Button = ({
  text,
  icon,
  iconPosition,
  textColor = "#000000",
  backgroundColor,
  borderColor,
  ...props
}: ButtonProps) => {
  const buttonClass = () => {
    switch (iconPosition) {
      case "top":
        return "flex flex-col-reverse items-center";
      case "bottom":
        return "flex flex-col items-center";
      case "left":
        return "flex flex-row-reverse items-center";
      case "right":
      default:
        return "flex flex-row items-center";
    }
  };
  const backgroundClass = backgroundColor
    ? `bg-[${backgroundColor}]`
    : "bg-transparent";
  const borderClass = borderColor
    ? `border border-[${borderColor}]`
    : "border-transparent";
  return (
    <button
      className={`${buttonClass()} gap-1 ${backgroundClass} ${borderClass} rounded-lg py-4 px-8 justify-between`}
      {...props}
    >
      <span className={`text-[${textColor}] text-sm font-semibold`}>
        {text}
      </span>
      {icon}
    </button>
  );
};
