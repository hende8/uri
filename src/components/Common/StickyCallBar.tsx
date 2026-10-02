"use client";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";
import { SITE_PHONE } from "@/lib/site";

const PHONE_DISPLAY = "050-6273002";
const WHATSAPP_NUMBER = "972506273002";
const PREFILLED_MESSAGE = "היי, הגעתי מהאתר אני אשמח להתייעץ";

const StickyCallBar = () => {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE,
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-accent pb-[env(safe-area-inset-bottom)]">
      <div className="relative flex h-[76px] items-center justify-center md:h-[84px]">
        <a
          href={`tel:${SITE_PHONE}`}
          onClick={() => trackCallClick()}
          className="flex flex-col items-center justify-center px-20 py-2 text-white transition active:opacity-80"
        >
          <span className="flex items-center gap-2.5">
            <svg
              className="h-5 w-5 shrink-0 md:h-6 md:w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            <span
              dir="ltr"
              className="text-[1.375rem] font-extrabold leading-tight tracking-wide md:text-[1.625rem]"
            >
              {PHONE_DISPLAY}
            </span>
          </span>
          <span className="mt-1 text-base font-bold leading-tight md:text-lg">
            חייג עכשיו לייעוץ חינם
          </span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שליחת וואטסאפ"
          onClick={() => trackWhatsAppClick()}
          className="absolute top-1/2 start-3 flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition active:bg-[#1EBE5D] md:start-5 md:h-16 md:w-16"
        >
          <svg
            className="h-8 w-8 md:h-9 md:w-9"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
