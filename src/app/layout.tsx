import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chet's Corner Bar | Bay City's Neighborhood Bar Since 2013",
  description:
    "Your South End neighborhood bar in Bay City, MI. Cold drinks, live music, karaoke, pool & shuffleboard. Open daily. 1001 S Madison Ave.",
  keywords: [
    "Chet's Corner Bar",
    "Bay City bar",
    "neighborhood bar",
    "live music Bay City",
    "karaoke Bay City MI",
    "dive bar Bay City",
    "South End Bay City",
    "sports bar Bay City",
  ],
  openGraph: {
    title: "Chet's Corner Bar | Bay City's Neighborhood Bar",
    description:
      "Cold drinks, live music, karaoke nights & good times in Bay City's South End. Open Mon-Sat 9AM, Sun Noon.",
    type: "website",
    locale: "en_US",
    siteName: "Chet's Corner Bar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chet's Corner Bar | Bay City, MI",
    description:
      "Your neighborhood bar in Bay City's South End. Live music, karaoke, pool & the coldest drinks in town.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarOrPub",
              name: "Chet's Corner Bar",
              image: [],
              address: {
                "@type": "PostalAddress",
                streetAddress: "1001 S Madison Ave",
                addressLocality: "Bay City",
                addressRegion: "MI",
                postalCode: "48708",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.5812091,
                longitude: -83.8854474,
              },
              url: "https://chets-corner-bar-website.vercel.app",
              telephone: "+19894391539",
              priceRange: "$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.4",
                reviewCount: "342",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "02:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "12:00",
                  closes: "02:00",
                },
              ],
              servesCuisine: "Bar",
              hasMap:
                "https://www.google.com/maps/place/Chet's+Corner+Bar/@43.5812091,-83.8854474,17z",
            }),
          }}
        />
      </body>
    </html>
  );
}
