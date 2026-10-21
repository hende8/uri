export type Testimonial = {
  name: string;
  quote: string;
  avatar?: string;
  photos?: { src: string; alt: string }[];
};

// TODO(photos): `avatar` holds the reviewer's own portrait; without one the card
// falls back to a lettered circle. `photos` are that reviewer's damage photos.
const testimonialsData: Testimonial[] = [
  {
    name: "לינדה חזן",
    avatar: "/images/testimonials-people/linda.jpg",
    quote:
      "בשיא המלחמה עם איראן רקטה פגעה ממש ליד הבית וגרמה נזק קשה לתקרה ולקיר הסלון. אורי היה מקצועי, הגיע בדיוק בזמן שסיכמנו ונתן מחיר הוגן לעומת אחרים שבדקתי. השירות שלו ברמה גבוה. תוך 48 שעות הוא שלח דו״ח מפורט.",
    photos: [
      {
        src: "/images/cases/rocket-strike-ceiling.jpg",
        alt: "תקרה קרושה ונזק מבני בעקבות פגיעת רקטה",
      },
    ],
  },
  {
    name: "שלום חיון",
    avatar: "/images/testimonials-people/tuli.jpg",
    quote:
      "אחרי פריצה למשרד, הזמנו את אורי והצוות שלו. והוא העביר לי את הדוח במהירות ועזר לי לאורך כל הדרך מול חברת הביטוח.",
    photos: [
      {
        src: "/images/cases/burglary-ransacked-office.jpg",
        alt: "משרד הפוך לאחר פריצה",
      },
    ],
  },
  {
    name: "רון דביר",
    avatar: "/images/testimonials-people/ron.jpg",
    quote:
      "צינור התפוצץ בתוך הקיר ונוצרה רטיבות ליד החלון אצל השכן למטה. אורי הגיע לדירה והעריך את הנזק ואף המליץ על הצעדים לתיקון. קיבלתי דוח מלא, מפורט ומקצועי.",
    photos: [
      {
        src: "/images/cases/ron-moisture-meter-window.jpg",
        alt: "מדידת רטיבות בקיר ליד החלון",
      },
      {
        src: "/images/cases/burst-pipe-floor.webp",
        alt: "צנרת חשופה בתעלה שנחפרה ברצפה בעקבות פיצוץ צנרת",
      },
    ],
  },
  {
    name: "לילי ברוד",
    quote:
      "לאחר ששריפה פרצה במטבח שלי, הזמנתי את אורי להערכה והוא היה קשוב לכל שאלה ונתן מענה מקצועי ומהיר. זה היה חשוב במיוחד כי הייתי צריך לתקן בדחיפות את הנזק. הוא ממשיך ללוות אותנו מול חברת הביטוח עד לסיום התהליך.",
    photos: [
      {
        src: "/images/cases/fire-stove-kitchen.jpg",
        alt: "מטבח שרוף לאחר שריפה",
      },
    ],
  },
  {
    name: "אתי דהן",
    quote:
      "כתוצאה מרטיבות בקיר בבית שגרמה לעובש לאורך הקיר, הוא בדק הכל ברצינות ונתן דוח מפורט מול חברת הביטוח. מאוד מקצועי ואמין, הרגשתי שקיבלתי מענה 10/10.",
    photos: [
      {
        src: "/images/cases/mold-wall-baseboard.jpg",
        alt: "עובש שחור לאורך תחתית הקיר",
      },
      {
        src: "/images/cases/flood-tiled-floor.jpg",
        alt: "הצפה ושאיבת מים מתחת לריצוף",
      },
    ],
  },
];

export default testimonialsData;
