import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Web" | "Mobile" | "Tools";
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nexus Cloud Engine",
    description: "Next-generation distributed computation platform.",
    image: "/projects/nexus-cloud-engine.jpg",
    tags: ["React", "Node.js"],
    category: "Web",
    link: "#",
  },
  {
    id: 2,
    title: "Aura Wallet",
    description: "Biometric-first decentralized finance mobile app.",
    image: "/projects/aura-wallet.jpg",
    tags: ["Mobile", "SwiftUI"],
    category: "Mobile",
    link: "#",
  },
  {
    id: 3,
    title: "Synthetix CLI",
    description: "Advanced command-line utility for automation.",
    image: "/projects/synthetix-cli.jpg",
    tags: ["Tools", "Rust"],
    category: "Tools",
    link: "#",
  },
  {
    id: 4,
    title: "OmniDB",
    description: "Global real-time sync database layer.",
    image: "/projects/omnidb.jpg",
    tags: ["Web", "Go"],
    category: "Web",
    link: "#",
  },
  {
    id: 5,
    title: "Flux Mobile",
    description: "Fluid interaction framework for mobile native apps.",
    image: "/projects/flux-mobile.jpg",
    tags: ["Mobile", "Flutter"],
    category: "Mobile",
    link: "#",
  },
  {
    id: 6,
    title: "Prism AI",
    description: "Image recognition and enhancement toolkit.",
    image: "/projects/prism-ai.jpg",
    tags: ["Tools", "Python"],
    category: "Tools",
    link: "#",
  },
];

type FilterType = "All" | "Web" | "Mobile" | "Tools";

const filters: FilterType[] = ["All", "Web", "Mobile", "Tools"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main id="projects" className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <header className="mb-12">
        <h1 className="font-headline text-4xl md:text-5xl mb-4 text-on-surface font-bold">
          Crafted Solutions
        </h1>
        <p className="text-on-surface-variant font-body text-lg max-w-2xl">
          A selection of digital experiences, technical experiments, and architectural
          explorations across various tech stacks.
        </p>
      </header>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-3 mb-16 items-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-body text-sm transition-all duration-200 border ${
              activeFilter === filter
                ? "bg-primary-container text-on-primary-container border-transparent scale-105"
                : "glass-card text-on-surface-variant border-outline-variant/30 hover:border-primary-container"
            }`}
          >
            {filter === "All" ? "All Projects" : filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl glass-card flex flex-col h-full shadow-sm border border-outline-variant/30 hover:border-primary-container/40 transition-colors"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline text-2xl text-on-surface">{project.title}</h3>
                <a
                  href={project.link}
                  className="text-primary-container transition-transform hover:scale-110 active:scale-95"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-on-surface-variant font-body text-base mb-6 grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-body text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}