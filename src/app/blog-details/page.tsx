import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מאמר | אורי שמאות נזקים",
  description: "מאמר מקצועי בנושא שמאות נזקי רכוש.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight">
                  מה לעשות בזירת נזק לפני שמגיע השמאי
                </h2>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4">
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
                          מאת <span>אורי דבי</span>
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
                      נזקי מים
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    השעות הראשונות אחרי גילוי הנזק הן הקריטיות ביותר לתביעה
                    שלכם. בכתבה הזו נסביר אילו צעדים כדאי לנקוט עוד לפני שהגיע
                    השמאי לזירה, כדי לשמור על הזכויות שלכם מול חברת הביטוח.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="זירת נזק"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    בכל מקרה של נזק חשוב לתעד את הזירה לפני שמתחילים לפנות.
                    צילמו את כל הנזק במכמה זוויות, רשמו את שעת האירוע ואת
                    הנסיבות, ושמרו כל מסמך, חשבונית ופריט שניזוק –
                    <strong className="text-primary">
                      {" "}אלה הראיות החשובות ביותר{" "}
                    </strong>
                    שיעמדו לרשותכם בתהליך התביעה.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    כדאי גם לפנות באופן מיידי לחברת הביטוח ולפתוח תיק תביעה.
                    בקשו במפורש לבחור שמאי מטעמכם – זוהי זכות שניתנת לכל
                    מבוטח על פי חוק.
                  </p>
                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    צ׳קליסט קצר לזירת נזק
                  </h3>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      תיעוד מצולם של כל פינה בזירה
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      רישום מדויק של שעת האירוע והנסיבות
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      שמירת חשבוניות ומסמכים רלוונטיים
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      פתיחת תיק תביעה בחברת הביטוח
                    </li>
                  </ul>
                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-body-color text-center text-base font-medium italic">
                      טיפ זהב: לעולם אל תוותרו על הזכות לבחור שמאי מטעמכם.
                      שמאי מבוטח עצמאי הוא הנציג היחיד שלכם בתהליך – וההפרש
                      בפיצוי הסופי יכול להיות עשרות אלפי שקלים.
                    </p>
                  </div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    אם אתם זקוקים לליווי מקצועי בתביעה, אנחנו כאן בשבילכם.
                    צרו קשר ונחזור אליכם תוך 24 שעות לתיאום ביקור בזירה.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        תגיות פופולריות:
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="נזקי מים" />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
