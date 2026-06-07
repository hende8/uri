import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
