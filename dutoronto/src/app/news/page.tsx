import BlogFeed from "@/components/news/BlogFeed";
import EventsSidebar from "@/components/news/EventsSidebar";
import SectionHero from "@/components/shared/SectionHero";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "News & Events",
  description:
    "Stay up to date with the latest news, announcements, and upcoming events from the Delta Upsilon Toronto Chapter.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "DU Toronto — Chapter News & Events",
    description:
      "Read the latest chapter updates and find out what's happening at 182 St. George Street.",
    url: "/news",
    images: [{ url: "/images/about.webp", width: 4016, height: 3016, alt: "Delta Upsilon Toronto brothers" }],
  },
});

export default function News() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* ── Hero ──────────────────────────────── */}
      <SectionHero
        title="News & Events"
        subtitle="Chapter updates, announcements, and what's coming up."
        backgroundImage="/images/about.webp"
        height="small"
      />

      {/* ── Main content ──────────────────────── */}
      <div className="bg-[#f8f7f0] py-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Blog feed — left 2/3 */}
            <div className="lg:col-span-2">
              <p className="eyebrow text-[#0F52BA]/70 mb-3">Latest Updates</p>
              <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#1a1a2e] uppercase tracking-tight mb-10">
                Chapter News
              </h2>
              <BlogFeed />
            </div>

            {/* Events sidebar — right 1/3, sticky below navbar */}
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <EventsSidebar />
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}
