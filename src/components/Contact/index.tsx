const Contact = () => {
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
              <form>
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
                        type="text"
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
                        type="tel"
                        placeholder="050-0000000"
                        className="w-full rounded-sm border border-stroke-stroke bg-white px-6 py-3 text-base text-dark outline-none transition focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark"
                      >
                        תיאור הנזק
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="תארו בקצרה את הנזק ואת חברת הביטוח שלכם"
                        className="w-full resize-none rounded-sm border border-stroke-stroke bg-white px-6 py-3 text-base text-dark outline-none transition focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4 text-center">
                    <button className="inline-flex items-center justify-center rounded-sm bg-primary px-10 py-4 text-base font-semibold text-white shadow-submit transition duration-300 hover:bg-secondary">
                      שליחת פנייה
                    </button>
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
