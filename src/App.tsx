import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBg";
import FadeIn from "./components/FadeIn";


function App() {
  const [isDark, setIsDark] = useState<boolean>(true);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = (): void => setIsDark((prev) => !prev);

  return (
    <div className="text-on-background min-h-screen">
      <VideoBackground />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="relative pt-16">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Certifications />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;