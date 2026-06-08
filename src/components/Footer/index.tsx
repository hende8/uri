"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-stroke-stroke bg-white pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link
                href="/"
                aria-label="אורי שמאות נזקים — דף הבית"
                className="mb-8 inline-block"
              >
                <Image
                  src="/logo-lockup.png"
                  alt="אורי שמאות"
                  width={1774}
                  height={887}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color">
                משרד שמאות עצמאי המתמחה בשמאות נזקי רכוש לבעלי דירות, בתים
                פרטיים ובעלי עסקים. אנחנו דואגים שתקבלו את מלוא הפיצוי
                המגיע לכם מחברת הביטוח.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://wa.me/972506273002"
                  aria-label="ווטסאפ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color duration-300 hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
                  </svg>
                </a>
                <a
                  href="tel:+972506273002"
                  aria-label="טלפון"
                  className="text-body-color duration-300 hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </a>
                <a
                  href="mailto:office@example.co.il"
                  aria-label="דוא״ל"
                  className="text-body-color duration-300 hover:text-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="relative mb-8 pb-3 text-lg font-bold text-black before:absolute before:bottom-0 before:end-0 before:h-[2px] before:w-10 before:bg-accent">
                ניווט מהיר
              </h2>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    אודות
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    תחומי שמאות
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    מאמרים
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="relative mb-8 pb-3 text-lg font-bold text-black before:absolute before:bottom-0 before:end-0 before:h-[2px] before:w-10 before:bg-accent">
                מידע משפטי
              </h2>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    תקנון
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    מדיניות פרטיות
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    נגישות
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="relative mb-8 pb-3 text-lg font-bold text-black before:absolute before:bottom-0 before:end-0 before:h-[2px] before:w-10 before:bg-accent">
                יצירת קשר
              </h2>
              <ul>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    טופס פנייה
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:+972506273002"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    050-6273002
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:office@example.co.il"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary"
                  >
                    office@example.co.il
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-stroke-stroke"></div>
        <div className="py-8">
          <p className="text-center text-sm text-body-color">
            © {new Date().getFullYear()} אורי שמאות נזקים. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
