import React from "react";
import { CardWithIcon, Pill } from "@/client/atoms";
import { SectionTextContent } from "@/client/molecules";
import { ChatBubbles, Fingerprint, PieChart } from "@/client/icons";

export const BenefitsVariant3 = () => {
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
      icon: <Fingerprint />,
      title: "Beneficio 1",
      description:
        "Um texto de parágrafo que explicará como o usuário se beneficiará com seu negócio.",
      buttonCta: "Saiba mais",
    },
    {
      icon: <PieChart />,
      title: "Beneficio 2",
      description:
        "Um texto de parágrafo que explicará como o usuário se beneficiará com seu negócio.",
      buttonCta: "Saiba mais",
    },
    {
      icon: <ChatBubbles />,
      title: "Beneficio 3",
      description:
        "Um texto de parágrafo que explicará como o usuário se beneficiará com seu negócio.",
      buttonCta: "Saiba mais",
    },
  ];
  return (
    <div className="flex flex-col items-center py-14 gap-12">
      <SectionTextContent variant="medium" {...TextContentProps} />
      <div className="flex flex-row flex-wrap	lg:justify-between md:justify-around gap-5">
        {cards.map((card) => (
          <CardWithIcon key={card.title} cardsPerRow={3} {...card} />
        ))}
      </div>
    </div>
  );
};
