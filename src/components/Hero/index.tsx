"use client";
import Image from "next/image";

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
              מלווים בעלי דירות, בתים ועסקים בתביעות נזקי מים, שריפה, פריצה ונזקי
              טבע מול חברות הביטוח - מהבדיקה הראשונית בזירה, דרך תיעוד מקיף של
              הנזק ועד קבלת הפיצוי.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
