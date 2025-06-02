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

      <div className="space-y-12 max-w-6xl mx-auto text-left">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl text-pink-500 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 text-pink-500 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
