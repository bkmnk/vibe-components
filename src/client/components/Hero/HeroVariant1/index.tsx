import Image from "next/image";
import React from "react";
import { Button } from "@/client/atoms";
import { ArrowRight } from "@/client/icons";
import { SectionTextContent } from "@/client/molecules";
import HeroVariant1Img from "@/assets/images/hero-variant-1.png";

export const HeroVariant1 = () => {
  const preTitle = "Seu serviço, facilitado";
  const title = "Título envolvente que explica seu Micro-SaaS";
  const description =
    "Um texto de parágrafo que dará suporte ao título e explicará com mais detalhes qual problema você resolve para seus clientes.";
  const buttonCta = "Botão de CTA envolvente";
  const bottomText = "Texto extra para gerar confiança";
  const imgSource = HeroVariant1Img.src;

  const topComponent = <p className="font-bold text-sm">{preTitle}</p>;
  const bottomComponent = (
    <div className="flex flex-col items-center gap-2 py-3">
      <Button
        text={buttonCta}
        icon={<ArrowRight color={"#ffffff"} />}
        iconPosition="right"
        backgroundColor="#18181b"
        textColor="#ffffff"
      />
      <p className="text-xs text-[#71717A]">{bottomText}</p>
    </div>
  );

  const TextContentProps = {
    topComponent,
    title,
    description,
    bottomComponent,
  };
  return (
    <div className="flex flex-col items-center py-14 gap-12">
      <SectionTextContent variant="large" {...TextContentProps} />
      <Image
        className="w-full"
        src={imgSource}
        alt="A mock image for illustration only"
        width={1284}
        height={850}
      />
    </div>
  );
};
