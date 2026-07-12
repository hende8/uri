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
