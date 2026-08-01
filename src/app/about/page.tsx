// import About from "@/components/About";
import AboutFounder from "@/components/AboutFounder";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות | אורי שמאות נזקים",
  description: "הכירו את המשרד – שמאות נזקי רכוש עצמאית הפועלת אך ורק עבור המבוטח, עם רקע הנדסי ובטחוני.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
  },
};

const AboutPage = () => {
  return (
    <main className="pt-[100px] md:pt-[120px]">
      <AboutFounder />
      {/* <About /> */}
    </main>
  );
};

export default AboutPage;
