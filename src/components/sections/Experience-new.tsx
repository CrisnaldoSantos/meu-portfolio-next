"use client";

import SessionTitle from "../structure/section-title";
import { Experience as ExperienceType } from "../../services/types";

interface ExperienceProps {
  experienceData?: ExperienceType[] | null;
}

const Experience = ({ experienceData = [] }: ExperienceProps) => {
  const sortedExperiences =
    experienceData?.sort((a, b) => b.order - a.order) || [];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <SessionTitle sectionNumber="02" title="Experiência Profissional" />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha vertical da timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>

            {sortedExperiences.map((experience) => (
              <div key={experience.id} className="relative mb-12 last:mb-0">
                {/* Marcador da timeline */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-navy z-10"></div>

                {/* Card da experiência */}
                <div className="ml-20">
                  <div className="bg-light-navy rounded-lg p-6 hover:bg-opacity-80 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-lightest-slate mb-1">
                          {experience.position}
                        </h3>
                        <h4 className="text-accent font-medium text-lg">
                          {experience.company}
                        </h4>
                      </div>
                      <div className="text-slate font-fira text-sm mt-2 lg:mt-0">
                        {experience.startDate} -{" "}
                        {experience.endDate || "Presente"}
                      </div>
                    </div>

                    <p className="text-slate mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {experience.technologies &&
                      experience.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-navy text-accent text-xs font-fira rounded-full border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
