interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: "Development",
    icon: "terminal",
    skills: [
      { name: "React", icon: "hub" },
      { name: "React Native", icon: "mobile" },
      { name: "Javascript", icon: "change_history" },
      { name: "Typescript", icon: "text_fields" },
      { name: "Python", icon: "graph_8" },
      { name: "Mysql", icon: "database" },
      { name: "firebase", icon: "storage" },
      { name: "Tailwind", icon: "palette" },
      { name: "CSS", icon: "css" },
      { name: "HTML", icon: "html" },
      { name: "Bootstrap", icon: "palette" },
      
    ],
  },
  {
    title: "Multimedia & Design",
    icon: "airplay",
    skills: [
      { name: "Figma", icon: "draw" },
      { name: "Git", icon: "account_tree" },
      { name: "WordPress", icon: "add_to_queue" },
      { name: "Canva", icon: "wall_art" },
      { name: "Adobe", icon: "splitscreen_landscape_add" },
      { name: "After Effects", icon: "cinematic_blur" },
      { name: "Blender", icon: "3d" },
      { name: "Unity", icon: "gamepad_down" },
      { name: "Reaper and Audacity", icon: "edit_audio" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 max-w-[1200px] mx-auto overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-full h-[600px] opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-container rounded-full blur-[100px]"></div>
      </div>

      {/* Header */}
      <div className="flex flex-wrap justify-between gap-3 mb-4">
        <div className="flex min-w-72 flex-col gap-3">
          <h2 className="font-headline text-4xl md:text-5xl font-black leading-tight tracking-tight text-on-surface">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-on-surface-variant text-lg font-body max-w-xl">
            I specialize in building high-performance web applications using modern
            frameworks and cloud-native tools.
          </p>
        </div>
      </div>

      {/* Categories */}
      {categories.map((category) => (
        
        <div key={category.title} className="mt-8">
          <div className="flex items-center gap-3 pb-2 pt-4">
            <span className="material-symbols-outlined text-primary-container">
              {category.icon}
            </span>
            <h3 className="text-on-surface text-xl font-headline font-bold tracking-tight">
              {category.title}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card flex flex-col gap-3 rounded-xl border border-outline-variant/30 bg-surface-container p-6 items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]"
              >
                <span className="material-symbols-outlined text-4xl text-primary-container">
                  {skill.icon}
                </span>
                <h4 className="text-on-surface text-base font-bold">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}