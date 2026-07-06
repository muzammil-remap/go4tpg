import { SectionContainer } from "@/components/ui/SectionContainer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import {
  afterItems,
  afterLabel,
  beforeAfterDisclaimer,
  beforeAfterEyebrow,
  beforeAfterHeadline,
  beforeAfterIntro,
  beforeItems,
  beforeLabel,
} from "@/content/beforeAfter";

export function BeforeAfter() {
  return (
    <SectionContainer as="section" innerClassName="py-24">
      <EyebrowLabel className="text-center" color="blue">
        {beforeAfterEyebrow}
      </EyebrowLabel>
      <h2 className="text-tpg-navy mx-auto mt-4 max-w-[760px] text-center font-serif text-[27px] leading-[1.15] font-medium tracking-[-0.01em] sm:text-[32px] lg:text-[38px]">
        {beforeAfterHeadline}
      </h2>
      <p className="text-tpg-subtle mx-auto mt-3 max-w-[620px] text-center text-[15px] leading-[1.55]">
        {beforeAfterIntro}
      </p>

      <div className="mx-auto mt-12 grid max-w-[1040px] grid-cols-1 items-center gap-[22px] sm:grid-cols-[1fr_auto_1fr]">
        <div className="border-tpg-border rounded-xl border bg-[#FBFCFD] p-[34px]">
          <EyebrowLabel className="mb-[22px]" color="subtle">
            {beforeLabel}
          </EyebrowLabel>
          <ul className="flex flex-col gap-4">
            {beforeItems.map((item) => (
              <li
                key={item}
                className="text-tpg-muted-soft flex gap-[13px] text-[15px] leading-[1.5]"
              >
                <span className="flex-none text-[#C4CDD7]">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="text-tpg-blue rotate-90 text-center font-serif text-[34px] leading-none sm:rotate-0"
        >
          →
        </div>

        <div className="border-tpg-blue bg-tpg-bg-tint-blue rounded-xl border p-[34px] shadow-[0_18px_44px_-26px_rgba(0,136,204,0.5)]">
          <EyebrowLabel className="mb-[22px]" color="blue">
            {afterLabel}
          </EyebrowLabel>
          <ul className="flex flex-col gap-4">
            {afterItems.map((item) => (
              <li key={item} className="text-tpg-body flex gap-[13px] text-[15px] leading-[1.5]">
                <span className="text-tpg-cta flex-none font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-tpg-subtle mx-auto mt-7 max-w-[680px] text-center font-mono text-[11px] leading-[1.7] tracking-[0.3px]">
        {beforeAfterDisclaimer}
      </p>
    </SectionContainer>
  );
}
