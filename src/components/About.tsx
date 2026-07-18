import { images } from "../constants/images";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
}

const timeline: TimelineItem[] = [
  { role: "Customer Service Representative ", company: "Teleperformance", period: "2025 - Present", current: true },
  { role: "Sales Associate", company: "Meia Dúzia — Lisbon, Portugal", period: "2023 - 2025" },
  { role: "Virtual Classroom Designer & Chemistry Instructor ", company: "Instituto Universitario de Aeronáutica Civil — Venezuela", period: "2018 - 2022" },
  { role: "Volunteer — Social Media & Multimedia", company: "Youth Promotion Encounter Movement (MEPJ) — Venezuela", period: "2018 - 2020" },
];


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Yoises_Molina_CV.pdf";
  link.download = "Yoises_Molina_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const skills: string[] = ["React.js", "TypeScript", "Tailwind CSS", "TypeScript", "Node.js", "Git"];

export default function About() {
  return (
    <>
    <section id="about">
      {/* Header */}
      <header className="relative pt-32 pb-16 px-6 max-w-[1200px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-headline text-4xl md:text-5xl mb-6 text-on-surface font-bold">
              About <span className="text-primary-container">Me</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl">
              A problem-solver at heart, with a broad background and a genuine passion for learning. I'm building my skills in web development, one project at a time.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs text-primary-container uppercase tracking-wide">
                  Location
                </span>
                <span className="font-body text-base text-on-surface">Lisboa, Portugal</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs text-primary-container uppercase tracking-wide">
                  Languages
                </span>
                <span className="font-body text-base text-on-surface">Spanish, Portuguese, English, French</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-body text-xs text-primary-container uppercase tracking-wide">
                  Availability
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-body text-base text-on-surface">Open for work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={images.aboutportrait}
                alt="Professional portrait"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content: Bento Grid */}
      <main className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Timeline */}
          <section className="md:col-span-2 glass-card rounded-2xl p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                timeline
              </span>
              <h2 className="font-headline text-3xl text-on-surface">Professional Timeline</h2>
            </div>

            <div className="space-y-12 relative border-l border-outline-variant/30 ml-2 pl-8">
              {timeline.map((item) => (
                <div key={item.role} className="relative">
                  <span
                    className={`absolute -left-[41px] top-1 w-3 h-3 rounded-full border-2 border-surface ${
                      item.current ? "bg-primary-container" : "bg-outline-variant"
                    }`}
                  ></span>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="font-headline text-2xl text-on-surface">{item.role}</h3>
                    <span
                      className={`font-body text-sm px-3 py-1 rounded-full ${
                        item.current
                          ? "text-primary-container bg-primary-container/10"
                          : "text-on-surface-variant bg-surface-container-highest"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="font-body text-base text-on-surface-variant mt-1">{item.company}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            <div className="glass-card rounded-2xl p-8 flex-1">
              <h3 className="font-headline text-2xl text-on-surface mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-body text-sm hover:border-primary-container/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-outline-variant/30">
                <button onClick={handleDownload} className="w-full py-4 rounded-xl bg-primary-container text-on-primary-container font-headline flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                  Download CV
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-transparent z-10"></div>
              <img
                src={images.circuitpath}
                alt="Circuit board detail"
                className="w-full h-full object-cover"
              />
            </div>
          </aside>
        </div>
      </main>
      </section>
    </>
  );
}