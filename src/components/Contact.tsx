import { FaFilePdf, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="relative py-20 px-6 text-[#F5F7FA]">
      <h2 className="text-5xl font-light text-center mb-12">
        {t("contact.heading")}
      </h2>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-lg text-white font-light">
        <FaMailBulk />
        <a
          href="mailto:adrian.tetlak@gmail.com"
          className="hover:text-pink-500 transition"
        >
          adrian.tetlak@gmail.com
        </a>
        <FaGithub />
        <a
          href="https://github.com/S0ffen"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition"
        >
          GitHub
        </a>
        <FaLinkedin />
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition"
        >
          LinkedIn
        </a>
        <FaFilePdf />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
