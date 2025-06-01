import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Cabin, Quicksand, Germania_One } from "next/font/google";
import localFont from "next/font/local";
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

const old = localFont({
  src: "../../public/fonts/OPTIEngraversOldEnglish.otf",
  variable: "--font-Old",
});



export const metadata: Metadata = {
  title: "Delta Upsilon Toronto",
  description: "Building Better Men Since 1899",
  appleWebApp: {
    title: "DU Toronto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${qs.variable} ${cabin.variable} ${old.variable} ${germ.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
