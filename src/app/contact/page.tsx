import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "צרו קשר | אורי שמאות נזקים",
  description: "השאירו פרטים לקבלת ייעוץ ראשוני וביקור בזירת הנזק.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return (
    <main className="pt-[100px] md:pt-[120px]">
      <Contact />
    </main>
  );
};

export default ContactPage;
