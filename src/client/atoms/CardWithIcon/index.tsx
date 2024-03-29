import React from "react";

interface CardWithIconProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
  buttonCta: string;
  cardsPerRow?: number;
}
export const CardWithIcon = ({
  icon,
  title,
  description,
  buttonCta,
  cardsPerRow = 0,
}: CardWithIconProps) => {
  const width = `${Math.round(100 / cardsPerRow - 1)}%`;
  const widthClass = () => (cardsPerRow ? `lg:w-[${width}]` : "lg:w-[32%]");
  return (
    <div
      className={`flex flex-col items-center justify-between text-center gap-5 px-5 py-12 bg-[#ffffff] rounded-3xl shadow-sm ${widthClass()} md:w-5/12`}
    >
      {icon && icon}
      <div className="flex flex-col items-center gap-1 w-3/4">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-base w-4/5 text-[#71717A]">{description}</p>
      </div>
      <button className="text-[#71717A] border border-[#D4D4D8] rounded-lg py-2 px-3 font-bold">
        {buttonCta}
      </button>
    </div>
  );
};
