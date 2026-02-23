import QuickFactsSection from "@/components/membership/QuickFactsSection";
import ImpactSection from "@/components/membership/ImpactSection";
import FAQSection from "@/components/membership/FAQSection";
// import SectionHero from "@/components/shared/SectionHero";
import Carousel from "@/components/home/Carousel";
import type { Metadata } from "next";

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

    </main>
  );
}
