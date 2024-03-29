import React from "react";
import { CardWithImage, Pill } from "@/client/atoms";
import { SectionTextContent } from "@/client/molecules";
import MockImage1 from "@/assets/images/mock-image-1.png";
import MockImage2 from "@/assets/images/mock-image-2.png";
import MockImage3 from "@/assets/images/mock-image-3.png";

export const BenefitsVariant1 = () => {
  const pillText = "Benefícios";
  const topComponent = (
    <Pill text={pillText} backgroundColor="#E4E4E7" textColor="#000000" />
  );
  const title = "Descrição geral do seu negócio ou serviço";
  const description =
    "Um texto de parágrafo que apoiará o título e explicará com mais detalhes como você pode ajudar seus clientes.";
  const TextContentProps = {
    topComponent,
    title,
    description,
  };

  const cards = [
    {
      imageSrc: MockImage1.src,
      title: "Beneficio 1",
      description:
        "Um texto de parágrafo que explicará como o usuário se beneficiará com seu negócio.",
      buttonCta: "Saiba mais",
    },
    {
      imageSrc: MockImage2.src,
      title: "Beneficio 2",
      description:
        "Um texto de parágrafo que explicará como o usuário se beneficiará com seu negócio.",
      buttonCta: "Saiba mais",
    },
    {
      imageSrc: MockImage3.src,
      title: "Beneficio 3",
      description:
        "Um texto de parágrafo que explicará como o usuário se beneficiará com seu negócio.",
      buttonCta: "Saiba mais",
    },
  ];
  return (
    <div className="flex flex-col items-center py-14 gap-12">
      <SectionTextContent variant="medium" {...TextContentProps} />
      <div className="flex flex-row flex-wrap	lg:justify-between md:justify-around lg:gap-2 md:gap-10">
        {cards.map((card) => (
          <CardWithImage cardsPerRow={3} key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};
