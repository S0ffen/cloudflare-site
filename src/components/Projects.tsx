import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiDotnet,
  SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiSolidComponent } from "react-icons/bi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
  {
    key: "project1",
    title: "BudgetApp",
    image: "/BudgetApp.png",
    href: "https://budgeting-pi.vercel.app/demo",
    badge: "own",
    stack: "web",
  },
  {
    key: "project2",
    title: "Cat & Facts",
    image: "/Cat&Facts.png",
    href: "https://catnfacts.vercel.app/",
    badge: "own",
    stack: "api",
  },
  {
    key: "project3",
    title: "Solarixo Energy",
    image: "/SolarixoLogo.png",
    href: "https://solarixo-energy.vercel.app/",
    badge: "own",
    stack: "website",
  },
  {
    key: "project4",
    title: "BMS Platform",
    image: null,
    badge: "commercial",
    stack: "bms",
  },
] as const;

const stackContent: Record<
  string,
  React.ReactNode
> = {
  web: "TypeScript React Next.js Vercel TailwindCSS",
  api: (
    <>
      <SiTypescript title="TypeScript" className="text-[#3178C6]" />
      TypeScript ·
      <SiReact title="React" className="text-[#61DAFB]" />
      React ·
      <SiNextdotjs title="Next.js" className="text-white" />
      Next.js (App Router +
      <TbApi title="Custom REST API" className="text-[#FF5722]" />
      REST API) ·
      <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />
      <span>Tailwind CSS</span>
      <BiSolidComponent title="Motion One" className="text-[#6366F1]" />
      Motion ·
      <SiVercel title="Vercel" className="text-white" />
      Vercel
    </>
  ),
  website: (
    <>
      <SiTypescript title="TypeScript" className="text-[#3178C6]" />
      TypeScript ·
      <SiReact title="React" className="text-[#61DAFB]" />
      React ·
      <SiNextdotjs title="Next.js" className="text-white" />
      Next.js
      <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />
      <span>Tailwind CSS</span>
      <SiVercel title="Vercel" className="text-white" />
      Vercel
    </>
  ),
  bms: (
    <>
      <SiDotnet title=".NET" className="text-[#7C3AED]" />
      .NET ·
      <SiPostgresql title="PostgreSQL" className="text-[#336791]" />
      PostgreSQL ·
      <span className="text-pink-500">C#</span> ·
      <span className="text-pink-500">Blazor</span> ·
      <span className="text-pink-500">MQTT</span> ·
      <span className="text-pink-500">BMS</span>
    </>
  ),
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-5xl font-light text-center mb-16 text-[#F5F7FA]">
        {t("projects.heading")}
      </h2>

      {projects.map((project) => (
        <motion.div
          key={project.key}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto m-16"
        >
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="absolute w-72 h-48 bg-pink-500 opacity-30 blur-3xl rounded-lg"></div>
            {project.image ? (
              <div className="relative border-4 border-pink-500 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-lg h-100 object-cover"
                />
              </div>
            ) : (
              <div className="relative flex h-80 w-full max-w-xl items-center justify-center rounded-lg border-4 border-pink-500 bg-gradient-to-br from-[#1f123d] via-[#170d33] to-[#0f0826] shadow-lg">
                <div className="text-center px-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-pink-400">
                    BMS
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold text-[#F5F7FA]">
                    {project.title}
                  </h3>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-semibold text-[#F5F7FA]">
                {project.title}
              </h3>
              <span className="rounded-full border border-pink-500/50 bg-pink-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
                {t(`projects.badges.${project.badge}`)}
              </span>
            </div>

            <p className="text-sm text-gray-400 flex flex-wrap items-center gap-2">
              {t("projects.title_desc")}{" "}
              <span className="flex flex-wrap items-center gap-2 text-pink-500">
                {stackContent[project.stack]}
              </span>
            </p>

            <p className="text-gray-200 leading-relaxed">
              {t(`projects.${project.key}.description`)}
            </p>

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-md hover:bg-pink-500 hover:text-white transition"
              >
                <FaExternalLinkAlt />
                Live
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70">
                {t("projects.commercialNote")}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
