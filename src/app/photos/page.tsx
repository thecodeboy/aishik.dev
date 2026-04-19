import type { Metadata } from "next";
import PhotoGallery, { Photo } from "@/app/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "A small, growing collection of travel and landscape photography by Aishik Saha.",
};

// Photos to display in the gallery
const photos: Photo[] = [
  {
    id: 1,
    src: "/photos/1.jpg",
    alt: "Alpine scenery of Engelberg, Switzerland",
    width: 4080,
    height: 2296,
    description: "Engelberg, Switzerland",
  },
];

export default function PhotosPage() {
  return (
    <div className="pb-20 pt-2 sm:pt-4">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/[0.72] px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.72] dark:shadow-[0_24px_80px_rgba(2,6,23,0.38)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-orange-500/80 dark:bg-orange-300/80" />
            Photo journal
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl text-balance">
            A small gallery of places that felt worth keeping.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 text-pretty">
            Mostly travel, landscapes, and the occasional quiet frame. This
            section is intentionally small for now, but it&apos;s set up to grow
            into a more personal visual archive over time.
          </p>
        </div>

        <div className="rounded-[30px] border border-black/5 bg-white/[0.68] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.68] dark:shadow-[0_20px_60px_rgba(2,6,23,0.34)] sm:p-7">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500/80 dark:bg-emerald-300/80" />
            Snapshot
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {photos.length} photo{photos.length === 1 ? "" : "s"} in the
            collection
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300 text-pretty">
            Each image opens in a larger lightbox, with room for a short note
            and more detailed context. It keeps the page calm while still
            letting individual frames breathe.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <PhotoGallery photos={photos} />
      </section>
    </div>
  );
}
