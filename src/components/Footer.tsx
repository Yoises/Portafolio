export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 max-w-[1200px] mx-auto gap-4 py-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline text-lg text-on-surface">Portfolio.dev</span>
          <p className="font-body text-xs text-on-surface-variant opacity-70">
            © 2026 Portfolio. Built with precision.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">mail</span>
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">code</span>
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">dataset</span>
          </a>
        </div>
      </div>
    </footer>
  );
}