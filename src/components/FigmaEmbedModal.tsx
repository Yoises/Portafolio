import { useEffect } from "react";

export interface FigmaEmbedProject {
  title: string;
  description?: string;
  fullDescription?: string;
  figmaEmbedUrl: string;
  /** Optional: link to open the file directly in Figma (fallback for mobile) */
  figmaFileUrl?: string;
}

interface FigmaEmbedModalProps {
  project: FigmaEmbedProject | null;
  onClose: () => void;
}

export default function FigmaEmbedModal({ project, onClose }: FigmaEmbedModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="figma-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden rounded-2xl glass-card border border-outline-variant/30 shadow-2xl animate-[scaleIn_0.2s_ease-out]">
        {/* Close (X) */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 shrink-0">
          <h2
            id="figma-modal-title"
            className="font-headline text-2xl md:text-3xl text-on-surface font-bold pr-10"
          >
            {project.title}
          </h2>
          {(project.fullDescription ?? project.description) && (
            <p className="text-on-surface-variant font-body text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              {project.fullDescription ?? project.description}
            </p>
          )}
          {project.figmaFileUrl && (
            <a
              href={project.figmaFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-primary-container hover:underline"
            >
              Abrir en Figma
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          )}
        </div>

        {/* Figma embed */}
        <div className="grow px-2 md:px-4 pb-2 md:pb-4 min-h-0">
          <div className="w-full h-full rounded-xl overflow-hidden bg-black/10">
            <iframe
              title={`Figma prototype - ${project.title}`}
              src={project.figmaEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}