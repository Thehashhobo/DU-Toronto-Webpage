import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Cabin, Quicksand, Grenze } from "next/font/google";
// import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-Roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const qs = Quicksand({
  variable: "--font-Quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cabin = Cabin({
  variable: "--font-Cabin",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const grenze = Grenze({
  variable: "--font-Germ",
  subsets: ["latin"],
  weight: ["400"],
});

// const old = localFont({
//   src: "../../public/fonts/OPTIEngraversOldEnglish.otf",
//   variable: "--font-Old",
// });



export const metadata: Metadata = {

  metadataBase: new URL('https://dutoronto.org/'),
  title: {
    default: 'Delta Upsilon – University of Toronto Chapter',
    template: '%s | Delta Upsilon Toronto',   // page.tsx files can export `generateMetadata`
  },

  description: "Building Better Men Since 1899",
  
  keywords: ['Delta Upsilon', 'fraternity', 'University of Toronto', 'DU Toronto', 'brotherhood', 'non-secret fraternity'],
  authors: [{ name: 'Delta Upsilon Toronto' }],
  creator: 'Delta Upsilon Toronto Chapter',
  publisher: 'Delta Upsilon Toronto Chapter',
  appleWebApp: {
    title: "DU Toronto",
  },

  twitter: {
  card: 'summary_large_image',
  site: '@DU_Toronto',
  title: 'Delta Upsilon Toronto — Building Better Men Since 1899',
  description: 'Join Canada’s oldest non-secret fraternity...',
  images: ['/images/Coat of Arms.webp'],
  },

  robots: {
  index: true,                     // Allow search engines to index this page
  follow: true,                    // Allow following links from this page
  googleBot: {
    index: true,                   // Same for Google's crawler
    follow: true
  },
  },
    openGraph: {
    type: 'website',
    url: 'https://dutoronto.org/',
    title: 'Delta Upsilon Toronto — Building Better Men Since 1899',
    description:
      'Join Canada’s oldest non-secret fraternity. Discover our brotherhood, philanthropy and historic chapter house at 182 St George St.',
    siteName: 'Delta Upsilon Toronto',
    locale: 'en_CA',
    images: [
      {
        url: '/images/Coat of Arms.webp', // 1200×630 JPEG <150 kB
        width: 300,
        height: 351,
        alt: 'Snow-covered Delta Upsilon house at 182 St. George St, Toronto',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Delta Upsilon – University of Toronto Chapter",
              "alternateName": "DU Toronto",
              "legalName": "Delta Upsilon Fraternity - Toronto Chapter",
              "url": "https://dutoronto.org",
              "logo": "https://dutoronto.org/images/Coat%20of%20Arms.webp",
              "description": "Delta Upsilon is a non-secret, values-based fraternity founded on the principles of justice, character, friendship, and culture. The Toronto Chapter, founded in 1898, is Canada's oldest DU chapter.",
              "foundingDate": "1899-12-15",
              "sameAs": [
                "https://www.instagram.com/dutoronto",
                "https://www.facebook.com/DUToronto/"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "182 St George Street",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M5R 2N3",
                "addressCountry": "CA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-647-545-7141",  
                "email": "dutorontochapter@gmail.com", 
                "contactType": "Customer Support"
              },
              "telephone": "+1-647-545-7141",
              "email": "dutorontochapter@gmail.com",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 10,
                "maxValue": 40
              },
              "naics": "813410", // NAICS code for Civic and Social Organizations
          })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${qs.variable} ${cabin.variable} ${grenze.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-VLGTCE1BPV" />
      </body>
    </html>
  );
}
