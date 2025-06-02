import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Cabin, Quicksand, Germania_One } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const germ = Germania_One({
  variable: "--font-Germ",
  subsets: ["latin"],
  weight: ["400"],
});

// const old = localFont({
//   src: "../../public/fonts/OPTIEngraversOldEnglish.otf",
//   variable: "--font-Old",
// });



export const metadata: Metadata = {

  // metadataBase: new URL('https://www.dutoronto.org'),
  metadataBase: new URL('https://du-toronto-webpage.vercel.app/'),
  title: {
    default: 'Delta Upsilon – University of Toronto Chapter',
    template: '%s | Delta Upsilon Toronto',   // page.tsx files can export `generateMetadata`
  },

  description: "Building Better Men Since 1899",
  appleWebApp: {
    title: "DU Toronto",
  },

    /* 4. Canonical + language alternates (good for duplicate-content signals) */
  alternates: {
    canonical: '/',
    languages: { 'en-CA': '/' },
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
    url: '/',
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${qs.variable} ${cabin.variable} ${germ.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
       <GoogleAnalytics gaId="G-VLGTCE1BPV" />
    </html>
  );
}
