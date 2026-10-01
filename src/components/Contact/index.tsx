"use client";

import WhatsAppButton from "@/components/Common/WhatsAppButton";
import { trackCallClick, trackContactFormSubmit } from "@/lib/analytics";
import { SITE_PHONE } from "@/lib/site";
import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// Mocked values sent to the API for fields not exposed in the UI.
// Replace once the contact backend supports name + phone only.
const MOCK_SUBJECT = "פנייה חדשה מאתר אורי שמאות";
const MOCK_MESSAGE = "פנייה דרך טופס יצירת קשר באתר.";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          subject: MOCK_SUBJECT,
          message: MOCK_MESSAGE,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error ?? "שליחת הפנייה נכשלה. נסו שוב מאוחר יותר.");
      }

      setStatus("success");
      setName("");
      setPhone("");
      trackContactFormSubmit();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "אירעה שגיאה. נסו שוב מאוחר יותר.",
      );
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="bg-black py-14 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
          <div>
            <h2 className="max-w-[18ch] text-[1.75rem] font-extrabold leading-[1.14] tracking-[0] text-white sm:text-[2.125rem] md:text-[2.625rem] lg:text-[3.125rem]">
              ספרו לי מה קרה
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/75 md:text-lg">
              השאירו פרטים ואחזור אליכם בהקדם לתיאום ביקור בזירה וייעוץ ראשוני
              ללא התחייבות.
            </p>
            <a
              href={`tel:${SITE_PHONE}`}
              onClick={() => trackCallClick()}
              className="mt-8 inline-flex items-center gap-3 border-t border-white/20 pt-6 text-2xl font-bold text-white transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-3xl"
            >
              <span dir="ltr">050-6273002</span>
            </a>
            <br />
            <p className="mt-5 inline-flex items-center gap-2.5 rounded-sm bg-white px-4 py-2.5 text-base font-bold text-black md:text-lg">
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5.2l3.2 1.9" />
              </svg>
              הגעה לזירת הנזק תוך 24 שעות
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-sm bg-white p-6 shadow-feature-2 md:p-8 lg:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-dark"
                >
                  שם מלא
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="הקלידו את שמכם"
                  className="w-full rounded-sm border border-black/15 bg-white px-5 py-3.5 text-base text-dark outline-none transition placeholder:text-body-color/70 focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-dark"
                >
                  טלפון
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="050-0000000"
                  className="w-full rounded-sm border border-black/15 bg-white px-5 py-3.5 text-base text-dark outline-none transition placeholder:text-body-color/70 focus:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-sm bg-accent px-9 py-4 text-base font-semibold text-white shadow-btn transition duration-300 hover:bg-accent-dark hover:shadow-btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "שולח..." : "שליחת פנייה"}
              </button>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>

            <div aria-live="polite">
              {status === "success" && (
                <p className="mt-5 text-sm font-medium text-green-700">
                  ההודעה נשלחה. אחזור אליכם בהקדם.
                </p>
              )}
              {status === "error" && (
                <p className="mt-5 text-sm font-medium text-red-600">
                  {errorMessage || "אירעה שגיאה. נסו שוב מאוחר יותר."}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
