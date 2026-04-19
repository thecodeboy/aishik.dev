"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Define the photo data structure
export type Photo = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
};

type GalleryProps = {
  photos: Photo[];
};

export default function PhotoGallery({ photos }: GalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!selectedPhoto) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {photos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setSelectedPhoto(photo)}
            className="group text-left"
          >
            <div className="overflow-hidden rounded-[30px] border border-black/5 bg-white/70 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-black/10 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_20px_60px_rgba(2,6,23,0.34)] dark:hover:border-white/20 dark:hover:bg-slate-900/[0.82]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      Photo note
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {photo.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Open
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedPhoto ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/[0.88] px-4 py-8 backdrop-blur-xl"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-[34px] border border-white/10 bg-black/20 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="selected-photo-title"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/[0.35] text-white transition hover:bg-black/50"
              aria-label="Close photo"
              type="button"
            >
              <X size={18} />
            </button>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
              <div className="flex min-h-[40vh] items-center justify-center overflow-hidden rounded-[28px] bg-black/[0.35] p-4 sm:p-6">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={selectedPhoto.width}
                  height={selectedPhoto.height}
                  className="h-auto max-h-[78vh] w-auto max-w-full rounded-[20px] object-contain"
                />
              </div>

              <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/10 p-6 text-white backdrop-blur-md">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                    Photo note
                  </p>
                  <h2
                    id="selected-photo-title"
                    className="mt-3 text-3xl font-semibold tracking-tight"
                  >
                    {selectedPhoto.description}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/75">
                    {selectedPhoto.alt}
                  </p>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.45]">
                  Press Esc to close
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
