import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // en ms, opcional
}

const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;