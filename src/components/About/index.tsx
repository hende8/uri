import SectionTitle from "../Common/SectionTitle";

const About = () => {
  return (
    <section id="about" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="אודות המשרד"
          paragraph="משרד שמאות עצמאי עם ניסיון של למעלה מ-15 שנה בשמאות נזקי רכוש. אנחנו פועלים אך ורק עבור המבוטח – לא עבור חברות הביטוח – ומלווים תיקים מורכבים מהפנייה הראשונה ועד קבלת הפיצוי המלא."
          center
          width="720px"
          mb="64px"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/3">
            <div className="mb-8 text-center md:mb-0">
              <h3 className="mb-3 text-3xl font-bold text-primary sm:text-4xl">
                ‎+15
              </h3>
              <p className="text-body-color text-base font-medium">
                שנות ניסיון בענף הביטוח והשמאות
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3">
            <div className="mb-8 text-center md:mb-0">
              <h3 className="mb-3 text-3xl font-bold text-primary sm:text-4xl">
                ‎+500
              </h3>
              <p className="text-body-color text-base font-medium">
                תיקי שמאות שטופלו בהצלחה
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3">
            <div className="text-center">
              <h3 className="mb-3 text-3xl font-bold text-primary sm:text-4xl">
                24/6
              </h3>
              <p className="text-body-color text-base font-medium">
                זמינות לפניות דחופות בזירת הנזק
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
