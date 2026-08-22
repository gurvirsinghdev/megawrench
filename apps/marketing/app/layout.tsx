import type { Metadata } from "next";
import { Inter_Tight, DM_Sans  } from "next/font/google";

import "./globals.css";

const fontHeadings = Inter_Tight({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-headings",
});
const fontBody = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MegaWrench",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeadings.variable} ${fontBody.variable}`}>
        {children}
      </body>
    </html>
  );
}
