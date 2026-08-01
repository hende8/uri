import posthog from "posthog-js";

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
  if (typeof window === "undefined") {
    return;
  }

  posthog.capture("lead_submitted", { form_id: "contact" });

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      form_id: "contact",
    });
  }
}

// Fires a Google Ads conversion event. Safe to call without a url — returns
// immediately if gtag isn't loaded yet. When a url is passed it navigates via
// event_callback so the conversion has a chance to register before leaving.
function fireAdsConversion(eventName: string, url?: string): boolean {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return true;
  }

  const navigate = () => {
    if (typeof url === "string") {
      window.location.href = url;
    }
  };

  window.gtag("event", eventName, {
    event_callback: navigate,
    event_timeout: 2000,
  });

  return typeof url !== "string";
}

// Google Ads conversion for WhatsApp clicks.
export function trackWhatsAppClick(url?: string): boolean {
  return fireAdsConversion("conversion_event_whatsapp", url);
}

// Google Ads conversion for phone-call (tel:) clicks.
export function trackCallClick(url?: string): boolean {
  return fireAdsConversion("conversion_event_phone_call", url);
}

// Generic "Contact" conversion — used for other contact actions (e.g. email).
export function trackContactClick(url?: string): boolean {
  return fireAdsConversion("conversion_event_contact", url);
}
