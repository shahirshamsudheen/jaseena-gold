/**
 * SectionDivider — The recurring gold rule motif.
 * A thin gold horizontal line used sparingly as a section separator.
 */

interface SectionDividerProps {
  /** "center" | "left" — alignment of the rule */
  align?: "center" | "left";
  /** Width variant */
  width?: "narrow" | "wide";
  className?: string;
}

export default function SectionDivider({
  align = "center",
  width = "narrow",
  className = "",
}: SectionDividerProps) {
  const widthClass = width === "wide" ? "w-30" : "w-20";
  const alignClass = align === "left" ? "" : "mx-auto";

  return (
    <hr
      className={`block h-px border-none bg-warm-gold ${widthClass} ${alignClass} my-8 ${className}`}
      aria-hidden="true"
    />
  );
}
