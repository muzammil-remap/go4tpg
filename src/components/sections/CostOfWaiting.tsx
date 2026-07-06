import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import {
  costOfWaitingBody,
  costOfWaitingCtaLabel,
  costOfWaitingHeadline,
} from "@/content/costOfWaiting";

export function CostOfWaiting() {
  return (
    <SectionContainer
      id="contact"
      as="section"
      className="bg-tpg-cta"
      innerClassName="py-24 text-center"
    >
      <h2 className="mx-auto mb-[22px] max-w-[900px] text-[32px] leading-[1.02] font-extrabold tracking-[-0.02em] text-white uppercase sm:text-[42px] lg:text-[54px]">
        {costOfWaitingHeadline}
      </h2>
      <p className="mx-auto mb-[34px] max-w-[680px] text-[17px] leading-[1.6] text-white/[0.92]">
        {costOfWaitingBody}
      </p>
      <Button variant="white-on-cta" href="#top">
        {costOfWaitingCtaLabel}
      </Button>
    </SectionContainer>
  );
}
