import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCode, FaDatabase, FaLayerGroup } from "react-icons/fa";

const skillGroups = [
  {
    key: "frontend",
    title: "Frontend",
    icon: FaCode,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Blazor",
      "Vite",
      "Framer Motion",
    ],
  },
  {
    key: "backend",
    title: "Backend & APIs",
    icon: FaDatabase,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      ".NET",
      "C#",
      "PostgreSQL",
      "Prisma",
      "Firebase",
    ],
  },
  {
    key: "tools",
    title: "Tools & Workflow",
    icon: FaLayerGroup,
    items: ["GitHub", "Docker", "Cypress", "Highcharts", "DevExpress"],
  },
] as const;

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
                <h3 className="text-2xl font-semibold text-[#F5F7FA]">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-7 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg leading-relaxed text-gray-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                    <span>{item}</span>
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
