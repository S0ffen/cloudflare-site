import { motion } from "framer-motion";
const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 text-white text-center">
      <h2 className="text-5xl font-light mb-12">About My</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16 max-w-7xl mx-auto">
        {/* Past */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <h3 className="text-2xl text-pink-500 mb-4">Past</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            I first discovered programming at 16 — it started as a hobby, but
            quickly turned into a passion. The ability to build something from
            nothing using just code captivated me early on. Over time, I
            sharpened my skills by building websites, experimenting with
            different technologies, and pushing myself to solve increasingly
            complex problems.
          </p>
        </motion.div>
        {/* Present */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <h3 className="text-2xl text-pink-500 mb-4">Present</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            Nowadays, I’m working as a Software Engineer, focusing on the
            development of Building Management Systems (BMS) for applications
            like heat pump control and building automation. My daily stack
            includes C#, Blazor, Javascript, .NET, PostreSQL, MQTT — while on
            the frontend, I continuously improve my skills with React, Next.js,
            Javascript and Typescript. I actively contribute to internal tools
            and open-source side projects, always aiming to deliver clean,
            scalable, and maintainable code.
          </p>
        </motion.div>

        {/* Future */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="w-full md:w-1/3"
        >
          <h3 className="text-2xl text-pink-500 mb-4">Future</h3>
          <p className="text-lg text-gray-300 max-w-md mx-auto">
            I’m driven by constant learning and challenges that push me out of
            my comfort zone. Looking ahead, I see myself deepening my expertise
            in full-stack development, exploring cloud-native systems, and
            contributing to products that solve real-world problems. My goal is
            simple: to create software that’s not just functional, but
            impactful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
