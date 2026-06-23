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

  trackContactClick();
}

// Fires the "Contact" Google Ads conversion. Use on tel:/wa.me/mailto clicks
// and any other "contact action". Safe to call without a url — returns
// immediately if gtag isn't loaded yet.
export function trackContactClick(url?: string): boolean {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return true;
  }

  const navigate = () => {
    if (typeof url === "string") {
      window.location.href = url;
    }
  };

  window.gtag("event", "conversion_event_contact", {
    event_callback: navigate,
    event_timeout: 2000,
  });

  return typeof url !== "string";
}
