import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb"; // Ikonka API (z Tabler Icons)
import { BiSolidComponent } from "react-icons/bi"; // Motion One jako animacja
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-5xl font-light text-center mb-16 text-[#F5F7FA]">
        Projects
      </h2>

      {/* Pierwszy projekt */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto m-16"
      >
        {/* Lewa strona: obrazek z efektem neonowym */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute w-72 h-48 bg-pink-500 opacity-30 blur-3xl rounded-lg"></div>
          <div className="relative border-4 border-pink-500 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/BudgetApp.png" // <- podmień na własny obraz
              alt="Project thumbnail"
              className="w-lg h-100 object-cover"
            />
          </div>
        </div>

        {/* Prawa strona: opis */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="text-3xl font-semibold text-[#F5F7FA]">BudgetApp</h3>
          <p className="text-sm text-gray-400">
            Made with:{" "}
            <span className="text-pink-500">
              TypeScript React Next.JS Vercel TailwindCSS
            </span>
          </p>
          <p className="text-gray-200 leading-relaxed">
            BudgetApp to przejrzysta aplikacja webowa stworzona w Next.js +
            TypeScript, umożliwiająca śledzenie wydatków w formie list
            transakcji z podziałem na użytkowników i kategorie. Wbudowane demo
            pozwala użytkownikowi przetestować funkcjonalności bez logowania.
            Dane są tymczasowo przechowywane w localStorage, a interfejs oparty
            jest o Tailwind CSS i animacje z Framer Motion.
          </p>

          {/* Link do projektu */}
          <a
            href="https://budgeting-pi.vercel.app/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-md hover:bg-pink-500 hover:text-white transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </motion.div>
      {/* Drugi projekt */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto m-16"
      >
        {/* Lewa strona: obrazek z efektem neonowym */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute w-72 h-48 bg-pink-500 opacity-30 blur-3xl rounded-lg"></div>
          <div className="relative border-4 border-pink-500 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/Cat&Facts.png" // <- podmień na własny obraz
              alt="Project thumbnail"
              className="w-lg h-100 object-cover"
            />
          </div>
        </div>

        {/* Prawa strona: opis */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="text-3xl font-semibold text-[#F5F7FA]">Cat & Facts</h3>
          <p className="text-sm text-gray-400 flex flex-wrap items-center gap-2">
            Made with:
            <span className="flex flex-wrap items-center gap-2 text-pink-500">
              <SiTypescript title="TypeScript" className="text-[#3178C6]" />
              TypeScript ·
              <SiReact title="React" className="text-[#61DAFB]" />
              React ·
              <SiNextdotjs title="Next.js" className="text-white" />
              Next.js (App Router +{" "}
              <TbApi title="Custom REST API" className="text-[#FF5722]" />
              REST API) ·
              <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />
              <span>Tailwind CSS </span>
              <BiSolidComponent title="Motion One" className="text-[#6366F1]" />
              Motion ·
              <SiVercel title="Vercel" className="text-white" />
              Vercel
            </span>
          </p>
          <p className="text-gray-200 leading-relaxed">
            Cat Generator is a clean, responsive web app built with Next.js and
            TypeScript. It fetches random cat images and fun facts using a
            custom REST API, with optional breed filtering. The interface is
            styled using Tailwind CSS and enhanced with smooth Motion One
            animations. The project is fully deployed on Vercel and ready to
            explore — no login required.
          </p>
          {/* Link do projektu */}
          <a
            href="https://catnfacts.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-md hover:bg-pink-500 hover:text-white transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
