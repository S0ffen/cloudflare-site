import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      {/* Lewa strona - tekst */}
      <div className="w-full md:w-[50%] lg:w-[55%] text-center md:text-left space-y-4">
        <p className="text-lg text-gray-400">Hello! I am</p>
        <h1 className="text-6xl font-bold leading-tight">Your Name</h1>
        <h2 className="text-2xl text-pink-500">
          Software Engineer • UI/UX Designer
        </h2>
        <p className="text-gray-300 max-w-xl">
          I'm a passionate Software Engineer focused on building beautiful and
          user-friendly applications. I love UI/UX design and front-end
          development.
        </p>

        {/* Przycisk do pobrania CV */}
        <motion.a
          href="/resume.pdf"
          className="inline-block border-2 border-pink-500 text-pink-500 px-6 py-3 text-lg font-bold rounded-md hover:bg-pink-500 hover:text-white transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Get my resume
        </motion.a>
      </div>

      {/* Prawa strona - Zdjęcie */}
      <div className="relative w-full md:w-[50%] lg:w-[45%] flex justify-center md:justify-center">
        {/* Neonowy cień za zdjęciem */}
        <motion.div
          className="absolute w-[280px] h-[280px] bg-pink-500 opacity-30 blur-3xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Neonowa ramka */}
        <motion.div
          className="relative border-4 border-pink-500 p-2 rounded-lg shadow-lg"
          initial={{ rotate: 15 }}
          animate={{ rotate: -5 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="pobrane.jfif" // Podmień na własne zdjęcie
            alt="Your Name"
            className="w-[280px] h-[280px] object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
