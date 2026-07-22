import { useState, useEffect } from "react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const links = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Certifications", id: "certifications" },
   { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ /*isDark, toggleTheme */ }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm z-50">
      <div className="flex justify-between items-center w-full px-6 max-w-[1200px] mx-auto h-16">
        <div className="font-headline text-2xl font-bold text-on-background">
          Portafolio
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => (handleClick(id), setActiveSection(id))}
              className={`font-body text-sm transition-colors ${
                activeSection === id
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/*
            <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant/20 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-on-surface">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-on-surface">menu</span>
          </button>
          */}
        </div>
      </div>
    </nav>
  );
}