interface Certification {
  title: string;
  institution: string;
  date: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    title: "Multimedia Engeneering",
    institution: "Amazon Web Services (AWS)",
    date: "Aug 2026",
    icon: "code_blocks",
  },
  {
    title: "Chemistry",
    institution: "Carabobo University",
    date: "Oct 2018",
    icon: "science",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-[960px] mx-auto px-4 md:px-10 py-16">
      {/* Title */}
      <div className="flex flex-wrap justify-between gap-3 mb-8">
        <div className="flex min-w-72 flex-col gap-3">
          <h2 className="font-headline text-4xl md:text-5xl font-black leading-tight tracking-tight text-on-surface">
            Certifications
          </h2>
          <p className="text-on-surface-variant font-body text-base">
           Courses and certifications that support my technical foundation.
          </p>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex items-center gap-4 bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 min-h-[88px] py-4 justify-between group transition-all duration-300 hover:bg-surface-container hover:translate-x-1"
          >
            <div className="flex items-center gap-5">
              <div className="text-primary flex items-center justify-center rounded-xl bg-surface-container-high shrink-0 size-14 border border-outline-variant">
                <span className="material-symbols-outlined text-[28px]">{cert.icon}</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-on-surface text-lg font-semibold leading-normal group-hover:text-primary transition-colors">
                  {cert.title}
                </p>
                <p className="text-on-surface-variant text-sm font-medium leading-normal">
                  {cert.institution}
                </p>
              </div>
            </div>
            <div className="shrink-0 flex flex-col items-end">
              <p className="text-primary text-sm font-bold uppercase tracking-wider">
                {cert.date}
              </p>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}