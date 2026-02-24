import Image from "next/image";
import type { Metadata } from "next";
import AlumniSignupForm from "@/components/alumni/AlumniSignupForm";
import SectionHero from "@/components/shared/SectionHero";

export const generateMetadata = (): Metadata => ({
  title: "Alumni",
  description:
    "Stay connected with the Delta Upsilon Toronto alumni community. Learn how to get involved, support the chapter, and attend future events.",
  alternates: { canonical: "/alumni" },
  openGraph: {
    title: "DU Toronto Alumni Network",
    description: "Reconnect and support the next generation of brothers through our growing alumni community.",
    url: "/alumni",
    images: [{ url: "/images/ap2.webp", width: 898, height: 1056, alt: "Compilation of DU Toronto alumni" }],
  },
});

export default function Alumni() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* ── Hero ─────────────────────────────── */}
      <SectionHero
        title="Alumni Relations"
        subtitle="Stay Connected with Your Brothers"
        backgroundImage="/images/ap1.webp"
        backgroundPosition="center top"
        height="large"
        ctaText="Sign Up"
        ctaLink="#sign_up"
      />

      {/* Lester caption */}
      <div className="bg-[#0c1a2e] px-6 py-2 text-right">
        <span className="text-xs text-gray-400 italic font-[family-name:var(--font-Cabin)]">
          Lester B. Pearson, 14th Prime Minister of Canada, Delta Upsilon Toronto Chapter
        </span>
      </div>

      {/* ── Prominent alumni blurb (cream) ────── */}
      <section className="bg-[#f8f7f0] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Collage photo */}
          <div className="w-full md:w-80 flex-shrink-0 shadow-lg overflow-hidden">
            <Image
              src="/images/ap2.webp"
              priority
              width={898}
              height={1056}
              alt="Delta Upsilon Prominent Alumni Collage"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="eyebrow text-[#0F52BA]/70 mb-3">Our Legacy</p>
            <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#1a1a2e] mb-4 uppercase tracking-tight">
              Prominent Delta Upsilon Alumni
            </h2>
            <div className="font-[family-name:var(--font-Cabin)] text-gray-600 text-base space-y-4 leading-relaxed">
              <p>
                Delta Upsilon has a proud tradition of producing leaders and changemakers across many
                fields. Our alumni include Nobel laureates, prime ministers, astronauts, business
                pioneers, and advocates for social progress.
              </p>
              <p>
                Among our most distinguished members is{" "}
                <strong className="text-[#1a1a2e]">Lester B. Pearson</strong>, Nobel Peace Prize
                recipient and former Prime Minister of Canada. Other notable alumni include{" "}
                <strong className="text-[#1a1a2e]">Charles Evans Hughes</strong> (Chief Justice of
                the U.S. Supreme Court), <strong className="text-[#1a1a2e]">Kurt Vonnegut</strong>{" "}
                (acclaimed author), and <strong className="text-[#1a1a2e]">Alan Bean</strong>{" "}
                (Apollo 12 astronaut).
              </p>
              <p>
                The achievements of our alumni inspire current and future brothers to strive for
                excellence, leadership, and service in all their endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mailing list sign-up (dark navy) ──── */}
      <section id="sign_up" className="bg-[#0c1a2e] py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="eyebrow text-[#edc058]/60 mb-3">Stay In Touch</p>
          <h2 className="font-[family-name:var(--font-Roboto)] text-3xl md:text-4xl font-black text-[#edc058] mb-3 uppercase tracking-tight">
            Alumni Mailing List
          </h2>
          <p className="font-[family-name:var(--font-Cabin)] text-gray-400 mb-10 max-w-xl mx-auto text-sm">
            Sign up to receive updates, event invitations, and news from the Delta Upsilon Toronto
            Alumni community.
          </p>
          <AlumniSignupForm />
        </div>
      </section>

    </main>
  );
}
