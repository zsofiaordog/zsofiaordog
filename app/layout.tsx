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
  metadataBase: new URL("https://www.zsofiaordog.com"),

  title: {
    default: "Zsófia Ördög | Film Editor",
    template: "%s | Zsófia Ördög",
  },

  description:
    "Portfolio of Zsófia Ördög, film editor, assistant editor and VFX editor based in Budapest.",

  applicationName: "Zsófia Ördög Portfolio",
  category: "Portfolio",

  keywords: [
    "Zsófia Ördög",
    "film editor",
    "assistant editor",
    "VFX editor",
    "Avid editor",
    "Budapest film editor",
    "Hungarian film editor",
    "narrative film editor",
  ],

  authors: [
    {
      name: "Zsófia Ördög",
      url: "https://www.zsofiaordog.com",
    },
  ],

  creator: "Zsófia Ördög",
  publisher: "Zsófia Ördög",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Zsófia Ördög | Film Editor",
    description:
      "Portfolio of Zsófia Ördög, film editor, assistant editor and VFX editor based in Budapest.",
    url: "/",
    siteName: "Zsófia Ördög",
    locale: "en_GB",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zsófia Ördög – Film Editor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zsófia Ördög | Film Editor",
    description:
      "Portfolio of Zsófia Ördög, film editor, assistant editor and VFX editor based in Budapest.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.zsofiaordog.com/#person",

  name: "Zsófia Ördög",

  url: "https://www.zsofiaordog.com",

  image: "https://www.zsofiaordog.com/og-image.jpg",

  jobTitle: "Film Editor",

  description:
    "Film editor, assistant editor and VFX editor based in Budapest, Hungary, specialising in narrative feature films and television.",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },

  knowsAbout: [
    "Film Editing",
    "Narrative Editing",
    "Feature Films",
    "Television",
    "Assistant Editing",
    "VFX Editorial",
    "Avid Media Composer",
    "DaVinci Resolve",
    "Film Post-production",
  ],

  sameAs: ["https://www.imdb.com/name/nm6768698/"],
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
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