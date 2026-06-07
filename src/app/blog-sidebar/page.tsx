import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמר | אורי שמאות נזקים",
  description: "מאמר מקצועי בנושא שמאות נזקי רכוש.",
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  5 טעויות נפוצות בהגשת תביעת ביטוח לנזקי שריפה
                </h1>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="ms-10 mb-5 flex items-center">
                      <div className="ms-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="מחבר"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="text-body-color mb-1 text-base font-medium">
                          מאת <span>אורי כהן</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color ms-5 flex items-center text-base font-medium">
                        12 בינואר 2026
                      </p>
                      <p className="text-body-color ms-5 flex items-center text-base font-medium">
                        50 צפיות
                      </p>
                      <p className="text-body-color flex items-center text-base font-medium">
                        35 שיתופים
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                    >
                      שריפה
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    תביעת ביטוח לנזקי שריפה היא תהליך מורכב שדורש דיוק, תיעוד
                    מקצועי וידע מקדים. ריכזנו את הטעויות הנפוצות ביותר שאנחנו
                    רואים אצל מבוטחים – וכיצד נמנעים מהן.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src="/images/blog/blog-details-01.jpg"
                        alt="נזקי שריפה"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    הטעות הראשונה והנפוצה ביותר היא לפנות את הזירה לפני שהיא
                    תועדה כראוי.
                    <strong className="text-primary dark:text-white">
                      {" "}אסור לזרוק או לפנות פריטים שניזוקו{" "}
                    </strong>
                    לפני שהשמאי הגיע ותיעד את הנזק. הראיות בזירה הן הבסיס
                    לכל חוות דעת מקצועית.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    הטעות השנייה היא להסתפק בשמאי שמטעם חברת הביטוח. שמאי
                    הביטוח עובד בעבור החברה ולא בעבורכם – לכן חשוב להעמיד
                    שמאי מבוטח עצמאי שיגן על האינטרסים שלכם.
                  </p>
                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    מה לעשות במקום
                  </h3>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      שמרו את הזירה במצבה עד הגעת השמאי
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      תעדו כל פריט שניזוק במצולם וברשימה
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      העמידו שמאי מבוטח עצמאי מטעמכם
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      התעדכנו על תנאי הפוליסה שלכם בעיון
                    </li>
                  </ul>
                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-body-color text-center text-base font-medium italic">
                      ההפרש בין תביעה שמנוהלת בעצמאות לתביעה עם ליווי שמאי
                      מקצועי יכול להגיע לעשרות אחוזים מסכום הפיצוי הסופי –
                      ולעיתים אף יותר.
                    </p>
                  </div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    לסיכום: שמירה על הזירה, תיעוד מקצועי וליווי של שמאי
                    מבוטח עצמאי הם המפתח לתביעת ביטוח שתסתיים בפיצוי הוגן.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        תגיות פופולריות:
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="שריפה" />
                        <TagButton text="ביטוח" />
                        <TagButton text="טיפים" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        שתפו את המאמר:
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mt-12 mb-10 rounded-xs bg-white p-6 lg:mt-0 dark:shadow-none">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="חיפוש מאמר..."
                    className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary me-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                  />
                  <button
                    aria-label="כפתור חיפוש"
                    className="bg-primary flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xs text-white"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  מאמרים קשורים
                </h3>
                <ul className="p-8">
                  <li className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedPost
                      title="כיצד מתמודדים עם תביעת נזק שנדחתה"
                      image="/images/blog/post-01.jpg"
                      slug="#"
                      date="12 בפבר׳ 2026"
                    />
                  </li>
                  <li className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedPost
                      title="המדריך לבחירת פוליסת ביטוח מבנה ותכולה"
                      image="/images/blog/post-02.jpg"
                      slug="#"
                      date="15 בפבר׳ 2026"
                    />
                  </li>
                  <li>
                    <RelatedPost
                      title="מתי כדאי לפנות לשמאי מבוטח עצמאי"
                      image="/images/blog/post-03.jpg"
                      slug="#"
                      date="05 ביוני 2026"
                    />
                  </li>
                </ul>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  קטגוריות פופולריות
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="#0"
                      className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium"
                    >
                      נזקי מים
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium"
                    >
                      נזקי שריפה
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium"
                    >
                      פריצות וגניבות
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium"
                    >
                      נזקי טבע
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="text-body-color hover:text-primary mb-3 inline-block text-base font-medium"
                    >
                      תביעות ביטוח
                    </a>
                  </li>
                </ul>
              </div>
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  תגיות פופולריות
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                  <TagButton text="ביטוח" />
                  <TagButton text="מים" />
                  <TagButton text="שריפה" />
                  <TagButton text="תביעות" />
                  <TagButton text="טיפים" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
