import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sri Lakshmi Jewellers | Premium Gold, Diamond & Bridal Jewellery in Vijayawada",
  description: "Discover timeless gold, diamond, and bridal jewellery collections at Sri Lakshmi Jewellers, Vijayawada's trusted showroom since 1995. Exquisite craftsmanship and certified jewellery.",
  keywords: ["Jewellery Showroom Vijayawada", "Gold Jewellery Vijayawada", "Diamond Jewellery Vijayawada", "Bridal Collections Vijayawada", "Sri Lakshmi Jewellers", "Best Jewellery Shop in Vijayawada", "BIS Hallmarked Gold"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#1C1917] font-sans selection:bg-[#D4AF37] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
