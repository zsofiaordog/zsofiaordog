import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Ballet } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zsófia Ördög | Film Editor",
  description:
    "Portfolio of Zsófia Ördög – Film Editor, Assistant Editor and VFX Editor.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Zsófia Ördög | Film Editor",
    description:
      "Portfolio of Zsófia Ördög – Film Editor, Assistant Editor and VFX Editor.",
    siteName: "Zsófia Ördög",
  },
};

const ballet = Ballet({
  subsets: ["latin"],
  weight: ["400"], // Ballet only has one weight
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
