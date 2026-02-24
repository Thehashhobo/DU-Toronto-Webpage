import ContactForm from "@/components/contact/ContactForm";
import { InstagramFilled } from "@ant-design/icons";
import Image from "next/image";
import type { Metadata } from "next";
import { executives } from "@/data/executives";

export const generateMetadata = (): Metadata => ({
  title: "Contact Us",
  description:
    "Have questions or want to get in touch with Delta Upsilon Toronto? Reach out to our chapter leadership today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Delta Upsilon Toronto",
    description:
      "Get in touch with our executive team and learn more about our chapter at the University of Toronto.",
    url: "/contact",
    images: [{ url: "/images/Coat of Arms.webp", width: 300, height: 351, alt: "DU Toronto Coat of Arms" }],
  },
});

/** Reusable exec contact card */
function ExecContactCard({
  name,
  image,
  imageWidth,
  imageHeight,
  phone,
  email,
  instagram,
}: {
  name: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  phone?: string;
  email?: string;
  instagram?: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      {/* Photo */}
      <div className="relative flex-shrink-0 w-28 h-36 md:w-32 md:h-40 overflow-hidden bg-gray-100">
        <Image
          src={image}
          width={imageWidth || 800}
          height={imageHeight || 1067}
          alt={name}
          className="w-full h-full object-cover object-top"
          sizes="150px"
        />
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 w-9 h-9 flex items-center justify-center bg-[#edc058] text-[#0c1a2e] text-base hover:bg-[#f5d27a] transition-colors"
          >
            <InstagramFilled />
          </a>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 text-sm font-[family-name:var(--font-Cabin)]">
        <p className="font-bold text-base text-[#1a1a2e]">{name}</p>
        {phone && (
          <p className="text-gray-600">
            <span className="text-xs uppercase tracking-wider font-bold text-gray-400 mr-2">Phone</span>
            <a href={`tel:${phone}`} className="hover:text-[#0F52BA] transition-colors">{phone}</a>
          </p>
        )}
        {email && (
          <p className="text-gray-600">
            <span className="text-xs uppercase tracking-wider font-bold text-gray-400 mr-2">Email</span>
            <a href={`mailto:${email}`} className="hover:text-[#0F52BA] transition-colors break-all">{email}</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  // Pull contact info directly from the centralised executives data file.
  // To update these contacts, edit src/data/executives.ts.
  const recruitment = executives.find((e) => e.position === "Minister of Recruitment");
  const external = executives.find((e) => e.position === "Minister of External Relations");

  return (
    <main className="flex flex-col min-h-screen bg-[#f8f7f0]">
      {/* Page header */}
      <div className="pt-20 md:pt-24 bg-[#0c1a2e] pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow text-[#edc058]/60 mb-3">Get In Touch</p>
          <h1 className="font-[family-name:var(--font-Roboto)] text-4xl md:text-5xl xl:text-6xl font-black text-white uppercase tracking-tight">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#edc058] to-transparent" />

      {/* Main content */}
      <section className="max-w-7xl mx-auto w-full px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left: exec contacts */}
        <div className="flex flex-col gap-10">

          {/* Membership */}
          <div>
            <h2 className="font-[family-name:var(--font-Roboto)] text-2xl font-black text-[#1a1a2e] uppercase mb-1">
              Membership Inquiries
            </h2>
            <p className="font-[family-name:var(--font-Cabin)] text-gray-500 text-sm mb-5">
              For questions related to membership, please contact our{" "}
              <span className="font-bold text-[#0F52BA]">Minister of Recruitment</span>.
            </p>
            {recruitment && <ExecContactCard {...recruitment} />}
          </div>

          {/* Alumni */}
          <div>
            <h2 className="font-[family-name:var(--font-Roboto)] text-2xl font-black text-[#1a1a2e] uppercase mb-1">
              Alumni Inquiries
            </h2>
            <p className="font-[family-name:var(--font-Cabin)] text-gray-500 text-sm mb-5">
              For questions related to alumni relations and events, please contact our{" "}
              <span className="font-bold text-[#0F52BA]">Minister of External Relations</span>.
            </p>
            {external && <ExecContactCard {...external} />}
          </div>

          {/* General note */}
          <p className="font-[family-name:var(--font-Cabin)] text-gray-500 text-sm border-l-2 border-[#edc058] pl-4">
            For all other inquiries, fill in the contact form and we will get back to you as soon as possible.
          </p>
        </div>

        {/* Right: contact form */}
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
