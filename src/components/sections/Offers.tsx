import { SectionContainer } from "@/components/ui/SectionContainer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { offerFormats, offersEyebrow, offersHeadline, offersIntro } from "@/content/offers";
import type { OfferCard, OfferFormat } from "@/content/offers";

const accentTextClass: Record<OfferFormat["accent"], string> = {
  blue: "text-tpg-blue",
  navy: "text-tpg-navy",
  cta: "text-tpg-cta",
};

const accentBgClass: Record<OfferFormat["accent"], string> = {
  blue: "bg-tpg-blue",
  navy: "bg-tpg-navy",
  cta: "bg-tpg-cta",
};

const accentBorderTopClass: Record<OfferFormat["accent"], string> = {
  blue: "border-t-tpg-blue",
  navy: "border-t-tpg-navy",
  cta: "border-t-tpg-cta",
};

const accentButtonVariant: Record<
  OfferFormat["accent"],
  "outline-blue" | "outline-navy" | "outline-cta"
> = {
  blue: "outline-blue",
  navy: "outline-navy",
  cta: "outline-cta",
};

function OfferCardView({ card, format }: { card: OfferCard; format: OfferFormat }) {
  if (card.flagship) {
    return (
      <div className="border-tpg-navy bg-tpg-navy relative flex flex-col gap-3 rounded-[9px] border-[1.5px] px-[26px] py-[28px] shadow-[0_20px_48px_-26px_rgba(15,44,76,0.7)]">
        <span className="bg-tpg-cta absolute -top-[11px] left-[26px] rounded-full px-[11px] py-[5px] font-mono text-[10px] font-medium tracking-[1.5px] text-white">
          FLAGSHIP
        </span>
        <div className="text-tpg-blue-tint font-mono text-[10px] font-medium tracking-[1.5px]">
          {card.kicker}
        </div>
        <div className="font-serif text-[21px] leading-[1.2] text-white">{card.title}</div>
        <div className="text-[25px] font-bold text-white">{card.price}</div>
        <p className="text-[13.5px] leading-[1.58] text-white/[0.72]">{card.description}</p>
        {card.highlight ? (
          <p className="text-tpg-blue-tint flex-1 font-serif text-[13.5px] leading-[1.5] italic">
            {card.highlight}
          </p>
        ) : null}
        <Button variant="cta" href="#contact" className="mt-1 justify-center py-[12px] text-[13px]">
          {card.ctaLabel}
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border-tpg-border-strong flex flex-col gap-3 rounded-[9px] border bg-white px-[26px] py-[28px]",
        "border-t-[3px]",
        accentBorderTopClass[format.accent],
      )}
    >
      <div
        className={cn(
          "font-mono text-[10px] font-medium tracking-[1.5px]",
          accentTextClass[format.accent],
        )}
      >
        {card.kicker}
      </div>
      <div className="text-tpg-navy font-serif text-[21px] leading-[1.2]">{card.title}</div>
      <div className={cn("text-[25px] font-bold", accentTextClass[format.accent])}>
        {card.price}
        {card.priceSuffix ? (
          <span className="text-tpg-subtle text-sm font-semibold">{card.priceSuffix}</span>
        ) : null}
      </div>
      <p className="text-tpg-muted-soft flex-1 text-[13.5px] leading-[1.58]">{card.description}</p>
      <Button
        variant={accentButtonVariant[format.accent]}
        href="#contact"
        className="justify-center py-[11px] text-[13px]"
      >
        {card.ctaLabel}
      </Button>
    </div>
  );
}

function OfferFormatRow({ format }: { format: OfferFormat }) {
  return (
    <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-start gap-11 md:grid-cols-[300px_1fr]">
      <div className="md:sticky md:top-6">
        <div className="flex items-baseline gap-3">
          <span
            className={cn("font-serif text-[40px] leading-none", accentTextClass[format.accent])}
          >
            {format.number}
          </span>
          <span className={cn("h-[2px] w-[34px] self-center", accentBgClass[format.accent])} />
        </div>
        <div className="text-tpg-navy mt-[14px] mb-[10px] font-serif text-[25px] leading-[1.2]">
          {format.title}
        </div>
        <p className="text-tpg-muted-soft text-sm leading-[1.6]">{format.description}</p>
        {format.badge ? (
          <div className="text-tpg-navy mt-[14px] inline-flex items-center gap-2 rounded-full bg-[#EAF0F6] px-3 py-[6px] font-mono text-[10px] font-medium tracking-[1px]">
            <span className="bg-tpg-cta h-[6px] w-[6px] rounded-full" />
            {format.badge}
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
        {format.cards.map((card) => (
          <OfferCardView key={card.title} card={card} format={format} />
        ))}
      </div>
    </div>
  );
}

export function Offers() {
  return (
    <SectionContainer id="offers" as="section" innerClassName="py-24 pb-[100px]">
      <EyebrowLabel className="text-center" color="blue">
        {offersEyebrow}
      </EyebrowLabel>
      <h2 className="text-tpg-navy mx-auto mt-4 mb-[10px] text-center font-serif text-[27px] leading-[1.15] font-medium tracking-[-0.01em] sm:text-[32px] lg:text-[38px]">
        {offersHeadline}
      </h2>
      <p className="text-tpg-muted-soft mx-auto mb-[60px] max-w-[620px] text-center text-base leading-[1.55]">
        {offersIntro}
      </p>

      <div className="flex flex-col gap-14">
        {offerFormats.map((format) => (
          <OfferFormatRow key={format.number} format={format} />
        ))}
      </div>
    </SectionContainer>
  );
}
