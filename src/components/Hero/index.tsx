"use client";
import Image from "next/image";
import { trackCallClick } from "@/lib/analytics";
import { SITE_PHONE } from "@/lib/site";

const PHONE_DISPLAY = "050-6273002";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-16 pt-[128px] md:pb-20 md:pt-[168px] lg:pb-24 lg:pt-[190px]"
    >
      <div className="container">
        <h1 className="hero-lead">
          <span className="block text-[2rem] leading-[1.07] font-extrabold tracking-[0] text-black xs:text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[5rem]">
            נגרם לך נזק לרכוש?
          </span>
          <span className="mt-5 block max-w-[26ch] text-[1.25rem] leading-[1.3] font-bold tracking-[0] text-black sm:text-[1.5rem] md:mt-7 md:text-[1.875rem] lg:text-[2.25rem] xl:text-[2.5rem]">
            רק עם שמאי פרטי תקבל 100% ליווי אישי{" "}
            <span className="bg-accent inline-block px-[0.25em] pb-[0.08em]">
              ופיצוי מקסימלי!
            </span>
          </span>
        </h1>

        <div className="hero-rise mt-10 h-px w-full bg-stroke-stroke [animation-delay:90ms] md:mt-14" />

        <div className="hero-rise mt-7 flex flex-col gap-8 [animation-delay:150ms] lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-14">
          <div className="flex items-center gap-4">
            <Image
              src="/images/about/uri-about.png"
              alt=""
              width={160}
              height={200}
              className="h-20 w-[64px] shrink-0 rounded-sm object-cover [object-position:50%_14%]"
            />
            <div>
              <p className="text-lg font-bold leading-tight text-black md:text-xl">
                אורי דבי
              </p>
              <p className="mt-1 text-sm leading-snug text-body-color md:text-base">
                שמאי רכוש מוסמך
              </p>
            </div>
            <Image
              src="/images/badges/property-assessors-association.png"
              alt="חבר איגוד שמאי הרכוש בישראל"
              width={160}
              height={163}
              className="ms-2 h-[68px] w-[68px] shrink-0 object-contain md:h-20 md:w-20"
            />
          </div>

          <div className="max-w-[620px]">
            <p className="text-base leading-relaxed text-body-color md:text-lg">
              מלווה בעלי דירות, בתים ועסקים בתביעות נזקי מים, שריפה, פריצה ונזקי
              טבע מול חברות הביטוח – מהבדיקה הראשונית בזירה, דרך תיעוד מקיף של
              הנזק ועד קבלת הפיצוי.
            </p>
            <p className="mt-4 text-base font-semibold text-black md:text-lg">
              ייצוג בלעדי של המבוטח – ללא קשרי עבודה עם חברות ביטוח.
            </p>
          </div>
        </div>

        <div className="hero-rise mt-10 h-px w-full bg-stroke-stroke [animation-delay:210ms]" />

        <div className="hero-rise mt-8 [animation-delay:270ms]">
          <a
            href={`tel:${SITE_PHONE}`}
            onClick={() => trackCallClick()}
            className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white shadow-btn transition duration-300 hover:bg-secondary hover:shadow-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-px sm:w-auto"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            <span>
              חייגו עכשיו
              <span className="mx-2 text-white/40" aria-hidden="true">
                ·
              </span>
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>

        <p className="hero-rise mt-5 flex items-center gap-2 text-sm text-body-color [animation-delay:330ms] md:text-base">
          <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          הגעה לזירת הנזק תוך 24 שעות
        </p>
      </div>
    </section>
  );
};

export default Hero;
