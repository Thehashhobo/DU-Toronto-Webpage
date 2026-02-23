import ProminentAlumniSection from "@/components/about/ProminentAlumniSection";
import History from "@/components/about/History";
import Image from "next/image";
import TextHistory from "@/components/about/TextHistory";
import SectionHero from "@/components/shared/SectionHero";
import { prominentAlumni } from "@/data/prominentAlumni";
import type { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "About Us",
  description: "Learn more about the mission, history, and values at Delta Upsilon Toronto Chapter.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Delta Upsilon Toronto",
    description: "Explore our story, values, and commitment to building better men since 1899.",
    url: "/about",
    images: [{ url: "/images/H1.webp", width: 1024, height: 768, alt: "Delta Upsilon chapter house exterior" }],
  },
});

const historyText = (
  <>
    Delta Upsilon was the fourth fraternity to establish itself at the <b>University of Toronto</b>, though its origins in the city are even more antique. The earliest records indicate the existence of a local fraternity named <b>Phi Alpha</b> dating back to <b>1892</b>. In its ranks were the most accomplished members of the student body and faculty, spanning from academic prize winners to captains of varsity teams. In <b>1888</b>, the <b>72 brothers</b> who composed the group contemplated the benefits of joining an international fraternity. It was thus on <b>December 15th, 1899</b>, at <b>14 Grenville Street</b> that Phi Alpha reorganized itself, now with a charter from the International Fraternity in hand, becoming the <b>Toronto Chapter of Delta Upsilon</b>. As the university commemorated the armistice of the <b>First World War</b> with the construction of <b>Soldier&apos;s Tower</b>, the <b>Delta Upsilon Alumni association</b> would donate several of the bells in the tower&apos;s carillon which to this day can be heard by students as they cross the campus.
    <br /><br />
    Afterwards, the Fraternity would move to <b>3 Queen&apos;s Park</b>, current site of <b>Emmanuel College</b>, and later <b>142 Bloor Street West</b>, where a young <b>Lester B. Pearson</b> once lived in room 10, now the location of a <b>Burberry Store</b> in Toronto&apos;s High Fashion district. Subsequently was <b>112 St. George Street</b>, at the present site of <b>Robarts Library</b>. The university was undergoing an extensive phase of expansion in response to the post-war boom, and so many of the <b>42 fraternity houses</b> that once lined the environs of <b>St. George, Huron, Sussex, and Harbord</b> were expropriated by the <b>Plateau Committee</b>. A debate ensued amongst leaders of the Greek Houses as to whether to relocate north of campus into the <b>Annex</b>, or south of <b>College Street</b>. Delta Upsilon was the first house to make the move north, and so the purchase of <b>182 St. George</b> would be subsequently evoked in <b>Supreme Court hearings</b> as the other Greek Houses disputed the acquisition of their new properties.
  </>
);

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* ── Hero ─────────────────────────────── */}
      <SectionHero
        title="Our Chapter"
        subtitle="Building Better Men Since 1899"
        backgroundImage="/images/private/about1.webp"
        backgroundPosition="center 30%"
        height="medium"
      />

      {/* ── Brothers (cream) ─────────────────── */}
      <section className="bg-[#f8f7f0] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/images/B1.webp"
            alt="Brothers of Delta Upsilon Toronto"
            width={1920}
            height={1440}
            className="w-full md:w-[46%] h-64 md:h-80 object-cover shadow-lg"
            priority
          />
          <div className="flex-1">
            <p className="eyebrow text-[#0F52BA]/70 mb-3">Brotherhood</p>
            <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#edc058] mb-4">
              Our Brothers
            </h2>
            <p className="font-[family-name:var(--font-Cabin)] text-gray-600 text-base leading-relaxed">
              At DU Toronto, more than 30 brothers come together not just as members of a fraternity,
              but as a close-knit community grounded in shared values—justice, character, friendship,
              and a commitment to learning. What brings us together goes beyond tradition; it&apos;s the
              day-to-day experiences, support, and growth we share that turn brotherhood into
              something truly meaningful—like family.
            </p>
          </div>
        </div>
      </section>

      {/* ── History (dark navy) ───────────────── */}
      <section className="bg-[#0c1a2e] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow text-[#edc058]/60 mb-3">Timeline</p>
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight">
            Our History
          </h2>
          <History />
        </div>
      </section>

      {/* ── Chapter history expandable text ──── */}
      <div className="bg-[#f8f7f0] py-6">
        <TextHistory
          text={historyText}
          buttonText="Uncover the Rich History of Our Chapter"
          hideButtonText="Hide History"
        />
      </div>

      {/* ── Philanthropy (cream) ──────────────── */}
      <section className="bg-[#f8f7f0] py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow text-[#0F52BA]/70 mb-3">Giving Back</p>
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#1a1a2e] mb-4 uppercase tracking-tight">
            Philanthropy
          </h2>
          <p className="font-[family-name:var(--font-Cabin)] text-gray-600 text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
            Philanthropy is a core part of what it means to be a Delta Upsilon. Guided by our founding
            principle of the Advancement of Justice, we believe in using our time, resources, and
            talents to uplift others.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GSI */}
            <div className="bg-white border-l-4 border-[#edc058] p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-Roboto)] text-xl font-black text-[#0F52BA] uppercase mb-3">
                Global Service Initiative
              </h3>
              <div className="font-[family-name:var(--font-Cabin)] text-sm text-gray-600 space-y-3 leading-relaxed">
                <p>
                  Delta Upsilon&apos;s Global Service Initiative (GSI) offers brothers a unique opportunity to
                  make a real impact while exploring the world. As DU&apos;s flagship international service
                  program, GSI sends undergraduate and alumni members to communities in need to help build
                  schools and essential infrastructure.
                </p>
                <p>In 2025, DU hosted two GSI trips to Negril, Jamaica:</p>
                <ul className="list-disc list-inside space-y-1 text-[#1a1a2e] font-semibold text-xs uppercase tracking-wide">
                  <li>January 4–11, 2025</li>
                  <li>May 17–24, 2025</li>
                </ul>
                <p>
                  During the trip, brothers engage in hands-on construction at a local school, connect
                  with students and community members, reflect in evening discussions, and immerse
                  themselves in Jamaican culture.
                </p>
              </div>
            </div>

            {/* In House */}
            <div className="bg-white border-l-4 border-[#0F52BA] p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-Roboto)] text-xl font-black text-[#0F52BA] uppercase mb-3">
                In-House Philanthropy
              </h3>
              <div className="font-[family-name:var(--font-Cabin)] text-sm text-gray-600 space-y-3 leading-relaxed">
                <p>
                  DU Toronto is committed to making a difference not just globally, but right here at
                  home. In line with our values of justice and compassion, our chapter recently organized
                  an in-house philanthropic initiative in support of mental health awareness.
                </p>
                <p>
                  Through our collective efforts, we proudly raised and donated over{" "}
                  <span className="font-bold text-[#1a1a2e]">$1,000 to Bell Let&apos;s Talk</span>,
                  helping to fund men&apos;s mental health programs and spark important conversations
                  across Canada.
                </p>
                <p>
                  It&apos;s one of many ways our brotherhood stands for more than just tradition—we stand
                  for impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prominent Alumni (dark navy, handled in component) ── */}
      <ProminentAlumniSection alumniCards={prominentAlumni} />

    </main>
  );
}
