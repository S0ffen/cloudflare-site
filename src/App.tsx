import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import CaseStudyDetail from "./components/CaseStudyDetail";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./i18n";

const App: React.FC = () => {
  const pathname = window.location.pathname;

  if (pathname.startsWith("/case-studies/")) {
    return <CaseStudyDetail pathname={pathname} />;
  }

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
      <section id="case-studies-section">
        <CaseStudies />
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
