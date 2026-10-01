"use client";
import Image from "next/image";
import { trackCallClick } from "@/lib/analytics";
import { SITE_PHONE } from "@/lib/site";

const PHONE_DISPLAY = "050-6273002";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-16 pt-[124px] md:pb-20 md:pt-[180px] lg:pb-24 lg:pt-[205px]"
    >
      <div className="container">
        <h1 className="hero-lead">
          <span className="block text-[2rem] leading-[1.07] font-extrabold tracking-[0] text-black xs:text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[5rem]">
            נגרם לך נזק לרכוש?
          </span>
          <span className="mt-6 block max-w-[24ch] text-[1.625rem] leading-[1.22] font-extrabold tracking-[0] text-black sm:text-[2rem] md:mt-8 md:text-[2.5rem] lg:text-[3rem] xl:text-[3.375rem]">
            רק עם שמאי פרטי תקבל 100% ליווי אישי{" "}
            <span className="bg-accent inline-block px-[0.25em] pb-[0.08em] text-white">
              ופיצוי מקסימלי!
            </span>
          </span>
        </h1>

        <div className="hero-rise mt-10 h-px w-full bg-stroke-stroke [animation-delay:90ms] md:mt-14" />

        <div className="hero-rise mt-7 flex flex-col gap-8 [animation-delay:150ms] lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-14">
          <div className="flex items-center gap-4">
            <Image
              src="/images/about/uri-about.jpg"
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

          <div className="max-w-[660px]">
            <p className="text-lg leading-relaxed text-dark md:text-xl lg:text-[1.375rem] lg:leading-[1.6]">
              מלווה בעלי דירות, בתים ועסקים בתביעות נזקי מים, שריפה, פריצה ונזקי
              טבע מול חברות הביטוח – מהבדיקה הראשונית בזירה, דרך תיעוד מקיף של
              הנזק ועד קבלת הפיצוי.
            </p>
          </div>
        </div>

        <div className="hero-rise mt-9 rounded-sm border border-accent/25 bg-accent-soft px-5 py-4 [animation-delay:210ms] md:px-7 md:py-5">
          <p className="flex items-start gap-3 text-lg font-bold leading-snug text-black md:text-xl lg:text-2xl">
            <svg
              className="mt-0.5 h-6 w-6 shrink-0 text-accent md:h-7 md:w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2 4 5.5v5.9c0 4.9 3.4 9.5 8 10.6 4.6-1.1 8-5.7 8-10.6V5.5L12 2Zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 5-5 1.4 1.4-6.4 6.4Z" />
            </svg>
            ייצוג בלעדי של המבוטח – ללא קשרי עבודה עם חברות ביטוח
          </p>
        </div>

        <div className="hero-rise mt-8 flex flex-col gap-4 [animation-delay:270ms] sm:flex-row sm:items-center sm:gap-6">
          <a
            href={`tel:${SITE_PHONE}`}
            onClick={() => trackCallClick()}
            className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-accent px-8 py-4 text-base font-semibold text-white shadow-btn transition duration-300 hover:bg-accent-dark hover:shadow-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px sm:w-auto md:text-lg"
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

          <p className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-accent/30 bg-white px-5 py-3 text-base font-bold text-black sm:justify-start md:text-lg">
            <svg
              className="h-5 w-5 shrink-0 text-accent md:h-6 md:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5.2l3.2 1.9" />
            </svg>
            הגעה לזירת הנזק תוך 24 שעות
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
