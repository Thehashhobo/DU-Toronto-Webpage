import HouseInfo from "@/components/house/HouseInfo";
import TextHistory from "@/components/about/TextHistory";
import SectionHero from "@/components/shared/SectionHero";
import Image from "next/image";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Our Chapter House",
  description:
    "Explore the historic Delta Upsilon chapter house at 182 St. George Street. Learn more about our home and its legacy at U of T.",
  alternates: { canonical: "/house" },
  openGraph: {
    title: "Visit Our DU Toronto Chapter House",
    description:
      "Take a look inside our historic home in the heart of downtown Toronto and see where brotherhood lives.",
    url: "/house",
    images: [{ url: "/images/H1.webp", width: 1024, height: 768, alt: "Delta Upsilon chapter house exterior" }],
  },
});

const houseHistoryText = (
  <>
    The house was built on top of the basin of the buried <b>Taddle Creek</b>, the river which once ran through Philosopher&apos;s Walk, carving its relief. <b>182 St. George</b> was a custom order for <b>Harris L. Hees</b>, whose son <b>George Harris Hees</b> would become a prolific Cabinet Minister in the Governments of <b>John Diefenbaker</b> and <b>Brian Mulroney</b>, earning the moniker of the second most powerful man in the conservative party. The architect of the house, <b>Eden Smith</b>, was a star of the early 20th Century, whose craftsmanship also graces such iconic and institutional buildings as <b>Upper Canada College</b>, the <b>Munk School of Global Affairs</b>, and the present <b>Italian Consulate</b>.
    <br /><br />
    To this day, many of the original pre-war components from the crown-molding to the wainscotting have been preserved by the diligent care of the Fraternity. For its unique historical and architectural significance, 182 St. George is protected by the <b>Ontario Heritage Act</b>, and is listed on the <b>Architectural Conservancy of Ontario</b>.
    <br /><br />
    Delta Upsilon moved into 182 St. George in <b>July of 1958</b>, its <b>fifth</b> house in Toronto. Since that time, it has offered its brothers much in terms of repose, development, entertainment, and study. Our house provides not only proximity to the campus, but immersion in the culture and heritage of the university and Canada at large.
  </>
);

export default function House() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* ── Hero ─────────────────────────────── */}
      <SectionHero
        title="Delta House"
        subtitle="Share a Home With Your Brothers"
        backgroundImage="/images/private/Ho1.webp"
        height="full"
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      {/* ── Overview (cream) ──────────────────── */}
      <section className="bg-[#f8f7f0] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-start">
          {/* Photo */}
          <div className="w-full md:w-[44%] flex-shrink-0">
            <Image
              src="/images/snow.webp"
              priority
              width={3000}
              height={2250}
              alt="Delta Upsilon house in snow"
              className="w-full h-64 md:h-80 object-cover shadow-lg"
            />
          </div>
          {/* Accordion */}
          <HouseInfo />
        </div>
      </section>

      {/* ── House features (dark navy) ────────── */}
      <section className="bg-[#0c1a2e] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow text-[#edc058]/60 mb-3">Life at 182</p>
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-white mb-5 uppercase tracking-tight">
            A Home That Fosters{" "}
            <span className="italic text-[#edc058]">Brotherhood</span>
          </h2>
          <p className="font-[family-name:var(--font-Cabin)] text-gray-400 text-base max-w-2xl mb-12 leading-relaxed">
            Our fraternity house isn&apos;t just a place to live — it&apos;s a community built to support your
            academic, social, and personal development. Enjoy access to an industrial-grade kitchen,
            dedicated study library, spacious TV rooms, in-house gym, and pool rooms for leisure and
            bonding. It&apos;s more than housing — it&apos;s home.
          </p>

          {/* Image gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image
              width={3000}
              height={2250}
              src="/images/Pool.webp"
              alt="Pool room"
              className="w-full h-52 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
            />
            <Image
              width={3000}
              height={2250}
              src="/images/Chapter.webp"
              alt="Chapter room"
              className="w-full h-52 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
            />
            <Image
              width={1024}
              height={768}
              src="/images/H1.webp"
              alt="House exterior"
              className="w-full h-52 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ── House history expandable text (cream) ── */}
      <div className="bg-[#f8f7f0] py-6">
        <TextHistory
          text={houseHistoryText}
          buttonText="Uncover the Legacy of Our Chapter House"
          hideButtonText="Hide History"
        />
      </div>

    </main>
  );
}
