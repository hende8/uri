import SectionTitle from "../Common/SectionTitle";

// TODO: replace with real client reviews before launch (ideally Google reviews).
const testimonials = [
  {
    name: "לינדה א.",
    quote:
      "אחרי פיצוץ צנרת חברת הביטוח הציעה סכום מגוחך. אורי ליווה אותי לאורך כל הדרך, תיעד הכל מקצועית ובסוף קיבלתי פיצוי כפול ממה שהוצע בהתחלה.",
  },
  {
    name: "דנה כ.",
    quote:
      "שירות אנושי ומקצועי. הרגשתי שמישהו סוף סוף נלחם בשבילי מול חברת הביטוח ולא להפך. ממליצה בחום לכל מי שנקלע לנזק.",
  },
  {
    name: "יוסי מ.",
    quote:
      "זמין, ישר ומדויק. חוות הדעת שהוכנה הייתה קבילה ומפורטת, והתביעה נסגרה מהר יותר משחשבתי. תודה על הליווי הצמוד.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="לקוחות ממליצים"
          title="לקוחות שכבר קיבלו את מה שמגיע להם"
          center
          width="720px"
          mb="60px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex h-full flex-col rounded-sm border border-stroke-stroke bg-white p-8 shadow-two"
            >
              <div className="mb-5 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 flex-1 text-base leading-relaxed text-body-color">
                ״{item.quote}״
              </p>
              <p className="text-base font-bold text-black">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
