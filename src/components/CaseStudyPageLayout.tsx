import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type Props = {
  badge: "commercial" | "own";
  itemKey: "bms" | "qrReader" | "photoExif";
  stack: React.ReactNode;
};

const CaseStudyPageLayout: React.FC<Props> = ({ badge, itemKey, stack }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0f0826] px-6 py-24 text-[#F5F7FA]">
      <div className="mx-auto max-w-5xl">
        <a
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 transition hover:text-pink-300"
        >
          <FaArrowLeft className="h-3.5 w-3.5" />
          {t("caseStudyDetail.back")}
        </a>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-400">
                {t(`caseStudies.items.${itemKey}.label`)}
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-light">
                {t(`caseStudies.items.${itemKey}.title`)}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                {t(`caseStudies.items.${itemKey}.description`)}
              </p>
            </div>

            <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">
              {t(`caseStudies.badges.${badge}`)}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-base">
            {stack}
          </div>
        </motion.section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
              {t("caseStudyDetail.problemTitle")}
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              {t("caseStudyDetail.problemHeading")}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              {t(`caseStudyDetail.items.${itemKey}.problem`)}
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
              {t("caseStudyDetail.solutionTitle")}
            </p>
            <h2 className="mt-4 text-2xl font-semibold">
              {t("caseStudyDetail.solutionHeading")}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              {t(`caseStudyDetail.items.${itemKey}.solution`)}
            </p>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
            {t("caseStudyDetail.outcomeTitle")}
          </p>
          <h2 className="mt-4 text-2xl font-semibold">
            {t("caseStudyDetail.outcomeHeading")}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            {t(`caseStudyDetail.items.${itemKey}.outcome`)}
          </p>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyPageLayout;
