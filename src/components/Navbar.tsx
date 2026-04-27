import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FlagPL: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 16"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="8" y="0" fill="#FFFFFF" />
    <rect width="24" height="8" y="8" fill="#D52B1E" />
    <rect
      width="24"
      height="16"
      fill="none"
      stroke="currentColor"
      opacity="0.2"
    />
  </svg>
);

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const { t, i18n } = useTranslation();
  const activeLang = i18n.language?.startsWith("pl") ? "pl" : "en";
  const langButtonClass = (lang: "pl" | "en") =>
    `inline-flex items-center justify-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] transition
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
    ${
      activeLang === lang
        ? "border-white/50 bg-white/20 text-white"
        : "border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10 hover:text-pink-300"
    }`;

  const navKeys = ["about", "skills", "caseStudies", "contact", "resume"];

  // Funkcja do płynnego przewijania do sekcji
  const scrollToSection = (id: string) => {
    if (id === "resume") {
      window.open("/resume.pdf", "_blank", "noopener,noreferrer");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 p-4   bg-[#140826]/70 backdrop-blur-md
    border-b border-white/20
    text-[#F5F7FA]
      `}
    >
      <div className="mr-15 ml-15 flex items-center justify-between">
        {/* LEFT - logo */}
        <motion.h1
          className="text-2xl font-bold cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection("home")}
        >
          Adrian Tetłak
        </motion.h1>

        {/* RIGHT - desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          {navKeys.map((key) => (
            <motion.li
              key={key}
              className="cursor-pointer hover:text-pink-400 transition-all"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection(key)}
            >
              {t(`nav.${key}`)}
            </motion.li>
          ))}
          <li className="ml-4 flex items-center gap-2">
            <button
              className={langButtonClass("pl")}
              onClick={() => i18n.changeLanguage("pl")}
              aria-pressed={activeLang === "pl"}
              aria-label="Switch language to Polish"
              title="Polski"
            >
              <FlagPL className="h-3 w-4" />
              PL
            </button>
            <button
              className={langButtonClass("en")}
              onClick={() => i18n.changeLanguage("en")}
              aria-pressed={activeLang === "en"}
              aria-label="Switch language to English"
              title="English"
            >
              <img
                src="/flag_EN_big.jpg"
                className="h-3 w-4 object-cover"
                alt=""
                aria-hidden="true"
              />
              EN
            </button>
          </li>
        </ul>

        {/* Hamburger menu (Mobile) */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={toggleMobileMenu} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.ul
          className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navKeys.map((key, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-pink-400 transition-all"
              onClick={() => {
                scrollToSection(key);
                setMobileMenuOpen(false); // Zamknij menu na mobile po kliknięciu
              }}
            >
              {t(`nav.${key}`)}
            </li>
          ))}
          <li className="pt-2 flex gap-2">
            <button
              className={langButtonClass("pl")}
              onClick={() => i18n.changeLanguage("pl")}
              aria-pressed={activeLang === "pl"}
              aria-label="Switch language to Polish"
              title="Polski"
            >
              <FlagPL className="h-3 w-4" />
              PL
            </button>
            <button
              className={langButtonClass("en")}
              onClick={() => i18n.changeLanguage("en")}
              aria-pressed={activeLang === "en"}
              aria-label="Switch language to English"
              title="English"
            >
              <img
                src="/flag_EN_big.jpg"
                className="h-3 w-4 object-cover"
                alt=""
                aria-hidden="true"
              />
              EN
            </button>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
