import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import {
  SITE_DESCRIPTION,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "@/lib/site";
import { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../styles/index.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | שמאות נזקי רכוש מקצועית`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "z4A-hE2sjvtdvnVDy2h8t_AIKy7-WALlezL1YaGRbt4",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
  openGraph: {
    type: "website",
    locale: "he_IL",
    title: `${SITE_NAME} | שמאות נזקי רכוש מקצועית`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1730,
        height: 909,
        alt: SITE_NAME,
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}${SITE_LOGO_PATH}`,
  image: `${SITE_URL}/og-image.png`,
  telephone: SITE_PHONE,
  areaServed: {
    "@type": "Country",
    name: "Israel",
  },
  inLanguage: "he-IL",
  priceRange: "₪₪",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head />

      <body className={`bg-white ${heebo.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <div className="isolate">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
