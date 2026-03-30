import type { Metadata } from "next";
import { Oswald, Public_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Public_Sans({
  variable: "--font-body",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const headingFont = Oswald({
  variable: "--font-heading",
  weight: ["500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flight Delay Frontend",
  description: "Minimal Next.js frontend for flight delay workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
