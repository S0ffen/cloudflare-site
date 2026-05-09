import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-center gap-x-10 px-6 md:px-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full md:w-[50%] lg:w-[55%] text-center md:text-left space-y-4"
      >
        <p className="text-sm md:text-base lg:text-lg text-gray-400">{t("hero.hello")}</p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#F5F7FA]">
          Adrian Tetłak
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl text-pink-500">
          Fullstack Developer • Web developer
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto md:mx-0">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center md:justify-start pt-2">
          <motion.a
            href="/resume.pdf"
            className="inline-block border-2 border-pink-500 text-pink-500 px-6 py-3 text-base md:text-lg font-bold rounded-md hover:bg-pink-500 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {t("hero.button")}
          </motion.a>

          <motion.a
            href="#case-studies"
            className="inline-block border-2 border-pink-500/45 bg-pink-500/10 text-pink-200 px-6 py-3 text-base md:text-lg font-bold rounded-md hover:border-pink-400/70 hover:bg-pink-500/18 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {t("hero.caseStudiesButton")}
          </motion.a>
        </div>
      </motion.div>

      <div className="relative flex justify-center md:justify-center">
        <motion.div
          className="absolute w-[280px] h-[280px] bg-pink-500 opacity-30 blur-3xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="relative border-4 border-pink-500 p-2 rounded-lg shadow-lg"
          initial={{ rotate: 15 }}
          animate={{ rotate: -5 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/my-photo.png"
            alt="Adrian Tetłak"
            className="w-[280px] h-[280px] object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
