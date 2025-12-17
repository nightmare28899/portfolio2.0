import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/globals/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ui/ScrollToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin López | Front-end Developer",
  description: "Personal portfolio of Kevin López, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased min-h-screen relative`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
