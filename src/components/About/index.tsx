import SectionTitle from "../Common/SectionTitle";

const stats = [
  { value: "‎+15", label: "שנות ניסיון בענף הביטוח והשמאות" },
  { value: "‎+500", label: "תיקי שמאות שטופלו בהצלחה" },
  { value: "24/6", label: "זמינות לפניות דחופות בזירת הנזק" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-light py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          eyebrow="אודות המשרד"
          title="אודות המשרד"
          paragraph="משרד שמאות עצמאי עם ניסיון של למעלה מ-15 שנה בשמאות נזקי רכוש. אנחנו פועלים אך ורק עבור המבוטח – לא עבור חברות הביטוח – ומלווים תיקים מורכבים מהפנייה הראשונה ועד קבלת הפיצוי המלא."
          center
          width="720px"
          mb="64px"
        />

        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-sm border border-stroke-stroke bg-white p-8 text-center"
            >
              <span className="absolute top-0 start-1/2 h-[3px] w-12 -translate-x-1/2 rounded-b-sm bg-accent" />
              <h3 className="mb-3 text-4xl font-extrabold text-primary sm:text-[44px]">
                {stat.value}
              </h3>
              <p className="text-base font-medium text-body-color">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
