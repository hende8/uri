import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-20 pt-[140px] md:pb-[140px] md:pt-[170px] xl:pb-[180px] xl:pt-[200px] 2xl:pb-[220px] 2xl:pt-[230px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[820px] text-center">
              <span className="mb-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-secondary">
                <span className="accent-rule" />
                שמאות נזקי רכוש בלתי תלויה
              </span>
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
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-sm border border-primary bg-white px-9 py-4 text-base font-semibold text-primary transition duration-300 hover:bg-primary hover:text-white"
                >
                  תחומי השמאות שלנו
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
