import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenirNext = localFont({
  src: [
    {
      path: "../public/fonts/Avenir Next Ultra Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir Next Thin.woff2",
      weight: "250",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir Next Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir Next Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir Next Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir Next Demi.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir Next Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Avenir Next Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-avenir-next",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Zsófia Ördög | Film Editor",
  description: "Portfolio of Zsófia Ördög",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Zsófia Ördög | Film Editor",
    description: "Portfolio of Zsófia Ördög",
    siteName: "Zsófia Ördög",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenirNext.variable} ${avenirNext.className} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
      </head>

      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col"
      >
        {children}
      </body>
    </html>
  );
}