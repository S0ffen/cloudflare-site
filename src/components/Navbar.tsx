import { useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Funkcja do płynnego przewijania do sekcji
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 p-4 shadow-md bg-gradient-to-l from-[#880e65] to-[#0a0324ce] text-[#f1f5f9]
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <motion.h1
          className="text-2xl font-bold cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          XXXXX XXXXX
        </motion.h1>
        {/* MENU - Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg mx-auto">
          {["About", "Skills", "Projects", "Contact", "Resume"].map(
            (item, i) => (
              <motion.li
                key={i}
                className="cursor-pointer hover:text-pink-400 transition-all"
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(item.toLowerCase())} // Przenosi do sekcji
              >
                {item}
              </motion.li>
            )
          )}
        </ul>

        {/* Hamburger menu (Mobile) */}
        <div className="md:hidden flex items-center">
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
          {["About", "Skills", "Projects", "Contact", "Resume"].map(
            (item, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-pink-400 transition-all"
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false); // Zamknij menu na mobile po kliknięciu
                }}
              >
                {item}
              </li>
            )
          )}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
