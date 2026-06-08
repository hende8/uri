import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const WhyChooseUs = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-base font-medium text-dark">
      <span className="ms-4 flex h-[28px] w-[28px] items-center justify-center rounded-sm bg-primary text-white">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="why-us"
      className="bg-gray-light py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              eyebrow="למה לבחור בנו"
              title="שמאות עצמאית שמעמידה את האינטרס שלכם במרכז"
              paragraph="אנחנו פועלים כסניגור המקצועי שלכם מול חברות הביטוח. בעזרת ניסיון של למעלה מ-15 שנה בענף, אנחנו מבטיחים שכל נזק מתועד, מוערך ומפוצה במלואו – בלי שתצטרכו להתמודד עם הבירוקרטיה לבד."
              mb="44px"
            />

            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="שמאות בלתי תלויה" />
                  <List text="תיעוד מקצועי בזירה" />
                  <List text="ייצוג מול חברת הביטוח" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="חוות דעת קבילות" />
                  <List text="טיפול בתביעות מורכבות" />
                  <List text="זמינות לאורך כל התהליך" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-square max-w-[500px] overflow-hidden rounded-sm lg:ml-0">
              <Image
                src="/images/about/about-image-blueprint.jpg"
                alt="תכנית אדריכלית"
                fill
                sizes="(max-width: 992px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
