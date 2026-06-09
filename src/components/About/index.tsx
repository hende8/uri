import SectionTitle from "../Common/SectionTitle";

const stats = [
  { value: "35", label: "שנות שירות במערך הביטחון, צה״ל ומשטרת ישראל" },
  { value: "24/6", label: "זמינות לפניות דחופות בזירת הנזק" },
  { value: "100%", label: "פעולה עבור המבוטח – לא עבור חברות הביטוח" },
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
          center
          width="720px"
          mb="40px"
        />

        <div className="mx-auto mb-16 max-w-[720px] space-y-5 text-center text-base leading-relaxed! text-body-color md:text-lg">
          <p>
            משרד שמאות עצמאי שפועל אך ורק עבור המבוטח – לא עבור חברות הביטוח.
          </p>
          <p className="text-lg font-bold text-primary md:text-xl">
            בעל הכשרה מקצועית כשמאי רכוש מוסמך
          </p>
          <p>
            מאחורי המשרד עומד אורי דבי — שמאי רכוש מוסמך, בוגר מכללת השמאים
            ברמת גן, הנדסאי אלקטרוניקה ומחשבים, ובעל 35 שנות שירות במערך
            הביטחון, צה״ל ומשטרת ישראל בניהול פרויקטי תחזוקה ותקשורת.
          </p>
          <p>
            אנחנו מלווים תיקים מורכבים מהפנייה הראשונה ועד קבלת הפיצוי המלא.
          </p>
        </div>

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
