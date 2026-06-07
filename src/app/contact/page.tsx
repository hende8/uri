import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "צרו קשר | אורי שמאות נזקים",
  description: "השאירו פרטים לקבלת ייעוץ ראשוני וביקור בזירת הנזק.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="צרו קשר"
        description="זמינים עבורכם בטלפון, בווטסאפ ובדוא״ל. אנחנו מחזירים תשובה תוך 24 שעות ומגיעים לזירת הנזק בהקדם."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
