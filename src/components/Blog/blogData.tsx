import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "מה לעשות בזירת נזק לפני שמגיע השמאי",
    paragraph:
      "השעות הראשונות אחרי נזק קריטיות לתביעה. ריכזנו את הצעדים המרכזיים שכל בעל נכס חייב לעשות – כדי לשמור על הזכויות מול חברת הביטוח.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "אורי כהן",
      image: "/images/blog/author-03.png",
      designation: "שמאי רכוש מוסמך",
    },
    tags: ["מים"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "5 טעויות נפוצות בהגשת תביעת ביטוח לנזקי שריפה",
    paragraph:
      "כך נמנעים מהטעויות שיכולות לקצץ את הפיצוי בעשרות אחוזים. מדריך מעשי למבוטחים שמתמודדים עם נזקי שריפה ועשן בבית או בעסק.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "אורי כהן",
      image: "/images/blog/author-02.png",
      designation: "שמאי רכוש מוסמך",
    },
    tags: ["שריפה"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "ההבדל בין שמאי מטעם הביטוח לשמאי מבוטח עצמאי",
    paragraph:
      "למה חשוב להעמיד שמאי משלכם מול שמאי הביטוח, ומה התפקיד של כל אחד מהם בתהליך הערכת הנזק. כל מה שצריך לדעת לפני שמגישים תביעה.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "אורי כהן",
      image: "/images/blog/author-03.png",
      designation: "שמאי רכוש מוסמך",
    },
    tags: ["ביטוח"],
    publishDate: "2026",
  },
];
export default blogData;
