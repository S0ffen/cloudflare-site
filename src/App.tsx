import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BmsCaseStudyPage from "./pages/BmsCaseStudyPage";
import PhotoExifCaseStudyPage from "./pages/PhotoExifCaseStudyPage";
import QrReaderCaseStudyPage from "./pages/QrReaderCaseStudyPage";
import "./i18n";

const App: React.FC = () => {
  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return;
    }

    const scrollToHash = () => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.requestAnimationFrame(scrollToHash);
  }, [pathname]);

  if (pathname === "/case-studies/bms-platform") {
    return <BmsCaseStudyPage />;
  }

  if (pathname === "/case-studies/qr-code-reader-service") {
    return <QrReaderCaseStudyPage />;
  }

  if (pathname === "/case-studies/photo-exif-reader-service") {
    return <PhotoExifCaseStudyPage />;
  }

  return (
    <div className="bg-[#0f0826] min-h-screen">
      <Navbar />
      <section>
        <Hero />
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
