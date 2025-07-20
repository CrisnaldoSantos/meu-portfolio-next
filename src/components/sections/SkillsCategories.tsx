"use client";

import SessionTitle from "../structure/section-title";
import HookValidateGuard from "../guards/hook-validate-guard";
import { useSkillsData } from "../../hooks/useSkillsData";

const SkillsCategories = () => {
  const { skillsData, loading, error } = useSkillsData();

  return (
    <section id="skills-categories" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <SessionTitle sectionNumber="03" title="Habilidades" />

        <HookValidateGuard loading={loading} error={error}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {skillsData.map((category, index) => (
                <div
                  key={category.id || index}
                  className="bg-light-navy rounded-lg p-6 hover:bg-opacity-80 transition-all duration-300 border border-slate-700/30"
                >
                  <h3 className="text-xl font-bold text-accent mb-4 font-fira border-b border-accent/20 pb-2">
                    {category.title}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center group">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-slate group-hover:text-lightest-slate transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Seção adicional com estatísticas */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent font-fira mb-2">
                  {skillsData.length}+
                </div>
                <div className="text-slate text-sm uppercase tracking-wide">
                  Categorias
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent font-fira mb-2">
                  {skillsData[0]?.skills.length}+
                </div>
                <div className="text-slate text-sm uppercase tracking-wide">
                  Linguagens
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent font-fira mb-2">
                  6+
                </div>
                <div className="text-slate text-sm uppercase tracking-wide">
                  Anos de Experiência
                </div>
              </div>
            </div>
          </div>
        </HookValidateGuard>
      </div>
    </section>
  );
};

export default SkillsCategories;
