import About from "@/components/About";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אורי שמאות נזקים | שמאות נזקי רכוש מקצועית",
  description:
    "משרד שמאות עצמאי המתמחה בהערכת נזקי מים, שריפה, פריצה ונזקי טבע, וליווי מלא של תביעות מול חברות הביטוח.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <About />
      <Contact />
      <Blog />
    </>
  );
}
