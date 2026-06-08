import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const steps = [
  {
    id: "01",
    title: "תגובה מהירה בזירה",
    body: "הגעה לזירת הנזק תוך 24 שעות ממועד הפנייה, על מנת לתעד את הנזק בעודו טרי ולמנוע אובדן ראיות חשובות לתביעה.",
  },
  {
    id: "02",
    title: "ייצוג מקצועי",
    body: "אנחנו מנהלים בעבורכם את כל המשא ומתן מול חברת הביטוח ודואגים שתקבלו את הפיצוי המקסימלי לפי תנאי הפוליסה.",
  },
  {
    id: "03",
    title: "שקיפות מלאה",
    body: "כל שלב בתהליך מלווה בדוח מפורט וברור. אתם תמיד יודעים היכן עומד התיק וכמה צפוי הפיצוי שיתקבל.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="התהליך שלנו"
                fill
                className="drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <SectionTitle
                eyebrow="תהליך העבודה"
                title="ליווי מקצועי מהפנייה הראשונה ועד הפיצוי"
                paragraph=""
                mb="40px"
              />
              {steps.map((step) => (
                <div key={step.id} className="mb-8 flex gap-5 last:mb-0">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 text-base font-bold text-primary">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
