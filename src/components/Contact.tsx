import { useState} from "react";
import type { FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "mail",
    label: "Email",
    value: "ycarrizales0243@gmail.com",
    href: "mailto:ycarrizales0243@gmail.com",
  },

  {
    icon: "link",
    label: "LinkedIn",
    value: "www.linkedin.com/in/yoises",
    href: "https://www.linkedin.com/in/yoises-miguel-carrizales-molina-532250275",
  },
  {
    icon: "location_on",
    label: "Location",
    value: "Lisboa, Portugal",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: reemplazar con tu lógica real de envío (API, EmailJS, Formspree, etc.)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl text-on-surface leading-none">
              Get in touch.
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-md">
              I'm currently available for new opportunities and collaborations. Feel free
              to reach out via the form or my direct channels.
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-surface-container-high text-primary border border-outline-variant group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-headline text-2xl text-on-surface hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-headline text-2xl text-on-surface">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant rounded-[2rem] p-8 lg:p-12 shadow-sm">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block font-body text-sm text-on-surface" htmlFor="name">
                  Full Name
                </label>
                <div className="relative group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container px-4 py-4 rounded-xl border border-outline-variant text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    person
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-body text-sm text-on-surface" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container px-4 py-4 rounded-xl border border-outline-variant text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    alternate_email
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-body text-sm text-on-surface" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-surface-container px-4 py-4 rounded-xl border border-outline-variant text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
              />
            </div>

            {status !== "success" && (
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary-container hover:bg-secondary-container text-on-primary-fixed font-headline py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] group disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </>
                )}
              </button>
            )}

            {status === "success" && (
              <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-medium text-center justify-center">
                <span className="material-symbols-outlined">check_circle</span>
                Message sent successfully. I'll get back to you soon!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}