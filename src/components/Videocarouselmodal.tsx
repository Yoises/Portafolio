import { useEffect, useState } from "react";
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from "../constants/Youtube";

export interface ProjectVideo {
  id: number;
  title: string;
  description: string;
  /** Optional: if omitted, the official YouTube thumbnail is derived from embedUrl */
  thumbnail?: string;
  embedUrl: string; // Any YouTube URL (watch, youtu.be, or embed) — normalized automatically
}

interface VideoCarouselModalProps {
  title: string;
  videos: ProjectVideo[] | null;
  onClose: () => void;
}

export default function VideoCarouselModal({
  title,
  videos,
  onClose,
}: VideoCarouselModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset to first slide whenever a new project opens
  useEffect(() => {
    if (videos) setActiveIndex(0);
  }, [videos]);

  useEffect(() => {
    if (!videos) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos, activeIndex]);

  if (!videos || videos.length === 0) return null;

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? videos.length - 1 : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === videos.length - 1 ? 0 : i + 1));

  const current = videos[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl glass-card border border-outline-variant/30 shadow-2xl animate-[scaleIn_0.2s_ease-out]">
        {/* Close (X) */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div className="px-6 md:px-8 pt-6 md:pt-8 pb-2">
          <h2
            id="video-modal-title"
            className="font-headline text-2xl md:text-3xl text-on-surface font-bold"
          >
            {title}
          </h2>
          <p className="text-on-surface-variant font-body text-sm mt-1">
            {activeIndex + 1} / {videos.length}
          </p>
        </div>

        {/* Video stage */}
        <div className="relative px-2 md:px-4">
          <div className="aspect-video overflow-hidden rounded-xl bg-black">
            <iframe
              key={current.id}
              src={getYouTubeEmbedUrl(current.embedUrl)}
              title={current.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Prev / Next arrows */}
          {videos.length > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous video"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={goNext}
                aria-label="Next video"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </>
          )}
        </div>

        {/* Current video info */}
        <div className="p-6 md:p-8 pt-5">
          <h3 className="font-headline text-xl text-on-surface mb-2">
            {current.title}
          </h3>
          <p className="text-on-surface-variant font-body text-base leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Thumbnail strip */}
        {videos.length > 1 && (
          <div className="flex gap-3 px-6 md:px-8 pb-6 md:pb-8 overflow-x-auto">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show video: ${video.title}`}
                className={`shrink-0 w-28 aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                  index === activeIndex
                    ? "border-primary-container"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={video.thumbnail || getYouTubeThumbnail(video.embedUrl)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}