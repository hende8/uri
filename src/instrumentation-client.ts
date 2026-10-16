import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  // Session replay and surveys pull ~98KB of extra script on first paint,
  // which on throttled mobile was a measurable share of a 7.8s LCP. The site
  // only needs event capture, so both are off.
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    defaults: "2025-05-24",
    disable_session_recording: true,
    disable_surveys: true,
  });
  posthog.register({ site: "urishamaut" });
}
