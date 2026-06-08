"use client";

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
    <section
      id="contact"
      className="overflow-hidden bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
            <div className="rounded-sm border border-stroke-stroke bg-white px-8 py-11 shadow-three sm:p-[55px] lg:px-8 xl:p-[55px]">
              <div className="mb-10 text-center">
                <span className="mb-3 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wide text-secondary">
                  <span className="accent-rule" />
                  צרו קשר
                </span>
                <h2 className="mb-3 text-3xl font-extrabold text-black sm:text-4xl">
                  ספרו לנו מה קרה
                </h2>
                <p className="mx-auto max-w-[520px] text-base font-medium leading-relaxed text-body-color">
                  השאירו פרטים ונחזור אליכם בהקדם לתיאום ביקור בזירה וייעוץ
                  ראשוני ללא התחייבות.
                </p>
              </div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark"
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
                        className="w-full rounded-sm border border-stroke-stroke bg-white px-6 py-3 text-base text-dark outline-none transition focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark"
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
                        placeholder="050-6273002"
                        className="w-full rounded-sm border border-stroke-stroke bg-white px-6 py-3 text-base text-dark outline-none transition focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center rounded-sm bg-primary px-10 py-4 text-base font-semibold text-white shadow-submit transition duration-300 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "שולח..." : "שליחת פנייה"}
                    </button>
                    {status === "success" && (
                      <p className="mt-6 text-sm font-medium text-primary">
                        ההודעה נשלחה. נחזור אליכם בהקדם.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="mt-6 text-sm font-medium text-red-600">
                        {errorMessage || "אירעה שגיאה. נסו שוב מאוחר יותר."}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
