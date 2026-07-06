export type NavLink = {
  label: string;
  href: string;
};

/**
 * NOTE — section mapping is a best guess, not an explicit spec.
 *
 * The source design's nav links were all placeholder `#` anchors with no
 * indication of which section each one should point to. The mapping below
 * assigns each label to the most content-appropriate section on this
 * single-page site. Confirm with the client before shipping — in
 * particular "About" and "AI Fluency" are inferential:
 *
 *   Services    -> #offers        (Six ways to start)
 *   About       -> #about         (Opening question / transformation)
 *   AI Fluency  -> #ai-fluency    (How we work: S.T.E.)
 *   Results     -> #results       (Client logos strip)
 *   Contact     -> #contact       (Cost-of-waiting CTA band)
 */
export const navLinks: NavLink[] = [
  { label: "Services", href: "#offers" },
  { label: "About", href: "#about" },
  { label: "AI Fluency", href: "#ai-fluency" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const navCta = {
  label: "Book a Strategy Call",
  href: "#contact",
};
