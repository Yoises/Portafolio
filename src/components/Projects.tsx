import { useState } from "react";
import { images } from "../constants/images";
import ProjectModal from "./Projectmodal";
import VideoCarouselModal, { type ProjectVideo } from "./Videocarouselmodal";
import FigmaEmbedModal from "./FigmaEmbedModal";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  category: "Develoment" | "Media";
  type: "site" | "app" | "media";
  link: string;
  videos?: ProjectVideo[];
  figmaEmbedUrl?: string;
}

function hasFigmaEmbed(p: Project): p is Project & { figmaEmbedUrl: string } {
  return typeof p.figmaEmbedUrl === "string";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Befitness",
    description:
      "A one-page website for a fictional gym. Clean, energetic landing page showcasing membership plans, class schedules, and trainer profiles — built to convert visitors into sign-ups.",
    fullDescription:
      "Befitness is a single-page website built for a fictional gym brand. The page walks visitors through membership tiers, weekly class schedules, and trainer bios, closing with a clear sign-up call to action. Built with React and Bootstrap, with a focus on fast load times and a layout that reads clearly on mobile, where most gym sign-ups happen.",
    image: images.develoment1,
    tags: ["React", "Boostrap"],
    category: "Develoment",
    type: "site",
    link: "https://befitness-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Philosopher",
    description:
      "An AI-powered entertainment platform. Combines AI-driven content with an interactive experience, blending philosophy and entertainment into an engaging application.",
    fullDescription:
      "Philosopher is an AI-powered entertainment platform that turns philosophical ideas into interactive, conversational experiences. Users can explore different schools of thought, debate positions with an AI persona, and get bite-sized explanations of complex concepts — built as a web app with an emphasis on engaging, readable AI-generated content.",
    image: images.develoment2,
    tags: ["Web", "AI"],
    category: "Develoment",
    type: "site",
    link: "#",
  },
  {
    id: 3,
    title: "Protego",
    description:
      "A landing page for an insurance company. Trust-focused design highlighting coverage plans, quote requests, and customer testimonials, aimed at converting leads into policyholders.",
    fullDescription:
      "Protego is a landing page for a fictional insurance company. The design leans on trust signals — clear coverage breakdowns, a simple quote request flow, and customer testimonials — to move visitors from browsing to requesting a quote. Built with React and Tailwind CSS for a fast, componentized, easily themeable layout.",
    image: images.develoment3,
    tags: ["Web", "tailwind"],
    category: "Develoment",
    type: "site",
    link: "#",
  },
  {
    id: 4,
    title: "Salve",
    description:
      "A faith-based community app for prayer groups. Connects members of religious communities, enabling group prayer coordination, event scheduling, and spiritual engagement.",
    fullDescription:
      "Salve is a mobile app that connects members of religious communities around shared prayer. Groups can coordinate prayer sessions, schedule community events, and stay engaged with their congregation between in-person meetings. Built with Expo Go for fast cross-platform delivery on iOS and Android.",
    image: images.develoment4,
    tags: ["Mobile", "Expo Go"],
    category: "Develoment",
    type: "app",
    link: "#",
  },
  {
    id: 5,
    title: "Motion Lab",
    description: "A collection of VFX and 3D experiments in Blender and After Effects, exploring particles, environments, and compositing techniques.",
    image: images.MotionLab,
    tags: ["after effect", "blender"],
    category: "Media",
    type: "media",
    link: "#",
    videos: [
      {
        id: 1,
        title: "UnderLandWorld Blender",
        description:
          "3D animated short created in Blender, depicting Underland Beneath the Sea — a mystical hidden world beneath the ocean's surface, its landscapes lit by the glow of bioluminescent creatures casting ethereal light across coral forests, sunken cities, and mysterious caves. Modeling, lighting, and rendering were handled entirely in Blender to build the underwater environment and its atmospheric depth, while the accompanying sound design and score were composed and mixed in Reaper to match the pacing and otherworldly mood of the animation.",
        embedUrl: "https://www.youtube.com/watch?v=8quu6hH5koU",
      },
      {
        id: 2,
        title: "Trabalho rotobrush",
        description:
          "Rotobrush work in After Effects, isolating a moving subject frame by frame from its background without traditional masking. A base stroke defines the initial foreground boundary, Refine Edge cleans up fine detail along hair and motion blur, and the segmentation is propagated across the sequence with manual touch-ups on frames where tracking drifts. The resulting matte is frozen and exported as a clean alpha layer, ready to composite over a new background.",
        embedUrl: "https://www.youtube.com/watch?v=-XgsSAXKkvc",
      },
      {
        id: 3,
        title: "Firebender After Effects",
        description:
          "Fire simulation created in After Effects using a particle system to generate the 'Firebender' effect, driving organic flame movement, embers, and heat distortion through particle emitters tuned for velocity, turbulence, and lifespan. Layered particle passes were composited with color grading and glow to build the intensity and warmth of the fire, giving the animation the fluid, elemental motion associated with bending fire as a controlled force.",
        embedUrl: "https://www.youtube.com/watch?v=zkO9mQyxtAo",
      },
      {
        id: 4,
        title: "WaterBender",
        description:
          "Water simulation created in After Effects using a particle system to generate the 'Waterbender' effect, driving fluid, flowing motion through particle emitters tuned for velocity, turbulence, and lifespan to mimic the behavior of controlled water. Layered particle passes were composited with color grading, transparency, and glow to build depth and movement, giving the animation the fluid, elemental motion associated with bending water as a controlled force.",
        embedUrl: "https://www.youtube.com/watch?v=dQI767afn4Y",
      },
      {
        id: 5,
        title: "King Drink",
        description:
          "Product animation created in Blender for a fictional beverage brand, King, showcasing a refreshing drink through 3D modeling, lighting, and rendering to capture the look and appeal of the product — condensation, liquid shading, and material work built to sell the sense of a cold, refreshing drink. The rendered footage was then brought into After Effects for final editing, color grading, and compositing to polish the sequence into a finished piece.",
        embedUrl: "https://www.youtube.com/watch?v=k6p7tO-Ui74",
      },
    ],
  },
  {
    id: 6,
    title: "Lumos",
    description: "An interface design for a language-learning app. Explore the complete user experience, from selecting the language and starting level, to interactive lessons, progress tracking, and the gamification systems that keep users motivated day after day.",
    image: images.DesignLab,
    tags: ["Figma", "Mobile"],
    category: "Media",
    type: "media",
    link: "#",
    figmaEmbedUrl: "https://embed.figma.com/design/vBYva6Zu9iYGCxXcie0xPT/FINAL-PROJECT?node-id=0-1&embed-host=share",
  },
];

type FilterType = "All" | "Media" | "Develoment";

const filters: FilterType[] = ["All", "Media", "Develoment"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            className={`px-6 py-2 rounded-full font-body text-sm transition-all duration-200 border ${activeFilter === filter
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
            onClick={() => setSelectedProject(project)}
            className="group relative overflow-hidden rounded-2xl glass-card flex flex-col h-full shadow-sm border border-outline-variant/30 hover:border-primary-container/40 transition-colors cursor-pointer"
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
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="text-primary-container transition-transform hover:scale-110 active:scale-95"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                </span>
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

      {selectedProject?.videos ? (
        <VideoCarouselModal
          title={selectedProject.title}
          videos={selectedProject.videos}
          onClose={() => setSelectedProject(null)}
        />
      ) : selectedProject && hasFigmaEmbed(selectedProject) ? (
        <FigmaEmbedModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
    </main>
  );
}