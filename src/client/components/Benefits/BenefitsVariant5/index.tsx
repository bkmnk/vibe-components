import React from "react";
import Image from "next/image";
import { SectionTextContent } from "@/client/molecules";
import { ArrowRight } from "@/client/icons";
import { Button, Pill } from "@/client/atoms";
import MockImage1 from "@/assets/images/mock-image-1.png";

export const BenefitsVariant5 = () => {
  const pillText = "Beneficio de destaque";
  const title = "Descrição geral do seu negócio ou serviço";
  const description =
    "Um texto de parágrafo que explicará como o usuário se beneficiará com seu negócio.";
  const buttonCta = "Veja como isso funciona";

  const topComponent = (
    <Pill text={pillText} backgroundColor="#E4E4E7" textColor="#000000" />
  );
  const bottomComponent = (
    <Button
      text={buttonCta}
      icon={<ArrowRight color={"#71717A"} />}
      iconPosition="right"
      textColor="#71717A"
      borderColor="#D4D4D8"
    />
  );

  const TextContentProps = {
    topComponent,
    title,
    description,
    bottomComponent,
  };
  return (
    <div className="flex flex-row items-center py-14 gap-12">
      <SectionTextContent
        alignment="left"
        variant="medium"
        {...TextContentProps}
      />
      <Image
        src={MockImage1.src}
        width={580}
        height={600}
        alt="A mock image"
        className="border border-[#E5E5E5] rounded-3xl  object-cover w-2/4 md:h-[600px] sm:max-h-[40vh] lg:h-2/3  lg:max-h-[100vh]"
      />
    </div>
  );
};
