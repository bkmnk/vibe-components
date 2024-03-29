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
  backgroundColor = "transparent",
  borderColor = "transparent",
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

  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className={`${buttonClass()} gap-1 rounded-lg py-4 px-8 justify-between`}
      {...props}
    >
      <span className="text-sm font-semibold" style={{ color: textColor }}>
        {text}
      </span>
      {icon}
    </button>
  );
};
