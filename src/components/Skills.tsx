import { motion } from "framer-motion";

const skills = {
  "Front End": [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Bootstrap",
    "Tailwind",
    "Blazor",
    "Vite",
    "Motion-Framer",
  ],
  Backend: [
    "Node",
    "Prisma",
    "Blazor",
    ".NET",
    "C#",
    "PostgreSQL",
    "Express",
    "Next.js",
    "Rest API",
    "Firebase",
  ],
  Miscellaneous: ["Github", "Highcharts", "Cypress", "Docker", "DevExpress"],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-5xl font-light mb-12 text-center">Skills</h2>

      <div className="space-y-12 max-w-7xl mx-auto text-left">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl text-pink-500 mb-4">{category}</h3>

            <div className="flex flex-wrap gap-4">
              {items.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1, // każdy kolejny item ma +0.05s opóźnienia
                  }}
                  className="bg-slate-800 text-pink-500 px-4 py-2 rounded-md text-xl font-medium shadow-sm hover:scale-105 transition-transform"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
