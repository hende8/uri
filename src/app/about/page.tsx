import About from "@/components/About";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות | אורי שמאות נזקים",
  description: "הכירו את המשרד, ניסיון של למעלה מ-15 שנה בשמאות נזקי רכוש.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage = () => {
  return (
    <main className="pt-[100px] md:pt-[120px]">
      <About />
      <WhyChooseUs />
      <Process />
    </main>
  );
};

export default AboutPage;
