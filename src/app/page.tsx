import {
  HeroVariant1,
  BenefitsVariant1,
  BenefitsVariant3,
  BenefitsVariant5,
} from "@/client/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 lg:px-28 md:px-20 px-16">
      <HeroVariant1 />
      <BenefitsVariant1 />
      <BenefitsVariant3 />
      <BenefitsVariant5 />
    </main>
  );
}
