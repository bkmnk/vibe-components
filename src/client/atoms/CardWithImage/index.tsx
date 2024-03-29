import React from "react";
import Image from "next/image";

interface CardWithImageProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonCta: string;
  cardsPerRow?: number;
}
export const CardWithImage = ({
  imageSrc,
  title,
  description,
  buttonCta,
  cardsPerRow = 0,
}: CardWithImageProps) => {
  const width = `${Math.round(100 / cardsPerRow - 1)}%`;
  const widthClass = cardsPerRow ? `w-[${width}]` : "";
  return (
    <div
      className={`flex flex-col items-center text-center gap-8 lg:${widthClass} md:w-5/12`}
    >
      <Image
        src={imageSrc}
        width={380}
        height={300}
        alt="A mock image"
        className="h-72 object-cover rounded-2xl border-solid border border-[#E5E5E5]"
      />
      <div className="flex flex-col items-center gap-1 lg:w-3/4 md:w-11/12">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-base w-4/5 text-[#71717A]">{description}</p>
      </div>
      <button className="text-[#71717A] border border-[#D4D4D8] rounded-lg py-2 px-3 font-bold">
        {buttonCta}
      </button>
    </div>
  );
};
