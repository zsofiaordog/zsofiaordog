import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zsófia Ördög | Film Editor",
  description:
    "Portfolio of Zsófia Ördög",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Zsófia Ördög | Film Editor",
    description:
      "Portfolio of Zsófia Ördög",
    siteName: "Zsófia Ördög",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}