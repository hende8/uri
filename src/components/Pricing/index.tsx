import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="חבילות שירות גמישות לכל סוג של נזק"
          paragraph="בחרו את החבילה המתאימה לסוג ולהיקף הנזק שלכם. כל מחיר כולל ביקור בזירה, דוח שמאות מסודר וייעוץ ראשוני ללא התחייבות."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="דוח ראשוני"
            price="1,200"
            duration="ש״ח"
            subtitle="מתאים לנזקים קטנים – הצפה נקודתית, נזילה או אירוע בודד בדירה."
          >
            <OfferList text="ביקור בזירת הנזק" status="active" />
            <OfferList text="תיעוד מצולם ומסמכים" status="active" />
            <OfferList text="דוח שמאות בסיסי" status="active" />
            <OfferList text="ייעוץ ראשוני בטלפון" status="active" />
            <OfferList text="ניהול מו״מ מול הביטוח" status="inactive" />
            <OfferList text="ייצוג בהליכים משפטיים" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="תיק מלא"
            price="2,500"
            duration="ש״ח"
            subtitle="הליווי המקצועי הפופולרי ביותר – משלב הביקור ועד קבלת הפיצוי."
          >
            <OfferList text="ביקור בזירת הנזק" status="active" />
            <OfferList text="תיעוד מצולם ומסמכים" status="active" />
            <OfferList text="דוח שמאות מקיף" status="active" />
            <OfferList text="ייעוץ לאורך כל התהליך" status="active" />
            <OfferList text="ניהול מו״מ מול הביטוח" status="active" />
            <OfferList text="ייצוג בהליכים משפטיים" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="חוות דעת לבית משפט"
            price="4,800"
            duration="ש״ח"
            subtitle="חוות דעת מומחה לצרכי הליכים משפטיים, בוררויות וייצוג מקצועי."
          >
            <OfferList text="ביקור בזירת הנזק" status="active" />
            <OfferList text="תיעוד מצולם ומסמכים" status="active" />
            <OfferList text="דוח שמאות מקיף" status="active" />
            <OfferList text="ייעוץ לאורך כל התהליך" status="active" />
            <OfferList text="ניהול מו״מ מול הביטוח" status="active" />
            <OfferList text="ייצוג בהליכים משפטיים" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
