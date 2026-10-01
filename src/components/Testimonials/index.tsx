import Image from "next/image";
import CasePhotos from "./CasePhotos";
import SectionTitle from "../Common/SectionTitle";
import testimonialsData from "./testimonialsData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-cream py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="לקוחות ממליצים"
          title="לקוחות שכבר קיבלו את מה שמגיע להם"
          center
          width="720px"
          mb="60px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonialsData.map((item) => (
            <div
              key={item.name}
              className="flex h-full flex-col rounded-sm border border-stroke-stroke bg-white p-8 shadow-two"
            >
              <div className="mb-5 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="mb-7 flex-1 text-base leading-relaxed text-body-color">
                ״{item.quote}״
              </p>

              <div className="flex items-center gap-3 border-t border-black/10 pt-5">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-lg font-bold text-accent">
                    {item.name.charAt(0)}
                  </span>
                )}
                <p className="text-base font-bold text-black">{item.name}</p>
              </div>

              {item.photos && item.photos.length > 0 && (
                <CasePhotos photos={item.photos} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
