import Image from "next/image";
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
    <section id="why-us" className="bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading
              title="אלחם על הפיצוי שלכם"
              paragraph="פועל כסניגור המקצועי שלכם מול חברות הביטוח. שיטות עבודה מדויקות וניסיון מקצועי מבטיחים שכל נזק מתועד, מוערך ומפוצה במלואו – בלי שתצטרכו להתמודד עם הבירוקרטיה לבד."
            />

            <ul className="mt-10 grid sm:grid-cols-2 sm:gap-x-10">
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 border-t border-black/10 py-4 text-base font-medium text-dark md:text-lg"
                >
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* TODO(photo): replace with a real photo from one of Uri's jobs. */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/about/about-image-blueprint.jpg"
              alt="תכנית אדריכלית"
              fill
              sizes="(max-width: 992px) 100vw, 460px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
