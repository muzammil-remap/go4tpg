import { SectionContainer } from "@/components/ui/SectionContainer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { steEyebrow, steHeadline, stePillars } from "@/content/ste";

export function HowWeWork() {
  return (
    <SectionContainer id="ai-fluency" as="section" className="bg-tpg-navy" innerClassName="py-24">
      <EyebrowLabel className="text-center" color="blue-tint">
        {steEyebrow}
      </EyebrowLabel>
      <h2 className="mx-auto mt-4 mb-14 max-w-[760px] text-center font-serif text-[27px] leading-[1.15] font-medium tracking-[-0.01em] text-white sm:text-[32px] lg:text-[38px]">
        {steHeadline}
      </h2>

      <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-[50px]">
        {stePillars.map((pillar) => (
          <div key={pillar.letter} className="border-t border-white/20 pt-7">
            <div className="font-serif text-[56px] leading-none text-white">
              {pillar.letter}
              <span className="text-tpg-cta">.</span>
            </div>
            <div className="mt-[18px] mb-3 font-mono text-[12px] font-medium tracking-[0.15em] text-white">
              {pillar.label}
            </div>
            <p className="text-[15px] leading-[1.68] text-white/[0.68]">{pillar.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
