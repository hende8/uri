import SectionHeading from "../Common/SectionHeading";

const proofPoints = [
  "שמאות בלתי תלויה",
  "תיעוד מקצועי בזירה",
  "ייצוג מול חברת הביטוח",
  "חוות דעת קבילות",
  "טיפול בתביעות מורכבות",
  "זמינות לאורך כל התהליך",
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="max-w-[900px]">
          <SectionHeading
            title="אלחם על הפיצוי שלכם"
            paragraph="פועל כסניגור המקצועי שלכם מול חברות הביטוח. שיטות עבודה מדויקות וניסיון מקצועי מבטיחים שכל נזק מתועד, מוערך ומפוצה במלואו – בלי שתצטרכו להתמודד עם הבירוקרטיה לבד."
          />
        </div>

        <ul className="mt-10 grid gap-x-10 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {proofPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 border-t border-accent/25 py-5 text-base font-semibold text-dark md:text-lg"
            >
              <svg
                className="h-5 w-5 shrink-0 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.55 17.6 4 12.05l1.42-1.42 4.13 4.13 9.03-9.03L20 7.15 9.55 17.6Z" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
