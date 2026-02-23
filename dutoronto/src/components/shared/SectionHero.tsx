interface SectionHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  /** "full" = 100vh, "large" = 70vh/90vh, "medium" = 55vh/65vh, "small" = 40vh */
  height?: "full" | "large" | "medium" | "small";
  backgroundPosition?: string;
}

/**
 * Shared full-bleed hero for inner pages (About, Membership, House, Alumni, Contact).
 * Handles top padding for the fixed navbar automatically.
 */
export default function SectionHero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  height = "medium",
  backgroundPosition = "center center",
}: SectionHeroProps) {
  const heightClass = {
    full: "h-[70vh] md:h-[100vh]",
    large: "h-[60vh] md:h-[75vh]",
    medium: "h-[50vh] md:h-[60vh]",
    small: "h-[40vh] md:h-[45vh]",
  }[height];

  return (
    <section
      className={`relative w-full ${heightClass} bg-cover overflow-hidden pt-16 md:pt-20`}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/65" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Eyebrow label */}
        <span
          className="eyebrow text-[#edc058]/80 mb-3 tracking-[0.25em]"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}
        >
          Delta Upsilon Toronto
        </span>

        {/* Main title */}
        <h1
          className="font-[family-name:var(--font-Roboto)] text-4xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white"
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95), 0 4px 24px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)" }}
        >
          {title}
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p
            className="font-[family-name:var(--font-Cabin)] text-[#edc058] text-lg md:text-xl mt-3 max-w-lg"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}
          >
            {subtitle}
          </p>
        )}

        {/* Optional CTA */}
        {ctaText && ctaLink && (
          <a href={ctaLink} className="btn-outline mt-8">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
