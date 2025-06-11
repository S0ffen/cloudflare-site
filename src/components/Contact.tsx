import { FaFilePdf, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 text-white text-center">
      <h2 className="text-5xl font-light mb-16">Want To</h2>

      {/* Sekcje kontaktowe */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 max-w-7xl mx-auto mb-12">
        {/* Job Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 space-y-4"
        >
          <h3 className="text-2xl text-pink-500 font-medium">
            offer job opportunity?
          </h3>
          <p className="text-gray-300 text-base leading-relaxed max-w-xs mx-auto">
            I am open to discussing potential job opportunities or
            collaborations. With experience in web development and software
            engineering, I am interested in roles that allow me to work on
            exciting and challenging projects. If you have a project or role in
            mind, feel free to reach out and let’s discuss!
          </p>
        </motion.div>

        {/* Connect */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 space-y-4"
        >
          <h3 className="text-2xl text-pink-500 font-medium">Connect?</h3>
          <p className="text-gray-300 text-base leading-relaxed max-w-xs mx-auto">
            Networking is key in the tech industry, and I’m always looking to
            meet new people and expand my professional circle. Whether you’re a
            fellow developer, designer, or entrepreneur, I’d love to chat and
            learn more about your work.
          </p>
        </motion.div>

        {/* Build something */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3 space-y-4"
        >
          <h3 className="text-2xl text-pink-500 font-medium">
            Build something?
          </h3>
          <p className="text-gray-300 text-base leading-relaxed max-w-xs mx-auto">
            I have a passion for developing innovative web applications that
            solve complex problems. Whether it’s building a custom e-commerce
            platform or a cutting-edge app, I’m always ready for a challenge.
            Let’s create something amazing together!
          </p>
        </motion.div>
      </div>

      {/* Linki social */}
      <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-white font-light">
        <FaMailBulk />
        <a
          href="mailto:adrian.tetlak@gmail.com"
          className="hover:text-pink-500 transition"
        >
          Email
        </a>
        <FaGithub />
        <a
          href="https://github.com/S0ffen"
          target="_blank"
          className="hover:text-pink-500 transition"
        >
          GitHub
        </a>
        <FaLinkedin />
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="hover:text-pink-500 transition"
        >
          LinkedIn
        </a>
        <FaFilePdf />
        <a
          href="/resume.pdf"
          target="_blank"
          className="hover:text-pink-500 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
