const GOOGLE_ADS_CONVERSION_ID = "AW-714018549";
// TODO: replace with the Conversion Label (the string after the slash in the
// Event snippet: send_to: 'AW-714018549/XXXXXXXXX')
const GOOGLE_ADS_CONVERSION_LABEL = "YYYYYYYYYYYYYYYYYYY";

type GtagFn = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackContactFormSubmit() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
  });

  window.gtag("event", "generate_lead", {
    form_id: "contact",
  });
}
