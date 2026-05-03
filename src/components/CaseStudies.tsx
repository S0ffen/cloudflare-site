import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  SiBlazor,
  SiDotnet,
  SiMqtt,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { caseStudies } from "../data/caseStudies";

const stackContent: Record<string, React.ReactNode> = {
  budgetapp: (
    <>
      <SiTypescript className="text-[#3178C6]" title="TypeScript" />
      <SiReact className="text-[#61DAFB]" title="React" />
      <SiNextdotjs className="text-white" title="Next.js" />
      <span className="text-pink-400 text-xs font-semibold">Prisma</span>
      <SiPostgresql className="text-[#336791]" title="PostgreSQL" />
      <SiTailwindcss className="text-[#38BDF8]" title="Tailwind CSS" />
      <SiVercel className="text-white" title="Vercel" />
    </>
  ),
  catfacts: (
    <>
      <SiTypescript className="text-[#3178C6]" title="TypeScript" />
      <SiReact className="text-[#61DAFB]" title="React" />
      <SiNextdotjs className="text-white" title="Next.js" />
      <SiTailwindcss className="text-[#38BDF8]" title="Tailwind CSS" />
    </>
  ),
  solarixo: (
    <>
      <SiTypescript className="text-[#3178C6]" title="TypeScript" />
      <SiReact className="text-[#61DAFB]" title="React" />
      <SiNextdotjs className="text-white" title="Next.js" />
      <SiTailwindcss className="text-[#38BDF8]" title="Tailwind CSS" />
      <SiVercel className="text-white" title="Vercel" />
    </>
  ),
  bms: (
    <>
      <SiDotnet className="text-[#7C3AED]" title=".NET" />
      <SiPostgresql className="text-[#336791]" title="PostgreSQL" />
      <span className="text-pink-400 text-xs font-semibold">C#</span>
      <SiBlazor className="text-[#A020F0]" title="Blazor" />
      <SiMqtt className="text-[#FF7A00]" title="MQTT" />
    </>
  ),
  pythonService: (
    <>
      <SiPython className="text-[#3776AB]" title="Python" />
      <span className="text-pink-400 text-xs font-semibold">API</span>
      <span className="text-pink-400 text-xs font-semibold">Service</span>
      <span className="text-pink-400 text-xs font-semibold">Image Processing</span>
    </>
  ),
};

const CaseStudies: React.FC = () => {
  const { t } = useTranslation();
  const groupedStudies = {
    commercial: caseStudies.filter((study) => study.badge === "commercial"),
    own: caseStudies.filter((study) => study.badge === "own"),
  };

  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
            {t("caseStudies.eyebrow")}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#F5F7FA] mb-5">
            {t("caseStudies.heading")}
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {t("caseStudies.description")}
          </p>
        </motion.div>

        {(["commercial", "own"] as const).map((groupKey) => (
          <div key={groupKey} className="mb-14 last:mb-0">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-pink-500/40 to-transparent" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/75">
                {t(`caseStudies.groups.${groupKey}`)}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-pink-500/40 to-transparent" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {groupedStudies[groupKey].map((study, index) => (
                <motion.div
                  key={study.key}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-pink-500/60 hover:bg-white/8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-400">
                        <study.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-[0.3em] text-pink-400">
                          {t(`caseStudies.items.${study.key}.label`)}
                        </span>
                        <h3 className="mt-2 text-2xl font-semibold text-[#F5F7FA]">
                          {t(`caseStudies.items.${study.key}.title`)}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-300">
                      {t(`caseStudies.badges.${study.badge}`)}
                    </span>
                  </div>

                  <p className="mt-5 text-gray-300 leading-relaxed">
                    {t(`caseStudies.items.${study.key}.description`)}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-base">
                    {stackContent[study.stack]}
                  </div>

                  {study.href ? (
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pink-400 transition group-hover:text-pink-300"
                    >
                      {t("caseStudies.cta")}
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <a
                      href={study.internalPath}
                      className="mt-6 inline-flex items-center gap-2 rounded-md border border-pink-500 px-4 py-2 text-sm font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white"
                    >
                      {t("caseStudies.commercialNote")}
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
