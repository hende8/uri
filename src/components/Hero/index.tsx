"use client";
import Image from "next/image";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import { trackContactClick } from "@/lib/analytics";

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
                נזק לרכוש? נדאג שתקבלו את הפיצוי המלא
              </h1>
              <p className="mx-auto mb-12 max-w-[680px] text-base leading-relaxed text-body-color sm:text-lg md:text-xl">
                ליווי של בעלי דירות, בתים ועסקים בכל תהליך הערכת הנזק
                מול חברת הביטוח – מהבדיקה הראשונית בזירה, דרך תיעוד מקיף
                של הנזק ועד לקבלת הפיצוי המלא שמגיע לכם.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+972506273002"
                  onClick={() => trackContactClick()}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-9 py-4 text-base font-semibold text-white shadow-btn transition duration-300 hover:bg-secondary hover:shadow-btn-hover"
                >
                  קבלת ייעוץ חינם
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </a>
                <div className="hidden sm:block">
                  <WhatsAppButton />
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center">
                <Image
                  src="/images/badges/property-assessors-association.png"
                  alt="חבר איגוד שמאי הרכוש בישראל"
                  width={140}
                  height={140}
                  className="h-32 w-32 object-contain sm:h-36 sm:w-36"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
