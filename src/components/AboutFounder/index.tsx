import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutFounder = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              eyebrow="הכירו את המשרד"
              title="אורי דבי - שמאי נזקי רכוש מוסמך"
              paragraph=" אני מלווה בעלי דירות, בתים ועסקים בכל שלבי תביעת הביטוח – מהבדיקה הראשונית בזירת הנזק, דרך תיעוד מקצועי והכנת חוות דעת, ועד מימוש מלא של הפיצוי המגיע. המשרד פועל אך ורק עבור המבוטח, ללא תלות בחברות הביטוח."
              mb="24px"
            />
            <p className="mb-8 text-lg font-bold text-primary md:text-xl">
              בעל הכשרה מקצועית כשמאי רכוש מוסמך
            </p>
            <ul className="space-y-3 text-base leading-relaxed text-body-color sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                ייצוג בלעדי של המבוטח - ללא קשרי עבודה עם חברות ביטוח.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                התמחות בנזקי מים, אש, פריצה ונזקי טבע במגזר הפרטי והעסקי.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                ליווי אישי לאורך כל התהליך, עם דיווחים שוטפים בכל שלב.
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mt-12 aspect-[4/5] max-w-[440px] overflow-hidden rounded-sm shadow-lg lg:mt-0">
              <Image
                src="/images/about/uri-about.png"
                alt="אורי דבי - שמאי נזקי רכוש מוסמך"
                fill
                sizes="(max-width: 992px) 100vw, 440px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[560px]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md">
            <Image
              src="/images/hero/uri-hero.png"
              alt="אורי דבי בזירת בדיקה, מתעד נזק עבור תביעת ביטוח"
              fill
              sizes="(max-width: 640px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
