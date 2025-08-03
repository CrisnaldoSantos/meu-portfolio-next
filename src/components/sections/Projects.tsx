"use client";
import Link from "next/link";
import { FolderOpen, Github, ExternalLink } from "lucide-react";
import SessionTitle from "../structure/section-title";
import { Project } from "../../services/types";

interface ProjectsProps {
  projectsData?: Project[] | null;
}

const Projects = ({ projectsData = [] }: ProjectsProps) => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SessionTitle sectionNumber="04" title="Projetos" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData && projectsData.length > 0 ? (
            projectsData.map((project, index) => (
              <div
                key={project.id || index}
                className="bg-light-navy rounded-lg overflow-hidden group flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <FolderOpen className="w-7 h-7 text-accent" />
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          className="text-slate hover:text-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-6 h-6" />
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          className="text-slate hover:text-accent transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </Link>
                      )}
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
            ))
          ) : (
            <p className="text-slate text-center col-span-full">
              Nenhum projeto encontrado no momento.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
