import React from "react";

interface PillProps {
  text: string;
  backgroundColor: string;
  textColor: string;
}
export const Pill = ({ text, backgroundColor, textColor }: PillProps) => {
  return (
    <span
      className={`text-sm font-bold rounded-full bg-[${backgroundColor}] text-[${textColor}] py-2 px-4`}
    >
      {text}
    </span>
  );
};
