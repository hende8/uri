import SectionHeading from "../Common/SectionHeading";

const steps = [
  {
    title: "תגובה מהירה בזירה",
    body: "הגעה לזירת הנזק תוך 24 שעות ממועד הפנייה, על מנת לתעד את הנזק בעודו טרי ולמנוע אובדן ראיות חשובות לתביעה.",
  },
  {
    title: "ייצוג מקצועי",
    body: "אני מנהל בעבורכם את כל המשא ומתן מול חברת הביטוח ודואג שתקבלו את הפיצוי המקסימלי לפי תנאי הפוליסה.",
  },
  {
    title: "שקיפות מלאה",
    body: "כל שלב בתהליך מלווה בדוח מפורט וברור. אתם תמיד יודעים היכן עומד התיק וכמה צפוי הפיצוי שיתקבל.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="border-t border-black/10 bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionHeading title="ליווי מקצועי מהפנייה הראשונה ועד הפיצוי" />

        <ol className="mt-12 grid gap-x-12 gap-y-9 md:mt-16 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.title} className="border-t border-black/10 pt-6">
              <h3 className="text-xl leading-snug font-bold text-black md:text-2xl">
                {step.title}
              </h3>
              <p className="text-body-color mt-3 max-w-[46ch] text-base leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
