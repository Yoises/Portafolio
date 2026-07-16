import { useEffect } from "react";

export interface ModalProject {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  link: string;
  type?: "site" | "app" | "media";
}

interface ProjectModalProps {
  project: ModalProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
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

  const isApp = project.type === "app";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card border border-outline-variant/30 shadow-2xl animate-[scaleIn_0.2s_ease-out]"
      >
        {/* Close (X) */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2
            id="project-modal-title"
            className="font-headline text-3xl md:text-4xl text-on-surface font-bold mb-4"
          >
            {project.title}
          </h2>

          <p className="text-on-surface-variant font-body text-base leading-relaxed mb-6">
            {project.fullDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-body text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-body text-sm bg-primary-container text-on-primary-container hover:scale-105 active:scale-95 transition-transform text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">
                {isApp ? "download" : "open_in_new"}
              </span>
              {isApp ? "Download app" : "Visit site"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}