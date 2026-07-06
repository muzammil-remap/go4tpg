export const offersEyebrow = "THE OFFERS";
export const offersHeadline = "Six ways to start.";
export const offersIntro =
  "Six offers, three formats. Every one installs working systems — not advice. Enter wherever you are.";

export type OfferCard = {
  kicker: string;
  title: string;
  price: string;
  priceSuffix?: string;
  description: string;
  /** Optional italic pull-line, used on the flagship card. */
  highlight?: string;
  ctaLabel: string;
  /** Flags the single dark, "flagship" card in format 02. */
  flagship?: boolean;
};

export type OfferFormat = {
  number: string;
  title: string;
  description: string;
  /** Optional pill badge shown under the description (format 02 only). */
  badge?: string;
  accent: "blue" | "navy" | "cta";
  cards: [OfferCard, OfferCard];
};

export const offerFormats: OfferFormat[] = [
  {
    number: "01",
    title: "Reset Intensives",
    description:
      "Facilitated resets that don't stop at diagnosis — each installs at least one live AI-supported automation.",
    accent: "blue",
    cards: [
      {
        kicker: "DIAGNOSE · INSTALL",
        title: "Strategic Reset Planning Summit",
        price: "$4,750",
        description:
          "5-hr session + 2 follow-ups that install your first live AI automation. Written Blueprint in 24 hrs. Credited toward a Sprint.",
        ctaLabel: "Book Your Blueprint",
      },
      {
        kicker: "RECALIBRATE · INSTALL",
        title: "Mid-Year Reset Summit",
        price: "$4,750",
        description:
          "Half-day session + 1 follow-up. Second-Half Plan in 24 hrs, plus a first automation installed. Best run in early July.",
        ctaLabel: "Book Your Reset",
      },
    ],
  },
  {
    number: "02",
    title: "System Programs",
    description:
      "Deeper installation and ongoing operation — backed by TPG's own AI engineering team.",
    badge: "IN-HOUSE ENGINEERING",
    accent: "navy",
    cards: [
      {
        kicker: "INSTALL",
        title: "Revenue Operations Sprint",
        price: "$25k+",
        description:
          "10 business days. Blueprint, Cadence OS, installed automations — backed by TPG's own AI engineering team.",
        highlight:
          "Your next hire costs more than our Sprint. It's not an expense — it's a reallocation.",
        ctaLabel: "Schedule a Sprint",
        flagship: true,
      },
      {
        kicker: "SUSTAIN",
        title: "Fractional Chief Revenue Architect",
        price: "Retainer",
        description:
          "90 days. Weekly cadence, scoreboard enforcement, ongoing AI engineering support. Limited.",
        ctaLabel: "Inquire",
      },
    ],
  },
  {
    number: "03",
    title: "Retreats & Leadership Coaching",
    description: "Step out of the day-to-day, or embed a coach for the long haul.",
    accent: "cta",
    cards: [
      {
        kicker: "OFFSHORE",
        title: "The Strategy Blueprint at Sea",
        price: "$7,250",
        priceSuffix: "+/person",
        description:
          "7 nights aboard Cyrolia, Alan's sailboat in French Polynesia. Leave with the Priority and the Blueprint to build your company's next chapter. 5 guests only.",
        ctaLabel: "Reserve Your Berth",
      },
      {
        kicker: "COACH",
        title: "The Lighthouse Leadership OS",
        price: "Retainer",
        description:
          "Ongoing coaching and facilitation for founders to leadership teams. Monthly, quarterly, or as-needed.",
        ctaLabel: "Book a Discovery Call",
      },
    ],
  },
];
