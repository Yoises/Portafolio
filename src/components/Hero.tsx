import { images } from "../constants/images";

const scrollToProjects = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
                <div className="relative mb-10 group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-surface overflow-hidden shadow-2xl">
                        <img
                            src={images.profile}
                            alt="Professional Portrait"
                            className="w-full h-full object-cover origin-[50%_20%] scale-150 object-top"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="font-body text-sm text-primary tracking-widest uppercase">
                        Available for work
                    </span>
                    <h1 className="font-headline text-4xl md:text-5xl text-on-surface font-extrabold tracking-tight">
                        Yoises Molina
                    </h1>
                    <p className="font-headline text-2xl text-on-surface-variant max-w-2xl mx-auto">
                        Multimedia Designer & Frontend Developer
                    </p>
                    <p className="font-body text-lg text-on-surface-variant/80 max-w-xl mx-auto leading-relaxed">
                        Building high-fidelity digital experiences with precision, minimal aesthetics, and technical excellence.
                    </p>
                </div>

                <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
                    <button onClick={scrollToProjects} className="px-8 py-3 bg-primary-container text-white font-body text-sm rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all">
                        View Projects
                    </button>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/yoises-miguel-carrizales-molina-532250275"
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary transition-all"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/Yoises"
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary transition-all"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:ycarrizales0243@gmail.com"
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary transition-all"
                        >
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-50">
                <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </section>
    );
}