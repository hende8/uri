import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../styles/index.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "אורי שמאות נזקים | שמאות נזקי רכוש מקצועית",
    template: "%s | אורי שמאות נזקים",
  },
  description:
    "משרד שמאות עצמאי המתמחה בהערכת נזקי מים, שריפה, פריצה ונזקי טבע, וליווי מלא של תביעות מול חברות הביטוח.",
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
    title: "אורי שמאות נזקים | שמאות נזקי רכוש מקצועית",
    description:
      "משרד שמאות עצמאי המתמחה בהערכת נזקי מים, שריפה, פריצה ונזקי טבע, וליווי מלא של תביעות מול חברות הביטוח.",
    images: [
      {
        url: "/og-image.png",
        width: 1730,
        height: 909,
        alt: "אורי שמאות נזקים",
      },
    ],
  },
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
