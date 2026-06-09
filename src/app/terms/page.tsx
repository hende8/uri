import { Metadata } from "next";

export const metadata: Metadata = {
  title: "תקנון אתר | אורי שמאות נזקים",
  description:
    "תקנון השימוש באתר אורי שמאות נזקים – תנאי השימוש, אחריות, קניין רוחני וסמכות שיפוט.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: "/terms",
  },
};

const TermsPage = () => {
  return (
    <main className="pt-[100px] md:pt-[120px]">
      <section className="bg-white py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-[820px]">
            <span className="mb-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-secondary">
              <span className="accent-rule" />
              מידע משפטי
            </span>
            <h1 className="mb-10 text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl">
              תקנון אתר
            </h1>

            <div className="space-y-10 text-base leading-relaxed text-body-color md:text-lg">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  מבוא
                </h2>
                <div className="space-y-4">
                  <p>
                    ברוכים הבאים לאתר אורי שמאות נזקים (להלן: ״האתר״), המופעל על
                    ידי אורי דבי, שמאי רכוש מוסמך (להלן: ״המשרד״).
                  </p>
                  <p>
                    האתר מיועד לספק מידע מקצועי בתחום שמאות נזקי רכוש, להעניק
                    שירותי ייעוץ ראשוני והכוונה, ולהוות פלטפורמה פרסומית בלבד.
                    האתר אינו משמש למכירה של מוצרים או שירותים באופן ישיר.
                  </p>
                  <p>
                    השימוש באתר זה כפוף לתנאי תקנון אתר המובאים להלן, וכל שימוש
                    באתר מהווה הסכמה מלאה מצד המשתמש לתנאים ולהוראות הכלולות בו.
                    התקנון עשוי להתעדכן מעת לעת, והאחריות לעקוב אחר השינויים
                    מוטלת על המשתמשים.
                  </p>
                  <p>
                    השימוש בתקנון בלשון זכר הוא מטעמי נוחות בלבד, אך התקנון
                    מתייחס באופן שווה לכל המגדרים.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  השירותים הניתנים באתר
                </h2>
                <div className="space-y-4">
                  <p>
                    האתר מציע מידע מקצועי וייעוץ בתחום שמאות נזקי רכוש, הכולל:
                  </p>
                  <ul className="space-y-3 ps-6">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      מתן מענה לשאלות כלליות בתחום שמאות נזקי רכוש – נזקי מים,
                      אש, פריצה ונזקי טבע.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      הכוונה וייעוץ ראשוני בנוגע לתהליך הגשת תביעה מול חברת
                      הביטוח.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      פרסום מאמרים ומידע עדכני בתחום שמאות הנזקים והתביעות.
                    </li>
                  </ul>
                  <p>
                    השירותים המוצעים באתר כוללים ייעוץ מקוון ראשוני בלבד. תיאום
                    ייעוץ מעמיק או שירותי שמאות בפועל יתבצעו בנפרד ובאופן שאינו
                    תלוי באתר. כל פנייה לייעוץ תתבצע על פי דרכי ההתקשרות
                    המפורטות להלן.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  אחריות משפטית ושימוש באתר
                </h2>
                <p>
                  כל המידע המוצג באתר נועד לצרכים כלליים ואינו מהווה תחליף לייעוץ
                  מקצועי מעמיק או לתהליך שמאות פרטני ומחייב. המשרד אינו אחראי
                  לכל נזק ישיר או עקיף שייגרם כתוצאה מהסתמכות על המידע באתר או
                  כתוצאה מהשימוש בו.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  זמינות השירותים והגבלת אחריות
                </h2>
                <p>
                  המשרד שומר לעצמו את הזכות להפסיק, לשנות או לעדכן את השירותים
                  המוצעים באתר בכל עת, וללא הודעה מוקדמת. המשרד אינו מתחייב
                  לזמינות מלאה של האתר או השירותים בכל זמן, ואינו אחראי לכל
                  עיכוב או הפרעה בשירותים הנובעים מנסיבות שאינן בשליטתו.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  מדיניות פרטיות
                </h2>
                <p>
                  המשרד מתחייב לשמור על פרטיות המשתמשים בהתאם לדין. פרטי
                  המשתמשים שיימסרו במסגרת יצירת הקשר או הבקשה לייעוץ יישמרו
                  אצל המשרד ולא יועברו לצדדים שלישיים, למעט אם יינתן אישור מפורש
                  לכך מצד המשתמש או אם הדבר נדרש לפי דין.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  קניין רוחני
                </h2>
                <p>
                  כל זכויות הקניין הרוחני באתר, לרבות עיצוב האתר, טקסטים,
                  תמונות, סימני מסחר וכל חומר אחר, הן בבעלות בלעדית של המשרד.
                  אין לשכפל, להפיץ, להעתיק, או לעשות כל שימוש אחר בתכנים
                  המופיעים באתר ללא אישור מפורש ובכתב מהמשרד.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  סמכות שיפוט
                </h2>
                <p>
                  כל מחלוקת שתתעורר עקב השימוש באתר זה תידון בהתאם לדיני מדינת
                  ישראל, ובבתי המשפט המוסמכים בישראל בלבד.
                </p>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
                  יצירת קשר
                </h2>
                <p>
                  לכל שאלה או בקשה לייעוץ ניתן ליצור קשר עם המשרד בטלפון{" "}
                  <a
                    href="tel:+972506273002"
                    className="font-semibold text-primary hover:text-secondary"
                  >
                    050-6273002
                  </a>{" "}
                  או במייל{" "}
                  <a
                    href="mailto:debbiuri6@gmail.com"
                    className="font-semibold text-primary hover:text-secondary"
                  >
                    debbiuri6@gmail.com
                  </a>
                  . המשרד זמין לפניות בשעות הפעילות הרשמיות.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
