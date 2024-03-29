import React from "react";

interface PillProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}
export const Pill = ({ text, backgroundColor, textColor }: PillProps) => {
  return (
    <span
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      className="text-sm font-bold rounded-full py-2 px-4"
    >
      {text}
    </span>
  );
};
