import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-[#0f0826] min-h-screen">
      <Navbar />
      <section id="about">
        <Hero />
        <About />
        <div className="mt-16 h-px w-full  bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </section>
      <section id="skills">
        <Skills />
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </section>
      <section id="projects">
        <Projects />
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
