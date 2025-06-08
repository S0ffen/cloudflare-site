import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-center gap-x-10 px-6 md:px-20"
    >
      {/* Lewa strona - tekst */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full md:w-[50%] lg:w-[55%] text-center md:text-left space-y-4"
      >
        <p className="text-sm md:text-base lg:text-lg text-gray-400">
          Hello! I am
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Soffen
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl text-pink-500">
          Software Engineer • Web developer
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto md:mx-0 ">
          I’m a software engineer with a degree in programming, working daily on
          the development of Building Management Systems (BMS) using tools like
          DevExpress, Blazor, C#, PostgreSQL, Javascript, and .NET. In my free
          time, I focus on creating modern web applications with React, Next.js,
          and Node.js — exploring new technologies, improving performance, and
          building clean user experiences. Below you’ll find a selection of my
          personal projects — each one a reflection of my skills, curiosity, and
          passion for web development.
        </p>

        <motion.a
          href="/resume.pdf"
          className="inline-block border-2 border-pink-500 text-pink-500 px-6 py-3 text-base md:text-lg font-bold rounded-md hover:bg-pink-500 hover:text-white transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Get my resume
        </motion.a>
      </motion.div>

      {/* Prawa strona - Zdjęcie */}
      <div className="relative  flex justify-center md:justify-center">
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
