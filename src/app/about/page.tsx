import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות | אורי שמאות נזקים",
  description: "הכירו את המשרד, ניסיון של למעלה מ-15 שנה בשמאות נזקי רכוש.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="אודות"
        description="משרד שמאות עצמאי המתמחה בליווי בעלי נכסים מול חברות הביטוח – בהליכים פשוטים ובתביעות מורכבות כאחד."
      />
      <About />
      <WhyChooseUs />
      <Process />
    </>
  );
};

export default AboutPage;
