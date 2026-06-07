import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0L12 2.69z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "נזקי מים וצנרת",
    paragraph:
      "איתור מקור הנזילה, תיעוד מקצועי של נזקי הצפה, פיצוצי צנרת ורטיבות בקירות, והערכה מדויקת של עלויות התיקון והשיקום.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current">
        <path d="M12 22c5 0 8-3.5 8-7.5 0-2.5-1.5-4-3-5.5C15 7 14 4.5 14 2c-3 1.5-6 5-6 8 0 1.5 0.5 2.5 0.5 2.5C7 12 5 13.5 5 16c0 3.5 3 6 7 6z" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "נזקי שריפה ועשן",
    paragraph:
      "הערכה מקצועית של נזקי שריפה, פיח ועשן במבנה ובתכולה, כולל ניתוח עלויות ניקוי, שיקום והחלפת פריטים שנפגעו.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current">
        <rect x="3" y="11" width="18" height="11" rx="2" strokeWidth="1.5" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeWidth="1.5" />
      </svg>
    ),
    title: "נזקי פריצה וגניבה",
    paragraph:
      "אומדן מדויק של נזקי פריצה, ונדליזם ואובדן רכוש, כולל תיעוד מקצועי לחברת הביטוח על מנת לוודא פיצוי מקסימלי.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current">
        <path d="M3 12c3-1 4-4 9-4s6 3 9 4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 17c3-1 4-4 9-4s6 3 9 4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 7c3-1 4-4 9-4s6 3 9 4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "נזקי טבע ורעידות אדמה",
    paragraph:
      "ניתוח נזקים שנגרמו על ידי סופות, ברד, שיטפונות ורעידות אדמה, כולל הערכת נזק קונסטרוקטיבי ולקוי בתשתיות.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current">
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.5 0 4.7 1 6.4 2.6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "ליווי מול חברת הביטוח",
    paragraph:
      "ייצוג מלא של המבוטח מול חברת הביטוח: מילוי הטפסים, ניהול המשא ומתן ומעקב צמוד עד לקבלת הפיצוי המלא.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 2v6h6" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 13h6M9 17h6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "חוות דעת לבית משפט",
    paragraph:
      "חוות דעת מומחה לצרכי הליכים משפטיים, בוררויות וייצוג מקצועי בבתי משפט, בעמידה בכללי הראיות וההלכה הפסוקה.",
  },
];
export default featuresData;
