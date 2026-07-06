import { SectionContainer } from "@/components/ui/SectionContainer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import {
  openingQuestionEyebrow,
  openingQuestionQuote,
  openingQuestionSupport,
} from "@/content/openingQuestion";

export function OpeningQuestion() {
  return (
    <SectionContainer
      id="about"
      as="section"
      className="bg-tpg-bg-tint-blue"
      innerClassName="py-24 text-center"
    >
      <EyebrowLabel className="mb-6 text-center">{openingQuestionEyebrow}</EyebrowLabel>
      <p className="text-tpg-navy mx-auto max-w-[860px] font-serif text-[24px] leading-[1.36] tracking-[-0.01em] italic sm:text-[30px] lg:text-[36px]">
        {openingQuestionQuote}
      </p>
      <p className="text-tpg-muted-soft mx-auto mt-6 max-w-[560px] text-base leading-[1.6]">
        {openingQuestionSupport}
      </p>
    </SectionContainer>
  );
}
