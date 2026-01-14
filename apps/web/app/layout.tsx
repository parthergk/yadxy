import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviders from "../components/AuthProviders";
import Script from "next/script";

const forum = localFont({
  src: "./fonts/Forum-Regular.ttf",
  variable: "--font-forum",
  display: "swap",
  preload: true,
});

const gloriaHallelujah = localFont({
  src: "./fonts/GloriaHallelujah-Regular.ttf",
  variable: "--font-gloriahallelujah",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteDescription =
  "Track tuition fees effortlessly with Yadxy. Automated WhatsApp reminders, UPI payments, and student management for tutors and coaching centers. Try free today!";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "tuition fee tracker app",
    "fee management software for teachers",
    "coaching center fee software",
    "whatsapp fee reminder",
    "automatic fee reminder app",
    "student payment tracking app",
    "UPI fee collection app",
    "tuition management system",
    "coaching class management software",
    "fee due reminder app",
    "tuition teacher app",
    "monthly fee reminder app",
    "teacher fee management app",
    "tuition billing software",
  ],

  authors: [{ name: "Parther", url: "https://parther.in" }],
  creator: "Parther",
  publisher: "Yadxy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  metadataBase: new URL("https://yadxy.com"),
  openGraph: {
    siteName: "Yadxy",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yadxy",
  url: "https://yadxy.com",
  logo: "https://yadxy.com/logo-512x512.png",
  image: "https://yadxy.com/yadxy-schema-16x9.jpg",
  description: siteDescription,
  sameAs: [
    "https://www.instagram.com/yadxyapp",
    "https://x.com/YadxyApp",
    "https://www.linkedin.com/company/yadxy",
  ],
  founder: {
    "@type": "Person",
    name: "Parther",
    url: "https://parther.in",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["English", "Hindi"],
  },
};

// Software Application Schema
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Yadxy",
  description: siteDescription,
  url: "https://yadxy.com",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  logo: "https://yadxy.com/logo-512x512.png",
  image: "https://yadxy.com/yadxy-schema-16x9.jpg",
  author: {
    "@type": "Person",
    name: "Parther",
    url: "https://parther.in",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  featureList: [
    "Automated WhatsApp reminders",
    "UPI payment integration",
    "Student fee tracking",
    "Payment history management",
    "Multi-student management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>

      <body
        className={`${forum.variable} ${gloriaHallelujah.variable} ${inter.variable}`}
      >
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <AuthProviders>{children}</AuthProviders>
      </body>
    </html>
  );
}
