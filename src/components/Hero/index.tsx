import Link from "next/link";
import WhatsAppButton from "@/components/Common/WhatsAppButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-10 pt-[140px] md:pb-14 md:pt-[170px] xl:pb-16 xl:pt-[200px] 2xl:pt-[230px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[820px] text-center">
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl sm:leading-[1.15] md:text-[56px] md:leading-[1.1]">
                שמאות נזקי רכוש מקצועית, אובייקטיבית ומהירה
              </h1>
              <p className="mx-auto mb-12 max-w-[680px] text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
                אנחנו מלווים בעלי דירות, בתים ועסקים בכל תהליך הערכת הנזק
                מול חברת הביטוח – מהבדיקה הראשונית בזירה, דרך תיעוד מקיף
                של הנזק ועד לקבלת הפיצוי המלא שמגיע לכם על פי תנאי הפוליסה.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-semibold text-white shadow-btn transition duration-300 hover:bg-secondary hover:shadow-btn-hover"
                >
                  קבלת ייעוץ חינם
                </Link>
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
