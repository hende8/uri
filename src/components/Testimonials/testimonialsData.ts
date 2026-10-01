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
    name: "לינדה",
    avatar: "/images/testimonials-people/linda.jpg",
    quote:
      "מושלם, שירות מושלם! המחיר שלו לדעתי היה טוב. הוא היה מכיל, מבין, מתחשב, בן אדם עם לב. אין לי מילה אחת רעה להגיד עליו.",
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
  {
    name: "טולי",
    avatar: "/images/testimonials-people/tuli.jpg",
    quote:
      "הוא היה מעולה, זמין ועמד בזמנים. גם לאחר מתן הדוח הוא עזר לנו וענה על שאלות.",
    photos: [
      {
        src: "/images/cases/tuli-ceiling-cavity.jpg",
        alt: "חלל תקרה פתוח עם טיח מתפורר וצנרת חשופה",
      },
      {
        src: "/images/cases/tuli-bathroom-mold.jpg",
        alt: "עובש שחור בגומחת שירותים",
      },
    ],
  },
  {
    name: "רון",
    avatar: "/images/testimonials-people/ron.jpg",
    quote:
      "הייתי מרוצה מאוד. אורי אדיב, מקצועי וענייני. הגיע בזמן, שלח את הדוח במהירות והסביר הכל בצורה ברורה. ממליץ בחום!",
    photos: [
      {
        src: "/images/cases/ron-lintel-crack.jpg",
        alt: "סדק וטיח מתפורר מעל משקוף חלון",
      },
      {
        src: "/images/cases/ron-moisture-meter-window.jpg",
        alt: "מדידת רטיבות בקיר ליד החלון",
      },
    ],
  },
];

export default testimonialsData;
