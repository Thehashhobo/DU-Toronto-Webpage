import QuickFactsSection from "@/components/membership/QuickFactsSection";
import ImpactSection from "@/components/membership/ImpactSection";
import FAQSection from "@/components/membership/FAQSection";
// import SectionHero from "@/components/shared/SectionHero";
import Carousel from "@/components/home/Carousel";
import type { Metadata } from "next";

/**
 * Set RUSH_URL to your recruitment form link when rush is active.
 * Leave as an empty string ("") to disable the button and show the off-season tooltip.
 */
const RUSH_URL = "https://forms.gle/3G8fHWks8zkmUh4F7";

export const generateMetadata = (): Metadata => ({
  title: "Membership",
  description:
    "Learn what it means to become a member of Delta Upsilon at U of T. Explore our values, recruitment process, and lifelong brotherhood.",
  alternates: { canonical: "/membership" },
  openGraph: {
    title: "Join DU Toronto",
    description:
      "Discover the benefits of membership in Canada's oldest non-secret fraternity. Get involved today.",
    url: "/membership",
    images: [{ url: "/images/MembershipHeader.webp", width: 4061, height: 2098, alt: "New member class at Delta Upsilon Toronto" }],
  },
});

export default function Membership() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* ── Hero ──────────────────────────────── */}
      {/* <SectionHero
        title="Why DU?"
        subtitle="Build. Lead. Serve. Connect."
        backgroundImage="/images/MembershipHeader.webp"
        backgroundPosition="center 10%"
        height="small"
        ctaText="See FAQ"
        ctaLink="#faq"
      /> */}
      <Carousel
        overlayTitle="Why DU?"
        overlaySubtitle="Build. Lead. Serve. Connect."
        ctaText="See FAQ"
        ctaLink="#faq"
      />

      {/* ── DU Difference (cream) ─────────────── */}
      <ImpactSection />

      {/* ── FAQ (dark navy) ───────────────────── */}
      <FAQSection />

      {/* ── Quick Facts (cream) ───────────────── */}
      <QuickFactsSection />

      {/* ── Join CTA (dark navy) ──────────────── */}
      <section className="bg-[#0c1a2e] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow with flanking lines */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#edc058]/30" />
            <p className="eyebrow text-[#edc058]/60">Recruitment</p>
            <div className="h-px w-10 bg-[#edc058]/30" />
          </div>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-Germ)] text-4xl md:text-5xl xl:text-6xl text-[#edc058] mb-4">
            Interested in Joining?
          </h2>

          {/* Gold rule */}
          <div className="h-px max-w-[6rem] mx-auto bg-gradient-to-r from-transparent via-[#edc058]/40 to-transparent mb-6" />

          <p className="font-[family-name:var(--font-Cabin)] text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            Rush is your first step towards brotherhood. Whether you&apos;re a first-year or
            upper-year student, we welcome anyone who shares our values and wants to be part
            of something greater.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* Rush application button — disabled with tooltip when no URL is set */}
            <div className="relative group/rush inline-block">
              {RUSH_URL ? (
                <a
                  href={RUSH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Apply to Rush
                </a>
              ) : (
                <span className="btn-primary opacity-50 cursor-not-allowed select-none inline-block">
                  Apply to Rush
                </span>
              )}

              {/* Off-season tooltip */}
              {!RUSH_URL && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 bg-[#f8f7f0] border border-[#edc058]/30 text-[#1a1a2e] text-xs font-[family-name:var(--font-Cabin)] text-center px-4 py-3 opacity-0 group-hover/rush:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-lg">
                  Our current rush period is over! Rush takes place in the months leading up to January and September, check back soon.
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#f8f7f0]" />
                </div>
              )}
            </div>

            <a href="/contact" className="btn-outline">
              Contact Recruitment
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
