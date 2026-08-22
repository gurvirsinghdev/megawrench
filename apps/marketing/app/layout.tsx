import type { Metadata } from "next";
import { Inter_Tight, DM_Sans, Inter } from "next/font/google";

import "./globals.css";
import { cn } from "#lib/utils";

const fontHeadings = Inter_Tight({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-headings",
});
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "MegaWrench",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`${fontHeadings.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
