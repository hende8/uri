import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "צרו קשר | אורי שמאות רכוש",
  description: "השאירו פרטים לקבלת ייעוץ ראשוני וביקור בזירת הנזק.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
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
