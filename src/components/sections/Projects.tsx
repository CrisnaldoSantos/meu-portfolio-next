import { Session } from "inspector/promises";
import Link from "next/link";
import SessionTitle from "../structure/section-title";

const Projects = () => {
  const projects = [
    {
      title: "Nome do Projeto 1",
      description:
        "Uma breve descrição do projeto. Pode falar sobre o propósito, os desafios e as tecnologias utilizadas. Mantenha conciso e direto.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Nome do Projeto 2",
      description:
        "Uma breve descrição do projeto. Pode falar sobre o propósito, os desafios e as tecnologias utilizadas. Mantenha conciso e direto.",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Nome do Projeto 3",
      description:
        "Uma breve descrição do projeto. Pode falar sobre o propósito, os desafios e as tecnologias utilizadas. Mantenha conciso e direto.",
      technologies: ["TypeScript", "Vue.js", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SessionTitle sectionNumber="04" title="Projetos" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-light-navy rounded-lg overflow-hidden group flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <svg
                    className="w-10 h-10 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5-13.5h16.5M3.75 6h16.5M3.75 18h16.5"
                    />
                  </svg>
                  <div className="flex space-x-3">
                    <Link
                      href={project.githubUrl}
                      className="text-slate hover:text-accent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.73c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </Link>
                    <Link
                      href={project.liveUrl}
                      className="text-slate hover:text-accent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-lightest-slate group-hover:text-accent transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-slate text-sm">{project.description}</p>
              </div>
              <footer className="p-6 pt-0 font-fira text-xs text-slate flex flex-wrap gap-x-4 gap-y-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
