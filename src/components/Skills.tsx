import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import { FaChartLine, FaCode, FaDatabase, FaLayerGroup } from "react-icons/fa";
import {
  SiBlazor,
  SiCss3,
  SiCypress,
  SiDevexpress,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";

type SkillItem = {
  name: string;
  icon: IconType;
  colorClass: string;
};

const skillGroups = [
  {
    key: "frontend",
    title: "Frontend",
    icon: FaCode,
    items: [
      { name: "HTML", icon: SiHtml5, colorClass: "text-[#E34F26]" },
      { name: "CSS", icon: SiCss3, colorClass: "text-[#1572B6]" },
      { name: "JavaScript", icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, colorClass: "text-[#3178C6]" },
      { name: "React", icon: SiReact, colorClass: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "text-[#38BDF8]" },
      { name: "Blazor", icon: SiBlazor, colorClass: "text-[#A020F0]" },
      { name: "Vite", icon: SiVite, colorClass: "text-[#FFD62E]" },
    ],
  },
  {
    key: "backend",
    title: "Backend & APIs",
    icon: FaDatabase,
    items: [
      { name: "Node.js", icon: SiNodedotjs, colorClass: "text-[#5FA04E]" },
      { name: "Express.js", icon: SiExpress, colorClass: "text-[#F5F7FA]" },
      { name: "REST APIs", icon: TbApi, colorClass: "text-[#FACC15]" },
      { name: ".NET", icon: SiDotnet, colorClass: "text-[#7C3AED]" },
      { name: "C#", icon: TbBrandCSharp, colorClass: "text-[#9B4F96]" },
      { name: "PostgreSQL", icon: SiPostgresql, colorClass: "text-[#336791]" },
      { name: "Prisma", icon: SiPrisma, colorClass: "text-[#F5F7FA]" },
      { name: "Firebase", icon: SiFirebase, colorClass: "text-[#FFCA28]" },
    ],
  },
  {
    key: "tools",
    title: "Tools & Workflow",
    icon: FaLayerGroup,
    items: [
      { name: "GitHub", icon: SiGithub, colorClass: "text-[#F5F7FA]" },
      { name: "Docker", icon: SiDocker, colorClass: "text-[#2496ED]" },
      { name: "Cypress", icon: SiCypress, colorClass: "text-[#69D3A7]" },
      { name: "Highcharts", icon: FaChartLine, colorClass: "text-[#6699A1]" },
      { name: "DevExpress", icon: SiDevexpress, colorClass: "text-[#FF7200]" },
    ],
  },
] satisfies readonly {
  key: string;
  title: string;
  icon: IconType;
  items: readonly SkillItem[];
}[];

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-light mb-14 text-center text-[#F5F7FA]">
          {t("skills.heading")}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-[26px] border border-pink-500/35 bg-white/[0.05] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm transition hover:border-pink-400/60 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/20">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-[#F5F7FA]">{group.title}</h3>
              </div>

              <ul className="mt-7 grid grid-cols-3 gap-4 sm:grid-cols-4 xl:grid-cols-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    aria-label={item.name}
                    title={item.name}
                    tabIndex={0}
                    className="group/skill relative flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] outline-none transition hover:-translate-y-1 hover:border-pink-400/55 hover:bg-white/[0.08] focus-visible:-translate-y-1 focus-visible:border-pink-400/55 focus-visible:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-pink-400/40"
                  >
                    <item.icon
                      aria-hidden="true"
                      className={`h-9 w-9 transition group-hover/skill:scale-110 ${item.colorClass}`}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full border border-pink-300/30 bg-pink-500/10 text-[11px] font-semibold leading-none text-pink-200/90 transition group-hover/skill:border-pink-300/70 group-hover/skill:bg-pink-500/20 group-focus-visible/skill:border-pink-300/70 group-focus-visible/skill:bg-pink-500/20"
                    >
                      ?
                    </span>
                    <span className="pointer-events-none absolute right-0 top-0 z-10 max-w-32 -translate-y-[calc(100%+0.5rem)] rounded-lg border border-pink-300/30 bg-[#120a24] px-3 py-2 text-center text-xs font-medium text-[#F5F7FA] opacity-0 shadow-xl shadow-black/30 transition before:absolute before:bottom-[-5px] before:right-4 before:h-2 before:w-2 before:rotate-45 before:border-b before:border-r before:border-pink-300/30 before:bg-[#120a24] group-hover/skill:-translate-y-[calc(100%+0.75rem)] group-hover/skill:opacity-100 group-focus-visible/skill:-translate-y-[calc(100%+0.75rem)] group-focus-visible/skill:opacity-100">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
