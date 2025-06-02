import { FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-5xl font-light text-center mb-16">Projects</h2>

      {/* Projekt pojedynczy */}
      <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto">
        {/* Lewa strona: obrazek z efektem neonowym */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute w-72 h-48 bg-pink-500 opacity-30 blur-3xl rounded-lg"></div>
          <div className="relative border-4 border-pink-500 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/logo.png" // <- podmień na własny obraz
              alt="Project thumbnail"
              className="w-72 h-48 object-cover"
            />
          </div>
        </div>

        {/* Prawa strona: opis */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="text-3xl font-semibold">NosApp</h3>
          <p className="text-sm text-gray-400">
            Made with:{" "}
            <span className="text-pink-500">
              TypeScript Next.JS Vercel TailwindCSS React Firebase
            </span>
          </p>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            bibendum lorem a suscipit cursus. This is where you explain your
            project in 2–4 sentences.
          </p>

          {/* Link do projektu */}
          <a
            href="https://nostale-app.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-md hover:bg-pink-500 hover:text-white transition"
          >
            <FaExternalLinkAlt />
            Live
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
