"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

const CasePhotos = ({ photos }: { photos: Photo[] }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  const active = openIndex >= 0 ? photos[openIndex] : null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(-1);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, photos.length]);

  return (
    <>
      <div className="mt-4 flex items-center gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`הגדלת תמונה: ${photo.alt}`}
            className="group relative h-20 w-20 overflow-hidden rounded-sm border border-stroke-stroke transition hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="80px"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/35 group-hover:opacity-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.49 4.49 0 0 1 9.5 14Zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2V7Z" />
              </svg>
            </span>
          </button>
        ))}
        <p className="self-center ps-1 text-xs leading-tight text-body-color">
          הנזק
          <br />
          בתיק שלהם
        </p>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setOpenIndex(-1)}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="סגירה"
            onClick={() => setOpenIndex(-1)}
            className="absolute top-5 end-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
            </svg>
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-[860px] flex-col items-center"
          >
            <div className="relative h-[72vh] w-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 900px) 100vw, 860px"
                className="rounded-sm object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/85 md:text-base">
              {active.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export default CasePhotos;
