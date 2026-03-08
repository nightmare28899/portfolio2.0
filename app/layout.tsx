import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/globals/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
      <body className="antialiased min-h-screen relative">
        <LanguageProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
